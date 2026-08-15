import CrownHeightsContent from "../components/crown-heights/CrownHeightsContent";
import PageShell from "../layouts/PageShell";
import { CROWN_HEIGHTS_SEO } from "../seo/pages/crownHeights";

export default function CrownHeights() {
  return (
    <PageShell seo={CROWN_HEIGHTS_SEO} pageClassName="harlem-page crown-heights-page">
      <CrownHeightsContent />
    </PageShell>
  );
}
