import BedfordStuyvesantCoOpsContent from "../components/bedford-stuyvesant-co-ops-2/BedfordStuyvesantCoOpsContent";
import PageShell from "../layouts/PageShell";
import { BEDFORD_STUYVESANT_CO_OPS_SEO } from "../seo/pages/bedfordStuyvesantCoOps";

export default function BedfordStuyvesantCoOps() {
  return (
    <PageShell seo={BEDFORD_STUYVESANT_CO_OPS_SEO} pageClassName="neighborhoods-page bedford-stuyvesant-co-ops-page">
      <BedfordStuyvesantCoOpsContent />
    </PageShell>
  );
}
