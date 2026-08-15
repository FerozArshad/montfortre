import { useMemo, useState } from "react";
import {
  calculateMortgage,
  formatMoney,
  formatPayoffParts,
  formatShortDate,
  todayIso,
  type AmountMode,
  type MortgageInputs,
  type PaymentFrequency,
  type TermMode,
} from "../../lib/mortgageMath";

function parseNumber(value: string): number {
  const cleaned = value.replace(/,/g, "").trim();
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : 0;
}

function Switch<T extends string>({
  value,
  left,
  right,
  leftLabel,
  rightLabel,
  onChange,
}: {
  value: T;
  left: T;
  right: T;
  leftLabel: string;
  rightLabel: string;
  onChange: (next: T) => void;
}) {
  return (
    <div className="mc-switch">
      <button className={value === left ? "is-active" : ""} type="button" onClick={() => onChange(left)}>
        {leftLabel}
      </button>
      <button className={value === right ? "is-active" : ""} type="button" onClick={() => onChange(right)}>
        {rightLabel}
      </button>
    </div>
  );
}

function ToapRow({
  label,
  value,
  total,
  tone,
}: {
  label: string;
  value: number;
  total: number;
  tone: string;
}) {
  const pct = total <= 0 ? 0 : Math.min(100, Math.max(0, (value / total) * 100));
  return (
    <div className={`mc-toap mc-toap--${tone}`}>
      <span>{label}</span>
      <span className="mc-bar" aria-hidden="true">
        <svg viewBox="0 0 100 8" preserveAspectRatio="none">
          <rect className="mc-bar-track" x="0" y="0" width="100" height="8" />
          <rect className="mc-bar-fill" x="0" y="0" width={pct} height="8" />
        </svg>
      </span>
      <strong>${formatMoney(value)}</strong>
    </div>
  );
}

