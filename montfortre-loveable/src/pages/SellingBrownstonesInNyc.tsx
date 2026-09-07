import SellingBrownstonesInNycContent from "../components/selling-brownstones-in-nyc/SellingBrownstonesInNycContent";
import PageShell from "../layouts/PageShell";
import { SELLING_BROWNSTONES_SEO } from "../seo/pages/sellingBrownstonesInNyc";

export default function SellingBrownstonesInNyc() {
  return (
    <PageShell seo={SELLING_BROWNSTONES_SEO} pageClassName="two-family-page buying-guides-page">
      <SellingBrownstonesInNycContent />
    </PageShell>
  );
}
