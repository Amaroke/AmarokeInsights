import React, { useState, useEffect } from "react";
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
  const [inputs, setInputs] = useState<SimulationInputs>({
    prixMaison: 200000,
    apport: 20000,
    fraisNotaire: 16000,
    dureePret: 20,
    tauxPret: 2.0,
    assurance: 0.2,
    taxeFonciere: 1500,
    entretiens: 2000,
    loyerMensuel: 480,
    rendement: 7,
    appreciation: 1.5,
  });

  const [data, setData] = useState<any[]>([]);
  const { isOpen } = useSidebar();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "" : parseFloat(e.target.value);
    setInputs({ ...inputs, [e.target.name]: value as any });
  };

  const coutTotal = inputs.prixMaison + inputs.fraisNotaire;
  const montantEmprunt = Math.max(coutTotal - inputs.apport, 0);
  const nMonths = Math.round(inputs.dureePret * 12);
  const totalMonths = inputs.dureePret + 5 * 12; // Toujours 30 ans
  const monthlyRate = inputs.tauxPret / 100 / 12;

  const mensualiteHorsAssurance =
    monthlyRate === 0
      ? montantEmprunt / nMonths
      : (montantEmprunt * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -nMonths));

  useEffect(() => {
    const {
      prixMaison,
      tauxPret,
      assurance,
      taxeFonciere,
      entretiens,
      loyerMensuel,
      rendement,
      appreciation,
      apport,
    } = inputs;

    const monthlyRendement = rendement / 100 / 12;
    const monthlyAppreciation = appreciation / 100 / 12;

    let valeurMaison = prixMaison;
    let remainingDebt = montantEmprunt;
    let capitalAchat = apport;
    let capitalLocation = apport;

    const sim: any[] = [
      {
        year: 0,
        Achat: Math.round(capitalAchat),
        Location: Math.round(capitalLocation),
      },
    ];

    let mensualite = mensualiteHorsAssurance;

    for (let month = 1; month <= totalMonths; month++) {
      // Appréciation du bien
      if (month <= nMonths) valeurMaison *= 1 + monthlyAppreciation;

      // ACHAT
      let principal = 0;
      if (month <= nMonths) {
        const interets = remainingDebt * (tauxPret / 100 / 12);
        principal = mensualite - interets;
        if (principal > remainingDebt) principal = remainingDebt;
        remainingDebt -= principal;
      }

      // Capital acheteur = valeur nette détenue dans le bien
      if (month <= nMonths) {
        capitalAchat = valeurMaison - remainingDebt;
      } else {
        // Une fois le prêt remboursé, investir le montant de la mensualité
        const mensualiteInvestissable = mensualiteHorsAssurance;
        capitalAchat =
          capitalAchat * (1 + monthlyRendement) + mensualiteInvestissable;
      }

      // LOCATION
      const chargesMensuelles =
        month <= nMonths ? (taxeFonciere + entretiens) / 12 : 0;
      const assuranceMensuelle =
        month <= nMonths
          ? remainingDebt > 0
            ? (remainingDebt * (assurance / 100)) / 12
            : 0
          : 0;
      const coutAcheteur = mensualite + assuranceMensuelle + chargesMensuelles;
      const diffInvest = Math.max(coutAcheteur - loyerMensuel, 0);
      capitalLocation = capitalLocation * (1 + monthlyRendement) + diffInvest;

      // Sauvegarde annuelle
      if (month % 12 === 0 || month === totalMonths) {
        sim.push({
          year: Math.round(month / 12),
          Achat: Math.round(capitalAchat),
          Location: Math.round(capitalLocation),
        });
      }
    }

    setData(sim);
  }, [inputs, montantEmprunt, mensualiteHorsAssurance, nMonths]);

  return (
    <div className="flex h-screen text-gray-200 bg-[#12121b]">
      <main
        className={`flex-1 overflow-auto pt-16 md:mt-16 md:pt-0 transition-all duration-300 ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="p-6 max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-white">
            Comparateur Achat vs Location
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-gray-200">
            {/* ACHAT */}
            <div className="bg-[#1b1b2a] p-4 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-3">Achat</h2>
              <div className="space-y-2">
                {[
                  { label: "Prix d'achat (€)", name: "prixMaison" },
                  { label: "Apport (€)", name: "apport" },
                  { label: "Frais de notaire (€)", name: "fraisNotaire" },
                  { label: "Durée du prêt (ans)", name: "dureePret" },
                  { label: "Taux d'intérêt (%)", name: "tauxPret", step: 0.01 },
                  {
                    label: "Assurance emprunteur (% annuel)",
                    name: "assurance",
                    step: 0.01,
                  },
                  { label: "Taxe foncière (€ / an)", name: "taxeFonciere" },
                  { label: "Entretiens (€ / an)", name: "entretiens" },
                  {
                    label: "Appréciation annuelle du bien (%)",
                    name: "appreciation",
                    step: 0.1,
                  },
                ].map(({ label, name, step }) => (
                  <div key={name}>
                    <label className="block text-sm">{label}</label>
                    <input
                      type="number"
                      name={name}
                      step={step || 1}
                      value={inputs[name as keyof SimulationInputs] as any}
                      onChange={handleChange}
                      className="w-full border border-gray-600 p-1 rounded bg-[#1e1e2b] text-white"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* LOCATION */}
            <div className="bg-[#1b1b2a] p-4 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-3">Location</h2>
              <div className="space-y-2">
                {[
                  { label: "Loyer mensuel (€)", name: "loyerMensuel" },
                  {
                    label: "Rendement épargne (%)",
                    name: "rendement",
                    step: 0.1,
                  },
                ].map(({ label, name, step }) => (
                  <div key={name}>
                    <label className="block text-sm">{label}</label>
                    <input
                      type="number"
                      name={name}
                      step={step || 1}
                      value={inputs[name as keyof SimulationInputs] as any}
                      onChange={handleChange}
                      className="w-full border border-gray-600 p-1 rounded bg-[#1e1e2b] text-white"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#1b1b2a] p-4 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-3 text-white">
              Évolution du capital net (50 ans)
            </h2>
            <ResponsiveContainer width="100%" height={500}>
              <LineChart data={data}>
                <CartesianGrid stroke="#333" strokeDasharray="5 5" />
                <XAxis
                  dataKey="year"
                  label={{
                    value: "Années",
                    position: "insideBottomRight",
                    offset: -5,
                    fill: "#ccc",
                  }}
                  tick={{ fill: "#ccc" }}
                />
                <YAxis
                  label={{
                    value: "Capital net (€)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#ccc",
                  }}
                  tick={{ fill: "#ccc" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#222",
                    borderRadius: 6,
                    border: "none",
                  }}
                />
                <Legend wrapperStyle={{ color: "#ccc" }} />
                <Line
                  type="monotone"
                  dataKey="Achat"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="Location"
                  stroke="#82ca9d"
                  strokeWidth={2}
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
