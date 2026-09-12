import HomeValuationContent from "../components/home-valuation/HomeValuationContent";
import PageShell from "../layouts/PageShell";
import { HOME_VALUATION_SEO } from "../seo/pages/homeValuation";

export default function HomeValuation() {
  return (
    <PageShell seo={HOME_VALUATION_SEO} pageClassName="two-family-page home-valuation-page">
      <HomeValuationContent />
    </PageShell>
  );
}
