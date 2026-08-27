# HANDOFF — Montfort Real Estate site (context for the next agent)

> **New agents:** read **this file** for flow + folders + ship rules, then **`DOCUMENTATION.md`** for the full route table and coding details. Also `AGENTS.md` / `AGENT-ONBOARDING.md`. GHL transfer: `GHL-TRANSFER-TRACKING.md`.  
> This file is the **parent** handoff: **what folder does what**, **how to create files**, **end-to-end migrate → ship → Studio flow**, section indexes, and platform launch blockers.  
> Exhaustive migrated-URL inventory stays in **`DOCUMENTATION.md` §3** (always wins if a count conflicts).

## What this project is

This repo is the approved redesign of https://montfortre.com/ (NYC realtor), rebuilt as a React/Vite SPA for **GHL AI Studio**. Studio cannot clone; it fetches files via raw GitHub **`main`** URLs.

| Location | Branch | Purpose |
|---|---|---|
| `d:\GHL_Montfort` (Cursor workspace) | **`local-root` only** | Clone/layout: `ghl-react/` + `reference/` + docs. Not GHL. Not production. |
| GitHub `main` | **`main` only** | What GHL fetches. App at **repo root** (`src/`, `public/`, …). |

Work under `ghl-react/` on `local-root` (this folder is the active working branch). Ship **only rewritten** updated/new app files to GitHub `main` — never merge `local-root` ↔ `main`, never create a new local dir/worktree per push. See `.cursor/rules/git-main-vs-local-root.mdc` (local only).

Preview historically: https://montfortre-live.vibepreview.com/. SEO per page was copied from the live site into frozen `src/seo/pages/*.ts` modules.

## Disk layout — what folder is for what

### Outside the app (local-root clone only — never push to GitHub `main`)

