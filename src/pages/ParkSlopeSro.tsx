import ParkSlopeSroContent from "../components/park-slope-sro-2/ParkSlopeSroContent";
import PageShell from "../layouts/PageShell";
import { PARK_SLOPE_SRO_SEO } from "../seo/pages/parkSlopeSro";

export default function ParkSlopeSro() {
  return (
    <PageShell seo={PARK_SLOPE_SRO_SEO} pageClassName="neighborhoods-page park-slope-sro-page">
      <ParkSlopeSroContent />
    </PageShell>
  );
}
