import { BLOG_ARTICLE_REGISTRY } from "../../blog/registry";
import type { BlogArticleModule } from "../../components/blog-article/types";
import { getSupabase, isCmsConfigured } from "../supabase";
import { parseArticleBody, parseArticleMeta, serializeArticleBody, articleBodyToHtml, type CmsBlock } from "./blocks";
import { assertOwnsResource, getRequiredUserId } from "./ownership";
import {
  cloudPostToArticle,
  isPublishedStatus,
  resolveBlogFeaturedImage,
  type CloudCategoryRow,
  type CloudPostRow,
  type CmsBlogRow,
} from "./types";

export type BlogCard = {
  href: string;
  image: string;
  alt: string;
  category: string;
  title: string;
  excerpt: string;
};

export { resolveBlogFeaturedImage };

function postToAdminRow(row: CloudPostRow): CmsBlogRow {
  const meta = parseArticleMeta(row.body);
  const blocks = parseArticleBody(row.body);
  const featured = resolveBlogFeaturedImage(row.slug, {
    src: meta.featured_image_src,
    alt: meta.featured_image_alt,
  }, row.title);
  return {
    id: row.id,
    slug: row.slug,
    h1: row.title,
    lead: row.excerpt || "",
    category: row.categories?.name || "News",
    author_name: meta.author_name || "Stanley Montfort",
    author_href: meta.author_href || "/stanley-montfort/",
    author_role: meta.author_role || "Real Estate Advisor®",
    featured_image_src: featured.src,
    featured_image_alt: featured.alt,
    share_url: `https://montfortre.com/${row.slug}/`,
    toc: [],
    body_html: articleBodyToHtml(row.body),
    blocks,
    kicker_label: meta.kicker_label ?? null,
    show_hero_ctas: meta.show_hero_ctas ?? true,
    published: isPublishedStatus(row.status),
    meta_title: meta.meta_title || null,
    meta_description: meta.meta_description || null,
    deleted_at: /-trashed-/i.test(row.slug) ? row.updated_at : null,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

async function ensureCategoryId(name: string): Promise<string | null> {
  const sb = getSupabase();
  if (!sb || !name.trim()) return null;
  const slug = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const { data: existing } = await sb.from("categories").select("id").eq("slug", slug).maybeSingle();
  if (existing?.id) return existing.id as string;

  const { data: created, error } = await sb
    .from("categories")
    .insert({ name: name.trim(), slug, description: null })
    .select("id")
    .single();
  if (error) {
    console.warn("[cms] category create failed", error.message);
    return null;
  }
  return created.id as string;
}

/** All blog categories from Cloud (or static defaults offline). */
export async function fetchBlogCategories(): Promise<{ id: string; name: string }[]> {
  const sb = getSupabase();
  const fallback = () =>
    [...new Set(["News", "Market Report", "Buyer Guide", "Seller Guide", "Neighborhoods", "Investing", "Financing", "Co-Ownership", "Market Insight", "Ownership"])]
      .sort((a, b) => a.localeCompare(b))
      .map((name) => ({ id: name, name }));

  if (!sb || !isCmsConfigured()) return fallback();

  const { data, error } = await sb.from("categories").select("id, name").order("name");
  if (error || !data?.length) return fallback();
  return data.map((row) => ({ id: row.id as string, name: String(row.name) }));
}

/** Create a category in Cloud and return it (reuses slug dedupe). */
export async function createBlogCategory(name: string): Promise<{ id: string; name: string } | null> {
  const trimmed = name.trim();
  if (!trimmed) return null;
  const id = await ensureCategoryId(trimmed);
  if (!id) return null;
  return { id, name: trimmed };
}

export async function fetchPublishedBlogCards(): Promise<BlogCard[] | null> {
  const sb = getSupabase();
  if (!sb || !isCmsConfigured()) return null;

  const { data, error } = await sb
    .from("posts")
    .select("slug, title, excerpt, body, status, categories(name)")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.warn("[cms] blog cards failed", error.message);
    return null;
  }
  if (!data?.length) return null;

  return data.map((row) => {
    const cat = (row as { categories?: { name?: string } | null }).categories?.name || "News";
    const meta = parseArticleMeta(typeof row.body === "string" ? row.body : null);
    const featured = resolveBlogFeaturedImage(row.slug, {
      src: meta.featured_image_src,
      alt: meta.featured_image_alt,
    }, row.title);
    return {
      href: `/${row.slug}/`,
      image: featured.src,
      alt: featured.alt,
      category: cat,
      title: row.title,
      excerpt: row.excerpt || "",
    };
  });
}

export async function fetchPublishedBlogBySlug(slug: string): Promise<BlogArticleModule | null> {
  const sb = getSupabase();
  if (!sb || !isCmsConfigured()) {
    return BLOG_ARTICLE_REGISTRY[slug] ?? null;
  }

  const { data, error } = await sb
    .from("posts")
    .select("*, categories(id, name, slug)")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.warn("[cms] blog by slug failed", error.message);
    return BLOG_ARTICLE_REGISTRY[slug] ?? null;
  }
  if (!data) return BLOG_ARTICLE_REGISTRY[slug] ?? null;

  const article = cloudPostToArticle(data as CloudPostRow);
  return {
    meta: article.meta,
    seo: article.seo,
    bodyHtml: article.bodyHtml,
  };
}

