import ParkSlopeCondoContent from "../components/park-slope-condo-2/ParkSlopeCondoContent";
import PageShell from "../layouts/PageShell";
import { PARK_SLOPE_CONDO_SEO } from "../seo/pages/parkSlopeCondo";

export default function ParkSlopeCondo() {
  return (
    <PageShell seo={PARK_SLOPE_CONDO_SEO} pageClassName="neighborhoods-page park-slope-condo-page">
      <ParkSlopeCondoContent />
    </PageShell>
  );
}
