# Section handoff — Content/asset parity, neighborhood guides, IDX & home lead PDF

> **Start here for the next agent session on this stream.** Parent handoffs: `HANDOFF.md`, `DOCUMENTATION.md`.  
> Git/ship rules (HARD): `.cursor/rules/git-main-vs-local-root.mdc` (local only — never push that file).

**Date:** 2026-09-04  
**Stream name:** Neighborhood guide restore + live asset wiring + IDX performance + home download PDF  
**Live site (source of truth for content/assets):** https://montfortre.com/  
**Local Vite:** `http://127.0.0.1:5173/` (from `montfortre-ghl-studio/`: `npx vite --host 127.0.0.1 --port 5173`)

---

## 0. Two-repo mental model (read first — never confuse)

| Location | Remote | Branch | Role |
|---|---|---|---|
| `d:\montfortre` (this Cursor workspace) | `FerozArshad/montfortre` | **`local-root` only** | Full clone + `montfortre-ghl-studio/` + `montfortre-com/` + docs. **Local work only. Do not `git push` here.** |
| `d:\montfortre\montfortre-loveable` | `smontfort/monttfortre` | **`main` only** | **Only deploy target.** App at repo root (`src/`, `public/`, `supabase/`). |

**Ship = copy rewritten paths from `montfortre-ghl-studio/` → Lovable clone → commit + `git push origin main`.** Never merge the two remotes. Never force-push.

Path rewrite examples:

| Local (`local-root`) | Lovable (`main`) |
|---|---|
| `montfortre-ghl-studio/src/...` | `src/...` |
| `montfortre-ghl-studio/public/...` | `public/...` |
| `montfortre-ghl-studio/supabase/functions/...` | `supabase/functions/...` |
| `montfortre-ghl-studio/HANDOFF*.md` | `HANDOFF*.md` |

When talking to the user about shipped files, use **Lovable paths only** (e.g. `src/pages/Foo.tsx`).

---

## 1. Last successful ship (do not re-push blindly)

| Item | Value |
|---|---|
| Lovable commit | **`3441abf`** |
| Message | Ship neighborhood guide restores, FAQ accordions, IDX speedups, and home lead PDF |
| Remote | `https://github.com/smontfort/monttfortre.git` → `main` |
| Range | `a5e41cc..3441abf` (~636 files) |
| Local-root | Still has **uncommitted** working-tree changes vs its own last commit (`91d8c74`). That is normal — local may be dirty while Lovable already has the ship. |

**Before any new ship:** in `d:\montfortre\montfortre-loveable` run `git pull --ff-only origin main` first (Lovable’s own agent also commits there).

---

## 2. What this stream completed (shipped in `3441abf`)

### 2.1 Missing neighborhood guide copy restored

Pages that previously had stub/empty guide bodies now load full WHY / OUR SERVICES / BUYING / WHY WORK WITH US sections from HTML guides:

- `/bedford-stuyvesant-sros-2/`
- `/bedford-stuyvesant-co-ops-2/`
- `/bedford-stuyvesant-co-ownership/`
- `/williamsburg-co-ops/` **(new route)**
- `/williamsburg-condos/`
- `/williamsburg-brownstones-2/`
- `/williamsburg-co-ownership/`

**Guide source files:** `src/data/neighborhood-guides/*.html` (**40** HTML files).  
**Renderer:** `src/components/shared/NeighborhoodGuideBody.tsx` (sanitizes + FAQ convert + contact strip).

### 2.2 FAQ dropdowns on guide pages

- Live guides use headings like **“Frequently Asked Questions About …”** (not the bare word `FAQ`).
- Converter matches that pattern and turns `h3` Q&A blocks into `.faq-ac` / `<details>` accordion.
- DOMPurify allowlist includes `details`, `summary`, `aria-hidden`, `open` (`src/lib/cms/sanitize.ts`).
- Styles: `src/styles/faq-accordion.css` + hooks in `src/styles/neighborhood-guide.css`.
- **~33** long guides get accordions. Short Bed-Stuy/Williamsburg stubs above have **no FAQ section on live either**.

### 2.3 Layout / full-width / responsive

