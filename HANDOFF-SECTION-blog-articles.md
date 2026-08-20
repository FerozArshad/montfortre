# Section handoff — Blog articles (shared Brownstone guide design)

> **Scope:** All **55** Montfort blog/article URLs from the live inventory — rebuild into the React SPA using one shared presentation shell, with **independent** content, SEO, and images per post.  
> **Not in scope:** The `/blog/` index teaser page (`Blog.tsx` / `blog-page.css`), neighborhood-page “realtor article” blocks (e.g. Harlem/UWS inline articles), or Park Slope property pages.

**Date:** 2026-08-17  
**Parent handoff:** `HANDOFF.md` / `DOCUMENTATION.md`  
**Repo:** https://github.com/FerozArshad/montfortre  
**GitHub `main` tip for this stream:** `e34a126` (includes `7ced154` + Harlem featured-image fix; later tips may include unrelated streams)  
**Local workspace:** `d:\GHL_Montfort` on branch **`local-root`** (app under `ghl-react/`) — never merge into `main`  
**Ship (historical):** `D:\GHL_Montfort_main_push15` — numbered worktrees are **retired**. Future ships: overlay rewritten files onto `origin/main` from `local-root` (no new local dir).  
**Design / UX reference (live local):** `http://localhost:5174/advice-for-buyers-looking-to-purchase-brownstones/`  
**Design HTML reference (local only):** `reference/design/Montfort homepage redesign/Brownstone Buying Guide.dc.html`  
**Inventory source (local only — do not push to `main`):** `reference/httrack/Blog_refrence.txt` (55 posts)  
**HTTrack captures (local only):** `reference/httrack/cdn-captures/montfortre.com/<slug>/`

---

## Why this stream exists

Live WordPress posts under `montfortre.com/<slug>/` needed to ship inside GHL AI Studio as React routes that:

1. **Match the approved Brownstone Buying Guide visual system** (hero, TOC, article body, share, author bio, contact).
2. **Keep each post’s own copy, images, and frozen SEO** — never copy Brownstones content/SEO onto other slugs.
3. **Preserve every live slug** so existing links and rankings do not break.
4. **Scale to dozens of posts** without hand-authoring 55 full JSX article bodies.

Outcome: **1 handcrafted reference page** + **54 registry-driven articles** sharing layout/CSS, all on GitHub `main` for GHL raw URL fetch.

---

## Inventory (complete — 55 / 55)

| Kind | Count | How it ships |
|---|---:|---|
| Handcrafted design reference | **1** | `BrownstoneBuyingGuide` + `BrownstoneGuideContent` + `src/seo/pages/brownstoneGuide.ts` |
| Shared-template articles | **54** | `src/blog/articles/<slug>/` + `src/blog/registry.ts` + `BlogArticlePage` |
| **Total from `Blog_refrence.txt`** | **55** | All present on `main` @ `e34a126` |

### Handcrafted (do not regenerate via registry)

| Canonical | Route in `App.tsx` | Page | Content | CSS | SEO |
|---|---|---|---|---|---|
| `/advice-for-buyers-looking-to-purchase-brownstones/` | `/advice-for-buyers-looking-to-purchase-brownstones` | `src/pages/BrownstoneBuyingGuide.tsx` | `src/components/brownstone/BrownstoneGuideContent.tsx` | `src/styles/brownstone-guide.css` | `src/seo/pages/brownstoneGuide.ts` |

### Registry articles (all 54)

Canonical pattern: `https://montfortre.com/<slug>/`  
Route: `path={\`/${slug}\`}` from `Object.entries(BLOG_ARTICLE_REGISTRY)` in `App.tsx`.

Slugs (same order as inventory / registry):

