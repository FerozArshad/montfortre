import BrooklynHeightsContent from "../components/brooklyn-heights/BrooklynHeightsContent";
import PageShell from "../layouts/PageShell";
import { BROOKLYN_HEIGHTS_SEO } from "../seo/pages/brooklynHeights";

export default function BrooklynHeights() {
  return (
    <PageShell seo={BROOKLYN_HEIGHTS_SEO} pageClassName="harlem-page bh-page">
      <BrooklynHeightsContent />
    </PageShell>
  );
}
