import BuyingACondoInNycContent from "../components/buying-a-condo-in-nyc/BuyingACondoInNycContent";
import PageShell from "../layouts/PageShell";
import { BUYING_A_CONDO_SEO } from "../seo/pages/buyingACondoInNyc";

export default function BuyingACondoInNyc() {
  return (
    <PageShell seo={BUYING_A_CONDO_SEO} pageClassName="two-family-page buying-guides-page">
      <BuyingACondoInNycContent />
    </PageShell>
  );
}
