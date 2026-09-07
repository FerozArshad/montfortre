import {
  monthlyMortgagePayment,
  remainingLoanBalance,
  yearOneMortgageInterest,
} from "./calculatorUtils";

export type PropertyCarryingInputs = {
  purchasePrice: number;
  downPaymentPct: number;
  interestRatePct: number;
  termYears: number;
  monthlyTaxes: number;
  monthlyInsurance: number;
  monthlyHoaOrUtilities: number;
  annualMaintenanceReservePct: number;
  closingCostPct: number;
};

export type PropertyCarryingBreakdown = {
  loanAmount: number;
  downPayment: number;
  monthlyPi: number;
  monthlyTaxes: number;
  monthlyInsurance: number;
  monthlyHoaOrUtilities: number;
  monthlyReserve: number;
  monthlyTotal: number;
  closingCosts: number;
};

export function calculatePropertyCarrying(input: PropertyCarryingInputs): PropertyCarryingBreakdown {
  const price = Math.max(0, input.purchasePrice);
  const downPayment = price * (input.downPaymentPct / 100);
  const loanAmount = Math.max(0, price - downPayment);
  const monthlyPi = monthlyMortgagePayment(loanAmount, input.interestRatePct, input.termYears);
  const monthlyReserve = (price * (input.annualMaintenanceReservePct / 100)) / 12;
  const monthlyTotal =
    monthlyPi + input.monthlyTaxes + input.monthlyInsurance + input.monthlyHoaOrUtilities + monthlyReserve;

  return {
    loanAmount,
    downPayment,
    monthlyPi,
    monthlyTaxes: input.monthlyTaxes,
    monthlyInsurance: input.monthlyInsurance,
    monthlyHoaOrUtilities: input.monthlyHoaOrUtilities,
    monthlyReserve,
    monthlyTotal,
    closingCosts: price * (input.closingCostPct / 100),
  };
}

export type EquityProjection = {
  futureValue: number;
  remainingLoan: number;
  equity: number;
  downPayment: number;
};

export function projectEquity(
  purchasePrice: number,
  downPaymentPct: number,
  interestRatePct: number,
  termYears: number,
  appreciationPct: number,
  horizonYears: number,
): EquityProjection {
  const downPayment = purchasePrice * (downPaymentPct / 100);
  const loanAmount = Math.max(0, purchasePrice - downPayment);
  const futureValue = purchasePrice * (1 + appreciationPct / 100) ** horizonYears;
  const remainingLoan = remainingLoanBalance(loanAmount, interestRatePct, termYears, horizonYears * 12);
  return {
    futureValue,
    remainingLoan,
    equity: futureValue - remainingLoan,
    downPayment,
  };
}

export type BrownstoneRentalInputs = {
  unitRents: number[];
  vacancyPct: number;
};

export function netMonthlyRentalIncome(input: BrownstoneRentalInputs): number {
  const gross = input.unitRents.reduce((sum, rent) => sum + Math.max(0, rent), 0);
  return gross * (1 - input.vacancyPct / 100);
}

export type RentalTaxDeductionInputs = {
  purchasePrice: number;
  loanAmount: number;
  interestRatePct: number;
  termYears: number;
  annualPropertyTaxes: number;
  monthlyInsurance: number;
  monthlyUtilities: number;
  rentalUsePct: number;
  landValuePct: number;
  marginalTaxRatePct: number;
};

export type RentalTaxDeductionResult = {
  yearOneInterest: number;
  yearOneTaxes: number;
  yearOneInsurance: number;
  yearOneUtilities: number;
  yearOneDepreciation: number;
  totalDeductions: number;
  monthlyTaxBenefit: number;
};

const DEPRECIATION_YEARS = 27.5;

export function calculateRentalTaxDeductions(input: RentalTaxDeductionInputs): RentalTaxDeductionResult {
  const rentalShare = input.rentalUsePct / 100;
  const depreciableBasis = input.purchasePrice * (1 - input.landValuePct / 100) * rentalShare;
  const yearOneDepreciation = depreciableBasis / DEPRECIATION_YEARS;
  const yearOneInterest = yearOneMortgageInterest(input.loanAmount, input.interestRatePct, input.termYears) * rentalShare;
  const yearOneTaxes = input.annualPropertyTaxes * rentalShare;
  const yearOneInsurance = input.monthlyInsurance * 12 * rentalShare;
  const yearOneUtilities = input.monthlyUtilities * 12 * rentalShare;
  const totalDeductions = yearOneInterest + yearOneTaxes + yearOneInsurance + yearOneUtilities + yearOneDepreciation;
  const taxSavings = totalDeductions * (input.marginalTaxRatePct / 100);

  return {
    yearOneInterest,
    yearOneTaxes,
    yearOneInsurance,
    yearOneUtilities,
    yearOneDepreciation,
    totalDeductions,
    monthlyTaxBenefit: taxSavings / 12,
  };
}

export function rentalUsePctForUnits(totalUnits: number, rentalUnits: number): number {
  if (totalUnits <= 0) return 0;
  return (rentalUnits / totalUnits) * 100;
}

export function rentalUnitsForBrownstone(totalUnits: 2 | 3 | 4): number {
  return totalUnits - 1;
}
