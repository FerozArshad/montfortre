import SellingSrosInNycContent from "../components/selling-sros-in-nyc/SellingSrosInNycContent";
import PageShell from "../layouts/PageShell";
import { SELLING_SROS_SEO } from "../seo/pages/sellingSrosInNyc";

export default function SellingSrosInNyc() {
  return (
    <PageShell seo={SELLING_SROS_SEO} pageClassName="two-family-page buying-guides-page">
      <SellingSrosInNycContent />
    </PageShell>
  );
}
