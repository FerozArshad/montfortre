export type AmountMode = "percents" | "dollars";
export type TermMode = "y" | "m";
export type PaymentFrequency = "m" | "bw";

export type MortgageInputs = {
  homeValue: number;
  downPayment: number;
  downPaymentType: AmountMode;
  termValue: number;
  termType: TermMode;
  interestRate: number;
  oneTimeExpenses: number;
  oneTimeType: AmountMode;
  startDate: string;
  frequency: PaymentFrequency;
  extraMonthly: number;
  extraMonthlyDate: string;
  extraYearly: number;
  extraYearlyDate: string;
  extraQuarterly: number;
  extraQuarterlyDate: string;
  extraOneTime: number;
  extraOneTimeDate: string;
  homeInsurance: number;
  homeInsuranceType: AmountMode;
  propertyTaxes: number;
  propertyTaxesType: AmountMode;
  hoaMonthly: number;
  pmiYear: number;
  pmiType: AmountMode;
};

export type AmortRow = {
  number: number;
  date: Date;
  principal: number;
  interest: number;
  extra: number;
  insurance: number;
  taxes: number;
  hoa: number;
  pmi: number;
  total: number;
  balance: number;
};

export type MortgageResult = {
  loanAmount: number;
  downPaymentDollars: number;
  oneTimeDollars: number;
  periodsPerYear: number;
  periodPi: number;
  periodInsurance: number;
  periodTaxes: number;
  periodHoa: number;
  periodPmi: number;
  periodExtra: number;
  periodTotal: number;
  pmiRequired: boolean;
  totalPrincipal: number;
  totalInterest: number;
  totalExtra: number;
  totalInsurance: number;
  totalTaxes: number;
  totalHoa: number;
  totalPmi: number;
  totalOfAll: number;
  payoffDate: Date | null;
  schedule: AmortRow[];
};

const CENTS = 100;
const PMI_LTV_CANCEL = 0.78;
const PMI_DOWN_THRESHOLD = 0.2;

function roundMoney(value: number): number {
  return Math.round((value + Number.EPSILON) * CENTS) / CENTS;
}

