# Montfort Real Estate — current architecture (source of truth)

**Read this file first.** It is the how-to for directories, writing TSX/CSS, routes, SEO, GHL, and branding. If another `.md` disagrees, **this file wins**.

| | |
|---|---|
| App | React 18 + Vite 5 + TypeScript SPA. **Not Next.js.** |
| Git | `d:\montfortre\ghl-react` is the app. GitHub **`main`** = these files at repo root. GitHub **`local-root`** = full disk (`ghl-react/` + `reference/`). See `BRANCHES.md`. |
| Production (live WordPress until cutover) | https://montfortre.com/ |
| Live robots | https://montfortre.com/robots.txt |
| Live sitemap index | https://montfortre.com/sitemap_index.xml |
| Live **page** sitemap | https://montfortre.com/page-sitemap.xml |
| Live post sitemap | https://montfortre.com/post-sitemap.xml |
| SPA sitemap (this repo) | `public/sitemap.xml` — 20 migrated URLs only |
| Preview | https://montfortre-live.vibepreview.com/ |
| Local | `npm run dev` (Vite; port may be 5173+) |
| Phone | `(646) 970-1078` |
| Email | `sm@montfortre.com` |
| Open tasks | `TODO.md` (do not invent missing IDX/SEO features) |

---

## 1. Where things live

### Page content (copy, headings, images in the body)

| Need | Open |
|---|---|
| Visible copy / layout markup | `src/components/<area>/*Content.tsx` |
| Thin route wrapper | `src/pages/<Page>.tsx` (imports SEO + content + `PageShell`) |
| Harlem schools list | `src/components/HarlemSchools.tsx` + `src/data/harlemSchools.json` |
| Shared blog teaser + contact form | `src/components/shared/ResourcesSection.tsx`, `ContactSection.tsx` |
| Desktop nav / footer | `src/components/layout/DesktopHeader.tsx`, `SiteFooter.tsx` |
| Mobile nav | `src/components/MobileHeader.tsx` (once in `App.tsx`) |
| IDX iframe chrome | `src/components/idx/IdxSearchLayout.tsx` |
| Catch-all copy | `src/pages/NotMigrated.tsx` |

Do **not** look in `src/pages/*.tsx` for body copy. Pages only wire `PageShell` + SEO + content.

### Branding (logo, colors, photos)

| Need | Where |
|---|---|
| Logo (header, footer, CSS mask) | `/redesign-assets/logo-transparency-black.png` |
| Favicons / OG / listings / “included” icons | `public/redesign-assets/**` |
| REBNY badge | `/redesign-assets/rebny.webp` |
| Stanley photos | `/redesign-assets/stanley-portrait.webp`, `stanley-montfort-bio.webp` |
| Neighborhood / service photos | `/redesign-assets/hoods/`, `services/`, `slots/`, `nbhd/` |
| Instagram grid | `public/instagram/` |
| Color tokens | Navy `#113b5f` / `#0f1729`, gold `#c98a2c`, cream `#f9f6e6` / `#f5eecb` |
| Type | Space Grotesk (headings), DM Sans (body) — Google Fonts in SEO `LINKS` |

**Never AgentFire CDN.** All former CDN images are in `public/redesign-assets/`. Do not rewrite `sm@montfortre.com`, Calendly, OLR IDX, or social `sameAs` URLs.

### SEO (per page)

| Need | File |
|---|---|
| Title, meta, canonical, icons, JSON-LD | `src/seo/pages/<name>.ts` exporting `*_SEO` |
| Inject into `<head>` | `src/components/Seo.tsx` |
| Rewrite `https://montfortre.com` → current host | `src/lib/siteOrigin.ts` |
| Types | `src/seo/types.ts` |
| Crawl files | `public/robots.txt`, `public/sitemap.xml` |

**Frozen:** titles, descriptions, H1 *counts*, copy, phone, canonical *paths*, JSON-LD *text*.  
**Allowed:** origin rewrite at inject time; image hrefs that already point at `https://montfortre.com/redesign-assets/...` (local files).

