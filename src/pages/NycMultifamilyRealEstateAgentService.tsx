import NycMultifamilyContent from "../components/nyc-multifamily-agent/NycMultifamilyContent";
import PageShell from "../layouts/PageShell";
import { NYC_MULTIFAMILY_SEO } from "../seo/pages/nycMultifamily";

export default function NycMultifamilyRealEstateAgentService() {
  return (
    <PageShell seo={NYC_MULTIFAMILY_SEO} pageClassName="two-family-page nyc-multifamily-agent-page">
      <NycMultifamilyContent />
    </PageShell>
  );
}
