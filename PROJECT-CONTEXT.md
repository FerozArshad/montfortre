# Project context (session continuity)

This file preserves workspace context across renames and agent sessions.

## Canonical paths

| What | Path |
|---|---|
| **Physical git folder** | `d:\montfortre\ghl-react\` |
| **Parent workspace** | `d:\montfortre\` — `reference/` holds HTTrack mirrors, exports, design files (**not** in git) |
| **Git remote** | https://github.com/FerozArshad/montfortre (`main`) |
| **Preview** | https://montfortre-live.vibepreview.com/ |

## Agent handoff docs (read in order)

1. `AGENTS.md` + `AGENT-ONBOARDING.md`
2. `PROJECT-CONTEXT.md` (this file)
3. `GHL-TRANSFER-TRACKING.md` — GHL send/fetch/verify status
4. `HANDOFF.md`
5. `HANDOFF-SECTION-seo-launch-readiness.md`

Cursor rule: `.cursor/rules/montfortre.mdc` (always apply).

## Cursor session transcripts

`C:\Users\feroz\.cursor\projects\d-montfortre\agent-transcripts\`

TSX conversion + GHL paste lists: `19fa0e75-f18a-4e0a-8e1f-a0ac391c75dc`

## Migration status (local repo)

- **12 / 268** live-site URLs are in this SPA; the rest hit `NotMigrated`
- **All 12 migrated routes are real TSX** (`PageShell` + content). No page-level `dangerouslySetInnerHTML`
- IDX Sales/Rentals use `PageShell` + `IdxSearchLayout`

## GHL Studio transfer (2026-08-13)

Studio **cannot clone GitHub**. Owner pastes raw URLs; GHL writes files.

| Doc | Role |
|---|---|
| `GHL-PASTE-TO-STUDIO.md` | Batch 0 shared + 6 pages GHL asked for |
| `GHL-FULL-FETCH.md` | Remaining pages, CSS, branding, all `public/` images |
| `GHL-TRANSFER-TRACKING.md` | SENT vs FETCHED vs VERIFIED — **update this after GHL replies** |

As of this write-up: lists are **PREPARED + SENT to the owner**. Studio **FETCHED/VERIFIED is not confirmed**. Use the prompt at the bottom of the tracking file.

## Site origin (multi-domain)

Frozen SEO still stores `https://montfortre.com`. At inject time `src/lib/siteOrigin.ts` + `Seo.tsx` rewrite that origin to `window.location.origin`, or to `VITE_PUBLIC_SITE_URL` if set. Leave the env unset while hopping GHL/preview domains. Hosts other than `montfortre.com` / `www.montfortre.com` get `noindex,nofollow`. Do not rewrite `sm@montfortre.com`, Calendly, or IDX URLs. Brand, listing, and OG images live under `public/redesign-assets/` — never AgentFire CDN. Internal links stay root-relative (`/services/`).

## Dev commands

```bash
cd d:\montfortre\ghl-react
npm run dev
npm run build
npm run typecheck
npm run lint
npm run test
```
