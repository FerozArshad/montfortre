import SellingCondosInNycContent from "../components/selling-condos-in-nyc/SellingCondosInNycContent";
import PageShell from "../layouts/PageShell";
import { SELLING_CONDOS_SEO } from "../seo/pages/sellingCondosInNyc";

export default function SellingCondosInNyc() {
  return (
    <PageShell seo={SELLING_CONDOS_SEO} pageClassName="two-family-page buying-guides-page">
      <SellingCondosInNycContent />
    </PageShell>
  );
}
