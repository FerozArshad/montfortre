import DumboCondosContent from "../components/dumbo-condos/DumboCondosContent";
import PageShell from "../layouts/PageShell";
import { DUMBO_CONDOS_SEO } from "../seo/pages/dumboCondos";

export default function DumboCondos() {
  return (
    <PageShell seo={DUMBO_CONDOS_SEO} pageClassName="neighborhoods-page dumbo-condos-page">
      <DumboCondosContent />
    </PageShell>
  );
}
