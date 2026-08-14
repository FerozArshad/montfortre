# Git branches — how this repo is laid out

There are **two trees** on the same GitHub remote: https://github.com/FerozArshad/montfortre

| Branch | What it matches | Layout |
|---|---|---|
| **`local-root`** | Feroz’s disk `d:\montfortre\` | `ghl-react/` + `reference/` + this README |
| **`main`** | Deployable SPA / GHL raw URLs | App files at **repo root** (`src/`, `public/`, `DOCUMENTATION.md`) — **no** `ghl-react/` prefix |

Do **not** merge `local-root` into `main`. The folder shapes are different. Copy or PR app files from `ghl-react/` onto `main` paths.

---

## Other developer — first clone (match local folders)

```bash
git clone -b local-root https://github.com/FerozArshad/montfortre.git montfortre
cd montfortre
cd ghl-react
npm install
npm run dev
```

You now have the same folders as the original machine:

```
montfortre/
  README.md
  BRANCHES.md
  reference/          # HTTrack, design, SEO exports (not deployed)
  ghl-react/          # React/Vite app — work here
    DOCUMENTATION.md  # read this first
    src/
    public/
    ...
```

---

## Daily work (inside `ghl-react/`)

Read **`ghl-react/DOCUMENTATION.md`**. Edit TSX/CSS there. Do not invent routes. Do not edit frozen SEO values.

---

## Send app changes to `main` (required for GHL + production)

`main` is what GitHub raw URLs and GHL fetch. Paths on `main` are **without** `ghl-react/`.

```
local-root                          main
ghl-react/src/App.tsx           →   src/App.tsx
ghl-react/src/pages/Home.tsx    →   src/pages/Home.tsx
ghl-react/public/sitemap.xml    →   public/sitemap.xml
ghl-react/DOCUMENTATION.md      →   DOCUMENTATION.md
```

**Do not** `git merge local-root` into `main`.

### Option A — second clone of `main` (clearest)

```bash
git clone -b main https://github.com/FerozArshad/montfortre.git montfortre-main
cd montfortre-main
git checkout -b feature/your-change

# Copy only the files you changed from the local-root working copy:
#   ..\montfortre\ghl-react\src\...   →   .\src\...
# Do not copy node_modules, dist, or reference/

git add -A
git commit -m "Explain why, not only what."
git push -u origin feature/your-change
```

Open a pull request **into `main`**. Do not PR `local-root` → `main`.

### Option B — you already have `ghl-react` as its own git checkout of `main`

If `ghl-react/.git` exists and tracks `main`:

```bash
cd ghl-react
git checkout main
git pull origin main
git checkout -b feature/your-change
# edit, commit
git push -u origin feature/your-change
# PR into main
```

Then snapshot the whole workspace onto `local-root` when the owner asks (parent folder git).

---

## Update `local-root` (full workspace snapshot)

From the parent folder that contains `ghl-react/` and `reference/`:

```bash
cd montfortre          # parent, branch local-root
git status
git add README.md BRANCHES.md reference ghl-react
git commit -m "Snapshot local workspace root."
git push origin local-root
```

Skip `ghl-react/node_modules/`, `ghl-react/dist/`, and secrets (see parent `.gitignore`).

---

## Pull latest

```bash
# Workspace folders (ghl-react + reference)
git clone -b local-root ...    # first time
git pull origin local-root     # later, from parent

# App / GHL tree
git pull origin main           # from a main clone or ghl-react/.git
```

---

## Never do this

- Merge `local-root` → `main` (nests `ghl-react/` inside the SPA and breaks GHL paths)
- Merge `main` → `local-root` without putting files back under `ghl-react/`
- Commit `node_modules/` or `.env`
- Add live `[LEFT]` sitemap routes unless the owner asks
