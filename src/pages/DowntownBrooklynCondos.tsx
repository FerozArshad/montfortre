import DowntownBrooklynCondosContent from "../components/downtown-brooklyn-condos-2/DowntownBrooklynCondosContent";
import PageShell from "../layouts/PageShell";
import { DOWNTOWN_BROOKLYN_CONDOS_SEO } from "../seo/pages/downtownBrooklynCondos";

export default function DowntownBrooklynCondos() {
  return (
    <PageShell seo={DOWNTOWN_BROOKLYN_CONDOS_SEO} pageClassName="neighborhoods-page downtown-brooklyn-condos-page">
      <DowntownBrooklynCondosContent />
    </PageShell>
  );
}
