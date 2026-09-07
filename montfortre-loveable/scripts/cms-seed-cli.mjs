/**
 * Optional CLI seed using the service role (never ship this key to the browser).
 *
 * Usage (from ghl-react/):
 *   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/cms-seed-cli.mjs
 *
 * Prefer the Admin dashboard “Import static content” button when you already have
 * an admin login — that uses the anon key + RLS and does not need the service role.
 *
 * This CLI expects JSON payloads at scripts/cms-seed-data.json produced by:
 *   npx vite-node scripts/export-cms-seed-data.ts
 */
import { createClient } from "@supabase/supabase-js";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataPath = join(__dirname, "cms-seed-data.json");

const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (service role — server only).");
  process.exit(1);
}

if (!existsSync(dataPath)) {
  console.error(`Missing ${dataPath}. Run: npx vite-node scripts/export-cms-seed-data.ts`);
  process.exit(1);
}

const payload = JSON.parse(readFileSync(dataPath, "utf8"));
const sb = createClient(url, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } });

let listingOk = 0;
let blogOk = 0;

for (const row of payload.listings || []) {
  const { error } = await sb.from("listings").upsert(row, { onConflict: "slug" });
  if (error) console.error("listing", row.slug, error.message);
  else listingOk += 1;
}

for (const row of payload.posts || []) {
  const { error } = await sb.from("blog_posts").upsert(row, { onConflict: "slug" });
  if (error) console.error("blog", row.slug, error.message);
  else blogOk += 1;
}

console.log(`Seeded ${listingOk} listings, ${blogOk} posts.`);
