# Cadillo Lab website

Source of <https://cadillo-lab.github.io/>, the website of the Cadillo Lab at the School of
Life Sciences, Arizona State University. A React application (Create React App) published
with GitHub Pages.

## Editing the content without code

The Team, Join Us and Publications pages are edited in the browser. Nothing to install.

1. Open <https://cadillo-lab.github.io/admin/> and click **Login with GitHub**.
   (First time: you need a free GitHub account that the maintainer has added to this
   repository. The guide below walks through that.)
2. In the left column pick **Team**, **Join Us** or **Publications**, open the entry, and
   change the text or pictures.
3. Click **Publish → Publish now**. After 2 to 4 minutes the change is on the preview site
   <https://cadillo-lab.github.io/preview/>. The live site has not changed yet.
4. Tell the maintainer. They put the preview on the live site with a few clicks on GitHub.

Full instructions with screenshots: **[docs/CONTENT-MAINTENANCE.md](docs/CONTENT-MAINTENANCE.md)**
(English, with Chinese summaries): first-time access, adding a team member or a paper,
publishing to the live site, accounts and handover, troubleshooting.

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
| `public/admin/` | Decap CMS: `index.html` (pinned version + integrity hash) and `config.yml` (collections and fields) |
| `public/404.html` | GitHub Pages single-page-app redirect, aware of the `/preview/` prefix |
| `cms-oauth/` | Cloudflare Worker `cms-auth` that performs the GitHub login for the editor; setup checklist in its README |
| `.github/workflows/` | `deploy.yml`, `sync-after-merge.yml`, `reset-preview.yml` |
| `docs/` | Maintenance guide and its screenshots |
