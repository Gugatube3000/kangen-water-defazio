type WaterCostInputs = {
  machinePrice: number;
  annualFilterCost: number;
  costPerGallon: number;
  householdSize: number;
  years: number;
  gallonsPerPersonPerDay: number;
};

/** A spending illustration only: the caller must disclose excluded costs. */
export function calculateWaterCosts(inputs: WaterCostInputs) {
  for (const [name, value] of Object.entries(inputs)) {
    if (!Number.isFinite(value) || value < 0) {
      throw new RangeError(`${name} must be a finite, non-negative number`);
    }
  }
  if (inputs.householdSize === 0 || inputs.years === 0) {
    throw new RangeError("Household size and years must be greater than zero");
  }
  const annualBottled = inputs.costPerGallon * inputs.gallonsPerPersonPerDay * inputs.householdSize * 365;
  const totalBottledCost = annualBottled * inputs.years;
  const k8TotalCost = inputs.machinePrice + inputs.annualFilterCost * inputs.years;
  const annualSavings = annualBottled - inputs.annualFilterCost;
  return {
    annualBottled,
    totalBottledCost,
    k8TotalCost,
    savings: totalBottledCost - k8TotalCost,
    paybackYears: annualSavings > 0 ? inputs.machinePrice / annualSavings : null,
  };
}