1. `upper-west-side-townhouse-q2-2024-market-report`
2. `harlem-brownstone-q2-2024-market-report`
3. `discover-your-dream-home-explore-apartments-for-sale-on-the-upper-west-side`
4. `the-ultimate-guide-to-finding-the-perfect-upper-west-side-real-estate-agent`
5. `sell-my-house-fast-expert-tips-to-attract-buyers-and-get-the-best-deal`
6. `what-is-my-house-worth`
7. `harlem-realtor`
8. `manhattan-brownstone-q1-2024-market-report`
9. `harlem-brownstone-q1-2024-market-report`
10. `top-harlem-new-york-townhouses-with-elevators`
11. `manhattan-q3-2023-market-report`
12. `top-10-most-expensive-sold-brownstones-in-harlem`
13. `harlem-q3-2023-brownstone-market-report`
14. `brownstones-in-new-york-city-for-sale`
15. `brownstones-in-new-york-city`
16. `house-hacking-your-nyc-brownstone`
17. `how-are-high-interest-rates-affecting-the-value-of-your-brownstone`
18. `how-to-find-townhouse-with-garage`
19. `selling-your-brownstone-with-tenants-still-there`
20. `making-your-brownstone-energy-efficient`
21. `a-timeline-for-renovating-your-brownstone`
22. `why-you-should-buy-a-brownstone-instead-of-renting-in-nyc`
23. `are-nfts-about-to-go-mainstream-in-real-estate`
24. `why-brownstone-co-ownership-makes-sense-in-a-rising-interest-rate-environment`
25. `owner-financing-for-your-brownstone`
26. `inflation-and-multi-unit-brownstone-investments`
27. `what-to-do-with-inherited-property`
28. `rent-control-v-rent-stabilization`
29. `everything-you-need-to-know-about-buying-and-selling-probate-property-in-new-york-city`
30. `all-about-taxes-when-you-sell-your-new-york-home`
31. `why-foreign-buyers-should-consider-buying-a-brownstone`
32. `top-ways-to-purchase-a-brownstone-with-crypto-in-new-york-city`
33. `the-benefit-of-townhouse-co-living-in-new-york-city`
34. `co-ownership-and-resolving-property-disputes-in-new-york-city`
35. `co-ownership-advantages-and-disadvantages-in-nyc`
36. `nycs-hot-real-estate-market-after-covid-19`
37. `new-york-says-goodbye-to-rental-discounts`
38. `the-case-for-buying-a-townhouse-over-a-condo-or-co-op-in-nyc`
39. `top-7-things-to-check-before-making-a-brownstone-purchase`
40. ~~`advice-for-buyers-looking-to-purchase-brownstones`~~ → **handcrafted** (not in registry)
41. `the-ins-and-out-of-using-co-ownership-to-purchase-a-new-york-city-brownstone`
42. `guide-everything-you-need-to-know-about-purchasing-a-multi-family-townhouse-and-renting-it-out`
43. `5-reasons-people-are-purchasing-real-estate-in-this-current-market`
44. `you-still-have-time-to-invest-in-qualified-opportunity-zones-in-nyc`
45. `what-awaits-the-nyc-real-estate-market-post-pandemic`
46. `5-signals-that-the-housing-market-is-on-the-road-to-recovery-post-covid-19`
47. `demystifying-the-reopening-of-nyc-and-what-it-means-for-real-estate`
48. `mortgage-rate-drops-to-historic-lows`
49. `top-4-reasons-to-invest-in-multi-family-properties-amid-the-coronavirus-pandemic`
50. `why-townhouses-make-sense-during-and-post-covid-19`
51. `understanding-nyc-sro-laws-how-to-convert-an-sro-townhouse-to-a-class-a-property`
52. `the-upside-of-a-down-market-why-now-is-the-time-to-upsize-to-a-harlem-townhouse`
53. `is-co-living-the-new-sro-how-to-leverage-this-trend-for-a-greater-roi`
54. `harlems-multi-family-townhouses-are-opportunity-zone-hidden-gem`
55. `how-to-price-a-harlem-townhouse`

---

## Architecture (how it works)

```
App.tsx
  ├── Route handcrafted BrownstoneBuyingGuide
  └── for each BLOG_ARTICLE_REGISTRY entry
        └── <BlogArticlePage article={module} />
              └── PageShell(seo=article.seo, pageClassName="blog-article-page brownstone-guide-page")
                    └── BlogArticleLayout(meta, bodyHtml, afterBody?)
                          ├── Hero (crumb, H1, lead, byline, Book Now / phone, featured img)
                          ├── TOC (if meta.toc length > 0) + .bsg-html body
                          ├── BlogShareButtons + BlogAuthorBio
                          └── ContactSection
```

### Shared presentation (do not fork per article)

| Piece | Path | Role |
|---|---|---|
| Page wrapper | `src/pages/BlogArticlePage.tsx` | Thin PageShell + layout |
| Layout | `src/components/blog-article/BlogArticleLayout.tsx` | Hero / TOC / HTML body / share / bio / contact |
| Types | `src/components/blog-article/types.ts` | `BlogArticleMeta`, `BlogArticleModule` |
| Share | `src/components/blog-article/BlogShareButtons.tsx` | Social share for `meta.shareUrl` |
| Author bio | `src/components/blog-article/BlogAuthorBio.tsx` | **Shared** Stanley bio (same as guide) |
| Registry | `src/blog/registry.ts` | slug → article module |
| Visual CSS | `src/styles/brownstone-guide.css` | All `.bsg-*` styles (desktop + `@media`) |
| Responsive carve-out | `src/responsive.css` | Excludes `.bsg-hero-image` from global `height: auto !important` |

### Per-article module (always four files)

Under `src/blog/articles/<slug>/`:

