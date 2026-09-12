import { useMemo, useState } from "react";
import { formatMoney, parseCalcNumber } from "../../lib/calculatorUtils";
import { calculateCondoVsBrownstone } from "../../lib/condoVsBrownstoneMath";
import { rentalUnitsForBrownstone } from "../../lib/propertyComparisonMath";
import CalculatorEmailResults from "./CalculatorEmailResults";
import { CalculatorField, MoneyInput, NumberInput } from "./shared/CalculatorFields";
import "../../styles/calculator-tools.css";

const DEFAULTS = {
  condoPrice: "1500000",
  condoDown: "20",
  condoRate: "6.25",
  condoTerm: "30",
  condoClosing: "3",
  condoTaxes: "1500",
  condoHoa: "1500",
  condoInsurance: "200",
  condoReserve: "0.25",
  condoAppreciation: "3",
  brownstonePrice: "2500000",
  brownstoneDown: "20",
  brownstoneRate: "6.25",
  brownstoneTerm: "30",
  brownstoneUnits: 3 as 2 | 3 | 4,
  brownstoneClosing: "3",
  brownstoneTaxes: "1100",
  brownstoneInsurance: "650",
  brownstoneReserve: "1",
  brownstoneUtilities: "500",
  brownstoneAppreciation: "3",
  rent2: "3500",
  rent3: "3500",
  rent4: "0",
  vacancyPct: "5",
  rentGrowthPct: "3",
};

