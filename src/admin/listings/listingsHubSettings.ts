const KEY = "montfort.listingsHub.settings";

export type SpecIconId = "bed" | "bath" | "house" | "stairs" | "garage" | "fence" | "custom";

export type HubSpecDefinition = {
  id: string;
  name: string;
  icon: SpecIconId;
};

export type ListingsHubSettings = {
  /** AgentFire Listings Hub Settings */
  primaryColor: string;
  tourButtonLabel: string;
  currency: "USD" | "CAD" | "EUR";
  priceFilterFrom: string;
  priceFilterTo: string;
  propertySpecs: HubSpecDefinition[];
  /** Defaults for Create custom listing */
  defaultTourHref: string;
  defaultCity: string;
  defaultState: string;
  defaultNeighborhood: string;
  defaultPropertyType: string;
  defaultStatus: string;
};

export const DEFAULT_PROPERTY_SPECS: HubSpecDefinition[] = [
  { id: "beds", name: "Bedrooms", icon: "bed" },
  { id: "baths", name: "Bathrooms", icon: "bath" },
  { id: "sqft", name: "Square Ft.", icon: "house" },
  { id: "stories", name: "Stories", icon: "stairs" },
  { id: "garages", name: "Garages", icon: "garage" },
  { id: "acres", name: "Acres", icon: "fence" },
  { id: "dims", name: "Building Dimensions", icon: "custom" },
  { id: "taxes", name: "Real Estate Taxes", icon: "custom" },
  { id: "units", name: "Residential Units", icon: "house" },
  { id: "far", name: "Unused FAR", icon: "custom" },
  { id: "year", name: "Year Built", icon: "custom" },
  { id: "zoning", name: "Zoning", icon: "custom" },
];

export const DEFAULT_LISTINGS_HUB_SETTINGS: ListingsHubSettings = {
  primaryColor: "#1a1a1a",
  tourButtonLabel: "Schedule A Tour",
  currency: "USD",
  priceFilterFrom: "",
  priceFilterTo: "",
  propertySpecs: DEFAULT_PROPERTY_SPECS,
  defaultTourHref: "https://calendly.com/montfort",
  defaultCity: "New York",
  defaultState: "NY",
  defaultNeighborhood: "Harlem",
  defaultPropertyType: "Townhouse",
  defaultStatus: "For Sale",
};

export function loadListingsHubSettings(): ListingsHubSettings {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULT_LISTINGS_HUB_SETTINGS, propertySpecs: [...DEFAULT_PROPERTY_SPECS] };
    const parsed = JSON.parse(raw) as Partial<ListingsHubSettings>;
    return {
      ...DEFAULT_LISTINGS_HUB_SETTINGS,
      ...parsed,
      propertySpecs: Array.isArray(parsed.propertySpecs) && parsed.propertySpecs.length
        ? parsed.propertySpecs
        : [...DEFAULT_PROPERTY_SPECS],
    };
  } catch {
    return { ...DEFAULT_LISTINGS_HUB_SETTINGS, propertySpecs: [...DEFAULT_PROPERTY_SPECS] };
  }
}

export function saveListingsHubSettings(settings: ListingsHubSettings): void {
  localStorage.setItem(KEY, JSON.stringify(settings));
}