| Folder / path | Use |
|---|---|
| `d:\GHL_Montfort\` | Cursor workspace; always branch **`local-root`** |
| `ghl-react/` | **The app** you edit. On GitHub `main`, these files live at **repo root** (no `ghl-react/` prefix) |
| `reference/` | HTTrack captures, design HTML, blog inventory notes — **local research only** |
| `.cursor/` | Local agent rules (incl. git-main-vs-local-root) — **never ship to `main`** |

### Inside `ghl-react/` (app — this is what GHL fetches from `main`)

| Path | Purpose | Put here when… |
|---|---|---|
| `src/pages/<Name>.tsx` | **Thin** route wrapper only | Wiring `PageShell` + SEO + content. **No body copy.** |
| `src/components/<area>/<Name>Content.tsx` | Visible copy, headings, images, sections | Migrating or editing page body markup |
| `src/components/layout/` | DesktopHeader, SiteFooter | Shared chrome (not page-specific) |
| `src/components/blog-article/` | Shared blog chrome (`BlogArticleLayout`) | Changing how all registry posts look |
| `src/components/legal/` | Privacy + HTML Sitemap bodies | Legal stream only |
| `src/components/Seo.tsx` | Injects head tags | Platform/SEO plumbing — not per-page copy |
| `src/layouts/PageShell.tsx` | Seo + DesktopHeader + children + footer | Shell behavior; do **not** use unused `SiteLayout.tsx` |
| `src/seo/pages/<name>.ts` | Frozen TITLE / METAS / LINKS / JSON_LD | New page head from live/HTTrack — then **freeze** |
| `src/styles/<page>.css` | Desktop + `@media` in the **same** file | Layout/visual for that page area |
| `src/blog/articles/<slug>/` | `index.ts`, `meta.ts`, `bodyHtml.ts`, `seo.ts` | One registry blog post |
| `src/blog/registry.ts` | Map slug → article module | Registering a blog slug |
| `src/App.tsx` | `<MobileHeader />` once + `<Routes>` | Adding a Router `path` (slashless) |
| `public/redesign-assets/**` | Logos, OG, hoods, services, blog images | Any image the SPA must serve (no AgentFire CDN) |
| `public/sitemap.xml` | Migrated URL list for crawlers | Every new trailing-slash canonical |
| `public/robots.txt` | Crawl directives | Platform must serve at web root |
| `DOCUMENTATION.md` | Architecture source of truth | Route table + coding rules |
| `GHL-PASTE-TO-STUDIO.md` | Raw GitHub URL paste blocks | After you add files GHL must fetch |
| `GHL-URLS.md` / `GHL-TRANSFER-TRACKING.md` | Image URL dump / fetch checklist | Studio ingest tracking |
| `HANDOFF.md` + `HANDOFF-SECTION-*.md` | Agent continuity | Parent + focused streams |
| `seo-audit/` | Live inventory + Screaming Frog | Pick `[LEFT]` URLs; mark `[MIGRATED]` |

Full tree dump: **`DOCUMENTATION.md` §2**.

---

## Required structure (how one page flows)

```
Live URL /privacy-policy/
        │
        ▼
src/seo/pages/privacyPolicy.ts     ← frozen head (from live/HTTrack)
        │
src/components/legal/PrivacyPolicyContent.tsx  ← body TSX + import CSS
        │                           src/styles/legal-pages.css
        ▼
src/pages/PrivacyPolicy.tsx
        │  PageShell(seo, pageClassName) → Content
        ▼
src/App.tsx  Route path="/privacy-policy"
        │
        ├── public/sitemap.xml          <+loc>
        ├── SiteMapContent (if HTML sitemap should list it)
        ├── GHL-PASTE-TO-STUDIO.md      paste URLs
        └── ship rewritten paths → GitHub main → Studio fetch
```

**Standard page file pattern** (template = `Services.tsx`):

```tsx
import FooContent from "../components/<area>/FooContent";
import PageShell from "../layouts/PageShell";
import { FOO_SEO } from "../seo/pages/foo";

export default function Foo() {
  return (
    <PageShell seo={FOO_SEO} pageClassName="foo-page">
      <FooContent />
    </PageShell>
  );
}
```

Content imports CSS: `import "../../styles/foo-page.css";`

| Kind | Body lives in | Notes |
|---|---|---|
| Normal migrated page | `*Content.tsx` real TSX | No `dangerouslySetInnerHTML` |
| Legal (Privacy / Sitemap) | `components/legal/*` | Same rule; shared `legal-pages.css` |
| IDX | `IdxSearchLayout` | `showFooter={false}`, no site footer |
| Blog teaser index `/blog/` | `blog/BlogContent.tsx` | Not the 55 articles |
| Registry article | `src/blog/articles/<slug>/bodyHtml.ts` | Shared React chrome; HTML body intentional — see blog section handoff |
| Handcrafted Brownstones guide | `components/brownstone/*` | Design reference; not in registry |

---

## How to create / migrate a page (full checklist)

**Only** when the owner picks a live URL still marked `[LEFT]` in `seo-audit/live-page-sitemap-urls.txt`. Do not invent routes.

1. **Research (local only):** HTTrack under `reference/httrack/cdn-captures/montfortre.com/<slug>/` + live page + Screaming Frog row.
2. **SEO:** create `src/seo/pages/<name>.ts` exporting `*_SEO` — match live title/description/canonical/JSON-LD, then freeze.
3. **Assets:** copy images into `public/redesign-assets/...` (never AgentFire CDN).
4. **Content:** create `src/components/<folder>/<Name>Content.tsx` with markup.
5. **CSS:** create or extend `src/styles/<name>.css` (desktop + `@media` 1024 / 768 / 480 in the same file).
6. **Page wrapper:** thin `src/pages/<Name>.tsx` as above.
7. **Route:** one `<Route path="/slug" …>` in `src/App.tsx` (no trailing slash). Keep `MobileHeader` once above Routes; keep `*` → `NotMigrated` last.
8. **XML sitemap:** add `https://montfortre.com/<slug>/` to `public/sitemap.xml`.
9. **HTML sitemap:** if the page should appear in `/sitemap/`, add a link in `SiteMapContent.tsx` (or it auto-appears for registry blogs).
10. **Docs / Studio:** update `DOCUMENTATION.md` route row, `GHL-PASTE-TO-STUDIO.md`, mark audit `[MIGRATED]`, section handoff if it’s a stream.
11. **Verify:** typecheck; visual at 375 / 768 / 1024 / 1440; SEO fields vs live.
12. **Ship to GHL:** see flow below (rewritten paths → `main` only).

**Blog registry variant** (scale path — details in `HANDOFF-SECTION-blog-articles.md`):

1. `src/blog/articles/<slug>/{index,meta,bodyHtml,seo}.ts`
2. Images → `public/redesign-assets/blog/<slug>/`
3. Register in `src/blog/registry.ts` (App already maps the registry)
4. XML sitemap + docs; ship

**Links:** internal `<a href="/slug/">` trailing slash · Router `path="/slug"` no slash · phone `(646) 970-1078` · email `sm@montfortre.com`.

---

## End-to-end flow (implement → GitHub `main` → GHL)

```
1. Owner picks [LEFT] URL
2. Implement under ghl-react/ on local-root (this workspace — active working branch)
3. Optional: commit/push origin local-root (backup of clone layout)
4. git fetch origin main
5. Overlay ONLY new/updated app files onto origin/main with paths rewritten:
      ghl-react/src/...  →  src/...
      ghl-react/public/... → public/...
      ghl-react/*.md (app docs) → *.md at repo root
   Parent of the ship commit = origin/main. Do not checkout main here.
   Do not git worktree add. Do not create D:\GHL_Montfort_main_pushN.
6. Fast-forward push that commit to origin/main
7. Owner pastes raw URLs from GHL-PASTE-TO-STUDIO.md into Studio
8. Platform still must fix prerender / canonical / 404 / robots+xml at web root
```

**Never:** `git checkout main` inside `d:\GHL_Montfort` · merge local-root ↔ main · force-push main · push `reference/` or `.cursor/` · push full local-root tree · create a new local folder/worktree per GHL push.

---

## How pages are built (summary)

Every normal migrated route: `PageShell` (Seo + DesktopHeader + footer) → content component. SEO frozen in `src/seo/pages/*.ts`. Layout in `src/styles/*.css`. Hover = CSS `:hover`.

**Exceptions:** registry blogs (HTML body in shared chrome); IDX (iframe layout); legal pages (pure TSX + `legal-pages.css`).

## Hard constraints — do not break these

1. SEO IS FROZEN. Never edit TITLE, METAS, LINKS, JSON_LD values. Canonicals in source still use `https://montfortre.com`; `Seo.tsx` rewrites origin at inject time.
2. Content is frozen: headings, copy, phone number (646) 970-1078, images — unless a section handoff explicitly documents a client-approved change.
3. H1 count per page must not change (one H1; the 2-family page has 2 by original design).
4. Do not reintroduce `style-hover` attributes. Leave `useStyleHover()` in PageShell as a safety net.
5. Do not rename routes or files; internal links are root-relative with trailing slashes (`/services/` etc.). Router paths are slashless.
6. Never invent live WP URLs that are still `[LEFT]` in `seo-audit/live-page-sitemap-urls.txt`.

## The current task: GHL Studio ingest + launch blockers

Local conversion for migrated routes continues page-by-page. The owner copies files into GHL AI Studio via **raw GitHub URLs**. Track progress in `GHL-TRANSFER-TRACKING.md`. After Studio has the files, remaining work is **platform** (prerender, canonical injection, 404 status, robots/sitemap at web root) — see launch blockers below and `HANDOFF-SECTION-seo-launch-readiness.md`.

Responsive CSS already lives in `src/styles/page-shell.css`, `src/responsive.css`, and per-page classes. Do not revert pages to HTML strings (except the documented blog-body injection pattern).

## Verification after your changes

Re-audit affected routes at **375 / 768 / 1024 / 1440** for horizontal overflow, navigation, images, and field-by-field SEO against HTTrack / live. Anything that changes SEO or frozen content will be flagged as a regression.

---

## Section handoffs (full stream context)

Read the **section file** for the stream you are continuing. Parent rules above still apply.

| File | Scope | Status / tip | Start here when… |
|------|--------|--------------|------------------|
| **`HANDOFF.md` (this file)** | Folders, create-file checklist, migrate→ship→Studio flow, launch blockers, section index | Parent continuity | First read for any new agent |
| `DOCUMENTATION.md` | Full directory map, coding rules, **complete 120-URL route table** | Living source of truth for inventory | Looking up a specific route or CSS file list |
| `HANDOFF-SECTION-seo-launch-readiness.md` | Platform vs repo SEO: canonical/meta overrides, prerender, real 404s, robots + XML sitemap at web root, open client content decisions | Platform still owns blockers; repo SEO is correct | Debugging preview head tags, launch checklist, or “SEO is wrong on deploy” |
| `HANDOFF-SECTION-blog-articles.md` | All **55** posts: 1 handcrafted Brownstones guide + 54 registry articles, shared guide design, hero-image fixes, ship rules | On `main` @ `e34a126` (+ tip may be newer) | Editing blogs, registry, `brownstone-guide.css`, featured images |
| `HANDOFF-SECTION-lovable-cms.md` | Lovable Cloud CMS: admin listings/blog, `pages`/`posts`/`user_roles`, flows, status, blockers, go-live | **In progress** — login blocked on email confirm + `user_roles` admin | CMS admin, Supabase/Lovable Cloud, seed, Lovable overlay |
| `HANDOFF-SECTION-privacy-sitemap.md` | `/privacy-policy/` + `/sitemap/` in site style; legal CSS; SPA-only HTML sitemap; frozen SEO | On `main` @ `9be34ec` | Editing legal pages, footer legal links, or HTML sitemap groups |

**Git ship reminder (all streams):** implement on `local-root` in this workspace → overlay rewritten paths onto `origin/main` (parent = `main`, not `local-root`) → FF-push to `main`. No extra local dir per push.

---

## LAUNCH BLOCKERS — must be fixed on the GHL/platform side (from the SEO validation audit)

Our repo is the source of truth for all SEO. The deployed build currently overrides parts of it. Before DNS cutover:

1. CANONICAL/OG:URL: must render absolute (https://montfortre.com/...) exactly as set in each page's LINKS/METAS constants. The platform currently outputs a relative canonical (href="/") — remove any platform-level canonical/meta injection and let src/components/Seo.tsx own the head.
2. META DESCRIPTION: the platform replaced the homepage description. Restore the exact value from `src/seo/pages/home.ts` METAS ("Our Realtors will help you find on and off market NYC real estate..."). Never rewrite page SEO constants.
3. SHELL HEAD: the served index.html carries its own title/description ("Premier NYC & Harlem..."). Strip it to charset+viewport only, or set it to match the homepage constants.
4. PRERENDER/SSR: raw HTML is a 2KB shell with no SEO. Enable prerendering/static generation so every route serves its real title/meta/JSON-LD in the initial HTML (non-JS crawlers, social scrapers).
5. REAL 404s: unknown URLs return HTTP 200. Serve 404 status for unmatched routes (the app's NotMigrated fallback is noindexed, but the status code must come from the host).
6. ROBOTS + SITEMAP: deploy public/robots.txt and public/sitemap.xml from this repo at the web root (they restore the AI-crawler allowlist, scraper blocks, Disallow /?s=, and the Sitemap directive). XML file currently lists **120** migrated URLs.
7. TRAILING SLASHES: platform-generated nav links mix /about-us and /about-us/. Normalize to trailing-slash everywhere (all links in this repo already are).
8. LANG: document must be lang="en-US" (Seo.tsx sets it at runtime; ensure the shell doesn't force "en" or add it server-side).
9. HTTPS/HSTS at launch on the production domain.

Full narrative + applied repo fixes: **`HANDOFF-SECTION-seo-launch-readiness.md`**.

---

## Round-2 SEO audit — repo fixes applied (2026-08-10)

Applied here:

- WebPage + WebSite schema added to Harlem, StanleyMontfort, BrownstoneBuyingGuide (now 5 blocks each, consistent with the other pages).
- All 9 empty alt="" attributes filled with descriptive text (0 remaining across all pages at that audit).
- WebP conversion extended to every page-referenced raster (189 webp refs vs 63 remaining png refs; the remainder are already-small icons/logos where webp was not smaller).
- robots.txt + sitemap.xml shipped in public/ (see blocker 6). Sitemap has since grown with neighborhoods, property pages, blogs, and legal pages — always trust current `public/sitemap.xml`.

VERIFIED NOT A REPO ISSUE — every page in this repo already sets an absolute, per-page canonical and og:url (https://montfortre.com/services/, /harlem/, etc.) plus its own title/description/JSON-LD. The audit's "canonical and og:url are / on every page" and "identical 2KB shell on every route" are caused by the platform build not honoring the Seo component and not prerendering. See blockers 1-4.

OPEN — needs a human/client decision (deliberately NOT changed):

- FACT CONFLICT: /about-us/ H1 says "20+ years" while /stanley-montfort/ schema and homepage copy say "nearly a decade". Both came from source content. Client must confirm which is correct, then update copy AND the RealEstateAgent schema together.
- THIN CONTENT vs crawl: /success-stories/ 774 words (crawl 950), /neighborhoods/ 796 (969), /harlem/ 624 (774), /about-us/ 770 (932). The redesign intentionally tightened copy; restoring depth requires client-approved content, not mechanical edits.
- /success-stories/ has only 2 generic H2s — needs unique section headings if content is expanded.
- FAQ / Service / Review schema absent sitewide (inherited gap: the live site lacks them too).
