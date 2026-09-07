import BuyingSroInNycContent from "../components/buying-sro-in-nyc/BuyingSroInNycContent";
import PageShell from "../layouts/PageShell";
import { BUYING_SRO_SEO } from "../seo/pages/buyingSroInNyc";

export default function BuyingSroInNyc() {
  return (
    <PageShell seo={BUYING_SRO_SEO} pageClassName="two-family-page buying-guides-page">
      <BuyingSroInNycContent />
    </PageShell>
  );
}
