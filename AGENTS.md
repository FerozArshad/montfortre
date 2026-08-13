# Agent instructions — montfortre

Start with **`AGENT-ONBOARDING.md`**. Then `PROJECT-CONTEXT.md` and `HANDOFF.md`.

This is a React 18 + Vite + TypeScript SPA for GHL AI Studio (`d:\montfortre\ghl-react`, remote `FerozArshad/montfortre`). Not Next.js.

**Do not** edit frozen SEO in `src/seo/pages/*.ts` or `Seo.tsx` canonical logic. **Do not** change copy, phone `(646) 970-1078`, H1 counts, or desktop ≥1440px layout. Keep `style-hover` + `useStyleHover()`.

**GHL cannot git clone.** Ingest is raw GitHub URLs only. Tracking: `GHL-TRANSFER-TRACKING.md`. Paste lists: `GHL-PASTE-TO-STUDIO.md`, `GHL-FULL-FETCH.md`.

Pages are `PageShell` + content components. No page-level `dangerouslySetInnerHTML`.
