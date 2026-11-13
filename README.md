# James Allen & Associates — Site

Lean static site for **woodlandschristiancounseling.com** (James Allen & Associates Christian Counseling, The Woodlands, TX).

Deployed on **Cloudflare Pages**. DNS via Cloudflare.

## Architecture (lean + reliable)

- Pure static HTML + one CSS + one JS + optimized images
- No build step required
- Clean URLs via `_redirects` (pretty paths serve `.html` files; `.html` 301s to clean)
- Security headers in `_headers` (CSP, HSTS, etc.)
- Sitemap + robots + `llms.txt` for agents/SEO
- Schema.org JSON-LD on pages
- Mobile call-bar + accessible markup

## Local preview

Any static server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deploy

1. Connect this repo to a Cloudflare Pages project
2. Build command: (none) or `exit 0`
3. Output directory: `/` (root)
4. Custom domain: woodlandschristiancounseling.com (already on CF DNS)

## SEO notes

- Canonicals and sitemap use clean URLs (no `.html`)
- Internal links use clean paths
- Images resized/compressed for LCP
- FAQ + ProfessionalService schema present

## Harden / Optimize done in this pass

- Fixed invalid duplicate `</main>`
- Canonical / sitemap / internal links aligned to clean URLs
- Image compression + resize (couple 680 KB → ~114 KB, etc.)
- Added `_redirects`, `_headers`, `llms.txt`, proper `404.html`
- Cache headers for assets
- HSTS preload-ready

## Contact

Site for James Allen, LPC / LMFT / LCDC — (281) 413-8063
