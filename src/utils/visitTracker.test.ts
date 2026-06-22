import { describe, it, expect, beforeEach } from "vitest";
import { VISIT_KEY, setVisit, isNew } from "./visitTracker";

const daysAgo = (n: number) =>
  new Date(Date.now() - n * 86_400_000).toISOString().slice(0, 10);

describe("isNew", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("retourne false quand lastUpdated est vide", () => {
    expect(isNew("basics", "")).toBe(false);
  });

  it("retourne true pour une section récemment mise à jour et jamais visitée", () => {
    expect(isNew("basics", daysAgo(3))).toBe(true);
  });

  it("retourne false si la mise à jour est plus ancienne que le seuil", () => {
    expect(isNew("basics", "2000-01-01")).toBe(false);
  });

  it("retourne false quand la section a été visitée après la mise à jour", () => {
    setVisit("basics");
    expect(isNew("basics", daysAgo(3))).toBe(false);
  });

  it("retourne true quand la visite est antérieure à la mise à jour", () => {
    localStorage.setItem(
      VISIT_KEY,
      JSON.stringify({ basics: "2020-01-01T00:00:00.000Z" }),
    );
    expect(isNew("basics", daysAgo(3))).toBe(true);
  });

  it("ne crashe pas sur un localStorage corrompu", () => {
    localStorage.setItem(VISIT_KEY, "{ ceci n'est pas du JSON");
    expect(() => isNew("basics", daysAgo(3))).not.toThrow();
  });
});
