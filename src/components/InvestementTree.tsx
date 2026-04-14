import { useMemo } from "react";
import ReactFlow, { Background, MarkerType } from "reactflow";
import "reactflow/dist/style.css";
import dagre from "dagre";

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

const nodes = [
  {
    id: "start",
    data: { label: "J’ai de l’argent disponible" },
    type: "input",
    style: nodeStyle,
  },
  {
    id: "debt",
    data: { label: "Dettes à taux élevé (> 5 à 7 %)" },
    style: nodeStyle,
  },
  {
    id: "repay",
    data: { label: "Rembourser en priorité" },
    style: nodeStyle,
  },
  {
    id: "emergency",
    data: { label: "Épargne de sécurité (3 à 6 mois)" },
    style: nodeStyle,
  },
  {
    id: "risk_appetite",
    data: { label: "Appétence au risque" },
    style: nodeStyle,
  },
  {
    id: "safe",
    data: { label: "Sécuriser les liquidités" },
    style: nodeStyle,
  },
  {
    id: "safe_accounts1",
    data: { label: "LEP (si éligible)" },
    style: nodeStyle,
  },
  {
    id: "safe_accounts2",
    data: { label: "Livret A / LDDS" },
    style: nodeStyle,
  },
  {
    id: "safe_accounts3",
    data: { label: "Autres livrets rémunérés / CEL / PEL" },
    style: nodeStyle,
  },
  {
    id: "horizon_low",
    data: { label: "Choix de l’horizon" },
    style: nodeStyle,
  },
  {
    id: "horizon_medium",
    data: { label: "Choix de l’horizon" },
    style: nodeStyle,
  },
  {
    id: "horizon_high",
    data: { label: "Choix de l’horizon" },
    style: nodeStyle,
  },
  {
    id: "ct_low",
    data: { label: "Court terme (0–5 ans)" },
    style: nodeStyle,
  },
  {
    id: "ct_medium",
    data: { label: "Court terme (0–5 ans)" },
    style: nodeStyle,
  },
  {
    id: "ct_high",
    data: { label: "Court terme (0–5 ans)" },
    style: nodeStyle,
  },
  {
    id: "mt_low",
    data: { label: "Moyen terme (5–15 ans)" },
    style: nodeStyle,
  },
  {
    id: "mt_medium",
    data: { label: "Moyen terme (5–15 ans)" },
    style: nodeStyle,
  },
  {
    id: "mt_high",
    data: { label: "Moyen terme (5–15 ans)" },
    style: nodeStyle,
  },
  {
    id: "lt_low",
    data: { label: "Long terme (15+ ans)" },
    style: nodeStyle,
  },
  {
    id: "lt_medium",
    data: { label: "Long terme (15+ ans)" },
    style: nodeStyle,
  },
  {
    id: "lt_high",
    data: { label: "Long terme (15+ ans)" },
    style: nodeStyle,
  },
];

const edges = [
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
  {
    id: "e10",
    source: "safe_accounts1",
    target: "safe_accounts2",
  },
  {
    id: "e12",
    source: "safe_accounts2",
    target: "safe_accounts3",
  },

  {
    id: "e13",
    source: "horizon_low",
    target: "ct_low",
  },
  {
    id: "e14",
    source: "horizon_low",
    target: "mt_low",
  },
  {
    id: "e15",
    source: "horizon_low",
    target: "lt_low",
  },

  {
    id: "e16",
    source: "horizon_medium",
    target: "ct_medium",
  },
  {
    id: "e17",
    source: "horizon_medium",
    target: "mt_medium",
  },
  {
    id: "e18",
    source: "horizon_medium",
    target: "lt_medium",
  },

  {
    id: "e19",
    source: "horizon_high",
    target: "ct_high",
  },
  {
    id: "e20",
    source: "horizon_high",
    target: "mt_high",
  },
  {
    id: "e21",
    source: "horizon_high",
    target: "lt_high",
  },
];

function getLayouted(nodes: any[], edges: any[]) {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));

  const nodeWidth = 200;
  const nodeHeight = 140;

  g.setGraph({
    rankdir: "TB",
    nodesep: 30,
    ranksep: 50,
    marginx: 20,
    marginy: 20,
    ranker: "tight-tree",
  });

  nodes.forEach((node) => {
    g.setNode(node.id, {
      width: nodeWidth,
      height: nodeHeight,
    });
  });

  edges.forEach((edge) => {
    g.setEdge(edge.source, edge.target, { weight: 2 });
  });

  dagre.layout(g);

  const layoutedNodes = nodes.map((node) => {
    const pos = g.node(node.id);

    return {
      ...node,
      position: {
        x: pos.x - nodeWidth / 2,
        y: pos.y - nodeHeight / 2,
      },
      sourcePosition: "bottom",
      targetPosition: "top",
    };
  });

  return { nodes: layoutedNodes, edges };
}

export default function InvestmentTree() {
  const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(() => {
    return getLayouted(nodes, edges);
  }, []);

  return (
    <div style={{ height: 500 }}>
      <ReactFlow
        nodes={layoutedNodes}
        edges={layoutedEdges}
        fitView
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        fitViewOptions={{ padding: 0 }}
        defaultEdgeOptions={{
          style: {
            stroke: "rgba(34,211,238,0.85)",
            strokeWidth: 4,
          },
          labelStyle: {
            fill: "#ffffff",
            fontSize: 18,
            fontWeight: 800,
          },
          labelBgStyle: {
            fill: "rgba(31, 31, 46, 1)",
            fillOpacity: 1,
            rx: 8,
            ry: 8,
          },
          labelBgPadding: [10, 0],
          labelBgBorderRadius: 8,
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: "rgba(34,211,238,0.95)",
          },
        }}
      >
        <Background color="rgba(34,211,238,0.10)" gap={24} />
      </ReactFlow>
    </div>
  );
}
