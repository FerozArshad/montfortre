import type { ListingDetail } from "../../data/listings/types";
import { ALL_LISTINGS, getListingBySlug as getStaticListing } from "../../data/listings";
import { getSupabase, isCmsConfigured } from "../supabase";
import {
  assertOwnsResource,
  getRequiredUserId,
  isListingPropertyStatus,
  type ListingPropertyStatus,
} from "./ownership";
import {
  isPublishedStatus,
  parseListingPageBody,
  serializeListingPageBody,
  type CloudPageRow,
  type CmsListingRow,
} from "./types";

export { LISTING_PROPERTY_STATUSES } from "./ownership";
export type { ListingPropertyStatus } from "./ownership";

function pageToAdminRow(page: CloudPageRow): CmsListingRow | null {
  const listing = parseListingPageBody(page.body);
  if (!listing) return null;
  return {
    id: page.id,
    slug: listing.slug || page.slug,
    title: listing.title || page.title,
    status: listing.status,
    price: listing.price,
    price_value: listing.priceValue,
    beds: listing.beds,
    baths: listing.baths,
    year: listing.year ?? null,
    sqft: listing.sqft ?? null,
    stories: listing.stories ?? null,
    property_type: listing.propertyType,
    street: listing.street,
    city: listing.city,
    state: listing.state,
    zip: listing.zip,
    neighborhood: listing.neighborhood,
    hero_image: listing.heroImage,
    hero_alt: listing.heroAlt,
    gallery: listing.gallery,
    facts: listing.facts,
    overview_paras: listing.overviewParas,
    insights: listing.insights,
    location: listing.location,
    agent: listing.agent,
    tour_href: listing.tourHref,
    sort_order: listing.sortOrder,
    mls: listing.mls ?? null,
    video_tour: listing.videoTour ?? null,
    matterport_embed: listing.matterportEmbed ?? null,
    more_details_paras: listing.moreDetailsParas ?? null,
    tour_button_label: listing.tourButtonLabel ?? null,
    show_schedule_button: listing.showScheduleButton ?? true,
    price_title: listing.priceTitle ?? null,
    price_subtitle: listing.priceSubtitle ?? null,
    area_guide_name: listing.areaGuideName ?? null,
    area_description: listing.areaDescription ?? null,
    spark: listing.spark ?? null,
    published: isPublishedStatus(page.status),
    meta_title: listing.metaTitle ?? null,
    meta_description: listing.metaDescription ?? null,
    deleted_at: /-trashed-/i.test(page.slug) ? page.updated_at : null,
    created_at: page.created_at,
    updated_at: page.updated_at,
  };
}

export async function fetchPublishedListings(): Promise<ListingDetail[]> {
  const sb = getSupabase();
  if (!sb || !isCmsConfigured()) return ALL_LISTINGS;

  const { data, error } = await sb
    .from("pages")
    .select("*")
    .eq("status", "published")
    .order("updated_at", { ascending: false });

  if (error) {
    console.warn("[cms] pages fetch failed, using static fallback", error.message);
    return ALL_LISTINGS;
  }

  const listings = ((data || []) as CloudPageRow[])
    .map((p) => parseListingPageBody(p.body))
    .filter((l): l is ListingDetail => Boolean(l));

  if (!listings.length) return ALL_LISTINGS;
  return listings.sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function fetchPublishedListingBySlug(slug: string): Promise<ListingDetail | null> {
  const sb = getSupabase();
  if (!sb || !isCmsConfigured()) return getStaticListing(slug) ?? null;

  const { data, error } = await sb
    .from("pages")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.warn("[cms] page by slug failed, static fallback", error.message);
    return getStaticListing(slug) ?? null;
  }
  if (data) {
    const listing = parseListingPageBody((data as CloudPageRow).body);
    if (listing) return listing;
    // Cloud row exists but is freeform (or unknown) — do not mask with static listing
    return null;
  }
  return getStaticListing(slug) ?? null;
}

export async function adminFetchListings(): Promise<CmsListingRow[]> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  const userId = await getRequiredUserId();
  let query = sb.from("pages").select("*").order("updated_at", { ascending: false });
  if (userId) query = query.eq("author_id", userId);
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return ((data || []) as CloudPageRow[])
    .map(pageToAdminRow)
    .filter((r): r is CmsListingRow => Boolean(r));
}

export async function adminFetchListingById(id: string): Promise<CmsListingRow | null> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  const userId = await getRequiredUserId();
  let query = sb.from("pages").select("*").eq("id", id);
  if (userId) query = query.eq("author_id", userId);
  const { data, error } = await query.maybeSingle();
  if (error) throw new Error(error.message);
  if (!data) return null;
  return pageToAdminRow(data as CloudPageRow);
}

