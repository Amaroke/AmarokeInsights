import React, { useState, useMemo } from "react";
import { FaChartBar } from "react-icons/fa";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";
import FinanceChart from "../components/FinanceChart";
import NumberField from "../components/NumberField";
import { computeCompoundInterest } from "../utils/finance";

const EUR = {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
} as const;

const CompoundInterest: React.FC = () => {
  const [initial, setInitial] = useState(0);
  const [monthly, setMonthly] = useState(1000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(30);
  const [startYear, setStartYear] = useState(new Date().getFullYear());
  const [taxRate, setTaxRate] = useState(18.6);
  const [inflationRate, setInflationRate] = useState(2);

  const data = useMemo(
    () =>
      computeCompoundInterest({
        initial,
        monthly,
        rate,
        years,
        taxRate,
        inflationRate,
      }),
    [initial, monthly, rate, years, taxRate, inflationRate],
  );

  const last = data[data.length - 1];

  return (
    <PageLayout
      title="Calculateur d'intérêts composés"
      description="Simulez la croissance de votre capital avec des versements mensuels et des intérêts composés annuels."
    >
      <Container gap="md" widePadding>
        <div className="bg-[#1a1a25] rounded-2xl p-6 shadow-lg border border-white/5">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-green-400">
            <FaChartBar /> Paramètres de la simulation
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            <NumberField
              label="Capital initial (€)"
              value={initial}
              onChange={setInitial}
              min={0}
              focusClass="focus:border-green-400"
            />
            <NumberField
              label="Versement mensuel (€)"
              value={monthly}
              onChange={setMonthly}
              min={0}
              focusClass="focus:border-green-400"
            />
            <NumberField
              label="Durée (années)"
              value={years}
              onChange={setYears}
              min={0}
              max={100}
              focusClass="focus:border-green-400"
            />
            <NumberField
              label="Taux annuel (%)"
              value={rate}
              onChange={setRate}
              step={0.1}
              focusClass="focus:border-green-400"
            />
            <NumberField
              label="Taux d'imposition (%)"
              value={taxRate}
              onChange={setTaxRate}
              min={0}
              max={100}
              step={0.1}
              focusClass="focus:border-green-400"
            />
            <NumberField
              label="Inflation annuelle (%)"
              value={inflationRate}
              onChange={setInflationRate}
              step={0.1}
              focusClass="focus:border-green-400"
            />
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Par défaut : 18,6 % (taux des prélèvements sociaux) et 2 %
            (inflation moyenne en France sur les 10 dernières années), librement
            modifiables.
          </p>

          <div className="mt-4 pt-4 border-t border-white/5 sm:w-1/3">
            <NumberField
              label="Année de départ"
              value={startYear}
              onChange={setStartYear}
              min={0}
              focusClass="focus:border-green-400"
            />
          </div>
        </div>

        <div className="bg-[#1a1a25] rounded-2xl p-6 shadow-lg border border-white/5">
          <h2 className="text-lg font-semibold mb-4 text-yellow-300 flex items-center gap-2">
            <FaChartBar /> Évolution du capital
          </h2>

          <FinanceChart
            data={data}
            xKey="Année"
            startYear={startYear}
            yAxisOrientation="right"
            bars={[
              { key: "Apport cumulé", color: "#60a5fa" },
              { key: "Intérêts générés", color: "#4ade80" },
            ]}
            lines={[
              { key: "Capital total", color: "#facc15" },
              { key: "Capital net", color: "#a78bfa" },
              { key: "Ajusté à l'inflation", color: "#fb7185" },
            ]}
          />

          <div className="grid sm:grid-cols-3 gap-3 mt-4">
            <div className="bg-[#101017] rounded-xl p-3 border border-white/5">
              <p className="text-xs text-gray-400">Capital brut</p>
              <p className="text-lg font-semibold text-yellow-300">
                {last["Capital total"].toLocaleString("fr-FR", EUR)}
              </p>
            </div>
            <div className="bg-[#101017] rounded-xl p-3 border border-white/5">
              <p className="text-xs text-gray-400">
                Capital net (après impôts)
              </p>
              <p className="text-lg font-semibold text-violet-400">
                {last["Capital net"].toLocaleString("fr-FR", EUR)}
              </p>
            </div>
            <div className="bg-[#101017] rounded-xl p-3 border border-white/5">
              <p className="text-xs text-gray-400">Ajusté à l'inflation</p>
              <p className="text-lg font-semibold text-rose-400">
                {last["Ajusté à l'inflation"].toLocaleString("fr-FR", EUR)}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
};

export default CompoundInterest;
