/** Live Google reviews via Maps JS Places Details + curated Montfort fallback slides. */

export const GOOGLE_REVIEWS_FALLBACK_HREF =
  "https://www.google.com/maps/search/?api=1&query=Stan+Montfort+Real+Estate+8+West+126th+Street+New+York";

export const GOOGLE_MAPS_PROFILE_HREF = "https://maps.google.com/?cid=11378470238102062088";

export const GOOGLE_G_MARK =
  "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png";

export type ReputationReview = {
  id: string;
  href: string;
  name: string;
  quote: string;
  rating: number;
  photo?: string;
};

export type ReputationAggregate = {
  rating: number;
  totalReviews: number;
};

const TARGET_SLIDES = 6;

/** Original Montfort carousel slides (pre–ReputationHub iframe). */
export const CURATED_REVIEWS: ReputationReview[] = [
  {
    id: "curated-anika",
    href: "https://www.google.com/maps/contrib/107286042219082422872/reviews?hl=en",
    photo:
      "https://lh3.googleusercontent.com/a-/ALV-UjViSqMG3KN7oLq8R0QnIw-DaXDyjT90luYGecAIkSmU_hO3gSPc=s120-c-rp-mo",
    name: "Anika Nfr-Ka Ma’at Daniels",
    quote:
      "Stan is extremely knowledgeable and professional. He also has the utmost patience! He helped me sell my home and purchase a condo at the same time. My home had all types of special contingencies but he was able to find me a buyer and get me very close to the price I wanted. I was very specific in terms of the property that I wanted to buy and although it took some time, he was able to find me the…",
    rating: 5,
  },
  {
    id: "curated-davon",
    href: "https://www.google.com/maps/contrib/108132066685824850224/reviews?hl=en",
    photo:
      "https://lh3.googleusercontent.com/a-/ALV-UjW2GJgbKFCs8CWRPaU68LmyIpJoffj2f9xx_ErBW95J1KmjMk0q=s120-c-rp-mo",
    name: "Davon Snipes",
    quote:
      "Stan has been an incredibly patient, knowledge, and professional broker. He understands the market, and has many relationships in the industry. He was thoughtful and gracious about responding to our feedback, and left no stone unturned in helping us to find the property of our dreams. And he continues to provide guidance and counsel post-closing. If you're looking for a brilliant real estate…",
    rating: 5,
  },
  {
    id: "curated-perry",
    href: "https://www.google.com/maps/contrib/116771421068638089471/reviews?hl=en",
    photo: "https://lh3.googleusercontent.com/a/ACg8ocJF8BS2Xi87Fcaj122YKs-p4jY3uuigUkyo_LFIR4JEbnbvbg=s120-c-rp-mo",
    name: "Perry Witmer",
    quote:
      "Stanley is amazing! No one knows the Harlem market better than him, and his deep expertise was a tremendous resource. He taught me along the way how to spot 'red flags' and talked me out of making an offer on a place that seemed amazing but had, upon his close inspection, evidence of poor workmanship and lots of cut corners. Other brokers remarked in private to me about both his expertise and his…",
    rating: 5,
  },
  {
    id: "curated-corey",
    href: "https://www.google.com/maps/contrib/109328620676722096746/reviews?hl=en",
    photo:
      "https://lh3.googleusercontent.com/a/ACg8ocJ_u11llTjoHDxUSwbwBOVjPqAEEYxXctnGw2ipJT0OmPkN0KAd=s120-c-rp-mo-ba12",
    name: "Corey A. Witmer",
    quote:
      "Stanley was the dream real estate agent we didn’t know we deserved! From the beginning he was attentive to our curiosity to help us figure out what type of property we wanted - and could afford. Throughout the process he was a calm and patient presence in our lives, offering us sincere and sage perspectives to keep us grounded while managing our expectations. Even with the ups and downs -…",
    rating: 5,
  },
  {
    id: "curated-seth",
    href: "https://www.google.com/maps/contrib/100922205373403327263/reviews?hl=en",
    photo:
      "https://lh3.googleusercontent.com/a-/ALV-UjVd25nW1zHtfxUwKZuHN2Z62I2M2518k9vbRgSFDL7raRgZLhc=s120-c-rp-mo",
    name: "Seth Rabinowitz",
    quote:
      "We had a great experience working with Stanley. He taught us a lot about the specific market we were looking in, which enabled us to make a very good decision on purchase of a new home.",
    rating: 5,
  },
  {
    id: "curated-angelina",
    href: "https://www.google.com/maps/contrib/101694945511048714275/reviews?hl=en",
    photo:
      "https://lh3.googleusercontent.com/a-/ALV-UjX0xFjJe65Or_gH4pidKtMzlHLnwtjHpiu1DGAeEo9WZQTVlvKdzg=s120-c-rp-mo-ba12",
    name: "Angelina Darrisaw",
    quote:
      "Incredible experience. Very knowledgeable about the brownstone buying process and helped me understand the budget differences for condo vs brownstones. Walked away more informed as a result.",
    rating: 5,
  },
];

