import NycBuyersAgentContent from "../components/nyc-buyers-agent/NycBuyersAgentContent";
import PageShell from "../layouts/PageShell";
import { NYC_BUYERS_AGENT_SEO } from "../seo/pages/nycBuyersAgent";

export default function NycBuyersAgentService() {
  return (
    <PageShell seo={NYC_BUYERS_AGENT_SEO} pageClassName="two-family-page nyc-buyers-agent-page">
      <NycBuyersAgentContent />
    </PageShell>
  );
}
