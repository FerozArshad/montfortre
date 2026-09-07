import {
  calculatePropertyCarrying,
  netMonthlyRentalIncome,
  projectEquity,
  rentalUnitsForBrownstone,
} from "./propertyComparisonMath";

export type CondoSideInputs = {
  purchasePrice: number;
  downPaymentPct: number;
  interestRatePct: number;
  termYears: number;
  closingCostPct: number;
  monthlyTaxes: number;
  monthlyHoa: number;
  monthlyInsurance: number;
  annualMaintenanceReservePct: number;
  appreciationPct: number;
};

export type BrownstoneSideInputs = {
  purchasePrice: number;
  downPaymentPct: number;
  interestRatePct: number;
  termYears: number;
  totalUnits: 2 | 3 | 4;
  closingCostPct: number;
  monthlyTaxes: number;
  monthlyInsurance: number;
  annualMaintenanceReservePct: number;
  monthlyOwnerUtilities: number;
  appreciationPct: number;
  unitRents: number[];
  vacancyPct: number;
  rentGrowthPct: number;
};

export type WealthProjection = {
  year: number;
  propertyValue: number;
  remainingLoan: number;
  equity: number;
  principalPaid: number;
  appreciation: number;
  cumulativeNetRent: number;
};

export type CondoVsBrownstoneResult = {
  condo: ReturnType<typeof calculatePropertyCarrying> & { effectiveMonthly: number };
  brownstone: ReturnType<typeof calculatePropertyCarrying> & {
    grossMonthly: number;
    grossRentalIncome: number;
    vacancyAllowance: number;
    netRentalIncome: number;
    effectiveMonthly: number;
  };
  monthlySavingsWithBrownstone: number;
  annualSavingsWithBrownstone: number;
  isBrownstoneCheaper: boolean;
  priceDifference: number;
  condoEquity10Y: number;
  brownstoneEquity10Y: number;
  equityAdvantageBrownstone: number;
  tenantOffsetPct: number;
  condoProjection: WealthProjection;
  brownstoneProjection: WealthProjection;
};

function projectWithRent(
  purchasePrice: number,
  downPaymentPct: number,
  interestRatePct: number,
  termYears: number,
  appreciationPct: number,
  horizonYears: number,
  baseGrossMonthlyRent: number,
  vacancyPct: number,
  rentGrowthPct: number,
): WealthProjection {
  const base = projectEquity(
    purchasePrice,
    downPaymentPct,
    interestRatePct,
    termYears,
    appreciationPct,
    horizonYears,
  );
  const loanAmount = purchasePrice * (1 - downPaymentPct / 100);
  let cumulativeNetRent = 0;
  if (baseGrossMonthlyRent > 0) {
    let monthlyGross = baseGrossMonthlyRent;
    for (let y = 1; y <= horizonYears; y += 1) {
      cumulativeNetRent += monthlyGross * 12 * (1 - vacancyPct / 100);
      monthlyGross *= 1 + rentGrowthPct / 100;
    }
  }
  return {
    year: horizonYears,
    propertyValue: base.futureValue,
    remainingLoan: base.remainingLoan,
    equity: base.equity,
    principalPaid: Math.max(0, loanAmount - base.remainingLoan),
    appreciation: base.futureValue - purchasePrice,
    cumulativeNetRent,
  };
}

export function calculateCondoVsBrownstone(
  condo: CondoSideInputs,
  brownstone: BrownstoneSideInputs,
  horizonYears = 10,
): CondoVsBrownstoneResult {
  const condoCarrying = calculatePropertyCarrying({
    purchasePrice: condo.purchasePrice,
    downPaymentPct: condo.downPaymentPct,
    interestRatePct: condo.interestRatePct,
    termYears: condo.termYears,
    monthlyTaxes: condo.monthlyTaxes,
    monthlyInsurance: condo.monthlyInsurance,
    monthlyHoaOrUtilities: condo.monthlyHoa,
    annualMaintenanceReservePct: condo.annualMaintenanceReservePct,
    closingCostPct: condo.closingCostPct,
  });

  const brownstoneCarrying = calculatePropertyCarrying({
    purchasePrice: brownstone.purchasePrice,
    downPaymentPct: brownstone.downPaymentPct,
    interestRatePct: brownstone.interestRatePct,
    termYears: brownstone.termYears,
    monthlyTaxes: brownstone.monthlyTaxes,
    monthlyInsurance: brownstone.monthlyInsurance,
    monthlyHoaOrUtilities: brownstone.monthlyOwnerUtilities,
    annualMaintenanceReservePct: brownstone.annualMaintenanceReservePct,
    closingCostPct: brownstone.closingCostPct,
  });

  const rents = brownstone.unitRents.slice(0, rentalUnitsForBrownstone(brownstone.totalUnits));
  const grossRentalIncome = rents.reduce((sum, rent) => sum + Math.max(0, rent), 0);
  const vacancyAllowance = grossRentalIncome * (brownstone.vacancyPct / 100);
  const netRentalIncome = netMonthlyRentalIncome({
    unitRents: rents,
    vacancyPct: brownstone.vacancyPct,
  });

  const condoEffective = condoCarrying.monthlyTotal;
  const brownstoneGross = brownstoneCarrying.monthlyTotal;
  const brownstoneEffective = brownstoneGross - netRentalIncome;
  const monthlySavings = condoEffective - brownstoneEffective;

  const condoProjection = projectWithRent(
    condo.purchasePrice,
    condo.downPaymentPct,
    condo.interestRatePct,
    condo.termYears,
    condo.appreciationPct,
    horizonYears,
    0,
    0,
    0,
  );
  const brownstoneProjection = projectWithRent(
    brownstone.purchasePrice,
    brownstone.downPaymentPct,
    brownstone.interestRatePct,
    brownstone.termYears,
    brownstone.appreciationPct,
    horizonYears,
    grossRentalIncome,
    brownstone.vacancyPct,
    brownstone.rentGrowthPct,
  );

  return {
    condo: { ...condoCarrying, effectiveMonthly: condoEffective },
    brownstone: {
      ...brownstoneCarrying,
      grossMonthly: brownstoneGross,
      grossRentalIncome,
      vacancyAllowance,
      netRentalIncome,
      effectiveMonthly: brownstoneEffective,
    },
    monthlySavingsWithBrownstone: monthlySavings,
    annualSavingsWithBrownstone: monthlySavings * 12,
    isBrownstoneCheaper: monthlySavings >= 0,
    priceDifference: brownstone.purchasePrice - condo.purchasePrice,
    condoEquity10Y: condoProjection.equity,
    brownstoneEquity10Y: brownstoneProjection.equity,
    equityAdvantageBrownstone: brownstoneProjection.equity - condoProjection.equity,
    tenantOffsetPct: brownstoneGross <= 0 ? 0 : (netRentalIncome / brownstoneGross) * 100,
    condoProjection,
    brownstoneProjection,
  };
}
