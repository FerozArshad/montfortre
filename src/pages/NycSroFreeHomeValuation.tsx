import NycSroFreeHomeValuationContent from "../components/nyc-sro-free-home-valuation/NycSroFreeHomeValuationContent";
import PageShell from "../layouts/PageShell";
import { NYC_SRO_VALUATION_SEO } from "../seo/pages/nycSroFreeHomeValuation";

export default function NycSroFreeHomeValuation() {
  return (
    <PageShell seo={NYC_SRO_VALUATION_SEO} pageClassName="two-family-page buying-guides-page">
      <NycSroFreeHomeValuationContent />
    </PageShell>
  );
}
