import CrownHeightsCoOpsContent from "../components/crown-heights-co-ops-2/CrownHeightsCoOpsContent";
import PageShell from "../layouts/PageShell";
import { CROWN_HEIGHTS_CO_OPS_SEO } from "../seo/pages/crownHeightsCoOps";

export default function CrownHeightsCoOps() {
  return (
    <PageShell seo={CROWN_HEIGHTS_CO_OPS_SEO} pageClassName="neighborhoods-page crown-heights-co-ops-page">
      <CrownHeightsCoOpsContent />
    </PageShell>
  );
}
