import type { ListingDetail } from "../../data/listings/types";
import type { BlogArticleMeta, BlogTocItem } from "../../components/blog-article/types";
import type { PageSeo } from "../../seo/types";
import { BLOG_ARTICLE_REGISTRY } from "../../blog/registry";
import { articleBodyToHtml, parseArticleBody, parseArticleMeta, tocFromBlocks } from "./blocks";

const DEFAULT_FEATURED = "/redesign-assets/hoods/harlem.webp";

/** Prefer CMS meta, then static article registry, then neighborhood fallback. */
export function resolveBlogFeaturedImage(
  slug: string,
  fromMeta?: { src?: string | null; alt?: string | null },
  titleFallback = "",
): { src: string; alt: string } {
  const staticMeta = BLOG_ARTICLE_REGISTRY[slug]?.meta;
  const src =
    (fromMeta?.src || "").trim() ||
    staticMeta?.featuredImageSrc ||
    DEFAULT_FEATURED;
  const alt =
    (fromMeta?.alt || "").trim() ||
    staticMeta?.featuredImageAlt ||
    staticMeta?.h1 ||
    titleFallback ||
    "Article";
  return { src, alt };
}

/** Lovable Cloud `posts` row (blog). */
export type CloudPostRow = {
  id: string;
  created_at: string;
  updated_at: string;
  author_id: string | null;
  title: string;
  slug: string;
  excerpt: string | null;
  body: string | null;
  status: string;
  published_at: string | null;
  category_id: string | null;
  categories?: { id: string; name: string; slug: string } | null;
};

/** Lovable Cloud `pages` row — Montfort listings store JSON in `body`. */
export type CloudPageRow = {
  id: string;
  created_at: string;
  updated_at: string;
  author_id: string | null;
  title: string;
  slug: string;
  body: string | null;
  status: string;
};

export type CloudCategoryRow = {
  id: string;
  created_at: string;
  updated_at: string;
  slug: string;
  name: string;
  description: string | null;
};

export type CloudMediaRow = {
  id: string;
  created_at: string;
  updated_at: string;
  file_path: string;
  mime_type: string | null;
  alt_text: string | null;
};

export const LISTING_BODY_MARKER = "__montfort";
export const LISTING_BODY_TYPE = "listing";

export type ListingPageBody = {
  __montfort: typeof LISTING_BODY_TYPE;
  version: 1;
  listing: ListingDetail;
};

export function isPublishedStatus(status: string | null | undefined): boolean {
  return String(status || "").toLowerCase() === "published";
}

export function parseListingPageBody(body: string | null | undefined): ListingDetail | null {
  if (!body?.trim()) return null;
  try {
    const raw = JSON.parse(body) as ListingPageBody;
    if (raw?.__montfort === LISTING_BODY_TYPE && raw.listing?.slug) return raw.listing;
  } catch {
    return null;
  }
  return null;
}

export function serializeListingPageBody(listing: ListingDetail): string {
  const payload: ListingPageBody = {
    __montfort: LISTING_BODY_TYPE,
    version: 1,
    listing,
  };
  return JSON.stringify(payload);
}

export function cloudPostToArticle(row: CloudPostRow): {
  meta: BlogArticleMeta;
  seo: PageSeo;
  bodyHtml: string;
} {
  const category = row.categories?.name || "News";
  const lead = row.excerpt || "";
  const url = `https://montfortre.com/${row.slug}/`;
  const title = `${row.title} | Montfort Real Estate`;
  const desc = lead.slice(0, 160) || row.title;
  const blocks = parseArticleBody(row.body);
  const editorMeta = parseArticleMeta(row.body);
  const toc = tocFromBlocks(blocks);
  const seoTitle = editorMeta.meta_title?.trim() || title;
  const seoDesc = editorMeta.meta_description?.trim() || desc;
  const featured = resolveBlogFeaturedImage(
    row.slug,
    { src: editorMeta.featured_image_src, alt: editorMeta.featured_image_alt },
    row.title,
  );
  const meta: BlogArticleMeta = {
    slug: row.slug,
    h1: row.title,
    lead,
    category,
    authorName: editorMeta.author_name || "Stanley Montfort",
    authorHref: editorMeta.author_href || "/stanley-montfort/",
    authorRole: editorMeta.author_role || "Real Estate Advisor®",
    featuredImageSrc: featured.src,
    featuredImageAlt: featured.alt,
    shareUrl: url,
    toc,
    showHeroCtas: editorMeta.show_hero_ctas ?? true,
  };
  const seo: PageSeo = {
    title: seoTitle,
    metas: [
      { name: "description", content: seoDesc },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seoTitle },
      { name: "twitter:description", content: seoDesc },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "article" },
      { property: "og:title", content: seoTitle },
      { property: "og:description", content: seoDesc },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "Montfort Real Estate" },
    ],
    links: [{ rel: "canonical", href: url }],
    jsonLd: [
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: row.title,
        description: seoDesc,
        author: { "@type": "Person", name: meta.authorName },
        url,
      }),
    ],
  };
  return { meta, seo, bodyHtml: articleBodyToHtml(row.body) };
}

