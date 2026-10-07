import { describe, it, expect } from "vitest";
import {
  addTier,
  chartPoints,
  feeAt,
  removeTier,
  toggleTierFeeType,
  updateTierField,
  type FeeBroker,
  type Tier,
} from "./feeSchedule";

const tier = (
  id: string,
  min: number,
  fee: number,
  feeType: Tier["feeType"] = "fixed",
  max: number | null = null,
): Tier => ({ id, min, max, fee, feeType });

const broker = (
  id: string,
  tiers: Tier[],
  amundiPartner = false,
): FeeBroker => ({
  id,
  amundiPartner,
  tiersByCriterion: { "Frais d'ordre": tiers },
});

describe("feeAt", () => {
  it("returns 0 when there is no tier", () => {
    expect(feeAt([], 1000)).toBe(0);
  });

  it("returns the fixed fee whatever the amount", () => {
    expect(feeAt([tier("a", 0, 1)], 5000)).toBe(1);
  });

  it("applies a percent fee to the amount", () => {
    expect(feeAt([tier("a", 0, 0.5, "percent")], 2000)).toBe(10);
  });

  it("selects the tier from successive min values, whatever their order", () => {
    const tiers = [tier("b", 2500, 0.05, "percent"), tier("a", 0, 1.25)];
    expect(feeAt(tiers, 1000)).toBe(1.25);
    expect(feeAt(tiers, 10000)).toBe(5);
  });

  it("keeps the lower tier at its upper boundary", () => {
    const tiers = [tier("a", 0, 2), tier("b", 2500, 0.08, "percent")];
    expect(feeAt(tiers, 2500)).toBe(2);
    expect(feeAt(tiers, 2500.01)).toBeCloseTo(2.000008);
  });

  it("uses the lowest tier at amount 0", () => {
    expect(feeAt([tier("a", 0, 7), tier("b", 1400, 0.5, "percent")], 0)).toBe(
      7,
    );
  });
});

describe("chartPoints", () => {
  it("returns no point when there is no positive axis point", () => {
    expect(
      chartPoints([broker("x", [tier("a", 0, 1)])], "Frais d'ordre", [], false),
    ).toEqual([]);
  });

  it("returns one row per axis point plus 0, with each broker fee", () => {
    const rows = chartPoints(
      [
        broker("x", [tier("a", 0, 1)]),
        broker("y", [tier("a", 0, 1, "percent")]),
      ],
      "Frais d'ordre",
      [1000, 500],
      false,
    );
    expect(rows).toEqual([
      { amount: 0, x: 1, y: 0 },
      { amount: 500, x: 1, y: 5 },
      { amount: 1000, x: 1, y: 10 },
    ]);
  });

  it("adds breakpoints just before and at each tier start inside the axis", () => {
    const rows = chartPoints(
      [broker("x", [tier("a", 0, 2), tier("b", 400, 3), tier("c", 5000, 9)])],
      "Frais d'ordre",
      [1000],
      false,
    );
    expect(rows.map((r) => r.amount)).toEqual([0, 399.9, 400, 1000]);
    expect(rows.map((r) => r.x)).toEqual([2, 2, 2, 3]);
  });

  it("zeroes Amundi partners only when the Amundi purchase is on", () => {
    const brokers = [
      broker("x", [tier("a", 0, 1)], true),
      broker("y", [tier("a", 0, 1)]),
    ];
    expect(chartPoints(brokers, "Frais d'ordre", [1000], true)[1]).toEqual({
      amount: 1000,
      x: 0,
      y: 1,
    });
    expect(chartPoints(brokers, "Frais d'ordre", [1000], false)[1].x).toBe(1);
  });

  it("charges nothing for a criterion without tiers", () => {
    const rows = chartPoints(
      [broker("x", [tier("a", 0, 1)])],
      "Frais de change",
      [1000],
      false,
    );
    expect(rows.map((r) => r.x)).toEqual([0, 0]);
  });
});

describe("tier editing", () => {
  it("adds a tier 1000 above the highest one, copying its fee", () => {
    const tiers = [tier("b", 2500, 0.05, "percent"), tier("a", 0, 1.25)];
    expect(addTier(tiers, "c")).toEqual([
      ...tiers,
      tier("c", 3500, 0.05, "percent", 8500),
    ]);
  });

  it("adds a first tier at 0 to an empty schedule", () => {
    expect(addTier([], "a")).toEqual([tier("a", 0, 0, "fixed", 5000)]);
  });

  it("keeps the last remaining tier", () => {
    const tiers = [tier("a", 0, 1)];
    expect(removeTier(tiers, "a")).toBe(tiers);
  });

  it("removes a tier and moves the new lowest tier to 0", () => {
    const tiers = [tier("a", 0, 1), tier("b", 500, 2), tier("c", 1000, 3)];
    expect(removeTier(tiers, "a")).toEqual([
      tier("b", 0, 2),
      tier("c", 1000, 3),
    ]);
  });

  it("removes an upper tier and keeps the lowest tier starting at 0", () => {
    const tiers = [tier("a", 100, 1), tier("b", 500, 2), tier("c", 1000, 3)];
    expect(removeTier(tiers, "b")).toEqual([
      tier("a", 0, 1),
      tier("c", 1000, 3),
    ]);
  });

  it("updates one field of one tier", () => {
    const tiers = [tier("a", 0, 1), tier("b", 500, 2)];
    expect(updateTierField(tiers, "b", "fee", 4)).toEqual([
      tier("a", 0, 1),
      tier("b", 500, 4),
    ]);
  });

  it("toggles the fee type of one tier", () => {
    const tiers = [tier("a", 0, 1), tier("b", 500, 2, "percent")];
    expect(toggleTierFeeType(tiers, "a")).toEqual([
      tier("a", 0, 1, "percent"),
      tier("b", 500, 2, "percent"),
    ]);
    expect(toggleTierFeeType(tiers, "b")[1].feeType).toBe("fixed");
  });
});