How to check SEO for one route (must match live):

1. Open the matching `src/seo/pages/*.ts` (table in §3).
2. Confirm `src/pages/<Page>.tsx` passes that `*_SEO` into `PageShell`.
3. Compare to **live** https://montfortre.com/<path>/ **and** the row in `seo-audit/screaming-frog-montfortre.xlsx` (Title 1, Meta Description 1, H1-1 / H1-2, Canonical).
4. In the SPA browser: `<title>`, `meta[name=description]`, `link[rel=canonical]`, `script[type=application/ld+json]`.
5. On non-production hosts, `Seo.tsx` adds `noindex,nofollow`. Production hostnames: `montfortre.com` / `www.montfortre.com`.
6. Compare H1 count: most pages **1**; Two Family **2** (keep both).
7. Do not compare against old AgentFire image URLs. Do not edit frozen SEO to “pass” a crawl.

Full audit instructions: `seo-audit/README.md`. Live page inventory: `seo-audit/live-page-sitemap-urls.txt`. Open gaps: `TODO.md`.

### CSS (layout, not inline)

Global (imported from `src/main.tsx`): `index.css`, `App.css`, `responsive.css`.

Shell / chrome: `src/styles/page-shell.css`, `mobile-layout.css`, `desktop-nav.css`, `mobile-header.css`, `site-footer.css`, `resources-section.css`, `contact-section.css`.

Home sections: `home-hero.css`, `home-promises.css`, `home-hidden-cost.css`, `home-founder.css`, `home-areas.css`, `home-expect.css`, `home-plan.css`, `home-services.css`, `home-reviews.css`, `home-instagram.css`, `home-included.css`, `home-listings.css`, `home-download.css`.

Inner pages: `services-page.css`, `blog-page.css`, `stanley-page.css`, `success-page.css`, `brownstone-guide.css`, `neighborhoods-page.css`, `about-page.css`, `harlem-page.css`, `two-family-page.css`, `idx-page.css`, `not-migrated.css`.

Content components **import** their CSS. Desktop ≥1440px stays pixel-identical. Mobile/tablet rules live in the **same CSS file** under `@media (max-width: …)`. Prefer `:hover` over `style-hover`. `useStyleHover()` still runs in `PageShell` in case any leftover attribute exists.

Intentional leftover inline `style={{}}`: Harlem star fill width; school row `translateY`.

Do **not** use `overflow-x: hidden` on `.site-page` (it forces a second vertical scrollbar). Use `overflow-x: clip` on `html` only (`src/index.css`).

---

## 2. Directory map (use this when creating or editing files)

Repo root is `d:\montfortre\ghl-react` (GitHub `FerozArshad/montfortre`). Put app code under these paths only.

