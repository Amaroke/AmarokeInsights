import { type CSSProperties, type ReactNode } from "react";
import {
  ReactFlow,
  Background,
  BaseEdge,
  EdgeLabelRenderer,
  getSmoothStepPath,
  MarkerType,
  type Node,
  type Edge,
  type EdgeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const ACCENT = {
  spine: "#22d3ee",
  action: "#a78bfa",
  safe: "#34d399",
  immo: "#818cf8",
  bourse: "#2dd4bf",
  low: "#60a5fa",
  medium: "#fbbf24",
  high: "#f87171",
  env: "#f472b6",
};

const baseNode = (accent: string): CSSProperties => ({
  background: "linear-gradient(145deg, #0f0f17, #161627)",
  color: "#f3f4f6",
  border: `1px solid ${accent}55`,
  borderTop: `3px solid ${accent}`,
  borderRadius: 14,
  padding: "12px 14px",
  width: 200,
  fontSize: 13,
  lineHeight: 1.4,
  boxShadow: "0 10px 30px rgba(0,0,0,0.55)",
  textAlign: "center",
});

const label = (title: string, desc?: string): ReactNode => (
  <div>
    <div style={{ fontWeight: 700 }}>{title}</div>
    {desc && (
      <div style={{ fontSize: 11, opacity: 0.72, marginTop: 4 }}>{desc}</div>
    )}
  </div>
);

function LabeledEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
  style,
  label: edgeLabel,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} style={style} />
      {edgeLabel && (
        <EdgeLabelRenderer>
          <div
            className="nodrag nopan"
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${targetX}px, ${targetY - 38}px)`,
              background: "#1f1f2e",
              color: "#e5e7eb",
              fontSize: 12,
              fontWeight: 700,
              padding: "2px 7px",
              borderRadius: 6,
              border: "1px solid #333",
            }}
          >
            {edgeLabel}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}

const edgeTypes = { labeled: LabeledEdge };

const W = 210;
const H = 175;
const SX = W * 3;

const staticNodes: Node[] = [
  {
    id: "start",
    type: "input",
    position: { x: SX, y: 0 },
    data: { label: label("J'ai de l'argent disponible") },
    style: baseNode(ACCENT.spine),
  },
  {
    id: "budget",
    position: { x: SX, y: H },
    data: { label: label("Budget maîtrisé & revenus stables ?") },
    style: baseNode(ACCENT.spine),
  },
  {
    id: "stabilize",
    type: "output",
    position: { x: W, y: H * 2 },
    data: {
      label: label(
        "Stabiliser ses finances d'abord",
        "Budget équilibré avant d'investir",
      ),
    },
    style: baseNode(ACCENT.action),
  },
  {
    id: "debt",
    position: { x: SX, y: H * 2 },
    data: { label: label("Dettes à taux élevé ?", "(> 5–7 %)") },
    style: baseNode(ACCENT.spine),
  },
  {
    id: "repay",
    type: "output",
    position: { x: W, y: H * 3 },
    data: {
      label: label(
        "Rembourser en priorité",
        "Un crédit cher coûte plus qu'un placement ne rapporte",
      ),
    },
    style: baseNode(ACCENT.action),
  },
  {
    id: "emergency",
    position: { x: SX, y: H * 3 },
    data: {
      label: label(
        "Épargne de sécurité établie",
        "3 à 6 mois de dépenses mise de côté (LEP, Livret A, LDDS)",
      ),
    },
    style: baseNode(ACCENT.spine),
  },

  {
    id: "secure",
    position: { x: W * 0.5, y: H * 4 },
    data: { label: label("Sécuriser les liquidités", "Capital garanti") },
    style: baseNode(ACCENT.safe),
  },
  {
    id: "secure_dispo",
    position: { x: 0, y: H * 5 },
    data: { label: label("Disponible", "Liquidité immédiate") },
    style: baseNode(ACCENT.safe),
  },
  {
    id: "secure_dispo_env",
    type: "output",
    position: { x: 0, y: H * 6 },
    data: { label: label("Livret A, LDDS, LEP", "Défiscalisés, sans risque") },
    style: baseNode(ACCENT.env),
  },
  {
    id: "secure_terme",
    position: { x: W, y: H * 5 },
    data: { label: label("À terme", "Bloqué quelques mois/années") },
    style: baseNode(ACCENT.safe),
  },
  {
    id: "secure_terme_env",
    type: "output",
    position: { x: W, y: H * 6 },
    data: {
      label: label("Comptes à terme (CAT), fonds euros", "Rendement garanti"),
    },
    style: baseNode(ACCENT.env),
  },

  {
    id: "invest",
    position: { x: W * 5.25, y: H * 4 },
    data: { label: label("Investir", "Immobilier ou bourse ?") },
    style: baseNode(ACCENT.spine),
  },

  {
    id: "immo",
    position: { x: W * 2.5, y: H * 5 },
    data: { label: label("Immobilier", "") },
    style: baseNode(ACCENT.immo),
  },
  {
    id: "rp",
    position: { x: W * 2, y: H * 6 },
    data: { label: label("Résidence principale", "Se loger & capitaliser") },
    style: baseNode(ACCENT.immo),
  },
  {
    id: "rp_env",
    type: "output",
    position: { x: W * 2, y: H * 7 },
    data: {
      label: label("Apport + prêt immobilier", ""),
    },
    style: baseNode(ACCENT.env),
  },
  {
    id: "locatif",
    position: { x: W * 3, y: H * 6 },
    data: { label: label("Investissement locatif", "Générer des revenus") },
    style: baseNode(ACCENT.immo),
  },
  {
    id: "locatif_env",
    type: "output",
    position: { x: W * 3, y: H * 7 },
    data: {
      label: label(
        "Locatif direct, SCPI, crowdfunding",
        "Loyers + valorisation",
      ),
    },
    style: baseNode(ACCENT.env),
  },

  {
    id: "bourse",
    position: { x: W * 8, y: H * 5 },
    data: { label: label("Bourse", "Selon l'appétence au risque") },
    style: baseNode(ACCENT.bourse),
  },
];

interface Term {
  id: string;
  term: string;
  sub: string;
  products: string;
  env?: string;
}
interface RiskBranch {
  key: string;
  accent: string;
  header: string;
  edgeLabel: string;
  col: number;
  terms: Term[];
}

const RISKS: RiskBranch[] = [
  {
    key: "low",
    accent: ACCENT.low,
    header: "Risque faible",
    edgeLabel: "Faible",
    col: 4,
    terms: [
      {
        id: "low_ct",
        term: "Court terme",
        sub: "0–5 ans",
        products: "Livret A, LDDS, comptes à terme (CAT)",
      },
      {
        id: "low_mt",
        term: "Moyen terme",
        sub: "5–15 ans",
        products: "Fonds euros, obligations, CAT",
      },
      {
        id: "low_lt",
        term: "Long terme",
        sub: "15+ ans",
        products: "Obligations & euros, potentielle faible part ETF World",
        env: "via PEA/Assurance-vie",
      },
    ],
  },
  {
    key: "medium",
    accent: ACCENT.medium,
    header: "Risque modéré",
    edgeLabel: "Modéré",
    col: 7,
    terms: [
      {
        id: "med_ct",
        term: "Court terme",
        sub: "0–5 ans",
        products: "Fonds euros + obligations court terme",
        env: "via PEA + Assurance-vie",
      },
      {
        id: "med_mt",
        term: "Moyen terme",
        sub: "5–15 ans",
        products: "≈ 60 % ETF World / 40 % obligations",
        env: "via PEA + Assurance-vie",
      },
      {
        id: "med_lt",
        term: "Long terme",
        sub: "15+ ans",
        products: "100% ETF World",
        env: "via PEA + Assurance-vie",
      },
    ],
  },
  {
    key: "high",
    accent: ACCENT.high,
    header: "Risque élevé",
    edgeLabel: "Élevé",
    col: 10,
    terms: [
      {
        id: "high_mt",
        term: "Moyen terme",
        sub: "5–15 ans",
        products: "ETF World + potentiels ETF thématiques (selon conviction)",
        env: "via PEA / CTO / PER / AV",
      },
      {
        id: "high_lt",
        term: "Long terme",
        sub: "15+ ans",
        products:
          "ETF thématiques (selon conviction) + potentielles Actions en direct (selon conviction)",
        env: "via PEA / CTO / PER / AV",
      },
    ],
  },
];

const riskNodes: Node[] = RISKS.flatMap((r) => {
  const n = r.terms.length;
  const head: Node = {
    id: `head_${r.key}`,
    position: { x: W * (r.col + (n - 1) / 2), y: H * 6 },
    data: { label: label(r.header, "Selon l'horizon") },
    style: baseNode(r.accent),
  };
  const children = r.terms.flatMap((t, i): Node[] => {
    const x = W * (r.col + i);
    return [
      {
        id: t.id,
        position: { x, y: H * 7 },
        data: { label: label(t.term, t.sub) },
        style: baseNode(r.accent),
      },
      {
        id: `${t.id}_env`,
        type: "output",
        position: { x, y: H * 8 },
        data: { label: label(t.products, t.env) },
        style: baseNode(ACCENT.env),
      },
    ];
  });
  return [head, ...children];
});

const nodes: Node[] = [...staticNodes, ...riskNodes];

const staticEdges: Edge[] = [
  { id: "e0", source: "start", target: "budget" },
  { id: "e0a", source: "budget", target: "stabilize", label: "Non" },
  { id: "e0b", source: "budget", target: "debt", label: "Oui" },
  { id: "e2", source: "debt", target: "repay", label: "Oui" },
  { id: "e3", source: "debt", target: "emergency", label: "Non" },
  { id: "e_secure", source: "emergency", target: "secure", label: "Sécuriser" },
  { id: "e_invest", source: "emergency", target: "invest", label: "Investir" },
  {
    id: "e_sd",
    source: "secure",
    target: "secure_dispo",
    label: "Disponible",
  },
  { id: "e_sd_env", source: "secure_dispo", target: "secure_dispo_env" },
  { id: "e_st", source: "secure", target: "secure_terme", label: "À terme" },
  { id: "e_st_env", source: "secure_terme", target: "secure_terme_env" },
  { id: "e_immo", source: "invest", target: "immo", label: "Immobilier" },
  { id: "e_bourse", source: "invest", target: "bourse", label: "Bourse" },
  { id: "e_rp", source: "immo", target: "rp", label: "Se loger" },
  { id: "e_rp_env", source: "rp", target: "rp_env" },
  { id: "e_loc", source: "immo", target: "locatif", label: "Rendement" },
  { id: "e_loc_env", source: "locatif", target: "locatif_env" },
];

const riskEdges: Edge[] = RISKS.flatMap((r) => [
  {
    id: `e_b_${r.key}`,
    source: "bourse",
    target: `head_${r.key}`,
    label: r.edgeLabel,
  },
  ...r.terms.flatMap((t): Edge[] => [
    { id: `e_${t.id}`, source: `head_${r.key}`, target: t.id },
    { id: `e_${t.id}_env`, source: t.id, target: `${t.id}_env` },
  ]),
]);

const edges: Edge[] = [...staticEdges, ...riskEdges];

const defaultEdgeOptions = {
  type: "labeled",
  style: { stroke: "rgba(148,163,184,0.55)", strokeWidth: 2 },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "rgba(148,163,184,0.85)",
    width: 18,
    height: 18,
  },
};

export default function InvestmentTree() {
  return (
    <div className="mt-4 h-160 rounded-2xl border border-white/10 bg-[#0d0d14] overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: 0.1 }}
        defaultEdgeOptions={defaultEdgeOptions}
        minZoom={0.12}
        nodesDraggable={false}
        nodesConnectable={false}
        nodesFocusable={false}
        edgesFocusable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        panOnScroll={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="rgba(148,163,184,0.12)" gap={26} />
      </ReactFlow>
    </div>
  );
}
