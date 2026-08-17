import BrooklynHeightsCoOpsContent from "../components/brooklyn-heights-co-ops-3/BrooklynHeightsCoOpsContent";
import PageShell from "../layouts/PageShell";
import { BROOKLYN_HEIGHTS_CO_OPS_SEO } from "../seo/pages/brooklynHeightsCoOps";

export default function BrooklynHeightsCoOps() {
  return (
    <PageShell seo={BROOKLYN_HEIGHTS_CO_OPS_SEO} pageClassName="neighborhoods-page brooklyn-heights-co-ops-page">
      <BrooklynHeightsCoOpsContent />
    </PageShell>
  );
}