```
ghl-react/
├── index.html                 # charset + viewport + favicon only (no title/description)
├── package.json
├── DOCUMENTATION.md           # this file
├── src/
│   ├── main.tsx               # createRoot; imports index.css, App.css, responsive.css
│   ├── App.tsx                # MobileHeader ONCE, then <Routes> (20 + *)
│   ├── index.css              # html overflow-x: clip — do not hide overflow on .site-page
│   ├── App.css
│   ├── responsive.css         # global mobile overflow / min-width overrides
│   ├── pages/                 # THIN wrappers only — no body copy
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── AboutUs.tsx
│   │   ├── Blog.tsx
│   │   ├── BedfordStuyvesant.tsx
│   │   ├── BrooklynHeights.tsx
│   │   ├── Chelsea.tsx
│   │   ├── DowntownBrooklyn.tsx
│   │   ├── Dumbo.tsx
│   │   ├── Harlem.tsx
│   │   ├── UpperEastSide.tsx
│   │   ├── UpperWestSide.tsx
│   │   ├── Williamsburg.tsx
│   │   ├── StanleyMontfort.tsx
│   │   ├── SuccessStories.tsx
│   │   ├── TwoFamilyHouseForSaleNyc.tsx
│   │   ├── BrownstoneBuyingGuide.tsx
│   │   ├── Neighborhoods.tsx
│   │   ├── IdxSales.tsx
│   │   ├── IdxRentals.tsx
│   │   └── NotMigrated.tsx
│   ├── components/
│   │   ├── Seo.tsx
│   │   ├── MobileHeader.tsx
│   │   ├── NavLink.tsx
│   │   ├── HarlemSchools.tsx
│   │   ├── layout/DesktopHeader.tsx
│   │   ├── layout/SiteFooter.tsx
│   │   ├── shared/ResourcesSection.tsx
│   │   ├── shared/ContactSection.tsx
│   │   ├── home/HomeContent.tsx
│   │   ├── services/ServicesContent.tsx
│   │   ├── about/AboutUsContent.tsx
│   │   ├── blog/BlogContent.tsx
│   │   ├── bedford-stuyvesant/BedfordStuyvesantContent.tsx
│   │   ├── brooklyn-heights/BrooklynHeightsContent.tsx
│   │   ├── chelsea/ChelseaContent.tsx
│   │   ├── downtown-brooklyn/DowntownBrooklynContent.tsx
│   │   ├── dumbo/DumboContent.tsx
│   │   ├── harlem/HarlemContent.tsx
│   │   ├── upper-east-side/UpperEastSideContent.tsx
│   │   ├── upper-west-side/UpperWestSideContent.tsx
│   │   ├── williamsburg/WilliamsburgContent.tsx
│   │   ├── stanley/StanleyMontfortContent.tsx
│   │   ├── success/SuccessStoriesContent.tsx
│   │   ├── two-family/TwoFamilyContent.tsx
│   │   ├── brownstone/BrownstoneGuideContent.tsx
│   │   ├── neighborhoods/NeighborhoodsContent.tsx
│   │   └── idx/IdxSearchLayout.tsx
│   ├── layouts/
│   │   ├── PageShell.tsx      # Seo + DesktopHeader + children + footer
│   │   └── SiteLayout.tsx     # UNUSED leftover — do not wire
│   ├── seo/
│   │   ├── types.ts
│   │   └── pages/*.ts         # frozen TITLE / METAS / LINKS / JSON_LD
│   ├── styles/                # 37 CSS files — desktop + @media in the SAME file
│   ├── hooks/
│   ├── lib/utils.ts
│   ├── lib/siteOrigin.ts
│   ├── data/harlemSchools.json
│   └── test/
└── public/
    ├── redesign-assets/       # logo, listings, OG, favicons, hoods, services
    ├── instagram/
    ├── favicon.svg
    ├── robots.txt
    └── sitemap.xml            # 20 migrated URLs only
```

`App.tsx` must keep `<MobileHeader />` above `<Routes>`. Canonical routes live in `App.tsx` (ignore `ROUTES.tsx.snippet` if it exists). Do not add neighborhood/service/blog-article routes.

---

## 2b. How to write and edit code

**Stack:** React 18 + Vite 5 + TypeScript. Not Next.js. No HTML-string pages. No `dangerouslySetInnerHTML` on pages. No AgentFire CDN URLs.

### Edit an existing migrated page

| Change | File(s) |
|---|---|
| Visible copy, headings, images, links in the body | `src/components/<area>/*Content.tsx` |
| Desktop or mobile layout | `src/styles/<page>.css` (and home `home-*.css`) |
| Shared header / footer / mobile nav | `DesktopHeader.tsx`, `SiteFooter.tsx`, `MobileHeader.tsx` |
| Shared blog teaser / contact form | `ResourcesSection.tsx`, `ContactSection.tsx` + their CSS |
| Head tags (title, meta, canonical, JSON-LD) | `src/seo/pages/<seo>.ts` — **frozen; do not edit values** |
| Route wiring only | `src/pages/<Page>.tsx` |

Do not put body markup in `src/pages/*.tsx`. Do not put a page `<style>` block in TSX. Import CSS from the content component (or PageShell for shared shell CSS).

