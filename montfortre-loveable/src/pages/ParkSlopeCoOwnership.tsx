import ParkSlopeCoOwnershipContent from "../components/park-slope-coownership-2/ParkSlopeCoOwnershipContent";
import PageShell from "../layouts/PageShell";
import { PARK_SLOPE_CO_OWNERSHIP_SEO } from "../seo/pages/parkSlopeCoOwnership";

export default function ParkSlopeCoOwnership() {
  return (
    <PageShell seo={PARK_SLOPE_CO_OWNERSHIP_SEO} pageClassName="neighborhoods-page park-slope-co-ownership-page">
      <ParkSlopeCoOwnershipContent />
    </PageShell>
  );
}
