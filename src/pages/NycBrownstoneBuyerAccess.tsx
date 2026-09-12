import NycBrownstoneBuyerAccessContent from "../components/nyc-brownstone-buyer-access/NycBrownstoneBuyerAccessContent";
import PageShell from "../layouts/PageShell";
import { NYC_BROWNSTONE_BUYER_ACCESS_SEO } from "../seo/pages/nycBrownstoneBuyerAccess";

export default function NycBrownstoneBuyerAccess() {
  return (
    <PageShell seo={NYC_BROWNSTONE_BUYER_ACCESS_SEO} pageClassName="nyc-buyer-access-page">
      <NycBrownstoneBuyerAccessContent />
    </PageShell>
  );
}