export const DEFAULT_AGGREGATE: ReputationAggregate = { rating: 5, totalReviews: 57 };

function clean(v: string | undefined): string | undefined {
  if (!v) return undefined;
  const t = v.replace(/^["']|["']$/g, "").trim();
  return t || undefined;
}

function readMapsKey(): string | undefined {
  return clean(import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined);
}

function readPlaceId(): string | undefined {
  return clean(import.meta.env.VITE_GOOGLE_PLACE_ID as string | undefined);
}

export function formatRatingLabel(rating: number): string {
  return (Number.isFinite(rating) ? rating : 5).toFixed(1);
}

/** Always five filled stars for the Google badge UI (rating number stays dynamic). */
export function ratingStars(_rating?: number): string {
  return "★★★★★";
}

function truncateQuote(text: string, max = 320): string {
  const trimmed = text.trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, max).trimEnd()}…`;
}

function mergeWithCurated(live: ReputationReview[]): ReputationReview[] {
  const out = [...live];
  const seen = new Set(out.map((r) => r.name.trim().toLowerCase()));
  for (const curated of CURATED_REVIEWS) {
    if (out.length >= TARGET_SLIDES) break;
    const key = curated.name.trim().toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(curated);
  }
  return out.slice(0, TARGET_SLIDES);
}

type PlacesReview = {
  author_name?: string;
  author_url?: string;
  profile_photo_url?: string;
  rating?: number;
  text?: string;
};

type PlacesResult = {
  rating?: number;
  user_ratings_total?: number;
  url?: string;
  reviews?: PlacesReview[];
};

type PlacesServiceStatus = string;

type PlacesServiceLike = {
  getDetails: (
    request: { placeId: string; fields: string[] },
    callback: (result: PlacesResult | null, status: PlacesServiceStatus) => void,
  ) => void;
};

type GoogleMapsPlaces = {
  PlacesService: new (attrContainer: HTMLDivElement) => PlacesServiceLike;
  PlacesServiceStatus: { OK: string };
};

type PlaceNewLike = {
  fetchFields: (opts: { fields: string[] }) => Promise<void>;
  rating?: number;
  userRatingCount?: number;
  googleMapsURI?: string;
  reviews?: Array<{
    rating?: number;
    text?: string | { text?: string };
    authorAttribution?: { displayName?: string; uri?: string; photoURI?: string };
  }>;
};

type PlacesLibraryNew = {
  Place: new (opts: { id: string }) => PlaceNewLike;
};

declare global {
  interface Window {
    google?: {
      maps?: {
        places?: GoogleMapsPlaces;
        importLibrary?: (name: string) => Promise<unknown>;
      };
    };
  }
}

let mapsScriptPromise: Promise<GoogleMapsPlaces> | null = null;

function loadMapsPlacesLibrary(apiKey: string): Promise<GoogleMapsPlaces> {
  if (window.google?.maps?.places) {
    return Promise.resolve(window.google.maps.places);
  }
  if (mapsScriptPromise) return mapsScriptPromise;

  mapsScriptPromise = new Promise((resolve, reject) => {
    const timeout = window.setTimeout(() => {
      mapsScriptPromise = null;
      reject(new Error("Google Maps script load timed out"));
    }, 10000);

    const finishOk = () => {
      window.clearTimeout(timeout);
      const places = window.google?.maps?.places;
      if (places) resolve(places);
      else {
        mapsScriptPromise = null;
        reject(new Error("Google Maps Places library missing after load"));
      }
    };

    const existing = document.getElementById("google-maps-places-js");
    if (existing) {
      existing.addEventListener("load", finishOk);
      existing.addEventListener("error", () => {
        window.clearTimeout(timeout);
        mapsScriptPromise = null;
        reject(new Error("Google Maps script failed"));
      });
      // Already in DOM — may already be ready
      if (window.google?.maps?.places) finishOk();
      return;
    }

    const script = document.createElement("script");
    script.id = "google-maps-places-js";
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&v=weekly&loading=async`;
    script.onload = finishOk;
    script.onerror = () => {
      window.clearTimeout(timeout);
      mapsScriptPromise = null;
      reject(new Error("Google Maps script failed to load"));
    };
    document.head.appendChild(script);
  });

  return mapsScriptPromise;
}

function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const t = window.setTimeout(() => reject(new Error(`${label} timed out`)), ms);
    promise.then(
      (v) => {
        window.clearTimeout(t);
        resolve(v);
      },
      (err) => {
        window.clearTimeout(t);
        reject(err);
      },
    );
  });
}

function mapNewPlaceReviews(place: PlaceNewLike): PlacesResult {
  return {
    rating: place.rating,
    user_ratings_total: place.userRatingCount,
    url: place.googleMapsURI,
    reviews: (place.reviews || []).map((r) => ({
      author_name: r.authorAttribution?.displayName,
      author_url: r.authorAttribution?.uri,
      profile_photo_url: r.authorAttribution?.photoURI,
      rating: r.rating,
      text: typeof r.text === "string" ? r.text : r.text?.text,
    })),
  };
}

