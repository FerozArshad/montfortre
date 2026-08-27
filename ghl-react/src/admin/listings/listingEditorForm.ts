import { loadListingsHubSettings } from "./listingsHubSettings";
import {
  LISTING_AGENT,
  parsePriceValue,
  type ListingDetail,
  type ListingFact,
  type ListingGalleryImage,
  type ListingInsight,
} from "../../data/listings/types";
import { DEFAULT_SPARK_UI, mergeSparkUi, type ListingSparkUi } from "../../data/listings/sparkUi";
import { slugify } from "../../lib/cms/sanitize";

export type ListingEditorForm = {
  slug: string;
  title: string;
  status: string;
  price: string;
  price_title: string;
  price_subtitle: string;
  beds: string;
  baths: string;
  year: string;
  sqft: string;
  stories: string;
  property_type: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  neighborhood: string;
  mls: string;
  video_tour: string;
  matterport_embed: string;
  hero_image: string;
  hero_alt: string;
  gallery: ListingGalleryImage[];
  facts: ListingFact[];
  overview_text: string;
  more_details_text: string;
  insights: ListingInsight[];
  map_query: string;
  location_blurb: string;
  nearby_text: string;
  area_guide_name: string;
  area_description: string;
  tour_href: string;
  tour_button_label: string;
  show_schedule_button: boolean;
  sort_order: string;
  published: boolean;
  meta_title: string;
  meta_description: string;
  spark: ListingSparkUi;
};

export type SparkSectionId =
  | "details"
  | "header"
  | "gallery"
  | "about"
  | "specs"
  | "insights"
  | "area"
  | "more"
  | "reviews"
  | "matterport"
  | "page";

/** Same section order as AgentFire Spark Design panel. */
export const SPARK_SECTIONS: { id: SparkSectionId; label: string }[] = [
  { id: "details", label: "Details" },
  { id: "header", label: "Header" },
  { id: "gallery", label: "Gallery" },
  { id: "about", label: "About Property" },
  { id: "specs", label: "Property Specs" },
  { id: "insights", label: "Property Insights" },
  { id: "area", label: "The Area" },
  { id: "more", label: "More Details" },
  { id: "reviews", label: "Reviews" },
  { id: "matterport", label: "Matterport" },
  { id: "page", label: "Page settings" },
];

export function emptyListingEditorForm(): ListingEditorForm {
  const s = typeof window !== "undefined" ? loadListingsHubSettings() : null;
  return {
    slug: "",
    title: "",
    status: s?.defaultStatus || "For Sale",
    price: "",
    price_title: "",
    price_subtitle: "",
    beds: "",
    baths: "",
    year: "",
    sqft: "",
    stories: "",
    property_type: s?.defaultPropertyType || "Townhouse",
    street: "",
    city: s?.defaultCity || "New York",
    state: s?.defaultState || "NY",
    zip: "",
    neighborhood: s?.defaultNeighborhood || "Harlem",
    mls: "",
    video_tour: "",
    matterport_embed: "",
    hero_image: "",
    hero_alt: "",
    gallery: [],
    facts: [],
    overview_text: "",
    more_details_text: "",
    insights: [],
    map_query: "",
    location_blurb: "",
    nearby_text: "",
    area_guide_name: "",
    area_description: "",
    tour_href: s?.defaultTourHref || "https://calendly.com/montfort",
    tour_button_label: s?.tourButtonLabel || "Schedule A Tour",
    show_schedule_button: true,
    sort_order: "100",
    published: false,
    meta_title: "",
    meta_description: "",
    spark: { ...DEFAULT_SPARK_UI },
  };
}

