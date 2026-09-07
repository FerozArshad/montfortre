import CrownHeightsSrosContent from "../components/crown-heights-sros-3/CrownHeightsSrosContent";
import PageShell from "../layouts/PageShell";
import { CROWN_HEIGHTS_SROS_SEO } from "../seo/pages/crownHeightsSros";

export default function CrownHeightsSros() {
  return (
    <PageShell seo={CROWN_HEIGHTS_SROS_SEO} pageClassName="neighborhoods-page crown-heights-sros-page">
      <CrownHeightsSrosContent />
    </PageShell>
  );
}
