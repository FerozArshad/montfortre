import { useState } from "react";
import { uploadCmsImage } from "../../lib/cms/upload";
import {
  createEmptyBlock,
  type CmsBlock,
  type CmsGalleryImage,
} from "../../lib/cms/blocks";
import { RichTextEditor } from "./RichTextEditor";

const BLOCK_TYPES: { type: CmsBlock["type"]; label: string }[] = [
  { type: "heading", label: "Heading" },
  { type: "text", label: "Text" },
  { type: "image", label: "Image" },
  { type: "gallery", label: "Gallery" },
  { type: "container", label: "Container" },
  { type: "divider", label: "Divider" },
  { type: "cta", label: "CTA" },
];

type Props = {
  blocks: CmsBlock[];
  onChange: (blocks: CmsBlock[]) => void;
};

function moveItem<T>(list: T[], index: number, dir: -1 | 1): T[] {
  const next = index + dir;
  if (next < 0 || next >= list.length) return list;
  const copy = [...list];
  const tmp = copy[index];
  copy[index] = copy[next];
  copy[next] = tmp;
  return copy;
}

function BlockToolbar({
  index,
  total,
  onMove,
  onRemove,
  nestLabel,
}: {
  index: number;
  total: number;
  onMove: (dir: -1 | 1) => void;
  onRemove: () => void;
  nestLabel?: string;
}) {
  return (
    <div className="block-editor-toolbar">
      {nestLabel ? <span className="block-editor-nest-label">{nestLabel}</span> : null}
      <button type="button" className="admin-btn admin-btn--ghost admin-btn--sm" disabled={index <= 0} onClick={() => onMove(-1)} aria-label="Move up">
        ↑
      </button>
      <button type="button" className="admin-btn admin-btn--ghost admin-btn--sm" disabled={index >= total - 1} onClick={() => onMove(1)} aria-label="Move down">
        ↓
      </button>
      <button type="button" className="admin-btn admin-btn--danger admin-btn--sm" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}

function ImageUploadField({
  value,
  alt,
  onSrc,
  onAlt,
}: {
  value: string;
  alt: string;
  onSrc: (src: string) => void;
  onAlt: (alt: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [err, setErr] = useState("");

  async function onFile(file: File | null) {
    if (!file) return;
    setUploading(true);
    setErr("");
    try {
      const url = await uploadCmsImage("media", file);
      onSrc(url);
      if (!alt) onAlt(file.name.replace(/\.[^.]+$/, ""));
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="block-editor-image-fields">
      <label>
        Image URL
        <input value={value} onChange={(e) => onSrc(e.target.value)} placeholder="https://… or upload below" />
      </label>
      <label>
        Alt text
        <input value={alt} onChange={(e) => onAlt(e.target.value)} />
      </label>
      <label>
        Upload
        <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={(e) => void onFile(e.target.files?.[0] || null)} />
        {uploading ? <span className="admin-muted">Uploading…</span> : null}
      </label>
      {err ? <div className="admin-error">{err}</div> : null}
      {value ? <img className="block-editor-preview" src={value} alt={alt || ""} /> : null}
    </div>
  );
}

function GalleryEditor({
  images,
  onChange,
}: {
  images: CmsGalleryImage[];
  onChange: (images: CmsGalleryImage[]) => void;
}) {
  function updateAt(i: number, patch: Partial<CmsGalleryImage>) {
    onChange(images.map((img, idx) => (idx === i ? { ...img, ...patch } : img)));
  }

  return (
    <div className="block-editor-gallery">
      {images.map((img, i) => (
        <div key={`${img.src}-${i}`} className="block-editor-gallery-item">
          <ImageUploadField
            value={img.src}
            alt={img.alt}
            onSrc={(src) => updateAt(i, { src })}
            onAlt={(alt) => updateAt(i, { alt })}
          />
          <button
            type="button"
            className="admin-btn admin-btn--danger"
            onClick={() => onChange(images.filter((_, idx) => idx !== i))}
          >
            Remove image
          </button>
        </div>
      ))}
      <button type="button" className="admin-btn admin-btn--ghost" onClick={() => onChange([...images, { src: "", alt: "" }])}>
        Add image
      </button>
    </div>
  );
}

function BlockFields({
  block,
  onUpdate,
}: {
  block: CmsBlock;
  onUpdate: (next: CmsBlock) => void;
}) {
  switch (block.type) {
    case "heading":
      return (
        <>
          <label>
            Level
            <select
              value={block.level}
              onChange={(e) => onUpdate({ ...block, level: Number(e.target.value) === 3 ? 3 : 2 })}
            >
              <option value={2}>H2</option>
              <option value={3}>H3</option>
            </select>
          </label>
          <label>
            Text
            <input value={block.text} onChange={(e) => onUpdate({ ...block, text: e.target.value })} />
          </label>
        </>
      );
    case "text":
      return (
        <RichTextEditor
          value={block.html}
          onChange={(html) => onUpdate({ ...block, html })}
          placeholder="Write paragraph text — formatted like the live article (not raw HTML tags)."
        />
      );
    case "image":
      return (
        <ImageUploadField
          value={block.src}
          alt={block.alt}
          onSrc={(src) => onUpdate({ ...block, src })}
          onAlt={(alt) => onUpdate({ ...block, alt })}
        />
      );
    case "gallery":
      return <GalleryEditor images={block.images} onChange={(images) => onUpdate({ ...block, images })} />;
    case "cta":
      return (
        <>
          <label>
            Label
            <input value={block.label} onChange={(e) => onUpdate({ ...block, label: e.target.value })} />
          </label>
          <label>
            Link URL
            <input value={block.href} onChange={(e) => onUpdate({ ...block, href: e.target.value })} />
          </label>
        </>
      );
    case "divider":
      return (
        <p className="admin-muted" style={{ margin: 0 }}>
          Horizontal rule on the public page.
        </p>
      );
    case "container":
      return null;
  }
}

function BlockList({
  blocks,
  onChange,
  nested,
}: {
  blocks: CmsBlock[];
  onChange: (blocks: CmsBlock[]) => void;
  nested?: boolean;
}) {
  function updateAt(index: number, next: CmsBlock) {
    onChange(blocks.map((b, i) => (i === index ? next : b)));
  }

  function removeAt(index: number) {
    onChange(blocks.filter((_, i) => i !== index));
  }

  function add(type: CmsBlock["type"]) {
    onChange([...blocks, createEmptyBlock(type)]);
  }

  return (
    <div className={`block-editor-list${nested ? " block-editor-list--nested" : ""}`}>
      {blocks.map((block, index) => (
        <div key={block.id} className="block-editor-item">
          <div className="block-editor-item-head">
            <strong className="block-editor-type">{block.type}</strong>
            <BlockToolbar
              index={index}
              total={blocks.length}
              onMove={(dir) => onChange(moveItem(blocks, index, dir))}
              onRemove={() => removeAt(index)}
              nestLabel={nested ? "Nested" : undefined}
            />
          </div>
          <div className="block-editor-item-body admin-form">
            <BlockFields block={block} onUpdate={(next) => updateAt(index, next)} />
            {block.type === "container" ? (
              <BlockList nested blocks={block.children} onChange={(children) => updateAt(index, { ...block, children })} />
            ) : null}
          </div>
        </div>
      ))}
      <div className="block-editor-add">
        <select
          defaultValue=""
          aria-label="Add block"
          onChange={(e) => {
            const value = e.target.value as CmsBlock["type"] | "";
            if (!value) return;
            add(value);
            e.target.value = "";
          }}
        >
          <option value="" disabled>
            Add block…
          </option>
          {BLOCK_TYPES.map(({ type, label }) => (
            <option key={type} value={type}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export function BlockEditor({ blocks, onChange }: Props) {
  return (
    <div className="block-editor">
      <div className="block-editor-label">Content blocks</div>
      <BlockList blocks={blocks} onChange={onChange} />
    </div>
  );
}
