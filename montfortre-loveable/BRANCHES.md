# Git sync (inside montfortre-ghl-studio)

This folder is the **app you edit**. Deploy is **not** a push from here.

| Clone | Remote | Role |
|---|---|---|
| `d:\montfortre\montfortre-ghl-studio` (this folder) | `FerozArshad/montfortre` | Local edit + optional checkpoint. **Do not push for ship.** |
| `d:\montfortre\montfortre-loveable` | `smontfort/monttfortre` **`main`** | **Only deploy target** (Lovable). |
| `d:\montfortre\montfortre-com` | — | Research only. Never ship. |

## Sync flow

1. Edit here (`src/`, `public/`, `supabase/`, …).
2. Pull Lovable: `cd ..\montfortre-loveable && git pull --ff-only origin main`.
3. Copy changed files **dropping** this folder’s name:
   - `montfortre-ghl-studio/src/Foo.tsx` → `montfortre-loveable/src/Foo.tsx`
4. In `montfortre-loveable`: commit + `git push origin main`.
5. Lovable rebuilds from that GitHub `main`.

Never merge the two remotes. See parent `BRANCHES.md` and `LOVABLE-GO-LIVE.md`.
