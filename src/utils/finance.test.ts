import { describe, it, expect } from "vitest";
import { computeCompoundInterest, computeLoan } from "./finance";

describe("computeCompoundInterest", () => {
  it("renvoie un point par année, de 0 à years inclus", () => {
    const data = computeCompoundInterest({
      initial: 0,
      monthly: 0,
      rate: 0,
      years: 30,
    });
    expect(data).toHaveLength(31);
    expect(data[0].Année).toBe(0);
    expect(data[30].Année).toBe(30);
  });

  it("année 0 = capital initial, sans intérêts", () => {
    const [first] = computeCompoundInterest({
      initial: 1000,
      monthly: 50,
      rate: 7,
      years: 10,
    });
    expect(first["Apport cumulé"]).toBe(1000);
    expect(first["Intérêts générés"]).toBe(0);
    expect(first["Capital total"]).toBe(1000);
  });

  it("capitalise correctement sur un an (1000 € à 10 %)", () => {
    const data = computeCompoundInterest({
      initial: 1000,
      monthly: 0,
      rate: 10,
      years: 1,
    });
    expect(data[1]["Capital total"]).toBe(1100);
    expect(data[1]["Apport cumulé"]).toBe(1000);
    expect(data[1]["Intérêts générés"]).toBe(100);
  });

  it("traite les entrées NaN comme 0 (pas de crash)", () => {
    const data = computeCompoundInterest({
      initial: NaN,
      monthly: NaN,
      rate: NaN,
      years: 2,
    });
    expect(data).toHaveLength(3);
    expect(data[2]["Capital total"]).toBe(0);
  });
});

describe("computeLoan", () => {
  it("renvoie un résultat vide quand la durée est nulle", () => {
    expect(
      computeLoan({ loanAmount: 1000, years: 0, rate: 2, insurance: 0 }),
    ).toEqual({ monthlyPayment: 0, totalPayment: 0, data: [] });
  });

  it("taux 0 % : mensualité = capital / nombre de mois", () => {
    const res = computeLoan({
      loanAmount: 1200,
      years: 1,
      rate: 0,
      insurance: 0,
    });
    expect(res.monthlyPayment).toBeCloseTo(100, 6);
    expect(res.totalPayment).toBe(1200);
  });

  it("calcule la mensualité d'un prêt classique (100 000 €, 10 ans, 5 %)", () => {
    const res = computeLoan({
      loanAmount: 100000,
      years: 10,
      rate: 5,
      insurance: 0,
    });
    expect(Math.round(res.monthlyPayment)).toBe(1061);
  });

  it("l'assurance augmente la mensualité totale", () => {
    const sans = computeLoan({
      loanAmount: 100000,
      years: 10,
      rate: 5,
      insurance: 0,
    });
    const avec = computeLoan({
      loanAmount: 100000,
      years: 10,
      rate: 5,
      insurance: 0.3,
    });
    expect(avec.monthlyPayment).toBeGreaterThan(sans.monthlyPayment);
  });

  it("le capital restant tend vers 0 en fin de prêt", () => {
    const res = computeLoan({
      loanAmount: 1200,
      years: 1,
      rate: 0,
      insurance: 0,
    });
    const last = res.data[res.data.length - 1];
    expect(last["Capital restant"]).toBe(0);
  });
});