export default function CondoVsBrownstoneCalculator() {
  const [horizonYears, setHorizonYears] = useState<5 | 10>(10);

  const [condoPrice, setCondoPrice] = useState(DEFAULTS.condoPrice);
  const [condoDown, setCondoDown] = useState(DEFAULTS.condoDown);
  const [condoRate, setCondoRate] = useState(DEFAULTS.condoRate);
  const [condoTerm, setCondoTerm] = useState(DEFAULTS.condoTerm);
  const [condoClosing, setCondoClosing] = useState(DEFAULTS.condoClosing);
  const [condoTaxes, setCondoTaxes] = useState(DEFAULTS.condoTaxes);
  const [condoHoa, setCondoHoa] = useState(DEFAULTS.condoHoa);
  const [condoInsurance, setCondoInsurance] = useState(DEFAULTS.condoInsurance);
  const [condoReserve, setCondoReserve] = useState(DEFAULTS.condoReserve);
  const [condoAppreciation, setCondoAppreciation] = useState(DEFAULTS.condoAppreciation);

  const [brownstonePrice, setBrownstonePrice] = useState(DEFAULTS.brownstonePrice);
  const [brownstoneDown, setBrownstoneDown] = useState(DEFAULTS.brownstoneDown);
  const [brownstoneRate, setBrownstoneRate] = useState(DEFAULTS.brownstoneRate);
  const [brownstoneTerm, setBrownstoneTerm] = useState(DEFAULTS.brownstoneTerm);
  const [brownstoneUnits, setBrownstoneUnits] = useState<2 | 3 | 4>(DEFAULTS.brownstoneUnits);
  const [brownstoneClosing, setBrownstoneClosing] = useState(DEFAULTS.brownstoneClosing);
  const [brownstoneTaxes, setBrownstoneTaxes] = useState(DEFAULTS.brownstoneTaxes);
  const [brownstoneInsurance, setBrownstoneInsurance] = useState(DEFAULTS.brownstoneInsurance);
  const [brownstoneReserve, setBrownstoneReserve] = useState(DEFAULTS.brownstoneReserve);
  const [brownstoneUtilities, setBrownstoneUtilities] = useState(DEFAULTS.brownstoneUtilities);
  const [brownstoneAppreciation, setBrownstoneAppreciation] = useState(DEFAULTS.brownstoneAppreciation);
  const [rent2, setRent2] = useState(DEFAULTS.rent2);
  const [rent3, setRent3] = useState(DEFAULTS.rent3);
  const [rent4, setRent4] = useState(DEFAULTS.rent4);
  const [vacancyPct, setVacancyPct] = useState(DEFAULTS.vacancyPct);
  const [rentGrowthPct, setRentGrowthPct] = useState(DEFAULTS.rentGrowthPct);

  const result = useMemo(() => {
    const rents = [parseCalcNumber(rent2), parseCalcNumber(rent3), parseCalcNumber(rent4)];
    return calculateCondoVsBrownstone(
      {
        purchasePrice: parseCalcNumber(condoPrice),
        downPaymentPct: parseCalcNumber(condoDown),
        interestRatePct: parseCalcNumber(condoRate),
        termYears: parseCalcNumber(condoTerm),
        closingCostPct: parseCalcNumber(condoClosing),
        monthlyTaxes: parseCalcNumber(condoTaxes),
        monthlyHoa: parseCalcNumber(condoHoa),
        monthlyInsurance: parseCalcNumber(condoInsurance),
        annualMaintenanceReservePct: parseCalcNumber(condoReserve),
        appreciationPct: parseCalcNumber(condoAppreciation),
      },
      {
        purchasePrice: parseCalcNumber(brownstonePrice),
        downPaymentPct: parseCalcNumber(brownstoneDown),
        interestRatePct: parseCalcNumber(brownstoneRate),
        termYears: parseCalcNumber(brownstoneTerm),
        totalUnits: brownstoneUnits,
        closingCostPct: parseCalcNumber(brownstoneClosing),
        monthlyTaxes: parseCalcNumber(brownstoneTaxes),
        monthlyInsurance: parseCalcNumber(brownstoneInsurance),
        annualMaintenanceReservePct: parseCalcNumber(brownstoneReserve),
        monthlyOwnerUtilities: parseCalcNumber(brownstoneUtilities),
        appreciationPct: parseCalcNumber(brownstoneAppreciation),
        unitRents: rents,
        vacancyPct: parseCalcNumber(vacancyPct),
        rentGrowthPct: parseCalcNumber(rentGrowthPct),
      },
      horizonYears,
    );
  }, [
    condoPrice, condoDown, condoRate, condoTerm, condoClosing, condoTaxes, condoHoa, condoInsurance, condoReserve, condoAppreciation,
    brownstonePrice, brownstoneDown, brownstoneRate, brownstoneTerm, brownstoneUnits, brownstoneClosing, brownstoneTaxes,
    brownstoneInsurance, brownstoneReserve, brownstoneUtilities, brownstoneAppreciation, rent2, rent3, rent4, vacancyPct, rentGrowthPct, horizonYears,
  ]);

  const rentalCount = rentalUnitsForBrownstone(brownstoneUnits);
  const rentalUnitLabel = rentalCount === 1 ? "Unit" : "Units";

  function reset() {
    setHorizonYears(10);
    setCondoPrice(DEFAULTS.condoPrice);
    setCondoDown(DEFAULTS.condoDown);
    setCondoRate(DEFAULTS.condoRate);
    setCondoTerm(DEFAULTS.condoTerm);
    setCondoClosing(DEFAULTS.condoClosing);
    setCondoTaxes(DEFAULTS.condoTaxes);
    setCondoHoa(DEFAULTS.condoHoa);
    setCondoInsurance(DEFAULTS.condoInsurance);
    setCondoReserve(DEFAULTS.condoReserve);
    setCondoAppreciation(DEFAULTS.condoAppreciation);
    setBrownstonePrice(DEFAULTS.brownstonePrice);
    setBrownstoneDown(DEFAULTS.brownstoneDown);
    setBrownstoneRate(DEFAULTS.brownstoneRate);
    setBrownstoneTerm(DEFAULTS.brownstoneTerm);
    setBrownstoneUnits(DEFAULTS.brownstoneUnits);
    setBrownstoneClosing(DEFAULTS.brownstoneClosing);
    setBrownstoneTaxes(DEFAULTS.brownstoneTaxes);
    setBrownstoneInsurance(DEFAULTS.brownstoneInsurance);
    setBrownstoneReserve(DEFAULTS.brownstoneReserve);
    setBrownstoneUtilities(DEFAULTS.brownstoneUtilities);
    setBrownstoneAppreciation(DEFAULTS.brownstoneAppreciation);
    setRent2(DEFAULTS.rent2);
    setRent3(DEFAULTS.rent3);
    setRent4(DEFAULTS.rent4);
    setVacancyPct(DEFAULTS.vacancyPct);
    setRentGrowthPct(DEFAULTS.rentGrowthPct);
  }

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "NYC Condo vs Brownstone Calculator",
          text: "Check out my NYC Condo vs. Brownstone monthly carrying cost analysis!",
          url,
        });
        return;
      } catch {
        // fall through to clipboard
      }
    }
    await navigator.clipboard.writeText(url);
  }

  return (
    <div className="calc-tool calc-tool--compare" id="condo-vs-brownstone-calculator" data-screen-label="Condo vs brownstone calculator">
      <div className="calc-tool-topbar">
        <div>
          <p className="calc-tool-topbar-kicker">Live estimate</p>
          <h3>Condo vs brownstone</h3>
        </div>
        <div className="calc-actions calc-actions--top">
          <button type="button" className="calc-btn calc-btn--ghost" onClick={reset}>
            Reset
          </button>
          <button type="button" className="calc-btn calc-btn--ghost" onClick={() => void share()}>
            Share
          </button>
          <button type="button" className="calc-btn calc-btn--ghost" onClick={() => window.print()}>
            Print PDF
          </button>
        </div>
      </div>

      <div className="calc-tool-shell">
        <div className="calc-compare-pair calc-compare-pair--hero">
          <div className={`calc-compare-box ${!result.isBrownstoneCheaper ? "is-winner" : ""}`}>
            <kbd>NYC Condo{!result.isBrownstoneCheaper ? " · Cheaper Option" : ""}</kbd>
            <strong>${formatMoney(result.condo.effectiveMonthly)}/mo</strong>
            <p>Total monthly carrying cost</p>
          </div>
          <div className={`calc-compare-box ${result.isBrownstoneCheaper ? "is-winner" : ""}`}>
            <kbd>2–4 Unit Brownstone{result.isBrownstoneCheaper ? " · Cheaper Effective Cost" : ""}</kbd>
            <strong>${formatMoney(result.brownstone.effectiveMonthly)}/mo</strong>
            <p>After ${formatMoney(result.brownstone.netRentalIncome)}/mo net rent</p>
          </div>
        </div>

        <div className="calc-highlight">
          <strong>
            {result.isBrownstoneCheaper
              ? `Brownstone effective cost is ~$${formatMoney(result.monthlySavingsWithBrownstone)}/mo lower ($${formatMoney(result.annualSavingsWithBrownstone)}/yr)`
              : `Condo costs ~$${formatMoney(Math.abs(result.monthlySavingsWithBrownstone))}/mo less on these assumptions`}
          </strong>
          <span>
            Don’t compare purchase price alone — compare what you actually pay after rental income.
          </span>
        </div>

        <div className="calc-actions calc-actions--toolbar">
          <button
            type="button"
            className={`calc-btn ${horizonYears === 5 ? "calc-btn--gold" : "calc-btn--ghost"}`}
            onClick={() => setHorizonYears(5)}
          >
            5 Year Horizon
          </button>
          <button
            type="button"
            className={`calc-btn ${horizonYears === 10 ? "calc-btn--gold" : "calc-btn--ghost"}`}
            onClick={() => setHorizonYears(10)}
          >
            10 Year Horizon
          </button>
        </div>
      </div>

      <div className="calc-compare-grid">
        <div className="calc-compare-panel">
          <h4>NYC Condo</h4>
          <CalculatorField label="Purchase Price">
            <MoneyInput value={condoPrice} onChange={setCondoPrice} />
          </CalculatorField>
          <div className="calc-field-row">
            <CalculatorField label="Down Payment (%)">
              <NumberInput value={condoDown} onChange={setCondoDown} step={0.1} />
            </CalculatorField>
            <CalculatorField label="Interest Rate (%)">
              <NumberInput value={condoRate} onChange={setCondoRate} step={0.01} />
            </CalculatorField>
          </div>
          <div className="calc-mini-box">
            <div>
              <span>Down payment</span>
              <strong>${formatMoney(result.condo.downPayment)}</strong>
            </div>
            <div>
              <span>Mortgage loan</span>
              <strong>${formatMoney(result.condo.loanAmount)}</strong>
            </div>
          </div>
          <div className="calc-field-row">
            <CalculatorField label="Loan Term (years)">
              <select value={condoTerm} onChange={(e) => setCondoTerm(e.target.value)}>
                <option value="30">30 Years Fixed</option>
                <option value="15">15 Years Fixed</option>
              </select>
            </CalculatorField>
            <CalculatorField label="Buyer Closing Costs (%)">
              <NumberInput value={condoClosing} onChange={setCondoClosing} step={0.1} />
            </CalculatorField>
          </div>
          <CalculatorField label="Monthly Taxes">
            <MoneyInput value={condoTaxes} onChange={setCondoTaxes} />
          </CalculatorField>
          <CalculatorField label="Monthly HOA / Common Charges">
            <MoneyInput value={condoHoa} onChange={setCondoHoa} />
          </CalculatorField>
          <CalculatorField label="Monthly Insurance">
            <MoneyInput value={condoInsurance} onChange={setCondoInsurance} />
          </CalculatorField>
          <div className="calc-field-row">
            <CalculatorField label="Annual Maintenance Reserve (%)">
              <NumberInput value={condoReserve} onChange={setCondoReserve} step={0.05} />
            </CalculatorField>
            <CalculatorField label="Expected Annual Appreciation (%)">
              <NumberInput value={condoAppreciation} onChange={setCondoAppreciation} step={0.1} />
            </CalculatorField>
          </div>
        </div>
        <div className="calc-compare-panel">
          <h4>2–4 Unit NYC Brownstone</h4>
          <CalculatorField label="Purchase Price">
            <MoneyInput value={brownstonePrice} onChange={setBrownstonePrice} />
          </CalculatorField>
          <div className="calc-field-row">
            <CalculatorField label="Down Payment (%)">
              <NumberInput value={brownstoneDown} onChange={setBrownstoneDown} step={0.1} />
            </CalculatorField>
            <CalculatorField label="Interest Rate (%)">
              <NumberInput value={brownstoneRate} onChange={setBrownstoneRate} step={0.01} />
            </CalculatorField>
          </div>
          <div className="calc-mini-box">
            <div>
              <span>Down payment</span>
              <strong>${formatMoney(result.brownstone.downPayment)}</strong>
            </div>
            <div>
              <span>Mortgage loan</span>
              <strong>${formatMoney(result.brownstone.loanAmount)}</strong>
            </div>
          </div>
          <div className="calc-field-row">
            <CalculatorField label="Loan Term (years)">
              <select value={brownstoneTerm} onChange={(e) => setBrownstoneTerm(e.target.value)}>
                <option value="30">30 Years Fixed</option>
                <option value="15">15 Years Fixed</option>
              </select>
            </CalculatorField>
            <CalculatorField label="Buyer Closing Costs (%)">
              <NumberInput value={brownstoneClosing} onChange={setBrownstoneClosing} step={0.1} />
            </CalculatorField>
          </div>
          <CalculatorField label="Number of Units">
            <select
              value={brownstoneUnits}
              onChange={(e) => setBrownstoneUnits(Number(e.target.value) as 2 | 3 | 4)}
            >
              <option value={2}>2 Units (1 Rental)</option>
              <option value={3}>3 Units (2 Rentals)</option>
              <option value={4}>4 Units (3 Rentals)</option>
            </select>
          </CalculatorField>
          <CalculatorField label="Monthly Taxes">
            <MoneyInput value={brownstoneTaxes} onChange={setBrownstoneTaxes} />
          </CalculatorField>
          <CalculatorField label="Monthly Building Insurance">
            <MoneyInput value={brownstoneInsurance} onChange={setBrownstoneInsurance} />
          </CalculatorField>
          <CalculatorField label="Monthly Owner-Paid Utilities">
            <MoneyInput value={brownstoneUtilities} onChange={setBrownstoneUtilities} />
          </CalculatorField>
          <div className="calc-field-row">
            <CalculatorField label="Annual Maintenance Reserve (%)">
              <NumberInput value={brownstoneReserve} onChange={setBrownstoneReserve} step={0.05} />
            </CalculatorField>
            <CalculatorField label="Expected Annual Appreciation (%)">
              <NumberInput value={brownstoneAppreciation} onChange={setBrownstoneAppreciation} step={0.1} />
            </CalculatorField>
          </div>
        </div>
      </div>

      <div className="calc-tool-section calc-tool-section--inset">
        <h4>
          Income From the Other {rentalCount} {rentalUnitLabel}
        </h4>
        <div className="calc-field-row">
          {rentalCount >= 1 ? (
            <CalculatorField label="Apartment 2 Rent">
              <MoneyInput value={rent2} onChange={setRent2} />
            </CalculatorField>
          ) : null}
          {rentalCount >= 2 ? (
            <CalculatorField label="Apartment 3 Rent">
              <MoneyInput value={rent3} onChange={setRent3} />
            </CalculatorField>
          ) : null}
          {rentalCount >= 3 ? (
            <CalculatorField label="Apartment 4 Rent">
              <MoneyInput value={rent4} onChange={setRent4} />
            </CalculatorField>
          ) : null}
          <CalculatorField label="Vacancy Allowance (%)">
            <NumberInput value={vacancyPct} onChange={setVacancyPct} step={0.1} />
          </CalculatorField>
          <CalculatorField label="Annual Rent Growth (%)">
            <NumberInput value={rentGrowthPct} onChange={setRentGrowthPct} step={0.1} />
          </CalculatorField>
        </div>
        <div className="calc-mini-box">
          <div>
            <span>Gross monthly rent</span>
            <strong>${formatMoney(result.brownstone.grossRentalIncome)}</strong>
          </div>
          <div>
            <span>Less vacancy</span>
            <strong>-${formatMoney(result.brownstone.vacancyAllowance)}</strong>
          </div>
          <div>
            <span>Effective monthly rent</span>
            <strong>${formatMoney(result.brownstone.netRentalIncome)}</strong>
          </div>
        </div>
      </div>

      <div className="calc-tool-section calc-tool-section--inset">
        <h4>Where Your Money Is Going</h4>
        <div className="calc-compare-grid">
          <div className="calc-breakdown calc-breakdown--stack">
            <div className="calc-breakdown-row"><span>Mortgage P&amp;I</span><span /><span>${formatMoney(result.condo.monthlyPi)}</span></div>
            <div className="calc-breakdown-row"><span>Property Taxes</span><span /><span>${formatMoney(result.condo.monthlyTaxes)}</span></div>
            <div className="calc-breakdown-row"><span>Common Charges / HOA</span><span /><span>${formatMoney(result.condo.monthlyHoaOrUtilities)}</span></div>
            <div className="calc-breakdown-row"><span>Homeowners Insurance</span><span /><span>${formatMoney(result.condo.monthlyInsurance)}</span></div>
            <div className="calc-breakdown-row"><span>Maintenance Reserve</span><span /><span>${formatMoney(result.condo.monthlyReserve)}</span></div>
            <div className="calc-breakdown-row"><strong>Condo total</strong><span /><strong>${formatMoney(result.condo.effectiveMonthly)}</strong></div>
          </div>
          <div className="calc-breakdown calc-breakdown--stack">
            <div className="calc-breakdown-row"><span>Mortgage P&amp;I</span><span /><span>${formatMoney(result.brownstone.monthlyPi)}</span></div>
            <div className="calc-breakdown-row"><span>Property Taxes</span><span /><span>${formatMoney(result.brownstone.monthlyTaxes)}</span></div>
            <div className="calc-breakdown-row"><span>Building Insurance</span><span /><span>${formatMoney(result.brownstone.monthlyInsurance)}</span></div>
            <div className="calc-breakdown-row"><span>Maintenance Reserve</span><span /><span>${formatMoney(result.brownstone.monthlyReserve)}</span></div>
            <div className="calc-breakdown-row"><span>Owner-Paid Utilities</span><span /><span>${formatMoney(result.brownstone.monthlyHoaOrUtilities)}</span></div>
            <div className="calc-breakdown-row"><span>Rental Income Offset</span><span /><span>-${formatMoney(result.brownstone.netRentalIncome)}</span></div>
            <div className="calc-breakdown-row"><strong>Brownstone effective</strong><span /><strong>${formatMoney(result.brownstone.effectiveMonthly)}</strong></div>
          </div>
        </div>
      </div>

      <div className="calc-tool-section calc-tool-section--inset">
        <h4>What Could You Own in {horizonYears} Years?</h4>
        <div className="calc-compare-grid">
          <div className="calc-breakdown calc-breakdown--stack">
            <div className="calc-breakdown-row"><span>Projected Property Value</span><span /><span>${formatMoney(result.condoProjection.propertyValue)}</span></div>
            <div className="calc-breakdown-row"><span>Remaining Mortgage</span><span /><span>${formatMoney(result.condoProjection.remainingLoan)}</span></div>
            <div className="calc-breakdown-row"><span>Principal Paid Down</span><span /><span>${formatMoney(result.condoProjection.principalPaid)}</span></div>
            <div className="calc-breakdown-row"><span>Estimated Appreciation</span><span /><span>${formatMoney(result.condoProjection.appreciation)}</span></div>
            <div className="calc-breakdown-row"><strong>Projected Owner Equity</strong><span /><strong>${formatMoney(result.condoProjection.equity)}</strong></div>
          </div>
          <div className="calc-breakdown calc-breakdown--stack">
            <div className="calc-breakdown-row"><span>Projected Property Value</span><span /><span>${formatMoney(result.brownstoneProjection.propertyValue)}</span></div>
            <div className="calc-breakdown-row"><span>Remaining Mortgage</span><span /><span>${formatMoney(result.brownstoneProjection.remainingLoan)}</span></div>
            <div className="calc-breakdown-row"><span>Principal Paid Down</span><span /><span>${formatMoney(result.brownstoneProjection.principalPaid)}</span></div>
            <div className="calc-breakdown-row"><span>Estimated Appreciation</span><span /><span>${formatMoney(result.brownstoneProjection.appreciation)}</span></div>
            <div className="calc-breakdown-row"><span>Cumulative Net Rent</span><span /><span>${formatMoney(result.brownstoneProjection.cumulativeNetRent)}</span></div>
            <div className="calc-breakdown-row"><strong>Projected Owner Equity</strong><span /><strong>${formatMoney(result.brownstoneProjection.equity)}</strong></div>
          </div>
        </div>
        <p className="calc-section-note">
          Over {horizonYears} years, brownstone equity is ${formatMoney(Math.abs(result.equityAdvantageBrownstone))}{" "}
          {result.equityAdvantageBrownstone >= 0 ? "higher" : "lower"} than the condo on these assumptions.
        </p>
      </div>

      <div className="calc-psych-shift">
        <kbd>Psychological Shift</kbd>
        <h3>Don’t Compare Purchase Price. Compare What You Actually Pay.</h3>
        <p>
          “The brownstone in this scenario costs ${formatMoney(Math.abs(result.priceDifference))}{" "}
          {result.priceDifference >= 0 ? "more" : "less"} than the condo, but after receiving approximately $
          {formatMoney(result.brownstone.netRentalIncome)}/mo in net rental income, your effective monthly housing
          cost is actually ${formatMoney(Math.abs(result.monthlySavingsWithBrownstone))}{" "}
          {result.isBrownstoneCheaper ? "lower" : "higher"}.”
        </p>
      </div>

      <div className="calc-tool-section calc-tool-section--inset">
        <h4>Rental Leverage</h4>
        <div className="calc-mini-box">
          <div>
            <span>Monthly rental income</span>
            <strong>${formatMoney(result.brownstone.netRentalIncome)}</strong>
          </div>
          <div>
            <span>Annual rental income</span>
            <strong>${formatMoney(result.brownstone.netRentalIncome * 12)}</strong>
          </div>
          <div>
            <span>Carrying costs covered</span>
            <strong>{Math.min(100, result.tenantOffsetPct).toFixed(1)}%</strong>
          </div>
        </div>
        <p className="calc-section-note">
          Your tenants could cover approximately {Math.min(100, result.tenantOffsetPct).toFixed(0)}% of your monthly
          brownstone property carrying expenses.
        </p>
      </div>

      <div className="calc-insight-grid calc-insight-grid--4 calc-tool-section--inset">
        <article className="calc-insight-card">
          <h3>Rental Income</h3>
          <p>Tenants help offset mortgage, taxes, insurance, and operating expenses.</p>
        </article>
        <article className="calc-insight-card">
          <h3>Larger Asset</h3>
          <p>You own the entire building and lot — not just a single apartment.</p>
        </article>
        <article className="calc-insight-card">
          <h3>Appreciation</h3>
          <p>Growth compounds on the full multi-family structure value.</p>
        </article>
        <article className="calc-insight-card">
          <h3>More Control</h3>
          <p>No condo common charges or condo-board budget restrictions.</p>
        </article>
      </div>

      <div className="calc-tool-footer">
        <div className="calc-highlight">
          <strong>
            Based on your numbers: the {result.isBrownstoneCheaper ? "brownstone" : "condo"} has the advantage
          </strong>
          <span>
            {result.isBrownstoneCheaper
              ? "Although the brownstone may have a higher purchase price, income from additional units reduces your effective monthly housing cost while you build equity in a larger NYC property."
              : "Based on your current numbers and rent assumptions, the condo requires a lower net monthly out-of-pocket payment. Adjusting brownstone rents or down payment can shift the long-term wealth calculations."}{" "}
            Projected {horizonYears}-year equity: condo ${formatMoney(result.condoEquity10Y)} vs brownstone $
            {formatMoney(result.brownstoneEquity10Y)}.
          </span>
        </div>

        <CalculatorEmailResults
          title="Condo vs Brownstone Comparison"
          summary={`Condo effective $${formatMoney(result.condo.effectiveMonthly)}/mo vs brownstone effective $${formatMoney(result.brownstone.effectiveMonthly)}/mo. ${result.isBrownstoneCheaper ? "Brownstone" : "Condo"} has the monthly advantage. ${horizonYears}-year equity: condo $${formatMoney(result.condoEquity10Y)} vs brownstone $${formatMoney(result.brownstoneEquity10Y)}.`}
          lines={[
            { label: "Condo effective monthly", amount: result.condo.effectiveMonthly },
            { label: "Brownstone effective monthly", amount: result.brownstone.effectiveMonthly },
            { label: "Brownstone net rental income", amount: result.brownstone.netRentalIncome },
            {
              label: "Monthly advantage",
              amount: Math.abs(result.monthlySavingsWithBrownstone),
              note: result.isBrownstoneCheaper ? "brownstone lower" : "condo lower",
            },
            { label: `Condo projected equity (${horizonYears} yr)`, amount: result.condoEquity10Y },
            { label: `Brownstone projected equity (${horizonYears} yr)`, amount: result.brownstoneEquity10Y },
            {
              label: "Tenant carrying-cost coverage",
              amount: `${Math.min(100, result.tenantOffsetPct).toFixed(0)}%`,
            },
          ]}
          totalLabel="Advantage"
          totalValue={`${result.isBrownstoneCheaper ? "Brownstone" : "Condo"} · $${formatMoney(Math.abs(result.monthlySavingsWithBrownstone))}/mo`}
          sourcePage="/nyc-condo-vs-brownstone-calculator/"
        />
      </div>

      <p className="calc-disclaimer calc-tool-footer">
        This calculator is for educational and illustrative purposes only. Results are estimates based on the
        assumptions entered and are not a guarantee of future performance, property appreciation, rental income,
        financing terms, operating expenses, or investment returns.
      </p>
    </div>
  );
}
