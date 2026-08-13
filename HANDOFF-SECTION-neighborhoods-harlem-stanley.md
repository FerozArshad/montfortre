# Section handoff — Neighborhoods responsiveness, Harlem schools, Stanley hero

> **Status (2026-08-13):** Neighborhoods, Harlem, and Stanley are converted TSX pages (`PageShell` + content components). Harlem schools still render via `<HarlemSchools />` inside `HarlemContent`. The patterns below describe the earlier HTML-string era and are kept for history.

**Date:** 2026-08-10  
**Local dev:** `npm run dev` → http://localhost:5173/  
**Prior chat transcript:** `C:\Users\feroz\.cursor\projects\d-Montfortr\agent-transcripts\ae837346-cdf1-4dd4-88d5-f1f4050703e1\ae837346-cdf1-4dd4-88d5-f1f4050703e1.jsonl`  
**Parent handoff:** `montfortre/HANDOFF.md` (repo-wide constraints, launch blockers, responsiveness strategy)

---

## Session goals (what the site owner asked for)

1. **Harlem `/harlem/`** — Replace teaser schools block with live-site school list: filter dropdown, phone, type, grades, star ratings, vertical scroll (4 rows visible).
2. **Stanley Montfort `/stanley-montfort/`** — Update **hero only** to bio headshot (suit + gold tie). Story section image must stay separate.
3. **Neighborhoods `/neighborhoods/`** — Mobile polish matching other responsive pages: CTAs, “What working with us means”, neighborhood image→data flow, “Not sure which neighborhood fits?” card, hero Google badge overlap on image corner.

**No git commits were requested in this session.** Changes are local only.

---

## Hard constraints (do not break)

From `HANDOFF.md` — still apply to all work above:

- **SEO frozen:** Do not edit `TITLE`, `METAS`, `LINKS`, `JSON_LD` in page files.
- **Content frozen:** Headings, copy, phone `(646) 970-1078`, link targets.
- Keep `style-hover` attributes and `useStyleHover()` on each page component.
- Desktop layout at ≥1440px should remain pixel-identical; responsive rules sit in `max-width` media queries only.

---

## 1. Harlem schools section

### User problem
Live site has a full interactive schools list at `#top-schools`. Redesign had a static teaser.

### Solution
React component + JSON data, injected into `Harlem.tsx` without changing SEO HTML around it.

### Files

| Path | Role |
|------|------|
| `src/components/HarlemSchools.tsx` | Filter dropdown (All / Preschool / Elementary / Middle / High), 4-row vertical list with up/down scroll, star ratings, mobile-friendly layout |
| `src/data/harlemSchools.json` | 104 schools parsed from live markup |
| `src/pages/Harlem.tsx` | Split `HTML` at `<!--HARLEM_SCHOOLS-->`; renders `<HarlemSchools />` between before/after chunks |
| `scripts/extract-harlem-schools.mjs` | One-off extraction script (regenerate JSON if live site changes) |
| `tsconfig.json` | `resolveJsonModule: true` for JSON import |

### Integration pattern (`Harlem.tsx`)

```tsx
const [HTML_BEFORE, HTML_AFTER] = HTML.split("<!--HARLEM_SCHOOLS-->");
// ...
<div dangerouslySetInnerHTML={{ __html: HTML_BEFORE }} />
<HarlemSchools />
<div dangerouslySetInnerHTML={{ __html: HTML_AFTER }} />
```

Marker in template literal: line ~449 `<!--HARLEM_SCHOOLS-->`.

### Verify
- http://localhost:5173/harlem/#top-schools
- Filter changes list; scroll buttons move 4 rows; ratings show where data has `rating`.

---

## 2. Stanley Montfort hero image

### User requirement (explicit)
- **Hero circular photo** → bio headshot.
- **“How Stanley Montfort got started” story image** → keep `stanley-portrait` (not bio).

### Files

| Path | Role |
|------|------|
| `public/redesign-assets/stanley-montfort-bio.jpg` | Bio headshot (from AgentFire CDN `bio-pic-2.jpg`, 500×500) |
| `src/pages/StanleyMontfort.tsx` | Hero `img` → `/redesign-assets/stanley-montfort-bio.jpg`; story section → `/redesign-assets/stanley-portrait.webp` |

### Verify
- http://localhost:5173/stanley-montfort/
- Top hero = suit/tie bio; lower story block = different portrait.

### Note
`stanley-portrait.png` was huge (3277×4096) and broke hero before bio swap. Other pages may still reference `stanley-portrait.png` (Home, AboutUs, BrownstoneBuyingGuide) — intentional.

---

## 3. Neighborhoods page responsiveness

### Route
- `src/main.tsx`: `<Route path="/neighborhoods" element={<Neighborhoods />} />`
- URL: `/neighborhoods/` (trailing slash via router)

### Primary file
`src/pages/Neighborhoods.tsx` — full page in `const HTML` template literal + page-level `<style>` responsive block (lines ~223–374 in first `<style>` tag).

### Reference pages (copy patterns from)
- `src/pages/TwoFamilyHouseForSaleNyc.tsx` — hero CTAs side-by-side, location grids, bottom CTA card
- `src/pages/Services.tsx` — same hero/CTA patterns + neighborhood link grid
- `src/pages/Harlem.tsx` — hero CTAs, stats/promises mobile fixes
- `src/responsive.css` — shared mobile header, grid blowout guards, desktop nav hide `<1024px`

