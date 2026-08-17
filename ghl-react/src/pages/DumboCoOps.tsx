import DumboCoOpsContent from "../components/dumbo-co-ops-2/DumboCoOpsContent";
import PageShell from "../layouts/PageShell";
import { DUMBO_CO_OPS_SEO } from "../seo/pages/dumboCoOps";

export default function DumboCoOps() {
  return (
    <PageShell seo={DUMBO_CO_OPS_SEO} pageClassName="neighborhoods-page dumbo-co-ops-page">
      <DumboCoOpsContent />
    </PageShell>
  );
}