export async function adminUpsertListing(
  payload: Record<string, unknown>,
  id?: string,
): Promise<CmsListingRow> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");

  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) throw new Error("Not signed in");

  // Admin form still posts flat listing fields + published bool
  const published = Boolean(payload.published);
  const listingLike = {
    slug: String(payload.slug || ""),
    title: String(payload.title || ""),
    status: String(payload.status || "For Sale"),
    price: String(payload.price || ""),
    priceValue: Number(payload.price_value) || 0,
    beds: String(payload.beds || ""),
    baths: String(payload.baths || ""),
    year: (payload.year as string) || undefined,
    sqft: (payload.sqft as string) || undefined,
    stories: (payload.stories as string) || undefined,
    propertyType: String(payload.property_type || ""),
    street: String(payload.street || ""),
    city: String(payload.city || "New York"),
    state: String(payload.state || "NY"),
    zip: String(payload.zip || ""),
    neighborhood: String(payload.neighborhood || ""),
    heroImage: String(payload.hero_image || ""),
    heroAlt: String(payload.hero_alt || ""),
    gallery: (payload.gallery as ListingDetail["gallery"]) || [],
    facts: (payload.facts as ListingDetail["facts"]) || [],
    overviewParas: (payload.overview_paras as string[]) || [],
    insights: (payload.insights as ListingDetail["insights"]) || [],
    location: (payload.location as ListingDetail["location"]) || { mapQuery: "", blurb: "", nearby: [] },
    agent: payload.agent as ListingDetail["agent"],
    tourHref: String(payload.tour_href || "https://calendly.com/montfort"),
    sortOrder: Number(payload.sort_order) || 100,
    mls: payload.mls ? String(payload.mls) : undefined,
    videoTour: payload.video_tour ? String(payload.video_tour) : undefined,
    matterportEmbed: payload.matterport_embed ? String(payload.matterport_embed) : undefined,
    moreDetailsParas: (payload.more_details_paras as string[]) || undefined,
    tourButtonLabel: payload.tour_button_label ? String(payload.tour_button_label) : undefined,
    showScheduleButton: payload.show_schedule_button === undefined ? true : Boolean(payload.show_schedule_button),
    priceTitle: payload.price_title ? String(payload.price_title) : undefined,
    priceSubtitle: payload.price_subtitle ? String(payload.price_subtitle) : undefined,
    areaGuideName: payload.area_guide_name ? String(payload.area_guide_name) : undefined,
    areaDescription: payload.area_description ? String(payload.area_description) : undefined,
    spark: payload.spark
      ? (payload.spark as ListingDetail["spark"])
      : undefined,
    metaTitle: payload.meta_title ? String(payload.meta_title) : undefined,
    metaDescription: payload.meta_description ? String(payload.meta_description) : undefined,
  } as ListingDetail;

  const pagePayload = {
    title: listingLike.title,
    slug: listingLike.slug,
    body: serializeListingPageBody(listingLike),
    status: published ? "published" : "draft",
    author_id: user.id,
  };

  if (id) {
    const userId = await getRequiredUserId();
    const { data: existing, error: fetchErr } = await sb.from("pages").select("author_id").eq("id", id).maybeSingle();
    if (fetchErr) throw new Error(fetchErr.message);
    if (!existing) throw new Error("Listing not found");
    await assertOwnsResource((existing as { author_id?: string | null }).author_id, userId);

    let updateQuery = sb.from("pages").update(pagePayload).eq("id", id);
    if (userId) updateQuery = updateQuery.eq("author_id", userId);
    const { data, error } = await updateQuery.select("*").single();
    if (error) throw new Error(error.message);
    const row = pageToAdminRow(data as CloudPageRow);
    if (!row) throw new Error("Saved page is not a listing payload");
    return row;
  }

  const { data, error } = await sb.from("pages").insert(pagePayload).select("*").single();
  if (error) throw new Error(error.message);
  const row = pageToAdminRow(data as CloudPageRow);
  if (!row) throw new Error("Saved page is not a listing payload");
  return row;
}

export async function adminSoftDeleteListing(id: string): Promise<void> {
  await adminPatchListingPublished(id, false);
}

export async function adminPatchListingPublished(id: string, published: boolean): Promise<CmsListingRow> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  const userId = await getRequiredUserId();

  const { data: existing, error: fetchErr } = await sb.from("pages").select("author_id").eq("id", id).maybeSingle();
  if (fetchErr) throw new Error(fetchErr.message);
  if (!existing) throw new Error("Listing not found");
  await assertOwnsResource((existing as { author_id?: string | null }).author_id, userId);

  let updateQuery = sb.from("pages").update({ status: published ? "published" : "draft" }).eq("id", id);
  if (userId) updateQuery = updateQuery.eq("author_id", userId);
  const { data, error } = await updateQuery.select("*").single();
  if (error) throw new Error(error.message);
  const row = pageToAdminRow(data as CloudPageRow);
  if (!row) throw new Error("Saved page is not a listing payload");
  return row;
}

