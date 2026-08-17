import CrownHeightsBrownstonesContent from "../components/crown-heights-brownstones-2/CrownHeightsBrownstonesContent";
import PageShell from "../layouts/PageShell";
import { CROWN_HEIGHTS_BROWNSTONES_SEO } from "../seo/pages/crownHeightsBrownstones";

export default function CrownHeightsBrownstones() {
  return (
    <PageShell seo={CROWN_HEIGHTS_BROWNSTONES_SEO} pageClassName="neighborhoods-page crown-heights-brownstones-page">
      <CrownHeightsBrownstonesContent />
    </PageShell>
  );
}
