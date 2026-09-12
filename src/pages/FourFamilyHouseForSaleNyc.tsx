import FourFamilyContent from "../components/four-family/FourFamilyContent";
import PageShell from "../layouts/PageShell";
import { FOUR_FAMILY_SEO } from "../seo/pages/fourFamily";

export default function FourFamilyHouseForSaleNyc() {
  return (
    <PageShell seo={FOUR_FAMILY_SEO} pageClassName="two-family-page buying-guides-page">
      <FourFamilyContent />
    </PageShell>
  );
}
