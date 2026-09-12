/** AgentFire Spark Design-panel options stored on each listing. */

export type ListingSparkUi = {
  showPriceTitle: boolean;
  showPriceSubtitle: boolean;
  customMarker: boolean;
  disclaimerText: string;
  showFormDisclaimer: boolean;
  showDisclaimerCheckbox: boolean;
  disclaimerRequired: boolean;
  showGlobalChrome: boolean;
  showMapHeader: boolean;
  headerBgColor: string;
  mapZoom: string;
  infiniteSlider: boolean;
  aboutTabTitle: string;
  aboutDescriptionTitle: string;
  aboutButtonLabel: string;
  aboutButtonUrl: string;
  showAboutMap: boolean;
  showInsightsSection: boolean;
  insightsTabTitle: string;
  showAreaSection: boolean;
  areaTabTitle: string;
  showMoreDetailsSection: boolean;
  moreDetailsTabTitle: string;
  showReviewsSection: boolean;
  reviewsLayout: string;
  reviewsSource: string;
  reviewsPrimaryColor: string;
};

export const DEFAULT_SPARK_UI: ListingSparkUi = {
  showPriceTitle: true,
  showPriceSubtitle: true,
  customMarker: false,
  disclaimerText: "",
  showFormDisclaimer: false,
  showDisclaimerCheckbox: false,
  disclaimerRequired: false,
  showGlobalChrome: true,
  showMapHeader: true,
  headerBgColor: "",
  mapZoom: "14",
  infiniteSlider: true,
  aboutTabTitle: "Property Overview",
  aboutDescriptionTitle: "About this property",
  aboutButtonLabel: "",
  aboutButtonUrl: "",
  showAboutMap: true,
  showInsightsSection: true,
  insightsTabTitle: "Property Insights",
  showAreaSection: true,
  areaTabTitle: "The Area",
  showMoreDetailsSection: true,
  moreDetailsTabTitle: "More Details",
  showReviewsSection: false,
  reviewsLayout: "grid",
  reviewsSource: "",
  reviewsPrimaryColor: "#b8893a",
};

export function mergeSparkUi(partial?: Partial<ListingSparkUi> | null): ListingSparkUi {
  return { ...DEFAULT_SPARK_UI, ...(partial || {}) };
}
