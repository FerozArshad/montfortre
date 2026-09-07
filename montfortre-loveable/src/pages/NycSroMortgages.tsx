import NycSroMortgagesContent from "../components/nyc-sro-mortgages/NycSroMortgagesContent";
import PageShell from "../layouts/PageShell";
import { NYC_SRO_MORTGAGES_SEO } from "../seo/pages/nycSroMortgages";

export default function NycSroMortgages() {
  return (
    <PageShell seo={NYC_SRO_MORTGAGES_SEO} pageClassName="two-family-page buying-guides-page">
      <NycSroMortgagesContent />
    </PageShell>
  );
}