- Guide body: full width of content column (no 920px right gutter).
- `.nbhd-intro-inner`: single column by default; 2-col only when a second child exists.
- ~40 `*-page.css` files: hero forced to 1-col **only when no** `.nbhd-hero-media` (`:not(:has(.nbhd-hero-media))`).
- Desktop hero with media: `.site-page .nbhd-hero .nbhd-hero-inner:has(.nbhd-hero-media)` restores 2-col.
- Home areas: Bedford-Stuyvesant card title wrap + blurb clamp (`src/styles/home-areas.css`).
- Home download H2 wrap (`src/styles/home-download.css`).
- Mobile smoke (390px): no horizontal overflow on home.

### 2.4 Realtor Reviews polish

- `src/styles/home-reviews.css` + `src/components/shared/ReviewsSection.tsx`
- Transparent backgrounds on score/title (avoid gray “selection” bars)
- Score copy stacked cleanly under Google rating

### 2.5 New / restored routes

| Route | Page | Notes |
|---|---|---|
| `/chelsea-condos/` | `src/pages/ChelseaCondos.tsx` | Long Surfer-style guide + images |
| `/williamsburg-co-ops/` | `src/pages/WilliamsburgCoOps.tsx` | Restored from live/HTTrack |

Wired in `src/App.tsx` (slashless path in Router).

### 2.6 IDX / OLR listings performance

| Piece | Path | Behavior |
|---|---|---|
| Client fetch + SWR cache | `src/lib/olrListings.ts` | Memory + **localStorage** (`montfort-olr-v2:`), fresh 5m / stale 2h |
| Prefetch | Home idle + nav hover on Homes For Sale | `prefetchOlrSalesCatalog(12)` |
| IDX UI | `src/components/idx/IdxSearchLayout.tsx` | Page size **12**, skeleton cards while loading |
| Dev proxy | `vite.olr-api.ts` | `/api/olr-listings`, `/api/olr-saved-search`; warms cookie+catalog on Vite start |
| Prod edge | `supabase/functions/olr-saved-search/` | Cache-Control 900s; used when not `import.meta.env.DEV` |
| Vite plugins | `vite.config.ts` | `olrSavedSearchApi()` + `agentfireMediaProxy()` |

**Honest limit:** first cold OLR hit can still be slow (OLR itself). Warm cache / prefetch makes repeat visits fast.

### 2.7 Home lead magnet: 15 Costly Mistakes + PDF

- Copy updated **11 → 15** on home download section (`src/components/home/HomeContent.tsx`).
- `GuideDownloadForm` accepts `fileUrl`; after successful lead, opens PDF + “Download again” link.
- Public file: `public/redesign-assets/guides/nyc-brownstone-buyer-mistakes-2026-2027.pdf` (~12.5 MB)  
  (source copy also at `montfortre-ghl-studio/src/NYC_Brownstone_Buyer_Mistake Guide_2026-2027_Branded.pdf` — **do not ship the `src/` PDF**; public path only).

### 2.8 Footer links (verified)

`src/components/layout/SiteFooter.tsx`:

- Services: Buyer’s Agent, Listing Agent, Multifamily, Home Valuation, Mortgage Calculator, **NYC Brownstone Calculators** → `/services/#nyc-brownstone-calculators`
- Neighborhoods: all 11 hubs (Harlem → Park Slope)
- About: Stanley Montfort, Contact (Calendly), Success Stories, Resources (`/blog/`)
- Legal: Privacy Policy, Sitemap
- Contact block: phone, address, email, socials, REBNY

### 2.9 Shared chrome added/used this stream

| Component | Role |
|---|---|
| `NeighborhoodGuideBody` | HTML guide render + FAQ + contact strip |
| `PageContactSection` | End-of-page contact CTA on nbhd pages |
| `PageListingsSection` | OLR saved-search carousel / grid on nbhd pages |
| `ReviewsSection` | Sitewide Google reviews carousel |
| `IdxListingLeadModal` | Listing lead modal (if present in tree) |

### 2.10 Assets

| Location | Notes |
|---|---|
| `public/redesign-assets/migrated-live/` | **~350** files migrated from live/HTTrack |
| `public/redesign-assets/hoods/guides/` | In-article Surfer/guide images |
| `public/redesign-assets/hoods/*` | Updated hood heroes (Chelsea, Crown Heights, Downtown, Dumbo, Harlem, Park Slope, etc.) |

