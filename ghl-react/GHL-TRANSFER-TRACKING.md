# GHL AI Studio transfer tracking

> Architecture / which files exist: **`DOCUMENTATION.md`**. Current fetch URLs: **`GHL-PASTE-TO-STUDIO.md`**.

**Purpose:** Record what we asked GHL to fetch vs what Studio actually wrote. Next agents update this file — do not guess.

**Studio cannot** git clone, browse the repo tree, unzip archives, or SSH. GitHub raw fetch often truncates. **Current ingest:** `GHL-PASTE-TO-STUDIO.md` (raw URLs). If fetch truncates, paste one full file per GHL message using those same paths. Reply `next` in Cursor after each write.

| Item | Value |
|---|---|
| Git remote | https://github.com/FerozArshad/montfortre (`main`) |
| Local repo | `d:\montfortre\ghl-react\` |
| GHL preview | https://montfortre-live.vibepreview.com/ |
| Paste lists | `GHL-PASTE-TO-STUDIO.md` |
| URL dump | `GHL-URLS.md` |
| Last local HEAD | feature/neighborhood-pages-ghl (PR into main) |

**Status legend**

| Status | Meaning |
|---|---|
| `PREPARED` | Raw URL exists on public `main` |
| `SENT` | Owner was given the paste list for GHL (this Cursor session, 2026-08-13) |
| `FETCHED` | GHL confirmed it wrote the file into Studio |
| `VERIFIED` | Human/agent checked the live Studio preview matches local TSX |

Until GHL replies that it wrote files, **FETCHED and VERIFIED stay empty**.

---

## How GHL must write files

1. Fetch `https://raw.githubusercontent.com/FerozArshad/montfortre/main/<path>`
2. Save as `<path>` in the Studio project (example: `src/pages/Services.tsx`)
3. Do not invent routes. Do not edit `src/seo/pages/*.ts`. Do not use page-level `dangerouslySetInnerHTML`.

`App.tsx` must keep `<MobileHeader />` above `<Routes>` with the 26 migrated routes in `src/App.tsx` plus `NotMigrated`.

---

## Batch 0 — shared runtime (required first)

Paste source: `GHL-PASTE-TO-STUDIO.md` section 0.

| Path | PREPARED | SENT | FETCHED | VERIFIED |
|---|---|---|---|---|
| `index.html` | x | x | | |
| `src/main.tsx` | x | x | | |
| `src/App.tsx` | x | x | | |
| `src/index.css` | x | x | | |
| `src/App.css` | x | x | | |
| `src/responsive.css` | x | x | | |
| `src/layouts/PageShell.tsx` | x | x | | |
| `src/seo/types.ts` | x | x | | |
| `src/components/Seo.tsx` | x | x | | |
| `src/components/MobileHeader.tsx` | x | x | | |
| `src/components/NavLink.tsx` | x | x | | |
| `src/components/layout/DesktopHeader.tsx` | x | x | | |
| `src/components/layout/SiteFooter.tsx` | x | x | | |
| `src/components/shared/ResourcesSection.tsx` | x | x | | |
| `src/components/shared/ContactSection.tsx` | x | x | | |
| `src/hooks/useStyleHover.ts` | x | x | | |
| `src/hooks/useTouchDropdowns.ts` | x | x | | |
| `src/hooks/useCarousels.ts` | x | x | | |
| `src/lib/utils.ts` | x | x | | |
| `src/styles/page-shell.css` | x | x | | |
| `src/styles/desktop-nav.css` | x | x | | |
| `src/styles/idx-page.css` | x | x | | |
| `public/favicon.svg` | x | x | | |

---

## Batch 1 — pages GHL asked for first

Each row is three files (shell + content + frozen SEO). SENT with Batch 0 on 2026-08-13.

| Route | Shell | Content | SEO | FETCHED | VERIFIED |
|---|---|---|---|---|---|
| `/services` | `src/pages/Services.tsx` | `src/components/services/ServicesContent.tsx` | `src/seo/pages/services.ts` | | |
| `/blog` | `src/pages/Blog.tsx` | `src/components/blog/BlogContent.tsx` | `src/seo/pages/blog.ts` | | |
| `/stanley-montfort` | `src/pages/StanleyMontfort.tsx` | `src/components/stanley/StanleyMontfortContent.tsx` | `src/seo/pages/stanleyMontfort.ts` | | |
| `/success-stories` | `src/pages/SuccessStories.tsx` | `src/components/success/SuccessStoriesContent.tsx` | `src/seo/pages/successStories.ts` | | |
| `/advice-for-buyers-looking-to-purchase-brownstones` | `src/pages/BrownstoneBuyingGuide.tsx` | `src/components/brownstone/BrownstoneGuideContent.tsx` | `src/seo/pages/brownstoneGuide.ts` | | |
| `/neighborhoods` | `src/pages/Neighborhoods.tsx` | `src/components/neighborhoods/NeighborhoodsContent.tsx` | `src/seo/pages/neighborhoods.ts` | | |

---

## Batch 2 — remaining migrated pages + extra CSS

Paste source: `GHL-PASTE-TO-STUDIO.md`. SENT to owner 2026-08-13. FETCHED unknown.

