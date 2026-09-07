import WilliamsburgCoOpsContent from "../components/williamsburg-co-ops/WilliamsburgCoOpsContent";
import PageShell from "../layouts/PageShell";
import { WILLIAMSBURG_CO_OPS_SEO } from "../seo/pages/williamsburgCoOps";

export default function WilliamsburgCoOps() {
  return (
    <PageShell seo={WILLIAMSBURG_CO_OPS_SEO} pageClassName="neighborhoods-page williamsburg-co-ops-page">
      <WilliamsburgCoOpsContent />
    </PageShell>
  );
}
