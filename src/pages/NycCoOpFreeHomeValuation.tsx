import NycCoOpFreeHomeValuationContent from "../components/nyc-co-op-free-home-valuation/NycCoOpFreeHomeValuationContent";
import PageShell from "../layouts/PageShell";
import { NYC_CO_OP_VALUATION_SEO } from "../seo/pages/nycCoOpFreeHomeValuation";

export default function NycCoOpFreeHomeValuation() {
  return (
    <PageShell seo={NYC_CO_OP_VALUATION_SEO} pageClassName="two-family-page buying-guides-page">
      <NycCoOpFreeHomeValuationContent />
    </PageShell>
  );
}
