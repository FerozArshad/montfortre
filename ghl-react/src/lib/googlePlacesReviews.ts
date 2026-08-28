/**
 * Google reviews read from Supabase (synced twice a week by a pg_cron job) with
 * curated Montfort fallback slides. The browser never calls Google directly.
 */

import { fetchReviewsFromDb } from "./cms/reviews";

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

/**
 * Curated slides only pad the list up to this count when the database is short;
 * once enough real reviews are stored, every one of them is returned uncapped so
 * the success-stories page can show the full set.
 */
const MIN_SLIDES = 6;

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

/**
 * Google returns straight apostrophes while the curated copy uses curly ones,
 * so "Ma'at" and "Ma’at" must collapse to the same key or the reviewer is
 * rendered twice.
 */
function reviewerKey(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/\s+/g, " ");
}

function mergeWithCurated(live: ReputationReview[]): ReputationReview[] {
  if (live.length >= MIN_SLIDES) return live;

  const out = [...live];
  const seen = new Set(out.map((r) => reviewerKey(r.name)));
  for (const curated of CURATED_REVIEWS) {
    if (out.length >= MIN_SLIDES) break;
    const key = reviewerKey(curated.name);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(curated);
  }
  return out;
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
      const curatedOnly = {
        reviews: CURATED_REVIEWS.slice(0, MIN_SLIDES),
        aggregate: DEFAULT_AGGREGATE,
      };

      try {
        const stored = await fetchReviewsFromDb();
        if (!stored) return curatedOnly;

        const live = stored.reviews.map((review) => ({
          ...review,
          href: review.href || GOOGLE_REVIEWS_FALLBACK_HREF,
          quote: truncateQuote(review.quote),
        }));

        return {
          reviews: mergeWithCurated(live),
          aggregate: {
            rating: stored.aggregate.rating > 0 ? stored.aggregate.rating : DEFAULT_AGGREGATE.rating,
            totalReviews:
              stored.aggregate.totalReviews > 0
                ? stored.aggregate.totalReviews
                : DEFAULT_AGGREGATE.totalReviews,
          },
        };
      } catch (err) {
        console.warn("[reviews] Stored reviews fetch failed — using curated slides.", err);
        return curatedOnly;
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
