import { useEffect, useRef } from "react";
import { sanitizeBlogHtml } from "../../lib/cms/sanitize";

type Props = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: number;
};

function exec(command: string, value?: string) {
  document.execCommand(command, false, value);
}

export function RichTextEditor({ value, onChange, placeholder = "Write your article…", minHeight = 220 }: Props) {
  const editorRef = useRef<HTMLDivElement>(null);
  const lastHtml = useRef(value);

  useEffect(() => {
    const el = editorRef.current;
    if (!el) return;
    if (value !== lastHtml.current && el.innerHTML !== value) {
      el.innerHTML = value || "";
      lastHtml.current = value;
    }
  }, [value]);

  function emit() {
    const el = editorRef.current;
    if (!el) return;
    const html = sanitizeBlogHtml(el.innerHTML.trim() || "<p></p>");
    lastHtml.current = html;
    onChange(html);
  }

  function onLink() {
    const url = window.prompt("Link URL", "https://");
    if (!url?.trim()) return;
    exec("createLink", url.trim());
    emit();
  }

  return (
    <div className="rich-text-editor">
      <div className="rich-text-toolbar" role="toolbar" aria-label="Formatting">
        <button type="button" className="rich-text-btn" title="Bold" onMouseDown={(e) => e.preventDefault()} onClick={() => { exec("bold"); emit(); }}>
          B
        </button>
        <button type="button" className="rich-text-btn rich-text-btn--italic" title="Italic" onMouseDown={(e) => e.preventDefault()} onClick={() => { exec("italic"); emit(); }}>
          I
        </button>
        <button type="button" className="rich-text-btn" title="Heading 2" onMouseDown={(e) => e.preventDefault()} onClick={() => { exec("formatBlock", "h2"); emit(); }}>
          H2
        </button>
        <button type="button" className="rich-text-btn" title="Heading 3" onMouseDown={(e) => e.preventDefault()} onClick={() => { exec("formatBlock", "h3"); emit(); }}>
          H3
        </button>
        <button type="button" className="rich-text-btn" title="Paragraph" onMouseDown={(e) => e.preventDefault()} onClick={() => { exec("formatBlock", "p"); emit(); }}>
          ¶
        </button>
        <button type="button" className="rich-text-btn" title="Bullet list" onMouseDown={(e) => e.preventDefault()} onClick={() => { exec("insertUnorderedList"); emit(); }}>
          •
        </button>
        <button type="button" className="rich-text-btn" title="Link" onMouseDown={(e) => e.preventDefault()} onClick={onLink}>
          Link
        </button>
        <button type="button" className="rich-text-btn" title="Remove link" onMouseDown={(e) => e.preventDefault()} onClick={() => { exec("unlink"); emit(); }}>
          Unlink
        </button>
      </div>
      <div
        ref={editorRef}
        className="rich-text-surface bsg-html"
        contentEditable
        role="textbox"
        aria-multiline="true"
        data-placeholder={placeholder}
        style={{ minHeight }}
        onInput={emit}
        onBlur={emit}
        suppressContentEditableWarning
      />
    </div>
  );
}
