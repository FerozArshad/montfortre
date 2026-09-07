import BedfordStuyvesantSrosContent from "../components/bedford-stuyvesant-sros-2/BedfordStuyvesantSrosContent";
import PageShell from "../layouts/PageShell";
import { BEDFORD_STUYVESANT_SROS_SEO } from "../seo/pages/bedfordStuyvesantSros";

export default function BedfordStuyvesantSros() {
  return (
    <PageShell seo={BEDFORD_STUYVESANT_SROS_SEO} pageClassName="neighborhoods-page bedford-stuyvesant-sros-page">
      <BedfordStuyvesantSrosContent />
    </PageShell>
  );
}
