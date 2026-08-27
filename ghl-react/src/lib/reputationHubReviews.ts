/**
 * Compatibility shim — reviews now come from Google Places + curated Montfort slides.
 * Prefer importing from `./googlePlacesReviews` for new code.
 */
export {
  CURATED_REVIEWS,
  DEFAULT_AGGREGATE,
  GOOGLE_G_MARK,
  GOOGLE_MAPS_PROFILE_HREF,
  GOOGLE_REVIEWS_FALLBACK_HREF,
  fetchGoogleReviews,
  fetchReputationReviews,
  formatRatingLabel,
  ratingStars,
  type ReputationAggregate,
  type ReputationReview,
} from "./googlePlacesReviews";
