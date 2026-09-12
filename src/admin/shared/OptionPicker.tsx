import { useState, type ReactNode } from "react";
import { IconPlus } from "../blocks/EditorIcons";

type Props = {
  label: string;
  icon?: ReactNode;
  value: string;
  options: string[];
  loading?: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
  onAdd?: (name: string) => Promise<string | null>;
};

/** Select + optional “New” value — styled for Spark dark panel. */
export function OptionPicker({
  label,
  icon,
  value,
  options,
  loading = false,
  placeholder = "Name",
  onChange,
  onAdd,
}: Props) {
  const [adding, setAdding] = useState(false);
  const [newName, setNewName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function submitNew() {
    const name = newName.trim();
    if (!name || !onAdd) return;
    setBusy(true);
    setError("");
    try {
      const created = await onAdd(name);
      if (!created) throw new Error("Could not save option.");
      onChange(created);
      setNewName("");
      setAdding(false);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to add");
    } finally {
      setBusy(false);
    }
  }

  const sorted = [...new Set(options.filter(Boolean))].sort((a, b) => a.localeCompare(b));

  return (
    <div className="option-picker">
      <div className="option-picker-label">
        {icon ? <span className="option-picker-icon">{icon}</span> : null}
        <span>{label}</span>
      </div>
      <div className="option-picker-row">
        <select
          className="option-picker-select"
          value={sorted.includes(value) ? value : value || ""}
          disabled={loading}
          onChange={(e) => onChange(e.target.value)}
        >
          {!value || sorted.includes(value) ? null : <option value={value}>{value}</option>}
          {!value ? <option value="">Select…</option> : null}
          {sorted.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        {onAdd ? (
          <button
            type="button"
            className="option-picker-new-btn"
            title={`Add new ${label.toLowerCase()}`}
            aria-expanded={adding}
            onClick={() => setAdding((v) => !v)}
          >
            <IconPlus size={15} />
            <span>New</span>
          </button>
        ) : null}
      </div>
      {adding && onAdd ? (
        <div className="option-picker-add">
          <input
            type="text"
            value={newName}
            placeholder={placeholder}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                void submitNew();
              }
            }}
          />
          <button type="button" className="option-picker-action" disabled={busy || !newName.trim()} onClick={() => void submitNew()}>
            {busy ? "Adding…" : "Add"}
          </button>
          <button
            type="button"
            className="option-picker-action option-picker-action--ghost"
            onClick={() => {
              setAdding(false);
              setNewName("");
              setError("");
            }}
          >
            Cancel
          </button>
        </div>
      ) : null}
      {error ? <p className="option-picker-error">{error}</p> : null}
    </div>
  );
}
