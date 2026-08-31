import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import ListingPageContent from "../components/listing/ListingPageContent";
import type { ListingDetail } from "../data/listings/types";
import { fetchPublishedListingBySlug } from "../lib/cms/listings";
import PageShell from "../layouts/PageShell";
import { buildListingSeo } from "../seo/pages/buildListingSeo";
import { LOADING_SEO } from "../lib/cms/loadingSeo";

export default function ListingDetailPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+|\/+$/g, "");
  const [listing, setListing] = useState<ListingDetail | null | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const row = await fetchPublishedListingBySlug(slug);
      if (!cancelled) setListing(row);
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (listing === undefined) {
    return (
      <PageShell seo={LOADING_SEO} pageClassName="listing-page">
        <p style={{ padding: "4rem 1.5rem", textAlign: "center" }}>Loading listing…</p>
      </PageShell>
    );
  }

  if (!listing) return <Navigate to="/current-listings" replace />;

  return (
    <PageShell seo={buildListingSeo(listing)} pageClassName="listing-page">
      <ListingPageContent listing={listing} />
    </PageShell>
  );
}
