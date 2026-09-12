import NycListingAgentContent from "../components/nyc-listing-agent/NycListingAgentContent";
import PageShell from "../layouts/PageShell";
import { NYC_LISTING_AGENT_SEO } from "../seo/pages/nycListingAgent";

export default function NycListingAgentService() {
  return (
    <PageShell seo={NYC_LISTING_AGENT_SEO} pageClassName="two-family-page nyc-listing-agent-page">
      <NycListingAgentContent />
    </PageShell>
  );
}
