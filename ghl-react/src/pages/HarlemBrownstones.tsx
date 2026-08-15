import HarlemBrownstonesContent from "../components/harlem-brownstones/HarlemBrownstonesContent";
import PageShell from "../layouts/PageShell";
import { HARLEM_BROWNSTONES_SEO } from "../seo/pages/harlemBrownstones";

export default function HarlemBrownstones() {
  return (
    <PageShell seo={HARLEM_BROWNSTONES_SEO} pageClassName="neighborhoods-page harlem-brownstones-page">
      <HarlemBrownstonesContent />
    </PageShell>
  );
}
