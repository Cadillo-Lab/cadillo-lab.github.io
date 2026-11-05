/**
 * GitHub login proxy for the Decap CMS admin of cadillo-lab.github.io,
 * written as a Cloudflare Worker (ES module format).
 *
 * Why this exists: Decap CMS runs entirely in the browser, but GitHub's OAuth
 * flow needs a server-side secret to turn a one-time login "code" into an access
 * token. This Worker holds that secret and does nothing else. It stores no data.
 *
 * The flow (three GET requests, all made by the editor's own browser):
 *   1. Decap opens a popup at   https://<worker>/auth?provider=github&scope=...
 *      -> we set a random "state" cookie and send the popup to GitHub's authorize page.
 *   2. GitHub sends the popup to https://<worker>/callback?code=...&state=...
 *      -> we check the state cookie, exchange the code for a token on the server
 *         side (this is where GITHUB_CLIENT_SECRET is used) and answer with a tiny
 *         HTML page.
 *   3. That page hands the token to the Decap window that opened the popup with
 *      window.postMessage, and only if that window's origin is on the allow list.
 *
 * Settings (never written into this file):
 *   GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET  secrets:  npx wrangler@4 secret put <NAME>
 *   ALLOWED_ORIGINS                          wrangler.toml [vars], comma-separated origins
 *   ALLOW_LOCALHOST                          wrangler.toml [vars], "true" or "false"
 */

const STATE_COOKIE = "decap_oauth_state";
const ALLOWED_SCOPES = new Set(["repo", "public_repo"]);
const DEFAULT_ALLOWED_ORIGINS = ["https://cadillo-lab.github.io"];
const LOCALHOST_ORIGIN = /^http:\/\/(localhost|127\.0\.0\.1)(:\d{1,5})?$/;
const GITHUB_AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
const GITHUB_TOKEN_URL = "https://github.com/login/oauth/access_token";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method !== "GET") return textResponse("Method not allowed", 405);
    switch (url.pathname) {
      case "/":
        return textResponse(
          "Decap CMS GitHub login proxy for cadillo-lab.github.io. Endpoints: /auth and /callback.",
          200
        );
      case "/auth":
        return handleAuth(request, url, env);
      case "/callback":
        return handleCallback(request, url, env);
      default:
        return textResponse("Not found", 404);
    }
  },
};

/** Step 1: send the popup to GitHub with a fresh anti-forgery state. */
function handleAuth(request, url, env) {
  const missing = missingSecrets(env);
  if (missing) return textResponse(`Server not configured: ${missing} not set`, 500);
  if (url.searchParams.get("provider") !== "github") {
    return textResponse("Only provider=github is supported", 400);
  }
  const scope = url.searchParams.get("scope") || "public_repo";
  if (!ALLOWED_SCOPES.has(scope)) return textResponse("Unsupported scope", 400);

  // Defence in depth: when the browser says which site opened the popup, it has to
  // be one of ours. (Browsers may omit the Referer; then this check is skipped and
  // the origin check in the final page still protects the token.)
  const referer = request.headers.get("Referer");
  if (referer && !originAllowed(originOf(referer), env)) {
    return textResponse("This login proxy only serves the Cadillo Lab website", 403);
  }

  const state = randomHex(16);
  const authorize = new URL(GITHUB_AUTHORIZE_URL);
  authorize.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  authorize.searchParams.set("redirect_uri", `${url.origin}/callback`);
  authorize.searchParams.set("scope", scope);
  authorize.searchParams.set("state", state);

  return new Response(null, {
    status: 302,
    headers: {
      Location: authorize.toString(),
      "Set-Cookie": `${STATE_COOKIE}=${state}; Path=/callback; Max-Age=600; HttpOnly; Secure; SameSite=Lax`,
      "Cache-Control": "no-store",
    },
  });
}

/** Step 2: verify the state, trade the code for a token, hand it to Decap. */
async function handleCallback(request, url, env) {
  const missing = missingSecrets(env);
  if (missing) return errorPage(env, `Server not configured: ${missing} not set`);

  const ghError = url.searchParams.get("error");
  if (ghError) {
    const description = url.searchParams.get("error_description") || ghError;
    return errorPage(env, `GitHub did not complete the login: ${description}`);
  }

  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookieState = readCookie(request.headers.get("Cookie") || "", STATE_COOKIE);
  if (!code || !state || !cookieState || !constantTimeEqual(state, cookieState)) {
    return errorPage(env, "The login session expired or did not match. Close this window and try again.");
  }

  let tokenData;
  try {
    const response = await fetch(GITHUB_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "cadillo-lab-cms-auth",
      },
      body: JSON.stringify({
        client_id: env.GITHUB_CLIENT_ID,
        client_secret: env.GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: `${url.origin}/callback`,
      }),
    });
    tokenData = await response.json();
  } catch (error) {
    return errorPage(env, "Could not reach GitHub to finish the login. Try again in a moment.");
  }

  if (!tokenData || typeof tokenData.access_token !== "string") {
    const reason = (tokenData && (tokenData.error_description || tokenData.error)) || "unknown error";
    return errorPage(env, `GitHub did not issue a token: ${reason}`);
  }
  return successPage(env, tokenData.access_token);
}