### Page file pattern (required)

`src/pages/Services.tsx` is the template:

```tsx
import ServicesContent from "../components/services/ServicesContent";
import PageShell from "../layouts/PageShell";
import { SERVICES_SEO } from "../seo/pages/services";

export default function Services() {
  return (
    <PageShell seo={SERVICES_SEO} pageClassName="services-page">
      <ServicesContent />
    </PageShell>
  );
}
```

Content file imports its CSS:

```tsx
import "../../styles/services-page.css";
```

IDX pages use the same `PageShell` with `showFooter={false}` and `showDesktopHeader={false}`, then `IdxSearchLayout`.

### CSS rules when you write styles

1. Put new rules in `src/styles/*.css`, not inline `style={{}}` (except the two Harlem leftovers: star fill width, school row `translateY`).
2. Desktop ≥1440px must stay pixel-identical to the design. Add mobile only inside `@media (max-width: 1024px | 768px | 480px)` in the **same** file as the desktop class.
3. Prefer CSS `:hover`. Do not add `style-hover` attributes.
4. Do not use `overflow-x: hidden` on `.site-page`.
5. Breakpoints used: **1024**, **768**, **480**. Verify 375 / 768 / 1440.

### Links and assets

- Internal `<a href="/harlem/">` — trailing slash. React Router `path="/harlem"` — no trailing slash.
- Images: `/redesign-assets/...` or `/instagram/...` under `public/`.
- Phone `(646) 970-1078`. Email `sm@montfortre.com`. Do not rewrite Calendly, OLR IDX, or social `sameAs`.
- Neighborhood nav labels: `{Neighborhood} Realtor`.

### Adding a new migrated page (only when the owner picks a `[LEFT]` URL)

Do **not** invent routes. If the owner asks to migrate one live URL from `seo-audit/live-page-sitemap-urls.txt`:

1. Copy live title/description/H1/canonical into a **new** `src/seo/pages/<name>.ts` exporting `*_SEO` (match live; then freeze).
2. Create `src/components/<folder>/<Name>Content.tsx` with markup + `import "../../styles/<name>.css"`.
3. Create `src/styles/<name>.css` (desktop + mobile queries).
4. Create thin `src/pages/<Name>.tsx` as above.
5. Add one `<Route>` in `src/App.tsx` (path without trailing slash). Keep `<MobileHeader />` once above `<Routes>`. Keep `*` → `NotMigrated` last.
6. Add the trailing-slash URL to `public/sitemap.xml`.
7. Add fetch URLs to `GHL-PASTE-TO-STUDIO.md`.
8. Do not wrap the page in `SiteLayout` (MobileHeader would duplicate).

### What not to do

