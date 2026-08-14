# SEO Audit — montfortre-live.vibepreview.com vs montfortre.com
Audited 2026-08-08. 9 routes checked on both hosts. Preview audited two ways: raw HTML (crawlers without JavaScript) and rendered DOM (Google after JS rendering).

## Verdict

The preview's on-page SEO after JS rendering matches the original on all 9 routes (titles, H1s, JSON-LD, canonicals pointing to montfortre.com). But the preview is a client-side rendered SPA: its raw HTML contains **no SEO at all**, and the Vibe template's default metas shadow two fields. One of those issues is already fixed in the repo; the others are platform-level.

## Route-by-route (rendered DOM vs live)

| Route | Live title | Preview title (rendered) | H1 | JSON-LD |
|---|---|---|---|---|
| / | Montfort Real Estate \| New York Realtor | ✅ identical | 1=1 | 5=5 |
| /services/ | Services \| Montfort Real Estate | ✅ identical | 1=1 | 4 |
| /about-us/ | About Us \| Montfort Real Estate | ✅ identical | 1=1 | 4 |
| /blog/ | Blog \| Montfort Real Estate | ✅ identical | 1=1 | 4 |
| /harlem/ | Harlem \| Montfort Real Estate | ✅ identical | 1=1 | 3 |
| /stanley-montfort/ | Stanley Montfort \| Montfort Real Estate | ✅ identical | 1 (live has 2) | 3 |
| /success-stories/ | Success Stories \| Montfort Real Estate | ✅ identical | 1=1 | 4 |
| /2-family-house-for-sale-nyc/ | 2 Family house for sale NYC \| Montfort RE | ✅ identical | 2=2 | 8 |
| /advice-for-buyers-…-brownstones/ | Brownstone Buying Guide for Buyers \| Montfort RE | ✅ identical | 1=1 | 3 |

All 9 preview routes load correctly on direct URL (server rewrites to the SPA shell; React Router matches trailing-slash paths).

## Findings

### 1. FIXED — Template metas shadowed description and og:title
The Vibe template ships `<meta name="description" content="Vibe Generated Project">` and `og:title "Vibe App"` in its static head. They appear before the injected tags, and crawlers take the first occurrence. **Fix pushed to the repo** (`src/components/Seo.tsx` now removes same-name/property tags before injecting). Have GHL re-fetch:
`https://raw.githubusercontent.com/FerozArshad/montfortre/main/src/components/Seo.tsx`

### 2. PLATFORM — Raw HTML has zero SEO (client-side rendering)
`curl` of any preview route returns a 1,021-byte shell: title "Vibe App", no description, no canonical, no JSON-LD, no H1, no content. Google renders JS and will see the injected SEO, but: Bing/DuckDuckGo/social-share scrapers (Facebook, WhatsApp, Slack, Twitter/X) do NOT reliably run JS — link previews will show "Vibe App". Fixing this requires prerendering/SSG on the platform side, or asking GHL to write the per-page meta into the served HTML.

### 3. PLATFORM — No robots.txt / sitemap.xml on preview
Live has both (912B robots.txt; sitemap.xml with 512 URLs). The preview domain serves neither. Also note Cloudflare bot protection (403 to non-browser agents) currently shields the preview from all crawlers — fine while it's a preview, must not carry to production.

### 4. OK — Canonicals point to https://montfortre.com/
Every preview page canonicalizes to the original domain, so the preview cannot cannibalize the live site's rankings while both exist. When this build replaces montfortre.com, keep the canonicals exactly as they are (they'll be self-referencing on the production domain).

### 5. MINOR — /stanley-montfort/ has 1 H1 vs live's 2
The redesign uses one H1 (correct practice; the live page's 2nd H1 is a footer artifact). No action needed.

## Live-site baseline notes (for reference)
- /about-us/ on the LIVE site is missing a meta description (the redesign/preview inherits this — original had none to carry).
- Live robots meta: none on any page (indexable by default) — preview matches after fix #1.
