import { useMemo, useState } from "react";
import { blocksToHtml, htmlToBlocks, type CmsBlock } from "../../lib/cms/blocks";
import { AgentFireRichEditor } from "./AgentFireRichEditor";

type Props = {
  blocks: CmsBlock[];
  onChange: (blocks: CmsBlock[]) => void;
  permalink?: string;
};

/**
 * Single post body editor — AgentFire / WordPress TinyMCE parity (format, media, form, table, IDX).
 * Stores content as one HTML text block (same as static blog import).
 */
export function BlogBodyEditor({ blocks, onChange, permalink }: Props) {
  const html = useMemo(() => blocksToHtml(blocks), [blocks]);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="blog-body-editor">
      {permalink ? (
        <div className="blog-body-permalink">
          <span className="blog-body-permalink-label">Permalink</span>
          <a href={permalink} target="_blank" rel="noreferrer">
            {permalink}
          </a>
        </div>
      ) : null}

      <AgentFireRichEditor
        value={html}
        onChange={(next) => onChange(htmlToBlocks(next))}
        minHeight={360}
      />

      <div className="blog-body-editor-footer">
        <button
          type="button"
          className="blog-body-advanced-toggle"
          onClick={() => setShowAdvanced((v) => !v)}
        >
          {showAdvanced ? "Hide HTML source" : "View HTML source"}
        </button>
      </div>
      {showAdvanced ? (
        <textarea
          className="blog-body-source"
          rows={8}
          value={html}
          readOnly
          aria-label="HTML source (read-only)"
        />
      ) : null}
    </div>
  );
}