/** Prefill for /admin/listings/new so the live canvas shows every section — not saved until Save. */
export function demoListingEditorForm(): ListingEditorForm {
  const base = emptyListingEditorForm();
  const gallery = [
    {
      src: "/redesign-assets/listings/14-west-121st.jpg",
      alt: "Demo — facade (placeholder)",
    },
    {
      src: "/redesign-assets/listings/1a-living-room.jpg",
      alt: "Demo — living room (placeholder)",
    },
    {
      src: "/redesign-assets/listings/542-cathedral-parkway.jpg",
      alt: "Demo — gallery 3 (placeholder)",
    },
    {
      src: "/redesign-assets/listings/420-west-144th.jpg",
      alt: "Demo — gallery 4 (placeholder)",
    },
  ];

  return {
    ...base,
    slug: "demo-spark-preview",
    title: "14 West Demo Street",
    status: "For Sale",
    price: "$2,450,000",
    price_title: "Asking price",
    price_subtitle: "Taxes TBD · Exclusive",
    beds: "5",
    baths: "3.5",
    year: "1910",
    sqft: "3,200",
    stories: "4",
    property_type: "Townhouse",
    street: "14 West Demo Street",
    city: base.city || "New York",
    state: base.state || "NY",
    zip: "10026",
    neighborhood: base.neighborhood || "Harlem",
    mls: "DEMO-40212",
    video_tour: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    matterport_embed: "https://my.matterport.com/show/?m=SxQL3iGyoDo",
    hero_image: gallery[0].src,
    hero_alt: gallery[0].alt,
    gallery,
    facts: [
      { label: "Bedrooms", value: "5" },
      { label: "Bathrooms", value: "3.5" },
      { label: "Square Ft.", value: "3,200" },
      { label: "Stories", value: "4" },
      { label: "Year Built", value: "1910" },
      { label: "Zoning", value: "R6A (demo)" },
    ],
    overview_text: [
      "This is placeholder About Property text so you can see where the description appears on the live canvas.",
      "Edit any field in the Design panel on the right — the preview updates immediately. Nothing is saved until you click Save.",
    ].join("\n\n"),
    more_details_text: [
      "More Details placeholder — financing notes, board package tips, or extra specs show here when this section is on.",
      "Toggle “Show More Details Section” in Design → More Details to hide this block.",
    ].join("\n\n"),
    insights: [
      { title: "Light & layout", body: "Placeholder insight — south-facing parlor floor (demo)." },
      { title: "Outdoor space", body: "Placeholder insight — garden + roof rights (demo)." },
      { title: "Location", body: "Placeholder insight — steps to the park and transit (demo)." },
    ],
    map_query: "West 121st Street & Lenox Avenue, New York, NY",
    location_blurb:
      "Placeholder location blurb — this is where the neighborhood pitch appears next to the map.",
    nearby_text: ["Central Park", "2/3 subway", "Whole Foods (demo)", "Marcus Garvey Park"].join("\n"),
    area_guide_name: "Harlem",
    area_description:
      "Placeholder The Area copy — select/guide name and this paragraph render under the overview when The Area is shown.",
    tour_button_label: base.tour_button_label || "Schedule A Tour",
    spark: {
      ...DEFAULT_SPARK_UI,
      showPriceTitle: true,
      showPriceSubtitle: true,
      showFormDisclaimer: true,
      disclaimerText: "Demo disclaimer — I agree Montfort may contact me about this listing.",
      showDisclaimerCheckbox: true,
      disclaimerRequired: false,
      infiniteSlider: true,
      aboutTabTitle: "Property Overview",
      aboutDescriptionTitle: "About this property",
      aboutButtonLabel: "Download floor plan (demo)",
      aboutButtonUrl: "#demo-floor-plan",
      showAboutMap: true,
      showInsightsSection: true,
      insightsTabTitle: "Property Insights",
      showAreaSection: true,
      areaTabTitle: "The Area",
      showMoreDetailsSection: true,
      moreDetailsTabTitle: "More Details",
      showReviewsSection: true,
      reviewsSource: "/success-stories/",
      reviewsLayout: "grid",
      mapZoom: "15",
    },
  };
}

