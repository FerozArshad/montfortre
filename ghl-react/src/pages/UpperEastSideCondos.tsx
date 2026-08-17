import UpperEastSideCondosContent from "../components/upper-east-side-condos/UpperEastSideCondosContent";
import PageShell from "../layouts/PageShell";
import { UPPER_EAST_SIDE_CONDOS_SEO } from "../seo/pages/upperEastSideCondos";

export default function UpperEastSideCondos() {
  return (
    <PageShell seo={UPPER_EAST_SIDE_CONDOS_SEO} pageClassName="neighborhoods-page ues-condos-page">
      <UpperEastSideCondosContent />
    </PageShell>
  );
}
