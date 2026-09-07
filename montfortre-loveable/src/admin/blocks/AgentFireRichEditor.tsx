import { useEffect, useRef, useState, type ReactNode } from "react";
import { sanitizeBlogHtml } from "../../lib/cms/sanitize";
import {
  IconAlignCenter,
  IconAlignLeft,
  IconAlignRight,
  IconBold,
  IconBulletList,
  IconButton,
  IconClearFormat,
  IconForm,
  IconHome,
  IconImage,
  IconItalic,
  IconLink,
  IconNumberList,
  IconReadMore,
  IconSearch,
  IconTable,
  IconUnderline,
  IconUnlink,
} from "./EditorIcons";
import { MediaPickerModal } from "./MediaPickerModal";

type Format = "p" | "h2" | "h3" | "h4";

type Props = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: number;
};

const FORMATS: { id: Format; label: string }[] = [
  { id: "p", label: "Paragraph" },
  { id: "h2", label: "Heading 2" },
  { id: "h3", label: "Heading 3" },
  { id: "h4", label: "Heading 4" },
];

const IDX_SEARCH = "https://stanley.olridx.com/Search/Sales";
const IDX_RENTALS = "https://stanley.olridx.com/Search/Rentals";
const IDX_HOME = "https://stanley.olridx.com/";

function escapeAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeText(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function ToolbarIconBtn({
  title,
  onClick,
  children,
}: {
  title: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className="af-btn af-btn--icon"
      title={title}
      aria-label={title}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function ToolbarLabelBtn({
  title,
  onClick,
  icon,
  label,
}: {
  title: string;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      className="af-btn af-btn--pill"
      title={title}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
    >
      <span className="af-btn-ico">{icon}</span>
      <span className="af-btn-text">{label}</span>
    </button>
  );
}

export function AgentFireRichEditor({
  value,
  onChange,
  placeholder = "Start writing…",
  minHeight = 320,
}: Props) {
  const editorRef = useRef<HTMLDivElement>(null);
  const lastHtml = useRef<string | null>(null);
  const savedRange = useRef<Range | null>(null);
  const [format, setFormat] = useState<Format>("p");
  const [mediaOpen, setMediaOpen] = useState(false);
  const [tableOpen, setTableOpen] = useState(false);
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);
  const [buttonOpen, setButtonOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Harlem Brownstones for Sale");
  const [buttonHref, setButtonHref] = useState("/harlem-brownstones/");
  const [buttonNewTab, setButtonNewTab] = useState(false);

  useEffect(() => {
    const el = editorRef.current;
    if (!el) return;
    // First mount must always hydrate — lastHtml starts null so empty editable
    // surfaces get blocksToHtml(value) instead of staying blank.
    if (lastHtml.current === null || (value !== lastHtml.current && el.innerHTML !== value)) {
      el.innerHTML = value || "";
      lastHtml.current = value;
    }
  }, [value]);

  function saveSelection() {
    const el = editorRef.current;
    const sel = window.getSelection();
    if (!el || !sel || sel.rangeCount === 0) return;
    const range = sel.getRangeAt(0);
    if (el.contains(range.commonAncestorContainer)) {
      savedRange.current = range.cloneRange();
    }
  }

  function restoreSelection() {
    const el = editorRef.current;
    if (!el) return;
    el.focus();
    const sel = window.getSelection();
    if (!sel) return;
    sel.removeAllRanges();
    if (savedRange.current) {
      try {
        sel.addRange(savedRange.current);
        return;
      } catch {
        /* fall through */
      }
    }
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    sel.addRange(range);
  }

  function emit() {
    const el = editorRef.current;
    if (!el) return;
    const html = sanitizeBlogHtml(el.innerHTML.trim() || "<p></p>");
    lastHtml.current = html;
    onChange(html);
  }

  function exec(command: string, commandValue?: string) {
    restoreSelection();
    document.execCommand(command, false, commandValue);
    saveSelection();
    emit();
  }

  function insertHtml(html: string) {
    restoreSelection();
    const ok = document.execCommand("insertHTML", false, html);
    if (!ok) {
      const el = editorRef.current;
      if (el) {
        el.insertAdjacentHTML("beforeend", html);
      }
    }
    saveSelection();
    emit();
  }

  function applyFormat(next: Format) {
    setFormat(next);
    exec("formatBlock", next);
  }

  function onLink() {
    const url = window.prompt("Link URL", "https://");
    if (!url?.trim()) return;
    exec("createLink", url.trim());
  }

  function insertTable() {
    const rows = Math.min(12, Math.max(1, tableRows));
    const cols = Math.min(8, Math.max(1, tableCols));
    let table = '<table class="cms-editor-table"><thead><tr>';
    for (let c = 0; c < cols; c += 1) table += `<th>Header ${c + 1}</th>`;
    table += "</tr></thead><tbody>";
    for (let r = 1; r < rows; r += 1) {
      table += "<tr>";
      for (let c = 0; c < cols; c += 1) table += "<td>Cell</td>";
      table += "</tr>";
    }
    table += "</tbody></table><p></p>";
    insertHtml(table);
    setTableOpen(false);
  }

  function insertButton() {
    const label = buttonText.trim() || "Learn more";
    let href = buttonHref.trim() || "/";
    if (!/^https?:\/\//i.test(href) && !href.startsWith("/") && !href.startsWith("mailto:") && !href.startsWith("tel:")) {
      href = `/${href}`;
    }
    const target = buttonNewTab ? ' target="_blank" rel="noopener noreferrer"' : "";
    insertHtml(
      `<p class="cms-post-cta"><a class="cms-post-btn" href="${escapeAttr(href)}"${target}>${escapeText(label)}</a></p><p></p>`,
    );
    setButtonOpen(false);
  }

  function onAddForm() {
    insertHtml(
      `<div class="cms-lead-form" data-montfort="contact-form" data-form-type="blog-embed"><p><strong>Contact form</strong></p><p>A live lead form will appear here on the published page. Submissions show in Admin → Leads.</p></div><p></p>`,
    );
  }

  function onReadMore() {
    insertHtml('<hr class="wp-read-more" /><p></p>');
  }

  function onIdxSearch() {
    insertHtml(
      `<p class="cms-idx-cta"><a class="cms-idx-btn" href="${IDX_SEARCH}" target="_blank" rel="noopener noreferrer">Search MLS listings</a></p>`,
    );
  }

  function onIdxListings() {
    insertHtml(
      `<p class="cms-idx-cta"><a class="cms-idx-btn" href="${IDX_SEARCH}" target="_blank" rel="noopener noreferrer">Browse current listings</a> <a class="cms-idx-btn cms-idx-btn--ghost" href="${IDX_RENTALS}" target="_blank" rel="noopener noreferrer">Rentals</a></p>`,
    );
  }

  function onIdxRegistration() {
    insertHtml(
      `<p class="cms-idx-cta"><a class="cms-idx-btn" href="${IDX_HOME}" target="_blank" rel="noopener noreferrer">Register for IDX property alerts</a></p>`,
    );
  }

  function onMediaSelect(url: string, alt: string) {
    const safeUrl = url.replace(/"/g, "&quot;");
    const safeAlt = (alt || "").replace(/"/g, "&quot;");
    insertHtml(
      `<figure class="cms-block-image"><img src="${safeUrl}" alt="${safeAlt}" loading="lazy" />${
        alt ? `<figcaption>${safeAlt}</figcaption>` : ""
      }</figure><p></p>`,
    );
  }

  return (
    <div className="af-editor">
      <div className="af-toolbar" role="toolbar" aria-label="Post editor">
        <div className="af-toolbar-row af-toolbar-row--primary">
          <label className="af-format-wrap">
            <span className="af-format-label">Format</span>
            <select
              className="af-format-select"
              value={format}
              aria-label="Paragraph format"
              onMouseDown={() => saveSelection()}
              onChange={(e) => applyFormat(e.target.value as Format)}
            >
              {FORMATS.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.label}
                </option>
              ))}
            </select>
          </label>

          <div className="af-toolbar-group" role="group" aria-label="Text style">
            <ToolbarIconBtn title="Bold" onClick={() => exec("bold")}>
              <IconBold size={17} />
            </ToolbarIconBtn>
            <ToolbarIconBtn title="Italic" onClick={() => exec("italic")}>
              <IconItalic size={17} />
            </ToolbarIconBtn>
            <ToolbarIconBtn title="Underline" onClick={() => exec("underline")}>
              <IconUnderline size={17} />
            </ToolbarIconBtn>
          </div>

          <div className="af-toolbar-group" role="group" aria-label="Alignment">
            <ToolbarIconBtn title="Align left" onClick={() => exec("justifyLeft")}>
              <IconAlignLeft size={17} />
            </ToolbarIconBtn>
            <ToolbarIconBtn title="Align center" onClick={() => exec("justifyCenter")}>
              <IconAlignCenter size={17} />
            </ToolbarIconBtn>
            <ToolbarIconBtn title="Align right" onClick={() => exec("justifyRight")}>
              <IconAlignRight size={17} />
            </ToolbarIconBtn>
          </div>

          <div className="af-toolbar-group" role="group" aria-label="Lists">
            <ToolbarIconBtn title="Bullet list" onClick={() => exec("insertUnorderedList")}>
              <IconBulletList size={17} />
            </ToolbarIconBtn>
            <ToolbarIconBtn title="Numbered list" onClick={() => exec("insertOrderedList")}>
              <IconNumberList size={17} />
            </ToolbarIconBtn>
          </div>

          <div className="af-toolbar-group" role="group" aria-label="Links">
            <ToolbarIconBtn title="Insert link" onClick={onLink}>
              <IconLink size={17} />
            </ToolbarIconBtn>
            <ToolbarIconBtn title="Remove link" onClick={() => exec("unlink")}>
              <IconUnlink size={17} />
            </ToolbarIconBtn>
          </div>
        </div>

        <div className="af-toolbar-row af-toolbar-row--secondary">
          <ToolbarLabelBtn
            title="Add media"
            icon={<IconImage size={16} />}
            label="Media"
            onClick={() => {
              saveSelection();
              setMediaOpen(true);
            }}
          />
          <ToolbarLabelBtn
            title="Insert CTA button with custom text"
            icon={<IconButton size={16} />}
            label="Button"
            onClick={() => {
              saveSelection();
              setTableOpen(false);
              setButtonOpen(true);
            }}
          />
          <ToolbarLabelBtn title="Insert contact form (saves leads to dashboard)" icon={<IconForm size={16} />} label="Form" onClick={onAddForm} />
          <ToolbarLabelBtn
            title="Insert table"
            icon={<IconTable size={16} />}
            label="Table"
            onClick={() => {
              saveSelection();
              setButtonOpen(false);
              setTableOpen(true);
            }}
          />
          <span className="af-toolbar-sep" aria-hidden="true" />
          <ToolbarLabelBtn title="IDX registration link" icon={<IconHome size={16} />} label="IDX Reg" onClick={onIdxRegistration} />
          <ToolbarLabelBtn title="IDX MLS search link" icon={<IconSearch size={16} />} label="IDX Search" onClick={onIdxSearch} />
          <ToolbarLabelBtn title="IDX listings links" icon={<IconHome size={16} />} label="Listings" onClick={onIdxListings} />
          <span className="af-toolbar-sep" aria-hidden="true" />
          <ToolbarLabelBtn title="Read more break" icon={<IconReadMore size={16} />} label="More" onClick={onReadMore} />
          <ToolbarLabelBtn title="Clear formatting" icon={<IconClearFormat size={16} />} label="Clear" onClick={() => exec("removeFormat")} />
        </div>
      </div>

      <div
        ref={editorRef}
        className="af-surface bsg-html"
        contentEditable
        role="textbox"
        aria-multiline="true"
        data-placeholder={placeholder}
        style={{ minHeight }}
        onInput={emit}
        onBlur={saveSelection}
        onKeyUp={saveSelection}
        onMouseUp={saveSelection}
        suppressContentEditableWarning
      />

      {buttonOpen ? (
        <div className="af-table-dialog" role="dialog" aria-label="Insert button">
          <strong>Insert button</strong>
          <label>
            Button text
            <input
              type="text"
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              placeholder="Harlem Brownstones for Sale"
              autoFocus
            />
          </label>
          <label>
            Link URL
            <input
              type="text"
              value={buttonHref}
              onChange={(e) => setButtonHref(e.target.value)}
              placeholder="/harlem-brownstones/ or https://…"
            />
          </label>
          <label className="af-table-dialog-check">
            <input type="checkbox" checked={buttonNewTab} onChange={(e) => setButtonNewTab(e.target.checked)} />
            Open in new tab
          </label>
          <div className="af-table-dialog-actions">
            <button type="button" className="af-btn af-btn--pill" onClick={insertButton}>
              Insert
            </button>
            <button type="button" className="af-btn af-btn--pill" onClick={() => setButtonOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : null}

      {tableOpen ? (
        <div className="af-table-dialog" role="dialog" aria-label="Insert table">
          <strong>Insert table</strong>
          <label>
            Rows
            <input type="number" min={1} max={12} value={tableRows} onChange={(e) => setTableRows(Number(e.target.value) || 1)} />
          </label>
          <label>
            Columns
            <input type="number" min={1} max={8} value={tableCols} onChange={(e) => setTableCols(Number(e.target.value) || 1)} />
          </label>
          <div className="af-table-dialog-actions">
            <button type="button" className="af-btn af-btn--pill" onClick={insertTable}>
              Insert
            </button>
            <button type="button" className="af-btn af-btn--pill" onClick={() => setTableOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : null}

      <MediaPickerModal open={mediaOpen} onClose={() => setMediaOpen(false)} onSelect={onMediaSelect} />
    </div>
  );
}
