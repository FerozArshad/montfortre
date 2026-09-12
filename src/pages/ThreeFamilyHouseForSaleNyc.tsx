import ThreeFamilyContent from "../components/three-family/ThreeFamilyContent";
import PageShell from "../layouts/PageShell";
import { THREE_FAMILY_SEO } from "../seo/pages/threeFamily";

export default function ThreeFamilyHouseForSaleNyc() {
  return (
    <PageShell seo={THREE_FAMILY_SEO} pageClassName="two-family-page buying-guides-page">
      <ThreeFamilyContent />
    </PageShell>
  );
}
