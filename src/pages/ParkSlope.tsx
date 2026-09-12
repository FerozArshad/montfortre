import ParkSlopeContent from "../components/park-slope/ParkSlopeContent";
import PageShell from "../layouts/PageShell";
import { PARK_SLOPE_SEO } from "../seo/pages/parkSlope";

export default function ParkSlope() {
  return (
    <PageShell seo={PARK_SLOPE_SEO} pageClassName="harlem-page park-slope-page">
      <ParkSlopeContent />
    </PageShell>
  );
}
