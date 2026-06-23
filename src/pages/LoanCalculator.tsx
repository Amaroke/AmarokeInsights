import React, { useState, useMemo } from "react";
import { FaHome, FaCalculator } from "react-icons/fa";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";
import FinanceChart from "../components/FinanceChart";
import NumberField from "../components/NumberField";
import { computeLoan } from "../utils/finance";

const EUR = {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
} as const;

const LoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(200000);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(2);
  const [insurance, setInsurance] = useState(0);
  const [startYear, setStartYear] = useState(new Date().getFullYear());

  const { monthlyPayment, totalPayment, data } = useMemo(
    () => computeLoan({ loanAmount, years, rate, insurance }),
    [loanAmount, years, rate, insurance],
  );

  return (
    <PageLayout
      title="Calculateur de prêt"
      description="Calculez la mensualité, le coût total et l'amortissement de votre prêt."
    >
      <Container gap="md" widePadding>
        <div className="bg-[#1a1a25] rounded-2xl p-6 shadow-lg border border-white/5">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-purple-400">
            <FaCalculator /> Paramètres du prêt
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
            <NumberField
              label="Montant du prêt (€)"
              value={loanAmount}
              onChange={setLoanAmount}
              min={0}
              focusClass="focus:border-purple-400"
            />
            <NumberField
              label="Durée (années)"
              value={years}
              onChange={setYears}
              min={0}
              max={50}
              focusClass="focus:border-purple-400"
            />
            <NumberField
              label="Taux annuel (%)"
              value={rate}
              onChange={setRate}
              min={0}
              step={0.1}
              focusClass="focus:border-purple-400"
            />
            <NumberField
              label="Assurance (%)"
              value={insurance}
              onChange={setInsurance}
              min={0}
              step={0.1}
              focusClass="focus:border-purple-400"
            />
            <NumberField
              label="Année de départ"
              value={startYear}
              onChange={setStartYear}
              min={0}
              focusClass="focus:border-purple-400"
            />
          </div>
        </div>

        <div className="bg-[#1a1a25] rounded-2xl p-6 shadow-lg border border-white/5">
          <h2 className="text-lg font-semibold mb-4 text-purple-400 flex items-center gap-2">
            <FaHome /> Évolution du prêt
          </h2>
          <p>
            <strong>Mensualité totale :</strong>{" "}
            {monthlyPayment.toLocaleString("fr-FR", EUR)}
          </p>
          <p className="mb-4">
            <strong>Total payé :</strong>{" "}
            {totalPayment.toLocaleString("fr-FR", EUR)}
          </p>
          <FinanceChart
            data={data}
            xKey="Année"
            startYear={startYear}
            bars={[
              { key: "Capital restant", color: "#9333ea" },
              { key: "Intérêts restants", color: "#f472b6" },
            ]}
            line={{ key: "Total restant", color: "#facc15" }}
          />
          <p className="mt-4 text-xs text-gray-500">
            Estimation simplifiée à titre indicatif : mensualité constante
            (amortissement classique), assurance calculée sur le capital initial
            pour toute la durée. Les frais de dossier et de garantie ne sont pas
            inclus.
          </p>
        </div>
      </Container>
    </PageLayout>
  );
};

export default LoanCalculator;
