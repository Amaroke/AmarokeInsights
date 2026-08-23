import React, { useMemo, useState, type FC } from "react";
import {
  FaPlus,
  FaTrash,
  FaEye,
  FaEyeSlash,
  FaChevronDown,
  FaChevronRight,
  FaHammer,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PageLayout from "../../components/layout/PageLayout";
import Container from "../../components/ui/Container";
import NumberField from "../../components/ui/NumberField";
import Disclaimer from "../../components/ui/Disclaimer";
import InfoBubble from "../../components/ui/InfoBubble";

type FeeType = "fixed" | "percent";

interface Tier {
  id: string;
  min: number;
  max: number | null;
  fee: number;
  feeType: FeeType;
}

interface Broker {
  id: string;
  name: string;
  color: string;
  visible: boolean;
  amundiPartner: boolean;
  tiersByCriterion: Record<string, Tier[]>;
}

const ENVELOPES = ["PEA", "CTO", "Assurance Vie", "PER"] as const;
type Envelope = (typeof ENVELOPES)[number];

const CRITERIA_BY_ENVELOPE: Record<Envelope, string[]> = {
  PEA: [
    "Frais d'ordre",
    "Frais de tenue de compte",
    "Frais de change",
    "Frais de transfert",
  ],
  CTO: [
    "Frais d'ordre",
    "Frais de tenue de compte",
    "Frais de change",
    "Frais de transfert",
  ],
  "Assurance Vie": [
    "Frais de versement",
    "Frais de gestion",
    "Frais d'arbitrage",
    "Frais de transfert",
  ],
  PER: [
    "Frais de versement",
    "Frais de gestion",
    "Frais d'arbitrage",
    "Frais de sortie",
  ],
};

const COLOR_PALETTE = [
  "#34d399",
  "#f87171",
  "#a78bfa",
  "#22d3ee",
  "#fbbf24",
  "#fb7185",
  "#60a5fa",
  "#fb923c",
  "#a3e635",
  "#e879f9",
];

let idSeq = 0;
const makeId = (prefix: string) => `${prefix}-${idSeq++}`;

const defaultTier = (fee = 0): Tier[] => [
  { id: makeId("tier"), min: 0, max: null, fee, feeType: "fixed" },
];

const DEFAULT_BROKERS: Broker[] = [
  {
    id: "xtb",
    name: "XTB",
    color: "#ef4444",
    visible: true,
    amundiPartner: false,
    tiersByCriterion: {
      "Frais d'ordre": [
        {
          id: makeId("tier"),
          min: 0,
          max: 100000,
          fee: 0,
          feeType: "percent",
        },
        {
          id: makeId("tier"),
          min: 100000,
          max: null,
          fee: 0.2,
          feeType: "percent",
        },
      ],
    },
  },
  {
    id: "trade-republic",
    name: "Trade Republic",
    color: "#3b82f6",
    visible: true,
    amundiPartner: false,
    tiersByCriterion: {
      "Frais d'ordre": [
        { id: makeId("tier"), min: 0, max: null, fee: 1, feeType: "fixed" },
      ],
    },
  },
  {
    id: "interactive-brokers",
    name: "Interactive Brokers",
    color: "#22c55e",
    visible: true,
    amundiPartner: false,
    tiersByCriterion: {
      "Frais d'ordre": [
        { id: makeId("tier"), min: 0, max: 2500, fee: 1.25, feeType: "fixed" },
        {
          id: makeId("tier"),
          min: 2500,
          max: null,
          fee: 0.05,
          feeType: "percent",
        },
      ],
    },
  },
  {
    id: "credit-agricole",
    name: "Crédit Agricole",
    color: "#eab308",
    visible: true,
    amundiPartner: false,
    tiersByCriterion: {
      "Frais d'ordre": [
        {
          id: makeId("tier"),
          min: 0,
          max: 500,
          fee: 0.48,
          feeType: "percent",
        },
        {
          id: makeId("tier"),
          min: 500,
          max: 1000,
          fee: 0.18,
          feeType: "percent",
        },
        {
          id: makeId("tier"),
          min: 1000,
          max: null,
          fee: 0.12,
          feeType: "percent",
        },
      ],
    },
  },
  {
    id: "bourse-direct",
    name: "Bourse Direct",
    color: "#a855f7",
    visible: true,
    amundiPartner: true,
    tiersByCriterion: {
      "Frais d'ordre": [
        { id: makeId("tier"), min: 0, max: 198, fee: 0.5, feeType: "percent" },
        { id: makeId("tier"), min: 198, max: 500, fee: 0.99, feeType: "fixed" },
        { id: makeId("tier"), min: 500, max: 1000, fee: 1.9, feeType: "fixed" },
        {
          id: makeId("tier"),
          min: 1000,
          max: 2000,
          fee: 2.9,
          feeType: "fixed",
        },
        {
          id: makeId("tier"),
          min: 2000,
          max: 4400,
          fee: 3.8,
          feeType: "fixed",
        },
        {
          id: makeId("tier"),
          min: 4400,
          max: null,
          fee: 0.09,
          feeType: "percent",
        },
      ],
    },
  },
  {
    id: "saxo",
    name: "Saxo Bank",
    color: "#f97316",
    visible: true,
    amundiPartner: true,
    tiersByCriterion: {
      "Frais d'ordre": [
        { id: makeId("tier"), min: 0, max: 2500, fee: 2, feeType: "fixed" },
        {
          id: makeId("tier"),
          min: 2500,
          max: null,
          fee: 0.08,
          feeType: "percent",
        },
      ],
    },
  },
  {
    id: "fortuneo",
    name: "Fortuneo",
    color: "#06b6d4",
    visible: true,
    amundiPartner: true,
    tiersByCriterion: {
      "Frais d'ordre": [
        { id: makeId("tier"), min: 0, max: 500, fee: 0, feeType: "fixed" },
        {
          id: makeId("tier"),
          min: 500,
          max: null,
          fee: 0.35,
          feeType: "percent",
        },
      ],
    },
  },
  {
    id: "boursobank",
    name: "BoursoBank",
    color: "#ec4899",
    visible: true,
    amundiPartner: true,
    tiersByCriterion: {
      "Frais d'ordre": [
        { id: makeId("tier"), min: 0, max: 500, fee: 1.99, feeType: "fixed" },
        {
          id: makeId("tier"),
          min: 500,
          max: null,
          fee: 0.5,
          feeType: "percent",
        },
      ],
    },
  },
  {
    id: "credit-mutuel",
    name: "Crédit Mutuel",
    color: "#e879f9",
    visible: false,
    amundiPartner: false,
    tiersByCriterion: {
      "Frais d'ordre": [
        {
          id: makeId("tier"),
          min: 0,
          max: null,
          fee: 0.5,
          feeType: "percent",
        },
      ],
    },
  },
  {
    id: "societe-generale",
    name: "Société Générale",
    color: "#22d3ee",
    visible: false,
    amundiPartner: false,
    tiersByCriterion: {
      "Frais d'ordre": [
        {
          id: makeId("tier"),
          min: 0,
          max: 2000,
          fee: 0.5,
          feeType: "percent",
        },
        {
          id: makeId("tier"),
          min: 2000,
          max: 8000,
          fee: 0.45,
          feeType: "percent",
        },
        {
          id: makeId("tier"),
          min: 8000,
          max: null,
          fee: 0.35,
          feeType: "percent",
        },
      ],
    },
  },
  {
    id: "caisse-epargne",
    name: "Caisse d'Épargne",
    color: "#f87171",
    visible: false,
    amundiPartner: false,
    tiersByCriterion: {
      "Frais d'ordre": [
        { id: makeId("tier"), min: 0, max: 1400, fee: 7, feeType: "fixed" },
        {
          id: makeId("tier"),
          min: 1400,
          max: null,
          fee: 0.5,
          feeType: "percent",
        },
      ],
    },
  },
  {
    id: "bnp-paribas",
    name: "BNP Paribas",
    color: "#a3e635",
    visible: false,
    amundiPartner: false,
    tiersByCriterion: {
      "Frais d'ordre": [
        {
          id: makeId("tier"),
          min: 0,
          max: null,
          fee: 0.5,
          feeType: "percent",
        },
      ],
    },
  },
];

const getTiers = (broker: Broker, criterion: string): Tier[] =>
  broker.tiersByCriterion[criterion] ?? defaultTier();

const feeAt = (tiers: Tier[], amount: number): number => {
  if (tiers.length === 0) return 0;
  const sorted = [...tiers].sort((a, b) => a.min - b.min);
  let current = sorted[0];
  for (const tier of sorted) {
    if (tier.min < amount) current = tier;
  }
  return current.feeType === "percent"
    ? amount * (current.fee / 100)
    : current.fee;
};

const formatAmount = (v: number) => `${v.toLocaleString("fr-FR")} €`;

const TabButton: FC<{
  label: string;
  active: boolean;
  onClick: () => void;
}> = ({ label, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors whitespace-nowrap ${
      active
        ? "border-blue-400 text-blue-300 bg-blue-500/10"
        : "border-gray-700 text-gray-400 hover:text-gray-200 hover:border-gray-600"
    }`}
  >
    {label}
  </button>
);

const tierInputClass =
  "w-full bg-[#101017] border border-gray-700 rounded-md px-1.5 py-1 text-[11px] text-gray-200 focus:outline-none focus:border-blue-400";

const BrokerComparator: React.FC = () => {
  const [envelope, setEnvelope] = useState<Envelope>("PEA");
  const [criterion, setCriterion] = useState<string>("Frais d'ordre");
  const [brokers, setBrokers] = useState<Broker[]>(DEFAULT_BROKERS);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [axisPoints, setAxisPoints] = useState<number[]>([
    500, 1000, 2000, 5000, 10000,
  ]);
  const [newPointValue, setNewPointValue] = useState(0);
  const [achatAmundi, setAchatAmundi] = useState(false);

  const axisMin = 0;
  const axisMax = axisPoints.length ? Math.max(0, ...axisPoints) : 0;

  const addAxisPoint = (value: number) =>
    setAxisPoints((prev) =>
      value <= 0 || prev.includes(value)
        ? prev
        : [...prev, value].sort((a, b) => a - b),
    );

  const removeAxisPoint = (value: number) =>
    setAxisPoints((prev) => prev.filter((p) => p !== value));

  const isDeveloped = envelope === "PEA" && criterion === "Frais d'ordre";

  const handleEnvelopeChange = (env: Envelope) => {
    setEnvelope(env);
    const options = CRITERIA_BY_ENVELOPE[env];
    setCriterion((prev) => (options.includes(prev) ? prev : options[0]));
  };

  const toggleExpanded = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const toggleVisible = (id: string) =>
    setBrokers((prev) =>
      prev.map((b) => (b.id === id ? { ...b, visible: !b.visible } : b)),
    );

  const showAllBrokers = () =>
    setBrokers((prev) => prev.map((b) => ({ ...b, visible: true })));

  const hideAllBrokers = () =>
    setBrokers((prev) => prev.map((b) => ({ ...b, visible: false })));

  const toggleAmundi = (id: string) =>
    setBrokers((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, amundiPartner: !b.amundiPartner } : b,
      ),
    );

  const renameBroker = (id: string, name: string) =>
    setBrokers((prev) => prev.map((b) => (b.id === id ? { ...b, name } : b)));

  const recolorBroker = (id: string, color: string) =>
    setBrokers((prev) => prev.map((b) => (b.id === id ? { ...b, color } : b)));

  const removeBroker = (id: string) =>
    setBrokers((prev) => prev.filter((b) => b.id !== id));

  const moveBroker = (id: string, direction: -1 | 1) =>
    setBrokers((prev) => {
      const index = prev.findIndex((b) => b.id === id);
      const target = index + direction;
      if (index < 0 || target < 0 || target >= prev.length) return prev;
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });

  const addBroker = () => {
    const id = makeId("broker");
    setBrokers((prev) => [
      ...prev,
      {
        id,
        name: `Courtier ${prev.length + 1}`,
        color: COLOR_PALETTE[prev.length % COLOR_PALETTE.length],
        visible: true,
        amundiPartner: false,
        tiersByCriterion: {},
      },
    ]);
    setExpanded((prev) => ({ ...prev, [id]: true }));
  };

  const updateTiers = (brokerId: string, updater: (tiers: Tier[]) => Tier[]) =>
    setBrokers((prev) =>
      prev.map((b) => {
        if (b.id !== brokerId) return b;
        const current = getTiers(b, criterion);
        return {
          ...b,
          tiersByCriterion: {
            ...b.tiersByCriterion,
            [criterion]: updater(current),
          },
        };
      }),
    );

  const updateTierField = (
    brokerId: string,
    tierId: string,
    field: "min" | "max" | "fee",
    value: number | null,
  ) =>
    updateTiers(brokerId, (tiers) =>
      tiers.map((t) => (t.id === tierId ? { ...t, [field]: value } : t)),
    );

  const toggleTierFeeType = (brokerId: string, tierId: string) =>
    updateTiers(brokerId, (tiers) =>
      tiers.map((t) =>
        t.id === tierId
          ? { ...t, feeType: t.feeType === "percent" ? "fixed" : "percent" }
          : t,
      ),
    );

  const addTier = (brokerId: string) =>
    updateTiers(brokerId, (tiers) => {
      const sorted = [...tiers].sort((a, b) => a.min - b.min);
      const last = sorted[sorted.length - 1];
      const newMin = last ? last.min + 1000 : 0;
      return [
        ...tiers,
        {
          id: makeId("tier"),
          min: newMin,
          max: newMin + 5000,
          fee: last?.fee ?? 0,
          feeType: last?.feeType ?? "fixed",
        },
      ];
    });

  const removeTier = (brokerId: string, tierId: string) =>
    updateTiers(brokerId, (tiers) => {
      if (tiers.length <= 1) return tiers;
      const remaining = tiers.filter((t) => t.id !== tierId);
      const lowest = remaining.reduce((a, b) => (a.min <= b.min ? a : b));
      return remaining.map((t) => (t.id === lowest.id ? { ...t, min: 0 } : t));
    });

  const visibleBrokers = brokers.filter((b) => b.visible);

  const chartData = useMemo(() => {
    if (axisMax <= axisMin) return [];
    const epsilon = (axisMax - axisMin) * 1e-4;
    const breakpoints = new Set<number>([axisMin, axisMax]);
    axisPoints.forEach((p) => {
      if (p > axisMin && p < axisMax) breakpoints.add(p);
    });
    visibleBrokers.forEach((b) => {
      getTiers(b, criterion).forEach((t) => {
        if (t.min > axisMin && t.min < axisMax) {
          breakpoints.add(Math.max(axisMin, t.min - epsilon));
          breakpoints.add(t.min);
        }
      });
    });
    const sorted = Array.from(breakpoints).sort((a, b) => a - b);
    return sorted.map((amount) => {
      const row: Record<string, number> = { amount };
      visibleBrokers.forEach((b) => {
        row[b.id] =
          achatAmundi && b.amundiPartner
            ? 0
            : feeAt(getTiers(b, criterion), amount);
      });
      return row;
    });
  }, [visibleBrokers, criterion, axisMin, axisMax, axisPoints, achatAmundi]);

  const axisTicks = useMemo(
    () => [0, ...axisPoints].sort((a, b) => a - b),
    [axisPoints],
  );

  const renderLegend = () => (
    <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-2 text-xs text-gray-300">
      {visibleBrokers.map((b) => (
        <li key={b.id} className="flex items-center gap-1.5">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: b.color }}
          />
          {b.name}
        </li>
      ))}
    </ul>
  );

  return (
    <PageLayout
      title="Comparateur de courtiers"
      description="Comparez les frais réels des principaux courtiers selon l'enveloppe, le critère et le montant investi."
    >
      <Container gap="md" widePadding>
        <Disclaimer title="Tarifs 2026 à vérifier avant décision">
          Les paliers de frais affichés par défaut reprennent les grilles
          tarifaires publiées par les courtiers au moment de la rédaction. Elles
          évoluent régulièrement et des offres promotionnelles peuvent
          temporairement les remplacer, vérifiez toujours la grille tarifaire à
          jour sur le site du courtier avant toute décision. Vous pouvez éditer
          manuellement les différents paramètres avec les informations les plus
          récentes pour obtenir un comparatif actualisé.
        </Disclaimer>

        <div className="bg-[#1a1a25] rounded-2xl p-5 shadow-lg border border-white/5 flex flex-nowrap items-center gap-x-6 overflow-x-auto">
          <div className="flex flex-col gap-2 shrink-0">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
              Enveloppe
            </span>
            <div className="flex gap-1.5">
              {ENVELOPES.map((env) => (
                <TabButton
                  key={env}
                  label={env}
                  active={envelope === env}
                  onClick={() => handleEnvelopeChange(env)}
                />
              ))}
            </div>
          </div>
          <div className="w-px self-stretch bg-white/10 shrink-0 hidden sm:block" />
          <div className="flex flex-col gap-2 shrink-0">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
              Critère de comparaison
            </span>
            <div className="flex gap-1.5">
              {CRITERIA_BY_ENVELOPE[envelope].map((c) => (
                <TabButton
                  key={c}
                  label={c}
                  active={criterion === c}
                  onClick={() => setCriterion(c)}
                />
              ))}
            </div>
          </div>
          <div className="w-px self-stretch bg-white/10 shrink-0 hidden sm:block" />
          <div className="flex flex-col gap-2 shrink-0">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
              Amundi
            </span>
            <label
              className="flex items-center gap-2 cursor-pointer"
              title="Frais à 0 € pour les courtiers en partenariat Amundi"
            >
              <input
                type="checkbox"
                checked={achatAmundi}
                onChange={(e) => setAchatAmundi(e.target.checked)}
                className="w-3.5 h-3.5 accent-blue-400 shrink-0"
              />
              <span className="text-xs text-gray-200 font-medium whitespace-nowrap">
                Achat ETF Amundi
              </span>
            </label>
          </div>
        </div>

        {!isDeveloped && (
          <InfoBubble
            icon={<FaHammer />}
            title="Work in Progress"
            color="text-orange-400"
          >
            <p className="leading-relaxed">
              Cet outil est actuellement <strong>en construction</strong> pour
              cette combinaison enveloppe / critère. Seul le comparatif des{" "}
              <strong>frais d'ordre en PEA</strong> est disponible pour le
              moment ; les autres enveloppes (CTO, Assurance Vie, PER) et les
              autres critères seront ajoutés progressivement.
            </p>
          </InfoBubble>
        )}

        {isDeveloped && (
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 items-start">
            <div className="bg-[#1a1a25] rounded-2xl p-5 shadow-lg border border-white/5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-white">Courtiers</h2>
                <span className="text-[11px] text-gray-500">
                  {visibleBrokers.length} / {brokers.length} affichés
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={showAllBrokers}
                  className="text-[11px] font-semibold text-blue-400 hover:text-blue-300"
                >
                  Tout afficher
                </button>
                <span className="text-[11px] text-gray-600">·</span>
                <button
                  type="button"
                  onClick={hideAllBrokers}
                  className="text-[11px] font-semibold text-blue-400 hover:text-blue-300"
                >
                  Tout masquer
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {brokers.map((broker, index) => {
                  const isExpanded = !!expanded[broker.id];
                  const sortedTiers = [...getTiers(broker, criterion)].sort(
                    (a, b) => a.min - b.min,
                  );
                  return (
                    <div
                      key={broker.id}
                      className="bg-[#101017] border border-gray-800 rounded-lg p-2.5 flex flex-col gap-2.5"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-0.5 shrink-0">
                          <button
                            type="button"
                            onClick={() => moveBroker(broker.id, -1)}
                            disabled={index === 0}
                            title="Monter"
                            className="text-gray-600 hover:text-gray-300 disabled:opacity-20 disabled:hover:text-gray-600"
                          >
                            <FaArrowUp size={8} />
                          </button>
                          <button
                            type="button"
                            onClick={() => moveBroker(broker.id, 1)}
                            disabled={index === brokers.length - 1}
                            title="Descendre"
                            className="text-gray-600 hover:text-gray-300 disabled:opacity-20 disabled:hover:text-gray-600"
                          >
                            <FaArrowDown size={8} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleExpanded(broker.id)}
                          className="shrink-0 text-gray-500 hover:text-gray-300"
                          title={
                            isExpanded ? "Réduire" : "Modifier les paliers"
                          }
                        >
                          {isExpanded ? (
                            <FaChevronDown size={11} />
                          ) : (
                            <FaChevronRight size={11} />
                          )}
                        </button>
                        <input
                          type="color"
                          value={broker.color}
                          onChange={(e) =>
                            recolorBroker(broker.id, e.target.value)
                          }
                          title="Couleur du courtier"
                          className="w-3.5 h-3.5 rounded-full border-0 p-0 cursor-pointer shrink-0 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-full [&::-webkit-color-swatch]:border-0"
                        />
                        <input
                          value={broker.name}
                          onChange={(e) =>
                            renameBroker(broker.id, e.target.value)
                          }
                          className="grow min-w-0 bg-transparent text-[13px] font-semibold text-gray-100 focus:outline-none focus:border-b focus:border-blue-400"
                        />
                        <button
                          type="button"
                          onClick={() => toggleVisible(broker.id)}
                          className={`shrink-0 p-0.5 ${
                            broker.visible
                              ? "text-blue-400"
                              : "text-gray-600 hover:text-gray-400"
                          }`}
                          title={
                            broker.visible
                              ? "Masquer sur le graphe"
                              : "Afficher sur le graphe"
                          }
                        >
                          {broker.visible ? (
                            <FaEye size={14} />
                          ) : (
                            <FaEyeSlash size={14} />
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => removeBroker(broker.id)}
                          className="shrink-0 p-0.5 text-gray-600 hover:text-red-400"
                          title="Retirer ce courtier"
                        >
                          <FaTrash size={11} />
                        </button>
                      </div>

                      {isExpanded && (
                        <div className="pl-5 flex flex-col gap-2">
                          <div className="grid grid-cols-[1fr_1fr_1fr_26px_18px] gap-1.5 text-[10px] uppercase tracking-wide text-gray-500 font-semibold">
                            <span>Min €</span>
                            <span>Max €</span>
                            <span>Frais</span>
                            <span></span>
                            <span></span>
                          </div>
                          {sortedTiers.map((tier, idx) => (
                            <div
                              key={tier.id}
                              className="grid grid-cols-[1fr_1fr_1fr_26px_18px] gap-1.5 items-center"
                            >
                              {idx === 0 ? (
                                <span className="text-[11px] text-gray-500 text-center">
                                  0
                                </span>
                              ) : (
                                <input
                                  type="number"
                                  value={tier.min}
                                  onChange={(e) =>
                                    updateTierField(
                                      broker.id,
                                      tier.id,
                                      "min",
                                      Number(e.target.value),
                                    )
                                  }
                                  className={tierInputClass}
                                />
                              )}
                              {idx === sortedTiers.length - 1 ? (
                                <span className="text-[11px] text-gray-500 text-center">
                                  Illimité
                                </span>
                              ) : (
                                <input
                                  type="number"
                                  value={tier.max ?? ""}
                                  onChange={(e) =>
                                    updateTierField(
                                      broker.id,
                                      tier.id,
                                      "max",
                                      Number(e.target.value),
                                    )
                                  }
                                  className={tierInputClass}
                                />
                              )}
                              <input
                                type="number"
                                step="0.01"
                                value={tier.fee}
                                onChange={(e) =>
                                  updateTierField(
                                    broker.id,
                                    tier.id,
                                    "fee",
                                    Number(e.target.value),
                                  )
                                }
                                className={tierInputClass}
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  toggleTierFeeType(broker.id, tier.id)
                                }
                                title={
                                  tier.feeType === "percent"
                                    ? "Frais en pourcentage du montant : cliquer pour passer en montant fixe"
                                    : "Frais en montant fixe : cliquer pour passer en pourcentage"
                                }
                                className="shrink-0 h-full rounded-md border border-gray-700 text-[10px] font-bold text-gray-300 hover:border-blue-400 hover:text-blue-300"
                              >
                                {tier.feeType === "percent" ? "%" : "€"}
                              </button>
                              <button
                                type="button"
                                onClick={() => removeTier(broker.id, tier.id)}
                                disabled={sortedTiers.length <= 1}
                                className="shrink-0 text-gray-600 hover:text-red-400 disabled:opacity-30 disabled:hover:text-gray-600"
                              >
                                <FaTrash size={9} />
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => addTier(broker.id)}
                            className="self-start flex items-center gap-1.5 text-[11px] font-semibold text-blue-400 hover:text-blue-300"
                          >
                            <FaPlus size={8} /> Ajouter un palier
                          </button>

                          <div className="h-px bg-white/5 my-1" />

                          <label className="flex items-start gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={broker.amundiPartner}
                              onChange={() => toggleAmundi(broker.id)}
                              className="mt-0.5 w-3.5 h-3.5 accent-blue-400 shrink-0"
                            />
                            <span className="flex flex-col">
                              <span className="text-xs text-gray-200">
                                Partenariat Amundi
                              </span>
                              <span className="text-[10.5px] text-gray-500">
                                Courtier partenaire (lien affilié)
                              </span>
                            </span>
                          </label>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={addBroker}
                className="w-full flex items-center justify-center gap-2 border border-dashed border-gray-700 rounded-lg py-2.5 text-xs font-semibold text-blue-400 hover:border-blue-400 hover:text-blue-300 transition-colors"
              >
                <FaPlus size={10} /> Ajouter un courtier
              </button>
            </div>

            <div className="bg-[#1a1a25] rounded-2xl p-6 shadow-lg border border-white/5 flex flex-col gap-4">
              <h2 className="text-sm font-bold text-white">
                {criterion} estimés selon le montant investi
              </h2>

              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height={380}>
                  <ComposedChart
                    data={chartData}
                    margin={{ bottom: 8, right: 24 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#2c2c3a" />
                    <XAxis
                      dataKey="amount"
                      type="number"
                      domain={[axisMin, axisMax]}
                      ticks={axisTicks}
                      interval={0}
                      tick={{ fontSize: 9 }}
                      angle={-45}
                      textAnchor="end"
                      height={50}
                      stroke="#aaa"
                      tickFormatter={formatAmount}
                    />
                    <YAxis
                      stroke="#aaa"
                      tickFormatter={(v) => `${v} €`}
                      width={50}
                    />
                    <Tooltip
                      wrapperStyle={{ zIndex: 50 }}
                      contentStyle={{
                        backgroundColor: "#1f1f2e",
                        border: "1px solid #333",
                        borderRadius: "10px",
                      }}
                      labelFormatter={(v) =>
                        `Montant investi : ${formatAmount(Number(v))}`
                      }
                      formatter={(value, _name, item) => [
                        `${Number(value).toLocaleString("fr-FR")} €`,
                        brokers.find((b) => b.id === item.dataKey)?.name ??
                          String(item.dataKey),
                      ]}
                    />
                    <Legend content={renderLegend} />
                    {visibleBrokers.map((b) => (
                      <Line
                        key={b.id}
                        type="linear"
                        dataKey={b.id}
                        name={b.name}
                        stroke={b.color}
                        strokeWidth={2.2}
                        dot={false}
                        isAnimationActive={false}
                      />
                    ))}
                  </ComposedChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-sm text-gray-500 py-16 text-center">
                  Le montant maximum doit être supérieur au montant minimum.
                </p>
              )}

              <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Points de l'axe (montant investi)
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center bg-[#101017] border border-gray-800 rounded-full px-3 py-1 text-xs text-gray-500">
                    {formatAmount(0)}
                  </span>
                  {axisPoints.map((point) => (
                    <span
                      key={point}
                      className="flex items-center gap-1.5 bg-[#101017] border border-gray-700 rounded-full pl-3 pr-1.5 py-1 text-xs text-gray-200"
                    >
                      {formatAmount(point)}
                      <button
                        type="button"
                        onClick={() => removeAxisPoint(point)}
                        title="Retirer ce point"
                        className="text-gray-600 hover:text-red-400"
                      >
                        <FaTrash size={9} />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex items-end gap-2">
                  <div className="w-40">
                    <NumberField
                      label="Ajouter un point"
                      value={newPointValue}
                      onChange={setNewPointValue}
                      min={0}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => addAxisPoint(newPointValue)}
                    className="flex items-center gap-1.5 h-9 px-3 rounded-md border border-dashed border-gray-700 text-xs font-semibold text-blue-400 hover:border-blue-400 hover:text-blue-300"
                  >
                    <FaPlus size={9} /> Ajouter
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </PageLayout>
  );
};

export default BrokerComparator;
