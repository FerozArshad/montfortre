# Project context (session continuity)

**Architecture, pages, SEO, branding, GHL, markdown inventory:** `DOCUMENTATION.md`.

This file is session notes only. If it disagrees with `DOCUMENTATION.md`, that file wins.

## Canonical paths

| What | Path |
|---|---|
| **Physical git folder** | `d:\montfortre\ghl-react\` |
| **Parent workspace** | `d:\montfortre\` — `reference/` is not in git |
| **Git remote** | https://github.com/FerozArshad/montfortre (`main`) |
| **Preview** | https://montfortre-live.vibepreview.com/ |
| **Production** | https://montfortre.com/ |

## Agent docs (read in order)

1. `DOCUMENTATION.md`
2. `AGENTS.md` + `AGENT-ONBOARDING.md`
3. This file
4. `GHL-TRANSFER-TRACKING.md`
5. `HANDOFF.md` / `GHL-LAUNCH-CHECKLIST.md` (platform blockers)

Cursor rule: `.cursor/rules/montfortre.mdc`.

## Cursor session transcripts

`C:\Users\feroz\.cursor\projects\d-montfortre\agent-transcripts\`

TSX conversion + GHL + docs: `19fa0e75-f18a-4e0a-8e1f-a0ac391c75dc`

## Migration status

- **12 / 268** live-site URLs are in this SPA; the rest hit `NotMigrated`
- **All 12 migrated routes** are `PageShell` + `*Content.tsx` + CSS in `src/styles/`
- Do **not** add routes for `/chelsea/`, service subpages, or blog articles
- Layout is **extracted CSS**, not inline HTML strings

## GHL Studio transfer

Studio **cannot clone GitHub**. Owner pastes raw URLs.

| Doc | Role |
|---|---|
| `GHL-PASTE-TO-STUDIO.md` | **Current** fetch list (shared CSS + per-page files) |
| `GHL-URLS.md` | Flat dump including `public/` |
| `GHL-TRANSFER-TRACKING.md` | SENT vs FETCHED vs VERIFIED |

FETCHED/VERIFIED is not confirmed until Studio replies.

## Site origin

Frozen SEO stores `https://montfortre.com`. At inject time `src/lib/siteOrigin.ts` + `Seo.tsx` rewrite that origin. Hosts other than `montfortre.com` / `www.montfortre.com` get `noindex,nofollow`. Do not rewrite `sm@montfortre.com`, Calendly, or IDX URLs. Images: `public/redesign-assets/` only.

## Dev commands

```bash
cd d:\montfortre\ghl-react
npm run dev
npm run build
npm run typecheck
npm run lint
npm run test
```