| File | Purpose |
|---|---|
| `index.ts` | Assembles `{ meta, seo, bodyHtml, afterBody? }` |
| `meta.ts` | H1, lead, category, featured image path/alt, TOC anchors, share URL, hero CTA flags |
| `seo.ts` | Frozen `PageSeo` (title, metas, links, JSON-LD) from HTTrack — **do not invent** |
| `bodyHtml.ts` | Cleaned live `entry-content` as an HTML string |

Assets live at:

`public/redesign-assets/blog/<slug>/…`

(inline images extracted from HTTrack/base64; featured images often local or still CDN in SEO og tags where live used AgentFire).

### Body rendering strategy (intentional exception)

General project rule in `DOCUMENTATION.md` discourages `dangerouslySetInnerHTML` for migrated pages. **Blog article bodies are the deliberate exception:** cleaned HTTrack HTML is injected into `.bsg-html` so 54 posts stay maintainable. Presentation chrome remains real React/TSX.

Cleaning applied at generate time (do not reverse without cause):

- Strip WordPress inline `style=` noise where needed for layout stability
- Cloudflare email-protection links → `sm@montfortre.com` / mailto
- Extract base64 / remote images into `public/redesign-assets/blog/<slug>/` where practical
- Preserve headings, lists, tables, and internal links; keep content verbatim

### SEO rules

- Each article’s `seo.ts` is **frozen** (same rule as `src/seo/pages/*.ts`).
- Canonical / og:url stay absolute `https://montfortre.com/<slug>/`.
- `Seo.tsx` may rewrite origin at inject time for preview hosts — do not “fix” SEO by editing article constants when the platform overrides head.
- Brownstones SEO module must **never** be reused for another slug.

### Sitemap

`public/sitemap.xml` now ships **120** migrated URLs (includes the 55 blog routes, Privacy Policy, HTML Sitemap, and prior pages). Re-count after future ships; GHL must serve this file at the web root (platform blocker — see SEO section handoff).

---

## Git / ship status

| Item | Detail |
|---|---|
| Implemented on | `local-root` under `ghl-react/` (may still show as dirty/uncommitted locally — expected) |
| Pushed to GitHub `main` | Yes — rewritten paths (no `ghl-react/` prefix) |
| Feature branch (worktree) | `feature/all-blog-articles-ghl` |
| Commits on `main` | `7ced154` — Add all Montfort blog articles to the shared guide design (~655 files) |
| | `e34a126` — Fix Harlem realtor featured image fill |
| Verify remote tip | `git ls-remote origin refs/heads/main` → should be `e34a126…` (local `origin/main` may lag because fetch refspec tracks `local-root` only — use `FETCH_HEAD` / `ls-remote`) |

### Path rewrite when shipping to `main`

| Local (`local-root`) | GitHub `main` |
|---|---|
| `ghl-react/src/blog/...` | `src/blog/...` |
| `ghl-react/src/components/blog-article/...` | `src/components/blog-article/...` |
| `ghl-react/src/pages/BlogArticlePage.tsx` | `src/pages/BlogArticlePage.tsx` |
| `ghl-react/public/redesign-assets/blog/...` | `public/redesign-assets/blog/...` |
| `ghl-react/src/styles/brownstone-guide.css` | `src/styles/brownstone-guide.css` |
| This handoff | `HANDOFF-SECTION-blog-articles.md` |

Never push: `reference/`, `.cursor/`, `ghl-react/package-lock.json` (unless asked), or the `ghl-react/` folder prefix.

---

## Follow-ups already applied in this stream

### 1. Hero images empty / letterboxed at bottom

**Cause:** Global responsive rule forced `height: auto !important` on images, fighting `.bsg-hero-frame img { object-fit: cover; height: 100% }`.

**Fix:**

- Class `bsg-hero-image` on hero `<img>`
- Stronger absolute + cover rules on `.bsg-hero-frame img` in `brownstone-guide.css`
- Exclude `.bsg-hero-image` in `src/responsive.css`

### 2. Harlem realtor featured image still letterboxed after CSS fix

**Cause:** Source CDN PNG had transparent padding; cover still showed empty bands.

**Fix:** Cropped full-bleed local asset  
`public/redesign-assets/blog/harlem-realtor/featured-Montfort-Real-Estate-10.png`  
and pointed `meta.featuredImageSrc` at that path (`e34a126`).

**Watch:** Other featured images with padded/transparent framing may need the same crop treatment.

### 3. Desktop About / Contact nav (same session polish)

Desktop `DesktopHeader`: **About** dropdown = About Us + Stanley (parity with mobile); **Resources** and **Contact** (Calendly) stand alone. Not blog-body content, but shipped alongside article work — verify if editing header.

---

## Known deviations / product decisions