### Global layout
- Outer wrapper: `width:100%; max-width:100%; overflow-x:hidden` (not `min-width:1440px`).
- `MobileHeader` from `main.tsx` shows below 1024px; page still embeds desktop `<header>` in HTML (hidden by shared CSS).

### Sections on the page

| `data-screen-label` | Content |
|---------------------|---------|
| `Neighborhoods hero` | H1, Book Now + phone, borough chips, hero image + Google badge |
| `Promises` | Dark band: “What working with us means” — 3 columns desktop |
| `Intro` | “Explore NYC Neighborhoods with Confidence” + Manhattan/Brooklyn chips |
| `Manhattan` | `#manhattan` — 4 alternating image/text rows (Harlem, UWS, UES, Chelsea) |
| `Brooklyn` | `#brooklyn` — 2-col card grid + full-width Park Slope card |
| `Not sure CTA` | Dark card + Book Now + phone |
| `Contact` | Form + map iframe |
| Footer | Standard site footer |

### Neighborhood assets
`public/redesign-assets/nbhd/` — hero `d86879d1.jpg`, Manhattan images (`65438018.png`, `eadc74f3.png`, etc.)

### Mobile CSS added (breakpoints: 1024 / 768 / 480)

All rules use attribute selectors on inline styles + `!important` (same strategy as other pages).

| Area | Behavior at ≤768px |
|------|---------------------|
| **Hero CTAs** | `flex-wrap:nowrap`, equal-width Book Now + phone on one row |
| **Google badge** | **Absolute overlap** on image bottom-right (`right:10px; bottom:-20px`), NOT full-width below image. Parent gets `margin-bottom:36px`. Excluded from `white-space:normal` via `:not([style*="right:-14px"])` |
| **Promises** | Single column; strip `padding:0 48px` and `border-right`; horizontal dividers between items |
| **Manhattan rows** | `display:flex; flex-direction:column`; `.hood-card { order:-1 }` so **image always above** title/links (fixes alternating desktop layout) |
| **Brooklyn cards** | Single column; reduced inner padding; Park Slope wide card stacks image then content |
| **Not sure CTA** | Column layout; full-width stacked buttons |
| **Typography / padding** | Section padding 56px; h1/h2 scale down; `px 64px` → 20px |

### Issues fixed (from owner screenshots)

1. Book Now + phone stacking awkwardly → side-by-side on hero, stacked full-width on dark CTA card.
2. Promises zig-zag / stray vertical line → removed column padding and right borders on mobile.
3. “Not sure which neighborhood fits?” → full-width button stack.
4. Google badge sitting below image as full-width bar → restored corner overlap like desktop/Services pages.

### Not done / follow-ups

- **Owner sign-off** on full page at real device widths (375px, 390px, 768px).
- **Neighborhoods desktop header** still in page HTML; relies on `responsive.css` + `MobileHeader` — same as other migrated pages.
- **Contact form** is non-functional markup (Submit links to Calendly) — pre-existing.
- **No automated tests** for responsive CSS.

### Verify checklist

```
http://localhost:5173/neighborhoods/
```

- [ ] 375px: no horizontal scroll
- [ ] Hero: Google badge overlaps image corner (not full-width below)
- [ ] Hero: Book Now + phone on one row
- [ ] Promises: three items left-aligned, no stagger
- [ ] Manhattan: each hood shows image then text (check UWS row — was text-first on desktop)
- [ ] Brooklyn: single-column cards; Park Slope image on top
- [ ] Not sure CTA: full-width stacked buttons
- [ ] Mobile header hamburger works (from `MobileHeader.tsx`)

---

## Architecture reminder (all three tasks)

```
Page.tsx
├── TITLE / METAS / LINKS / JSON_LD  (frozen)
├── const HTML = `<style>...</style> ... huge inline HTML ...`
└── export default () => (
      <Seo ... />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />  // or split + React children (Harlem)
    )
```

- Hover: `style-hover="..."` + `useStyleHover()`.
- Responsive: page-local `@media` in first `<style>` block inside `HTML` string; shared rules in `src/responsive.css`.

---

## Quick file manifest (this session)

| Action | Path |
|--------|------|
| Modified | `src/pages/Neighborhoods.tsx` |
| Modified | `src/pages/Harlem.tsx` |
| Modified | `src/pages/StanleyMontfort.tsx` |
| Added | `src/components/HarlemSchools.tsx` |
| Added | `src/data/harlemSchools.json` |
| Added | `scripts/extract-harlem-schools.mjs` |
| Added | `public/redesign-assets/stanley-montfort-bio.jpg` |
| Modified | `tsconfig.json` (`resolveJsonModule`) |

---

## For the next agent

1. Read `HANDOFF.md` before any SEO or route changes.
2. For more responsive pages, follow **Neighborhoods.tsx** + **TwoFamilyHouseForSaleNyc.tsx** `<style>` blocks — do not change desktop inline values; add `max-width` overrides only.
3. If Google badge regresses on mobile, check that nothing sets `position:relative` or `width:100%` on `[style*="right:-14px; bottom:-22px"]`.
4. If Harlem schools data is stale, re-run extraction script against live HTML or update `harlemSchools.json` manually.
5. Stanley: never swap story section image to bio without explicit owner request.
