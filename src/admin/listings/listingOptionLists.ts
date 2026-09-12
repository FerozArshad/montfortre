const KEY = "montfort.listingsHub.optionLists";

export const DEFAULT_LISTING_NEIGHBORHOODS = [
  "Harlem",
  "Upper West Side",
  "Upper East Side",
  "Chelsea",
  "Bedford-Stuyvesant",
  "Crown Heights",
  "Park Slope",
  "Brooklyn Heights",
  "Williamsburg",
  "Dumbo",
  "Downtown Brooklyn",
] as const;

export const DEFAULT_PROPERTY_TYPES = [
  "Townhouse",
  "Brownstone",
  "Condo",
  "Co-op",
  "Multi-Family",
  "SRO",
  "Mixed Use",
] as const;

type ListingOptionLists = {
  neighborhoods: string[];
  propertyTypes: string[];
};

function readLists(): ListingOptionLists {
  if (typeof window === "undefined") {
    return { neighborhoods: [], propertyTypes: [] };
  }
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { neighborhoods: [], propertyTypes: [] };
    const parsed = JSON.parse(raw) as Partial<ListingOptionLists>;
    return {
      neighborhoods: Array.isArray(parsed.neighborhoods) ? parsed.neighborhoods.filter(Boolean) : [],
      propertyTypes: Array.isArray(parsed.propertyTypes) ? parsed.propertyTypes.filter(Boolean) : [],
    };
  } catch {
    return { neighborhoods: [], propertyTypes: [] };
  }
}

function writeLists(lists: ListingOptionLists) {
  localStorage.setItem(KEY, JSON.stringify(lists));
}

export function loadListingOptionLists(): ListingOptionLists {
  return readLists();
}

export function addCustomNeighborhood(name: string): void {
  const trimmed = name.trim();
  if (!trimmed) return;
  const lists = readLists();
  if (!lists.neighborhoods.includes(trimmed)) {
    lists.neighborhoods.push(trimmed);
    writeLists(lists);
  }
}

export function addCustomPropertyType(name: string): void {
  const trimmed = name.trim();
  if (!trimmed) return;
  const lists = readLists();
  if (!lists.propertyTypes.includes(trimmed)) {
    lists.propertyTypes.push(trimmed);
    writeLists(lists);
  }
}

export function allNeighborhoodOptions(extra: string[] = []): string[] {
  const lists = readLists();
  return [...new Set([...DEFAULT_LISTING_NEIGHBORHOODS, ...lists.neighborhoods, ...extra])].sort((a, b) =>
    a.localeCompare(b),
  );
}