- Do not restore HTML strings or `dangerouslySetInnerHTML` for page bodies.
- Do not edit frozen SEO to “fix” a crawl — compare to live + `seo-audit/`.
- Do not wire `src/layouts/SiteLayout.tsx`.
- Do not commit `node_modules` or `d:\montfortre\reference\`.

---

## 3. Pages done vs left (sitemap)

**Migrated (20)** — also listed in `public/sitemap.xml` and `src/App.tsx`:

| URL (trailing slash in links) | Router path | Page | Content | CSS | SEO module |
|---|---|---|---|---|---|
| `/` | `/` | `Home.tsx` | `home/HomeContent.tsx` | `home-*.css` | `seo/pages/home.ts` |
| `/services/` | `/services` | `Services.tsx` | `services/ServicesContent.tsx` | `services-page.css` | `services.ts` |
| `/about-us/` | `/about-us` | `AboutUs.tsx` | `about/AboutUsContent.tsx` | `about-page.css` | `aboutUs.ts` |
| `/blog/` | `/blog` | `Blog.tsx` | `blog/BlogContent.tsx` | `blog-page.css` | `blog.ts` |
| `/bedford-stuyvesant/` | `/bedford-stuyvesant` | `BedfordStuyvesant.tsx` | `bedford-stuyvesant/BedfordStuyvesantContent.tsx` | `harlem-page.css` + `bedford-stuyvesant-page.css` | `bedfordStuyvesant.ts` |
| `/brooklyn-heights/` | `/brooklyn-heights` | `BrooklynHeights.tsx` | `brooklyn-heights/BrooklynHeightsContent.tsx` | `harlem-page.css` + `brooklyn-heights-page.css` | `brooklynHeights.ts` |
| `/chelsea/` | `/chelsea` | `Chelsea.tsx` | `chelsea/ChelseaContent.tsx` | `harlem-page.css` + `chelsea-page.css` | `chelsea.ts` |
| `/downtown-brooklyn/` | `/downtown-brooklyn` | `DowntownBrooklyn.tsx` | `downtown-brooklyn/DowntownBrooklynContent.tsx` | `harlem-page.css` + `downtown-brooklyn-page.css` | `downtownBrooklyn.ts` |
| `/dumbo/` | `/dumbo` | `Dumbo.tsx` | `dumbo/DumboContent.tsx` | `harlem-page.css` + `dumbo-page.css` | `dumbo.ts` |
| `/harlem/` | `/harlem` | `Harlem.tsx` | `harlem/HarlemContent.tsx` + `HarlemSchools.tsx` | `harlem-page.css` | `harlem.ts` |
| `/upper-east-side/` | `/upper-east-side` | `UpperEastSide.tsx` | `upper-east-side/UpperEastSideContent.tsx` | `harlem-page.css` + `ues-page.css` | `upperEastSide.ts` |
| `/upper-west-side/` | `/upper-west-side` | `UpperWestSide.tsx` | `upper-west-side/UpperWestSideContent.tsx` | `harlem-page.css` + `uws-page.css` | `upperWestSide.ts` |
| `/williamsburg/` | `/williamsburg` | `Williamsburg.tsx` | `williamsburg/WilliamsburgContent.tsx` | `harlem-page.css` + `williamsburg-page.css` | `williamsburg.ts` |
| `/stanley-montfort/` | `/stanley-montfort` | `StanleyMontfort.tsx` | `stanley/StanleyMontfortContent.tsx` | `stanley-page.css` | `stanleyMontfort.ts` |
| `/success-stories/` | `/success-stories` | `SuccessStories.tsx` | `success/SuccessStoriesContent.tsx` | `success-page.css` | `successStories.ts` |
| `/2-family-house-for-sale-nyc/` | `/2-family-house-for-sale-nyc` | `TwoFamilyHouseForSaleNyc.tsx` | `two-family/TwoFamilyContent.tsx` | `two-family-page.css` | `twoFamily.ts` |
| `/advice-for-buyers-looking-to-purchase-brownstones/` | same path | `BrownstoneBuyingGuide.tsx` | `brownstone/BrownstoneGuideContent.tsx` | `brownstone-guide.css` | `brownstoneGuide.ts` |
| `/neighborhoods/` | `/neighborhoods` | `Neighborhoods.tsx` | `neighborhoods/NeighborhoodsContent.tsx` | `neighborhoods-page.css` | `neighborhoods.ts` |
| `/idx-sales/` | `/idx-sales` | `IdxSales.tsx` | `idx/IdxSearchLayout.tsx` | `idx-page.css` | `idxSales.ts` |
| `/idx-rentals/` | `/idx-rentals` | `IdxRentals.tsx` | `IdxSearchLayout.tsx` | `idx-page.css` | `idxRentals.ts` |

**Not migrated (on purpose)** — `NotMigrated.tsx` + `not-migrated.css`. Live WordPress `page-sitemap.xml` lists ~197 page URLs; this SPA ships **20**. Examples still live: `/crown-heights/`, `/nyc-buyers-agent-service/`, listing addresses, service subpages, blog posts (`post-sitemap.xml`). **Do not invent those pages.** Nav may still link to them; they show the “not migrated” card. Pick new work from `seo-audit/live-page-sitemap-urls.txt` (`[LEFT]`).

Internal `<a href>` uses trailing slashes (`/harlem/`). React Router `path` does not.

Live WP does **not** list `/idx-sales/` or `/idx-rentals/` in `page-sitemap.xml` — those are SPA routes wrapping OLR. `/advice-for-buyers-looking-to-purchase-brownstones/` exists on live (Screaming Frog) even if it is missing from the XML dump.

---

## 3b. robots.txt — do not block good bots

**Live:** https://montfortre.com/robots.txt  
**Repo (serve at cutover):** `public/robots.txt`

AI / search crawlers are **Allow: /** (GPTBot, ChatGPT-User, Google-Extended, GoogleOther, ClaudeBot, anthropic-ai, PerplexityBot, CCBot, OAI-SearchBot, Applebot-Extended, Meta-ExternalAgent, Amazonbot, MistralAI-User, DotBot, SemrushBot, MJ12bot, AhrefsBot).

Keep these **four** `Disallow: /` user-agents (scrapers, not Google/AI):

1. `ZoominfoBot`
2. `SeznamBot`
3. `BLEXBot`
4. `Huckabot`

Path disallows under `User-agent: *` (WordPress leftovers; keep so cutover matches live): `/wp-admin/` (except `admin-ajax.php`), `/wp-json/agentfire/v1/core/cron/`, `/?s=`, `/cgi-bin/`.

**Sitemap line difference (expected):** live file points at `https://montfortre.com/sitemap_index.xml`. This repo points at `https://montfortre.com/sitemap.xml` because the SPA only publishes the 20 migrated URLs. Do not paste the full WP sitemap into `public/sitemap.xml` until those pages exist. Host must actually serve these two files at the web root (`GHL-LAUNCH-CHECKLIST.md`).

