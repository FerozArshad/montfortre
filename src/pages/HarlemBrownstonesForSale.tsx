import HarlemBrownstonesForSaleContent from "../components/harlem-brownstones-for-sale/HarlemBrownstonesForSaleContent";
import PageShell from "../layouts/PageShell";
import { HARLEM_BROWNSTONES_FOR_SALE_SEO } from "../seo/pages/harlemBrownstonesForSale";

export default function HarlemBrownstonesForSale() {
  return (
    <PageShell
      seo={HARLEM_BROWNSTONES_FOR_SALE_SEO}
      pageClassName="hbfs-page"
    >
      <HarlemBrownstonesForSaleContent />
    </PageShell>
  );
}
