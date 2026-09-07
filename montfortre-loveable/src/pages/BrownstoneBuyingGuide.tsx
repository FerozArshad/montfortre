import BrownstoneGuideContent from "../components/brownstone/BrownstoneGuideContent";
import PageShell from "../layouts/PageShell";
import { BROWNSTONE_GUIDE_SEO } from "../seo/pages/brownstoneGuide";

export default function BrownstoneBuyingGuide() {
  return (
    <PageShell seo={BROWNSTONE_GUIDE_SEO} pageClassName="brownstone-guide-page">
      <BrownstoneGuideContent />
    </PageShell>
  );
}
