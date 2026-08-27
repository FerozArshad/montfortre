import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

const env = Object.fromEntries(
  readFileSync(".env", "utf8")
    .split(/\r?\n/)
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i), l.slice(i + 1).replace(/^["']|["']$/g, "")];
    }),
);

const url = env.VITE_SUPABASE_URL || env.SUPABASE_URL;
const anon = env.VITE_SUPABASE_PUBLISHABLE_KEY || env.VITE_SUPABASE_ANON_KEY;
const service = env.SUPABASE_SERVICE_ROLE_KEY;

const email = process.argv[2];
const password = process.argv[3];

if (!url || !anon || !email || !password) {
  console.error("Usage: node scripts/create-admin-user.mjs <email> <password>");
  console.error("Need VITE_SUPABASE_URL + publishable key in .env");
  process.exit(1);
}

const admin = service
  ? createClient(url, service, { auth: { persistSession: false, autoRefreshToken: false } })
  : null;
const pub = createClient(url, anon, { auth: { persistSession: false, autoRefreshToken: false } });

let userId = null;

if (admin) {
  const { data, error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });
  if (error) {
    console.error("admin.createUser failed:", error.message);
    // try sign-in in case user exists
  } else {
    userId = data.user?.id || null;
    console.log("Created user via service role:", userId);
  }
}

if (!userId) {
  const { data, error } = await pub.auth.signUp({ email, password });
  if (error) {
    console.error("signUp failed:", error.message);
    const login = await pub.auth.signInWithPassword({ email, password });
    if (login.error) {
      console.error("signIn also failed:", login.error.message);
      process.exit(1);
    }
    userId = login.data.user?.id || null;
    console.log("User already existed; signed in:", userId);
  } else {
    userId = data.user?.id || null;
    console.log("Signed up via anon key:", userId);
    if (data.session == null) {
      console.log("Note: email confirmation may be required before login works.");
    }
  }
}

if (!userId) {
  console.error("No user id");
  process.exit(1);
}

const writer = admin || pub;
const { error: roleErr } = await writer.from("user_roles").upsert(
  { user_id: userId, role: "admin" },
  { onConflict: "user_id,role" },
);

if (roleErr) {
  // try plain insert
  const { error: insErr } = await writer.from("user_roles").insert({ user_id: userId, role: "admin" });
  if (insErr) {
    console.error("Could not set user_roles admin:", insErr.message);
    console.log("Run this in Lovable Cloud SQL with the user id above:");
    console.log(`insert into public.user_roles (user_id, role) values ('${userId}', 'admin');`);
    process.exit(2);
  }
}

console.log("Admin role granted for", email, userId);
process.exit(0);
