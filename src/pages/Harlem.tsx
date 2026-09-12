import HarlemContent from "../components/harlem/HarlemContent";
import PageShell from "../layouts/PageShell";
import { HARLEM_SEO } from "../seo/pages/harlem";

export default function Harlem() {
  return (
    <PageShell seo={HARLEM_SEO} pageClassName="harlem-page">
      <HarlemContent />
    </PageShell>
  );
}