/** Places API (New) — preferred when "Places API (New)" is enabled in Cloud. */
async function fetchPlaceDetailsNew(placeId: string): Promise<PlacesResult> {
  const importLibrary = window.google?.maps?.importLibrary;
  if (!importLibrary) throw new Error("Maps importLibrary unavailable");

  const lib = (await importLibrary("places")) as PlacesLibraryNew;
  if (!lib?.Place) throw new Error("Places Place class missing");

  const place = new lib.Place({ id: placeId });
  await withTimeout(
    place.fetchFields({
      fields: ["rating", "userRatingCount", "reviews", "googleMapsURI"],
    }),
    10000,
    "Place.fetchFields",
  );
  return mapNewPlaceReviews(place);
}

/** Legacy PlacesService.getDetails — needs Places API (legacy) enabled. */
function fetchPlaceDetailsLegacy(places: GoogleMapsPlaces, placeId: string): Promise<PlacesResult> {
  return new Promise<PlacesResult>((resolve, reject) => {
    const timeout = window.setTimeout(() => {
      reject(new Error("Places getDetails timed out"));
    }, 8000);

    try {
      const attr = document.createElement("div");
      attr.setAttribute("aria-hidden", "true");
      attr.style.cssText = "width:1px;height:1px;overflow:hidden;position:absolute;left:-9999px;";
      document.body.appendChild(attr);
      const cleanup = () => {
        try {
          attr.remove();
        } catch {
          /* ignore */
        }
      };

      const svc = new places.PlacesService(attr);
      svc.getDetails(
        {
          placeId,
          fields: ["rating", "user_ratings_total", "reviews", "url"],
        },
        (result, status) => {
          window.clearTimeout(timeout);
          cleanup();
          if (status !== places.PlacesServiceStatus.OK || !result) {
            reject(new Error(`Places getDetails failed (${status})`));
            return;
          }
          resolve(result);
        },
      );
    } catch (err) {
      window.clearTimeout(timeout);
      reject(err instanceof Error ? err : new Error("Places getDetails threw"));
    }
  });
}

async function fetchPlaceDetails(apiKey: string, placeId: string): Promise<PlacesResult> {
  const places = await loadMapsPlacesLibrary(apiKey);

  try {
    return await fetchPlaceDetailsNew(placeId);
  } catch (newErr) {
    console.warn("[reviews] Places API (New) failed — trying legacy getDetails.", newErr);
    return fetchPlaceDetailsLegacy(places, placeId);
  }
}

function mapPlacesReviews(result: PlacesResult): ReputationReview[] {
  const reviews = result.reviews ?? [];
  return reviews
    .filter((r) => (r.rating ?? 0) >= 5 && (r.text?.trim().length ?? 0) >= 24)
    .map((r, i) => ({
      id: `places-${i}-${(r.author_name || "reviewer").replace(/\s+/g, "-").toLowerCase()}`,
      href: r.author_url?.trim() || result.url || GOOGLE_REVIEWS_FALLBACK_HREF,
      name: (r.author_name || "Google reviewer").trim(),
      quote: truncateQuote(r.text || ""),
      rating: r.rating ?? 5,
      photo: r.profile_photo_url?.trim() || undefined,
    }));
}

let reviewsCache: Promise<{
  reviews: ReputationReview[];
  aggregate: ReputationAggregate;
}> | null = null;

export async function fetchGoogleReviews(): Promise<{
  reviews: ReputationReview[];
  aggregate: ReputationAggregate;
}> {
  if (!reviewsCache) {
    reviewsCache = (async () => {
      const key = readMapsKey();
      const placeId = readPlaceId();

      if (!key || !placeId) {
        console.info("[reviews] Missing VITE_GOOGLE_MAPS_API_KEY or VITE_GOOGLE_PLACE_ID — using curated slides.");
        return {
          reviews: CURATED_REVIEWS.slice(0, TARGET_SLIDES),
          aggregate: DEFAULT_AGGREGATE,
        };
      }

      try {
        const result = await fetchPlaceDetails(key, placeId);
        const live = mapPlacesReviews(result);
        const rating =
          typeof result.rating === "number" && result.rating > 0
            ? result.rating
            : DEFAULT_AGGREGATE.rating;
        const totalReviews =
          typeof result.user_ratings_total === "number" && result.user_ratings_total > 0
            ? result.user_ratings_total
            : DEFAULT_AGGREGATE.totalReviews;

        return {
          reviews: mergeWithCurated(live),
          aggregate: { rating, totalReviews },
        };
      } catch (err) {
        console.warn("[reviews] Places fetch failed — using curated slides.", err);
        return {
          reviews: CURATED_REVIEWS.slice(0, TARGET_SLIDES),
          aggregate: DEFAULT_AGGREGATE,
        };
      }
    })().catch((err) => {
      reviewsCache = null;
      throw err;
    });
  }
  return reviewsCache;
}

/** @deprecated Use fetchGoogleReviews — kept for older import sites. */
export const fetchReputationReviews = fetchGoogleReviews;
