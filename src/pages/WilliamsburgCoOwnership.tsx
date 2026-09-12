import WilliamsburgCoOwnershipContent from "../components/williamsburg-co-ownership/WilliamsburgCoOwnershipContent";
import PageShell from "../layouts/PageShell";
import { WILLIAMSBURG_CO_OWNERSHIP_SEO } from "../seo/pages/williamsburgCoOwnership";

export default function WilliamsburgCoOwnership() {
  return (
    <PageShell seo={WILLIAMSBURG_CO_OWNERSHIP_SEO} pageClassName="neighborhoods-page williamsburg-co-ownership-page">
      <WilliamsburgCoOwnershipContent />
    </PageShell>
  );
}