| Route | Shell | Content / extra | SEO | FETCHED | VERIFIED |
|---|---|---|---|---|---|
| `/` | `src/pages/Home.tsx` | `src/components/home/HomeContent.tsx` | `src/seo/pages/home.ts` | | |
| `/about-us` | `src/pages/AboutUs.tsx` | `src/components/about/AboutUsContent.tsx` | `src/seo/pages/aboutUs.ts` | | |
| `/harlem` | `src/pages/Harlem.tsx` | `HarlemContent.tsx` + `HarlemSchools.tsx` + `src/data/harlemSchools.json` | `src/seo/pages/harlem.ts` | | |
| `/2-family-house-for-sale-nyc` | `src/pages/TwoFamilyHouseForSaleNyc.tsx` | `src/components/two-family/TwoFamilyContent.tsx` | `src/seo/pages/twoFamily.ts` | | |
| `/nyc-buyers-agent-service` | `src/pages/NycBuyersAgentService.tsx` | `src/components/nyc-buyers-agent/NycBuyersAgentContent.tsx` | `src/seo/pages/nycBuyersAgent.ts` | | |
| `/nyc-listing-agent-service` | `src/pages/NycListingAgentService.tsx` | `src/components/nyc-listing-agent/NycListingAgentContent.tsx` | `src/seo/pages/nycListingAgent.ts` | | |
| `/nyc-multifamily-real-estate-agent-service` | `src/pages/NycMultifamilyRealEstateAgentService.tsx` | `src/components/nyc-multifamily-agent/NycMultifamilyContent.tsx` | `src/seo/pages/nycMultifamily.ts` | | |
| `/idx-sales` | `src/pages/IdxSales.tsx` | `src/components/idx/IdxSearchLayout.tsx` | `src/seo/pages/idxSales.ts` | | |
| `/idx-rentals` | `src/pages/IdxRentals.tsx` | same IdxSearchLayout | `src/seo/pages/idxRentals.ts` | | |
| `*` | `src/pages/NotMigrated.tsx` | — | inline noindex in page | | |

| Extra path | PREPARED | SENT | FETCHED | VERIFIED |
|---|---|---|---|---|
| `src/styles/about-page.css` | x | x | | |
| `src/layouts/SiteLayout.tsx` | x | x | | |
| `src/vite-env.d.ts` | x | x | | |

---

## Batch 3 — branding + `public/` images

Logo: `/redesign-assets/logo-transparency-black.png` (local, not CDN).

Must-have local branding (SENT 2026-08-13):

| Path | FETCHED | VERIFIED |
|---|---|---|
| `public/favicon.svg` | | |
| `public/redesign-assets/favicon.png` | | |
| `public/redesign-assets/rebny.webp` | | |
| `public/redesign-assets/stanley-montfort-bio.webp` | | |
| `public/redesign-assets/stanley-portrait.webp` | | |
| `public/robots.txt` | | |
| `public/sitemap.xml` | | |

Full image set (hoods, services, slots, blog, Instagram, plan, nbhd): every `public/` URL in `GHL-URLS.md`.

| Image group | SENT | FETCHED | VERIFIED |
|---|---|---|---|
| `public/instagram/*` | x | | |
| `public/redesign-assets/hoods/*` | x | | |
| `public/redesign-assets/services/*` | x | | |
| `public/redesign-assets/slots/*` | x | | |
| `public/redesign-assets/blog/*` | x | | |
| `public/redesign-assets/expect/*` | x | | |
| `public/redesign-assets/plan/*` | x | | |
| `public/redesign-assets/nbhd/*` | x | | |
| `public/og-home.webp` | x | | |
| `public/placeholder.svg` | x | | |

---

## Not in Studio (do not send)

- `node_modules/`, `dist/`, `reference/` (parent folder)
- Unmigrated live URLs (`/prospect-heights/` etc.) — stay `NotMigrated`
- Test files (`src/test/*`) unless Studio needs them

---

## Session log

| When | What |
|---|---|
| 2026-08-13 | Local TSX conversion complete for all 12 migrated routes + IDX on PageShell. Pushed `main`. |
| 2026-08-13 | Owner told GHL cannot clone. Created paste list `GHL-PASTE-TO-STUDIO.md`. **SENT to owner to paste into GHL.** Fetch confirmation from Studio is still pending. |
| 2026-08-15 | Added `/upper-east-side/` and `/upper-west-side/` (Harlem design system). App files PR’d to `main` for GHL raw fetch. Workspace remains `local-root`. |
| 2026-08-15 | Added `/chelsea/` (Harlem design system). App files pushed to `main` for GHL raw fetch. |
| 2026-08-15 | Added `/williamsburg/` (Harlem design system). App files ready for GHL raw fetch after push to `main`. |
| 2026-08-15 | Added `/crown-heights/` (Harlem design system). |
| 2026-08-15 | Added `/park-slope/` (Harlem design system). |

---

## Prompt to verify later (paste into GHL or Cursor)

```
Compare the GHL AI Studio project to github.com/FerozArshad/montfortre main.

1. Open GHL-TRANSFER-TRACKING.md on GitHub:
   https://raw.githubusercontent.com/FerozArshad/montfortre/main/GHL-TRANSFER-TRACKING.md

2. For every path in Batches 0–2: confirm the Studio file exists at that exact path
   and is real TSX (PageShell + content component), not an HTML string / dangerouslySetInnerHTML.

3. Confirm src/App.tsx routes match the table in that tracking file
   (MobileHeader once above Routes; no extra neighborhood routes).

4. Confirm src/seo/pages/*.ts values were not edited.

5. Reply with a table: path | present in Studio | matches GitHub | notes.
   Then I will mark FETCHED/VERIFIED in GHL-TRANSFER-TRACKING.md.

6. Spot-check preview routes: /, /services, /blog, /stanley-montfort,
   /success-stories, /neighborhoods, /advice-for-buyers-looking-to-purchase-brownstones
   — H1 text, phone (646) 970-1078, header/footer, no missing images.
```

After GHL answers, update the FETCHED/VERIFIED columns in this file and commit.
