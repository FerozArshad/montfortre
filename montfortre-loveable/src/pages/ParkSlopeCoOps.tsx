import ParkSlopeCoOpsContent from "../components/park-slope-coops/ParkSlopeCoOpsContent";
import PageShell from "../layouts/PageShell";
import { PARK_SLOPE_CO_OPS_SEO } from "../seo/pages/parkSlopeCoOps";

export default function ParkSlopeCoOps() {
  return (
    <PageShell seo={PARK_SLOPE_CO_OPS_SEO} pageClassName="neighborhoods-page park-slope-co-ops-page">
      <ParkSlopeCoOpsContent />
    </PageShell>
  );
}
