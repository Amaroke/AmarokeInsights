import React, { useState, useMemo } from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaChartBar } from "react-icons/fa";
import PageLayout from "../components/PageLayout";
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
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Capital initial (€)
              </label>
              <input
                type="number"
                value={isNaN(initial) ? "" : initial}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === "") setInitial(NaN);
                  else setInitial(Number(val));
                }}
                className="w-full bg-[#101017] border border-gray-700 rounded-lg p-2 text-gray-200 focus:border-green-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Versement mensuel (€)
              </label>
              <input
                type="number"
                value={isNaN(monthly) ? "" : monthly}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === "") setMonthly(NaN);
                  else setMonthly(Number(val));
                }}
                className="w-full bg-[#101017] border border-gray-700 rounded-lg p-2 text-gray-200 focus:border-green-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Taux annuel (%)
              </label>
              <input
                type="number"
                value={isNaN(rate) ? "" : rate}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === "") setRate(NaN);
                  else setRate(Number(val));
                }}
                className="w-full bg-[#101017] border border-gray-700 rounded-lg p-2 text-gray-200 focus:border-green-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Durée (années)
              </label>
              <input
                type="number"
                value={isNaN(years) ? "" : years}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === "") setYears(NaN);
                  else setYears(Number(val));
                }}
                className="w-full bg-[#101017] border border-gray-700 rounded-lg p-2 text-gray-200 focus:border-green-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a25] rounded-2xl p-6 shadow-lg border border-white/5">
          <h2 className="text-lg font-semibold mb-4 text-yellow-300 flex items-center gap-2">
            <FaChartBar /> Évolution du capital
          </h2>

          <ResponsiveContainer width="100%" height={420}>
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2c2c3a" />
              <XAxis dataKey="Année" stroke="#aaa" />
              <YAxis
                stroke="#aaa"
                orientation="right"
                tickFormatter={(v) => {
                  if (v < 1000) return v.toLocaleString("fr-FR");
                  return `${(v / 1000).toLocaleString("fr-FR")}k`;
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f1f2e",
                  border: "1px solid #333",
                  borderRadius: "10px",
                }}
                formatter={(value) =>
                  `${Number(value).toLocaleString("fr-FR")} €`
                }
              />
              <Legend />
              <Bar
                dataKey="Apport cumulé"
                stackId="a"
                fill="#60a5fa"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="Intérêts générés"
                stackId="a"
                fill="#4ade80"
                radius={[4, 4, 0, 0]}
              />
              <Line
                type="monotone"
                dataKey="Capital total"
                stroke="#facc15"
                strokeWidth={2}
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </PageLayout>
  );
};

export default CompoundInterest;
