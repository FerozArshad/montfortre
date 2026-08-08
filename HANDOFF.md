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
