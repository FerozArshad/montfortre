import { Navigate, useLocation } from "react-router-dom";
import ListingPageContent from "../components/listing/ListingPageContent";
import { getListingBySlug } from "../data/listings";
import PageShell from "../layouts/PageShell";
import { buildListingSeo } from "../seo/pages/buildListingSeo";

export default function ListingDetailPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+|\/+$/g, "");
  const listing = getListingBySlug(slug);
  if (!listing) return <Navigate to="/current-listings" replace />;

  return (
    <PageShell seo={buildListingSeo(listing)} pageClassName="listing-page" showReviews={false}>
      <ListingPageContent listing={listing} />
    </PageShell>
  );
}