**Do not invent replacement images.** Prefer exact live filenames under `migrated-live/{ExactLiveFilename}`.

---

## 3. Honesty rules (content / asset audits)

User required **strict** audits earlier. Do **not** claim sitewide PASS.

| Fact | Number / note |
|---|---|
| Live sitemap URLs (pages + posts) | ~**253** |
| Local explicit routes (approx) | ~**95–120** depending how counted |
| Overlap inspected in prior audit | ~**86** |
| Guides with FAQ accordion | ~**33** |
| `migrated-live` files | ~**350**; many still **unwired** in components |
| Home hero on live | **Video** (`Stanley Montfort New Hero.mp4`) — local still often static image → **BLOCKED** vs exact live hero |
| Live-only URLs | Listings trees, many posts, some IDX URLs — not all in SPA |

**Next major phase (user-specified, not done):** page-by-page rendered DOM asset compare for **all 253** sitemap URLs (including lazy/below-fold). Do not shortcut.

---

## 4. Known open / blocked items

1. **Home video hero** — live uses MP4; local static image. Mark ASSET MIGRATION BLOCKED until exact video is wired.
2. **Unwired `migrated-live` files** — hundreds still not referenced in `src/`.
3. **Full 253-URL DOM/asset parity** — not started as a complete pass.
4. **Success / privacy / sitemap / current-listings / buyers-agent hero / stanley-montfort patterns** — called out in prior wiring reports as remaining gaps; re-verify before claiming done.
5. **Local-root dirty tree** — many modified/untracked files under `montfortre-ghl-studio/` that were **already copied into Lovable `3441abf`**. Next session: either checkpoint-commit on `local-root` (no push) or `git status` carefully before editing so you don’t lose diffs.
6. **Scratch scripts** — `montfortre-ghl-studio/scripts/_tmp-*`, `_audit-out/`, `_tmp-live-pages/` — **never ship** to Lovable.
7. **Vite** — if `127.0.0.1:5173` is down, restart:  
   `cd d:\montfortre\montfortre-ghl-studio; npx vite --host 127.0.0.1 --port 5173`
8. **Supabase OLR function** — production depends on deployed `olr-saved-search`. Dev uses Vite middleware. Redeploy edge function only if prod IDX regressions appear after Lovable deploy.
9. **Older HANDOFF-SECTION files** (SEO launch, GHL Studio, privacy) may still mention **GHL AI Studio / vibepreview** — deploy path today is **Lovable `main`**. Prefer this file + `git-main-vs-local-root.mdc` for ship instructions.

---

## 5. How pages are built (neighborhood subtype pattern)

Typical subtype page (`*-Content.tsx`):

1. `nbhd-hero` (+ optional media + `HeroGoogleRating`)
2. `PromisesBar variant="nbhd"`
3. `PageListingsSection` (`market`, `propertyType`, `idxUrl` with `#savedSearchId`)
4. `nbhd-intro` → `NeighborhoodGuideBody` with `*.html?raw` import
5. `ReviewsSection`
6. `ResourcesSection` (news cards)
7. Optional calc strip / extras
8. `PageContactSection`

SEO: frozen modules in `src/seo/pages/*.ts` — preserve live title/description/JSON-LD; do not invent SEO.

---

## 6. Key file index (this stream)

```
src/components/shared/NeighborhoodGuideBody.tsx
src/components/shared/PageContactSection.tsx
src/components/shared/PageListingsSection.tsx
src/components/shared/GuideDownloadForm.tsx
src/components/shared/ReviewsSection.tsx
src/components/idx/IdxSearchLayout.tsx
src/components/layout/SiteFooter.tsx
src/components/layout/DesktopHeader.tsx
src/components/home/HomeContent.tsx
src/lib/olrListings.ts
src/lib/cms/sanitize.ts
src/data/neighborhood-guides/*.html
src/styles/neighborhood-guide.css
src/styles/neighborhoods-page.css
src/styles/faq-accordion.css
src/styles/home-reviews.css
src/styles/home-areas.css
src/styles/home-download.css
src/styles/page-listings.css
vite.olr-api.ts
vite.agentfire-media.ts
vite.config.ts
supabase/functions/olr-saved-search/index.ts
public/redesign-assets/guides/nyc-brownstone-buyer-mistakes-2026-2027.pdf
public/redesign-assets/migrated-live/**
public/redesign-assets/hoods/**
```

