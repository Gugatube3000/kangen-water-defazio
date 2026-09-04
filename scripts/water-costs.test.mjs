import test from "node:test";
import assert from "node:assert/strict";
import { calculateWaterCosts } from "../src/lib/waterCosts.ts";
import { K8_PRICE_AMOUNT } from "../src/lib/enagic.ts";

const base = { machinePrice: K8_PRICE_AMOUNT, annualFilterCost: 300, costPerGallon: 0.85, householdSize: 3, years: 25, gallonsPerPersonPerDay: 0.5 };

test("default household retains a negative savings result and a break-even beyond the selected period", () => {
  const result = calculateWaterCosts(base);
  assert.equal(result.k8TotalCost, 13390);
  assert.ok(Math.abs(result.totalBottledCost - 11634.375) < 0.000001);
  assert.ok(Math.abs(result.savings + 1755.625) < 0.000001);
  assert.ok(result.paybackYears > base.years);
});

test("one-year and larger-household scenarios recompute both totals", () => {
  const result = calculateWaterCosts({ ...base, householdSize: 4, years: 1, costPerGallon: 6.99 });
  assert.equal(result.k8TotalCost, 6190);
  assert.ok(Math.abs(result.totalBottledCost - 5102.7) < 0.000001);
  assert.ok(Math.abs(result.paybackYears - K8_PRICE_AMOUNT / 4802.7) < 0.000001);
});

test("no break-even is claimed when bottled water costs no more than maintenance", () => {
  assert.equal(calculateWaterCosts({ ...base, householdSize: 1, costPerGallon: 0.8 }).paybackYears, null);
  assert.equal(calculateWaterCosts({ ...base, householdSize: 1, costPerGallon: 2, annualFilterCost: 365 }).paybackYears, null);
});

test("invalid inputs cannot produce misleading NaN, infinite, or negative projections", () => {
  for (const changes of [{ years: 0 }, { householdSize: 0 }, { machinePrice: -1 }, { costPerGallon: NaN }, { annualFilterCost: Infinity }]) {
    assert.throws(() => calculateWaterCosts({ ...base, ...changes }), RangeError);
  }
});
