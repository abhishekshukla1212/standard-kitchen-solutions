import { useMemo, useState } from "react";

const serviceRates = {
  kitchen: 1800,
  interior: 1200,
  cabinetry: 1500,
};

function QuoteCalculator() {
  const [category, setCategory] = useState("kitchen");
  const [area, setArea] = useState(120);
  const [material, setMaterial] = useState("standard");
  const [extras, setExtras] = useState({
    plumbing: false,
    lighting: false,
    appliances: false,
  });
  const [email, setEmail] = useState("");

  const materialFactor = useMemo(() => {
    if (material === "premium") return 1.35;
    if (material === "luxury") return 1.6;
    return 1;
  }, [material]);

  const extrasCost = useMemo(() => {
    let cost = 0;
    if (extras.plumbing) cost += 450;
    if (extras.lighting) cost += 300;
    if (extras.appliances) cost += 600;
    return cost;
  }, [extras]);

  const estimate = useMemo(() => {
    const base = serviceRates[category] || serviceRates.kitchen;
    const areaCost = area * 18;
    const total = (base + areaCost) * materialFactor + extrasCost;
    return Math.round(total / 50) * 50;
  }, [category, area, materialFactor, extrasCost]);

  return (
    <section id="estimate" className="bg-white py-24 px-6">
      <div className="mx-auto max-w-6xl rounded-[40px] border border-gray-200 bg-gray-50 p-8 shadow-xl">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gray-500">
              Instant quote calculator
            </p>
            <h2 className="mt-4 text-5xl font-bold text-black">
              Estimate your kitchen or interior remodel.
            </h2>
            <p className="mt-6 max-w-2xl text-gray-600">
              Get an immediate project estimate based on space, material quality, and optional extras.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-gray-700">
                Project type
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="rounded-3xl border border-gray-300 bg-white px-4 py-3 text-base outline-none focus:border-black"
                >
                  <option value="kitchen">Kitchen Remodel</option>
                  <option value="interior">Interior Refresh</option>
                  <option value="cabinetry">Custom Cabinetry</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm text-gray-700">
                Space area (sq ft)
                <input
                  type="number"
                  min="30"
                  max="500"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="rounded-3xl border border-gray-300 bg-white px-4 py-3 text-base outline-none focus:border-black"
                />
              </label>

              <label className="grid gap-2 text-sm text-gray-700">
                Material quality
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="rounded-3xl border border-gray-300 bg-white px-4 py-3 text-base outline-none focus:border-black"
                >
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                  <option value="luxury">Luxury</option>
                </select>
              </label>

              <div className="grid gap-2 text-sm text-gray-700">
                <span>Optional extras</span>
                <label className="inline-flex items-center gap-3 rounded-3xl border border-gray-300 bg-white px-4 py-3">
                  <input
                    type="checkbox"
                    checked={extras.plumbing}
                    onChange={(e) => setExtras((prev) => ({ ...prev, plumbing: e.target.checked }))}
                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  />
                  Plumbing work
                </label>
                <label className="inline-flex items-center gap-3 rounded-3xl border border-gray-300 bg-white px-4 py-3">
                  <input
                    type="checkbox"
                    checked={extras.lighting}
                    onChange={(e) => setExtras((prev) => ({ ...prev, lighting: e.target.checked }))}
                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  />
                  Lighting upgrades
                </label>
                <label className="inline-flex items-center gap-3 rounded-3xl border border-gray-300 bg-white px-4 py-3">
                  <input
                    type="checkbox"
                    checked={extras.appliances}
                    onChange={(e) => setExtras((prev) => ({ ...prev, appliances: e.target.checked }))}
                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  />
                  Appliance package
                </label>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-black/10 bg-white p-8 shadow-xl">
            <div className="text-sm uppercase tracking-[0.35em] text-gray-500">
              Estimated project cost
            </div>
            <div className="mt-6 flex items-end gap-3">
              <span className="text-5xl font-bold text-black">${estimate.toLocaleString()}</span>
              <span className="text-gray-500">approx.</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              This is an instant estimate to help plan your budget. Final pricing will depend on a full site survey.
            </p>

            <div className="mt-8 space-y-3 rounded-3xl bg-gray-50 p-6">
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span>Base service</span>
                <span>${serviceRates[category].toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span>Area charge</span>
                <span>${(area * 18).toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span>Material multiplier</span>
                <span>x{materialFactor}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span>Extras</span>
                <span>${extrasCost.toLocaleString()}</span>
              </div>
            </div>

            <label className="mt-8 grid gap-2 text-sm text-gray-700">
              Email (optional)
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="rounded-3xl border border-gray-300 bg-white px-4 py-3 text-base outline-none focus:border-black"
              />
            </label>

            <button className="mt-6 w-full rounded-3xl bg-black px-6 py-4 text-white transition hover:bg-gray-900">
              Save estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuoteCalculator;
