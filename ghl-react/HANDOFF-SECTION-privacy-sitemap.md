# Section handoff — Privacy Policy + HTML Sitemap

> **Scope:** Migrate live `/privacy-policy/` and `/sitemap/` into the React SPA in **current site style** (PageShell + brand navy/gold/cream), with frozen SEO and footer links that no longer hit `NotMigrated`.  
> **Not in scope:** A Terms & Conditions page (live 404 — does not exist), WordPress leftover URLs not yet in the SPA, or platform serving of `public/sitemap.xml` (that is SEO/launch readiness).

**Date:** 2026-08-17  
**Parent handoff:** `HANDOFF.md` / `DOCUMENTATION.md`  
**Repo:** https://github.com/FerozArshad/montfortre  
**GitHub `main` tip for this stream:** `9be34ec`  
**Local workspace:** `d:\GHL_Montfort` on branch **`local-root`** (app under `ghl-react/`) — never merge into `main`  
**Ship (historical):** `D:\GHL_Montfort_main_push16` — numbered worktrees are **retired**. Future ships: overlay rewritten files onto `origin/main` from `local-root` (no new local dir).  
**Local smoke URLs:** `http://localhost:5174/privacy-policy/` · `http://localhost:5174/sitemap/`  
**HTTrack captures (local only — do not push to `main`):**  
`reference/httrack/cdn-captures/montfortre.com/privacy-policy/` · `reference/httrack/cdn-captures/montfortre.com/sitemap/`  
**GHL paste block:** `GHL-PASTE-TO-STUDIO.md` §9ar

---

## Why this stream exists

Footer (and contact) already linked Privacy Policy and Sitemap. Before this stream those routes fell through to **`NotMigrated`**. Live site has both pages; there is **no** separate Terms page.

Goals:

1. Real TSX pages in the **current** Montfort visual system (not blog HTML injection, not AgentFire CDN).
2. **Verbatim** Privacy Policy body from HTTrack (H3→H2 for outline; Cloudflare email → `sm@montfortre.com`; phone `(646) 970-1078`).
3. HTML Sitemap that lists **migrated SPA URLs only** (Company / Services / Neighborhoods / Property Guides / Resources / Articles from `BLOG_ARTICLE_REGISTRY`) — not the full leftover WP directory.
4. Frozen SEO modules + XML sitemap entries so GHL can fetch from GitHub `main`.

---

## Inventory (2 / 2)

| Canonical | Router path | Page | Content | CSS | SEO |
|---|---|---|---|---|---|
| `/privacy-policy/` | `/privacy-policy` | `src/pages/PrivacyPolicy.tsx` | `src/components/legal/PrivacyPolicyContent.tsx` | `src/styles/legal-pages.css` | `src/seo/pages/privacyPolicy.ts` |
| `/sitemap/` | `/sitemap` | `src/pages/SiteMap.tsx` | `src/components/legal/SiteMapContent.tsx` | `src/styles/legal-pages.css` | `src/seo/pages/siteMap.ts` |

Also touched when shipping this stream:

| Path | Why |
|---|---|
| `src/App.tsx` | Routes for both pages |
| `public/sitemap.xml` | Two `<loc>` entries; total **120** migrated URLs |
| `seo-audit/live-page-sitemap-urls.txt` | Marked `[MIGRATED]` |
| `DOCUMENTATION.md`, `GHL-PASTE-TO-STUDIO.md`, `GHL-URLS.md`, `GHL-TRANSFER-TRACKING.md`, `HANDOFF.md` | Docs / Studio lists |

---

## Architecture

```
App.tsx
  ├── Route path="/privacy-policy" → PrivacyPolicy
  │     └── PageShell(seo=PRIVACY_POLICY_SEO, pageClassName="legal-page privacy-policy-page")
  │           └── PrivacyPolicyContent  (real TSX body — no dangerouslySetInnerHTML)
  └── Route path="/sitemap" → SiteMap
        └── PageShell(seo=SITE_MAP_SEO, pageClassName="legal-page sitemap-page")
              └── SiteMapContent
                    ├── Static link groups (company, services, neighborhoods, property, resources)
                    └── Articles: Object.entries(BLOG_ARTICLE_REGISTRY) → trailing-slash hrefs
```

