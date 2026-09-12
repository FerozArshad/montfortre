import NycBrownstoneMortgagesContent from "../components/nyc-brownstone-mortgages/NycBrownstoneMortgagesContent";
import PageShell from "../layouts/PageShell";
import { NYC_BROWNSTONE_MORTGAGES_SEO } from "../seo/pages/nycBrownstoneMortgages";

export default function NycBrownstoneMortgages() {
  return (
    <PageShell seo={NYC_BROWNSTONE_MORTGAGES_SEO} pageClassName="two-family-page buying-guides-page">
      <NycBrownstoneMortgagesContent />
    </PageShell>
  );
}
