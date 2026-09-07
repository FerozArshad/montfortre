import ChelseaCondosContent from "../components/chelsea-condos/ChelseaCondosContent";
import PageShell from "../layouts/PageShell";
import { CHELSEA_CONDOS_SEO } from "../seo/pages/chelseaCondos";

export default function ChelseaCondos() {
  return (
    <PageShell seo={CHELSEA_CONDOS_SEO} pageClassName="neighborhoods-page chelsea-condos-page">
      <ChelseaCondosContent />
    </PageShell>
  );
}
