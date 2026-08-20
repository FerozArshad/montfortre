/** ReputationHub review widget (HighLevel) — location + widget ids for Stan Montfort. */
export const REPUTATION_HUB_WIDGET_URL =
  "https://reputationhub.site/reputation/widgets/review_widget/J3cYmGK3p1ja7wTS63Dn?widgetId=6a8692fdcc2e0449fdf45029";

/** Fallback when a reviewer has no Google Maps contrib URL in the feed. */
export const GOOGLE_REVIEWS_FALLBACK_HREF =
  "https://www.google.com/maps/search/?api=1&query=Stan+Montfort+Real+Estate+8+West+126th+Street+New+York";

export type ReputationReview = {
  id: string;
  href: string;
  name: string;
  quote: string;
  rating: number;
};

type WidgetReview = {
  id: string;
  reviewerName: string;
  starRating: number;
  comment: string;
  reviewerProfileUrl?: string;
};

type WidgetSsrData = {
  reviews?: WidgetReview[];
  aggregateData?: {
    totalReviews?: number;
    totalRating?: number;
  };
};

const SSR_MARKER = "window.__SSR_DATA__ = ";

const SPAM_PATTERNS = [
  /whatsapp/i,
  /remove negative reviews/i,
  /get 5-star reviews/i,
];

function extractJsonObject(source: string, start: number): string | null {
  if (source[start] !== "{") return null;
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = start; i < source.length; i += 1) {
    const ch = source[i];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === '"') {
        inString = false;
      }
      continue;
    }

    if (ch === '"') {
      inString = true;
      continue;
    }
    if (ch === "{") depth += 1;
    if (ch === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, i + 1);
    }
  }

  return null;
}

/** Parse `window.__SSR_DATA__` JSON embedded in the widget HTML response. */
export function parseWidgetSsrData(html: string): WidgetSsrData | null {
  const markerIndex = html.indexOf(SSR_MARKER);
  if (markerIndex === -1) return null;

  const jsonStart = html.indexOf("{", markerIndex + SSR_MARKER.length);
  if (jsonStart === -1) return null;

  const jsonText = extractJsonObject(html, jsonStart);
  if (!jsonText) return null;

  try {
    return JSON.parse(jsonText) as WidgetSsrData;
  } catch {
    return null;
  }
}

function isUsableReview(review: WidgetReview): boolean {
  const quote = review.comment?.trim() ?? "";
  if (review.starRating < 5) return false;
  if (quote.length < 24) return false;
  return !SPAM_PATTERNS.some((pattern) => pattern.test(quote));
}

function truncateQuote(text: string, max = 320): string {
  const trimmed = text.trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, max).trimEnd()}…`;
}

export function mapWidgetReviews(reviews: WidgetReview[] | undefined): ReputationReview[] {
  if (!reviews?.length) return [];
  return reviews.filter(isUsableReview).map((review) => ({
    id: review.id,
    href: review.reviewerProfileUrl?.trim() || GOOGLE_REVIEWS_FALLBACK_HREF,
    name: review.reviewerName.trim(),
    quote: truncateQuote(review.comment),
    rating: review.starRating,
  }));
}

export type ReputationAggregate = {
  rating: number;
  totalReviews: number;
};

export function parseAggregate(data: WidgetSsrData | null): ReputationAggregate {
  const rating = data?.aggregateData?.totalRating ?? 5;
  const totalReviews = data?.aggregateData?.totalReviews ?? 0;
  return {
    rating: Number.isFinite(rating) ? rating : 5,
    totalReviews: Number.isFinite(totalReviews) ? totalReviews : 0,
  };
}

export function formatRatingLabel(rating: number): string {
  return (Number.isFinite(rating) ? rating : 5).toFixed(1);
}

/** Always five filled stars for the Google badge UI (rating number stays dynamic). */
export function ratingStars(_rating?: number): string {
  return "★★★★★";
}

let reviewsCache: Promise<{
  reviews: ReputationReview[];
  aggregate: ReputationAggregate;
}> | null = null;

export async function fetchReputationReviews(): Promise<{
  reviews: ReputationReview[];
  aggregate: ReputationAggregate;
}> {
  if (!reviewsCache) {
    reviewsCache = (async () => {
      const res = await fetch(REPUTATION_HUB_WIDGET_URL, {
        credentials: "omit",
        headers: { Accept: "text/html" },
      });
      if (!res.ok) {
        throw new Error(`ReputationHub widget fetch failed (${res.status})`);
      }
      const html = await res.text();
      const data = parseWidgetSsrData(html);
      if (!data) {
        throw new Error("ReputationHub widget response missing review data");
      }
      return {
        reviews: mapWidgetReviews(data.reviews),
        aggregate: parseAggregate(data),
      };
    })().catch((err) => {
      reviewsCache = null;
      throw err;
    });
  }
  return reviewsCache;
}
