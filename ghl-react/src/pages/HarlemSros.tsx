import HarlemSrosContent from "../components/harlem-sros/HarlemSrosContent";
import PageShell from "../layouts/PageShell";
import { HARLEM_SROS_SEO } from "../seo/pages/harlemSros";

export default function HarlemSros() {
  return (
    <PageShell seo={HARLEM_SROS_SEO} pageClassName="neighborhoods-page harlem-sros-page">
      <HarlemSrosContent />
    </PageShell>
  );
}
