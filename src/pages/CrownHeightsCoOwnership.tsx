import CrownHeightsCoOwnershipContent from "../components/crown-heights-co-ownership-2/CrownHeightsCoOwnershipContent";
import PageShell from "../layouts/PageShell";
import { CROWN_HEIGHTS_CO_OWNERSHIP_SEO } from "../seo/pages/crownHeightsCoOwnership";

export default function CrownHeightsCoOwnership() {
  return (
    <PageShell seo={CROWN_HEIGHTS_CO_OWNERSHIP_SEO} pageClassName="neighborhoods-page crown-heights-co-ownership-page">
      <CrownHeightsCoOwnershipContent />
    </PageShell>
  );
}
