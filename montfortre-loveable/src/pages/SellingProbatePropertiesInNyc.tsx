import SellingProbatePropertiesInNycContent from "../components/selling-probate-properties-in-nyc/SellingProbatePropertiesInNycContent";
import PageShell from "../layouts/PageShell";
import { SELLING_PROBATE_SEO } from "../seo/pages/sellingProbatePropertiesInNyc";

export default function SellingProbatePropertiesInNyc() {
  return (
    <PageShell seo={SELLING_PROBATE_SEO} pageClassName="two-family-page buying-guides-page">
      <SellingProbatePropertiesInNycContent />
    </PageShell>
  );
}