export default function MortgageCalculator() {
  const [homeValue, setHomeValue] = useState("2,000,000");
  const [downPayment, setDownPayment] = useState("12");
  const [downPaymentType, setDownPaymentType] = useState<AmountMode>("percents");
  const [termValue, setTermValue] = useState("30");
  const [termType, setTermType] = useState<TermMode>("y");
  const [interestRate, setInterestRate] = useState("6");
  const [oneTimeExpenses, setOneTimeExpenses] = useState("3");
  const [oneTimeType, setOneTimeType] = useState<AmountMode>("percents");
  const [startDate, setStartDate] = useState(todayIso());
  const [frequency, setFrequency] = useState<PaymentFrequency>("m");
  const [showExtra, setShowExtra] = useState(false);
  const [extraMonthly, setExtraMonthly] = useState("0");
  const [extraMonthlyDate, setExtraMonthlyDate] = useState(todayIso());
  const [extraYearly, setExtraYearly] = useState("0");
  const [extraYearlyDate, setExtraYearlyDate] = useState(todayIso());
  const [extraQuarterly, setExtraQuarterly] = useState("0");
  const [extraQuarterlyDate, setExtraQuarterlyDate] = useState(todayIso());
  const [extraOneTime, setExtraOneTime] = useState("0");
  const [extraOneTimeDate, setExtraOneTimeDate] = useState(todayIso());
  const [homeInsurance, setHomeInsurance] = useState("0.35");
  const [homeInsuranceType, setHomeInsuranceType] = useState<AmountMode>("percents");
  const [propertyTaxes, setPropertyTaxes] = useState("1");
  const [propertyTaxesType, setPropertyTaxesType] = useState<AmountMode>("percents");
  const [hoaMonthly, setHoaMonthly] = useState("0");
  const [pmiYear, setPmiYear] = useState("0.625");
  const [pmiType, setPmiType] = useState<AmountMode>("percents");
  const [asOfIndex, setAsOfIndex] = useState(0);

  const inputs: MortgageInputs = useMemo(
    () => ({
      homeValue: parseNumber(homeValue),
      downPayment: parseNumber(downPayment),
      downPaymentType,
      termValue: parseNumber(termValue),
      termType,
      interestRate: parseNumber(interestRate),
      oneTimeExpenses: parseNumber(oneTimeExpenses),
      oneTimeType,
      startDate,
      frequency,
      extraMonthly: showExtra ? parseNumber(extraMonthly) : 0,
      extraMonthlyDate,
      extraYearly: showExtra ? parseNumber(extraYearly) : 0,
      extraYearlyDate,
      extraQuarterly: showExtra ? parseNumber(extraQuarterly) : 0,
      extraQuarterlyDate,
      extraOneTime: showExtra ? parseNumber(extraOneTime) : 0,
      extraOneTimeDate,
      homeInsurance: parseNumber(homeInsurance),
      homeInsuranceType,
      propertyTaxes: parseNumber(propertyTaxes),
      propertyTaxesType,
      hoaMonthly: parseNumber(hoaMonthly),
      pmiYear: parseNumber(pmiYear),
      pmiType,
    }),
    [
      homeValue,
      downPayment,
      downPaymentType,
      termValue,
      termType,
      interestRate,
      oneTimeExpenses,
      oneTimeType,
      startDate,
      frequency,
      showExtra,
      extraMonthly,
      extraMonthlyDate,
      extraYearly,
      extraYearlyDate,
      extraQuarterly,
      extraQuarterlyDate,
      extraOneTime,
      extraOneTimeDate,
      homeInsurance,
      homeInsuranceType,
      propertyTaxes,
      propertyTaxesType,
      hoaMonthly,
      pmiYear,
      pmiType,
    ],
  );

  const result = useMemo(() => calculateMortgage(inputs), [inputs]);
  const asOf = result.schedule[Math.min(asOfIndex, Math.max(0, result.schedule.length - 1))];
  const payoff = formatPayoffParts(result.payoffDate);
  const freqLabel = frequency === "m" ? "monthly" : "bi-weekly";
  const freqTitle = frequency === "m" ? "Monthly" : "Bi-weekly";
  const homeValueNumber = parseNumber(homeValue);
  const sliderMax = Math.max(10000000, homeValueNumber);

  function resetExtra() {
    setExtraMonthly("0");
    setExtraYearly("0");
    setExtraQuarterly("0");
    setExtraOneTime("0");
    setShowExtra(false);
  }

  return (
    <section id="mortgage-calculator" className="mc-wrap" data-screen-label="Mortgage calculator">
      <div className="mc-inner">
        <h2>Mortgage Calculator</h2>
        <p>Estimate your monthly payment and see how much house you can afford.</p>

        <div className="mc-hero-sum">
          <span className="mc-sum-sign">$</span>
          <span className="mc-sum-value">{formatMoney(result.periodTotal)}</span>
          <span className="mc-sum-caption">
            Your estimated <span>{freqLabel}</span> payment
          </span>
        </div>

        <div className="mc-grid">
          <div className="mc-settings">
            <label className="mc-field">
              <span>Home Value</span>
              <span className="mc-input-wrap">
                <span className="mc-prefix">$</span>
                <input
                  type="text"
                  name="home_value"
                  value={homeValue}
                  onChange={(event) => setHomeValue(event.target.value)}
                />
              </span>
              <input
                className="mc-range"
                type="range"
                min={10000}
                max={sliderMax}
                step={10000}
                value={Math.min(sliderMax, Math.max(10000, homeValueNumber || 10000))}
                onChange={(event) => setHomeValue(event.target.value)}
              />
            </label>

            <label className="mc-field">
              <span>Down Payment</span>
              <span className="mc-input-row">
                <input
                  type="text"
                  name="down_payment"
                  value={downPayment}
                  onChange={(event) => setDownPayment(event.target.value)}
                />
                <Switch
                  value={downPaymentType}
                  left="percents"
                  right="dollars"
                  leftLabel="%"
                  rightLabel="$"
                  onChange={setDownPaymentType}
                />
              </span>
            </label>

            <label className="mc-field">
              <span>Length of Loan</span>
              <span className="mc-input-row">
                <input
                  type="text"
                  name="amortization_period"
                  value={termValue}
                  onChange={(event) => setTermValue(event.target.value)}
                />
                <Switch
                  value={termType}
                  left="y"
                  right="m"
                  leftLabel="Yr"
                  rightLabel="Mo"
                  onChange={setTermType}
                />
              </span>
            </label>

            <label className="mc-field">
              <span>Interest Rate</span>
              <span className="mc-input-wrap mc-input-wrap--right">
                <input
                  type="text"
                  name="interest_rate"
                  value={interestRate}
                  onChange={(event) => setInterestRate(event.target.value)}
                />
                <span className="mc-suffix">%</span>
              </span>
            </label>

            <label className="mc-field">
              <span>One-time expenses</span>
              <span className="mc-input-row">
                <input
                  type="text"
                  name="one_time_expenses"
                  value={oneTimeExpenses}
                  onChange={(event) => setOneTimeExpenses(event.target.value)}
                />
                <Switch
                  value={oneTimeType}
                  left="percents"
                  right="dollars"
                  leftLabel="%"
                  rightLabel="$"
                  onChange={setOneTimeType}
                />
              </span>
            </label>

            <label className="mc-field">
              <span>Start Date</span>
              <input type="date" name="payments_start_date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
            </label>

            <div className="mc-field">
              <span>Payment Frequency</span>
              <Switch
                value={frequency}
                left="m"
                right="bw"
                leftLabel="Monthly"
                rightLabel="Bi-weekly"
                onChange={setFrequency}
              />
            </div>

            <button
              className="mc-extra-toggle"
              type="button"
              onClick={() => setShowExtra((open) => !open)}
            >
              {showExtra ? "Extra Payments" : "+ Add Extra Payments"}
            </button>

            {showExtra ? (
              <div className="mc-extra">
                <label className="mc-field">
                  <span>Monthly or Bi-weekly</span>
                  <span className="mc-input-wrap">
                    <span className="mc-prefix">$</span>
                    <input type="text" value={extraMonthly} onChange={(event) => setExtraMonthly(event.target.value)} />
                  </span>
                  <span>Starting from</span>
                  <input type="date" value={extraMonthlyDate} onChange={(event) => setExtraMonthlyDate(event.target.value)} />
                </label>
                <label className="mc-field">
                  <span>Yearly</span>
                  <span className="mc-input-wrap">
                    <span className="mc-prefix">$</span>
                    <input type="text" value={extraYearly} onChange={(event) => setExtraYearly(event.target.value)} />
                  </span>
                  <span>Starting from</span>
                  <input type="date" value={extraYearlyDate} onChange={(event) => setExtraYearlyDate(event.target.value)} />
                </label>
                <label className="mc-field">
                  <span>Quarterly</span>
                  <span className="mc-input-wrap">
                    <span className="mc-prefix">$</span>
                    <input type="text" value={extraQuarterly} onChange={(event) => setExtraQuarterly(event.target.value)} />
                  </span>
                  <span>Starting from</span>
                  <input type="date" value={extraQuarterlyDate} onChange={(event) => setExtraQuarterlyDate(event.target.value)} />
                </label>
                <label className="mc-field">
                  <span>One-time only</span>
                  <span className="mc-input-wrap">
                    <span className="mc-prefix">$</span>
                    <input type="text" value={extraOneTime} onChange={(event) => setExtraOneTime(event.target.value)} />
                  </span>
                  <span>Starting from</span>
                  <input type="date" value={extraOneTimeDate} onChange={(event) => setExtraOneTimeDate(event.target.value)} />
                </label>
                <button className="mc-extra-remove" type="button" onClick={resetExtra}>
                  [-] Remove extra payments
                </button>
              </div>
            ) : null}
          </div>

          <div className="mc-results">
            <h2>Payment Breakdown</h2>
            <h2>Customize your mortgage payment</h2>
            <div className="mc-break-row">
              <span>Principal &amp; Interest</span>
              <strong>${formatMoney(result.periodPi)}</strong>
            </div>
            <div className="mc-break-row">
              <span>
                Monthly Extra Payment
                <button className="mc-inline-extra" type="button" onClick={() => setShowExtra(true)}>
                  + Add Extra Payments
                </button>
              </span>
              <strong>${formatMoney(result.periodExtra)}</strong>
            </div>
            <label className="mc-break-row">
              <span>Home insurance (per year)</span>
              <span className="mc-input-row">
                <input type="text" value={homeInsurance} onChange={(event) => setHomeInsurance(event.target.value)} />
                <Switch
                  value={homeInsuranceType}
                  left="percents"
                  right="dollars"
                  leftLabel="%"
                  rightLabel="$"
                  onChange={setHomeInsuranceType}
                />
              </span>
            </label>
            <label className="mc-break-row">
              <span>Property Taxes (per year)</span>
              <span className="mc-input-row">
                <input type="text" value={propertyTaxes} onChange={(event) => setPropertyTaxes(event.target.value)} />
                <Switch
                  value={propertyTaxesType}
                  left="percents"
                  right="dollars"
                  leftLabel="%"
                  rightLabel="$"
                  onChange={setPropertyTaxesType}
                />
              </span>
            </label>
            <label className="mc-break-row">
              <span>HOA Fees (per month)</span>
              <span className="mc-input-wrap">
                <span className="mc-prefix">$</span>
                <input type="text" value={hoaMonthly} onChange={(event) => setHoaMonthly(event.target.value)} />
              </span>
            </label>
            <label className="mc-break-row">
              <span>PMI (per year)</span>
              <span className="mc-input-row">
                <input type="text" value={pmiYear} onChange={(event) => setPmiYear(event.target.value)} />
                <Switch
                  value={pmiType}
                  left="percents"
                  right="dollars"
                  leftLabel="%"
                  rightLabel="$"
                  onChange={setPmiType}
                />
              </span>
            </label>
            <div className="mc-break-row mc-break-row--total">
              <span>Total {freqTitle} Payment</span>
              <strong>${formatMoney(result.periodTotal)}</strong>
            </div>

            <h2>Total Of All Payments</h2>
            <ToapRow
              label="Down Payment & One-time Expenses"
              value={result.downPaymentDollars + result.oneTimeDollars}
              total={result.totalOfAll}
              tone="down"
            />
            <ToapRow label="Principal" value={result.totalPrincipal} total={result.totalOfAll} tone="principal" />
            <ToapRow label="Interest" value={result.totalInterest} total={result.totalOfAll} tone="interest" />
            <ToapRow label="Extra Payments" value={result.totalExtra} total={result.totalOfAll} tone="extra" />
            <ToapRow label="Home insurance" value={result.totalInsurance} total={result.totalOfAll} tone="insurance" />
            <ToapRow label="Property taxes" value={result.totalTaxes} total={result.totalOfAll} tone="taxes" />
            <ToapRow label="HOA fees" value={result.totalHoa} total={result.totalOfAll} tone="hoa" />
            <ToapRow
              label={result.pmiRequired ? "PMI" : "PMI (not required)"}
              value={result.totalPmi}
              total={result.totalOfAll}
              tone="pmi"
            />

            <h2>Amortization Schedule</h2>
            <div className="mc-table-wrap">
              <table className="mc-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Principal</th>
                    <th>Interest</th>
                    <th>Extra Payments</th>
                    <th>Remaining Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {result.schedule.map((row) => (
                    <tr key={row.number}>
                      <td>{row.number}</td>
                      <td>{formatShortDate(row.date)}</td>
                      <td>${formatMoney(row.principal)}</td>
                      <td>${formatMoney(row.interest)}</td>
                      <td>${formatMoney(row.extra)}</td>
                      <td>${formatMoney(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mc-payoff">
              <div>
                <h2>Mortgage Payoff Date:</h2>
                <div className="mc-payoff-md">{payoff.monthDay}</div>
                <div className="mc-payoff-year">{payoff.year}</div>
              </div>
              <div>
                <h2>Payment breakdown as of {asOf ? formatShortDate(asOf.date) : ""}</h2>
                {result.schedule.length > 1 ? (
                  <input
                    className="mc-range"
                    type="range"
                    min={0}
                    max={result.schedule.length - 1}
                    value={Math.min(asOfIndex, result.schedule.length - 1)}
                    onChange={(event) => setAsOfIndex(Number(event.target.value))}
                  />
                ) : null}
                <div className="mc-break-row">
                  <span>Remaining Balance</span>
                  <strong>${formatMoney(asOf ? asOf.balance : result.loanAmount)}</strong>
                </div>
                <div className="mc-break-row">
                  <span>Principal</span>
                  <strong>${formatMoney(asOf ? asOf.principal : 0)}</strong>
                </div>
                <div className="mc-break-row">
                  <span>Interest</span>
                  <strong>${formatMoney(asOf ? asOf.interest : 0)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
