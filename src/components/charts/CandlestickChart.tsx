import type { FC } from "react";

interface Candle {
  period: string;
  open: number;
  high: number;
  low: number;
  close: number;
  note?: string;
}

const HISTORY: Candle[] = [
  { period: "J1", open: 100, high: 101.5, low: 99, close: 100.8 },
  { period: "J2", open: 100.8, high: 101, low: 97.5, close: 98 },
  { period: "J3", open: 98, high: 106, low: 97, close: 105 },
  { period: "J4", open: 105, high: 107, low: 104, close: 106.5 },
  { period: "J5", open: 106.5, high: 107, low: 99, close: 106, note: "①" },
  { period: "J6", open: 106, high: 112, low: 105, close: 105.5, note: "②" },
  { period: "J7", open: 105.5, high: 106, low: 105, close: 105.6, note: "③" },
];

const GREEN = "#4ade80";
const RED = "#f87171";
const WICK = "#9ca3af";
const GRID = "#2c2c3a";
const AXIS_TEXT = "#9ca3af";

const W = 640;
const H = 280;
const MARGIN = { top: 34, right: 16, bottom: 32, left: 44 };
const PLOT_W = W - MARGIN.left - MARGIN.right;
const PLOT_H = H - MARGIN.top - MARGIN.bottom;

const allPrices = HISTORY.flatMap((c) => [c.high, c.low]);
const priceMin = Math.floor(Math.min(...allPrices) / 5) * 5;
const priceMax = Math.ceil(Math.max(...allPrices) / 5) * 5;

const yFor = (price: number) =>
  MARGIN.top + ((priceMax - price) / (priceMax - priceMin)) * PLOT_H;

const step = PLOT_W / HISTORY.length;
const xFor = (i: number) => MARGIN.left + step * (i + 0.5);

const gridPrices: number[] = [];
for (let p = priceMin; p <= priceMax; p += 5) gridPrices.push(p);

const BODY_WIDTH = Math.min(26, step * 0.5);

const CandlestickChart: FC = () => {
  return (
    <div className="mt-4 space-y-6">
      <div>
        <p className="text-sm font-semibold text-gray-300 mb-2">
          Anatomie d'une bougie
        </p>
        <div className="rounded-2xl border border-white/10 bg-[#0d0d14] p-4 overflow-x-auto">
          <svg viewBox="0 0 440 230" className="w-full h-auto min-w-90">
            <text
              x={110}
              y={20}
              textAnchor="middle"
              fontSize={12}
              fontWeight={600}
              fill="#e5e7eb"
            >
              Haussière (clôture &gt; ouverture)
            </text>
            <line
              x1={110}
              x2={110}
              y1={50}
              y2={190}
              stroke={WICK}
              strokeWidth={2}
            />
            <rect x={90} y={80} width={40} height={70} fill={GREEN} rx={2} />

            <line
              x1={110}
              y1={50}
              x2={185}
              y2={50}
              stroke={GRID}
              strokeDasharray="2 2"
            />
            <text x={190} y={54} fontSize={11} fill={AXIS_TEXT}>
              Plus haut : 109 €
            </text>
            <line
              x1={110}
              y1={80}
              x2={185}
              y2={80}
              stroke={GRID}
              strokeDasharray="2 2"
            />
            <text x={190} y={84} fontSize={11} fill={AXIS_TEXT}>
              Clôture : 107 €
            </text>
            <line
              x1={110}
              y1={150}
              x2={185}
              y2={150}
              stroke={GRID}
              strokeDasharray="2 2"
            />
            <text x={190} y={154} fontSize={11} fill={AXIS_TEXT}>
              Ouverture : 100 €
            </text>
            <line
              x1={110}
              y1={190}
              x2={185}
              y2={190}
              stroke={GRID}
              strokeDasharray="2 2"
            />
            <text x={190} y={194} fontSize={11} fill={AXIS_TEXT}>
              Plus bas : 97 €
            </text>

            <text x={78} y={69} textAnchor="end" fontSize={10} fill={AXIS_TEXT}>
              Mèche haute
            </text>
            <text
              x={78}
              y={119}
              textAnchor="end"
              fontSize={10}
              fill="#e5e7eb"
              fontWeight={600}
            >
              Corps
            </text>
            <text
              x={78}
              y={174}
              textAnchor="end"
              fontSize={10}
              fill={AXIS_TEXT}
            >
              Mèche basse
            </text>

            <text
              x={330}
              y={20}
              textAnchor="middle"
              fontSize={12}
              fontWeight={600}
              fill="#e5e7eb"
            >
              Baissière (clôture &lt; ouverture)
            </text>
            <line
              x1={330}
              x2={330}
              y1={50}
              y2={190}
              stroke={WICK}
              strokeWidth={2}
            />
            <rect x={310} y={80} width={40} height={70} fill={RED} rx={2} />
            <text x={356} y={84} fontSize={11} fill={AXIS_TEXT}>
              Ouverture
            </text>
            <text x={356} y={154} fontSize={11} fill={AXIS_TEXT}>
              Clôture
            </text>
          </svg>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-gray-300 mb-2">
          Exemple sur 7 séances
        </p>
        <div className="rounded-2xl border border-white/10 bg-[#0d0d14] p-4 overflow-x-auto">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto min-w-135">
            {gridPrices.map((p) => (
              <g key={p}>
                <line
                  x1={MARGIN.left}
                  x2={W - MARGIN.right}
                  y1={yFor(p)}
                  y2={yFor(p)}
                  stroke={GRID}
                  strokeDasharray="3 3"
                />
                <text
                  x={MARGIN.left - 8}
                  y={yFor(p) + 4}
                  textAnchor="end"
                  fontSize={11}
                  fill={AXIS_TEXT}
                >
                  {p} €
                </text>
              </g>
            ))}
            {HISTORY.map((c, i) => {
              const x = xFor(i);
              const bullish = c.close >= c.open;
              const color = bullish ? GREEN : RED;
              const bodyTop = yFor(Math.max(c.open, c.close));
              const bodyBottom = yFor(Math.min(c.open, c.close));
              const bodyHeight = Math.max(bodyBottom - bodyTop, 2);
              return (
                <g key={c.period}>
                  <line
                    x1={x}
                    x2={x}
                    y1={yFor(c.high)}
                    y2={yFor(c.low)}
                    stroke={WICK}
                    strokeWidth={1.5}
                  />
                  <rect
                    x={x - BODY_WIDTH / 2}
                    y={bodyTop}
                    width={BODY_WIDTH}
                    height={bodyHeight}
                    fill={color}
                    rx={2}
                  />
                  <text
                    x={x}
                    y={H - MARGIN.bottom + 18}
                    textAnchor="middle"
                    fontSize={11}
                    fill={AXIS_TEXT}
                  >
                    {c.period}
                  </text>
                  {c.note && (
                    <text
                      x={x}
                      y={Math.max(yFor(c.high) - 10, 16)}
                      textAnchor="middle"
                      fontSize={12}
                      fontWeight={700}
                      fill="#fbbf24"
                    >
                      {c.note}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CandlestickChart;
