import DowntownBrooklynContent from "../components/downtown-brooklyn/DowntownBrooklynContent";
import PageShell from "../layouts/PageShell";
import { DOWNTOWN_BROOKLYN_SEO } from "../seo/pages/downtownBrooklyn";

export default function DowntownBrooklyn() {
  return (
    <PageShell seo={DOWNTOWN_BROOKLYN_SEO} pageClassName="harlem-page dtb-page">
      <DowntownBrooklynContent />
    </PageShell>
  );
}
