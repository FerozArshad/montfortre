import UpperWestSideCoOpsContent from "../components/upper-west-side-co-ops-2/UpperWestSideCoOpsContent";
import PageShell from "../layouts/PageShell";
import { UPPER_WEST_SIDE_CO_OPS_SEO } from "../seo/pages/upperWestSideCoOps";

export default function UpperWestSideCoOps() {
  return (
    <PageShell seo={UPPER_WEST_SIDE_CO_OPS_SEO} pageClassName="neighborhoods-page uws-co-ops-page">
      <UpperWestSideCoOpsContent />
    </PageShell>
  );
}