function parseDate(value: string, fallback: Date): Date {
  if (!value) {
    return new Date(fallback.getFullYear(), fallback.getMonth(), fallback.getDate());
  }
  const parts = value.split("-").map((part) => Number(part));
  if (parts.length !== 3 || parts.some((part) => Number.isNaN(part))) {
    return new Date(fallback.getFullYear(), fallback.getMonth(), fallback.getDate());
  }
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function addPeriods(start: Date, periods: number, frequency: PaymentFrequency): Date {
  if (frequency === "m") {
    return new Date(start.getFullYear(), start.getMonth() + periods, start.getDate());
  }
  const next = new Date(start.getTime());
  next.setDate(next.getDate() + periods * 14);
  return next;
}

function moneyFromMode(amount: number, mode: AmountMode, base: number): number {
  if (mode === "percents") {
    return roundMoney((base * amount) / 100);
  }
  return roundMoney(amount);
}

function sameDayOrAfter(current: Date, start: Date): boolean {
  return current.getTime() >= start.getTime();
}

function monthsBetween(from: Date, to: Date): number {
  return (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
}

function intervalDue(
  current: Date,
  start: Date,
  everyMonths: number,
  lastKey: { value: string },
): boolean {
  if (!sameDayOrAfter(current, start)) {
    return false;
  }
  const elapsed = monthsBetween(start, current);
  if (elapsed < 0 || elapsed % everyMonths !== 0) {
    return false;
  }
  const key = `${current.getFullYear()}-${current.getMonth()}`;
  if (lastKey.value === key) {
    return false;
  }
  lastKey.value = key;
  return true;
}

function extraForPeriod(
  current: Date,
  inputs: MortgageInputs,
  start: Date,
  oneTimeUsed: { value: boolean },
  yearlyKey: { value: string },
  quarterlyKey: { value: string },
): number {
  let extra = 0;
  const monthlyStart = parseDate(inputs.extraMonthlyDate, start);
  const yearlyStart = parseDate(inputs.extraYearlyDate, start);
  const quarterlyStart = parseDate(inputs.extraQuarterlyDate, start);
  const oneTimeStart = parseDate(inputs.extraOneTimeDate, start);

  if (inputs.extraMonthly > 0 && sameDayOrAfter(current, monthlyStart)) {
    extra += inputs.extraMonthly;
  }
  if (inputs.extraYearly > 0 && intervalDue(current, yearlyStart, 12, yearlyKey)) {
    extra += inputs.extraYearly;
  }
  if (inputs.extraQuarterly > 0 && intervalDue(current, quarterlyStart, 3, quarterlyKey)) {
    extra += inputs.extraQuarterly;
  }
  if (inputs.extraOneTime > 0 && !oneTimeUsed.value && sameDayOrAfter(current, oneTimeStart)) {
    extra += inputs.extraOneTime;
    oneTimeUsed.value = true;
  }
  return extra;
}

function periodPayment(loan: number, ratePerPeriod: number, periods: number): number {
  if (periods <= 0 || loan <= 0) {
    return 0;
  }
  if (ratePerPeriod === 0) {
    return roundMoney(loan / periods);
  }
  const factor = (1 + ratePerPeriod) ** periods;
  return roundMoney((loan * ratePerPeriod * factor) / (factor - 1));
}

export function calculateMortgage(inputs: MortgageInputs): MortgageResult {
  const homeValue = Math.max(0, inputs.homeValue);
  const downPaymentDollars = Math.min(homeValue, moneyFromMode(inputs.downPayment, inputs.downPaymentType, homeValue));
  const oneTimeDollars = moneyFromMode(inputs.oneTimeExpenses, inputs.oneTimeType, homeValue);
  const loanAmount = Math.max(0, roundMoney(homeValue - downPaymentDollars));
  const termMonths = inputs.termType === "y" ? Math.max(1, inputs.termValue) * 12 : Math.max(1, inputs.termValue);
  const periodsPerYear = inputs.frequency === "m" ? 12 : 26;
  const periods = inputs.frequency === "m" ? termMonths : Math.round((termMonths / 12) * 26);
  const annualRate = Math.max(0, inputs.interestRate) / 100;
  const ratePerPeriod = annualRate / periodsPerYear;
  const periodPi = periodPayment(loanAmount, ratePerPeriod, periods);
  const annualInsurance = moneyFromMode(inputs.homeInsurance, inputs.homeInsuranceType, homeValue);
  const annualTaxes = moneyFromMode(inputs.propertyTaxes, inputs.propertyTaxesType, homeValue);
  const periodInsurance = roundMoney(annualInsurance / periodsPerYear);
  const periodTaxes = roundMoney(annualTaxes / periodsPerYear);
  const periodHoa = inputs.frequency === "m" ? roundMoney(inputs.hoaMonthly) : roundMoney((inputs.hoaMonthly * 12) / 26);
  const originalLtv = homeValue > 0 ? loanAmount / homeValue : 0;
  const pmiRequiredAtStart = originalLtv > 1 - PMI_DOWN_THRESHOLD;
  const start = parseDate(inputs.startDate, new Date());
  const oneTimeUsed = { value: false };
  const yearlyKey = { value: "" };
  const quarterlyKey = { value: "" };

  const schedule: AmortRow[] = [];
  let balance = loanAmount;
  let totalInterest = 0;
  let totalPrincipal = 0;
  let totalExtra = 0;
  let totalInsurance = 0;
  let totalTaxes = 0;
  let totalHoa = 0;
  let totalPmi = 0;
  let firstPeriodExtra = 0;
  let firstPeriodPmi = 0;

  for (let index = 0; index < periods && balance > 0.005; index += 1) {
    const date = addPeriods(start, index, inputs.frequency);
    const interest = roundMoney(balance * ratePerPeriod);
    let principal = roundMoney(periodPi - interest);
    if (principal > balance) {
      principal = balance;
    }
    const extra = roundMoney(extraForPeriod(date, inputs, start, oneTimeUsed, yearlyKey, quarterlyKey));
    const ltvPercent = homeValue > 0 ? roundMoney((balance / homeValue) * 100) : 0;
    const pmiOn = pmiRequiredAtStart && ltvPercent > PMI_LTV_CANCEL * 100;
    const annualPmi = pmiOn
      ? inputs.pmiType === "percents"
        ? roundMoney((inputs.pmiYear / 100) * balance)
        : roundMoney(inputs.pmiYear)
      : 0;
    const pmi = pmiOn ? roundMoney(annualPmi / periodsPerYear) : 0;
    let appliedExtra = extra;
    if (principal + appliedExtra > balance) {
      appliedExtra = roundMoney(Math.max(0, balance - principal));
    }
    balance = roundMoney(balance - principal - appliedExtra);
    if (balance < 0.005) {
      balance = 0;
    }
    const total = roundMoney(principal + interest + appliedExtra + periodInsurance + periodTaxes + periodHoa + pmi);
    schedule.push({
      number: index + 1,
      date,
      principal,
      interest,
      extra: appliedExtra,
      insurance: periodInsurance,
      taxes: periodTaxes,
      hoa: periodHoa,
      pmi,
      total,
      balance,
    });
    totalInterest += interest;
    totalPrincipal += principal;
    totalExtra += appliedExtra;
    totalInsurance += periodInsurance;
    totalTaxes += periodTaxes;
    totalHoa += periodHoa;
    totalPmi += pmi;
    if (index === 0) {
      firstPeriodExtra = appliedExtra;
      firstPeriodPmi = pmi;
    }
  }

  const payoffDate = schedule.length > 0 ? schedule[schedule.length - 1].date : null;
  const periodTotal = roundMoney(periodPi + firstPeriodExtra + periodInsurance + periodTaxes + periodHoa + firstPeriodPmi);
  const totalOfAll = roundMoney(
    downPaymentDollars +
      oneTimeDollars +
      totalPrincipal +
      totalInterest +
      totalExtra +
      totalInsurance +
      totalTaxes +
      totalHoa +
      totalPmi,
  );

  return {
    loanAmount,
    downPaymentDollars,
    oneTimeDollars,
    periodsPerYear,
    periodPi,
    periodInsurance,
    periodTaxes,
    periodHoa,
    periodPmi: firstPeriodPmi,
    periodExtra: firstPeriodExtra,
    periodTotal,
    pmiRequired: pmiRequiredAtStart,
    totalPrincipal: roundMoney(totalPrincipal),
    totalInterest: roundMoney(totalInterest),
    totalExtra: roundMoney(totalExtra),
    totalInsurance: roundMoney(totalInsurance),
    totalTaxes: roundMoney(totalTaxes),
    totalHoa: roundMoney(totalHoa),
    totalPmi: roundMoney(totalPmi),
    totalOfAll,
    payoffDate,
    schedule,
  };
}

export function formatMoney(value: number): string {
  return value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatPayoffParts(date: Date | null): { monthDay: string; year: string } {
  if (!date) {
    return { monthDay: "—", year: "—" };
  }
  return {
    monthDay: date.toLocaleDateString("en-US", { month: "long", day: "numeric" }),
    year: String(date.getFullYear()),
  };
}

export function formatShortDate(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function todayIso(): string {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}
