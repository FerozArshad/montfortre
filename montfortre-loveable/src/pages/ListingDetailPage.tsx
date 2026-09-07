import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import ListingPageContent from "../components/listing/ListingPageContent";
import type { ListingDetail } from "../data/listings/types";
import { fetchPublishedListingBySlug } from "../lib/cms/listings";
import PageShell from "../layouts/PageShell";
import { buildListingSeo } from "../seo/pages/buildListingSeo";
import { LOADING_SEO } from "../lib/cms/loadingSeo";
import { createMetaEventId, trackMetaListingView } from "../lib/metaPixel";
import { sendMetaCapiEvent } from "../lib/metaCapi";
import { fetchTrackingPublicConfig } from "../lib/trackingPublic";

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

  useEffect(() => {
    if (!listing) return;
    let cancelled = false;

    (async () => {
      const config = await fetchTrackingPublicConfig();
      if (cancelled) return;

      const eventId = createMetaEventId();
      trackMetaListingView({ slug: listing.slug, title: listing.title, eventId });
      if (config.meta.capi_enabled) {
        void sendMetaCapiEvent({
          eventName: "ViewContent",
          eventId,
          eventSourceUrl: window.location.href,
          customData: {
            content_name: listing.title || listing.slug,
            content_category: "listing",
            content_ids: [listing.slug],
          },
        });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [listing]);

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
