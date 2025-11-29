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
import { FaHome, FaCalculator } from "react-icons/fa";
import { useSidebar } from "../context/SidebarContext";

const LoanCalculator: React.FC = () => {
  const { isOpen } = useSidebar();

  const [loanAmount, setLoanAmount] = useState(200000);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(2);
  const [insurance, setInsurance] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const n = years * 12;
    const monthlyRate = rate / 100 / 12;
    const monthlyInsurance = (insurance / 100 / 12) * loanAmount;

    const monthly =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, n))) /
      (Math.pow(1 + monthlyRate, n) - 1);

    const totalMonthly = monthly + monthlyInsurance;
    setMonthlyPayment(totalMonthly);

    let remainingCapital = loanAmount;
    let remainingInterest = monthly * n - loanAmount;
    const pointsTemp: any[] = [];

    for (let month = 1; month <= n; month++) {
      const interest = remainingCapital * monthlyRate;
      const principal = monthly - interest;
      remainingCapital -= principal;
      remainingInterest -= interest;

      if (month % 12 === 0 || month === 1) {
        pointsTemp.push({
          Année: month / 12,
          "Capital restant": Math.max(Math.round(remainingCapital), 0),
          "Intérêts restants": Math.max(Math.round(remainingInterest), 0),
          "Total restant": Math.max(
            Math.round(remainingCapital + remainingInterest),
            0
          ),
        });
      }
    }

    setTotalPayment(Math.round(totalMonthly * n));
    setData(pointsTemp);
  }, [loanAmount, years, rate, insurance]);

  return (
    <div className="flex h-screen text-gray-300 bg-[#12121b]">
      <main
        className={`flex-1 overflow-auto pt-16 md:mt-16 md:pt-0 transition-all duration-300 ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
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
      </main>
    </div>
  );
};

export default LoanCalculator;