/** @deprecated old custom CMS shape — kept so seed/admin compile during migration */
export type CmsListingRow = {
  id: string;
  slug: string;
  title: string;
  status: string;
  price: string;
  price_value: number;
  beds: string;
  baths: string;
  year: string | null;
  sqft: string | null;
  stories: string | null;
  property_type: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  neighborhood: string;
  hero_image: string;
  hero_alt: string;
  gallery: ListingDetail["gallery"];
  facts: ListingDetail["facts"];
  overview_paras: string[];
  insights: ListingDetail["insights"];
  location: ListingDetail["location"];
  agent: ListingDetail["agent"];
  tour_href: string;
  sort_order: number;
  mls: string | null;
  video_tour: string | null;
  matterport_embed: string | null;
  more_details_paras: string[] | null;
  tour_button_label: string | null;
  show_schedule_button: boolean;
  price_title: string | null;
  price_subtitle: string | null;
  area_guide_name: string | null;
  area_description: string | null;
  spark: import("../../data/listings/sparkUi").ListingSparkUi | null;
  published: boolean;
  meta_title: string | null;
  meta_description: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
};

export type CmsBlogRow = {
  id: string;
  slug: string;
  h1: string;
  lead: string;
  category: string;
  author_name: string;
  author_href: string;
  author_role: string;
  featured_image_src: string;
  featured_image_alt: string;
  share_url: string;
  toc: BlogTocItem[] | [string, string][];
  body_html: string;
  /** Parsed for admin BlockEditor; also recoverable from body_html. */
  blocks?: import("./blocks").CmsBlock[];
  kicker_label: string | null;
  show_hero_ctas: boolean;
  published: boolean;
  meta_title: string | null;
  meta_description: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
};

export function listingRowToDetail(row: CmsListingRow): ListingDetail {
  return {
    slug: row.slug,
    title: row.title,
    status: row.status,
    price: row.price,
    priceValue: Number(row.price_value) || 0,
    beds: row.beds,
    baths: row.baths,
    year: row.year || undefined,
    sqft: row.sqft || undefined,
    stories: row.stories || undefined,
    propertyType: row.property_type,
    street: row.street,
    city: row.city,
    state: row.state,
    zip: row.zip,
    neighborhood: row.neighborhood,
    heroImage: row.hero_image,
    heroAlt: row.hero_alt,
    gallery: Array.isArray(row.gallery) ? row.gallery : [],
    facts: Array.isArray(row.facts) ? row.facts : [],
    overviewParas: Array.isArray(row.overview_paras) ? row.overview_paras : [],
    insights: Array.isArray(row.insights) ? row.insights : [],
    location: (row.location || { mapQuery: "", blurb: "", nearby: [] }) as ListingDetail["location"],
    agent: (row.agent || {
      name: "Stanley Montfort",
      title: "Real Estate Advisor®",
      photo: "/redesign-assets/team/stanley-montfort.png",
      phoneDisplay: "(908) 414-6006",
      phoneHref: "tel:908-414-6006",
      email: "sm@montfortre.com",
    }) as ListingDetail["agent"],
    tourHref: row.tour_href || "https://calendly.com/montfort",
    sortOrder: row.sort_order,
    mls: row.mls || undefined,
    videoTour: row.video_tour || undefined,
    matterportEmbed: row.matterport_embed || undefined,
    moreDetailsParas: row.more_details_paras || undefined,
    tourButtonLabel: row.tour_button_label || undefined,
    showScheduleButton: row.show_schedule_button,
    priceTitle: row.price_title || undefined,
    priceSubtitle: row.price_subtitle || undefined,
    areaGuideName: row.area_guide_name || undefined,
    areaDescription: row.area_description || undefined,
    spark: row.spark || undefined,
  };
}

export function detailToListingInsert(detail: ListingDetail, published: boolean) {
  return {
    slug: detail.slug,
    title: detail.title,
    status: detail.status,
    price: detail.price,
    price_value: detail.priceValue,
    beds: detail.beds,
    baths: detail.baths,
    year: detail.year ?? null,
    sqft: detail.sqft ?? null,
    stories: detail.stories ?? null,
    property_type: detail.propertyType,
    street: detail.street,
    city: detail.city,
    state: detail.state,
    zip: detail.zip,
    neighborhood: detail.neighborhood,
    hero_image: detail.heroImage,
    hero_alt: detail.heroAlt,
    gallery: detail.gallery,
    facts: detail.facts,
    overview_paras: detail.overviewParas,
    insights: detail.insights,
    location: detail.location,
    agent: detail.agent,
    tour_href: detail.tourHref,
    sort_order: detail.sortOrder,
    mls: detail.mls ?? null,
    video_tour: detail.videoTour ?? null,
    matterport_embed: detail.matterportEmbed ?? null,
    more_details_paras: detail.moreDetailsParas ?? null,
    tour_button_label: detail.tourButtonLabel ?? null,
    show_schedule_button: detail.showScheduleButton ?? true,
    price_title: detail.priceTitle ?? null,
    price_subtitle: detail.priceSubtitle ?? null,
    area_guide_name: detail.areaGuideName ?? null,
    area_description: detail.areaDescription ?? null,
    spark: detail.spark ?? null,
    published,
  };
}

export function blogRowToMeta(row: CmsBlogRow): BlogArticleMeta {
  return cloudPostToArticle({
    id: row.id,
    created_at: row.created_at,
    updated_at: row.updated_at,
    author_id: null,
    title: row.h1,
    slug: row.slug,
    excerpt: row.lead,
    body: row.body_html,
    status: row.published ? "published" : "draft",
    published_at: null,
    category_id: null,
    categories: { id: "", name: row.category, slug: "" },
  }).meta;
}

export function buildBlogSeoFromRow(row: CmsBlogRow): PageSeo {
  return cloudPostToArticle({
    id: row.id,
    created_at: row.created_at,
    updated_at: row.updated_at,
    author_id: null,
    title: row.h1,
    slug: row.slug,
    excerpt: row.lead,
    body: row.body_html,
    status: row.published ? "published" : "draft",
    published_at: null,
    category_id: null,
    categories: { id: "", name: row.category, slug: "" },
  }).seo;
}
