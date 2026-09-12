import { useEffect, useMemo, useState } from "react";
import { formatMoney, parseCalcNumber } from "../../lib/calculatorUtils";
import { calculateRentVsBuy } from "../../lib/rentVsBuyBrownstoneMath";
import { rentalUnitsForBrownstone, rentalUsePctForUnits } from "../../lib/propertyComparisonMath";
import CalculatorEmailResults from "./CalculatorEmailResults";
import { CalculatorField, MoneyInput, NumberInput } from "./shared/CalculatorFields";
import "../../styles/calculator-tools.css";

export default function RentVsBuyBrownstoneCalculator() {
  const [currentRent, setCurrentRent] = useState("6000");
  const [annualRentIncreasePct, setAnnualRentIncreasePct] = useState("3");
  const [purchasePrice, setPurchasePrice] = useState("2000000");
  const [downPaymentPct, setDownPaymentPct] = useState("20");
  const [interestRatePct, setInterestRatePct] = useState("6.5");
  const [termYears, setTermYears] = useState("30");
  const [annualPropertyTaxes, setAnnualPropertyTaxes] = useState("12000");
  const [totalUnits, setTotalUnits] = useState<2 | 3 | 4>(3);
  const [rent1, setRent1] = useState("3500");
  const [rent2, setRent2] = useState("3500");
  const [rent3, setRent3] = useState("0");
  const [monthlyInsurance, setMonthlyInsurance] = useState("500");
  const [monthlyWater, setMonthlyWater] = useState("200");
  const [monthlyCommonUtilities, setMonthlyCommonUtilities] = useState("250");
  const [rentalUsePct, setRentalUsePct] = useState("66.67");
  const [landValuePct, setLandValuePct] = useState("20");
  const [marginalTaxRatePct, setMarginalTaxRatePct] = useState("32");

  useEffect(() => {
    const rentalUnits = rentalUnitsForBrownstone(totalUnits);
    setRentalUsePct(String(Number(rentalUsePctForUnits(totalUnits, rentalUnits).toFixed(2))));
  }, [totalUnits]);

  const unitRents = useMemo(() => {
    const rents = [parseCalcNumber(rent1), parseCalcNumber(rent2), parseCalcNumber(rent3)];
    return rents.slice(0, rentalUnitsForBrownstone(totalUnits));
  }, [rent1, rent2, rent3, totalUnits]);

  const result = useMemo(
    () =>
      calculateRentVsBuy({
        currentRent: parseCalcNumber(currentRent),
        annualRentIncreasePct: parseCalcNumber(annualRentIncreasePct),
        purchasePrice: parseCalcNumber(purchasePrice),
        downPaymentPct: parseCalcNumber(downPaymentPct),
        interestRatePct: parseCalcNumber(interestRatePct),
        termYears: parseCalcNumber(termYears),
        annualPropertyTaxes: parseCalcNumber(annualPropertyTaxes),
        totalUnits,
        unitRents,
        monthlyInsurance: parseCalcNumber(monthlyInsurance),
        monthlyWater: parseCalcNumber(monthlyWater),
        monthlyCommonUtilities: parseCalcNumber(monthlyCommonUtilities),
        rentalUsePct: parseCalcNumber(rentalUsePct),
        landValuePct: parseCalcNumber(landValuePct),
        marginalTaxRatePct: parseCalcNumber(marginalTaxRatePct),
      }),
    [
      currentRent,
      annualRentIncreasePct,
      purchasePrice,
      downPaymentPct,
      interestRatePct,
      termYears,
      annualPropertyTaxes,
      totalUnits,
      unitRents,
      monthlyInsurance,
      monthlyWater,
      monthlyCommonUtilities,
      rentalUsePct,
      landValuePct,
      marginalTaxRatePct,
    ],
  );

  function reset() {
    setCurrentRent("6000");
    setAnnualRentIncreasePct("3");
    setPurchasePrice("2000000");
    setDownPaymentPct("20");
    setInterestRatePct("6.5");
    setTermYears("30");
    setAnnualPropertyTaxes("12000");
    setTotalUnits(3);
    setRent1("3500");
    setRent2("3500");
    setRent3("0");
    setMonthlyInsurance("500");
    setMonthlyWater("200");
    setMonthlyCommonUtilities("250");
    setLandValuePct("20");
    setMarginalTaxRatePct("32");
  }

  return (
    <div className="calc-tool calc-tool--rent" id="rent-vs-buy-calculator" data-screen-label="Rent vs buy brownstone calculator">
      <div className="calc-tool-topbar">
        <div>
          <p className="calc-tool-topbar-kicker">Live estimate</p>
          <h3>NYC rent vs buy</h3>
        </div>
        <div className="calc-actions calc-actions--top">
          <button type="button" className="calc-btn calc-btn--ghost" onClick={reset}>
            Reset
          </button>
          <button type="button" className="calc-btn calc-btn--ghost" onClick={() => window.print()}>
            Print PDF
          </button>
        </div>
      </div>

      <div className="calc-cards calc-cards--3">
        <article className="calc-card">
          <kbd>Net monthly cost to own</kbd>
          <strong>${formatMoney(result.netMonthlyOwnershipCost)}/mo</strong>
          <p>After collecting ${formatMoney(result.netRentalIncome)}/mo from rental units.</p>
        </article>
        <article className="calc-card">
          <kbd>Rental income offset</kbd>
          <strong>${formatMoney(result.netRentalIncome)}/mo</strong>
          <p>From {rentalUnitsForBrownstone(totalUnits)} tenant-occupied unit(s).</p>
        </article>
        <article className="calc-card">
          <kbd>Est. year-1 tax deductions</kbd>
          <strong>${formatMoney(result.yearOneDeductions)}</strong>
          <p>Potential monthly tax benefit ~${formatMoney(result.monthlyTaxBenefit)}/mo.</p>
        </article>
      </div>

      <div className="calc-tool-grid">
        <div className="calc-tool-inputs">
          <div className="calc-tool-section">
            <h4>1 · Current Housing Cost</h4>
            <CalculatorField label="Current Monthly Rent ($)">
              <MoneyInput value={currentRent} onChange={setCurrentRent} />
            </CalculatorField>
            <CalculatorField label="Est. Annual Rent Increase (%)">
              <NumberInput value={annualRentIncreasePct} onChange={setAnnualRentIncreasePct} step={0.1} />
            </CalculatorField>
            <div className="calc-mini-box">
              <div>
                <span>Current annual rent</span>
                <strong>${formatMoney(result.currentAnnualRent)}</strong>
              </div>
              <div>
                <span>5-year rent paid</span>
                <strong>${formatMoney(result.rentOver5Years)}</strong>
              </div>
              <div>
                <span>10-year rent paid</span>
                <strong>${formatMoney(result.rentOver10Years)}</strong>
              </div>
            </div>
          </div>
          <div className="calc-tool-section">
            <h4>2 · Property Purchase & Mortgage</h4>
            <CalculatorField label="Purchase Price ($)">
              <MoneyInput value={purchasePrice} onChange={setPurchasePrice} />
            </CalculatorField>
            <div className="calc-field-row">
              <CalculatorField label="Down Payment (%)">
                <NumberInput value={downPaymentPct} onChange={setDownPaymentPct} step={0.1} />
              </CalculatorField>
              <CalculatorField label="Interest Rate (%)">
                <NumberInput value={interestRatePct} onChange={setInterestRatePct} step={0.01} />
              </CalculatorField>
            </div>
            <div className="calc-field-row">
              <CalculatorField label="Loan Term (years)">
                <select value={termYears} onChange={(e) => setTermYears(e.target.value)}>
                  <option value="15">15 Years</option>
                  <option value="20">20 Years</option>
                  <option value="30">30 Years</option>
                </select>
              </CalculatorField>
              <CalculatorField label="Annual Property Taxes ($)">
                <MoneyInput value={annualPropertyTaxes} onChange={setAnnualPropertyTaxes} />
              </CalculatorField>
            </div>
            <div className="calc-mini-box">
              <div>
                <span>Down payment</span>
                <strong>${formatMoney(result.downPayment)}</strong>
              </div>
              <div>
                <span>Loan amount</span>
                <strong>${formatMoney(result.loanAmount)}</strong>
              </div>
              <div>
                <span>Monthly P&amp;I</span>
                <strong>${formatMoney(result.monthlyPi)}</strong>
              </div>
            </div>
            <p className="calc-inline-tip">
              First-time buyers purchasing 3–4 unit properties under $2M may qualify for as low as 10% down financing
              options.
            </p>
          </div>
          <div className="calc-tool-section">
            <h4>3 · Property Type & Rental Units</h4>
            <div className="calc-radio-row">
              {([2, 3, 4] as const).map((units) => (
                <label className="calc-radio" key={units}>
                  <input type="radio" name="units" checked={totalUnits === units} onChange={() => setTotalUnits(units)} />
                  {units}-Unit ({units - 1} rental{units > 2 ? "s" : ""})
                </label>
              ))}
            </div>
            <CalculatorField label="Rental Unit 1 ($/mo)">
              <MoneyInput value={rent1} onChange={setRent1} />
            </CalculatorField>
            {totalUnits >= 3 ? (
              <CalculatorField label="Rental Unit 2 ($/mo)">
                <MoneyInput value={rent2} onChange={setRent2} />
              </CalculatorField>
            ) : null}
            {totalUnits >= 4 ? (
              <CalculatorField label="Rental Unit 3 ($/mo)">
                <MoneyInput value={rent3} onChange={setRent3} />
              </CalculatorField>
            ) : null}
          </div>
          <div className="calc-tool-section">
            <h4>4 · Monthly Building Expenses</h4>
            <CalculatorField label="Insurance ($/mo)">
              <MoneyInput value={monthlyInsurance} onChange={setMonthlyInsurance} />
            </CalculatorField>
            <CalculatorField label="Water ($/mo)">
              <MoneyInput value={monthlyWater} onChange={setMonthlyWater} />
            </CalculatorField>
            <CalculatorField label="Common Utilities ($/mo)">
              <MoneyInput value={monthlyCommonUtilities} onChange={setMonthlyCommonUtilities} />
            </CalculatorField>
          </div>
          <div className="calc-tool-section">
            <h4>5 · Tax & Depreciation Allocation</h4>
            <CalculatorField label="Rental Use Portion (%)">
              <NumberInput value={rentalUsePct} onChange={setRentalUsePct} step={0.01} />
            </CalculatorField>
            <CalculatorField label="Land Value Assumption (%)">
              <NumberInput value={landValuePct} onChange={setLandValuePct} step={0.1} />
            </CalculatorField>
            <CalculatorField label="Marginal Tax Rate (%)">
              <select value={marginalTaxRatePct} onChange={(e) => setMarginalTaxRatePct(e.target.value)}>
                <option value="24">24%</option>
                <option value="32">32%</option>
                <option value="35">35%</option>
                <option value="37">37%</option>
                <option value="40">Custom 40%</option>
              </select>
            </CalculatorField>
          </div>

          <CalculatorEmailResults
            title="Rent vs Buy Brownstone Analysis"
            summary={`Comparing $${formatMoney(result.currentRent)}/mo rent vs a $${formatMoney(parseCalcNumber(purchasePrice))} ${totalUnits}-unit brownstone. Net ownership cost $${formatMoney(result.netMonthlyOwnershipCost)}/mo; illustrative after-tax $${formatMoney(result.afterTaxMonthlyCost)}/mo.`}
            lines={[
              { label: "Current rent", amount: result.currentRent },
              { label: "Mortgage P&I", amount: result.monthlyPi },
              { label: "Property taxes (monthly)", amount: result.monthlyTaxes },
              { label: "Gross carrying cost", amount: result.grossCarrying },
              { label: "Rental income offset", amount: -result.netRentalIncome },
              { label: "Net out-of-pocket", amount: result.netMonthlyOwnershipCost },
              { label: "Est. Year-1 deductions", amount: result.yearOneDeductions },
              { label: "Illustrative after-tax ownership cost / mo", amount: result.afterTaxMonthlyCost },
            ]}
            totalLabel={
              result.monthlySavingsVsRent >= 0
                ? "Potential monthly savings by owning"
                : "Additional monthly cost to own"
            }
            totalValue={`$${formatMoney(Math.abs(result.monthlySavingsVsRent))}/mo`}
            sourcePage="/nyc-rent-vs-buy-brownstone-calculator/"
          />
        </div>
        <div className="calc-tool-results">
          <div className="calc-total calc-total--hero">
            <div>
              <kbd>Net cost to own</kbd>
              <strong>${formatMoney(result.netMonthlyOwnershipCost)}/mo</strong>
              <span>
                vs ${formatMoney(result.currentRent)}/mo current rent · {totalUnits}-unit brownstone
              </span>
            </div>
          </div>

          <h3>Live Financial Breakdown</h3>

          <div className="calc-compare-pair">
            <div className="calc-compare-box">
              <kbd>Current rent</kbd>
              <strong>${formatMoney(result.currentRent)}/mo</strong>
            </div>
            <div className={`calc-compare-box ${result.monthlySavingsVsRent >= 0 ? "is-winner" : ""}`}>
              <kbd>Net cost to own</kbd>
              <strong>${formatMoney(result.netMonthlyOwnershipCost)}/mo</strong>
            </div>
          </div>
          <div className="calc-highlight">
            <strong>
              {result.monthlySavingsVsRent >= 0
                ? `Potential monthly savings by owning: $${formatMoney(result.monthlySavingsVsRent)}/mo`
                : `Estimated additional monthly cost to own: $${formatMoney(Math.abs(result.monthlySavingsVsRent))}/mo`}
            </strong>
            <span>
              About ${formatMoney(Math.abs(result.annualSavingsVsRent))}/yr{" "}
              {result.monthlySavingsVsRent >= 0 ? "saved" : "extra"} before illustrative tax benefits.
            </span>
          </div>

          <div className="calc-breakdown calc-breakdown--stack">
            <div className="calc-breakdown-row">
              <span>Mortgage P&amp;I</span>
              <span />
              <span>${formatMoney(result.monthlyPi)}</span>
            </div>
            <div className="calc-breakdown-row">
              <span>Property taxes</span>
              <span />
              <span>${formatMoney(result.monthlyTaxes)}</span>
            </div>
            <div className="calc-breakdown-row">
              <span>Gross carrying cost</span>
              <span />
              <span>${formatMoney(result.grossCarrying)}</span>
            </div>
            <div className="calc-breakdown-row">
              <span>Rental income offset</span>
              <span />
              <span>-${formatMoney(result.netRentalIncome)}</span>
            </div>
            <div className="calc-breakdown-row">
              <strong>Net out-of-pocket</strong>
              <span />
              <strong>${formatMoney(result.netMonthlyOwnershipCost)}</strong>
            </div>
          </div>

          <h4 className="calc-subheading">Estimated Rental Property Tax Deductions</h4>
          <p className="calc-section-note">
            Estimated Year-1 deductions associated with the {result.rentalUsePct.toFixed(2)}% rental portion.
          </p>
          <div className="calc-breakdown calc-breakdown--stack">
            <div className="calc-breakdown-row">
              <span>Rental portion mortgage interest</span>
              <span />
              <span>${formatMoney(result.tax.yearOneInterest)}</span>
            </div>
            <div className="calc-breakdown-row">
              <span>Rental portion property taxes</span>
              <span />
              <span>${formatMoney(result.tax.yearOneTaxes)}</span>
            </div>
            <div className="calc-breakdown-row">
              <span>Rental portion insurance</span>
              <span />
              <span>${formatMoney(result.tax.yearOneInsurance)}</span>
            </div>
            <div className="calc-breakdown-row">
              <span>Rental portion water &amp; utilities</span>
              <span />
              <span>${formatMoney(result.tax.yearOneUtilities)}</span>
            </div>
            <div className="calc-breakdown-row">
              <span>Straight-line depreciation (27.5 yr)</span>
              <span />
              <span>${formatMoney(result.tax.yearOneDepreciation)}</span>
            </div>
            <div className="calc-breakdown-row">
              <strong>Est. Year-1 deductions</strong>
              <span />
              <strong>${formatMoney(result.yearOneDeductions)}</strong>
            </div>
            <div className="calc-breakdown-row">
              <span>Theoretical tax value ({marginalTaxRatePct}% bracket)</span>
              <span />
              <span>${formatMoney(result.tax.theoreticalTaxValue)}</span>
            </div>
          </div>

          <div className="calc-highlight">
            <strong>Illustrative after-tax ownership cost: ${formatMoney(result.afterTaxMonthlyCost)}/mo</strong>
            <span>
              Cash cost to own minus theoretical monthly tax savings (~${formatMoney(result.monthlyTaxBenefit)}/mo).
              Illustrative only.
            </span>
          </div>

          <div className="calc-strategy-cta">
            <h4>Want to find a brownstone that works with these numbers?</h4>
            <p>
              Stanley Montfort specializes in helping NYC buyers evaluate 2–4 unit townhouses based on true net cost
              after rental income.
            </p>
            <div className="calc-actions">
              <a className="calc-btn calc-btn--gold" href="https://calendly.com/montfort">
                Book a Brownstone Strategy Call
              </a>
              <a className="calc-btn calc-btn--ghost" href="/harlem-brownstones-for-sale/">
                See Available Brownstones
              </a>
            </div>
          </div>

          <p className="calc-disclaimer">
            Tax estimates are educational and illustrative only — not tax, legal, or mortgage advice. Actual deductions
            depend on basis, land allocation, rental vs. personal use, and passive activity rules. Consult a CPA.
            Ownership cost estimates are not a guarantee of performance, financing, or rental income.
          </p>
        </div>
      </div>
    </div>
  );
}
