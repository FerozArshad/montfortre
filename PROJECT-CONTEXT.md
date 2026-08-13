# Project context (session continuity)

This file preserves workspace context across renames and agent sessions.

## Canonical paths

| What | Path |
|---|---|
| **Physical git folder** | `d:\montfortre\ghl-react\` |
| **Parent workspace** | `d:\montfortre\` — `reference/` holds HTTrack mirrors, exports, design files |
| **Git remote** | https://github.com/FerozArshad/montfortre |
| **Preview** | https://montfortre-live.vibepreview.com/ |

## Agent handoff docs (read in order)

1. `AGENT-ONBOARDING.md`
2. `HANDOFF.md`
3. `HANDOFF-SECTION-neighborhoods-harlem-stanley.md`
4. `HANDOFF-SECTION-seo-launch-readiness.md`

## Cursor session transcripts

Prior chat history (outside git):

`C:\Users\feroz\.cursor\projects\d-Montfortr\agent-transcripts\`

Neighborhoods/Harlem session: `ae837346-cdf1-4dd4-88d5-f1f4050703e1.jsonl`

## Migration status

- **12 / 268** pages migrated
- **All 12 migrated routes converted to TSX** except TwoFamily + Brownstone guide (still HTML strings)
- Remaining HTML-string pages: `TwoFamilyHouseForSaleNyc.tsx`, `BrownstoneBuyingGuide.tsx`

## Dev commands

```bash
cd d:\montfortre\ghl-react
npm run dev
npm run build
npm run typecheck
npm run lint
npm run test
```
