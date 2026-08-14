# Section handoff — SEO & launch readiness

> **Keep for platform blockers.** Per-page SEO files and how to check them: **`DOCUMENTATION.md`**. HEAD/date below may be stale. Repo architecture is PageShell + CSS + `src/seo/pages/*.ts`, not HTML-string pages.

**Date:** 2026-08-10
**Owner of this stream:** whoever runs the GHL AI Studio deployment + a content/client contact
**Parent handoff:** `HANDOFF.md` / `DOCUMENTATION.md`
**Repo:** https://github.com/FerozArshad/montfortre — branch `main`, head `cadb0b7`
**Preview:** https://montfortre-live.vibepreview.com/ · **Production target:** https://montfortre.com/
**Local dev:** `npm run dev` (this repo also runs on port 5199 via `.claude/launch.json` → `montfortre-dev`)

---

## Why this stream exists

Two external SEO validation audits were run against the preview (homepage first, then the six inner
pages) comparing it to a Screaming Frog crawl of the live site and to the live rendered HTML. The
verdict both times: **on-page SEO in the repo is correct, but the deployed preview is not launch-ready**
because the platform build overrides or drops it.

The critical distinction that keeps getting mis-filed as a code bug:

> Every page **in this repo** already emits an absolute, per-page canonical, og:url, title,
> description and JSON-LD. The audit finding "canonical and og:url are `/` on every page" and
> "every route returns the same 2,086-byte shell" is caused by **GHL's build**, not by these files.
> Fixing it means changing the deployment, not editing page constants.

Verified state of the repo (measured 2026-08-10, `cadb0b7`):

| Page file | Route (canonical) | JSON-LD | WebPage | Words | Imgs | WebP |
|---|---|---:|:--:|---:|---:|---:|
| Home.tsx | `/` | 5 | Y | 3263 | 71 | 36 |
| Services.tsx | `/services/` | 4 | Y | 1508 | 34 | 32 |
| AboutUs.tsx | `/about-us/` | 4 | Y | 1409 | 18 | 17 |
| Blog.tsx | `/blog/` | 4 | Y | 2560 | 58 | 57 |
| Harlem.tsx | `/harlem/` | 5 | Y | 1391 | 23 | 11 |
| StanleyMontfort.tsx | `/stanley-montfort/` | 5 | Y | 1351 | 7 | 6 |
| SuccessStories.tsx | `/success-stories/` | 4 | Y | 1604 | 16 | 5 |
| Neighborhoods.tsx | `/neighborhoods/` | 4 | Y | 2185 | 14 | 14 |
| TwoFamilyHouseForSaleNyc.tsx | `/2-family-house-for-sale-nyc/` | 8 | Y | 2261 | 10 | 8 |
| BrownstoneBuyingGuide.tsx | `/advice-for-buyers-…-brownstones/` | 5 | Y | 2243 | 4 | 3 |
| IdxSales.tsx | `/idx-sales/` | 0 | N | 307 | 0 | 0 |
| IdxRentals.tsx | `/idx-rentals/` | 0 | N | 305 | 0 | 0 |

(Word counts here include nav/footer chrome, so they read higher than a crawler's body-content count —
use them for relative comparison between pages, not against the Screaming Frog numbers.)

---

## Part A — Platform blockers (GHL side, MUST fix before DNS cutover)

None of these can be fixed by editing this repo. Work them in the deployment configuration.
Ordered by severity.

### A1. Client-side rendering — no per-route SEO in raw HTML  🔴 highest
**Symptom:** `curl` any route → identical ~2,086-byte shell carrying the title
"Montfort Real Estate — Premier NYC & Harlem Real Estate Specialists", no JSON-LD, no per-page meta.
**Impact:** Bing, social scrapers (Facebook/WhatsApp/X/Slack) and any non-JS crawler see six identical
homepage shells. Link previews show the wrong title everywhere.
**Fix:** enable prerendering / static generation so each route's real `<head>` (title, description,
canonical, og, JSON-LD) is in the initial HTML response.
**Verify:** `curl -s https://montfortre.com/services/ | grep -E '<title>|canonical|ld\+json'` must show
the Services values, not the homepage shell.

