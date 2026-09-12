import { ReactNode } from "react";

export function CalculatorField({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="calc-field">
      <span>{label}</span>
      {children}
    </label>
  );
}

export function CalculatorBreakdown({
  lines,
  total,
  totalLabel = "Total",
}: {
  lines: { id: string; label: string; amount: number; pct?: number }[];
  total: number;
  totalLabel?: string;
}) {
  return (
    <div className="calc-breakdown">
      {lines.map((line) => (
        <div className="calc-breakdown-row" key={line.id}>
          <span>{line.label}</span>
          {line.pct !== undefined ? <small>{line.pct.toFixed(2)}%</small> : <span />}
          <span>${line.amount.toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
        </div>
      ))}
      <div className="calc-breakdown-row">
        <strong>{totalLabel}</strong>
        <span />
        <strong>${total.toLocaleString("en-US", { maximumFractionDigits: 0 })}</strong>
      </div>
    </div>
  );
}

function formatMoneyInputDisplay(value: string): string {
  if (!value.trim()) return "";
  const parsed = Number(value.replace(/[^\d.]/g, ""));
  if (!Number.isFinite(parsed)) return "";
  return `$${parsed.toLocaleString("en-US")}`;
}

export function MoneyInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      type="text"
      inputMode="decimal"
      autoComplete="off"
      value={formatMoneyInputDisplay(value)}
      onChange={(e) => {
        const raw = e.target.value.replace(/[$,%\s,]/g, "");
        onChange(raw);
      }}
    />
  );
}

export function NumberInput({
  value,
  onChange,
  step = 1,
}: {
  value: string;
  onChange: (value: string) => void;
  step?: number;
}) {
  return <input type="number" step={step} value={value} onChange={(e) => onChange(e.target.value)} />;
}