export async function adminFetchBlogPosts(): Promise<CmsBlogRow[]> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  const userId = await getRequiredUserId();
  let query = sb.from("posts").select("*, categories(id, name, slug)").order("updated_at", { ascending: false });
  if (userId) query = query.eq("author_id", userId);
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return ((data || []) as CloudPostRow[]).map(postToAdminRow);
}

export async function adminFetchBlogById(id: string): Promise<CmsBlogRow | null> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  const userId = await getRequiredUserId();
  let query = sb.from("posts").select("*, categories(id, name, slug)").eq("id", id);
  if (userId) query = query.eq("author_id", userId);
  const { data, error } = await query.maybeSingle();
  if (error) throw new Error(error.message);
  return data ? postToAdminRow(data as CloudPostRow) : null;
}

export async function adminUpsertBlogPost(
  payload: Record<string, unknown>,
  id?: string,
): Promise<CmsBlogRow> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) throw new Error("Not signed in");

  const published = Boolean(payload.published);
  const categoryName = String(payload.category || "News");
  const category_id = await ensureCategoryId(categoryName);
  const blocks = Array.isArray(payload.blocks)
    ? (payload.blocks as CmsBlock[])
    : parseArticleBody(String(payload.body_html ?? ""));
  const body = serializeArticleBody(blocks, {
    featured_image_src: String(payload.featured_image_src || "").trim() || undefined,
    featured_image_alt: String(payload.featured_image_alt || "").trim() || undefined,
    author_name: String(payload.author_name || "").trim() || undefined,
    author_href: String(payload.author_href || "").trim() || undefined,
    author_role: String(payload.author_role || "").trim() || undefined,
    meta_title: payload.meta_title ? String(payload.meta_title) : undefined,
    meta_description: payload.meta_description ? String(payload.meta_description) : undefined,
    show_hero_ctas: payload.show_hero_ctas === undefined ? true : Boolean(payload.show_hero_ctas),
    kicker_label: payload.kicker_label ? String(payload.kicker_label) : null,
  });

  const row = {
    title: String(payload.h1 || payload.title || "").trim(),
    slug: String(payload.slug || "").trim(),
    excerpt: String(payload.lead || "").trim(),
    body,
    status: published ? "published" : "draft",
    published_at: published ? new Date().toISOString() : null,
    category_id,
    author_id: user.id,
  };

  if (id) {
    const userId = await getRequiredUserId();
    const { data: existing, error: fetchErr } = await sb.from("posts").select("author_id").eq("id", id).maybeSingle();
    if (fetchErr) throw new Error(fetchErr.message);
    if (!existing) throw new Error("Post not found");
    await assertOwnsResource((existing as { author_id?: string | null }).author_id, userId);

    let updateQuery = sb.from("posts").update(row).eq("id", id);
    if (userId) updateQuery = updateQuery.eq("author_id", userId);
    const { data, error } = await updateQuery.select("*, categories(id, name, slug)").single();
    if (error) throw new Error(error.message);
    return postToAdminRow(data as CloudPostRow);
  }

  const { data, error } = await sb
    .from("posts")
    .insert(row)
    .select("*, categories(id, name, slug)")
    .single();
  if (error) throw new Error(error.message);
  return postToAdminRow(data as CloudPostRow);
}

