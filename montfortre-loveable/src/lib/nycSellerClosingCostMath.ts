import { type BreakdownLine, pctOfTotal, sumLines } from "./calculatorUtils";
import { nycTransferTaxOnly, nyStateTransferTaxOnly } from "./nycTaxes";

export type SellerPropertyType =
  | "condo"
  | "coop"
  | "1-3-family"
  | "4-family"
  | "5plus"
  | "commercial";

export type SellerClosingCostInputs = {
  salePrice: number;
  propertyType: SellerPropertyType;
  brokerCommissionPct: number;
  buildingFlipTax: number;
  sellerAttorneyFee: number;
  hasExistingMortgage: boolean;
  sellerPowerOfAttorney: boolean;
};

export type SellerClosingCostResult = {
  lines: BreakdownLine[];
  total: number;
  totalPct: number;
  netProceeds: number;
};

/** Matches Hauseit NYC seller closing-cost estimator line items and amounts. */
export function calculateSellerClosingCosts(input: SellerClosingCostInputs): SellerClosingCostResult {
  const price = Math.max(0, input.salePrice);
  const type = input.propertyType;
  const isCondoOrCoop = type === "condo" || type === "coop";
  const isCoop = type === "coop";

  const broker = price * (input.brokerCommissionPct / 100);
  const nycTax = nycTransferTaxOnly(price, type);
  const nysTax = nyStateTransferTaxOnly(price, type);

  const lines: BreakdownLine[] = [
    { id: "brokerCommission", label: "Broker Commission", amount: broker },
    { id: "nycTransferTax", label: "NYC Transfer Tax", amount: nycTax },
    { id: "nyStateTransferTax", label: "NY State Transfer Tax", amount: nysTax },
    { id: "sellersAttorneyFee", label: "Seller's Attorney Fee", amount: input.sellerAttorneyFee || 3500 },
  ];

  // Hauseit: mortgage satisfaction recording only when existing mortgage AND not co-op.
  if (input.hasExistingMortgage && !isCoop) {
    lines.push({
      id: "mortgageSatisfactionRecordingFee",
      label: "Mortgage Satisfaction Recording Fee",
      amount: 100,
    });
  }

  if (input.hasExistingMortgage) {
    lines.push({ id: "bankLoanSatisfactionFees", label: "Bank Loan Satisfaction Fees", amount: 50 });
  }

  lines.push({
    id: "sellerPowerOfAttorneyRecordingFee",
    label: "Seller Power of Attorney Recording Fee",
    amount: input.sellerPowerOfAttorney ? 125 : 0,
  });

  // Hauseit: move-out + managing agent only for condo/co-op.
  lines.push(
    { id: "buildingMoveOutFee", label: "Building Move-Out Fee", amount: isCondoOrCoop ? 500 : 0 },
    {
      id: "buildingManagingAgentClosingFee",
      label: "Building Managing Agent Closing Fee",
      amount: isCondoOrCoop ? 500 : 0,
    },
    { id: "buildingFlipTax", label: "Building Flip Tax", amount: Math.max(0, input.buildingFlipTax) },
  );

  if (isCoop) {
    lines.push(
      {
        id: "coopUcc3TerminationFee",
        label: "Co-op UCC-3 Termination Fee",
        amount: input.hasExistingMortgage ? 75 : 0,
      },
      { id: "coopTransferTaxFilingFee", label: "Co-op Transfer Tax Filing Fee", amount: 100 },
      { id: "coopStockTransferTax", label: "Co-op Stock Transfer Tax", amount: 50 },
    );
  }

  const total = sumLines(lines);
  const withPct = lines.map((l) => ({ ...l, pct: pctOfTotal(l.amount, price) }));

  return {
    lines: withPct,
    total,
    totalPct: pctOfTotal(total, price),
    netProceeds: price - total,
  };
}
