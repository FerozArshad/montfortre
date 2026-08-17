import HarlemCoOwnershipContent from "../components/harlem-co-ownership/HarlemCoOwnershipContent";
import PageShell from "../layouts/PageShell";
import { HARLEM_CO_OWNERSHIP_SEO } from "../seo/pages/harlemCoOwnership";

export default function HarlemCoOwnership() {
  return (
    <PageShell seo={HARLEM_CO_OWNERSHIP_SEO} pageClassName="neighborhoods-page harlem-co-ownership-page">
      <HarlemCoOwnershipContent />
    </PageShell>
  );
}
