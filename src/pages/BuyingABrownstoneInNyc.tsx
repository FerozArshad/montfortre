import BuyingABrownstoneInNycContent from "../components/buying-a-brownstone-in-nyc/BuyingABrownstoneInNycContent";
import PageShell from "../layouts/PageShell";
import { BUYING_A_BROWNSTONE_SEO } from "../seo/pages/buyingABrownstoneInNyc";

export default function BuyingABrownstoneInNyc() {
  return (
    <PageShell seo={BUYING_A_BROWNSTONE_SEO} pageClassName="two-family-page buying-guides-page">
      <BuyingABrownstoneInNycContent />
    </PageShell>
  );
}
