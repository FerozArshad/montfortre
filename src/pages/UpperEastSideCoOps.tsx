import UpperEastSideCoOpsContent from "../components/upper-east-side-co-ops/UpperEastSideCoOpsContent";
import PageShell from "../layouts/PageShell";
import { UPPER_EAST_SIDE_CO_OPS_SEO } from "../seo/pages/upperEastSideCoOps";

export default function UpperEastSideCoOps() {
  return (
    <PageShell seo={UPPER_EAST_SIDE_CO_OPS_SEO} pageClassName="neighborhoods-page ues-co-ops-page">
      <UpperEastSideCoOpsContent />
    </PageShell>
  );
}
