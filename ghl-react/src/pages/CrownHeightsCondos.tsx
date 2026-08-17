import CrownHeightsCondosContent from "../components/crown-heights-condos-2/CrownHeightsCondosContent";
import PageShell from "../layouts/PageShell";
import { CROWN_HEIGHTS_CONDOS_SEO } from "../seo/pages/crownHeightsCondos";

export default function CrownHeightsCondos() {
  return (
    <PageShell seo={CROWN_HEIGHTS_CONDOS_SEO} pageClassName="neighborhoods-page crown-heights-condos-page">
      <CrownHeightsCondosContent />
    </PageShell>
  );
}
