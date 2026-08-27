import type { ListingEditorForm, SparkSectionId } from "./listingEditorForm";
import { buildFactsFromCore } from "./listingEditorForm";
import { ListingNeighborhoodPicker, ListingPropertyTypePicker } from "./ListingOptionPickers";
import { loadListingsHubSettings } from "./listingsHubSettings";
import type { ListingFact, ListingGalleryImage, ListingInsight } from "../../data/listings/types";
import type { ListingSparkUi } from "../../data/listings/sparkUi";
import { slugify } from "../../lib/cms/sanitize";

type Props = {
  section: SparkSectionId;
  form: ListingEditorForm;
  isNew: boolean;
  uploading: boolean;
  galleryUploading: boolean;
  setField: <K extends keyof ListingEditorForm>(key: K, value: ListingEditorForm[K]) => void;
  setSpark: <K extends keyof ListingSparkUi>(key: K, value: ListingSparkUi[K]) => void;
  patchForm: (updater: (prev: ListingEditorForm) => ListingEditorForm) => void;
  onHeroFile: (file: File | null) => void;
  onGalleryFiles: (files: FileList | null) => void;
  onOpenMediaLibrary: (mode: "hero" | "gallery") => void;
  updateGalleryAt: (index: number, patch: Partial<ListingGalleryImage>) => void;
  moveGallery: (index: number, dir: -1 | 1) => void;
  updateFactAt: (index: number, patch: Partial<ListingFact>) => void;
  updateInsightAt: (index: number, patch: Partial<ListingInsight>) => void;
  fillSpecsFromCatalog: () => void;
};

function YesNo({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="spark-check">
      <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  );
}

