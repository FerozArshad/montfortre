export function parseCalcNumber(value: string | number): number {
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  const cleaned = value.replace(/[$,%\s,]/g, "").trim();
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : 0;
}

export function formatMoney(value: number, decimals = 0): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatMoneySigned(value: number, decimals = 0): string {
  const prefix = value < 0 ? "-$" : "$";
  return `${prefix}${formatMoney(Math.abs(value), decimals)}`;
}

export function formatPercent(value: number, decimals = 2): string {
  return `${value.toFixed(decimals)}%`;
}

/** Standard fixed-rate monthly P&I. */
export function monthlyMortgagePayment(loanAmount: number, annualRatePct: number, termYears: number): number {
  if (loanAmount <= 0) return 0;
  if (annualRatePct <= 0) return loanAmount / (termYears * 12);
  const r = annualRatePct / 100 / 12;
  const n = termYears * 12;
  return (loanAmount * r * (1 + r) ** n) / ((1 + r) ** n - 1);
}

/** Remaining loan balance after N monthly payments. */
export function remainingLoanBalance(
  loanAmount: number,
  annualRatePct: number,
  termYears: number,
  paymentsMade: number,
): number {
  if (loanAmount <= 0) return 0;
  if (paymentsMade <= 0) return loanAmount;
  const totalPayments = termYears * 12;
  if (paymentsMade >= totalPayments) return 0;
  if (annualRatePct <= 0) return Math.max(0, loanAmount - (loanAmount / totalPayments) * paymentsMade);
  const r = annualRatePct / 100 / 12;
  const n = totalPayments;
  const factor = (1 + r) ** paymentsMade;
  return loanAmount * ((1 + r) ** n - factor) / ((1 + r) ** n - 1);
}

/** Year-1 mortgage interest (approximation via first-year amort schedule). */
export function yearOneMortgageInterest(loanAmount: number, annualRatePct: number, termYears: number): number {
  if (loanAmount <= 0) return 0;
  let balance = loanAmount;
  const payment = monthlyMortgagePayment(loanAmount, annualRatePct, termYears);
  const r = annualRatePct / 100 / 12;
  let interest = 0;
  for (let i = 0; i < 12; i += 1) {
    const monthInterest = balance * r;
    interest += monthInterest;
    balance -= payment - monthInterest;
  }
  return interest;
}

export function percentOf(value: number, pct: number): number {
  return (value * pct) / 100;
}

export function pctOfTotal(value: number, total: number): number {
  return total <= 0 ? 0 : (value / total) * 100;
}

export type BreakdownLine = {
  id: string;
  label: string;
  amount: number;
  pct?: number;
  note?: string;
};

export function sumLines(lines: BreakdownLine[]): number {
  return lines.reduce((sum, line) => sum + line.amount, 0);
}
