import HarlemCoOpsContent from "../components/harlem-co-ops/HarlemCoOpsContent";
import PageShell from "../layouts/PageShell";
import { HARLEM_CO_OPS_SEO } from "../seo/pages/harlemCoOps";

export default function HarlemCoOps() {
  return (
    <PageShell seo={HARLEM_CO_OPS_SEO} pageClassName="neighborhoods-page harlem-co-ops-page">
      <HarlemCoOpsContent />
    </PageShell>
  );
}
