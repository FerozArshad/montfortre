import StanleyMontfortContent from "../components/stanley/StanleyMontfortContent";
import PageShell from "../layouts/PageShell";
import { STANLEY_MONTFORT_SEO } from "../seo/pages/stanleyMontfort";

export default function StanleyMontfort() {
  return (
    <PageShell seo={STANLEY_MONTFORT_SEO} pageClassName="stanley-page">
      <StanleyMontfortContent />
    </PageShell>
  );
}
