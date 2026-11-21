# James Allen & Associates — Site

Lean static site for **woodlandschristiancounseling.com** (James Allen & Associates Christian Counseling, The Woodlands, TX).

## Canonical deploy path (one path only)

**Cloudflare Pages, connected to this GitHub repo.**

| Setting | Value |
|---------|--------|
| Project | `james-allen-counseling-site` |
| Production branch | `main` |
| Build command | *(empty — no build)* |
| Output directory | `/` (repo root) |
| Custom domains | `woodlandschristiancounseling.com`, `www` → apex 301 |

Do **not** use Wrangler CLI deploy or Direct Upload for routine releases. Git push → Pages auto-deploy is the only production path.

There is no `wrangler.toml` in this repo and none is required for Pages static hosting.

## Workflow: branch → PR → merge (do not push straight to `main`)

1. Create a feature branch from `main`
2. Make focused commits
3. Open a pull request into `main`
4. Wait for the **Smoke** GitHub Action to pass
5. Preview the Pages preview deployment if Cloudflare creates one for the branch/PR
6. Merge the PR
7. Confirm production: https://woodlandschristiancounseling.com/

`main` is protected: PRs required, force-push and branch deletion blocked. Status check **smoke** is required once configured in branch rules.

Solo maintainer tip: do **not** require an extra human approval you cannot get. Require PR + checks only.

## Local preview

```bash
npx serve .
# or
python3 -m http.server 8080
```

Inspect desktop and mobile before merging HTML/CSS changes.

## Architecture

- Pure static HTML + one CSS + one JS + images
- No build step
- Clean URLs via directory pages + `_redirects`
- Security headers in `_headers`
- `sitemap.xml`, `robots.txt`, `llms.txt`
- Schema.org JSON-LD on pages

## Restore point

Before each release, prefer a small focused PR. If production regresses, revert that merge commit rather than undoing a large mixed history.

## Contact

James Allen, LPC / LMFT / LCDC — (281) 413-8063  
26205 Oak Ridge Drive, Suite 111, The Woodlands, TX 77380
