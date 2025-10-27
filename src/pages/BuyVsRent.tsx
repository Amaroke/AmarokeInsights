import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaHammer } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";

interface SimulationInputs {
  prixMaison: number;
  apport: number;
  fraisNotaire: number;
  dureePret: number;
  tauxPret: number;
  assurance: number;
  taxeFonciere: number;
  entretiens: number;
  loyerMensuel: number;
  rendement: number;
  appreciation: number;
}

const BuyVsRent: React.FC = () => {
  const { isOpen } = useSidebar();

  const [inputs, setInputs] = useState<SimulationInputs>({
    prixMaison: 220000,
    apport: 20000,
    fraisNotaire: 16000,
    dureePret: 20,
    tauxPret: 3.5,
    assurance: 0.3,
    taxeFonciere: 1500,
    entretiens: 2000,
    loyerMensuel: 800,
    rendement: 6,
    appreciation: 1.5,
  });

  const [data, setData] = useState<any[]>([]);
  const [finals, setFinals] = useState({
    achat: 0,
    location: 0,
    monthlyOwnerCost: 0,
    monthlyPI: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "" : parseFloat(e.target.value);
    setInputs({ ...inputs, [e.target.name]: value as any });
  };

  useEffect(() => {
    const {
      prixMaison,
      apport,
      fraisNotaire,
      dureePret,
      tauxPret,
      assurance,
      taxeFonciere,
      entretiens,
      loyerMensuel,
      rendement,
      appreciation,
    } = inputs;

    const montantEmprunt = Math.max(prixMaison + fraisNotaire - apport, 0);
    const nMonths = Math.round(dureePret * 12);
    const totalMonths = 50 * 12;

    const monthlyRate = tauxPret / 100 / 12;
    const mensualitePI =
      monthlyRate === 0
        ? montantEmprunt / nMonths
        : (montantEmprunt * monthlyRate * Math.pow(1 + monthlyRate, nMonths)) /
          (Math.pow(1 + monthlyRate, nMonths) - 1);

    let valeurMaison = prixMaison;
    const monthlyApprec = appreciation / 100 / 12;
    const monthlyRendement = rendement / 100 / 12;

    let remainingDebt = montantEmprunt;
    let capitalAchat = apport;
    let capitalLocation = apport;

    const sim: any[] = [];
    sim.push({
      Année: 0,
      Achat: Math.round(capitalAchat),
      Location: Math.round(capitalLocation),
    });

    let monthlyOwnerCostAtStart = 0;
    let monthlyPIRecorded = mensualitePI;

    for (let month = 1; month <= totalMonths; month++) {
      valeurMaison *= 1 + monthlyApprec;

      const monthlyInsurance =
        ((assurance / 100) * Math.max(remainingDebt, 0)) / 12;

      if (month <= nMonths && remainingDebt > 0) {
        const interest = remainingDebt * monthlyRate;
        let principal = mensualitePI - interest;
        if (principal > remainingDebt) principal = remainingDebt;
        remainingDebt -= principal;
        if (remainingDebt < 1e-8) remainingDebt = 0;
      }

      const mensualitePIThisMonth = month <= nMonths ? mensualitePI : 0;
      const ownerMonthlyCost =
        mensualitePIThisMonth +
        monthlyInsurance +
        taxeFonciere / 12 +
        entretiens / 12;

      if (month === 1) {
        monthlyOwnerCostAtStart = ownerMonthlyCost;
        monthlyPIRecorded = mensualitePI;
      }

      if (month > nMonths) {
        capitalAchat = capitalAchat * (1 + monthlyRendement) + ownerMonthlyCost;
      } else {
        capitalAchat = valeurMaison - remainingDebt;
      }

      const diffInvest = Math.max(ownerMonthlyCost - loyerMensuel, 0);
      capitalLocation = capitalLocation * (1 + monthlyRendement) + diffInvest;

      if (month % 12 === 0 || month === totalMonths) {
        sim.push({
          Année: Math.round(month / 12),
          Achat: Math.round(capitalAchat),
          Location: Math.round(capitalLocation),
        });
      }
    }

    const finalAchat = sim[sim.length - 1].Achat;
    const finalLocation = sim[sim.length - 1].Location;

    setData(sim);
    setFinals({
      achat: finalAchat,
      location: finalLocation,
      monthlyOwnerCost: monthlyOwnerCostAtStart,
      monthlyPI: monthlyPIRecorded,
    });
  }, [inputs]);

  const fmt = (n: number) =>
    n.toLocaleString("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    });

  return (
    <div className="flex h-screen text-gray-300 bg-[#12121b]">
      <main
        className={`flex-1 overflow-auto pt-16 md:mt-16 md:pt-0 transition-all duration-300 ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <InfoBubble
            icon={<FaHammer />}
            title="Work in Progress"
            color="text-orange-400"
          >
            <p className="leading-relaxed">
              Cette page est actuellement <strong>en construction</strong>.
            </p>
          </InfoBubble>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a25] rounded-2xl p-6 border border-white/5 shadow-lg">
              <h2 className="text-lg font-semibold mb-4 text-pink-400">
                Achat
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Prix du bien (€)", name: "prixMaison" },
                  { label: "Apport (€)", name: "apport" },
                  { label: "Frais de notaire (€)", name: "fraisNotaire" },
                  { label: "Durée du prêt (ans)", name: "dureePret" },
                  { label: "Taux d'intérêt (%)", name: "tauxPret", step: 0.1 },
                  {
                    label: "Assurance (% annuel)",
                    name: "assurance",
                    step: 0.01,
                  },
                  { label: "Taxe foncière (€ / an)", name: "taxeFonciere" },
                  { label: "Entretiens (€ / an)", name: "entretiens" },
                  {
                    label: "Appréciation annuelle (%)",
                    name: "appreciation",
                    step: 0.1,
                  },
                ].map(({ label, name, step }) => (
                  <div key={name}>
                    <label className="block text-sm text-gray-400 mb-1">
                      {label}
                    </label>
                    <input
                      type="number"
                      name={name}
                      step={step || 1}
                      value={inputs[name as keyof SimulationInputs] as any}
                      onChange={handleChange}
                      className="w-full bg-[#101017] border border-gray-700 rounded-lg p-2 text-gray-200 focus:border-pink-400 focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a25] rounded-2xl p-6 border border-white/5 shadow-lg">
              <h2 className="text-lg font-semibold mb-4 text-purple-400">
                Location
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Loyer mensuel (€)", name: "loyerMensuel" },
                  {
                    label: "Rendement annuel (%)",
                    name: "rendement",
                    step: 0.1,
                  },
                ].map(({ label, name, step }) => (
                  <div key={name}>
                    <label className="block text-sm text-gray-400 mb-1">
                      {label}
                    </label>
                    <input
                      type="number"
                      name={name}
                      step={step || 1}
                      value={inputs[name as keyof SimulationInputs] as any}
                      onChange={handleChange}
                      className="w-full bg-[#101017] border border-gray-700 rounded-lg p-2 text-gray-200 focus:border-purple-400 focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a25] rounded-2xl p-6 border border-white/5 shadow-lg flex flex-col md:flex-row justify-between gap-4">
            <div>
              <p className="text-sm text-gray-400">
                Mensualité P&I approximative :
              </p>
              <p className="text-lg font-semibold">{fmt(finals.monthlyPI)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Coût propriétaire initial (mensuel, approx) :
              </p>
              <p className="text-lg font-semibold">
                {fmt(finals.monthlyOwnerCost)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Résultat après 50 ans (Achat) :
              </p>
              <p className="text-lg font-semibold text-pink-400">
                {fmt(finals.achat)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Résultat après 50 ans (Location) :
              </p>
              <p className="text-lg font-semibold text-purple-400">
                {fmt(finals.location)}
              </p>
            </div>
          </div>

          <div className="bg-[#1a1a25] rounded-2xl p-6 border border-white/5 shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-purple-400">
              Évolution du capital net (50 ans)
            </h2>

            <ResponsiveContainer width="100%" height={420}>
              <LineChart data={data}>
                <CartesianGrid stroke="#2c2c3a" strokeDasharray="3 3" />
                <XAxis dataKey="Année" stroke="#aaa" />
                <YAxis
                  stroke="#aaa"
                  tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f1f2e",
                    border: "1px solid #333",
                    borderRadius: 8,
                  }}
                  formatter={(value: number) =>
                    `${value.toLocaleString("fr-FR")} €`
                  }
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Achat"
                  stroke="#d946ef"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Location"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuyVsRent;
