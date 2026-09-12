import BrooklynHeightsCondosContent from "../components/brooklyn-heights-condos-3/BrooklynHeightsCondosContent";
import PageShell from "../layouts/PageShell";
import { BROOKLYN_HEIGHTS_CONDOS_SEO } from "../seo/pages/brooklynHeightsCondos";

export default function BrooklynHeightsCondos() {
  return (
    <PageShell seo={BROOKLYN_HEIGHTS_CONDOS_SEO} pageClassName="neighborhoods-page brooklyn-heights-condos-page">
      <BrooklynHeightsCondosContent />
    </PageShell>
  );
}
