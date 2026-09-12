/** Saved OLR searches for neighborhood hub (Realtor) main pages — brownstone/townhouse when available. */
export type NeighborhoodMainIdx = {
  market: string;
  propertyType: string;
  label: string;
  idxUrl: string;
};

export const NEIGHBORHOOD_MAIN_IDX = {
  harlem: {
    market: "Harlem",
    propertyType: "Brownstone",
    label: "Harlem brownstones",
    idxUrl: "https://stanley.olridx.com/Search/Sales?idr=False#115357",
  },
  "upper-west-side": {
    market: "Upper West Side",
    propertyType: "Townhouse",
    label: "Upper West Side townhouses",
    idxUrl: "https://stanley.olridx.com/Search/Sales?idr=False#115376",
  },
  "upper-east-side": {
    market: "Upper East Side",
    propertyType: "Townhouse",
    label: "Upper East Side townhouses",
    idxUrl: "https://stanley.olridx.com/Search/Sales?idr=False#115380",
  },
  chelsea: {
    market: "Chelsea",
    propertyType: "Townhouse",
    label: "Chelsea townhouses",
    idxUrl: "https://stanley.olridx.com/Search/Sales?idr=False#115381",
  },
  "brooklyn-heights": {
    market: "Brooklyn Heights",
    propertyType: "Townhouse",
    label: "Brooklyn Heights townhouses",
    idxUrl: "https://stanley.olridx.com/Search/Sales?idr=False#115388",
  },
  williamsburg: {
    market: "Williamsburg",
    propertyType: "Brownstone",
    label: "Williamsburg brownstones",
    idxUrl: "https://stanley.olridx.com/Search/Sales?idr=False#115393",
  },
  "bedford-stuyvesant": {
    market: "Bedford-Stuyvesant",
    propertyType: "Brownstone",
    label: "Bedford-Stuyvesant brownstones",
    idxUrl: "https://stanley.olridx.com/Search/Sales?idr=False#115389",
  },
  "crown-heights": {
    market: "Crown Heights",
    propertyType: "Brownstone",
    label: "Crown Heights brownstones",
    idxUrl: "https://stanley.olridx.com/Search/Sales?idr=False#115397",
  },
  "park-slope": {
    market: "Park Slope",
    propertyType: "Brownstone",
    label: "Park Slope brownstones",
    idxUrl: "https://stanley.olridx.com/Search/Sales?idr=False#115398",
  },
  /** No brownstone/townhouse saved search — condo feed */
  dumbo: {
    market: "DUMBO",
    propertyType: "Condo",
    label: "DUMBO condos",
    idxUrl: "https://stanley.olridx.com/Search/Sales?idr=False#115385",
  },
  /** No brownstone/townhouse saved search — condo feed */
  "downtown-brooklyn": {
    market: "Downtown Brooklyn",
    propertyType: "Condo",
    label: "Downtown Brooklyn condos",
    idxUrl: "https://stanley.olridx.com/Search/Sales?idr=False#94747",
  },
} as const satisfies Record<string, NeighborhoodMainIdx>;
