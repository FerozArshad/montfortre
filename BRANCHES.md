# Git branches

This folder (`ghl-react/`) on disk is the **app**. On GitHub it appears two ways:

| Branch | Your path on disk | Path on GitHub |
|---|---|---|
| **`local-root`** | `montfortre/ghl-react/src/...` | `ghl-react/src/...` |
| **`main`** | same files if you cloned `main` into this folder | `src/...` (no `ghl-react/` prefix) |

Full instructions: parent **`BRANCHES.md`** (on `local-root`) or the copy below.

**Send finished app work to `main` as a PR. Never merge `local-root` into `main`.**

```bash
# Match Feroz’s folders
git clone -b local-root https://github.com/FerozArshad/montfortre.git montfortre
cd montfortre/ghl-react && npm install && npm run dev

# Ship changes to GHL / production tree
git clone -b main https://github.com/FerozArshad/montfortre.git montfortre-main
# copy changed files from montfortre/ghl-react/ → montfortre-main/ (same relative paths under ghl-react)
# commit on a feature branch, PR into main
```

Read `DOCUMENTATION.md` first. Open tasks: `TODO.md`.
