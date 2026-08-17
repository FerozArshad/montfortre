import ParkSlopeBrownstoneContent from "../components/park-slope-brownstone-2/ParkSlopeBrownstoneContent";
import PageShell from "../layouts/PageShell";
import { PARK_SLOPE_BROWNSTONE_SEO } from "../seo/pages/parkSlopeBrownstone";

export default function ParkSlopeBrownstone() {
  return (
    <PageShell seo={PARK_SLOPE_BROWNSTONE_SEO} pageClassName="neighborhoods-page park-slope-brownstone-page">
      <ParkSlopeBrownstoneContent />
    </PageShell>
  );
}
