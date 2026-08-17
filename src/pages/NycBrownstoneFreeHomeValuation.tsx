import NycBrownstoneFreeHomeValuationContent from "../components/nyc-brownstone-free-home-valuation/NycBrownstoneFreeHomeValuationContent";
import PageShell from "../layouts/PageShell";
import { NYC_BROWNSTONE_VALUATION_SEO } from "../seo/pages/nycBrownstoneFreeHomeValuation";

export default function NycBrownstoneFreeHomeValuation() {
  return (
    <PageShell seo={NYC_BROWNSTONE_VALUATION_SEO} pageClassName="two-family-page buying-guides-page">
      <NycBrownstoneFreeHomeValuationContent />
    </PageShell>
  );
}
