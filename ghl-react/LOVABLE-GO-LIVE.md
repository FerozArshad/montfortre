# Lovable go-live (Montfort + CMS)

Source of truth while developing: `ghl-react/` inside the Cursor `local-root` clone.  
On Lovable, the same files live at **repo root** (no `ghl-react/` prefix).

Full stream status, flows, and remaining work: **`HANDOFF-SECTION-lovable-cms.md`**.

Do **not** merge this tree into GitHub `main` / GHL. Lovable is a separate host.

---

## Lovable Cloud CMS (current)

Cloud already provides: `profiles`, `user_roles`, `categories`, `posts`, `pages`, `media`.

| Montfort content | Cloud table |
|------------------|-------------|
| Blog articles | `posts` (+ `categories`) |
| Property listings | `pages` (listing JSON in `body`) |
| Admin check | `user_roles.role = 'admin'` (not `profiles.role`) |
| Images | `media` + Storage bucket `media` |

Do **not** run `supabase/migrations/001_cms.sql` on Lovable Cloud (legacy / commented out).

Promote admin:

```sql
insert into public.user_roles (user_id, role)
values ('YOUR_AUTH_USER_UUID', 'admin');
```

---

## Path map

| Local (`local-root`) | Lovable repo root |
|----------------------|-------------------|
| `ghl-react/src/...` | `src/...` |
| `ghl-react/public/...` | `public/...` |
| `ghl-react/supabase/...` | `supabase/...` |
| `ghl-react/scripts/...` | `scripts/...` (CMS seed helpers) |
| `ghl-react/index.html` | `index.html` |
| `ghl-react/package.json` | merge into Lovable `package.json` (see below) |
| `ghl-react/vite.config.ts` | `vite.config.ts` |
| `ghl-react/tsconfig*.json` | `tsconfig*.json` |
| `ghl-react/tailwind.config.ts` / `postcss.config.*` | same at root |
| `ghl-react/CMS-ADMIN.md` | `CMS-ADMIN.md` |
| `ghl-react/LOVABLE-GO-LIVE.md` | `LOVABLE-GO-LIVE.md` |
| `ghl-react/.env.example` | `.env.example` |

**Keep from Lovable (do not delete):** `.lovable/`, Lovable’s `bun.lock` / Bun workflow, and any Lovable-only config you still need.

**Never copy:** `node_modules/`, `.env` with real secrets, `package-lock.json` (prefer Bun on Lovable), GHL paste docs unless you want them as archive.

---

## Overlay copy manifest

Machine-readable list: [`scripts/lovable-overlay-manifest.txt`](./scripts/lovable-overlay-manifest.txt).

When the Lovable git URL is available, clone to a **sibling** folder (example: `D:\GHL_Montfort_lovable`), then overlay from `ghl-react/`.

### Always overlay (full replace of these trees)

| Path | Why |
|------|-----|
| `src/` | Full Montfort site + CMS admin + public CMS wiring |
| `public/` | Assets (listings, blog images, hoods, etc.) |
| `supabase/` | `migrations/001_cms.sql` (tables, RLS, storage) |

### CMS-specific paths inside `src/` (included in full `src/` overlay)

| Path | Role |
|------|------|
| `src/admin/AdminGate.tsx` | Session + admin shell |
| `src/lib/supabase.ts` | Anon client (`VITE_SUPABASE_*`) |
| `src/lib/cms/*` | listings/blog fetch, auth, sanitize, seed, upload |
| `src/pages/admin/*` | Login, dashboard, listing/blog CRUD |
| `src/pages/CmsSlugPage.tsx` | CMS-only `/{slug}` catch-all |
| `src/styles/admin.css` | Admin UI |
| `src/App.tsx` | `/admin/*` routes + public CMS pages |

### App shell / tooling

