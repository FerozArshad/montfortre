/** Registry of all Montfort broker listings. */

import type { ListingDetail } from "./types";
import { LISTING_523_WEST_121ST_2 } from "./listing523West121stStreet2";
import { LISTING_475_WEST_144TH_STREET } from "./listing475West144thStreet";
import { LISTING_26_WEST_95TH_STREET } from "./listing26West95thStreet";
import { LISTING_124_WEST_131ST_STREET_2 } from "./listing124West131stStreet2";
import { LISTING_313_WEST_143RD_STREET_2A } from "./listing313West143rdStreet2a";
import { LISTING_14_WEST_121ST_STREET } from "./listing14West121stStreet";
import { LISTING_481_WEST_145TH_STREET } from "./listing481West145thStreet";
import { LISTING_542_CATHEDRAL_PARKWAY } from "./listing542CathedralParkway";
import { LISTING_544_WEST_148TH_STREET } from "./listing544West148thStreet";
import { LISTING_76_WEST_105TH_STREET_THN } from "./listing76West105thStreetThn";
import { LISTING_76_WEST_105TH_STREET_PH } from "./listing76West105thStreetPh";
import { LISTING_2040_MADISON_AVENUE_4 } from "./listing2040MadisonAvenue4";
import { LISTING_420_WEST_144TH_STREET } from "./listing420West144thStreet";
import { LISTING_108_WEST_114TH_STREET_4B } from "./listing108West114thStreet4b";

export type { ListingDetail, ListingFact, ListingGalleryImage, ListingInsight } from "./types";
export { LISTING_AGENT, parsePriceValue } from "./types";

export const ALL_LISTINGS: ListingDetail[] = [
  LISTING_523_WEST_121ST_2,
  LISTING_475_WEST_144TH_STREET,
  LISTING_26_WEST_95TH_STREET,
  LISTING_124_WEST_131ST_STREET_2,
  LISTING_313_WEST_143RD_STREET_2A,
  LISTING_14_WEST_121ST_STREET,
  LISTING_481_WEST_145TH_STREET,
  LISTING_542_CATHEDRAL_PARKWAY,
  LISTING_544_WEST_148TH_STREET,
  LISTING_76_WEST_105TH_STREET_THN,
  LISTING_76_WEST_105TH_STREET_PH,
  LISTING_2040_MADISON_AVENUE_4,
  LISTING_420_WEST_144TH_STREET,
  LISTING_108_WEST_114TH_STREET_4B,
].sort((a, b) => a.sortOrder - b.sortOrder);

export const LISTING_SLUGS = ALL_LISTINGS.map((l) => l.slug);

export function getListingBySlug(slug: string): ListingDetail | undefined {
  return ALL_LISTINGS.find((l) => l.slug === slug);
}

export function isListingSlug(slug: string): boolean {
  return LISTING_SLUGS.includes(slug);
}
