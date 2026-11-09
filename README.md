# Cadillo Lab website

Source of <https://cadillo-lab.github.io/>, the website of the Cadillo Lab at the School of
Life Sciences, Arizona State University. A React application (Create React App) published
with GitHub Pages.

## Editing the content without code

The Team, Join Us and Publications pages are edited in the browser. Nothing to install.
Every change goes to a **preview copy** of the site first. The live site changes only
when you do step 5.

1. Open <https://cadillo-lab.github.io/admin/> and click **Login with GitHub**.
   (First time: you need a free GitHub account that the maintainer has added to this
   repository. The guide below walks through that.)
2. In the left column pick **Team**, **Join Us** or **Publications**, open the entry, and
   change the text or pictures. The right half of the editor previews the page as you type;
   a new paper can be added from its DOI.
3. Click **Publish → Publish now**. Wait until the label at the top left says
   **Changes saved**; before that, nothing is stored.
4. Check the preview site. After 2 to 4 minutes open <https://cadillo-lab.github.io/preview/>
   and look at the page you changed. If it still looks old, reload with Ctrl+F5 (Windows)
   or Cmd+Shift+R (Mac). Not right? Go back to the editor, fix it and publish again, as
   often as you like. The live site has not changed yet.
5. Put the preview on the live site with a **pull request**. Do this only when the whole
   preview site looks right: everything on the preview goes live together, including edits
   other people published there.
   1. Open <https://github.com/Cadillo-Lab/cadillo-lab.github.io/compare/main...test_edit_this_firstly?expand=1>.
      The bar at the top must read **base: main** ← **compare: test_edit_this_firstly**;
      do not change it. Below, GitHub lists what changed.
      - "There isn't anything to compare": nothing new to publish, you are done.
      - A green **View pull request** button instead of a form: a pull request is already
        open. Click the button and continue with step iii.
   2. Type a short title, for example "Add Jane Doe to the Team page", and click
      **Create pull request**.
   3. Wait 1 to 2 minutes until the box near the bottom says **All checks have passed**.
      Several checks are listed as "Skipped"; that is normal. If one has a red ✗ ("Some
      checks were not successful"), do **not** merge: the site could not be built from
      the preview. Undo the last edit (table below) or ask the maintainer.
   4. Click **Merge pull request**, then **Confirm merge**. The label turns purple:
      **Merged**.
   5. After 3 to 5 minutes check <https://cadillo-lab.github.io/> (Ctrl+F5 if it looks
      old). The preview is brought back in line with the live site automatically; there
      is nothing else to do.

Full instructions with screenshots: **[docs/CONTENT-MAINTENANCE.md](docs/CONTENT-MAINTENANCE.md)**
(English, with Chinese summaries): first-time access, adding a team member or a paper,
publishing to the live site, accounts and handover, troubleshooting.

### If something went wrong

| Situation | What to do |
| --- | --- |
| A mistake on the preview, not merged yet | Fix it in the editor and **Publish now** again. |
| Throw away **all** preview edits that are not live yet (make the preview a copy of the live site again) | Open the [Actions tab](https://github.com/Cadillo-Lab/cadillo-lab.github.io/actions), click **Reset preview branch to main** in the left column, then **Run workflow**, keep "Branch: main", and click the green **Run workflow**. After 3 to 4 minutes the preview equals the live site. Everything not yet merged is gone, including pictures uploaded for it, so tell the other editors first. If a pull request is open, close it (**Close pull request**). |
| The mistake is already on the live site | Open the [closed pull requests](https://github.com/Cadillo-Lab/cadillo-lab.github.io/pulls?q=is%3Apr+is%3Aclosed), click the one that brought the mistake, and click **Revert** near the bottom. GitHub opens a new pull request that undoes it: click **Create pull request**, wait for **All checks have passed**, then **Merge pull request → Confirm merge**. A few minutes later the live site and the preview are back to how they were before. Then make the correct edit in the editor and go through steps 3 to 5 again. |

**中文要点**：在 /admin/ 改完点 **Publish → Publish now** → 2–4 分钟后检查 /preview/（改错了就回编辑器再改、再发布，线上不受影响）→ 确认整个预览都没问题后，打开上面的 compare 链接 → **Create pull request** → 等出现 **All checks have passed**（有几项 Skipped 是正常的；有红叉就不要合并）→ **Merge pull request → Confirm merge** → 3–5 分钟后线上站更新，预览自动与线上对齐。出问题时：预览上的错误直接再改；想丢弃所有未上线的修改，用 Actions → **Reset preview branch to main** → Run workflow（把线上内容覆盖到预览）；错误已经上线，就打开那个已合并的 pull request 点 **Revert**，再把新生成的 pull request 合并即可回退。

## How publishing works

| Branch | Built by | Published at |
| --- | --- | --- |
| `test_edit_this_firstly` (editing branch; the editor commits here) | workflow "Deploy to GitHub Pages", job *preview* | <https://cadillo-lab.github.io/preview/> |
| `main` (production) | workflow "Deploy to GitHub Pages", job *production* | <https://cadillo-lab.github.io/> |
| `gh-pages` | output of both jobs | never edited by hand |

Content goes live by merging a pull request from `test_edit_this_firstly` into `main`
(<https://github.com/Cadillo-Lab/cadillo-lab.github.io/compare/main...test_edit_this_firstly?expand=1>).
After a merge, "Sync preview branch after merge" moves the editing branch to `main`;
"Reset preview branch to main" (Actions -> Run workflow) discards unpublished edits.

Never publish by hand (the old `npm run deploy` script has been removed): a manual
`gh-pages` push would replace the whole branch with a local build and delete the preview
site. Pushing to `main` or `test_edit_this_firstly` is the only way to publish.

## Developer setup

```bash
git clone https://github.com/Cadillo-Lab/cadillo-lab.github.io.git
```

```bash
npm ci
```

```bash
npm start
```

- `npm start` runs the site at <http://localhost:3000>.
- `CI=false npm run build` builds into `build/` (ignored by git). `CI=false` keeps ESLint
  warnings from failing the build, as in the workflows.
- Content editor against your local checkout: run `npx decap-server` in a second terminal
  and open <http://localhost:3000/admin/index.html>. The "Login" button then works without
  GitHub and writes to `src/content/` and `public/images/` directly.
- Node 22 and `npm ci` are what the workflows use.

## Repository map

| Path | Contents |
| --- | --- |
| `src/components/` | React components, one per page plus Navbar and Footer |
| `src/content/*.json` | Editable content: `team.json`, `positions.json`, `programs.json`, `joinus.json`, `publications.json` |
| `src/styles/` | CSS |
| `src/assets/` | Images bundled by webpack (Home, Research, Collaborations) |
| `public/images/` | Images managed by the editor (team, joinus, publications) |
| `public/admin/` | Decap CMS: `index.html` (pinned version + integrity hash), `config.yml` (collections and fields), and the lab's additions: `cms-extensions.js` (live previews, add a paper from its DOI, picture size notes), `preview.css`, `admin.css`, `lab-logo.png`. See docs, section 9.1 |
| `public/404.html` | GitHub Pages single-page-app redirect, aware of the `/preview/` prefix |
| `cms-oauth/` | Cloudflare Worker `cms-auth` that performs the GitHub login for the editor; setup checklist in its README |
| `.github/workflows/` | `deploy.yml`, `sync-after-merge.yml`, `reset-preview.yml` |
| `docs/` | Maintenance guide and its screenshots |
