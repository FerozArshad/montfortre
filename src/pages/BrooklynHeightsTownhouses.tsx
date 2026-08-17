import BrooklynHeightsTownhousesContent from "../components/brooklyn-heights-townhouses-2/BrooklynHeightsTownhousesContent";
import PageShell from "../layouts/PageShell";
import { BROOKLYN_HEIGHTS_TOWNHOUSES_SEO } from "../seo/pages/brooklynHeightsTownhouses";

export default function BrooklynHeightsTownhouses() {
  return (
    <PageShell seo={BROOKLYN_HEIGHTS_TOWNHOUSES_SEO} pageClassName="neighborhoods-page brooklyn-heights-townhouses-page">
      <BrooklynHeightsTownhousesContent />
    </PageShell>
  );
}
