import type { ListingDetail } from "./types";

const HERO_BY_SLUG: Record<string, string> = {
  "523-west-121st-street-2": "/redesign-assets/listings/1a-living-room.jpg",
  "475-west-144th-street": "/redesign-assets/listings/475-west-144th.png",
  "26-west-95th-street": "/redesign-assets/listings/26-west-95th.png",
  "124-west-131st-street-2": "/redesign-assets/listings/listing-1-6.png",
  "313-west-143rd-street-2a": "/redesign-assets/listings/313-west-143rd-2a.jpg",
  "14-west-121st-street": "/redesign-assets/listings/14-west-121st.jpg",
  "481-west-145th-street": "/redesign-assets/listings/1481-west-145th.jpg",
  "542-cathedral-parkway": "/redesign-assets/listings/542-cathedral-parkway.jpg",
  "544-west-148th-street": "/redesign-assets/listings/544-west-148th.jpg",
  "76-west-105th-street-thn": "/redesign-assets/listings/listing-1.png",
  "76-west-105th-street-ph": "/redesign-assets/listings/listing-1-2.jpg",
  "2040-madison-avenue-4": "/redesign-assets/listings/2040-madison.jpg",
  "420-west-144th-street": "/redesign-assets/listings/420-west-144th.jpg",
  "108-west-114th-street-4b": "/redesign-assets/listings/108-west-114th-4b.png",
};

const CDN_FILE_TO_LOCAL: Record<string, string> = {
  "1a-Living-room-2.jpg": "/redesign-assets/listings/1a-living-room.jpg",
  "14-2.jpg": "/redesign-assets/listings/475-west-144th.png",
  "19.jpg": "/redesign-assets/listings/26-west-95th.png",
  "1-6.png": "/redesign-assets/listings/listing-1-6.png",
  "Photo-1-Livingroom-313-West-143rd-St-2A-1.jpg": "/redesign-assets/listings/313-west-143rd-2a.jpg",
  "Listing-Photo-1-14-West-121-1-1.jpg": "/redesign-assets/listings/14-west-121st.jpg",
  "1481w145-1.jpg": "/redesign-assets/listings/1481-west-145th.jpg",
  "2-542-Cathedral-Parkway.jpg": "/redesign-assets/listings/542-cathedral-parkway.jpg",
  "1-544-West-148th-Street-1.jpg": "/redesign-assets/listings/544-west-148th.jpg",
  "1-1.png": "/redesign-assets/listings/listing-1.png",
  "1-3.jpg": "/redesign-assets/listings/listing-1-2.jpg",
  "1-2040-Madison-Ave-1.jpg": "/redesign-assets/listings/2040-madison.jpg",
  "1-420-W-144th-St-1.jpg": "/redesign-assets/listings/420-west-144th.jpg",
  "1.jpg": "/redesign-assets/listings/108-west-114th-4b.png",
};

/** In Vite, fetch CDN photos with montfortre.com Referer so galleries load. */
function rewriteCdn(src: string): string {
  if (!src.includes("assets.agentfire")) return src;
  if (!import.meta.env.DEV) return src;
  try {
    const u = new URL(src);
    return `/__af${u.pathname}${u.search}`;
  } catch {
    return src;
  }
}

/** AgentFire CDN often blocks localhost; use the local copies already in public/. */
export function localListingHero(slug: string, current?: string): string {
  const bySlug = HERO_BY_SLUG[slug];
  if (bySlug) return bySlug;
  if (current?.startsWith("/redesign-assets/")) return current;
  if (current) {
    const file = current.split("/").pop() || "";
    if (CDN_FILE_TO_LOCAL[file]) return CDN_FILE_TO_LOCAL[file];
  }
  return current || "/placeholder.svg";
}

export function withLocalListingMedia(listing: ListingDetail): ListingDetail {
  const heroImage = localListingHero(listing.slug, listing.heroImage);
  const gallery = listing.gallery.map((img, i) => {
    if (i === 0) return { ...img, src: heroImage };
    const file = img.src.split("/").pop() || "";
    const mapped = CDN_FILE_TO_LOCAL[file];
    return { ...img, src: rewriteCdn(mapped || img.src) };
  });
  return { ...listing, heroImage, gallery };
}
