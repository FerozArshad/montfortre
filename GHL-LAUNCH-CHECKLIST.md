# GHL launch checklist — platform blockers

**Repo:** https://github.com/FerozArshad/montfortre  
**Preview:** https://montfortre-live.vibepreview.com/  
**Production:** https://montfortre.com/

This checklist covers **Part A** from `HANDOFF-SECTION-seo-launch-readiness.md`. These items must be fixed in **GHL AI Studio / deployment config** — not by editing page SEO constants in this repo.

---

## Before DNS cutover

| # | Blocker | Severity | Fix | Verify |
|---|---------|----------|-----|--------|
| A1 | Client-side rendering — no per-route SEO in raw HTML | 🔴 | Enable prerendering / static generation per route | `curl -s https://montfortre.com/services/ \| grep -E '<title>\|canonical\|ld\+json'` shows Services values, not homepage shell |
| A2 | Relative canonical + og:url (`href="/"`) | 🔴 | Remove platform canonical/meta injection; let `src/components/Seo.tsx` own `<head>` | Every route canonical = `https://montfortre.com/<slug>/` |
| A3 | Shell `<head>` overrides page SEO | 🔴 | Strip shell to charset + viewport only (see `index.html` in repo) | Homepage description matches `Home.tsx` METAS exactly |
| A4 | Soft 404s (HTTP 200 on unknown URLs) | 🟠 | Host returns HTTP 404 for unmatched routes | `curl -I https://montfortre.com/this-does-not-exist/` → 404 |
| A5 | robots.txt + sitemap.xml not served at web root | 🟠 | Deploy `public/robots.txt` and `public/sitemap.xml` from this repo | `/robots.txt` has AI-crawler allowlist + Sitemap directive |
| A6 | Trailing-slash duplication | 🟠 | 301 non-slash → trailing-slash | `/about-us` redirects to `/about-us/` |
| A7 | `lang` attribute | 🟡 | Shell `lang="en-US"` (repo `index.html` + `Seo.tsx` runtime) | Document `lang="en-US"` in served HTML |
| A8 | HTTPS + HSTS | 🟡 | Enable on production domain | HSTS header present at launch |
| A9 | IDX iframe on www | 🟡 | Confirm `stanley.olridx.com` allows `www.montfortre.com` in `frame-ancestors` | IDX loads on www if site uses www |

---

## Repo-side items (already done — verify after redeploy)

- [x] `public/robots.txt` — 71 lines, AI allowlist, scraper blocks, Sitemap line
- [x] `public/sitemap.xml` — all 12 migrated routes
- [x] `index.html` — minimal shell (charset, viewport, favicon only; no title/description)
- [x] `Seo.tsx` — per-page head injection, `lang=en-US`, preview noindex
- [x] `NotMigrated.tsx` — noindexed fallback for unmigrated URLs

---

## Redeploy steps (GHL AI Studio)

1. Pull all files listed in `GHL-URLS.md`.
2. Wire `src/App.tsx` routes + `MobileHeader` + global CSS imports.
3. Confirm platform does **not** inject its own title, description, or canonical.
4. Serve `public/robots.txt` and `public/sitemap.xml` at the web root (not inside `/assets/`).
5. Work blockers A1–A8 above.
6. Re-verify with curl + browser at 375 / 768 / 1440 px on every route.

---

## Open client decisions (do not fix without approval)

See `HANDOFF-SECTION-seo-launch-readiness.md` Part C:

- **C1:** "20+ years" (About Us H1) vs "nearly a decade" (schema/homepage) — client must confirm
- **C2:** Thin content on several pages vs crawl baseline
- **C3:** Success Stories heading structure
- **C4:** FAQ / Service / Review schema gaps