| Decision | Why |
|---|---|
| HTML bodies vs hand JSX | Scale: 54 posts; design chrome stays React |
| Shared Stanley author bio | Matches Brownstones guide; not per-author WP bios |
| Shared hero CTAs (Book Now + phone) | Matches guide; `showHeroCtas` can disable per meta |
| TOC only when H2s exist | Empty sticky aside when `toc: []` |
| OG/twitter images may still point at AgentFire CDN in `seo.ts` | Copied from live head; visible hero often uses local `/redesign-assets/blog/...` |
| `DOCUMENTATION.md` still says “do not add blog-article routes” / “no dangerouslySetInnerHTML” in places | **Stale vs this stream** — registry routes + `.bsg-html` injection are intentional. Prefer this handoff + the route table row for `/<blog-slug>/` |

---

## Working rules for the next agent

1. **Do not merge** Brownstones copy, images, or `brownstoneGuide.ts` SEO into any other slug.
2. **Do not rename slugs** or drop registry entries — external links depend on them.
3. Edit article **content** in `bodyHtml.ts` / `meta.ts`; edit **head** only when correcting a true extraction error against HTTrack (still treat as frozen).
4. Keep presentation changes in **shared** layout/CSS so all 54 stay consistent; use `afterBody` only for rare article-specific React blocks.
5. After visual changes: check **375 / 768 / 1024 / 1440**, especially hero image fill and TOC stack.
6. Ship via path rewrite onto `origin/main` from this `local-root` workspace — never `git checkout main` inside `d:\GHL_Montfort`, never merge `local-root` ↔ `main`, never force-push `main`, never create `D:\GHL_Montfort_main_pushN`.
7. When listing files for GHL paste, use **main paths** (`src/blog/...`), never `ghl-react/src/...`.
8. Platform launch blockers (prerender, canonical injection, 404 status, robots/sitemap at root) remain in `HANDOFF-SECTION-seo-launch-readiness.md` — blog SEO constants being correct in-repo does not mean the deployed preview shows them.

---

## How to add or fix one article

1. Confirm slug exists under HTTrack: `reference/httrack/cdn-captures/montfortre.com/<slug>/`.
2. Create or update `src/blog/articles/<slug>/{index,meta,bodyHtml,seo}.ts`.
3. Put images under `public/redesign-assets/blog/<slug>/`.
4. Register in `src/blog/registry.ts` (import + map entry).
5. Ensure `App.tsx` still maps the registry (no per-slug route needed).
6. Add `<loc>https://montfortre.com/<slug>/</loc>` to `public/sitemap.xml` if missing.
7. Typecheck; spot-check the route locally; ship rewritten files onto `origin/main` from `local-root` (no extra worktree dir).

---

## GHL / Studio notes

- Raw base: `https://raw.githubusercontent.com/FerozArshad/montfortre/main/`
- Critical pulls for this stream: `src/blog/**`, `src/components/blog-article/**`, `src/pages/BlogArticlePage.tsx`, `src/pages/BrownstoneBuyingGuide.tsx`, `src/components/brownstone/**`, `src/styles/brownstone-guide.css`, `src/seo/pages/brownstoneGuide.ts`, `src/App.tsx`, `src/responsive.css`, `public/redesign-assets/blog/**`, `public/sitemap.xml`
- Studio cannot clone; use paste lists in `GHL-PASTE-TO-STUDIO.md` / `GHL-URLS.md` (update those if Studio is mid-ingest).

---

## Related files (not this stream’s deliverable)

| Item | Notes |
|---|---|
| `/blog/` index | `Blog.tsx` + `blog/BlogContent.tsx` + `blog-page.css` + `seo/pages/blog.ts` — teaser listing only |
| Neighborhood realtor articles | e.g. `HarlemRealtorArticle.tsx` — page sections, not blog routes |
| Park Slope property pages | Separate ship (`push14` / `b23fe1f`) |

---

## Open / watch list

- [ ] Scan other featured images for transparent padding (same class of bug as Harlem realtor).
- [ ] Confirm GHL Studio has fetched blog tree from `main` @ `e34a126` and routes resolve on preview.
- [ ] Optionally refresh stale `DOCUMENTATION.md` lines that forbid blog routes / HTML injection (align with this handoff).
- [ ] Optionally commit blog tree on `local-root` for backup (`git push origin local-root`) — separate from `main` ship.
- [ ] Next ship: overlay rewritten files onto `origin/main` from `local-root` (numbered worktrees retired).

---

## Quick verify commands

```bash
# Remote main tip (authoritative)
git ls-remote origin refs/heads/main

# Count registry articles in this local-root clone
git ls-files "ghl-react/src/blog/articles/*/index.ts"

# Local inventory vs registry
# 55 slugs in reference/httrack/Blog_refrence.txt
# 54 under ghl-react/src/blog/articles/ + 1 BrownstoneBuyingGuide
```

Local smoke: open several registry slugs + the Brownstones guide at 375 and 1440; confirm hero fill, TOC, share, author, contact, and that H1/SEO differ per slug.
