# Reference material (not deployed)

HTTrack mirrors, SEO exports, and design files consolidated here during workspace cleanup. **Nothing was deleted** — folders were moved from the parent workspace root.

| Path | Contents |
|---|---|
| `httrack/cdn-captures/` | Scraped CDN/domain folders (`assets.agentfire3.com`, `widgets.leadconnectorhq.com`, etc.) |
| `httrack/montfortre.com/` | HTTrack mirror of live site (if present) |
| `httrack/hts-cache/`, `hts-log.txt`, `cookies.txt` | HTTrack crawl artifacts |
| `export/ghl-export/` | 268-page SEO manifest and audit docs |
| `design/Montfort homepage redesign/` | Design tool exports (`.dc.html`) + brand kit |

## Usage

- **Content extraction only** — never serve these HTML files from the React app
- **SEO reference** — `export/ghl-export/SITEMAP.md`, `manifest.json`
- **Asset recovery** — if a `public/redesign-assets/` file is missing locally, check GitHub remote or CDN captures here

## Deployable app

The git repo lives in `ghl-react/` (package name: `montfortre`). Run `npm run dev` from there.
