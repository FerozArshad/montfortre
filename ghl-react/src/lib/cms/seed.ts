import { ALL_LISTINGS } from "../../data/listings";
import { BLOG_ARTICLE_REGISTRY } from "../../blog/registry";
import { getSupabase } from "../supabase";
import { getAdminSession } from "./auth";
import { htmlToBlocks, serializeArticleBody } from "./blocks";
import { serializeListingPageBody } from "./types";

export type SeedResult = {
  listingsUpserted: number;
  postsUpserted: number;
  errors: string[];
};

export type AssignContentResult = {
  pagesAssigned: number;
  postsAssigned: number;
  errors: string[];
};

/**
 * Reassign all Cloud pages and posts to the signed-in admin.
 * Use when existing content was imported under another account.
 */
export async function assignExistingContentToCurrentUser(): Promise<AssignContentResult> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");

  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) throw new Error("Not signed in");

  const session = await getAdminSession();
  if (!session?.isAdmin) throw new Error("Admin access required");

  const errors: string[] = [];

  const { data: pageRows, error: pagesErr } = await sb
    .from("pages")
    .update({ author_id: user.id })
    .neq("author_id", user.id)
    .select("id");
  if (pagesErr) errors.push(`pages: ${pagesErr.message}`);

  const { data: postRows, error: postsErr } = await sb
    .from("posts")
    .update({ author_id: user.id })
    .neq("author_id", user.id)
    .select("id");
  if (postsErr) errors.push(`posts: ${postsErr.message}`);

  return {
    pagesAssigned: pageRows?.length ?? 0,
    postsAssigned: postRows?.length ?? 0,
    errors,
  };
}

/**
 * Import static TS registries into Lovable Cloud tables:
 * - listings → pages (JSON body marker listing)
 * - blog → posts (article blocks JSON; legacy HTML wrapped as one text block)
 */
export async function seedStaticContentToCms(): Promise<SeedResult> {
  const client = getSupabase();
  if (!client) throw new Error("CMS not configured");
  const sb = client;
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) throw new Error("Not signed in");

  const errors: string[] = [];
  let listingsUpserted = 0;
  let postsUpserted = 0;

  const categoryCache = new Map<string, string>();

  async function categoryId(name: string): Promise<string | null> {
    const key = name.trim() || "News";
    if (categoryCache.has(key)) return categoryCache.get(key)!;
    const slug = key
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    const { data: existing } = await sb.from("categories").select("id").eq("slug", slug).maybeSingle();
    if (existing?.id) {
      categoryCache.set(key, existing.id);
      return existing.id;
    }
    const { data: created, error } = await sb
      .from("categories")
      .insert({ name: key, slug, description: null })
      .select("id")
      .single();
    if (error) {
      errors.push(`category ${key}: ${error.message}`);
      return null;
    }
    categoryCache.set(key, created.id);
    return created.id;
  }

  for (const listing of ALL_LISTINGS) {
    const payload = {
      title: listing.title,
      slug: listing.slug,
      body: serializeListingPageBody(listing),
      status: "published",
      author_id: user.id,
    };
    const { error } = await sb.from("pages").upsert(payload, { onConflict: "slug" });
    if (error) errors.push(`listing ${listing.slug}: ${error.message}`);
    else listingsUpserted += 1;
  }

  for (const [slug, article] of Object.entries(BLOG_ARTICLE_REGISTRY)) {
    const { meta, bodyHtml } = article;
    const category_id = await categoryId(meta.category || "News");
    const payload = {
      title: meta.h1,
      slug: meta.slug || slug,
      excerpt: meta.lead,
      body: serializeArticleBody(htmlToBlocks(bodyHtml), {
        featured_image_src: meta.featuredImageSrc,
        featured_image_alt: meta.featuredImageAlt || meta.h1,
        author_name: meta.authorName,
        author_href: meta.authorHref,
        author_role: meta.authorRole,
        show_hero_ctas: meta.showHeroCtas,
        kicker_label: meta.kickerLabel ?? null,
      }),
      status: "published",
      published_at: new Date().toISOString(),
      category_id,
      author_id: user.id,
    };
    const { error } = await sb.from("posts").upsert(payload, { onConflict: "slug" });
    if (error) errors.push(`blog ${slug}: ${error.message}`);
    else postsUpserted += 1;
  }

  return { listingsUpserted, postsUpserted, errors };
}