Reference / research (local only, never push):

```
montfortre-com/httrack/**
montfortre-ghl-studio/scripts/_tmp-*
montfortre-ghl-studio/scripts/_audit-out/**
```

---

## 7. Required ship checklist (next time user says push/commit)

1. Implement under `d:\montfortre\montfortre-ghl-studio\`.
2. Optional: `git commit` on `local-root` as checkpoint — **do not push** `FerozArshad/montfortre`.
3. `cd d:\montfortre\montfortre-loveable` → `git pull --ff-only origin main`.
4. Copy only app files with path rewrite (no `montfortre-ghl-studio/` prefix). Exclude: `montfortre-com/`, `.cursor/`, `scripts/_tmp*`, `supabase/.temp`, `package-lock.json` unless asked, backup `.bin` junk, PDF under `src/`.
5. `git status` — confirm clean ship set.
6. `git commit` then `git push origin main` (never force).
7. Tell user Lovable commit SHA + short summary. Use Lovable paths in the summary.

---

## 8. Suggested next-session agenda (pick with user)

Priority order if user says “continue”:

1. **Verify Lovable deploy** of `3441abf` on production/preview (home PDF, FAQ dropdowns, restored guides, IDX).
2. **253-URL rendered DOM asset parity** (live vs local) — systematic, honest FAIL/PASS/BLOCKED table.
3. Wire remaining high-traffic **unwired `migrated-live`** heroes/inline images.
4. Home **video hero** (exact live MP4) or document permanent BLOCKED.
5. Checkpoint-commit dirty `local-root` working tree so local matches what already shipped.
6. Any new user-reported layout/content bugs on specific URLs.

---

## 9. Quick smoke commands

```powershell
# Dev server
cd d:\montfortre\montfortre-ghl-studio
npx vite --host 127.0.0.1 --port 5173

# Warm OLR (dev)
curl.exe -s -o NUL -w "%{http_code} %{time_total}s\n" "http://127.0.0.1:5173/api/olr-listings?mode=sales&page=0&pageSize=12"

# PDF present
curl.exe -s -o NUL -w "%{http_code} %{size_download}\n" "http://127.0.0.1:5173/redesign-assets/guides/nyc-brownstone-buyer-mistakes-2026-2027.pdf"

# Spot-check routes
# /bedford-stuyvesant-co-ops-2/
# /williamsburg-co-ownership/
# /chelsea-condos/   (FAQ accordion)
# /harlem-brownstones/ (FAQ + contact strip)
# /idx-sales/
# /  (15 Costly Mistakes + footer Brownstone Calculators)
```

---

## 10. Do / Don’t

**Do**

- Treat live HTML/HTTrack as content source of truth.
- Preserve SEO modules; don’t invent titles/descriptions.
- Prefer exact live asset bytes/names under `migrated-live/`.
- Report PASS/FAIL/BLOCKED honestly per URL.

**Don’t**

- Push `local-root` or `FerozArshad/montfortre`.
- Ship `montfortre-com/`, `_tmp_*`, `.cursor/`, or `montfortre-ghl-studio/` prefixes into Lovable.
- Claim sitewide content or asset PASS.
- Invent stock photos when live assets are missing — mark BLOCKED.
- Force-push Lovable `main`.

---

## 11. Related handoffs (may be stale on deploy target)

| File | Topic | Caution |
|---|---|---|
| `HANDOFF.md` | Parent architecture | Mentions older GHL Studio flow; ship target is now Lovable |
| `DOCUMENTATION.md` | Full route/coding source of truth | Prefer for route inventory |
| `HANDOFF-SECTION-seo-launch-readiness.md` | Platform SEO blockers | Platform may be Lovable now, not GHL shell |
| `HANDOFF-SECTION-lovable-cms.md` | CMS stream | Separate |
| `HANDOFF-SECTION-blog-articles.md` | Blog registry | Separate |
| `HANDOFF-SECTION-privacy-sitemap.md` | Legal pages | Separate |

**This file** is the continuity document for the **Sept 2026 content/asset/IDX/home-PDF** stream.

---

*End of section handoff. Next agent: confirm Lovable HEAD is `3441abf` (or newer), then pick agenda item from §8 with the user.*