Shared presentation: `legal-pages.css` (hero + content). Heroes use **`<section className="legal-hero">`**, not `<header>` — global `responsive.css` hides bare `header` below 1024px.

---

## Product / content decisions

| Decision | Why |
|---|---|
| Site style, not WP dump chrome | Matches neighborhoods/services redesign language |
| No `dangerouslySetInnerHTML` on these pages | Onboarding rule for legal; copy is manageable as TSX |
| Sitemap = migrated SPA only | Avoid linking users into `NotMigrated` / dead WP leftovers |
| Articles group driven by registry | Stays in sync when blog inventory changes |
| No Terms & Conditions route | Live site 404; contact form only links Privacy Policy |
| SEO logos rewritten to `/redesign-assets/...` | Same pattern as other `src/seo/pages/*.ts` modules |

---

## Git / ship status

| Item | Detail |
|---|---|
| Implemented on | `local-root` under `ghl-react/` |
| Pushed to GitHub `main` | Yes — rewritten paths (no `ghl-react/` prefix) |
| Feature branch (worktree) | `feature/privacy-sitemap-ghl` |
| Commit on `main` | `9be34ec` — Add Privacy Policy and Sitemap pages for GHL |
| Verify remote tip | `git ls-remote origin refs/heads/main` (local `origin/main` may lag; fetch refspec tracks `local-root`) |

### Path rewrite when shipping to `main`

| Local (`local-root`) | GitHub `main` |
|---|---|
| `ghl-react/src/pages/PrivacyPolicy.tsx` | `src/pages/PrivacyPolicy.tsx` |
| `ghl-react/src/pages/SiteMap.tsx` | `src/pages/SiteMap.tsx` |
| `ghl-react/src/components/legal/...` | `src/components/legal/...` |
| `ghl-react/src/styles/legal-pages.css` | `src/styles/legal-pages.css` |
| `ghl-react/src/seo/pages/privacyPolicy.ts` | `src/seo/pages/privacyPolicy.ts` |
| `ghl-react/src/seo/pages/siteMap.ts` | `src/seo/pages/siteMap.ts` |
| This handoff | `HANDOFF-SECTION-privacy-sitemap.md` |

Never push: `reference/`, `.cursor/`, `package-lock.json` (unless asked), or the `ghl-react/` folder prefix.

---

## Working rules for the next agent

1. Treat Privacy Policy **copy and SEO** as frozen; fix only true HTTrack extraction errors.
2. When adding a migrated route sitewide, also add it to **`SiteMapContent`** (static group or registry) **and** `public/sitemap.xml`.
3. Keep heroes as `<section className="legal-hero">` — do not switch to bare `<header>`.
4. Do not invent a Terms page unless the client publishes one live.
5. Ship via path rewrite onto `origin/main` from this `local-root` workspace — never `git checkout main` inside `d:\GHL_Montfort`, never merge `local-root` ↔ `main`, never create `D:\GHL_Montfort_main_pushN`.
6. Platform blockers (prerender, XML sitemap at web root) stay in `HANDOFF-SECTION-seo-launch-readiness.md`.

---

## GHL / Studio notes

- Raw base: `https://raw.githubusercontent.com/FerozArshad/montfortre/main/`
- Paste list: **§9ar** in `GHL-PASTE-TO-STUDIO.md`
- Critical pulls: both pages, both content components, both SEO modules, `legal-pages.css`, updated `App.tsx`, `public/sitemap.xml`
- After Studio ingest, verify footer links open real pages (not NotMigrated) and head tags match `privacyPolicy.ts` / `siteMap.ts` once prerender is fixed.
