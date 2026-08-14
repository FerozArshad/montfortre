import IdxSearchLayout from "../components/idx/IdxSearchLayout";
import PageShell from "../layouts/PageShell";
import { IDX_SALES_SEO } from "../seo/pages/idxSales";

export default function IdxSales() {
  return (
    <PageShell seo={IDX_SALES_SEO} pageClassName="idx-sales-page" showFooter={false} showDesktopHeader={false}>
      <IdxSearchLayout
        eyebrow="MLS-powered IDX search"
        title="Homes For Sale"
        description="Search live sale listings across Manhattan and Brooklyn, updated directly from the MLS."
        iframeSrc="https://stanley.olridx.com/Search/Sales"
        iframeTitle="Homes For Sale"
        externalSearchUrl="https://stanley.olridx.com/Search/Sales"
        externalButtonLabel="Open full search in new tab"
      />
    </PageShell>
  );
}