---

## 3c. IDX (OLR) — what is in the system vs not

Vendor search lives on `stanley.olridx.com`. Do not rewrite those URLs.

| Vendor item | In this SPA? | Where |
|---|---|---|
| Sales iframe `https://stanley.olridx.com/Search/Sales` | **Yes** | `src/pages/IdxSales.tsx` → `IdxSearchLayout` `iframeSrc` |
| Rentals iframe `https://stanley.olridx.com/Search/Rentals` | **Yes** | `src/pages/IdxRentals.tsx` |
| Customer Login `https://stanley.olridx.com/#` | **Yes** | Desktop + mobile Listings nav; IDX footnote |
| iframe `width="100%"` `height="1200"` `scrolling="yes"` | **Yes** | `.idx-frame` in `src/styles/idx-page.css` + `scrolling="yes"` on the iframe |
| Mobile-friendly iframe | **Partial** | Same CSS: `@media (max-width: 1023.98px)` → `height: 70vh; min-height: 480px` |
| iframe-resizer library | **No** | Vendor suggestion only — `TODO.md` |
| Pre-populated results (`…/Search/Sales#93234`) | **No** | Not wired — `TODO.md` |
| Building Quick URLs (`…/Search/Quick?idr=False#93247`) | **No** | Not wired — `TODO.md` |

Home hero search can open `https://stanley.olridx.com/Search/` + type in a **new tab**. Do not add extra IDX routes or hash URLs unless the owner supplies real OLR IDs.

---

## 3d. Mobile-friendly (required)

Every migrated page must work at **375 / 768 / 1440**. Desktop ≥1440px stays pixel-identical. Mobile/tablet rules live next to desktop classes in `src/styles/*.css`. Mobile nav is `MobileHeader` (once in `App.tsx`). Do not put `overflow-x: hidden` on `.site-page`. Re-check IDX iframe on a phone: no horizontal page scroll; “Open full search in new tab” remains available if the iframe is cramped.

---

## 4. GHL handoff

Studio **cannot** git clone. Ingest = raw GitHub URLs or paste file bodies.

