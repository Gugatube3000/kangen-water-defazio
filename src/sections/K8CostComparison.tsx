import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { K8_PRICE, K8_PRICE_AMOUNT } from "@/lib/enagic";
import { calculateWaterCosts } from "@/lib/waterCosts";

const K8_MACHINE_COST = K8_PRICE_AMOUNT;
const ANNUAL_FILTER_COST = 300; // Illustrative maintenance allowance, not a quote.

type BottledBrand = {
  name: string;
  costPerGallon: number;
  note: string;
};

const BOTTLED_BRANDS: BottledBrand[] = [
  { name: "Essentia", costPerGallon: 6.99, note: "Alkaline bottled; 1.5L" },
  { name: "Fiji", costPerGallon: 5.59, note: "Natural artesian; 1.5L" },
  { name: "Smartwater", costPerGallon: 4.49, note: "Vapor-distilled; 1.5L" },
  { name: "Evian", costPerGallon: 5.99, note: "Spring water; 1.5L" },
  { name: "Voss", costPerGallon: 7.99, note: "Norwegian artesian; 800ml" },
  { name: "Core Hydration", costPerGallon: 4.29, note: "Purified + electrolytes; 23.9oz" },
  { name: "Costco Kirkland", costPerGallon: 0.85, note: "Kirkland Purified Water; 16.9oz case" },
  { name: "Walmart Great Value", costPerGallon: 0.80, note: "Great Value Purified Water; 16.9oz case" },
  { name: "Generic supermarket", costPerGallon: 1.19, note: "Generic purified; gallon" },
];

const DAILY_GALLONS_PER_PERSON = 0.5;

function bottledAnnualCost(brand: BottledBrand, householdSize: number): number {
  return brand.costPerGallon * DAILY_GALLONS_PER_PERSON * householdSize * 365;
}

function bottledTotalCost(brand: BottledBrand, householdSize: number, years: number): number {
  return bottledAnnualCost(brand, householdSize) * years;
}

