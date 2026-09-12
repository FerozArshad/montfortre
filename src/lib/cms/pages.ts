import { getSupabase, isCmsConfigured } from "../supabase";
import {
  parseFreeformPageBody,
  serializeFreeformPageBody,
  type CmsBlock,
  type FreeformPagePayload,
} from "./blocks";
import { isPublishedStatus, parseListingPageBody, type CloudPageRow } from "./types";
import type { PageSeo } from "../../seo/types";

export type CmsFreeformPageRow = {
  id: string;
  slug: string;
  title: string;
  lead: string;
  meta_title: string;
  meta_description: string;
  blocks: CmsBlock[];
  published: boolean;
  created_at: string;
  updated_at: string;
};

function pageToFreeformRow(page: CloudPageRow): CmsFreeformPageRow | null {
  const parsed = parseFreeformPageBody(page.body);
  if (!parsed) return null;
  return {
    id: page.id,
    slug: page.slug,
    title: page.title,
    lead: parsed.lead || "",
    meta_title: parsed.meta_title || "",
    meta_description: parsed.meta_description || "",
    blocks: parsed.blocks,
    published: isPublishedStatus(page.status),
    created_at: page.created_at,
    updated_at: page.updated_at,
  };
}

export function buildFreeformPageSeo(
  title: string,
  slug: string,
  lead: string,
  metaTitle?: string,
  metaDescription?: string,
): PageSeo {
  const url = `https://montfortre.com/${slug}/`;
  const pageTitle = (metaTitle?.trim() || `${title} | Montfort Real Estate`).trim();
  const desc = (metaDescription?.trim() || lead || title).slice(0, 160);
  return {
    title: pageTitle,
    metas: [
      { name: "description", content: desc },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: desc },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: desc },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "Montfort Real Estate" },
    ],
    links: [{ rel: "canonical", href: url }],
    jsonLd: [
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description: desc,
        url,
      }),
    ],
  };
}

export type PublishedFreeformPage = {
  title: string;
  slug: string;
  lead: string;
  blocks: CmsBlock[];
  seo: PageSeo;
};

export async function fetchPublishedFreeformPageBySlug(slug: string): Promise<PublishedFreeformPage | null> {
  const sb = getSupabase();
  if (!sb || !isCmsConfigured()) return null;

  const { data, error } = await sb
    .from("pages")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.warn("[cms] freeform page by slug failed", error.message);
    return null;
  }
  if (!data) return null;

  const page = data as CloudPageRow;
  if (parseListingPageBody(page.body)) return null;

  const parsed = parseFreeformPageBody(page.body);
  if (!parsed) return null;

  return {
    title: page.title,
    slug: page.slug,
    lead: parsed.lead || "",
    blocks: parsed.blocks,
    seo: buildFreeformPageSeo(
      page.title,
      page.slug,
      parsed.lead || "",
      parsed.meta_title,
      parsed.meta_description,
    ),
  };
}

export async function adminFetchFreeformPages(): Promise<CmsFreeformPageRow[]> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  const { data, error } = await sb.from("pages").select("*").order("updated_at", { ascending: false });
  if (error) throw new Error(error.message);
  return ((data || []) as CloudPageRow[])
    .map(pageToFreeformRow)
    .filter((r): r is CmsFreeformPageRow => Boolean(r));
}

export async function adminFetchFreeformPageById(id: string): Promise<CmsFreeformPageRow | null> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  const { data, error } = await sb.from("pages").select("*").eq("id", id).maybeSingle();
  if (error) throw new Error(error.message);
  if (!data) return null;
  return pageToFreeformRow(data as CloudPageRow);
}

/** Update title / URL / SEO only — preserves existing content blocks. */
export async function adminUpdateFreeformPageMeta(
  id: string,
  payload: {
    title: string;
    slug: string;
    lead?: string;
    meta_title?: string;
    meta_description?: string;
    published: boolean;
  },
): Promise<CmsFreeformPageRow> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  const existing = await adminFetchFreeformPageById(id);
  if (!existing) throw new Error("Page not found");

  const body = serializeFreeformPageBody(existing.blocks, payload.lead || "", {
    meta_title: payload.meta_title,
    meta_description: payload.meta_description,
  });

  const { data, error } = await sb
    .from("pages")
    .update({
      title: payload.title.trim(),
      slug: payload.slug.trim(),
      body,
      status: payload.published ? "published" : "draft",
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select("*")
    .single();

  if (error) throw new Error(error.message);
  const mapped = pageToFreeformRow(data as CloudPageRow);
  if (!mapped) throw new Error("Saved page is not a freeform page payload");
  return mapped;
}

/** @deprecated Prefer adminUpdateFreeformPageMeta — creates are disabled in the admin UI. */
export async function adminUpsertFreeformPage(
  payload: {
    title: string;
    slug: string;
    lead?: string;
    meta_title?: string;
    meta_description?: string;
    blocks: CmsBlock[];
    published: boolean;
  },
  id?: string,
): Promise<CmsFreeformPageRow> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) throw new Error("Not signed in");

  const body = serializeFreeformPageBody(payload.blocks, payload.lead || "", {
    meta_title: payload.meta_title,
    meta_description: payload.meta_description,
  });
  const row = {
    title: payload.title.trim(),
    slug: payload.slug.trim(),
    body,
    status: payload.published ? "published" : "draft",
    author_id: user.id,
  };

  if (id) {
    const { data, error } = await sb.from("pages").update(row).eq("id", id).select("*").single();
    if (error) throw new Error(error.message);
    const mapped = pageToFreeformRow(data as CloudPageRow);
    if (!mapped) throw new Error("Saved page is not a freeform page payload");
    return mapped;
  }

  const { data, error } = await sb.from("pages").insert(row).select("*").single();
  if (error) throw new Error(error.message);
  const mapped = pageToFreeformRow(data as CloudPageRow);
  if (!mapped) throw new Error("Saved page is not a freeform page payload");
  return mapped;
}

export async function adminSoftDeleteFreeformPage(id: string): Promise<void> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  const { error } = await sb.from("pages").update({ status: "draft" }).eq("id", id);
  if (error) throw new Error(error.message);
}

export type { FreeformPagePayload };
