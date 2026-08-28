import { getSupabase, isCmsConfigured } from "../supabase";

export type CmsHealth = {
  configured: boolean;
  postsOk: boolean;
  pagesOk: boolean;
  profilesOk: boolean;
  userRolesOk: boolean;
  mediaOk: boolean;
  mediaBucketOk: boolean;
  leadsOk: boolean;
  reviewsOk: boolean;
  /** @deprecated use postsOk / pagesOk — kept for older UI snippets */
  listingsOk: boolean;
  blogOk: boolean;
  message: string;
};

async function tableExists(table: string): Promise<boolean> {
  const sb = getSupabase();
  if (!sb) return false;
  const { error } = await sb.from(table).select("*").limit(1);
  if (!error) return true;
  const msg = (error.message || "").toLowerCase();
  const code = error.code || "";
  if (code === "PGRST205" || msg.includes("schema cache") || msg.includes("does not exist")) {
    return false;
  }
  // RLS / empty / permission still means the table is present
  return true;
}

async function mediaBucketExists(): Promise<boolean> {
  const sb = getSupabase();
  if (!sb) return false;
  const { error } = await sb.storage.from("media").list("", { limit: 1 });
  if (!error) return true;
  const msg = (error.message || "").toLowerCase();
  return !msg.includes("bucket not found") && !msg.includes("not found");
}

/** Probe Lovable Cloud CMS tables (posts/pages/media + user_roles). */
export async function checkCmsHealth(): Promise<CmsHealth> {
  if (!isCmsConfigured()) {
    return {
      configured: false,
      postsOk: false,
      pagesOk: false,
      profilesOk: false,
      userRolesOk: false,
      mediaOk: false,
      mediaBucketOk: false,
      leadsOk: false,
      reviewsOk: false,
      listingsOk: false,
      blogOk: false,
      message:
        "Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY (or ANON_KEY) in .env, then restart Vite.",
    };
  }

  const [postsOk, pagesOk, profilesOk, userRolesOk, mediaOk, mediaBucketOk, leadsOk, reviewsOk] =
    await Promise.all([
      tableExists("posts"),
      tableExists("pages"),
      tableExists("profiles"),
      tableExists("user_roles"),
      tableExists("media"),
      mediaBucketExists(),
      tableExists("leads"),
      tableExists("google_reviews"),
    ]);

  const ready = postsOk && pagesOk && profilesOk && userRolesOk;
  const storageNote = mediaBucketOk
    ? ""
    : " Storage bucket “media” is missing — run supabase/migrations/002_lovable_media_storage.sql in Lovable Cloud SQL.";
  const leadsNote = leadsOk ? "" : " Leads table missing — run supabase/migrations/003_leads.sql.";
  const reviewsNote = reviewsOk
    ? ""
    : " Reviews tables missing — run supabase/migrations/20260828100000_google_reviews.sql and 20260828100100_google_reviews_sync.sql.";
  return {
    configured: true,
    postsOk,
    pagesOk,
    profilesOk,
    userRolesOk,
    mediaOk,
    mediaBucketOk,
    leadsOk,
    reviewsOk,
    listingsOk: pagesOk,
    blogOk: postsOk,
    message: ready
      ? `Lovable Cloud CMS schema is ready (posts, pages, profiles, user_roles).${storageNote}${leadsNote}${reviewsNote}`
      : "Connected to Supabase, but expected Lovable CMS tables are missing. Migrations are applied on Lovable Cloud — confirm the Cloud project matches this .env.",
  };
}
