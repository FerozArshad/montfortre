import { useMemo, useState } from "react";
import {
  calculateSellerClosingCosts,
  type SellerPropertyType,
} from "../../lib/nycSellerClosingCostMath";
import { formatMoney, parseCalcNumber } from "../../lib/calculatorUtils";
import { CalculatorBreakdown, CalculatorField, MoneyInput, NumberInput } from "./shared/CalculatorFields";
import CalculatorEmailResults from "./CalculatorEmailResults";
import "../../styles/calculator-tools.css";

const PROPERTY_TYPES: { value: SellerPropertyType; label: string }[] = [
  { value: "condo", label: "Condo" },
  { value: "coop", label: "Co-op" },
  { value: "1-3-family", label: "1–3 Family House" },
  { value: "4-family", label: "4 Family House" },
  { value: "5plus", label: "5+ Family House" },
  { value: "commercial", label: "Commercial" },
];

function propertyLabel(type: SellerPropertyType): string {
  return PROPERTY_TYPES.find((t) => t.value === type)?.label ?? type;
}

export default function SellerClosingCostCalculator() {
  const [salePrice, setSalePrice] = useState("1500000");
  const [propertyType, setPropertyType] = useState<SellerPropertyType>("condo");
  const [brokerCommissionPct, setBrokerCommissionPct] = useState("6");
  const [buildingFlipTax, setBuildingFlipTax] = useState("0");
  const [sellerAttorneyFee, setSellerAttorneyFee] = useState("3500");
  const [hasExistingMortgage, setHasExistingMortgage] = useState(true);
  const [sellerPowerOfAttorney, setSellerPowerOfAttorney] = useState(false);

  const price = parseCalcNumber(salePrice);

  const result = useMemo(
    () =>
      calculateSellerClosingCosts({
        salePrice: price,
        propertyType,
        brokerCommissionPct: parseCalcNumber(brokerCommissionPct),
        buildingFlipTax: parseCalcNumber(buildingFlipTax),
        sellerAttorneyFee: parseCalcNumber(sellerAttorneyFee),
        hasExistingMortgage,
        sellerPowerOfAttorney,
      }),
    [price, propertyType, brokerCommissionPct, buildingFlipTax, sellerAttorneyFee, hasExistingMortgage, sellerPowerOfAttorney],
  );

  const commissionLine = result.lines.find((l) => /commission/i.test(l.label));
  const transferLines = result.lines.filter((l) => /transfer/i.test(l.label));
  const transferTotal = transferLines.reduce((sum, l) => sum + l.amount, 0);
  const otherTotal = result.total - (commissionLine?.amount ?? 0) - transferTotal;

  function reset() {
    setSalePrice("1500000");
    setPropertyType("condo");
    setBrokerCommissionPct("6");
    setBuildingFlipTax("0");
    setSellerAttorneyFee("3500");
    setHasExistingMortgage(true);
    setSellerPowerOfAttorney(false);
  }

  return (
    <div className="calc-tool calc-tool--seller" id="seller-closing-cost-calculator" data-screen-label="Seller closing cost calculator">
      <div className="calc-tool-topbar">
        <div>
          <p className="calc-tool-topbar-kicker">Live estimate</p>
          <h3>NYC seller closing costs</h3>
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

      <div className="calc-tool-grid">
        <div className="calc-tool-inputs">
          <h3>Property Details</h3>
          <CalculatorField label="Sale Price">
            <MoneyInput value={salePrice} onChange={setSalePrice} />
          </CalculatorField>
          <CalculatorField label="Property Type">
            <select value={propertyType} onChange={(e) => setPropertyType(e.target.value as SellerPropertyType)}>
              {PROPERTY_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </CalculatorField>
          <CalculatorField label="Broker Commission (%)">
            <NumberInput value={brokerCommissionPct} onChange={setBrokerCommissionPct} step={0.01} />
          </CalculatorField>
          <CalculatorField label="Building Flip Tax">
            <MoneyInput value={buildingFlipTax} onChange={setBuildingFlipTax} />
          </CalculatorField>
          <CalculatorField label="Seller's Attorney Fee">
            <MoneyInput value={sellerAttorneyFee} onChange={setSellerAttorneyFee} />
          </CalculatorField>
          <label className="calc-check">
            <input
              type="checkbox"
              checked={hasExistingMortgage}
              onChange={(e) => setHasExistingMortgage(e.target.checked)}
            />
            <span>Existing mortgage to pay off</span>
          </label>
          <label className="calc-check">
            <input
              type="checkbox"
              checked={sellerPowerOfAttorney}
              onChange={(e) => setSellerPowerOfAttorney(e.target.checked)}
            />
            <span>Seller power of attorney</span>
          </label>

          <CalculatorEmailResults
            title="Seller Closing Cost Estimate"
            summary={`Seller estimate on a $${formatMoney(price)} ${propertyLabel(propertyType)} sale.`}
            lines={result.lines.map((line) => ({
              label: line.label,
              amount: line.amount,
            }))}
            totalLabel="Estimated net proceeds"
            totalValue={`$${formatMoney(result.netProceeds)}`}
            sourcePage="/nyc-brownstone-seller-closing-cost-calculator/"
          />
        </div>

        <div className="calc-tool-results">
          <div className="calc-total calc-total--hero">
            <div>
              <kbd>Estimated seller costs</kbd>
              <strong>${formatMoney(result.total)}</strong>
              <span>
                {result.totalPct.toFixed(2)}% of ${formatMoney(price)} · {propertyLabel(propertyType)}
              </span>
            </div>
          </div>

          <div className="calc-cards calc-cards--3">
            <article className="calc-card">
              <kbd>Commission</kbd>
              <strong>${formatMoney(commissionLine?.amount ?? 0)}</strong>
              <p>{brokerCommissionPct}% broker fee</p>
            </article>
            <article className="calc-card">
              <kbd>Transfer taxes</kbd>
              <strong>${formatMoney(transferTotal)}</strong>
              <p>NYC + NYS transfer</p>
            </article>
            <article className="calc-card">
              <kbd>Other fees</kbd>
              <strong>${formatMoney(otherTotal)}</strong>
              <p>Attorney, flip tax &amp; misc.</p>
            </article>
          </div>

          <h4 className="calc-subheading">Line-item breakdown</h4>
          <CalculatorBreakdown lines={result.lines} total={result.total} totalLabel="Seller-cost total" />

          <div className="calc-total calc-total--hero" style={{ marginTop: 18 }}>
            <div>
              <kbd>Estimated net proceeds</kbd>
              <strong>${formatMoney(result.netProceeds)}</strong>
              <span>Sale price minus estimated closing costs</span>
            </div>
          </div>

          <div className="calc-highlight">
            <strong>You may net ~${formatMoney(result.netProceeds)}</strong>
            <span>
              Educational estimate for a {propertyLabel(propertyType).toLowerCase()} at ${formatMoney(price)}. Confirm
              with your attorney and listing agreement before you rely on a net sheet.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
