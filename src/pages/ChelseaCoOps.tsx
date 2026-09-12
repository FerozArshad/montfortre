import ChelseaCoOpsContent from "../components/chelsea-co-ops-2/ChelseaCoOpsContent";
import PageShell from "../layouts/PageShell";
import { CHELSEA_CO_OPS_SEO } from "../seo/pages/chelseaCoOps";

export default function ChelseaCoOps() {
  return (
    <PageShell seo={CHELSEA_CO_OPS_SEO} pageClassName="neighborhoods-page chelsea-co-ops-page">
      <ChelseaCoOpsContent />
    </PageShell>
  );
}
