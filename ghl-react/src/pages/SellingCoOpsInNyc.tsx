import SellingCoOpsInNycContent from "../components/selling-co-ops-in-nyc/SellingCoOpsInNycContent";
import PageShell from "../layouts/PageShell";
import { SELLING_CO_OPS_SEO } from "../seo/pages/sellingCoOpsInNyc";

export default function SellingCoOpsInNyc() {
  return (
    <PageShell seo={SELLING_CO_OPS_SEO} pageClassName="two-family-page buying-guides-page">
      <SellingCoOpsInNycContent />
    </PageShell>
  );
}