| Doc | Use |
|---|---|
| `GHL-PASTE-TO-STUDIO.md` | Fetch list: shared runtime + CSS + per-page files |
| `GHL-URLS.md` | Flat dump of raw URLs including `public/` images |
| `GHL-TRANSFER-TRACKING.md` | SENT / FETCHED / VERIFIED — update after Studio writes |
| `GHL-LAUNCH-CHECKLIST.md` | Platform blockers (prerender, 404 status, robots) |
| `TRANSFER-GUIDE.md` | Path → path copy tables |

**How Studio must write a file**

1. Fetch `https://raw.githubusercontent.com/FerozArshad/montfortre/main/<path>`
2. Save at the **same path** after `/main/` (example: `src/styles/services-page.css`).
3. Do not invent pages. Do not edit SEO values. Do not wrap content in `dangerouslySetInnerHTML`.
4. Images are binary — fetch raw URLs from `GHL-URLS.md`, do not paste image bytes as text.
5. After a local CSS/TSX change, re-fetch those exact files into Studio.

If raw fetch truncates, paste **one full file per GHL message** using the paths listed in `GHL-PASTE-TO-STUDIO.md` (section 0 first, then each page).

---

## 5. Standards / constraints

1. Desktop ≥1440px pixel-identical. Responsive only in `max-width` queries. All 18 routes must be mobile-friendly.
2. Do not change copy, phone, H1 counts, or link targets.
3. Do not rewrite Calendly, IDX, email, or social profile URLs.
4. Google review badges stay overlapping the photo (bottom-right), not a full-width bar under it.
5. Neighborhood nav labels: `{Neighborhood} Realtor`.
6. Commit/push **`main`** when the owner wants GitHub (GHL) updated. Do not commit `node_modules`. Workspace snapshot branch is **`local-root`** (`BRANCHES.md`). Never merge `local-root` into `main`.

### Reference material (not in git)

- `d:\montfortre\reference\` — HTTrack / design exports. Do not ship scraped HTML.
- Live site https://montfortre.com/ + `seo-audit/screaming-frog-montfortre.xlsx` — SEO/copy reference for frozen values and new-page candidates.
- Live sitemaps: https://montfortre.com/page-sitemap.xml (pages), https://montfortre.com/post-sitemap.xml (blog posts).

---

## 6. Markdown files that remain

| File | Role |
|---|---|
| `BRANCHES.md` | `local-root` vs `main` — clone, pull, push, PR |
| **`DOCUMENTATION.md`** | Source of truth — structure, how to write code, pages, SEO, GHL |
| `TODO.md` | Open tasks — do not implement until asked |
| `seo-audit/` | Screaming Frog xlsx + live page-sitemap URLs |
| `AGENTS.md` | Short agent contract |
| `AGENT-ONBOARDING.md` | Onboarding pointer into this file |
| `PROJECT-CONTEXT.md` | Session notes |
| `GHL-PASTE-TO-STUDIO.md` | Fetch URLs |
| `GHL-URLS.md` | Image + file URL dump |
| `GHL-TRANSFER-TRACKING.md` | Fetch checklist |
| `GHL-LAUNCH-CHECKLIST.md` | Platform launch blockers |
| `TRANSFER-GUIDE.md` | Copy path tables |
| `GHL-STUDIO-STRUCTURE.md` | Directory checklist (keep aligned with §2) |
| `HANDOFF.md` | Platform launch blockers + SEO audit history |
| `HANDOFF-SECTION-seo-launch-readiness.md` | Platform vs repo SEO |
| `README.md` | Human README |

Canonical routes: `src/App.tsx`. Git folder: `d:\montfortre\ghl-react`.

---

## 7. Dev commands

```bash
cd d:\montfortre\ghl-react
npm install
npm run dev
npm run typecheck
npm run lint
npm run test
npm run build
```

---

## 8. GitHub branches (short)

- **`main`** — this directory’s files at GitHub root. GHL fetch URLs use `/main/src/...`.
- **`local-root`** — `ghl-react/` + `reference/` matching `d:\montfortre`. Other developers clone this branch to get the same folders.
- How to pull/push/PR: **`BRANCHES.md`**. Do not merge the two branches.
