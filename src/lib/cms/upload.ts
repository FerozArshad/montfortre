import { getSupabase } from "../supabase";

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

/**
 * Upload image to Storage bucket `media` and insert a `media` row.
 * Bucket must exist on Lovable Cloud — run 002_lovable_media_storage.sql.
 */
export async function uploadCmsImage(
  _bucket: "listing-images" | "blog-images" | "media",
  file: File,
): Promise<string> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  if (!ALLOWED.has(file.type)) throw new Error("Only JPEG, PNG, WebP, or GIF images are allowed.");
  if (file.size > MAX_BYTES) throw new Error("Image must be 5MB or smaller.");

  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) throw new Error("Not signed in");

  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const path = `${user.id}/${crypto.randomUUID()}.${ext}`;
  const bucket = "media";

  const { error: upErr } = await sb.storage.from(bucket).upload(path, file, {
    cacheControl: "3600",
    upsert: false,
    contentType: file.type,
  });
  if (upErr) {
    throw new Error(
      `Upload failed (${upErr.message}). Run supabase/migrations/002_lovable_media_storage.sql in Lovable Cloud SQL to create the public "media" bucket.`,
    );
  }

  const { data: pub } = sb.storage.from(bucket).getPublicUrl(path);
  const publicUrl = pub.publicUrl;

  const { error: rowErr } = await sb.from("media").insert({
    file_path: publicUrl,
    mime_type: file.type,
    alt_text: file.name,
    uploader_id: user.id,
  });
  if (rowErr) {
    console.warn("[cms] media row insert failed", rowErr.message);
  }

  return publicUrl;
}