export function buildFactsFromCore(form: ListingEditorForm): ListingFact[] {
  const facts: ListingFact[] = [];
  if (form.price.trim()) facts.push({ label: "Price", value: form.price.trim() });
  if (form.beds.trim()) facts.push({ label: "Bedrooms", value: form.beds.trim() });
  if (form.baths.trim()) facts.push({ label: "Bathrooms", value: form.baths.trim() });
  if (form.sqft.trim()) facts.push({ label: "Square Ft.", value: form.sqft.trim() });
  if (form.year.trim()) facts.push({ label: "Year Built", value: form.year.trim() });
  if (form.stories.trim()) facts.push({ label: "Stories", value: form.stories.trim() });
  if (form.property_type.trim()) facts.push({ label: "Property type", value: form.property_type.trim() });
  if (form.city.trim()) facts.push({ label: "City", value: form.city.trim() });
  if (form.state.trim()) facts.push({ label: "State", value: form.state.trim() });
  if (form.zip.trim()) facts.push({ label: "ZIP", value: form.zip.trim() });
  if (form.neighborhood.trim()) facts.push({ label: "Neighborhood", value: form.neighborhood.trim() });
  if (form.mls.trim()) facts.push({ label: "MLS", value: form.mls.trim() });
  return facts;
}

/** Live canvas model — updates as the Design panel changes. */
export function formToPreviewListing(form: ListingEditorForm): ListingDetail {
  const slug = form.slug.trim() || slugify(form.street || form.title) || "draft-listing";
  const title = form.title.trim() || form.street.trim() || "Untitled listing";
  const heroAlt = form.hero_alt || title;
  let gallery = form.gallery.filter((g) => g.src.trim());
  if (!gallery.length && form.hero_image.trim()) {
    gallery = [{ src: form.hero_image.trim(), alt: heroAlt }];
  }
  const heroImage = form.hero_image.trim() || gallery[0]?.src || "/redesign-assets/hoods/harlem.webp";
  const facts = form.facts.filter((f) => f.label.trim() || f.value.trim()).length
    ? form.facts.filter((f) => f.label.trim() || f.value.trim())
    : buildFactsFromCore(form);

  return {
    slug,
    title,
    status: form.status || "For Sale",
    price: form.price.trim() || "$—",
    priceValue: parsePriceValue(form.price),
    beds: form.beds,
    baths: form.baths,
    year: form.year || undefined,
    sqft: form.sqft || undefined,
    stories: form.stories || undefined,
    propertyType: form.property_type,
    street: form.street || "Address TBD",
    city: form.city || "New York",
    state: form.state || "NY",
    zip: form.zip,
    neighborhood: form.neighborhood,
    heroImage,
    heroAlt,
    gallery: gallery.length ? gallery : [{ src: heroImage, alt: heroAlt }],
    facts,
    overviewParas: form.overview_text
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean),
    insights: form.insights.filter((i) => i.title.trim() || i.body.trim()),
    location: {
      mapQuery: form.map_query || `${form.street}, ${form.city}, ${form.state} ${form.zip}`,
      blurb: form.location_blurb,
      nearby: form.nearby_text
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
    },
    agent: { ...LISTING_AGENT },
    tourHref: form.tour_href || "https://calendly.com/montfort",
    sortOrder: Number(form.sort_order) || 100,
    mls: form.mls || undefined,
    videoTour: form.video_tour || undefined,
    matterportEmbed: form.matterport_embed || undefined,
    moreDetailsParas: form.more_details_text
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean),
    tourButtonLabel: form.tour_button_label || undefined,
    showScheduleButton: form.show_schedule_button,
    priceTitle: form.price_title || undefined,
    priceSubtitle: form.price_subtitle || undefined,
    areaGuideName: form.area_guide_name || undefined,
    areaDescription: form.area_description || undefined,
    spark: mergeSparkUi(form.spark),
    metaTitle: form.meta_title || undefined,
    metaDescription: form.meta_description || undefined,
  };
}

