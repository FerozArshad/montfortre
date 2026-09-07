import CurrentListingsContent from "../components/listings/CurrentListingsContent";
import PageShell from "../layouts/PageShell";
import { CURRENT_LISTINGS_SEO } from "../seo/pages/currentListings";

export default function CurrentListings() {
  return (
    <PageShell seo={CURRENT_LISTINGS_SEO} pageClassName="current-listings-page">
      <CurrentListingsContent />
    </PageShell>
  );
}