### A2. Relative canonical + og:url  🔴
**Symptom:** canonical renders `href="/"` on every page → resolves to the preview host; every URL
self-canonicalizes to the homepage.
**Cause:** platform-level meta/canonical injection running after (or instead of) `src/components/Seo.tsx`.
**Fix:** remove the platform's own canonical/og injection; let `Seo.tsx` own the head. The correct
absolute values are already in each page's `LINKS`/`METAS` constants (table above).
**Verify:** every route's canonical equals its `https://montfortre.com/<slug>/` value.

### A3. Shell `<head>` overrides page SEO  🔴
**Symptom:** served `index.html` carries its own title + description ("Premier NYC & Harlem…"), and the
homepage description was replaced with "Montfort Real Estate specializes in NYC brownstones…" (160 ch).
**Fix:** strip the shell head to `charset` + `viewport` only. The homepage description must be the
original: *"Our Realtors will help you find on and off market NYC real estate that meet your criteria
while avoiding costly mistakes during the home buying process."* (in `Home.tsx` METAS).

### A4. Soft 404s  🟠
**Symptom:** `/this-page-does-not-exist-12345/` → HTTP 200 with the shell.
**Fix:** unmatched routes must return HTTP 404 from the host. The app already renders a noindexed
`NotMigrated` fallback (`src/pages/NotMigrated.tsx`) — that handles UX; the **status code** must come
from the server.

### A5. robots.txt + sitemap.xml not served  🟠
**Symptom:** `/robots.txt` on preview lost the Sitemap directive, the whole AI-crawler allowlist
(GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, CCBot, Applebot-Extended,
Meta-ExternalAgent…) and the scraper blocks (ZoominfoBot, SeznamBot, BLEXBot, Huckabot) plus
`Disallow: /?s=`. `/sitemap.xml` returns the HTML shell.
**Fix:** deploy **`public/robots.txt`** and **`public/sitemap.xml`** from this repo at the web root.
`robots.txt` is a byte-restore of the live file (71 lines) with the Sitemap line repointed to
`https://montfortre.com/sitemap.xml`. Dropping the AI-bot directives directly regresses the tracker's
"AI Search Score".

### A6. Trailing-slash duplication  🟠
**Symptom:** platform-generated links mix `/about-us` and `/about-us/`; both return 200.
**Fix:** normalize to trailing-slash and 301 the non-slash variant. Every link authored in this repo
already uses the trailing slash.

### A7. `lang` attribute  🟡
Document renders `lang="en"` while schema says `en-US`. `Seo.tsx` sets `en-US` at runtime — ensure the
shell doesn't hardcode `en`.

### A8. HTTPS / HSTS  🟡
Preview is HTTP-only with no HSTS. Must be HTTPS + HSTS on the production domain at launch.

### A9. Confirm new routes exist at launch  🟡
`/idx-sales/`, `/idx-rentals/`, `/neighborhoods/`, `/2-family-house-for-sale-nyc/` are linked from nav.
They are real routes in `src/main.tsx`; make sure the deployment serves all of them (otherwise the nav
links land in soft 404s). Note `/idx-*` embeds are framed from `stanley.olridx.com`, whose
`frame-ancestors` allowlist includes `montfortre.com` but **not** `www.montfortre.com` — if production
serves www, ask OLR support to add it.

---

## Part B — Already fixed in this repo (do not redo; verify after redeploy)

| Item | Where | Commit |
|---|---|---|
| robots.txt restored (71 lines, AI allowlist + scraper blocks + Sitemap) | `public/robots.txt` | `87ab12c` |
| sitemap.xml with all 12 production URLs | `public/sitemap.xml` | `87ab12c` |
| `/contact/` re-linked in nav (was pointing at Calendly → page was orphaned) | `Home.tsx` | `87ab12c` |
| 3 lost homepage outlinks restored (brownstones-in-nyc, house-hacking, featured Harlem) | `Home.tsx` footer | `87ab12c` |
| RSS `<link rel="alternate">` restored | `Home.tsx` LINKS | `87ab12c` |
| `/idx-sales/` + `/idx-rentals/` built as real routes with own SEO | `IdxSales.tsx`, `IdxRentals.tsx`, `main.tsx` | `87ab12c` |
| WebPage + WebSite schema added (were 3-block pages) | `Harlem.tsx`, `StanleyMontfort.tsx`, `BrownstoneBuyingGuide.tsx` | `cadb0b7` |
| 9 empty `alt=""` filled; **0 remaining** across all pages | AboutUs, Blog, Home, SuccessStories | `cadb0b7` |
| WebP conversion (64 images total, ~35 MB saved); 189 webp refs vs 63 png | `public/redesign-assets/**` | `87ab12c`, `cadb0b7` |
| Heading hierarchy 12 → 61 (43 H3, 6 H4), full review text, `<main>`, og:image 1200×630, img width/height | `Home.tsx` | `1b5185e` |
| Preview auto-noindex (only on `*.vibepreview.com`), template-branding strip, `lang=en-US` | `src/components/Seo.tsx` | `1b5185e`, `87ab12c` |

