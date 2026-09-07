import { useMemo, useState } from "react";
import {
  calculateSellerClosingCosts,
  type SellerPropertyType,
} from "../../lib/nycSellerClosingCostMath";
import { formatMoney, parseCalcNumber } from "../../lib/calculatorUtils";
import { CalculatorBreakdown, CalculatorField, MoneyInput, NumberInput } from "./shared/CalculatorFields";
import "../../styles/calculator-tools.css";

const PROPERTY_TYPES: { value: SellerPropertyType; label: string }[] = [
  { value: "condo", label: "Condo" },
  { value: "coop", label: "Co-op" },
  { value: "1-3-family", label: "1–3 Family House" },
  { value: "4-family", label: "4 Family House" },
  { value: "5plus", label: "5+ Family House" },
  { value: "commercial", label: "Commercial" },
];

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

  return (
    <div className="calc-tool" id="seller-closing-cost-calculator" data-screen-label="Seller closing cost calculator">
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
          <label className="calc-radio">
            <input
              type="checkbox"
              checked={hasExistingMortgage}
              onChange={(e) => setHasExistingMortgage(e.target.checked)}
            />
            Existing mortgage to pay off
          </label>
          <label className="calc-radio">
            <input
              type="checkbox"
              checked={sellerPowerOfAttorney}
              onChange={(e) => setSellerPowerOfAttorney(e.target.checked)}
            />
            Seller power of attorney
          </label>
          <div className="calc-actions">
            <button
              type="button"
              className="calc-btn calc-btn--ghost"
              onClick={() => {
                setSalePrice("1500000");
                setPropertyType("condo");
                setBrokerCommissionPct("6");
                setBuildingFlipTax("0");
                setSellerAttorneyFee("3500");
                setHasExistingMortgage(true);
                setSellerPowerOfAttorney(false);
              }}
            >
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
            <span>{result.totalPct.toFixed(2)}% of sale price</span>
          </div>
          <CalculatorBreakdown lines={result.lines} total={result.total} />
          <div className="calc-breakdown calc-breakdown--stack" style={{ marginTop: 12 }}>
            <div className="calc-breakdown-row">
              <strong>Net sale proceeds</strong>
              <span />
              <strong>${formatMoney(result.netProceeds)}</strong>
            </div>
          </div>
          <div className="calc-highlight">
            <strong>You may net ~${formatMoney(result.netProceeds)}</strong>
            <span>After estimated seller closing costs on a ${formatMoney(price)} sale.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
