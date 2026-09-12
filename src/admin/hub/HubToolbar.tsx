import type { ReactNode } from "react";

type HubBulkBarProps = {
  selectedCount: number;
  onClear: () => void;
  children: ReactNode;
};

export function HubBulkBar({ selectedCount, onClear, children }: HubBulkBarProps) {
  if (!selectedCount) return null;
  return (
    <div className="hub-bulk-bar" role="region" aria-label="Bulk actions">
      <span>
        <strong>{selectedCount}</strong> selected
      </span>
      <div className="hub-bulk-actions">{children}</div>
      <button type="button" className="admin-link-quiet" onClick={onClear}>
        Clear
      </button>
    </div>
  );
}

type HubSortProps = {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
};

export function HubSortSelect({ label, value, options, onChange }: HubSortProps) {
  return (
    <label className="hub-sort">
      <span className="admin-muted">{label}</span>
      <select className="admin-inline-select" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
