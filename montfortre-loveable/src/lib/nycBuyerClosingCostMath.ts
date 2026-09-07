import {
  type BreakdownLine,
  pctOfTotal,
  sumLines,
} from "./calculatorUtils";
import {
  calculateMansionTax,
  calculateMortgageRecordingTax,
  estimateLenderTitleInsurance,
  estimateOwnerTitleInsurance,
  nycTransferTaxOnly,
  nyStateTransferTaxOnly,
} from "./nycTaxes";

export type BuyerHousingType = "condo" | "coop" | "house";

export type BuyerClosingCostInputs = {
  purchasePrice: number;
  amountFinanced: number;
  housingType: BuyerHousingType;
  buyerAttorneyFee: number;
  newConstruction: boolean;
};

export type BuyerClosingCostResult = {
  lines: BreakdownLine[];
  financingLines: BreakdownLine[];
  newConstructionLines: BreakdownLine[];
  total: number;
  totalPct: number;
  financingTotal: number;
  newConstructionTotal: number;
};

function withPct(lines: BreakdownLine[], totalBase: number): BreakdownLine[] {
  return lines.map((l) => ({ ...l, pct: pctOfTotal(l.amount, totalBase) }));
}

/** Matches Hauseit NYC buyer closing-cost calculator line items and amounts. */
export function calculateBuyerClosingCosts(input: BuyerClosingCostInputs): BuyerClosingCostResult {
  const price = Math.max(0, input.purchasePrice);
  const loan = Math.max(0, Math.min(input.amountFinanced, price));
  const type = input.housingType;

  const lines: BreakdownLine[] = [{ id: "mansionTax", label: "Mansion Tax", amount: calculateMansionTax(price) }];

  if (type === "condo" || type === "house") {
    lines.push({
      id: "titleInsurance",
      label: "Title Insurance — Owner's Policy",
      amount: estimateOwnerTitleInsurance(price),
    });
  }

  lines.push({ id: "buyerAttorney", label: "Buyer's Attorney Fee", amount: input.buyerAttorneyFee || 3500 });

  if (type === "condo") {
    lines.push(
      { id: "moveInDeposit", label: "Move-In Deposit", amount: 1000 },
      { id: "titleSearch", label: "Title Search Fees", amount: 600 },
      { id: "boardApplicationFees", label: "Board Application Fee", amount: 500 },
      { id: "moveInFee", label: "Move-In Fee", amount: 500 },
      { id: "buildingQuestionnaire", label: "Building Questionnaire Fee", amount: 350 },
      { id: "titleCloserFee", label: "Title Closer Fee", amount: 300 },
      { id: "titleSearchEndorsements", label: "Title Insurance — Endorsements", amount: 250 },
      { id: "deedRecordingFees", label: "Deed Recording Fees", amount: 200 },
      { id: "creditCheck", label: "Credit Check", amount: 100 },
    );
  }

  if (type === "coop") {
    lines.push(
      { id: "moveInDeposit", label: "Move-In Deposit", amount: 1000 },
      { id: "boardApplicationFees", label: "Board Application Fee", amount: 500 },
      { id: "moveInFee", label: "Move-In Fee", amount: 500 },
      { id: "buildingQuestionnaire", label: "Building Questionnaire Fee", amount: 350 },
      { id: "lienSearchFee", label: "Lien Search Fee", amount: 300 },
      { id: "creditCheck", label: "Credit Check", amount: 100 },
    );
  }

  if (type === "house") {
    lines.push(
      { id: "titleSearch", label: "Title Search Fees", amount: 600 },
      { id: "surveyFees", label: "Survey Fees", amount: 300 },
      { id: "titleCloserFee", label: "Title Closer Fee", amount: 300 },
      { id: "titleSearchEndorsements", label: "Title Insurance — Endorsements", amount: 250 },
      { id: "deedRecordingFees", label: "Deed Recording Fees", amount: 200 },
      { id: "creditCheck", label: "Credit Check", amount: 100 },
    );
  }

  const financingLines: BreakdownLine[] = [];
  if (loan > 0) {
    if (type === "condo" || type === "house") {
      financingLines.push(
        { id: "mortgageRecordingTax", label: "Mortgage Recording Tax", amount: calculateMortgageRecordingTax(loan) },
        {
          id: "titleInsuranceMortgagePolicy",
          label: "Title Insurance — Mortgage Policy",
          amount: estimateLenderTitleInsurance(loan),
        },
      );
    }
    financingLines.push(
      { id: "bankAttorneyFee", label: "Bank's Attorney Fee", amount: 1000 },
      { id: "loanApplicationFee", label: "Loan Application Fee", amount: 1000 },
      { id: "appraisalFee", label: "Appraisal Fee", amount: 750 },
    );
    if (type === "condo" || type === "house") {
      financingLines.push({ id: "mortgageRecordingFee", label: "Mortgage Recording Fee", amount: 200 });
    }
    if (type === "coop") {
      financingLines.push(
        { id: "recognitionAgreementFee", label: "Recognition Agreement Fee", amount: 350 },
        { id: "filingFee", label: "UCC-1 Filing Fee", amount: 100 },
      );
    }
  }

  const newConstructionLines: BreakdownLine[] = [];
  if (input.newConstruction) {
    // Hauseit: buyer pays seller transfer taxes + sponsor counsel on sponsor units.
    newConstructionLines.push(
      { id: "nycTransferTax", label: "NYC Transfer Tax", amount: Math.round(nycTransferTaxOnly(price)) },
      {
        id: "stateTransferTax",
        label: "NY State Transfer Tax",
        amount: Math.round(nyStateTransferTaxOnly(price, "condo")),
      },
      { id: "sponsorAttorneyFee", label: "Sponsor's Attorney Fee", amount: 3000 },
    );
  }

  const total = sumLines([...lines, ...financingLines, ...newConstructionLines]);
  return {
    lines: withPct(lines, price),
    financingLines: withPct(financingLines, price),
    newConstructionLines: withPct(newConstructionLines, price),
    total,
    totalPct: pctOfTotal(total, price),
    financingTotal: sumLines(financingLines),
    newConstructionTotal: sumLines(newConstructionLines),
  };
}
