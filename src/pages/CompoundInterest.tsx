import React, { useState, useEffect } from "react";
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
import { useSidebar } from "../context/SidebarContext";

const CompoundInterest: React.FC = () => {
  const { isOpen } = useSidebar();

  const [initial, setInitial] = useState(0);
  const [monthly, setMonthly] = useState(1000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(30);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const points = [];
    let capital = initial;
    for (let year = 0; year <= years; year++) {
      if (year > 0) {
        capital = capital * (1 + rate / 100) + monthly * 12;
      }
      const apport = initial + monthly * 12 * year;
      const interets = capital - apport;
      points.push({
        Année: year,
        "Apport cumulé": Math.round(apport),
        "Intérêts générés": Math.round(interets),
        "Capital total": Math.round(capital),
      });
    }
    setData(points);
  }, [initial, monthly, rate, years]);

  return (
    <div className="flex h-screen text-gray-300 bg-[#12121b]">
      <main
        className={`flex-1 overflow-auto pt-16 md:mt-16 md:pt-0 transition-all duration-300 ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
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
                  value={initial}
                  onChange={(e) => setInitial(Number(e.target.value))}
                  className="w-full bg-[#101017] border border-gray-700 rounded-lg p-2 text-gray-200 focus:border-green-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Versement mensuel (€)
                </label>
                <input
                  type="number"
                  value={monthly}
                  onChange={(e) => setMonthly(Number(e.target.value))}
                  className="w-full bg-[#101017] border border-gray-700 rounded-lg p-2 text-gray-200 focus:border-green-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Taux annuel (%)
                </label>
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full bg-[#101017] border border-gray-700 rounded-lg p-2 text-gray-200 focus:border-green-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Durée (années)
                </label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
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
                  tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f1f2e",
                    border: "1px solid #333",
                    borderRadius: "10px",
                  }}
                  formatter={(value: number) =>
                    `${value.toLocaleString("fr-FR")} €`
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
      </main>
    </div>
  );
};

export default CompoundInterest;
