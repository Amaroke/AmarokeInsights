import React, { useState, useMemo } from "react";
import { FaChartBar } from "react-icons/fa";
import PageLayout from "../components/PageLayout";
import FinanceChart from "../components/FinanceChart";
import NumberField from "../components/NumberField";
import { computeCompoundInterest } from "../utils/finance";

const CompoundInterest: React.FC = () => {
  const [initial, setInitial] = useState(0);
  const [monthly, setMonthly] = useState(1000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(30);

  const data = useMemo(
    () => computeCompoundInterest({ initial, monthly, rate, years }),
    [initial, monthly, rate, years],
  );

  return (
    <PageLayout
      title="Calculateur d'intérêts composés"
      description="Simule la croissance de ton capital grâce aux intérêts composés, mois après mois."
    >
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6 md:mb-0 mb-24">
        <div className="bg-[#1a1a25] rounded-2xl p-6 shadow-lg border border-white/5">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-green-400">
            <FaChartBar /> Paramètres de la simulation
          </h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
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
              label="Taux annuel (%)"
              value={rate}
              onChange={setRate}
              step={0.1}
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
          </div>
        </div>

        <div className="bg-[#1a1a25] rounded-2xl p-6 shadow-lg border border-white/5">
          <h2 className="text-lg font-semibold mb-4 text-yellow-300 flex items-center gap-2">
            <FaChartBar /> Évolution du capital
          </h2>

          <FinanceChart
            data={data}
            xKey="Année"
            yAxisOrientation="right"
            bars={[
              { key: "Apport cumulé", color: "#60a5fa" },
              { key: "Intérêts générés", color: "#4ade80" },
            ]}
            line={{ key: "Capital total", color: "#facc15" }}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default CompoundInterest;
