# Montfortre Workspace

Parent folder on disk: `d:\montfortre`.

| Path | Role |
|---|---|
| **`montfortre-ghl-studio/`** | App you edit (React/Vite/TS). Local work. |
| **`montfortre-loveable/`** | Lovable deploy clone (`smontfort/monttfortre` `main`). **Only push target.** |
| **`montfortre-com/`** | HTTrack / design / SEO research — **never deploy** |
| `BRANCHES.md` | Remotes + ship rules |

```bash
cd montfortre-ghl-studio
npm install
npm run dev
```

Ship: copy rewritten paths from `montfortre-ghl-studio/` → `montfortre-loveable/` (drop folder prefix) → push Lovable `main`. See `.cursor/rules/git-main-vs-local-root.mdc`.
