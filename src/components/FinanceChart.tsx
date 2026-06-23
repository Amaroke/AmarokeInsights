import type { FC } from "react";
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

export interface ChartSeries {
  key: string;
  color: string;
}

interface FinanceChartProps {
  data: object[];
  xKey: string;
  bars: ChartSeries[];
  line: ChartSeries;
  yAxisOrientation?: "left" | "right";
  height?: number;
  startYear?: number;
}

const formatThousands = (v: number) =>
  v < 1000
    ? v.toLocaleString("fr-FR")
    : `${(v / 1000).toLocaleString("fr-FR")}k`;

const formatEuro = (value: unknown) =>
  `${Number(value).toLocaleString("fr-FR")} €`;

const FinanceChart: FC<FinanceChartProps> = ({
  data,
  xKey,
  bars,
  line,
  yAxisOrientation = "left",
  height = 420,
  startYear,
}) => {
  const base = Number.isFinite(startYear) ? (startYear as number) : 0;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <ComposedChart data={data} margin={{ bottom: 24 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2c2c3a" />
        <XAxis
          dataKey={xKey}
          stroke="#aaa"
          height={56}
          angle={-90}
          textAnchor="end"
          tickMargin={8}
          tickFormatter={(v) => String(base + Number(v))}
        />
        <YAxis
          stroke="#aaa"
          orientation={yAxisOrientation}
          tickFormatter={formatThousands}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1f1f2e",
            border: "1px solid #333",
            borderRadius: "10px",
          }}
          formatter={formatEuro}
          labelFormatter={(label) => `Année ${base + Number(label)}`}
        />
        <Legend />
        {bars.map((bar) => (
          <Bar
            key={bar.key}
            dataKey={bar.key}
            stackId="a"
            fill={bar.color}
            radius={[4, 4, 0, 0]}
          />
        ))}
        <Line
          type="monotone"
          dataKey={line.key}
          stroke={line.color}
          strokeWidth={2}
          dot={false}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default FinanceChart;
