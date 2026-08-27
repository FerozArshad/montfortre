# Montfort CMS Admin (Stanley handoff)

Admin dashboard for **listings** and **blog posts**. Public pages keep the existing Montfort design; only the data source changes when Supabase is configured.

## One-time setup (developer)

1. Use the **Lovable Cloud** Supabase linked to the Lovable project (migrations are applied by Cloud — do **not** paste legacy `001_cms.sql`).
2. In **Authentication**: prefer invite-only (disable public sign-up if available).
3. Set Vite / Lovable env (never commit real keys):

   ```
   VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-or-anon-key
   ```

   The app also accepts `VITE_SUPABASE_ANON_KEY`. Never put the **service role** key in the client.
4. Create Auth users (Cloud Auth → Users). Confirm email if required.
5. Promote admins via **`user_roles`** (not a role column on profiles):

   ```sql
   insert into public.user_roles (user_id, role)
   values ('YOUR_AUTH_USER_UUID', 'admin');
   ```

6. Log in at `/admin/login`, open Dashboard → **Import static content** (listings → `pages`, blog → `posts`).

7. **Image uploads:** run `supabase/migrations/002_lovable_media_storage.sql` once in Lovable Cloud → Database → SQL. This creates the public Storage bucket `media`. Without it, featured-image upload shows “Bucket not found”.

8. **Leads inbox:** run `supabase/migrations/003_leads.sql` once. Contact forms, listing popups, tour requests, and blog “Add Form” embeds then save to **Admin → Leads** (and Dashboard recent leads).

Full stream context: **`HANDOFF-SECTION-lovable-cms.md`**.

## Stanley: how to use

### Login
- Go to `https://YOUR-SITE/admin/login`
- Email + password (shared out-of-band). Use a strong password.

### Create / edit a listing
1. **Listings** → **New listing** (or Edit on a row).
2. Fill title, price, beds/baths, address, neighborhood, overview.
3. Upload a hero image (or paste an image URL).
4. Check **Published** when ready for the public site.
5. **Save** → open **Preview** to see `/{slug}` with the live listing template.

### Create / edit a blog post
1. **Blog** → **New post**.
2. Title, lead, category, featured image.
3. Body: HTML (`<p>`, `<h2>`, lists). Saved HTML is sanitized (scripts stripped).
4. Check **Published** → **Save** → Preview at `/{slug}`.

### Unpublish / delete
- Uncheck **Published** and save to hide from the public site.
- **Delete** soft-deletes (confirm dialog). Drafts and deleted items are not visible to logged-out visitors.

### Tips
- Slug auto-fills from title/address; you can edit it before first publish.
- Admin is not linked in the public nav or sitemap.
- If the CMS env is missing, the public site still shows the built-in static content.

## Security checklist (go-live)

- [ ] Public registration disabled in Supabase Auth
- [ ] Only intended emails have `profiles.role = 'admin'`
- [ ] Logged-out browser cannot read unpublished rows (open Network → query drafts fail / empty)
- [ ] Logged-out cannot upload to Storage
- [ ] Non-admin signed-in user cannot mutate (sign-in rejected for non-admins)
- [ ] Only `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY` in client; no service role in bundle
- [ ] HTTPS on the live domain

## Optional CLI seed

If you prefer service-role bulk import (server/local only):

```bash
npx vite-node scripts/export-cms-seed-data.ts
SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/cms-seed-cli.mjs
```
