import BedfordStuyvesantContent from "../components/bedford-stuyvesant/BedfordStuyvesantContent";
import PageShell from "../layouts/PageShell";
import { BEDFORD_STUYVESANT_SEO } from "../seo/pages/bedfordStuyvesant";

export default function BedfordStuyvesant() {
  return (
    <PageShell seo={BEDFORD_STUYVESANT_SEO} pageClassName="harlem-page bedstuy-page">
      <BedfordStuyvesantContent />
    </PageShell>
  );
}