| Path | Notes |
|------|--------|
| `index.html` | Vite entry |
| `vite.config.ts` | `@` → `src` alias |
| `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` | As present in `ghl-react/` |
| `tailwind.config.ts`, `postcss.config.js` (or `.cjs`) | If present |
| `components.json` | Keep if Lovable/shadcn already uses it; safe to keep ours if merging |
| `scripts/export-cms-seed-data.ts` | Optional CLI seed export |
| `scripts/cms-seed-cli.mjs` | Optional service-role seed (server only) |
| `CMS-ADMIN.md` | Stanley handoff |
| `LOVABLE-GO-LIVE.md` | This file |
| `.env.example` | Documents `VITE_SUPABASE_*` only |

### Do not overlay blindly

| Path | Action |
|------|--------|
| `package.json` | **Merge** dependencies (see Bun section) |
| `.lovable/` | Leave Lovable’s alone |
| `.env` | Create in Lovable secrets UI / local only; never commit |
| `bun.lock` | Regenerate with `bun install` after merge |
| `README.md` / `AGENTS.md` | Prefer Lovable’s unless you intentionally replace |

---

## Bun + package.json merge

Lovable typically uses **Bun**. This app’s scripts are Bun-compatible.

### Required dependencies to merge into Lovable `package.json`

```json
"@supabase/supabase-js": "^2.112.3",
"dompurify": "^3.4.14"
```

Dev (if not already present):

```json
"@types/dompurify": "^3.0.5",
"vite-node": "^3.0.0"
```

Also ensure the site stack exists (usually already on Lovable): `react`, `react-dom`, `react-router-dom`, `vite`, `@vitejs/plugin-react`, TypeScript, Tailwind as used by Montfort.

### Scripts (Bun)

```bash
bun install
bun run dev
bun run build
bun run typecheck
bun run cms:export-seed   # writes scripts/cms-seed-data.json
bun run cms:seed          # needs SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (server only)
```

Prefer **Dashboard → Import static content** after admin login (uses anon key + RLS). CLI seed is optional and must never put the service-role key in Lovable client env.

`cms:seed` uses `node`/`bun` to run `scripts/cms-seed-cli.mjs` — both work. `cms:export-seed` uses `vite-node` (listed in `package.json` scripts; run via `bun run`).

---

## Env (Lovable / Vite)

Set in Lovable project secrets / `.env` (not committed):

```
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-publishable-key
```

Custom Google reviews carousel (no ReputationHub iframe):

```
VITE_GOOGLE_MAPS_API_KEY=your-browser-maps-key
VITE_GOOGLE_PLACE_ID=ChIJ...
```

Omit Place ID to show curated Montfort slides only. Enable billing + Places API on the Google Cloud project; restrict the key to HTTP referrers.

Optional:

```
# VITE_PUBLIC_SITE_URL=https://montfortre.com
```

**Never** put `SUPABASE_SERVICE_ROLE_KEY` in Lovable client env.

---

## When Lovable git arrives (execute checklist)

1. Clone to sibling, e.g. `D:\GHL_Montfort_lovable` (not inside `local-root` as `main`).
2. Overlay `src/`, `public/`, `supabase/` from `ghl-react/`.
3. Copy shell files + docs from the manifest above.
4. Merge `package.json` deps/scripts; run `bun install`.
5. Keep `.lovable/`; set `VITE_SUPABASE_*` in Lovable.
6. Run `supabase/migrations/001_cms.sql` in Supabase SQL editor.
7. Auth: disable public sign-up; create users;  
   `update public.profiles set role = 'admin' where email in (...);`
8. Open `/admin/login` → **Import static content** → smoke:
   - `/`
   - `/current-listings`
   - `/blog`
   - `/admin` CRUD + publish → public `/{slug}`

Stanley usage: see [CMS-ADMIN.md](./CMS-ADMIN.md).

---

## Blocked until you send the git URL

Overlay/clone cannot run until the Lovable repository URL (or invite) is provided. Paste it in chat when ready; use this file as the ship playbook.
