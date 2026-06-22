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
import { FaHome, FaCalculator } from "react-icons/fa";
import PageLayout from "../components/PageLayout";
import { computeLoan } from "../utils/finance";

const LoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(200000);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(2);
  const [insurance, setInsurance] = useState(0);

  const { monthlyPayment, totalPayment, data } = useMemo(
    () => computeLoan({ loanAmount, years, rate, insurance }),
    [loanAmount, years, rate, insurance],
  );

  return (
    <PageLayout
      title="Calculateur de prêt"
      description="Calcule la mensualité, le coût total et l'amortissement de ton prêt."
    >
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6 md:mb-0 mb-24">
        <div className="bg-[#1a1a25] rounded-2xl p-6 shadow-lg border border-white/5">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-purple-400">
            <FaCalculator /> Paramètres du prêt
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
            {[
              {
                label: "Montant du prêt (€)",
                value: loanAmount,
                setter: setLoanAmount,
              },
              { label: "Durée (années)", value: years, setter: setYears },
              { label: "Taux annuel (%)", value: rate, setter: setRate },
              {
                label: "Assurance (%)",
                value: insurance,
                setter: setInsurance,
              },
            ].map(({ label, value, setter }, i) => (
              <div key={i}>
                <label className="block text-sm text-gray-400 mb-1">
                  {label}
                </label>
                <input
                  type="number"
                  value={isNaN(value) ? "" : value}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "") setter(NaN);
                    else setter(Number(val));
                  }}
                  className="w-full bg-[#101017] border border-gray-700 rounded-lg p-2 text-gray-200 focus:border-purple-400 focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1a1a25] rounded-2xl p-6 shadow-lg border border-white/5">
          <h2 className="text-lg font-semibold mb-4 text-purple-400 flex items-center gap-2">
            <FaHome /> Évolution du prêt
          </h2>
          <p>
            <strong>Mensualité totale :</strong>{" "}
            {monthlyPayment.toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p>
          <p className="mb-4">
            <strong>Total payé :</strong>{" "}
            {totalPayment.toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p>
          <ResponsiveContainer width="100%" height={420}>
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2c2c3a" />
              <XAxis dataKey="Année" stroke="#aaa" />
              <YAxis
                stroke="#aaa"
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
                dataKey="Capital restant"
                stackId="a"
                fill="#9333ea"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="Intérêts restants"
                stackId="a"
                fill="#f472b6"
                radius={[4, 4, 0, 0]}
              />
              <Line
                type="monotone"
                dataKey="Total restant"
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

export default LoanCalculator;
