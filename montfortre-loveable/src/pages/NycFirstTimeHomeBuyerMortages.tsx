import NycFirstTimeHomeBuyerMortagesContent from "../components/nyc-first-time-home-buyer-mortages/NycFirstTimeHomeBuyerMortagesContent";
import PageShell from "../layouts/PageShell";
import { NYC_FIRST_TIME_HOME_BUYER_MORTAGES_SEO } from "../seo/pages/nycFirstTimeHomeBuyerMortages";

export default function NycFirstTimeHomeBuyerMortages() {
  return (
    <PageShell seo={NYC_FIRST_TIME_HOME_BUYER_MORTAGES_SEO} pageClassName="two-family-page buying-guides-page">
      <NycFirstTimeHomeBuyerMortagesContent />
    </PageShell>
  );
}
