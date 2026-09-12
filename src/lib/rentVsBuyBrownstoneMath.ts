import {
  calculatePropertyCarrying,
  calculateRentalTaxDeductions,
  netMonthlyRentalIncome,
  projectEquity,
  rentalUnitsForBrownstone,
  rentalUsePctForUnits,
} from "./propertyComparisonMath";

export type RentVsBuyInputs = {
  currentRent: number;
  annualRentIncreasePct: number;
  purchasePrice: number;
  downPaymentPct: number;
  interestRatePct: number;
  termYears: number;
  annualPropertyTaxes: number;
  totalUnits: 2 | 3 | 4;
  unitRents: number[];
  monthlyInsurance: number;
  monthlyWater: number;
  monthlyCommonUtilities: number;
  rentalUsePct: number;
  landValuePct: number;
  marginalTaxRatePct: number;
};

export type RentVsBuyResult = {
  monthlyPi: number;
  monthlyTaxes: number;
  downPayment: number;
  loanAmount: number;
  grossCarrying: number;
  netRentalIncome: number;
  netMonthlyOwnershipCost: number;
  yearOneDeductions: number;
  monthlyTaxBenefit: number;
  afterTaxMonthlyCost: number;
  currentRent: number;
  /** Pre-tax comparison matching GHL vibe: currentRent − netMonthlyOwnershipCost */
  monthlySavingsVsRent: number;
  annualSavingsVsRent: number;
  /** After-tax illustrative comparison */
  monthlySavingsAfterTax: number;
  rentalUsePct: number;
  currentAnnualRent: number;
  rentOver5Years: number;
  rentOver10Years: number;
  tax: {
    yearOneInterest: number;
    yearOneTaxes: number;
    yearOneInsurance: number;
    yearOneUtilities: number;
    yearOneDepreciation: number;
    theoreticalTaxValue: number;
  };
};

function cumulativeRentPaid(monthlyRent: number, annualIncreasePct: number, years: number): number {
  const annual = monthlyRent * 12;
  let total = 0;
  for (let i = 0; i < years; i += 1) {
    total += annual * (1 + annualIncreasePct / 100) ** i;
  }
  return total;
}

export function calculateRentVsBuy(input: RentVsBuyInputs): RentVsBuyResult {
  const rentalUnits = rentalUnitsForBrownstone(input.totalUnits);
  const rentalUsePct = input.rentalUsePct || rentalUsePctForUnits(input.totalUnits, rentalUnits);
  const carrying = calculatePropertyCarrying({
    purchasePrice: input.purchasePrice,
    downPaymentPct: input.downPaymentPct,
    interestRatePct: input.interestRatePct,
    termYears: input.termYears,
    monthlyTaxes: input.annualPropertyTaxes / 12,
    monthlyInsurance: input.monthlyInsurance,
    monthlyHoaOrUtilities: input.monthlyWater + input.monthlyCommonUtilities,
    annualMaintenanceReservePct: 0,
    closingCostPct: 0,
  });

  const netRentalIncome = netMonthlyRentalIncome({ unitRents: input.unitRents, vacancyPct: 0 });
  const grossCarrying = carrying.monthlyTotal;
  const netMonthlyOwnershipCost = grossCarrying - netRentalIncome;

  const tax = calculateRentalTaxDeductions({
    purchasePrice: input.purchasePrice,
    loanAmount: carrying.loanAmount,
    interestRatePct: input.interestRatePct,
    termYears: input.termYears,
    annualPropertyTaxes: input.annualPropertyTaxes,
    monthlyInsurance: input.monthlyInsurance,
    monthlyUtilities: input.monthlyWater + input.monthlyCommonUtilities,
    rentalUsePct,
    landValuePct: input.landValuePct,
    marginalTaxRatePct: input.marginalTaxRatePct,
  });

  const afterTaxMonthlyCost = netMonthlyOwnershipCost - tax.monthlyTaxBenefit;
  const monthlySavingsVsRent = input.currentRent - netMonthlyOwnershipCost;

  return {
    monthlyPi: carrying.monthlyPi,
    monthlyTaxes: carrying.monthlyTaxes,
    downPayment: carrying.downPayment,
    loanAmount: carrying.loanAmount,
    grossCarrying,
    netRentalIncome,
    netMonthlyOwnershipCost,
    yearOneDeductions: tax.totalDeductions,
    monthlyTaxBenefit: tax.monthlyTaxBenefit,
    afterTaxMonthlyCost,
    currentRent: input.currentRent,
    monthlySavingsVsRent,
    annualSavingsVsRent: monthlySavingsVsRent * 12,
    monthlySavingsAfterTax: input.currentRent - afterTaxMonthlyCost,
    rentalUsePct,
    currentAnnualRent: input.currentRent * 12,
    rentOver5Years: cumulativeRentPaid(input.currentRent, input.annualRentIncreasePct, 5),
    rentOver10Years: cumulativeRentPaid(input.currentRent, input.annualRentIncreasePct, 10),
    tax: {
      yearOneInterest: tax.yearOneInterest,
      yearOneTaxes: tax.yearOneTaxes,
      yearOneInsurance: tax.yearOneInsurance,
      yearOneUtilities: tax.yearOneUtilities,
      yearOneDepreciation: tax.yearOneDepreciation,
      theoreticalTaxValue: tax.totalDeductions * (input.marginalTaxRatePct / 100),
    },
  };
}

export function projectRentVsBuyWealth(input: RentVsBuyInputs, horizonYears: number) {
  return projectEquity(
    input.purchasePrice,
    input.downPaymentPct,
    input.interestRatePct,
    input.termYears,
    3,
    horizonYears,
  );
}
