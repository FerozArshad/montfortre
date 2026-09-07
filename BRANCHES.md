# Git — local work vs Lovable ship

| Location | Remote | Branch on disk | Role |
|---|---|---|---|
| `d:\montfortre\montfortre-ghl-studio` | `FerozArshad/montfortre` | usually `main` (local checkpoint only) | **App you edit.** Do **not** `git push` here for deploy. |
| `d:\montfortre\montfortre-loveable` | `smontfort/monttfortre` | **`main`** | **Only deploy target.** Lovable live site. App at **repo root**. |
| `d:\montfortre\montfortre-com` | — (not a git ship target) | — | HTTrack / design / SEO research. **Never ship.** |
| `d:\montfortre` (parent) | no `.git` | — | Folder bag only. |

## How files sync (studio → Lovable → live)

There is **no git merge** between the two remotes. Sync is a **manual overlay copy**:

```
montfortre-ghl-studio/src/App.tsx
        │  copy (drop folder prefix)
        ▼
montfortre-loveable/src/App.tsx
        │  git commit + push origin main
        ▼
GitHub smontfort/monttfortre (main)
        │  Lovable watches this repo
        ▼
https://monttfortre.lovable.app  (+ production DNS when pointed there)
```

### Path rewrite table

| Edit here | Must land here (Lovable clone) |
|---|---|
| `montfortre-ghl-studio/src/...` | `montfortre-loveable/src/...` |
| `montfortre-ghl-studio/public/...` | `montfortre-loveable/public/...` |
| `montfortre-ghl-studio/supabase/...` | `montfortre-loveable/supabase/...` |
| `montfortre-ghl-studio/index.html` | `montfortre-loveable/index.html` |
| `montfortre-ghl-studio/HANDOFF*.md` | `montfortre-loveable/HANDOFF*.md` |

### Ship steps (every time)

1. Work in `montfortre-ghl-studio/` (`npm run dev`).
2. Optional local commit in studio — **do not push** `FerozArshad/montfortre` for deploy.
3. `cd d:\montfortre\montfortre-loveable` → `git pull --ff-only origin main` (Lovable’s agent also commits).
4. Copy **only** changed app files with the rewrite above.
5. `git status` — no `montfortre-ghl-studio/` prefixes, no `montfortre-com/`, no `.env`, no `node_modules`.
6. `git commit` → `git push origin main` (never force).

Lovable then picks up `smontfort/monttfortre` `main`. Changes made **in** the Lovable editor also commit to that same `main` — always pull before overlaying.

### Never copy / never push

- `montfortre-com/`
- `.cursor/`
- `node_modules/`, `dist/`, `.env`
- `package-lock.json` unless asked (Lovable prefers Bun)
- Scratch: `scripts/_tmp*`, `_audit-out/`, `supabase/.temp`

Full detail: `.cursor/rules/git-main-vs-local-root.mdc` and `montfortre-ghl-studio/LOVABLE-GO-LIVE.md`.