export function SparkSectionBody(props: Props) {
  const {
    section,
    form,
    isNew,
    uploading,
    galleryUploading,
    setField,
    setSpark,
    patchForm,
    onHeroFile,
    onGalleryFiles,
    onOpenMediaLibrary,
    updateGalleryAt,
    moveGallery,
    updateFactAt,
    updateInsightAt,
    fillSpecsFromCatalog,
  } = props;
  const spark = form.spark;

  if (section === "details") {
    return (
      <>
        <label>
          Listing Address
          <input
            value={form.street}
            onChange={(e) => {
              const street = e.target.value;
              patchForm((prev) => ({
                ...prev,
                street,
                slug: isNew && !prev.slug ? slugify(street) : prev.slug,
                title: prev.title || street,
              }));
            }}
          />
        </label>
        <div className="spark-row">
          <label>
            Listing City
            <input value={form.city} onChange={(e) => setField("city", e.target.value)} />
          </label>
          <label>
            Listing State
            <input value={form.state} onChange={(e) => setField("state", e.target.value)} />
          </label>
        </div>
        <div className="spark-row">
          <label>
            Listing ZIP
            <input value={form.zip} onChange={(e) => setField("zip", e.target.value)} />
          </label>
          <label>
            Listing MLS
            <input value={form.mls} onChange={(e) => setField("mls", e.target.value)} />
          </label>
        </div>
        <label>
          Title (page)
          <input value={form.title} onChange={(e) => setField("title", e.target.value)} />
        </label>
        <label>
          URL slug
          <input
            value={form.slug}
            onChange={(e) => setField("slug", e.target.value)}
            onBlur={() => {
              if (!form.slug.trim()) setField("slug", slugify(form.street || form.title));
            }}
          />
        </label>
        <YesNo label="Custom marker position" value={spark.customMarker} onChange={(v) => setSpark("customMarker", v)} />
        <YesNo
          label="Schedule a viewing button — Show"
          value={form.show_schedule_button}
          onChange={(v) => setField("show_schedule_button", v)}
        />
        <YesNo
          label="Custom Form Disclaimer"
          value={spark.showFormDisclaimer}
          onChange={(v) => setSpark("showFormDisclaimer", v)}
        />
        {spark.showFormDisclaimer ? (
          <>
            <label>
              Disclaimer Text
              <textarea value={spark.disclaimerText} onChange={(e) => setSpark("disclaimerText", e.target.value)} rows={3} />
            </label>
            <YesNo
              label="Show Disclaimer Checkbox"
              value={spark.showDisclaimerCheckbox}
              onChange={(v) => setSpark("showDisclaimerCheckbox", v)}
            />
            <YesNo label="Disclaimer Required" value={spark.disclaimerRequired} onChange={(v) => setSpark("disclaimerRequired", v)} />
          </>
        ) : null}
        <label>
          Video Tour
          <input value={form.video_tour} onChange={(e) => setField("video_tour", e.target.value)} placeholder="https://…" />
        </label>
        <label>
          Price
          <input value={form.price} onChange={(e) => setField("price", e.target.value)} placeholder="$1,250,000" />
        </label>
        <label>
          Price Title
          <input value={form.price_title} onChange={(e) => setField("price_title", e.target.value)} />
        </label>
        <YesNo label="Show Price Title" value={spark.showPriceTitle} onChange={(v) => setSpark("showPriceTitle", v)} />
        <label>
          Price Subtitle
          <input value={form.price_subtitle} onChange={(e) => setField("price_subtitle", e.target.value)} />
        </label>
        <YesNo label="Show Price Subtitle" value={spark.showPriceSubtitle} onChange={(v) => setSpark("showPriceSubtitle", v)} />
        <label>
          Tour / booking link
          <input value={form.tour_href} onChange={(e) => setField("tour_href", e.target.value)} />
        </label>
        <label>
          Tour button label
          <input value={form.tour_button_label} onChange={(e) => setField("tour_button_label", e.target.value)} />
        </label>
        <label>
          Status
          <select value={form.status} onChange={(e) => setField("status", e.target.value)}>
            <option>For Sale</option>
            <option>In Contract</option>
            <option>Coming Soon</option>
            <option>Sold</option>
          </select>
        </label>
        <ListingPropertyTypePicker value={form.property_type} onChange={(v) => setField("property_type", v)} />
        <ListingNeighborhoodPicker value={form.neighborhood} onChange={(v) => setField("neighborhood", v)} />
      </>
    );
  }

  if (section === "header") {
    return (
      <>
        <YesNo
          label="Global Header and Footer — Show"
          value={spark.showGlobalChrome}
          onChange={(v) => setSpark("showGlobalChrome", v)}
        />
        <YesNo label="Map Header — Show" value={spark.showMapHeader} onChange={(v) => setSpark("showMapHeader", v)} />
        <div className="spark-media-actions">
          <button type="button" className="spark-btn spark-btn--ghost spark-btn--block" onClick={() => onOpenMediaLibrary("hero")}>
            Choose from media library
          </button>
        </div>
        <label>
          Upload new image
          <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={(e) => void onHeroFile(e.target.files?.[0] || null)} />
          {uploading ? <span className="spark-muted">Uploading…</span> : null}
        </label>
        <label>
          Featured image URL
          <input value={form.hero_image} onChange={(e) => setField("hero_image", e.target.value)} />
        </label>
        <label>
          Featured alt
          <input value={form.hero_alt} onChange={(e) => setField("hero_alt", e.target.value)} />
        </label>
        {form.hero_image ? <img className="spark-thumb" src={form.hero_image} alt="" /> : null}
        <label>
          Header Background Color
          <input type="color" value={spark.headerBgColor || "#0f1729"} onChange={(e) => setSpark("headerBgColor", e.target.value)} />
        </label>
        <label>
          Initial Map Zoom
          <input value={spark.mapZoom} onChange={(e) => setSpark("mapZoom", e.target.value)} />
        </label>
        <label>
          Map query
          <input value={form.map_query} onChange={(e) => setField("map_query", e.target.value)} />
        </label>
      </>
    );
  }

  if (section === "gallery") {
    return (
      <>
        <p className="spark-muted">Gallery stores image URLs only. Pick from the media library or upload new files.</p>
        <div className="spark-media-actions">
          <button type="button" className="spark-btn spark-btn--ghost spark-btn--block" onClick={() => onOpenMediaLibrary("gallery")}>
            Add from media library
          </button>
        </div>
        <label>
          Upload new images
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            multiple
            onChange={(e) => void onGalleryFiles(e.target.files)}
          />
          {galleryUploading ? <span className="spark-muted">Uploading…</span> : null}
        </label>
        <label>
          Add Video (URL)
          <input value={form.video_tour} onChange={(e) => setField("video_tour", e.target.value)} placeholder="YouTube / Vimeo / MP4 URL" />
        </label>
        <YesNo label="Infinite Slider Mode" value={spark.infiniteSlider} onChange={(v) => setSpark("infiniteSlider", v)} />
        <div className="spark-gallery">
          {form.gallery.map((img, i) => (
            <div key={`${img.src}-${i}`} className="spark-gallery-item">
              {img.src ? <img src={img.src} alt="" /> : null}
              <input value={img.src} onChange={(e) => updateGalleryAt(i, { src: e.target.value })} placeholder="Image URL" />
              <input value={img.alt} onChange={(e) => updateGalleryAt(i, { alt: e.target.value })} placeholder="Alt text" />
              <div className="spark-gallery-actions">
                <button type="button" disabled={i === 0} onClick={() => moveGallery(i, -1)}>
                  ↑
                </button>
                <button type="button" disabled={i >= form.gallery.length - 1} onClick={() => moveGallery(i, 1)}>
                  ↓
                </button>
                <button
                  type="button"
                  onClick={() =>
                    patchForm((prev) => ({
                      ...prev,
                      hero_image: img.src,
                      hero_alt: img.alt || prev.title,
                    }))
                  }
                >
                  Featured
                </button>
                <button
                  type="button"
                  className="is-danger"
                  onClick={() =>
                    patchForm((prev) => ({
                      ...prev,
                      gallery: prev.gallery.filter((_, idx) => idx !== i),
                    }))
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="spark-btn spark-btn--ghost spark-btn--block"
          onClick={() => setField("gallery", [...form.gallery, { src: "", alt: "" }])}
        >
          Add image URL
        </button>
      </>
    );
  }

  if (section === "about") {
    return (
      <>
        <label>
          Tab Title
          <input value={spark.aboutTabTitle} onChange={(e) => setSpark("aboutTabTitle", e.target.value)} />
        </label>
        <label>
          Property Description Title
          <input value={spark.aboutDescriptionTitle} onChange={(e) => setSpark("aboutDescriptionTitle", e.target.value)} />
        </label>
        <label>
          Property Description
          <textarea
            value={form.overview_text}
            onChange={(e) => setField("overview_text", e.target.value)}
            rows={10}
            placeholder="Blank line = new paragraph"
          />
        </label>
        <label>
          Button Label
          <input value={spark.aboutButtonLabel} onChange={(e) => setSpark("aboutButtonLabel", e.target.value)} />
        </label>
        <label>
          Button link (URL)
          <input value={spark.aboutButtonUrl} onChange={(e) => setSpark("aboutButtonUrl", e.target.value)} />
        </label>
        <YesNo label="Show map" value={spark.showAboutMap} onChange={(v) => setSpark("showAboutMap", v)} />
        <label>
          Location blurb
          <textarea value={form.location_blurb} onChange={(e) => setField("location_blurb", e.target.value)} rows={3} />
        </label>
        <label>
          Nearby (one per line)
          <textarea value={form.nearby_text} onChange={(e) => setField("nearby_text", e.target.value)} rows={4} />
        </label>
      </>
    );
  }

  if (section === "specs") {
    const hubSpecs = loadListingsHubSettings().propertySpecs;
    return (
      <>
        <p className="spark-muted">Specs catalog from Listings Hub Settings ({hubSpecs.length} defined).</p>
        <div className="spark-row">
          <label>
            Beds
            <input value={form.beds} onChange={(e) => setField("beds", e.target.value)} />
          </label>
          <label>
            Baths
            <input value={form.baths} onChange={(e) => setField("baths", e.target.value)} />
          </label>
        </div>
        <div className="spark-row">
          <label>
            Square Ft.
            <input value={form.sqft} onChange={(e) => setField("sqft", e.target.value)} />
          </label>
          <label>
            Year Built
            <input value={form.year} onChange={(e) => setField("year", e.target.value)} />
          </label>
        </div>
        <label>
          Stories
          <input value={form.stories} onChange={(e) => setField("stories", e.target.value)} />
        </label>
        {form.facts.map((fact, i) => (
          <div key={i} className="spark-fact">
            <input value={fact.label} onChange={(e) => updateFactAt(i, { label: e.target.value })} placeholder="Spec name" />
            <input value={fact.value} onChange={(e) => updateFactAt(i, { value: e.target.value })} placeholder="Value" />
            <button
              type="button"
              className="is-danger"
              onClick={() =>
                patchForm((prev) => ({
                  ...prev,
                  facts: prev.facts.filter((_, idx) => idx !== i),
                }))
              }
            >
              ×
            </button>
          </div>
        ))}
        <button type="button" className="spark-btn spark-btn--ghost spark-btn--block" onClick={() => setField("facts", [...form.facts, { label: "", value: "" }])}>
          Add Spec
        </button>
        <button type="button" className="spark-btn spark-btn--ghost spark-btn--block" onClick={fillSpecsFromCatalog}>
          Fill from settings catalog
        </button>
        <button type="button" className="spark-btn spark-btn--ghost spark-btn--block" onClick={() => setField("facts", buildFactsFromCore(form))}>
          Fill from details
        </button>
      </>
    );
  }

  if (section === "insights") {
    return (
      <>
        <YesNo label="Show Insights Section" value={spark.showInsightsSection} onChange={(v) => setSpark("showInsightsSection", v)} />
        <label>
          Tab Title
          <input value={spark.insightsTabTitle} onChange={(e) => setSpark("insightsTabTitle", e.target.value)} />
        </label>
        {form.insights.map((item, i) => (
          <div key={i} className="spark-fact">
            <input value={item.title} onChange={(e) => updateInsightAt(i, { title: e.target.value })} placeholder="Title" />
            <input value={item.body} onChange={(e) => updateInsightAt(i, { body: e.target.value })} placeholder="Body" />
            <button
              type="button"
              className="is-danger"
              onClick={() =>
                patchForm((prev) => ({
                  ...prev,
                  insights: prev.insights.filter((_, idx) => idx !== i),
                }))
              }
            >
              ×
            </button>
          </div>
        ))}
        <button
          type="button"
          className="spark-btn spark-btn--ghost spark-btn--block"
          onClick={() => setField("insights", [...form.insights, { title: "", body: "" }])}
        >
          Add insight
        </button>
      </>
    );
  }

  if (section === "area") {
    return (
      <>
        <YesNo label="Show Area Section" value={spark.showAreaSection} onChange={(v) => setSpark("showAreaSection", v)} />
        <label>
          Tab Title
          <input value={spark.areaTabTitle} onChange={(e) => setSpark("areaTabTitle", e.target.value)} />
        </label>
        <label>
          Select An Area / guide name
          <input value={form.area_guide_name} onChange={(e) => setField("area_guide_name", e.target.value)} placeholder="e.g. Harlem" />
        </label>
        <label>
          Custom Area Description
          <textarea value={form.area_description} onChange={(e) => setField("area_description", e.target.value)} rows={8} />
        </label>
      </>
    );
  }

  if (section === "more") {
    return (
      <>
        <YesNo
          label="Show More Details Section"
          value={spark.showMoreDetailsSection}
          onChange={(v) => setSpark("showMoreDetailsSection", v)}
        />
        <label>
          Tab Title
          <input value={spark.moreDetailsTabTitle} onChange={(e) => setSpark("moreDetailsTabTitle", e.target.value)} />
        </label>
        <label>
          Details content
          <textarea
            value={form.more_details_text}
            onChange={(e) => setField("more_details_text", e.target.value)}
            rows={10}
            placeholder="Blank line = new paragraph"
          />
        </label>
      </>
    );
  }

  if (section === "reviews") {
    return (
      <>
        <YesNo label="Show Reviews Section" value={spark.showReviewsSection} onChange={(v) => setSpark("showReviewsSection", v)} />
        <label>
          Layout
          <select value={spark.reviewsLayout} onChange={(e) => setSpark("reviewsLayout", e.target.value)}>
            <option value="grid">Grid</option>
            <option value="slider">Slider</option>
            <option value="list">List</option>
          </select>
        </label>
        <label>
          Custom Reviews Source (URL or note)
          <input value={spark.reviewsSource} onChange={(e) => setSpark("reviewsSource", e.target.value)} placeholder="https://… or Success Stories" />
        </label>
        <label>
          Primary Color
          <input type="color" value={spark.reviewsPrimaryColor || "#b8893a"} onChange={(e) => setSpark("reviewsPrimaryColor", e.target.value)} />
        </label>
        <p className="spark-muted">
          Full AgentFire Reviews CMS (filters, schema, Zillow) is not cloned. This section toggles a public reviews callout and link.
        </p>
      </>
    );
  }

  if (section === "matterport") {
    return (
      <label>
        Matterport Embed
        <textarea
          value={form.matterport_embed}
          onChange={(e) => setField("matterport_embed", e.target.value)}
          rows={6}
          placeholder="iframe HTML or my.matterport.com URL"
        />
      </label>
    );
  }

  return (
    <>
      <YesNo label="Publish live" value={form.published} onChange={(v) => setField("published", v)} />
      <label>
        Sort order
        <input value={form.sort_order} onChange={(e) => setField("sort_order", e.target.value)} />
      </label>
      <label>
        Meta title
        <input value={form.meta_title} onChange={(e) => setField("meta_title", e.target.value)} />
      </label>
      <label>
        Meta description
        <input value={form.meta_description} onChange={(e) => setField("meta_description", e.target.value)} />
      </label>
    </>
  );
}
