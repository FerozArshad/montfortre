import IdxSearchLayout from "../components/idx/IdxSearchLayout";
import Seo from "../components/Seo";
import useStyleHover from "../hooks/useStyleHover";
import {
  IDX_RENTALS_JSON_LD,
  IDX_RENTALS_LINKS,
  IDX_RENTALS_METAS,
  IDX_RENTALS_TITLE,
} from "../seo/pages/idxRentals";

export default function IdxRentals() {
  useStyleHover();

  return (
    <>
      <Seo
        title={IDX_RENTALS_TITLE}
        metas={[...IDX_RENTALS_METAS]}
        links={[...IDX_RENTALS_LINKS]}
        jsonLd={IDX_RENTALS_JSON_LD}
      />
      <IdxSearchLayout
        eyebrow="MLS-powered IDX search"
        title="Rentals"
        description="Search live rental listings across Manhattan and Brooklyn, updated directly from the MLS."
        iframeSrc="https://stanley.olridx.com/Search/Rentals"
        iframeTitle="Rentals"
        externalSearchUrl="https://stanley.olridx.com/Search/Rentals"
        externalButtonLabel="Open full search in new tab"
      />
    </>
  );
}
