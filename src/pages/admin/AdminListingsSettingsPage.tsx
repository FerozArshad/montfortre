import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AdminGate } from "../../admin/AdminGate";
import { ListingsHubChrome } from "../../admin/listings/ListingsHubChrome";
import {
  DEFAULT_LISTINGS_HUB_SETTINGS,
  DEFAULT_PROPERTY_SPECS,
  loadListingsHubSettings,
  saveListingsHubSettings,
  type HubSpecDefinition,
  type ListingsHubSettings,
  type SpecIconId,
} from "../../admin/listings/listingsHubSettings";

const SPEC_ICONS: SpecIconId[] = ["bed", "bath", "house", "stairs", "garage", "fence", "custom"];

function SettingsInner() {
  const [form, setForm] = useState<ListingsHubSettings>({
    ...DEFAULT_LISTINGS_HUB_SETTINGS,
    propertySpecs: [...DEFAULT_PROPERTY_SPECS],
  });
  const [saved, setSaved] = useState(false);
  const [newSpecName, setNewSpecName] = useState("");
  const [newSpecIcon, setNewSpecIcon] = useState<SpecIconId>("custom");

  useEffect(() => {
    setForm(loadListingsHubSettings());
  }, []);

  function set<K extends keyof ListingsHubSettings>(key: K, value: ListingsHubSettings[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }

  function updateSpec(index: number, patch: Partial<HubSpecDefinition>) {
    set(
      "propertySpecs",
      form.propertySpecs.map((s, i) => (i === index ? { ...s, ...patch } : s)),
    );
  }

  function addSpec() {
    const name = newSpecName.trim();
    if (!name) return;
    set("propertySpecs", [
      ...form.propertySpecs,
      { id: `spec-${Date.now().toString(36)}`, name, icon: newSpecIcon },
    ]);
    setNewSpecName("");
    setNewSpecIcon("custom");
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    saveListingsHubSettings(form);
    setSaved(true);
  }

  return (
    <ListingsHubChrome
      title="Listings Hub settings"
      lede="Mirrors Site Tools → Listings Hub Settings: brand color, property specs catalog, tour label, currency, and new-listing defaults."
      actions={
        <Link className="admin-btn admin-btn--ghost" to="/admin/listings">
          Back to hub
        </Link>
      }
    >
      {saved ? <div className="admin-success">Settings saved for this browser.</div> : null}
      <form className="admin-form" onSubmit={onSubmit}>
        <section className="admin-section">
          <div className="admin-section-head">
            <h2>Brand & display</h2>
            <p>Primary color, tour CTA label, and currency — AgentFire Listings Hub Settings equivalents.</p>
          </div>
          <div className="admin-form-row">
            <label>
              Primary color
              <input type="color" value={form.primaryColor} onChange={(e) => set("primaryColor", e.target.value)} />
            </label>
            <label>
              Tour button label
              <input value={form.tourButtonLabel} onChange={(e) => set("tourButtonLabel", e.target.value)} />
            </label>
          </div>
          <div className="admin-form-row">
            <label>
              Currency
              <select value={form.currency} onChange={(e) => set("currency", e.target.value as ListingsHubSettings["currency"])}>
                <option value="USD">USD</option>
                <option value="CAD">CAD</option>
                <option value="EUR">EUR</option>
              </select>
            </label>
            <label>
              Default tour / Calendly link
              <input value={form.defaultTourHref} onChange={(e) => set("defaultTourHref", e.target.value)} />
            </label>
          </div>
          <div className="admin-form-row">
            <label>
              Filter by price — From
              <input value={form.priceFilterFrom} onChange={(e) => set("priceFilterFrom", e.target.value)} placeholder="0" />
            </label>
            <label>
              Filter by price — To
              <input value={form.priceFilterTo} onChange={(e) => set("priceFilterTo", e.target.value)} placeholder="10000000" />
            </label>
          </div>
        </section>

        <section className="admin-section">
          <div className="admin-section-head">
            <h2>Property specs</h2>
            <p>Spec catalog (name + icon) used when filling listing Property Specs — same idea as AF Add Spec.</p>
          </div>
          {form.propertySpecs.map((spec, i) => (
            <div key={spec.id} className="block-editor-gallery-item">
              <div className="admin-form-row">
                <label>
                  Spec name
                  <input value={spec.name} onChange={(e) => updateSpec(i, { name: e.target.value })} />
                </label>
                <label>
                  Icon
                  <select value={spec.icon} onChange={(e) => updateSpec(i, { icon: e.target.value as SpecIconId })}>
                    {SPEC_ICONS.map((icon) => (
                      <option key={icon} value={icon}>
                        {icon}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <button
                type="button"
                className="admin-btn admin-btn--danger admin-btn--sm"
                onClick={() => set("propertySpecs", form.propertySpecs.filter((_, idx) => idx !== i))}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="admin-form-row">
            <label>
              New spec name
              <input value={newSpecName} onChange={(e) => setNewSpecName(e.target.value)} placeholder="Building Dimensions" />
            </label>
            <label>
              Icon
              <select value={newSpecIcon} onChange={(e) => setNewSpecIcon(e.target.value as SpecIconId)}>
                {SPEC_ICONS.map((icon) => (
                  <option key={icon} value={icon}>
                    {icon}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button type="button" className="admin-btn admin-btn--ghost admin-btn--sm" onClick={addSpec}>
            Add Spec
          </button>
          <button
            type="button"
            className="admin-btn admin-btn--ghost admin-btn--sm"
            onClick={() => {
              set("propertySpecs", [
                ...form.propertySpecs,
                { id: `range-${Date.now().toString(36)}`, name: "Price Range", icon: "custom" },
              ]);
              setSaved(false);
            }}
          >
            Add Range
          </button>
        </section>

        <section className="admin-section">
          <div className="admin-section-head">
            <h2>New listing defaults</h2>
            <p>Pre-filled on Create custom listing.</p>
          </div>
          <div className="admin-form-row">
            <label>
              Default status
              <select value={form.defaultStatus} onChange={(e) => set("defaultStatus", e.target.value)}>
                <option>For Sale</option>
                <option>In Contract</option>
                <option>Coming Soon</option>
                <option>Sold</option>
              </select>
            </label>
            <label>
              Default property type
              <input value={form.defaultPropertyType} onChange={(e) => set("defaultPropertyType", e.target.value)} />
            </label>
          </div>
          <div className="admin-form-row">
            <label>
              Default neighborhood
              <input value={form.defaultNeighborhood} onChange={(e) => set("defaultNeighborhood", e.target.value)} />
            </label>
            <label>
              Default city
              <input value={form.defaultCity} onChange={(e) => set("defaultCity", e.target.value)} />
            </label>
          </div>
          <label>
            Default state
            <input value={form.defaultState} onChange={(e) => set("defaultState", e.target.value)} />
          </label>
        </section>

        <div className="admin-form-actions">
          <div className="admin-form-actions-right">
            <button className="admin-btn" type="submit">
              Update options
            </button>
          </div>
        </div>
      </form>
    </ListingsHubChrome>
  );
}

export default function AdminListingsSettingsPage() {
  return (
    <AdminGate>
      <SettingsInner />
    </AdminGate>
  );
}
