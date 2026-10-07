export type FeeType = "fixed" | "percent";

export interface Tier {
  id: string;
  min: number;
  max: number | null;
  fee: number;
  feeType: FeeType;
}

export interface FeeBroker {
  id: string;
  amundiPartner: boolean;
  tiersByCriterion: Record<string, Tier[]>;
}

export type ChartRow = Record<string, number> & { amount: number };

const byMin = (a: Tier, b: Tier) => a.min - b.min;

export const sortTiers = (tiers: Tier[]): Tier[] => [...tiers].sort(byMin);

export const feeAt = (tiers: Tier[], amount: number): number => {
  if (tiers.length === 0) return 0;
  const sorted = sortTiers(tiers);
  let current = sorted[0];
  for (const tier of sorted) {
    if (tier.min < amount) current = tier;
  }
  return current.feeType === "percent"
    ? amount * (current.fee / 100)
    : current.fee;
};

export const chartPoints = (
  brokers: FeeBroker[],
  criterion: string,
  axisPoints: number[],
  amundiPurchase: boolean,
): ChartRow[] => {
  const axisMin = 0;
  const axisMax = Math.max(axisMin, ...axisPoints);
  if (axisMax <= axisMin) return [];
  const epsilon = (axisMax - axisMin) * 1e-4;
  const tiersOf = (b: FeeBroker) => b.tiersByCriterion[criterion] ?? [];
  const breakpoints = new Set<number>([axisMin, axisMax]);
  axisPoints.forEach((p) => {
    if (p > axisMin && p < axisMax) breakpoints.add(p);
  });
  brokers.forEach((b) => {
    tiersOf(b).forEach((t) => {
      if (t.min > axisMin && t.min < axisMax) {
        breakpoints.add(Math.max(axisMin, t.min - epsilon));
        breakpoints.add(t.min);
      }
    });
  });
  return Array.from(breakpoints)
    .sort((a, b) => a - b)
    .map((amount) => {
      const row: ChartRow = { amount };
      brokers.forEach((b) => {
        row[b.id] =
          amundiPurchase && b.amundiPartner ? 0 : feeAt(tiersOf(b), amount);
      });
      return row;
    });
};

export const updateTierField = (
  tiers: Tier[],
  tierId: string,
  field: "min" | "max" | "fee",
  value: number | null,
): Tier[] => tiers.map((t) => (t.id === tierId ? { ...t, [field]: value } : t));

export const toggleTierFeeType = (tiers: Tier[], tierId: string): Tier[] =>
  tiers.map((t) =>
    t.id === tierId
      ? { ...t, feeType: t.feeType === "percent" ? "fixed" : "percent" }
      : t,
  );

export const addTier = (tiers: Tier[], id: string): Tier[] => {
  const sorted = sortTiers(tiers);
  const last = sorted[sorted.length - 1];
  const min = last ? last.min + 1000 : 0;
  return [
    ...tiers,
    {
      id,
      min,
      max: min + 5000,
      fee: last?.fee ?? 0,
      feeType: last?.feeType ?? "fixed",
    },
  ];
};

export const removeTier = (tiers: Tier[], tierId: string): Tier[] => {
  if (tiers.length <= 1) return tiers;
  const remaining = tiers.filter((t) => t.id !== tierId);
  const lowest = remaining.reduce((a, b) => (a.min <= b.min ? a : b));
  return remaining.map((t) => (t.id === lowest.id ? { ...t, min: 0 } : t));
};
