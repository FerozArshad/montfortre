# Git — `main` only on GitHub

GitHub has **`main` only**. Do not recreate or push `local-root`. That snapshot included `reference/` (HTTrack / design) and was **removed from GitHub**. The full laptop folder `d:\montfortre\` (`ghl-react/` + `reference/`) stays **local only**.

Remote: https://github.com/FerozArshad/montfortre  
App on `main` is at **repo root**: `src/`, `public/`, `DOCUMENTATION.md`.

---

## Other developer — clone and work

Delete any clone of `local-root`, then:

```bash
git clone -b main https://github.com/FerozArshad/montfortre.git montfortre
cd montfortre
npm install
npm run dev
```

Read `DOCUMENTATION.md`. Send changes to `main`:

```bash
git checkout main
git pull origin main
git checkout -b feature/your-change
# edit files
git add -A
git commit -m "Explain why."
git push -u origin feature/your-change
```

Open a pull request **into `main`**.

---

## Owner laptop (this machine)

Keep working in `d:\montfortre\ghl-react` on `main`. Do not `git push` `reference/` or a `local-root` branch.

If you still have a local clone of `local-root`:

```bash
git fetch origin --prune
git branch -D local-root
```
