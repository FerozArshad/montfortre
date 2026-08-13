import IdxSearchLayout from "../components/idx/IdxSearchLayout";
import PageShell from "../layouts/PageShell";
import { IDX_RENTALS_SEO } from "../seo/pages/idxRentals";

export default function IdxRentals() {
  return (
    <PageShell seo={IDX_RENTALS_SEO} pageClassName="idx-rentals-page" showFooter={false} showDesktopHeader={false}>
      <IdxSearchLayout
        eyebrow="MLS-powered IDX search"
        title="Rentals"
        description="Search live rental listings across Manhattan and Brooklyn, updated directly from the MLS."
        iframeSrc="https://stanley.olridx.com/Search/Rentals"
        iframeTitle="Rentals"
        externalSearchUrl="https://stanley.olridx.com/Search/Rentals"
        externalButtonLabel="Open full search in new tab"
      />
    </PageShell>
  );
}
