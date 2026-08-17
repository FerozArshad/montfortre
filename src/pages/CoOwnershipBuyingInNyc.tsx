import CoOwnershipBuyingInNycContent from "../components/co-ownership-buying-in-nyc/CoOwnershipBuyingInNycContent";
import PageShell from "../layouts/PageShell";
import { CO_OWNERSHIP_BUYING_SEO } from "../seo/pages/coOwnershipBuyingInNyc";

export default function CoOwnershipBuyingInNyc() {
  return (
    <PageShell seo={CO_OWNERSHIP_BUYING_SEO} pageClassName="two-family-page buying-guides-page">
      <CoOwnershipBuyingInNycContent />
    </PageShell>
  );
}
