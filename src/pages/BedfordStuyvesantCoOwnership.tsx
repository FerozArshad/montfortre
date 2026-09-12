import BedfordStuyvesantCoOwnershipContent from "../components/bedford-stuyvesant-co-ownership/BedfordStuyvesantCoOwnershipContent";
import PageShell from "../layouts/PageShell";
import { BEDFORD_STUYVESANT_CO_OWNERSHIP_SEO } from "../seo/pages/bedfordStuyvesantCoOwnership";

export default function BedfordStuyvesantCoOwnership() {
  return (
    <PageShell seo={BEDFORD_STUYVESANT_CO_OWNERSHIP_SEO} pageClassName="neighborhoods-page bedford-stuyvesant-co-ownership-page">
      <BedfordStuyvesantCoOwnershipContent />
    </PageShell>
  );
}
