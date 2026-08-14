# Montfortre Workspace

Parent folder on disk: `d:\montfortre`. GitHub uses **two branches** with different folder shapes. Read **`BRANCHES.md`** before pull/push.

## What lives where (on `local-root`, matches this disk)

| Path | Role |
|---|---|
| **`ghl-react/`** | Deployable React/Vite/TS app. `npm run dev` here. |
| `reference/` | HTTrack mirrors, SEO exports, design files — not deployed |
| `BRANCHES.md` | How to use `local-root` vs `main` |

On GitHub **`main`**, the app is at **repo root** (`src/`, `public/`, …) so GHL can fetch `.../main/src/App.tsx`.

## Start here

```bash
git clone -b local-root https://github.com/FerozArshad/montfortre.git montfortre
cd montfortre/ghl-react
npm install
npm run dev
```

Then read `ghl-react/DOCUMENTATION.md`.

## GitHub

https://github.com/FerozArshad/montfortre

- Branch **`local-root`** — exact local directories
- Branch **`main`** — SPA for GHL / production; send app PRs here
