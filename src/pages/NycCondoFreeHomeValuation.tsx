import NycCondoFreeHomeValuationContent from "../components/nyc-condo-free-home-valuation/NycCondoFreeHomeValuationContent";
import PageShell from "../layouts/PageShell";
import { NYC_CONDO_VALUATION_SEO } from "../seo/pages/nycCondoFreeHomeValuation";

export default function NycCondoFreeHomeValuation() {
  return (
    <PageShell seo={NYC_CONDO_VALUATION_SEO} pageClassName="two-family-page buying-guides-page">
      <NycCondoFreeHomeValuationContent />
    </PageShell>
  );
}