export async function adminPatchListingPropertyStatus(
  id: string,
  status: ListingPropertyStatus,
): Promise<CmsListingRow> {
  if (!isListingPropertyStatus(status)) throw new Error("Invalid listing status");

  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  const userId = await getRequiredUserId();

  const { data: existing, error: fetchErr } = await sb
    .from("pages")
    .select("body, author_id")
    .eq("id", id)
    .maybeSingle();
  if (fetchErr) throw new Error(fetchErr.message);
  if (!existing) throw new Error("Listing not found");
  await assertOwnsResource((existing as { author_id?: string | null }).author_id, userId);

  const listing = parseListingPageBody((existing as { body?: string }).body);
  if (!listing) throw new Error("Saved page is not a listing payload");
  listing.status = status;

  let updateQuery = sb
    .from("pages")
    .update({ body: serializeListingPageBody(listing) })
    .eq("id", id);
  if (userId) updateQuery = updateQuery.eq("author_id", userId);
  const { data, error } = await updateQuery.select("*").single();
  if (error) throw new Error(error.message);
  const row = pageToAdminRow(data as CloudPageRow);
  if (!row) throw new Error("Saved page is not a listing payload");
  return row;
}

export async function adminDuplicateListing(id: string): Promise<CmsListingRow> {
  const existing = await adminFetchListingById(id);
  if (!existing) throw new Error("Listing not found");
  const payload = {
    slug: `${existing.slug}-copy`.replace(/(-copy)+$/, "-copy"),
    title: `${existing.title} (Copy)`,
    status: existing.status,
    price: existing.price,
    price_value: existing.price_value,
    beds: existing.beds,
    baths: existing.baths,
    year: existing.year,
    sqft: existing.sqft,
    stories: existing.stories,
    property_type: existing.property_type,
    street: existing.street,
    city: existing.city,
    state: existing.state,
    zip: existing.zip,
    neighborhood: existing.neighborhood,
    hero_image: existing.hero_image,
    hero_alt: existing.hero_alt,
    gallery: existing.gallery,
    facts: existing.facts,
    overview_paras: existing.overview_paras,
    insights: existing.insights,
    location: existing.location,
    agent: existing.agent,
    tour_href: existing.tour_href,
    sort_order: existing.sort_order,
    mls: existing.mls,
    video_tour: existing.video_tour,
    matterport_embed: existing.matterport_embed,
    more_details_paras: existing.more_details_paras,
    tour_button_label: existing.tour_button_label,
    show_schedule_button: existing.show_schedule_button,
    price_title: existing.price_title,
    price_subtitle: existing.price_subtitle,
    area_guide_name: existing.area_guide_name,
    area_description: existing.area_description,
    spark: existing.spark,
    published: false,
  };
  return adminUpsertListing(payload);
}

export async function adminTrashListing(id: string): Promise<void> {
  const row = await adminFetchListingById(id);
  if (!row) throw new Error("Listing not found");
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  const userId = await getRequiredUserId();

  const { data, error: fetchErr } = await sb.from("pages").select("body, author_id").eq("id", id).maybeSingle();
  if (fetchErr) throw new Error(fetchErr.message);
  await assertOwnsResource((data as { author_id?: string | null } | null)?.author_id, userId);

  const listing = parseListingPageBody((data as { body?: string } | null)?.body);
  if (!listing) {
    await adminPatchListingPublished(id, false);
    return;
  }
  listing.slug = `${listing.slug}-trashed-${Date.now().toString(36)}`;
  let updateQuery = sb
    .from("pages")
    .update({
      status: "draft",
      slug: listing.slug,
      body: serializeListingPageBody(listing),
    })
    .eq("id", id);
  if (userId) updateQuery = updateQuery.eq("author_id", userId);
  const { error } = await updateQuery;
  if (error) throw new Error(error.message);
}

export async function adminRestoreListing(id: string): Promise<CmsListingRow> {
  const row = await adminFetchListingById(id);
  if (!row) throw new Error("Listing not found");
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  const userId = await getRequiredUserId();

  const { data, error: fetchErr } = await sb.from("pages").select("body, author_id, slug").eq("id", id).maybeSingle();
  if (fetchErr) throw new Error(fetchErr.message);
  await assertOwnsResource((data as { author_id?: string | null } | null)?.author_id, userId);

  const listing = parseListingPageBody((data as { body?: string; slug?: string } | null)?.body);
  const restoredSlug = restoreSlugFromTrash(String((data as { slug?: string }).slug || row.slug));
  if (listing) listing.slug = restoredSlug;

  let updateQuery = sb
    .from("pages")
    .update({
      slug: restoredSlug,
      ...(listing ? { body: serializeListingPageBody(listing) } : {}),
    })
    .eq("id", id);
  if (userId) updateQuery = updateQuery.eq("author_id", userId);
  const { data: updated, error } = await updateQuery.select("*").single();
  if (error) throw new Error(error.message);
  const out = pageToAdminRow(updated as CloudPageRow);
  if (!out) throw new Error("Saved page is not a listing payload");
  return out;
}

function restoreSlugFromTrash(slug: string) {
  return slug.replace(/-trashed-[a-z0-9]+$/i, "");
}
