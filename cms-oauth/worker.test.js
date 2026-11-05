// Local tests for the login proxy. Run from this folder with:  node --test
// They need no network and no secrets: GitHub's token endpoint is replaced by a stub.
import { test, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import worker from "./worker.js";

const ORIGIN = "https://cms-auth.cadillo-lab.workers.dev";
const ENV = {
  GITHUB_CLIENT_ID: "Iv1.test-client-id",
  GITHUB_CLIENT_SECRET: "test-client-secret",
  ALLOWED_ORIGINS: "https://cadillo-lab.github.io",
  ALLOW_LOCALHOST: "true",
};

const get = (path, headers = {}, env = ENV) =>
  worker.fetch(new Request(ORIGIN + path, { method: "GET", headers }), env);

const realFetch = globalThis.fetch;
let tokenCalls;
beforeEach(() => {
  tokenCalls = [];
});
afterEach(() => {
  globalThis.fetch = realFetch;
});

function stubGitHub(responseBody) {
  globalThis.fetch = async (url, init) => {
    tokenCalls.push({ url: String(url), init });
    return new Response(JSON.stringify(responseBody), { headers: { "Content-Type": "application/json" } });
  };
}

async function startLogin(path = "/auth?provider=github&scope=public_repo", headers = {}) {
  const res = await get(path, headers);
  const state = new URL(res.headers.get("Location")).searchParams.get("state");
  return { res, state, cookie: `decap_oauth_state=${state}` };
}

/** Runs the popup's inline script against a fake window and records postMessage calls. */
function runPopupScript(html) {
  const script = html.match(/<script nonce="[0-9a-f]{32}">([\s\S]*?)<\/script>/)[1];
  const listeners = [];
  const posted = [];
  const sandbox = {
    window: {
      opener: { postMessage: (data, target) => posted.push({ data, target }) },
      addEventListener: (type, fn) => listeners.push(fn),
      removeEventListener: () => listeners.length = 0,
    },
    document: { getElementById: () => ({ textContent: "" }) },
  };
  vm.runInNewContext(script, sandbox);
  return { posted, deliver: (origin) => listeners.slice().forEach((fn) => fn({ data: "authorizing:github", origin })) };
}

test("root and unknown paths", async () => {
  assert.equal((await get("/")).status, 200);
  assert.equal((await get("/nope")).status, 404);
  const post = await worker.fetch(new Request(ORIGIN + "/auth", { method: "POST" }), ENV);
  assert.equal(post.status, 405);
});

test("/auth refuses to run without the secrets", async () => {
  const res = await get("/auth?provider=github", {}, { ALLOWED_ORIGINS: ENV.ALLOWED_ORIGINS });
  assert.equal(res.status, 500);
  assert.match(await res.text(), /GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET not set/);
});

test("/auth redirects to GitHub with state, cookie and the callback URL", async () => {
  const { res, state } = await startLogin("/auth?provider=github&scope=repo");
  assert.equal(res.status, 302);
  const location = new URL(res.headers.get("Location"));
  assert.equal(location.origin + location.pathname, "https://github.com/login/oauth/authorize");
  assert.equal(location.searchParams.get("client_id"), ENV.GITHUB_CLIENT_ID);
  assert.equal(location.searchParams.get("redirect_uri"), ORIGIN + "/callback");
  assert.equal(location.searchParams.get("scope"), "repo");
  assert.match(state, /^[0-9a-f]{32}$/);
  const cookie = res.headers.get("Set-Cookie");
  assert.match(cookie, new RegExp(`^decap_oauth_state=${state}; Path=/callback; Max-Age=600; HttpOnly; Secure; SameSite=Lax$`));
  assert.equal(res.headers.get("Cache-Control"), "no-store");
});

test("/auth defaults to the public_repo scope and rejects other scopes or providers", async () => {
  const { res } = await startLogin("/auth?provider=github");
  assert.equal(new URL(res.headers.get("Location")).searchParams.get("scope"), "public_repo");
  assert.equal((await get("/auth?provider=github&scope=admin:org")).status, 400);
  assert.equal((await get("/auth?provider=gitlab")).status, 400);
  assert.equal((await get("/auth")).status, 400);
});

test("/auth checks the Referer when the browser sends one", async () => {
  assert.equal((await get("/auth?provider=github", { Referer: "https://cadillo-lab.github.io/preview/admin/" })).status, 302);
  assert.equal((await get("/auth?provider=github", { Referer: "http://localhost:3000/admin/index.html" })).status, 302);
  assert.equal((await get("/auth?provider=github", { Referer: "https://evil.example/" })).status, 403);
  const noLocalhost = { ...ENV, ALLOW_LOCALHOST: "false" };
  assert.equal((await get("/auth?provider=github", { Referer: "http://localhost:3000/" }, noLocalhost)).status, 403);
});

test("/callback with a matching state exchanges the code and hands the token only to allowed origins", async () => {
  const { state, cookie } = await startLogin();
  stubGitHub({ access_token: "gho_testtoken123", token_type: "bearer", scope: "public_repo" });

  const res = await get(`/callback?code=abc123&state=${state}`, { Cookie: cookie });
  assert.equal(res.status, 200);
  assert.equal(tokenCalls.length, 1);
  assert.equal(tokenCalls[0].url, "https://github.com/login/oauth/access_token");
  const sent = JSON.parse(tokenCalls[0].init.body);
  assert.deepEqual(sent, {
    client_id: ENV.GITHUB_CLIENT_ID,
    client_secret: ENV.GITHUB_CLIENT_SECRET,
    code: "abc123",
    redirect_uri: ORIGIN + "/callback",
  });

  const html = await res.text();
  assert.match(res.headers.get("Set-Cookie"), /^decap_oauth_state=; Path=\/callback; Max-Age=0;/);
  const nonce = res.headers.get("Content-Security-Policy").match(/'nonce-([0-9a-f]{32})'/)[1];
  assert.ok(html.includes(`<script nonce="${nonce}">`), "script carries the CSP nonce");
  assert.ok(!/gho_testtoken123/.test(html.split("<script")[0]), "token is not in the visible body");

  const popup = runPopupScript(html);
  assert.deepEqual(popup.posted, [{ data: "authorizing:github", target: "*" }], "first handshake message carries no secret");

  popup.deliver("https://evil.example");
  assert.equal(popup.posted.length, 1, "nothing is sent to a site that is not allowed");

  popup.deliver("https://cadillo-lab.github.io");
  assert.equal(popup.posted.length, 2);
  assert.equal(popup.posted[1].target, "https://cadillo-lab.github.io");
  assert.equal(popup.posted[1].data, 'authorization:github:success:{"token":"gho_testtoken123","provider":"github"}');

  popup.deliver("https://cadillo-lab.github.io");
  assert.equal(popup.posted.length, 2, "the token is handed over once only");
});

test("/callback accepts a localhost opener when ALLOW_LOCALHOST is on, and not otherwise", async () => {
  for (const [allow, expectedPosts] of [["true", 2], ["false", 1]]) {
    const env = { ...ENV, ALLOW_LOCALHOST: allow };
    const { state, cookie } = await startLogin();
    stubGitHub({ access_token: "gho_local" });
    const res = await worker.fetch(new Request(`${ORIGIN}/callback?code=c&state=${state}`, { headers: { Cookie: cookie } }), env);
    const popup = runPopupScript(await res.text());
    popup.deliver("http://localhost:4174");
    assert.equal(popup.posted.length, expectedPosts, `ALLOW_LOCALHOST=${allow}`);
  }
});

test("/callback rejects a missing or mismatching state without calling GitHub", async () => {
  stubGitHub({ access_token: "should-not-be-used" });
  const { state, cookie } = await startLogin();
  for (const [path, headers] of [
    [`/callback?code=abc&state=${state}`, {}],
    [`/callback?code=abc&state=${"0".repeat(32)}`, { Cookie: cookie }],
    ["/callback?state=" + state, { Cookie: cookie }],
  ]) {
    const res = await get(path, headers);
    assert.equal(res.status, 400);
    const html = await res.text();
    assert.ok(!html.includes("should-not-be-used"));
    const popup = runPopupScript(html);
    popup.deliver("https://cadillo-lab.github.io");
    assert.match(popup.posted[1].data, /^authorization:github:error:\{"message":"The login session expired/);
  }
  assert.equal(tokenCalls.length, 0);
});

test("/callback reports GitHub's own errors without leaking anything", async () => {
  const { state, cookie } = await startLogin();
  stubGitHub({ error: "bad_verification_code", error_description: "The code passed is incorrect or expired." });
  const res = await get(`/callback?code=bad&state=${state}`, { Cookie: cookie });
  assert.equal(res.status, 400);
  const html = await res.text();
  assert.ok(!html.includes(ENV.GITHUB_CLIENT_SECRET));
  assert.match(html, /The code passed is incorrect or expired\./);
  const popup = runPopupScript(html);
  popup.deliver("https://cadillo-lab.github.io");
  assert.deepEqual(JSON.parse(popup.posted[1].data.replace(/^authorization:github:error:/, "")), {
    message: "GitHub did not issue a token: The code passed is incorrect or expired.",
  });

  const denied = await get("/callback?error=access_denied&error_description=The+user+has+denied+your+application+access.", { Cookie: cookie });
  assert.equal(denied.status, 400);
  assert.match(await denied.text(), /denied your application access/);
});

test("messages embedded in the page cannot break out of the script tag", async () => {
  const { state, cookie } = await startLogin();
  stubGitHub({ error: "x", error_description: "</script><script>alert(1)</script>" });
  const html = await (await get(`/callback?code=bad&state=${state}`, { Cookie: cookie })).text();
  assert.equal((html.match(/<script/g) || []).length, 1, "exactly one script tag");
  assert.ok(html.includes("\\u003c/script>"), "the injected text is escaped inside the script");
  assert.ok(html.includes("&lt;/script&gt;"), "and escaped in the visible text");
});
