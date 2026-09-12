import type { CmsBlock } from "../../lib/cms/blocks";
import { blocksToHtml } from "../../lib/cms/blocks";
import { sanitizeBlogHtml } from "../../lib/cms/sanitize";

type Props = {
  title: string;
  lead?: string;
  blocks: CmsBlock[];
};

/**
 * Public freeform page body — Montfort cream/navy tokens, not a third-party builder look.
 */
export default function BlockPageRenderer({ title, lead, blocks }: Props) {
  const html = sanitizeBlogHtml(blocksToHtml(blocks));

  return (
    <article className="cms-block-page">
      <header className="cms-block-page__hero">
        <h1 className="cms-block-page__title">{title}</h1>
        {lead ? <p className="cms-block-page__lead">{lead}</p> : null}
      </header>
      <div className="cms-block-page__body" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