export function formToSavePayload(form: ListingEditorForm) {
  const listing = formToPreviewListing(form);
  return {
    slug: listing.slug,
    title: listing.title,
    status: listing.status,
    price: form.price.trim(),
    price_value: listing.priceValue,
    price_title: form.price_title || null,
    price_subtitle: form.price_subtitle || null,
    beds: form.beds,
    baths: form.baths,
    year: form.year || null,
    sqft: form.sqft || null,
    stories: form.stories || null,
    property_type: form.property_type,
    street: form.street,
    city: form.city,
    state: form.state,
    zip: form.zip,
    neighborhood: form.neighborhood,
    mls: form.mls || null,
    video_tour: form.video_tour || null,
    matterport_embed: form.matterport_embed || null,
    hero_image: listing.heroImage,
    hero_alt: listing.heroAlt,
    gallery: listing.gallery,
    facts: listing.facts,
    overview_paras: listing.overviewParas,
    more_details_paras: listing.moreDetailsParas || [],
    insights: listing.insights,
    location: listing.location,
    area_guide_name: form.area_guide_name || null,
    area_description: form.area_description || null,
    agent: listing.agent,
    tour_href: listing.tourHref,
    tour_button_label: form.tour_button_label || null,
    show_schedule_button: form.show_schedule_button,
    spark: listing.spark,
    sort_order: listing.sortOrder,
    published: form.published,
    meta_title: form.meta_title || null,
    meta_description: form.meta_description || null,
  };
}

export function listingRowToEditorForm(row: {
  slug: string;
  title: string;
  status: string;
  price: string;
  price_title: string | null;
  price_subtitle: string | null;
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
  mls: string | null;
  video_tour: string | null;
  matterport_embed: string | null;
  hero_image: string;
  hero_alt: string;
  gallery: ListingGalleryImage[];
  facts: ListingFact[];
  overview_paras: string[];
  more_details_paras: string[] | null;
  insights: ListingInsight[];
  location: ListingDetail["location"];
  area_guide_name: string | null;
  area_description: string | null;
  tour_href: string;
  tour_button_label: string | null;
  show_schedule_button: boolean;
  spark?: ListingSparkUi | null;
  sort_order: number;
  published: boolean;
  meta_title: string | null;
  meta_description: string | null;
}): ListingEditorForm {
  return {
    ...emptyListingEditorForm(),
    slug: row.slug,
    title: row.title,
    status: row.status || "For Sale",
    price: row.price,
    price_title: row.price_title || "",
    price_subtitle: row.price_subtitle || "",
    beds: row.beds,
    baths: row.baths,
    year: row.year || "",
    sqft: row.sqft || "",
    stories: row.stories || "",
    property_type: row.property_type,
    street: row.street,
    city: row.city,
    state: row.state,
    zip: row.zip,
    neighborhood: row.neighborhood,
    mls: row.mls || "",
    video_tour: row.video_tour || "",
    matterport_embed: row.matterport_embed || "",
    hero_image: row.hero_image,
    hero_alt: row.hero_alt,
    gallery: Array.isArray(row.gallery) ? row.gallery : [],
    facts: Array.isArray(row.facts) ? row.facts : [],
    overview_text: (row.overview_paras || []).join("\n\n"),
    more_details_text: (row.more_details_paras || []).join("\n\n"),
    insights: Array.isArray(row.insights) ? row.insights : [],
    map_query: row.location?.mapQuery || "",
    location_blurb: row.location?.blurb || "",
    nearby_text: (row.location?.nearby || []).join("\n"),
    area_guide_name: row.area_guide_name || "",
    area_description: row.area_description || "",
    tour_href: row.tour_href,
    tour_button_label: row.tour_button_label || loadListingsHubSettings().tourButtonLabel,
    show_schedule_button: row.show_schedule_button !== false,
    spark: mergeSparkUi(row.spark),
    sort_order: String(row.sort_order),
    published: row.published,
    meta_title: row.meta_title || "",
    meta_description: row.meta_description || "",
  };
}
