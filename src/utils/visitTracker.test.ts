import { describe, it, expect, beforeEach } from "vitest";
import { VISIT_KEY, setVisit, isNew } from "./visitTracker";

const daysAgo = (n: number) =>
  new Date(Date.now() - n * 86_400_000).toISOString().slice(0, 10);

describe("isNew", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns false when lastUpdated is empty", () => {
    expect(isNew("basics", "")).toBe(false);
  });

  it("returns true for a recently updated section never visited", () => {
    expect(isNew("basics", daysAgo(3))).toBe(true);
  });

  it("returns false if the update is older than the threshold", () => {
    expect(isNew("basics", "2000-01-01")).toBe(false);
  });

  it("returns false when the section was visited after the update", () => {
    setVisit("basics");
    expect(isNew("basics", daysAgo(3))).toBe(false);
  });

  it("returns true when the visit predates the update", () => {
    localStorage.setItem(
      VISIT_KEY,
      JSON.stringify({ basics: "2020-01-01T00:00:00.000Z" }),
    );
    expect(isNew("basics", daysAgo(3))).toBe(true);
  });

  it("does not crash on corrupted localStorage", () => {
    localStorage.setItem(VISIT_KEY, "{ this is not JSON");
    expect(() => isNew("basics", daysAgo(3))).not.toThrow();
  });
});
