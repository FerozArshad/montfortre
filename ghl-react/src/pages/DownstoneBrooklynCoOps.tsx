import DownstoneBrooklynCoOpsContent from "../components/downstone-brooklyn-co-ops/DownstoneBrooklynCoOpsContent";
import PageShell from "../layouts/PageShell";
import { DOWNSTONE_BROOKLYN_CO_OPS_SEO } from "../seo/pages/downstoneBrooklynCoOps";

export default function DownstoneBrooklynCoOps() {
  return (
    <PageShell seo={DOWNSTONE_BROOKLYN_CO_OPS_SEO} pageClassName="neighborhoods-page downstone-brooklyn-co-ops-page">
      <DownstoneBrooklynCoOpsContent />
    </PageShell>
  );
}
