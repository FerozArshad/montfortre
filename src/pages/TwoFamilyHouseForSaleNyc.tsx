import TwoFamilyContent from "../components/two-family/TwoFamilyContent";
import PageShell from "../layouts/PageShell";
import { TWO_FAMILY_SEO } from "../seo/pages/twoFamily";

export default function TwoFamilyHouseForSaleNyc() {
  return (
    <PageShell seo={TWO_FAMILY_SEO} pageClassName="two-family-page">
      <TwoFamilyContent />
    </PageShell>
  );
}
