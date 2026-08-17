import UpperWestSideCondosContent from "../components/upper-west-side-condos/UpperWestSideCondosContent";
import PageShell from "../layouts/PageShell";
import { UPPER_WEST_SIDE_CONDOS_SEO } from "../seo/pages/upperWestSideCondos";

export default function UpperWestSideCondos() {
  return (
    <PageShell seo={UPPER_WEST_SIDE_CONDOS_SEO} pageClassName="neighborhoods-page uws-condos-page">
      <UpperWestSideCondosContent />
    </PageShell>
  );
}
