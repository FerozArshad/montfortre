# HANDOFF — Montfort Real Estate site (context for the next agent)

> **New agents:** start with **`DOCUMENTATION.md`**, then `AGENTS.md` and `AGENT-ONBOARDING.md`. GHL transfer status is `GHL-TRANSFER-TRACKING.md`. This file is **platform launch blockers** and SEO audit history — not the live file tree.

## What this project is
This repo is the approved redesign of https://montfortre.com/ (NYC realtor), being rebuilt as a
React/Vite SPA in GHL AI Studio. 12 pages are complete and deployed to the preview at
https://montfortre-live.vibepreview.com/. The markup is a pixel-faithful desktop design transferred
from a design tool; each page's SEO was copied byte-exact from the original live site.

## What exists and where

Full map (pages, content TSX, CSS, SEO modules): **`DOCUMENTATION.md`**.

| Path | What it is |
|---|---|
| `src/pages/*.tsx` | Thin `PageShell` wrappers (12 routes + NotMigrated) |
| `src/components/<area>/*Content.tsx` | Page copy and markup |
| `src/styles/*.css` | Desktop + `@media` layout (not inline HTML) |
| `src/seo/pages/*.ts` | Frozen head tags — how to check SEO per page |
| `src/components/Seo.tsx` | Injects those tags; origin rewrite via `siteOrigin.ts` |
| `public/redesign-assets/**` | Logo, listings, OG, favicons (no AgentFire) |
| `public/sitemap.xml` | The 12 migrated URLs only |
| `GHL-PASTE-TO-STUDIO.md` | Current Studio fetch list |
| `GHL-TRANSFER-TRACKING.md` | Sent / fetched / verified |

## How pages are built (important)
Every migrated route is real TSX: `PageShell` (Seo + DesktopHeader + footer) wrapping a content
component. Frozen SEO lives in `src/seo/pages/*.ts` — do not edit those values. Layout lives in
`src/styles/*.css` (desktop ≥1440px must stay pixel-identical). IDX pages use `IdxSearchLayout`
(header + iframe, no site footer). Hover is CSS `:hover`.

## Hard constraints — do not break these
1. SEO IS FROZEN. Never edit TITLE, METAS, LINKS, JSON_LD values. Canonicals in source still use
   `https://montfortre.com`; `Seo.tsx` rewrites origin at inject time.
2. Content is frozen: headings, copy, phone number (646) 970-1078, images. Design polish only.
3. H1 count per page must not change (one H1; the 2-family page has 2 by original design).
4. Do not reintroduce `style-hover` attributes. Leave `useStyleHover()` in PageShell as a safety net.
5. Do not rename routes or files; internal links are root-relative (`/services/` etc.).

## The current task: GHL Studio ingest + launch blockers

Local conversion is done. The owner is copying files into GHL AI Studio via **raw GitHub URLs** (Studio cannot clone). Track progress in `GHL-TRANSFER-TRACKING.md`. After Studio has the files, remaining work is **platform** (prerender, canonical injection, 404 status, robots/sitemap at web root) — see launch blockers below.

Responsive CSS already lives in `src/styles/page-shell.css` and per-page classes. Do not revert pages to HTML strings.

## Verification after your changes
The previous agent (Claude, working with the site owner) will re-audit after you finish:
every route at 375 / 768 / 1440 px for horizontal overflow, working navigation, broken images or
layout, and a field-by-field SEO re-check against the original site. Anything that changes SEO or
content will be flagged as a regression.

## LAUNCH BLOCKERS — must be fixed on the GHL/platform side (from the SEO validation audit)

Our repo is the source of truth for all SEO. The deployed build currently overrides parts of it. Before DNS cutover:

1. CANONICAL/OG:URL: must render absolute (https://montfortre.com/...) exactly as set in each page's
   LINKS/METAS constants. The platform currently outputs a relative canonical (href="/") — remove any
   platform-level canonical/meta injection and let src/components/Seo.tsx own the head.
2. META DESCRIPTION: the platform replaced the homepage description. Restore the exact value from
   `src/seo/pages/home.ts` METAS ("Our Realtors will help you find on and off market NYC real estate...").
   Never rewrite page SEO constants.
3. SHELL HEAD: the served index.html carries its own title/description ("Premier NYC & Harlem...").
   Strip it to charset+viewport only, or set it to match the homepage constants.
4. PRERENDER/SSR: raw HTML is a 2KB shell with no SEO. Enable prerendering/static generation so every
   route serves its real title/meta/JSON-LD in the initial HTML (non-JS crawlers, social scrapers).
5. REAL 404s: unknown URLs return HTTP 200. Serve 404 status for unmatched routes (the app's
   NotMigrated fallback is noindexed, but the status code must come from the host).
6. ROBOTS + SITEMAP: deploy public/robots.txt and public/sitemap.xml from this repo at the web root
   (they restore the AI-crawler allowlist, scraper blocks, Disallow /?s=, and the Sitemap directive).
7. TRAILING SLASHES: platform-generated nav links mix /about-us and /about-us/. Normalize to
   trailing-slash everywhere (all links in this repo already are).
8. LANG: document must be lang="en-US" (Seo.tsx sets it at runtime; ensure the shell doesn't force "en"
   or add it server-side).
9. HTTPS/HSTS at launch on the production domain.

## Section handoffs (focused work streams)

| File | Scope |
|------|--------|
| `DOCUMENTATION.md` | Architecture, how to write code, directories |
| `HANDOFF-SECTION-seo-launch-readiness.md` | SEO/launch readiness: platform blockers, applied fixes, open client decisions |
| `HANDOFF-SECTION-blog-articles.md` | All 55 blog posts: shared Brownstone-guide design, registry architecture, ship status (`main` @ `e34a126`) |

## Round-2 SEO audit — repo fixes applied (2026-08-10)

Applied here:
- WebPage + WebSite schema added to Harlem, StanleyMontfort, BrownstoneBuyingGuide (now 5 blocks each,
  consistent with the other pages).
- All 9 empty alt="" attributes filled with descriptive text (0 remaining across all pages).
- WebP conversion extended to every page-referenced raster (189 webp refs vs 63 remaining png refs;
  the remainder are already-small icons/logos where webp was not smaller).
- robots.txt + sitemap.xml shipped in public/ (see blocker 6).

VERIFIED NOT A REPO ISSUE — every page in this repo already sets an absolute, per-page canonical and
og:url (https://montfortre.com/services/, /harlem/, etc.) plus its own title/description/JSON-LD.
The audit's "canonical and og:url are / on every page" and "identical 2KB shell on every route" are
caused by the platform build not honoring the Seo component and not prerendering. See blockers 1-4.

OPEN — needs a human/client decision (deliberately NOT changed):
- FACT CONFLICT: /about-us/ H1 says "20+ years" while /stanley-montfort/ schema and homepage copy say
  "nearly a decade". Both came from source content. Client must confirm which is correct, then update
  copy AND the RealEstateAgent schema together.
- THIN CONTENT vs crawl: /success-stories/ 774 words (crawl 950), /neighborhoods/ 796 (969),
  /harlem/ 624 (774), /about-us/ 770 (932). The redesign intentionally tightened copy; restoring depth
  requires client-approved content, not mechanical edits.
- /success-stories/ has only 2 generic H2s — needs unique section headings if content is expanded.
- FAQ / Service / Review schema absent sitewide (inherited gap: the live site lacks them too).