---

## Part C — Open decisions (need a human / the client — deliberately NOT changed)

### C1. Factual conflict: "20+ years" vs "nearly a decade"  ⚠️ do not guess
`/about-us/` H1 says Stanley has **20+ years**; `/stanley-montfort/` RealEstateAgent schema and the
homepage copy say **nearly a decade**. Both strings came from source content. This is a claim about a
real person's professional history on a real business site — a wrong guess is a factual
misrepresentation, and the schema version is machine-readable by search engines.
**Action:** client confirms the correct figure → update the visible copy **and** the RealEstateAgent
schema in the same change so they agree.

### C2. Content depth below the crawl baseline
The redesign intentionally tightened copy. Body-content comparison vs the Screaming Frog crawl:

| Route | Redesign | Crawl | Delta |
|---|---:|---:|---:|
| `/success-stories/` | 774 | 950 | −19% |
| `/neighborhoods/` | 796 | 969 | −18% |
| `/about-us/` | 770 | 932 | −17% |
| `/harlem/` | 624 | 774 | −19% |
| `/` (home) | 2026 | 2547 | −20% |

**Action:** restoring depth needs client-approved copy, not mechanical padding. Prioritise `/harlem/`
(lowest absolute count, and neighborhood pages carry local-search intent).

### C3. `/success-stories/` heading structure
Only 2 H2s, both generic ("Recent News & Realtor Advice", "Contact Montfort Real Estate"). If C2 copy
is written, give each block a unique, descriptive H2.

### C4. Schema gaps (inherited — live site lacks these too)
No FAQ, Service, or Review schema anywhere. Adding them is an *improvement over the live site*, not a
regression fix. Best candidates: Review/AggregateRating on `/success-stories/` (57 Google reviews, 5.0),
Service on `/services/`, FAQ on `/advice-for-buyers-…-brownstones/`.

### C5. H1 changes vs the crawl (confirm intent, likely keep)
`/harlem/` H1 changed "Harlem" → "**Harlem Realtor**" (keyword gain); `/services/` and `/neighborhoods/`
H1s were shortened. These came from the approved design and read as deliberate improvements.

### C6. External authority links ≈ zero
Only outbound hosts are IDX, Calendly, Google, Instagram, Facebook, YouTube. The SEO Tasks checklist
wants authoritative external references — needs an editorial decision on which sources to cite.

---

## Working rules for anyone picking this up

1. **SEO constants are frozen.** Never edit `TITLE`, `METAS`, `LINKS`, `JSON_LD` values to
   "make the audit pass". If a deployed page shows wrong SEO, the bug is in the platform (Part A).
   Check values in `src/seo/pages/*.ts` — see `DOCUMENTATION.md`.
2. **Content is frozen** (headings, copy, phone `(646) 970-1078`, link targets) unless the client
   approves the change — see Part C.
3. Pages are `PageShell` + content TSX + CSS in `src/styles/*.css`. Desktop ≥1440px must stay
   pixel-identical. Do not put `overflow-x: hidden` on `.site-page`.
4. Hover is CSS `:hover`. Leave `useStyleHover()` / `useCarousels()` in place. Do not strip
   carousel handlers.
5. After any change: `npm run typecheck` and `npm run test`, then verify at 375 / 768 / 1024 / 1440 px.

## Redeploy checklist (GHL)

1. Re-pull every file listed in `GHL-URLS.md` (25 source files, 140 public assets).
2. Wire `src/main.tsx` routes (or `ROUTES.tsx.snippet`), `src/responsive.css`, and `MobileHeader`.
3. Serve `public/robots.txt` and `public/sitemap.xml` at the web root.
4. Work Part A blockers A1–A8.
5. Re-verify: `curl` a route for real `<head>` content; canonical absolute and per-page; 404 status on a
   bogus URL; robots.txt has the AI allowlist; no `/about-us` vs `/about-us/` duplication.
