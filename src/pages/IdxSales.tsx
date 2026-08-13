import IdxSearchLayout from "../components/idx/IdxSearchLayout";
import Seo from "../components/Seo";
import useStyleHover from "../hooks/useStyleHover";
import {
  IDX_SALES_JSON_LD,
  IDX_SALES_LINKS,
  IDX_SALES_METAS,
  IDX_SALES_TITLE,
} from "../seo/pages/idxSales";

export default function IdxSales() {
  useStyleHover();

  return (
    <>
      <Seo
        title={IDX_SALES_TITLE}
        metas={[...IDX_SALES_METAS]}
        links={[...IDX_SALES_LINKS]}
        jsonLd={IDX_SALES_JSON_LD}
      />
      <IdxSearchLayout
        eyebrow="MLS-powered IDX search"
        title="Homes For Sale"
        description="Search live sale listings across Manhattan and Brooklyn, updated directly from the MLS."
        iframeSrc="https://stanley.olridx.com/Search/Sales"
        iframeTitle="Homes For Sale"
        externalSearchUrl="https://stanley.olridx.com/Search/Sales"
        externalButtonLabel="Open full search in new tab"
      />
    </>
  );
}
