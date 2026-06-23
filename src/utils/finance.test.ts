import { describe, it, expect } from "vitest";
import { computeCompoundInterest, computeLoan } from "./finance";

describe("computeCompoundInterest", () => {
  it("returns one point per year, from 0 to years inclusive", () => {
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

  it("year 0 = initial capital, with no interest", () => {
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

  it("compounds correctly over one year (1000 € at 10 %)", () => {
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

  it("treats NaN inputs as 0 (no crash)", () => {
    const data = computeCompoundInterest({
      initial: NaN,
      monthly: NaN,
      rate: NaN,
      years: 2,
    });
    expect(data).toHaveLength(3);
    expect(data[2]["Capital total"]).toBe(0);
  });

  it("neutralizes non-finite values (Infinity)", () => {
    const data = computeCompoundInterest({
      initial: Infinity,
      monthly: 0,
      rate: 0,
      years: 1,
    });
    expect(data[1]["Capital total"]).toBe(0);
  });
});

describe("computeLoan", () => {
  it("returns an empty result when the duration is zero", () => {
    expect(
      computeLoan({ loanAmount: 1000, years: 0, rate: 2, insurance: 0 }),
    ).toEqual({ monthlyPayment: 0, totalPayment: 0, data: [] });
  });

  it("0 % rate: monthly payment = capital / number of months", () => {
    const res = computeLoan({
      loanAmount: 1200,
      years: 1,
      rate: 0,
      insurance: 0,
    });
    expect(res.monthlyPayment).toBeCloseTo(100, 6);
    expect(res.totalPayment).toBe(1200);
  });

  it("computes the monthly payment of a standard loan (100 000 €, 10 years, 5 %)", () => {
    const res = computeLoan({
      loanAmount: 100000,
      years: 10,
      rate: 5,
      insurance: 0,
    });
    expect(Math.round(res.monthlyPayment)).toBe(1061);
  });

  it("insurance increases the total monthly payment", () => {
    const without = computeLoan({
      loanAmount: 100000,
      years: 10,
      rate: 5,
      insurance: 0,
    });
    const with_ = computeLoan({
      loanAmount: 100000,
      years: 10,
      rate: 5,
      insurance: 0.3,
    });
    expect(with_.monthlyPayment).toBeGreaterThan(without.monthlyPayment);
  });

  it("remaining capital approaches 0 at the end of the loan", () => {
    const res = computeLoan({
      loanAmount: 1200,
      years: 1,
      rate: 0,
      insurance: 0,
    });
    const last = res.data[res.data.length - 1];
    expect(last["Capital restant"]).toBe(0);
  });

  it("starts with a year-0 point holding the initial capital", () => {
    const res = computeLoan({
      loanAmount: 100000,
      years: 10,
      rate: 5,
      insurance: 0,
    });
    expect(res.data[0].Année).toBe(0);
    expect(res.data[0]["Capital restant"]).toBe(100000);
  });
});
