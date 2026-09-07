import WilliamsburgCondosContent from "../components/williamsburg-condos/WilliamsburgCondosContent";
import PageShell from "../layouts/PageShell";
import { WILLIAMSBURG_CONDOS_SEO } from "../seo/pages/williamsburgCondos";

export default function WilliamsburgCondos() {
  return (
    <PageShell seo={WILLIAMSBURG_CONDOS_SEO} pageClassName="neighborhoods-page williamsburg-condos-page">
      <WilliamsburgCondosContent />
    </PageShell>
  );
}