// ---------------------------------------------------------------------------
// The page that talks to the Decap window (the "handshake")
// ---------------------------------------------------------------------------

function successPage(env, token) {
  return handshakePage(env, {
    status: "success",
    payload: JSON.stringify({ token, provider: "github" }),
    bodyText: "Login complete. You can close this window.",
    httpStatus: 200,
  });
}

function errorPage(env, message) {
  // Decap wraps this object in its own error type and shows its "message".
  return handshakePage(env, {
    status: "error",
    payload: JSON.stringify({ message }),
    bodyText: `Login failed: ${message}`,
    httpStatus: 400,
  });
}

function handshakePage(env, { status, payload, bodyText, httpStatus }) {
  const nonce = randomHex(16);
  // Decap expects exactly "authorization:github:success:<json>" or
  // "authorization:github:error:<json>" from the popup.
  const message = `authorization:github:${status}:${payload}`;
  const script = String.raw`
(function () {
  var allowedOrigins = ${jsLiteral(allowedOrigins(env))};
  var allowLocalhost = ${allowLocalhostEnabled(env) ? "true" : "false"};
  var message = ${jsLiteral(message)};
  var localhostOrigin = /^http:\/\/(localhost|127\.0\.0\.1)(:\d{1,5})?$/;
  var statusEl = document.getElementById("status");

  function originAllowed(origin) {
    return allowedOrigins.indexOf(origin) !== -1 || (allowLocalhost && localhostOrigin.test(origin));
  }

  function receive(event) {
    // Decap answers our first message with the same string; its origin is the
    // site that opened this popup. The token only ever goes to an allowed site.
    if (event.data !== "authorizing:github" || !originAllowed(event.origin)) return;
    window.removeEventListener("message", receive, false);
    window.opener.postMessage(message, event.origin);
  }

  if (!window.opener) {
    statusEl.textContent = "This page only works as the login popup of the content editor.";
    return;
  }
  window.addEventListener("message", receive, false);
  window.opener.postMessage("authorizing:github", "*");
})();
`;
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<title>Cadillo Lab content editor login</title>
<style>body{font:16px system-ui,sans-serif;margin:3rem;color:#222}</style>
</head>
<body>
<p id="status">${escapeHtml(bodyText)}</p>
<script nonce="${nonce}">${script}</script>
</body>
</html>
`;
  return new Response(html, {
    status: httpStatus,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Referrer-Policy": "no-referrer",
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": `default-src 'none'; script-src 'nonce-${nonce}'; style-src 'unsafe-inline'`,
      // The state cookie has done its job.
      "Set-Cookie": `${STATE_COOKIE}=; Path=/callback; Max-Age=0; HttpOnly; Secure; SameSite=Lax`,
    },
  });
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function allowedOrigins(env) {
  const configured = String(env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return configured.length ? configured : DEFAULT_ALLOWED_ORIGINS;
}

function allowLocalhostEnabled(env) {
  return String(env.ALLOW_LOCALHOST === undefined ? "true" : env.ALLOW_LOCALHOST).toLowerCase() === "true";
}

function originAllowed(origin, env) {
  if (!origin) return false;
  return allowedOrigins(env).includes(origin) || (allowLocalhostEnabled(env) && LOCALHOST_ORIGIN.test(origin));
}

function originOf(urlString) {
  try {
    return new URL(urlString).origin;
  } catch (error) {
    return "";
  }
}

function missingSecrets(env) {
  const missing = ["GITHUB_CLIENT_ID", "GITHUB_CLIENT_SECRET"].filter((name) => !env[name]);
  return missing.length ? missing.join(" and ") : "";
}

function readCookie(cookieHeader, name) {
  for (const part of cookieHeader.split(";")) {
    const [key, ...rest] = part.trim().split("=");
    if (key === name) return rest.join("=");
  }
  return "";
}

function constantTimeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function randomHex(bytes) {
  const buffer = new Uint8Array(bytes);
  crypto.getRandomValues(buffer);
  return Array.from(buffer, (b) => b.toString(16).padStart(2, "0")).join("");
}

/** A JSON literal that is also safe inside an inline <script>. */
const BACKSLASH = String.fromCharCode(92);
// U+2028 and U+2029 are line terminators in JavaScript but plain characters in JSON.
const LINE_SEPARATORS = new RegExp("[" + String.fromCharCode(0x2028, 0x2029) + "]", "g");
function jsLiteral(value) {
  return JSON.stringify(value)
    .replace(/</g, BACKSLASH + "u003c")
    .replace(LINE_SEPARATORS, (c) => BACKSLASH + "u" + c.charCodeAt(0).toString(16));
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function textResponse(body, status) {
  return new Response(body, {
    status,
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}
