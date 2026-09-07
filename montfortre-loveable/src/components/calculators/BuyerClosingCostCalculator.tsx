import { useMemo, useState } from "react";
import {
  calculateBuyerClosingCosts,
  type BuyerHousingType,
} from "../../lib/nycBuyerClosingCostMath";
import { formatMoney, parseCalcNumber } from "../../lib/calculatorUtils";
import { CalculatorBreakdown, CalculatorField, MoneyInput, NumberInput } from "./shared/CalculatorFields";
import "../../styles/calculator-tools.css";

const FINANCING_PRESETS = [
  { label: "70%", value: 0.7 },
  { label: "75%", value: 0.75 },
  { label: "80%", value: 0.8 },
  { label: "90%", value: 0.9 },
  { label: "All Cash", value: 0 },
] as const;

const DEFAULTS = {
  purchasePrice: "1500000",
  financingPct: 0.8 as number | "custom",
  customFinancingPct: "80",
  housingType: "condo" as BuyerHousingType,
  buyerAttorneyFee: "3500",
  newConstruction: false,
};

export default function BuyerClosingCostCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(DEFAULTS.purchasePrice);
  const [financingPct, setFinancingPct] = useState<number | "custom">(DEFAULTS.financingPct);
  const [customFinancingPct, setCustomFinancingPct] = useState(DEFAULTS.customFinancingPct);
  const [housingType, setHousingType] = useState<BuyerHousingType>(DEFAULTS.housingType);
  const [buyerAttorneyFee, setBuyerAttorneyFee] = useState(DEFAULTS.buyerAttorneyFee);
  const [newConstruction, setNewConstruction] = useState(DEFAULTS.newConstruction);

  const price = parseCalcNumber(purchasePrice);
  const financedPct = financingPct === "custom" ? parseCalcNumber(customFinancingPct) / 100 : financingPct;
  const amountFinanced = price * financedPct;

  const result = useMemo(
    () =>
      calculateBuyerClosingCosts({
        purchasePrice: price,
        amountFinanced,
        housingType,
        buyerAttorneyFee: parseCalcNumber(buyerAttorneyFee),
        newConstruction,
      }),
    [price, amountFinanced, housingType, buyerAttorneyFee, newConstruction],
  );

  const nonFinancingTotal = result.total - result.financingTotal - result.newConstructionTotal;

  function reset() {
    setPurchasePrice(DEFAULTS.purchasePrice);
    setFinancingPct(DEFAULTS.financingPct);
    setCustomFinancingPct(DEFAULTS.customFinancingPct);
    setHousingType(DEFAULTS.housingType);
    setBuyerAttorneyFee(DEFAULTS.buyerAttorneyFee);
    setNewConstruction(DEFAULTS.newConstruction);
  }

  return (
    <div className="calc-tool" id="buyer-closing-cost-calculator" data-screen-label="Buyer closing cost calculator">
      <div className="calc-tool-grid">
        <div className="calc-tool-inputs">
          <h3>Property Details</h3>
          <CalculatorField label="Purchase Price">
            <MoneyInput value={purchasePrice} onChange={setPurchasePrice} />
          </CalculatorField>
          <CalculatorField label="Amount Financed">
            <MoneyInput
              value={String(Math.round(amountFinanced))}
              onChange={(v) => {
                if (price > 0) {
                  setFinancingPct("custom");
                  setCustomFinancingPct(String((parseCalcNumber(v) / price) * 100));
                }
              }}
            />
          </CalculatorField>
          <div className="calc-tool-section">
            <h4>Financing</h4>
            <div className="calc-radio-row">
              {FINANCING_PRESETS.map((preset) => (
                <label className="calc-radio" key={preset.label}>
                  <input
                    type="radio"
                    name="financing"
                    checked={financingPct === preset.value}
                    onChange={() => setFinancingPct(preset.value)}
                  />
                  {preset.label}
                </label>
              ))}
              <label className="calc-radio">
                <input
                  type="radio"
                  name="financing"
                  checked={financingPct === "custom"}
                  onChange={() => setFinancingPct("custom")}
                />
                Other
              </label>
            </div>
            {financingPct === "custom" ? (
              <CalculatorField label="Custom LTV (%)">
                <NumberInput value={customFinancingPct} onChange={setCustomFinancingPct} step={0.1} />
              </CalculatorField>
            ) : null}
          </div>
          <div className="calc-tool-section">
            <h4>Housing Type</h4>
            <div className="calc-radio-row">
              {(["condo", "coop", "house"] as const).map((type) => (
                <label className="calc-radio" key={type}>
                  <input
                    type="radio"
                    name="housingType"
                    checked={housingType === type}
                    onChange={() => setHousingType(type)}
                  />
                  {type === "coop" ? "Co-op" : type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              ))}
            </div>
          </div>
          <CalculatorField label="Buyer's Attorney Fee">
            <MoneyInput value={buyerAttorneyFee} onChange={setBuyerAttorneyFee} />
          </CalculatorField>
          <label className="calc-radio">
            <input type="checkbox" checked={newConstruction} onChange={(e) => setNewConstruction(e.target.checked)} />
            New construction / sponsor unit
          </label>
          <div className="calc-actions">
            <button type="button" className="calc-btn calc-btn--ghost" onClick={reset}>
              Reset
            </button>
            <button type="button" className="calc-btn calc-btn--ghost" onClick={() => window.print()}>
              Print PDF
            </button>
          </div>
        </div>
        <div className="calc-tool-results">
          <h3>Estimated Closing Costs</h3>
          <div className="calc-total">
            <strong>${formatMoney(result.total)}</strong>
            <span>{result.totalPct.toFixed(2)}% of purchase price</span>
          </div>
          <CalculatorBreakdown lines={result.lines} total={nonFinancingTotal} totalLabel="Subtotal" />
          {result.financingLines.length ? (
            <>
              <h4 className="calc-subheading">Financing Related Costs</h4>
              <CalculatorBreakdown
                lines={result.financingLines}
                total={result.financingTotal}
                totalLabel="Financing total"
              />
            </>
          ) : null}
          {result.newConstructionLines.length ? (
            <>
              <h4 className="calc-subheading">New Construction Related Costs</h4>
              <CalculatorBreakdown
                lines={result.newConstructionLines}
                total={result.newConstructionTotal}
                totalLabel="Sponsor / transfer total"
              />
            </>
          ) : null}
          <div className="calc-highlight">
            <strong>All-in total: ${formatMoney(result.total)}</strong>
            <span>Estimated buyer closing costs for a NYC {housingType === "coop" ? "co-op" : housingType}.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
