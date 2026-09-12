import BedfordStuyvesantCondosContent from "../components/bedford-stuyvesant-condos-2/BedfordStuyvesantCondosContent";
import PageShell from "../layouts/PageShell";
import { BEDFORD_STUYVESANT_CONDOS_SEO } from "../seo/pages/bedfordStuyvesantCondos";

export default function BedfordStuyvesantCondos() {
  return (
    <PageShell seo={BEDFORD_STUYVESANT_CONDOS_SEO} pageClassName="neighborhoods-page bedford-stuyvesant-condos-page">
      <BedfordStuyvesantCondosContent />
    </PageShell>
  );
}
