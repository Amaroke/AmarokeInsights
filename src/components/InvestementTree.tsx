import { useMemo } from "react";
import {
  ReactFlow,
  Background,
  MarkerType,
  type Node,
  type Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodeStyle = {
  background: "linear-gradient(145deg, #0f0f17, #161627)",
  color: "#f3f4f6",
  border: "1px solid rgba(34,211,238,0.25)",
  borderRadius: 16,
  padding: 18,
  width: 200,
  fontSize: 15,
  lineHeight: 1.5,
  boxShadow: "0 12px 35px rgba(0,0,0,0.6)",
};

// ── Positions manuelles en grille logique ─────────────────────────────────────
// X : 4 colonnes — 0-risque(0), faible(1), modéré(2), élevé(3)
// Y : rangs descendants

const COL = { safe: 0, low: 1, medium: 2, high: 3 };
const W = 240; // espacement horizontal
const H = 160; // espacement vertical

const nodes: Node[] = [
  // Rang 0 — entrée
  {
    id: "start",
    position: { x: W * 1.5, y: 0 },
    data: { label: "J'ai de l'argent disponible" },
    type: "input",
    style: nodeStyle,
  },

  // Rang 1
  {
    id: "debt",
    position: { x: W * 1.5, y: H },
    data: { label: "Dettes à taux élevé (> 5–7 %)" },
    style: nodeStyle,
  },

  // Rang 2 — deux branches
  {
    id: "repay",
    position: { x: W * 0.2, y: H * 2 },
    data: { label: "Rembourser en priorité" },
    style: nodeStyle,
  },
  {
    id: "emergency",
    position: { x: W * 2.5, y: H * 2 },
    data: { label: "Épargne de sécurité (3–6 mois)" },
    style: nodeStyle,
  },

  // Rang 3
  {
    id: "risk_appetite",
    position: { x: W * 2.5, y: H * 3 },
    data: { label: "Appétence au risque" },
    style: nodeStyle,
  },

  // Rang 4 — 4 colonnes
  {
    id: "safe",
    position: { x: W * COL.safe, y: H * 4 },
    data: { label: "Sécuriser les liquidités" },
    style: nodeStyle,
  },
  {
    id: "horizon_low",
    position: { x: W * COL.low, y: H * 4 },
    data: { label: "Choix de l'horizon" },
    style: nodeStyle,
  },
  {
    id: "horizon_medium",
    position: { x: W * COL.medium, y: H * 4 },
    data: { label: "Choix de l'horizon" },
    style: nodeStyle,
  },
  {
    id: "horizon_high",
    position: { x: W * COL.high, y: H * 4 },
    data: { label: "Choix de l'horizon" },
    style: nodeStyle,
  },

  // Rang 5 — livrets (colonne safe)
  {
    id: "safe_accounts1",
    position: { x: W * COL.safe, y: H * 5 },
    data: { label: "LEP (si éligible)" },
    style: nodeStyle,
  },
  {
    id: "safe_accounts2",
    position: { x: W * COL.safe, y: H * 6 },
    data: { label: "Livret A / LDDS" },
    style: nodeStyle,
  },
  {
    id: "safe_accounts3",
    position: { x: W * COL.safe, y: H * 7 },
    data: { label: "Livrets / CEL / PEL" },
    style: nodeStyle,
  },

  // Rang 5-7 — horizons faible
  {
    id: "ct_low",
    position: { x: W * COL.low, y: H * 5 },
    data: { label: "Court terme (0–5 ans)" },
    style: nodeStyle,
  },
  {
    id: "mt_low",
    position: { x: W * COL.low, y: H * 6 },
    data: { label: "Moyen terme (5–15 ans)" },
    style: nodeStyle,
  },
  {
    id: "lt_low",
    position: { x: W * COL.low, y: H * 7 },
    data: { label: "Long terme (15+ ans)" },
    style: nodeStyle,
  },

  // Rang 5-7 — horizons modéré
  {
    id: "ct_medium",
    position: { x: W * COL.medium, y: H * 5 },
    data: { label: "Court terme (0–5 ans)" },
    style: nodeStyle,
  },
  {
    id: "mt_medium",
    position: { x: W * COL.medium, y: H * 6 },
    data: { label: "Moyen terme (5–15 ans)" },
    style: nodeStyle,
  },
  {
    id: "lt_medium",
    position: { x: W * COL.medium, y: H * 7 },
    data: { label: "Long terme (15+ ans)" },
    style: nodeStyle,
  },

  // Rang 5-7 — horizons élevé
  {
    id: "ct_high",
    position: { x: W * COL.high, y: H * 5 },
    data: { label: "Court terme (0–5 ans)" },
    style: nodeStyle,
  },
  {
    id: "mt_high",
    position: { x: W * COL.high, y: H * 6 },
    data: { label: "Moyen terme (5–15 ans)" },
    style: nodeStyle,
  },
  {
    id: "lt_high",
    position: { x: W * COL.high, y: H * 7 },
    data: { label: "Long terme (15+ ans)" },
    style: nodeStyle,
  },
];

const edges: Edge[] = [
  { id: "e1", source: "start", target: "debt" },
  { id: "e2", source: "debt", target: "repay", label: "Oui" },
  { id: "e3", source: "debt", target: "emergency", label: "Non" },
  { id: "e4", source: "emergency", target: "risk_appetite" },
  { id: "e5", source: "risk_appetite", target: "safe", label: "0 Risque" },
  { id: "e6", source: "risk_appetite", target: "horizon_low", label: "Faible" },
  {
    id: "e7",
    source: "risk_appetite",
    target: "horizon_medium",
    label: "Modéré",
  },
  { id: "e8", source: "risk_appetite", target: "horizon_high", label: "Élevé" },
  { id: "e9", source: "safe", target: "safe_accounts1" },
  { id: "e10", source: "safe_accounts1", target: "safe_accounts2" },
  { id: "e11", source: "safe_accounts2", target: "safe_accounts3" },
  { id: "e13", source: "horizon_low", target: "ct_low" },
  { id: "e14", source: "horizon_low", target: "mt_low" },
  { id: "e15", source: "horizon_low", target: "lt_low" },
  { id: "e16", source: "horizon_medium", target: "ct_medium" },
  { id: "e17", source: "horizon_medium", target: "mt_medium" },
  { id: "e18", source: "horizon_medium", target: "lt_medium" },
  { id: "e19", source: "horizon_high", target: "ct_high" },
  { id: "e20", source: "horizon_high", target: "mt_high" },
  { id: "e21", source: "horizon_high", target: "lt_high" },
];

const defaultEdgeOptions = {
  style: { stroke: "rgba(34,211,238,0.85)", strokeWidth: 4 },
  labelStyle: { fill: "#ffffff", fontSize: 18, fontWeight: 800 },
  labelBgStyle: { fill: "rgba(31,31,46,1)", fillOpacity: 1 },
  labelBgPadding: [10, 6] as [number, number],
  labelBgBorderRadius: 8,
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "rgba(34,211,238,0.95)",
  },
};

export default function InvestmentTree() {
  const memoNodes = useMemo(() => nodes, []);
  const memoEdges = useMemo(() => edges, []);

  return (
    <div style={{ height: 500 }}>
      <ReactFlow
        nodes={memoNodes}
        edges={memoEdges}
        fitView
        fitViewOptions={{ padding: 0.1 }}
        defaultEdgeOptions={defaultEdgeOptions}
      >
        <Background color="rgba(34,211,238,0.10)" gap={24} />
      </ReactFlow>
    </div>
  );
}
