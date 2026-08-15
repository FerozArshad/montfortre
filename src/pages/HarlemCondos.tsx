import HarlemCondosContent from "../components/harlem-condos/HarlemCondosContent";
import PageShell from "../layouts/PageShell";
import { HARLEM_CONDOS_SEO } from "../seo/pages/harlemCondos";

export default function HarlemCondos() {
  return (
    <PageShell seo={HARLEM_CONDOS_SEO} pageClassName="neighborhoods-page harlem-condos-page">
      <HarlemCondosContent />
    </PageShell>
  );
}
