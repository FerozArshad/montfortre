import { useDeferredValue, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminGate } from "../../admin/AdminGate";
import { loadListingsHubSettings } from "../../admin/listings/listingsHubSettings";
import {
  SPARK_SECTIONS,
  buildFactsFromCore,
  demoListingEditorForm,
  formToPreviewListing,
  formToSavePayload,
  listingRowToEditorForm,
  type ListingEditorForm,
  type SparkSectionId,
} from "../../admin/listings/listingEditorForm";
import { SparkSectionBody } from "../../admin/listings/SparkSectionBody";
import { MediaPickerModal } from "../../admin/blocks/MediaPickerModal";
import type { ListingFact, ListingGalleryImage, ListingInsight } from "../../data/listings/types";
import type { ListingSparkUi } from "../../data/listings/sparkUi";
import ListingPageContent from "../../components/listing/ListingPageContent";
import { adminFetchListingById, adminUpsertListing } from "../../lib/cms/listings";
import { uploadCmsImage } from "../../lib/cms/upload";

const HISTORY_MAX = 40;

function cloneForm(form: ListingEditorForm): ListingEditorForm {
  return structuredClone(form);
}

function SparkEditorInner() {
  const { id } = useParams();
  const isNew = !id || id === "new";
  const navigate = useNavigate();
  const [form, setForm] = useState(demoListingEditorForm);
  const [section, setSection] = useState<SparkSectionId>("details");
  const [panelOpen, setPanelOpen] = useState(true);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [savedFlash, setSavedFlash] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [galleryUploading, setGalleryUploading] = useState(false);
  const [mediaPicker, setMediaPicker] = useState<"hero" | "gallery" | null>(null);
  const [dirty, setDirty] = useState(false);
  const [historyLen, setHistoryLen] = useState(0);
  const historyRef = useRef<ListingEditorForm[]>([]);
  const skipHistory = useRef(false);
  const hubSpecs = typeof window !== "undefined" ? loadListingsHubSettings().propertySpecs : [];

  const deferredForm = useDeferredValue(form);
  const previewListing = formToPreviewListing(deferredForm);

  useEffect(() => {
    if (isNew) {
      setForm(demoListingEditorForm());
      historyRef.current = [];
      setHistoryLen(0);
      setDirty(false);
      return;
    }
    (async () => {
      try {
        const row = await adminFetchListingById(id!);
        if (!row) {
          setError("Listing not found");
          return;
        }
        skipHistory.current = true;
        setForm(listingRowToEditorForm(row));
        historyRef.current = [];
        setHistoryLen(0);
        setDirty(false);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Load failed");
      }
    })();
  }, [id, isNew]);

  function pushHistory(prev: ListingEditorForm) {
    if (skipHistory.current) {
      skipHistory.current = false;
      return;
    }
    historyRef.current = [...historyRef.current.slice(-(HISTORY_MAX - 1)), cloneForm(prev)];
    setHistoryLen(historyRef.current.length);
  }

  function patchForm(updater: (prev: ListingEditorForm) => ListingEditorForm) {
    setForm((prev) => {
      pushHistory(prev);
      setDirty(true);
      return updater(prev);
    });
  }

  function setField<K extends keyof ListingEditorForm>(key: K, value: ListingEditorForm[K]) {
    patchForm((prev) => ({ ...prev, [key]: value }));
  }

  function setSpark<K extends keyof ListingSparkUi>(key: K, value: ListingSparkUi[K]) {
    patchForm((prev) => ({ ...prev, spark: { ...prev.spark, [key]: value } }));
  }

  function undo() {
    const prev = historyRef.current.pop();
    if (!prev) return;
    skipHistory.current = true;
    setForm(prev);
    setHistoryLen(historyRef.current.length);
    setDirty(true);
  }

  function onExit() {
    if (dirty && !window.confirm("Leave without saving? Unsaved changes will be lost.")) return;
    navigate("/admin/listings");
  }

  async function onSave() {
    setBusy(true);
    setError("");
    try {
      const payload = formToSavePayload(form);
      if (!payload.street?.trim() && !payload.title?.trim()) {
        throw new Error("Add a title or street address before saving");
      }
      const row = await adminUpsertListing(payload, isNew ? undefined : id);
      setDirty(false);
      setSavedFlash(true);
      window.setTimeout(() => setSavedFlash(false), 1600);
      if (isNew || row.id !== id) {
        navigate(`/admin/listings/${row.id}`, { replace: true });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setBusy(false);
    }
  }

  async function onHeroFile(file: File | null) {
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const url = await uploadCmsImage("listing-images", file);
      patchForm((prev) => {
        const hero_alt = prev.hero_alt || prev.title || file.name;
        const gallery = prev.gallery.some((g) => g.src === url)
          ? prev.gallery
          : [{ src: url, alt: hero_alt }, ...prev.gallery];
        return { ...prev, hero_image: url, hero_alt, gallery };
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  async function onGalleryFiles(files: FileList | null) {
    if (!files?.length) return;
    setGalleryUploading(true);
    setError("");
    try {
      const uploaded: ListingGalleryImage[] = [];
      for (const file of Array.from(files)) {
        const url = await uploadCmsImage("listing-images", file);
        uploaded.push({ src: url, alt: form.title || file.name.replace(/\.[^.]+$/, "") });
      }
      patchForm((prev) => {
        const gallery = [...prev.gallery, ...uploaded];
        if (!prev.hero_image && gallery[0]) {
          return { ...prev, gallery, hero_image: gallery[0].src, hero_alt: gallery[0].alt };
        }
        return { ...prev, gallery };
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Gallery upload failed");
    } finally {
      setGalleryUploading(false);
    }
  }

  function updateGalleryAt(index: number, patch: Partial<ListingGalleryImage>) {
    patchForm((prev) => ({
      ...prev,
      gallery: prev.gallery.map((img, i) => (i === index ? { ...img, ...patch } : img)),
    }));
  }

  function moveGallery(index: number, dir: -1 | 1) {
    const next = index + dir;
    if (next < 0 || next >= form.gallery.length) return;
    patchForm((prev) => {
      const copy = [...prev.gallery];
      const tmp = copy[index];
      copy[index] = copy[next];
      copy[next] = tmp;
      return { ...prev, gallery: copy };
    });
  }

  function updateFactAt(index: number, patch: Partial<ListingFact>) {
    patchForm((prev) => ({
      ...prev,
      facts: prev.facts.map((f, i) => (i === index ? { ...f, ...patch } : f)),
    }));
  }

  function updateInsightAt(index: number, patch: Partial<ListingInsight>) {
    patchForm((prev) => ({
      ...prev,
      insights: prev.insights.map((item, i) => (i === index ? { ...item, ...patch } : item)),
    }));
  }

  function fillSpecsFromCatalog() {
    const byLabel = new Map(form.facts.map((f) => [f.label.toLowerCase(), f.value]));
    const core: Record<string, string> = {
      bedrooms: form.beds,
      bathrooms: form.baths,
      "square ft.": form.sqft,
      "sq ft": form.sqft,
      stories: form.stories,
      "year built": form.year,
    };
    const next = hubSpecs.map((spec) => ({
      label: spec.name,
      value: byLabel.get(spec.name.toLowerCase()) || core[spec.name.toLowerCase()] || "",
    }));
    setField("facts", next.length ? next : buildFactsFromCore(form));
  }

  const titleLabel = form.title.trim() || form.street.trim() || (isNew ? "New listing" : "Edit listing");

  return (
    <div className="spark-root">
      <div className="spark-topbar" role="banner">
        <div className="spark-topbar-left">
          <span className="spark-brand">Spark</span>
          <span className="spark-title" title={titleLabel}>
            {titleLabel}
          </span>
          {isNew ? <span className="spark-dirty">Demo preview — not saved</span> : null}
          {dirty ? <span className="spark-dirty">Unsaved</span> : null}
          {savedFlash ? <span className="spark-saved">Saved</span> : null}
        </div>
        <div className="spark-topbar-right">
          <button type="button" className="spark-btn spark-btn--ghost" onClick={undo} disabled={!historyLen}>
            Undo
          </button>
          <button type="button" className="spark-btn spark-btn--ghost" onClick={() => setPanelOpen((v) => !v)}>
            {panelOpen ? "Hide design" : "Design"}
          </button>
          <button type="button" className="spark-btn spark-btn--ghost" onClick={onExit}>
            Exit
          </button>
          <button type="button" className="spark-btn spark-btn--save" onClick={() => void onSave()} disabled={busy}>
            {busy ? "Saving…" : "Save"}
          </button>
        </div>
      </div>

      {error ? <div className="spark-error">{error}</div> : null}

      <div className={`spark-body${panelOpen ? "" : " spark-body--full"}`}>
        <div className="spark-canvas" aria-label="Live listing preview">
          <div className="spark-canvas-scale">
            <ListingPageContent listing={previewListing} preview />
          </div>
        </div>

        {panelOpen ? (
          <aside className="spark-panel" aria-label="Design">
            <div className="spark-panel-head">
              <strong>Design</strong>
              <button type="button" className="spark-panel-close" onClick={() => setPanelOpen(false)} aria-label="Close design panel">
                ×
              </button>
            </div>
            <div className="spark-accordion">
              {SPARK_SECTIONS.map((s) => {
                const open = section === s.id;
                return (
                  <div key={s.id} className={`spark-acc${open ? " is-open" : ""}`}>
                    <button
                      type="button"
                      className="spark-acc-trigger"
                      aria-expanded={open}
                      onClick={() => setSection(s.id)}
                    >
                      <span>{s.label}</span>
                      <span aria-hidden="true">{open ? "▴" : "▾"}</span>
                    </button>
                    {open ? (
                      <div className="spark-acc-body">
                        <SparkSectionBody
                          section={s.id}
                          form={form}
                          isNew={isNew}
                          uploading={uploading}
                          galleryUploading={galleryUploading}
                          setField={setField}
                          setSpark={setSpark}
                          patchForm={patchForm}
                          onHeroFile={(f) => void onHeroFile(f)}
                          onGalleryFiles={(f) => void onGalleryFiles(f)}
                          onOpenMediaLibrary={(mode) => setMediaPicker(mode)}
                          updateGalleryAt={updateGalleryAt}
                          moveGallery={moveGallery}
                          updateFactAt={updateFactAt}
                          updateInsightAt={updateInsightAt}
                          fillSpecsFromCatalog={fillSpecsFromCatalog}
                        />
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </aside>
        ) : null}
      </div>

      <MediaPickerModal
        open={mediaPicker !== null}
        title={mediaPicker === "gallery" ? "Add gallery image" : "Choose featured image"}
        onClose={() => setMediaPicker(null)}
        onSelect={(url, alt) => {
          if (mediaPicker === "gallery") {
            patchForm((prev) => {
              const gallery = [...prev.gallery, { src: url, alt: alt || prev.title }];
              if (!prev.hero_image) {
                return { ...prev, gallery, hero_image: url, hero_alt: alt || prev.title };
              }
              return { ...prev, gallery };
            });
            return;
          }
          patchForm((prev) => {
            const hero_alt = alt || prev.hero_alt || prev.title;
            const gallery = prev.gallery.some((g) => g.src === url)
              ? prev.gallery
              : [{ src: url, alt: hero_alt }, ...prev.gallery];
            return { ...prev, hero_image: url, hero_alt, gallery };
          });
        }}
      />
    </div>
  );
}

export default function AdminListingEditPage() {
  return (
    <AdminGate>
      <SparkEditorInner />
    </AdminGate>
  );
}
