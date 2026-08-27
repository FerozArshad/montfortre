# Agent instructions — montfortre

**Source of truth:** `DOCUMENTATION.md`. SEO match vs live: `seo-audit/`. Open gaps (do not invent): `TODO.md`.

Then `AGENT-ONBOARDING.md` and `PROJECT-CONTEXT.md`. Launch blockers: `HANDOFF.md`.

This is a React 18 + Vite + TypeScript SPA (`d:\montfortre\ghl-react`, remote `FerozArshad/montfortre`). Not Next.js.

**Do not** edit frozen SEO values in `src/seo/pages/*.ts`. **Do not** change copy, phone `(646) 970-1078`, H1 counts, or desktop ≥1440px layout. Hover is CSS `:hover`; `useStyleHover()` stays as a no-op safety net — do not reintroduce `style-hover` attributes.

**Lovable ship:** app paths map to Lovable **repo root** (drop `ghl-react/` prefix). Playbook: `LOVABLE-GO-LIVE.md`. CMS admin: `CMS-ADMIN.md`. Do not mix Lovable overlay with GitHub `main` / GHL paste.

**GHL cannot git clone.** Ingest is raw GitHub URLs. Current fetch list: `GHL-PASTE-TO-STUDIO.md`. Tracking: `GHL-TRANSFER-TRACKING.md`.

Pages are `PageShell` + `*Content.tsx` + `src/styles/*.css`. No page-level `dangerouslySetInnerHTML`. Layout is CSS files, not inline styles.
