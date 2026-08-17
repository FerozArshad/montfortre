import BedfordStuyvesantBrownstonesContent from "../components/bedford-stuyvesant-brownstones-2/BedfordStuyvesantBrownstonesContent";
import PageShell from "../layouts/PageShell";
import { BEDFORD_STUYVESANT_BROWNSTONES_SEO } from "../seo/pages/bedfordStuyvesantBrownstones";

export default function BedfordStuyvesantBrownstones() {
  return (
    <PageShell seo={BEDFORD_STUYVESANT_BROWNSTONES_SEO} pageClassName="neighborhoods-page bedford-stuyvesant-brownstones-page">
      <BedfordStuyvesantBrownstonesContent />
    </PageShell>
  );
}
