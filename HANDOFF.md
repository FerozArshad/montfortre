# HANDOFF — Montfort Real Estate site (context for the next agent)

## What this project is
This repo is the approved redesign of https://montfortre.com/ (NYC realtor), being rebuilt as a
React/Vite SPA in GHL AI Studio. 9 pages are complete and deployed to the preview at
https://montfortre-live.vibepreview.com/. The markup is a pixel-faithful desktop design transferred
from a design tool; each page's SEO was copied byte-exact from the original live site.

## What exists and where

| Path | What it is |
|---|---|
| src/pages/Home.tsx | Homepage, route `/` |
| src/pages/Services.tsx | `/services/` |
| src/pages/AboutUs.tsx | `/about-us/` |
| src/pages/Blog.tsx | `/blog/` |
| src/pages/Harlem.tsx | `/harlem/` |
| src/pages/StanleyMontfort.tsx | `/stanley-montfort/` |
| src/pages/SuccessStories.tsx | `/success-stories/` |
| src/pages/TwoFamilyHouseForSaleNyc.tsx | `/2-family-house-for-sale-nyc/` |
| src/pages/BrownstoneBuyingGuide.tsx | `/advice-for-buyers-looking-to-purchase-brownstones/` |
| src/components/Seo.tsx | Injects each page's exact SEO into <head>; strips template defaults |
| src/hooks/useStyleHover.ts | Powers `style-hover` attributes (hover styles on inline-styled elements) |
| ROUTES.tsx.snippet | The <Route> lines used in App.tsx |
| public/redesign-assets/** | Design artwork (incl. slots/ service images) |
| public/instagram/** | Instagram grid photos |
| GHL-URLS.md | Raw-URL manifest of every file |

## How pages are built (important)
Each page component holds its full HTML in a template literal (`const HTML = ...`) rendered via
`dangerouslySetInnerHTML`, with `<style>` blocks at the top of that HTML string. All layout styling
is INLINE STYLES inside that HTML. Constants at the top hold SEO (TITLE / METAS / LINKS / JSON_LD).

## Hard constraints — do not break these
1. SEO IS FROZEN. Never edit TITLE, METAS, LINKS, JSON_LD, or the Seo/canonical logic. Titles,
   descriptions, og/twitter tags, canonicals (they point to https://montfortre.com/ on purpose)
   and JSON-LD must stay byte-identical to the original site.
2. Content is frozen: headings, copy, phone number (646) 970-1078, images. Design polish only.
3. H1 count per page must not change (one H1; the 2-family page has 2 by original design).
4. Do not remove the `style-hover` attributes or the useStyleHover hook.
5. Do not rename routes or files; internal links are root-relative (`/services/` etc.).

## The current task: RESPONSIVENESS
The design is desktop-only today. Verified issues at 375px mobile viewport:
- Every page wraps content in `<div style="min-width:1440px; ...">` → phones render a zoomed-out
  1440px desktop layout with tiny text.
- No mobile menu: the header nav (5 items + dropdowns, 28 links) has no hamburger; dropdowns open
  on hover only, which does not work on touch.
- Fixed desktop measurements throughout: 64px section padding, multi-column grids with fixed px
  track widths (e.g. `grid-template-columns:620px 1fr`), fixed font sizes, a 1200px-tall IDX iframe.

Because all styling is inline, media queries in a stylesheet need `!important` or class hooks to win.
The recommended approach per page:
- Change the outer wrapper `min-width:1440px` to `max-width:100%` (keep desktop layout via a
  max-width container instead of min-width).
- Add a `<style>` block with mobile/tablet media queries (breakpoints: 1024px, 768px, 480px) using
  structural selectors + `!important` where needed to: collapse grids to 1 column, reduce padding
  (64px -> 20px), scale type, make images fluid.
- Build ONE shared mobile header (hamburger + slide-in menu with tap-to-expand submenu) and use it
  on all 9 pages; hide the desktop nav under 1024px.
- Keep the desktop layout pixel-identical at >=1440px. Verify no horizontal scrolling at 375px.

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
   Home.tsx METAS ("Our Realtors will help you find on and off market NYC real estate...").
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
| `HANDOFF-SECTION-neighborhoods-harlem-stanley.md` | Neighborhoods mobile CSS, Harlem schools component, Stanley hero image (2026-08-10) |

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
