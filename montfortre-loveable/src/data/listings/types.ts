/** Shared listing types for Montfort broker inventory pages. */

export type ListingGalleryImage = {
  src: string;
  alt: string;
};

export type ListingFact = {
  label: string;
  value: string;
};

export type ListingInsight = {
  title: string;
  body: string;
};

export type ListingDetail = {
  slug: string;
  title: string;
  status: string;
  price: string;
  /** Numeric price for sort; parse from price string when building data. */
  priceValue: number;
  beds: string;
  baths: string;
  /** Optional card chips used on live index when beds/baths are absent. */
  year?: string;
  sqft?: string;
  stories?: string;
  propertyType: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  neighborhood: string;
  heroImage: string;
  heroAlt: string;
  gallery: ListingGalleryImage[];
  facts: ListingFact[];
  overviewParas: string[];
  insights: ListingInsight[];
  location: {
    mapQuery: string;
    blurb: string;
    nearby: string[];
  };
  agent: {
    name: string;
    title: string;
    photo: string;
    phoneDisplay: string;
    phoneHref: string;
    email: string;
  };
  tourHref: string;
  /** Sort order on current-listings (lower = earlier / “newer” in default). */
  sortOrder: number;
  /** Optional Listings Hub / Spark fields */
  mls?: string;
  videoTour?: string;
  matterportEmbed?: string;
  moreDetailsParas?: string[];
  tourButtonLabel?: string;
  showScheduleButton?: boolean;
  priceTitle?: string;
  priceSubtitle?: string;
  areaGuideName?: string;
  areaDescription?: string;
  /** AgentFire Spark Design-panel parity (content + section toggles). */
  spark?: import("./sparkUi").ListingSparkUi;
  metaTitle?: string;
  metaDescription?: string;
};

export const LISTING_AGENT = {
  name: "Stanley Montfort",
  title: "Real Estate Advisor®",
  photo: "/redesign-assets/team/stanley-montfort.png",
  phoneDisplay: "(908) 414-6006",
  phoneHref: "tel:908-414-6006",
  email: "sm@montfortre.com",
} as const;

export function parsePriceValue(price: string): number {
  const n = Number(price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}