function formatK(value: number): string {
  if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`;
  return `$${Math.round(value)}`;
}

function SliderInput({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-[10px] uppercase tracking-ultra text-silver-400/70">{label}</span>
        <div className="flex items-center gap-2">
          <button type="button" aria-label={`Decrease ${label.toLowerCase()}`} disabled={value <= min} onClick={() => onChange(Math.max(min, value - step))} className="h-11 w-11 rounded-full border border-white/10 text-aqua-200 disabled:opacity-30 hover:bg-white/5">−</button>
          <span className="font-mono text-aqua-200 text-sm whitespace-nowrap">{value} {unit}</span>
          <button type="button" aria-label={`Increase ${label.toLowerCase()}`} disabled={value >= max} onClick={() => onChange(Math.min(max, value + step))} className="h-11 w-11 rounded-full border border-white/10 text-aqua-200 disabled:opacity-30 hover:bg-white/5">+</button>
        </div>
      </div>
      <input
        type="range"
        aria-label={label}
        aria-valuetext={`${value} ${unit}`}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none bg-white/10 accent-aqua-400 cursor-pointer"
      />
      <div className="flex justify-between text-[9px] text-silver-400/40 mt-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

export function K8CostComparison() {
  const [householdSize, setHouseholdSize] = useState(3);
  const [years, setYears] = useState(25);
  const [selectedBrand, setSelectedBrand] = useState<BottledBrand>(BOTTLED_BRANDS[6]); // Costco Kirkland

  const { k8TotalCost, annualBottled, totalBottledCost, paybackYears } = calculateWaterCosts({
    machinePrice: K8_MACHINE_COST,
    annualFilterCost: ANNUAL_FILTER_COST,
    costPerGallon: selectedBrand.costPerGallon,
    householdSize,
    years,
    gallonsPerPersonPerDay: DAILY_GALLONS_PER_PERSON,
  });

  return (
    <section
      id="k8-cost"
      data-section="k8-cost"
      data-section-label="K8 Cost"
      className="section-pad relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(50%_55%_at_55%_45%,rgba(164,231,240,0.10),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          kicker="Put the price in context"
          title={
            <>
              Expensive{" "}
              <em className="not-italic text-aqua-300">compared to what?</em>
            </>
          }
          subtitle="A family vacation and a home water system serve different priorities. Neither choice needs defending. Start with your budget and actual water spending, then use this illustration to decide whether the numbers make sense for you."
        />

        {/* Interactive controls */}
        <Reveal>
          <div className="mt-10 glass p-6 sm:p-8 max-w-4xl mx-auto space-y-6">
            <div className="kicker text-center">Customize your comparison</div>
            <div className="grid gap-6 sm:grid-cols-2">
              <SliderInput
                label="Household size"
                value={householdSize}
                min={1}
                max={6}
                step={1}
                unit="people"
                onChange={setHouseholdSize}
              />
              <SliderInput
                label="Years"
                value={years}
                min={1}
                max={25}
                step={1}
                unit="years"
                onChange={setYears}
              />
            </div>

            {/* Brand selector chips */}
            <div className="pt-4 border-t border-white/[0.06]">
              <label className="text-[10px] uppercase tracking-ultra text-silver-400/70 block mb-3 text-center sm:text-left">
                Bottled-water examples · illustrative prices, not live quotes
              </label>
              <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {BOTTLED_BRANDS.map((brand) => (
                  <button
                    key={brand.name}
                    type="button"
                    onClick={() => setSelectedBrand(brand)}
                    aria-pressed={selectedBrand.name === brand.name}
                    className={`px-3.5 py-2 rounded-full text-xs font-semibold border transition-all duration-300 whitespace-nowrap ${
                      selectedBrand.name === brand.name
                        ? "bg-aqua-400/20 border-aqua-400/60 text-aqua-200"
                        : "bg-white/[0.02] border-white/10 text-silver-300 hover:border-silver-200"
                    }`}
                  >
                    {brand.name} (${brand.costPerGallon.toFixed(2)}/gal)
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Summary callout */}
        <Reveal>
          <div className="mt-6 glass p-6 sm:p-8 max-w-4xl mx-auto space-y-5">
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-ultra text-aqua-300/80">Illustrative K8 cost</div>
                <div className="font-display text-3xl sm:text-4xl text-silver-100">
                  {formatK(k8TotalCost)}
                </div>
                <div className="text-xs text-silver-400/70">
                  {K8_PRICE} machine + {formatK(ANNUAL_FILTER_COST)}/yr filters × {years} yrs
                </div>
              </div>
              <div className="space-y-1 sm:text-right">
                <div className="text-[10px] uppercase tracking-ultra text-yellow-400/80">
                  {selectedBrand.name} cost over {years} yrs
                </div>
                <div className="font-display text-3xl sm:text-4xl text-yellow-300/90">
                  {formatK(totalBottledCost)}
                </div>
                <div className="text-xs text-silver-400/70">
                  {householdSize} {householdSize === 1 ? "person" : "people"} · ½ gal/person/day
                </div>
              </div>
            </div>

            {/* Interactive Breakeven/Payback Card */}
            <div className="p-5 rounded-2xl border border-aqua-400/30 bg-aqua-400/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-ultra text-aqua-300 font-semibold">
                  Estimated break-even vs {selectedBrand.name}
                </div>
                <p className="text-xs text-silver-300 mt-1 max-w-md leading-relaxed">
                  At this example price, bottled water would cost <strong className="text-silver-100">${Math.round(annualBottled)}/year</strong>. The modeled costs become equal after:
                </p>
              </div>
              <div className="sm:text-right shrink-0">
                <div className="text-3xl font-display font-semibold text-aqua-200">
                  {paybackYears && paybackYears > 0
                    ? paybackYears <= 1
                      ? `${Math.round(paybackYears * 12)} months`
                      : `${paybackYears.toFixed(1)} years`
                    : "No payback (bottled is cheaper)"}
                </div>
                <div className="text-[10px] text-silver-400 uppercase tracking-ultra mt-0.5">
                  Not a guarantee of savings
                </div>
                {paybackYears !== null && paybackYears > years && (
                  <p className="mt-2 text-xs text-silver-400">Outside the selected {years}-year period</p>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <span className="text-sm text-silver-300/80">Modeled {years}-year difference</span>
                <span className={`font-display text-2xl ${totalBottledCost - k8TotalCost > 0 ? "text-aqua-200" : "text-yellow-300"}`}>
                  {totalBottledCost - k8TotalCost > 0
                    ? `${formatK(totalBottledCost - k8TotalCost)} saved`
                    : `${formatK(k8TotalCost - totalBottledCost)} difference`}
                </span>
              </div>
              <div className="text-xs text-silver-400/60 mt-1">
                {totalBottledCost - k8TotalCost > 0
                  ? `The modeled K8 cost is ${formatK(totalBottledCost - k8TotalCost)} lower than this ${selectedBrand.name} example.`
                  : `Buying ${selectedBrand.name} is cheaper by ${formatK(k8TotalCost - totalBottledCost)} over ${years} years in this illustration.`}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8 glass p-6 sm:p-8">
            <div className="kicker">
              Brand-by-brand comparison — {householdSize} {householdSize === 1 ? "person" : "people"} · ½ gal/person/day
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06] text-silver-400/70">
                    <th className="pb-3 pr-4 font-medium text-left">Brand</th>
                    <th className="pb-3 pr-4 font-medium text-right">Per gallon</th>
                    <th className="pb-3 pr-4 font-medium text-right">Per year</th>
                    <th className="pb-3 font-medium text-right whitespace-nowrap">Over {years} yrs</th>
                  </tr>
                </thead>
                <tbody>
                  {BOTTLED_BRANDS.map((brand) => {
                    const annual = bottledAnnualCost(brand, householdSize);
                    const total = bottledTotalCost(brand, householdSize, years);
                    const maxTotal = bottledTotalCost(BOTTLED_BRANDS[0], householdSize, years);
                    const barPct = Math.min((total / maxTotal) * 100, 100);
                    return (
                      <tr
                        key={brand.name}
                        className="border-b border-white/[0.04] last:border-0"
                      >
                        <td className="py-3 pr-4 text-silver-200">
                          <div className="font-medium">{brand.name}</div>
                          <div className="text-[10px] text-silver-400/60 mt-0.5">
                            {brand.note}
                          </div>
                        </td>
                        <td className="py-3 pr-4 text-right text-silver-300/80 tabular-nums">
                          ${brand.costPerGallon.toFixed(2)}
                        </td>
                        <td className="py-3 pr-4 text-right text-silver-300/80 tabular-nums">
                          {formatK(annual)}
                        </td>
                        <td className="py-3 text-right tabular-nums">
                          <div className="flex items-center justify-end gap-2">
                            <div className="h-1.5 rounded-full bg-white/[0.06] w-20 overflow-hidden hidden sm:block">
                              <motion.div
                                key={`${brand.name}-${years}-${householdSize}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${barPct}%` }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="h-full rounded-full bg-aqua-400/60"
                              />
                            </div>
                            <span className="font-mono text-aqua-200 font-medium whitespace-nowrap">
                              {formatK(total)}
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-aqua-400/[0.08] border border-aqua-400/20">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <div>
                  <div className="text-[10px] uppercase tracking-ultra text-aqua-300/80">
                    K8 total over {years} years
                  </div>
                  <div className="mt-1 font-display text-2xl sm:text-3xl text-silver-100">
                    {formatK(k8TotalCost)}
                    <span className="text-base text-silver-400 ml-2">machine + filters</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-ultra text-silver-400/70">
                    Selected brand ({selectedBrand.name}) cost
                  </div>
                  <div className="mt-1 font-display text-xl sm:text-2xl text-yellow-300/90 font-medium">
                    {formatK(totalBottledCost)}
                    <span className="text-base text-silver-400/70"> over {years} yrs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-6 glass p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="font-display text-2xl text-silver-100">What this comparison includes</h3>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-silver-300/85 leading-relaxed">
              <li>Uses the published {K8_PRICE} K8 price and an illustrative $300 per year filter allowance. Actual maintenance depends on water and usage.</li>
              <li>Bottled-water prices are sample inputs, not current retailer quotes. The assumed half gallon per person per day is a comparison input, not a drinking recommendation.</li>
              <li>Excludes tax, shipping, financing charges, installation, source water, electricity, repairs, and replacement machines. These increase costs.</li>
              <li>Assumes one K8 lasts for the entire selected period. A 25-year scenario does not promise 25 years of service.</li>
              <li>Does not include Anespa, medical-cost savings, or assumed replacement of cleaning products. It does not compare water quality or health outcomes.</li>
              <li>Other filtration options may cost less. A lower bottled-water total is a valid result, not a reason to spend beyond your budget.</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