export async function adminSoftDeleteBlogPost(id: string): Promise<void> {
  await adminPatchBlogPublished(id, false);
}

export async function adminPatchBlogPublished(id: string, published: boolean): Promise<CmsBlogRow> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  const userId = await getRequiredUserId();

  const { data: existing, error: fetchErr } = await sb.from("posts").select("author_id").eq("id", id).maybeSingle();
  if (fetchErr) throw new Error(fetchErr.message);
  if (!existing) throw new Error("Post not found");
  await assertOwnsResource((existing as { author_id?: string | null }).author_id, userId);

  let updateQuery = sb
    .from("posts")
    .update({
      status: published ? "published" : "draft",
      published_at: published ? new Date().toISOString() : null,
    })
    .eq("id", id);
  if (userId) updateQuery = updateQuery.eq("author_id", userId);
  const { data, error } = await updateQuery.select("*, categories(id, name, slug)").single();
  if (error) throw new Error(error.message);
  return postToAdminRow(data as CloudPostRow);
}

export async function adminDuplicateBlogPost(id: string): Promise<CmsBlogRow> {
  const existing = await adminFetchBlogById(id);
  if (!existing) throw new Error("Post not found");
  return adminUpsertBlogPost({
    slug: `${existing.slug}-copy`.replace(/(-copy)+$/, "-copy"),
    h1: `${existing.h1} (Copy)`,
    lead: existing.lead,
    category: existing.category,
    author_name: existing.author_name,
    author_href: existing.author_href,
    author_role: existing.author_role,
    featured_image_src: existing.featured_image_src,
    featured_image_alt: existing.featured_image_alt,
    blocks: existing.blocks?.length ? existing.blocks : parseArticleBody(existing.body_html),
    published: false,
  });
}

export async function adminTrashBlogPost(id: string): Promise<void> {
  const row = await adminFetchBlogById(id);
  if (!row) throw new Error("Post not found");
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  const userId = await getRequiredUserId();
  const trashSlug = `${row.slug}-trashed-${Date.now().toString(36)}`;

  let updateQuery = sb
    .from("posts")
    .update({ status: "draft", published_at: null, slug: trashSlug })
    .eq("id", id);
  if (userId) updateQuery = updateQuery.eq("author_id", userId);
  const { error } = await updateQuery;
  if (error) throw new Error(error.message);
}

export async function adminRestoreBlogPost(id: string): Promise<CmsBlogRow> {
  const row = await adminFetchBlogById(id);
  if (!row) throw new Error("Post not found");
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  const userId = await getRequiredUserId();
  const restoredSlug = row.slug.replace(/-trashed-[a-z0-9]+$/i, "");

  let updateQuery = sb.from("posts").update({ slug: restoredSlug }).eq("id", id);
  if (userId) updateQuery = updateQuery.eq("author_id", userId);
  const { data, error } = await updateQuery.select("*, categories(id, name, slug)").single();
  if (error) throw new Error(error.message);
  return postToAdminRow(data as CloudPostRow);
}

export type { CloudCategoryRow };
