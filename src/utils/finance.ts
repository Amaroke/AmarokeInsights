const safe = (v: number | undefined) => (Number.isFinite(v) ? (v as number) : 0);

const clampYears = (v: number) =>
  Math.min(Math.max(Math.trunc(safe(v)), 0), 120);

export interface CompoundInterestParams {
  initial: number;
  monthly: number;
  rate: number;
  years: number;
  taxRate?: number;
  inflationRate?: number;
}

export interface CompoundInterestPoint {
  Année: number;
  "Apport cumulé": number;
  "Intérêts générés": number;
  "Capital total": number;
  "Capital net": number;
  "Ajusté à l'inflation": number;
}

export function computeCompoundInterest(
  params: CompoundInterestParams,
): CompoundInterestPoint[] {
  const initial = safe(params.initial);
  const monthly = safe(params.monthly);
  const rate = safe(params.rate);
  const years = clampYears(params.years);
  const taxRate = safe(params.taxRate);
  const inflationRate = safe(params.inflationRate);

  const points: CompoundInterestPoint[] = [];
  let capital = initial;

  for (let year = 0; year <= years; year++) {
    if (year > 0) {
      capital = capital * (1 + rate / 100) + monthly * 12;
    }
    const apport = initial + monthly * 12 * year;
    const interets = capital - apport;
    const net = apport + interets * (1 - taxRate / 100);
    const netRealValue = net / Math.pow(1 + inflationRate / 100, year);

    points.push({
      Année: year,
      "Apport cumulé": Math.round(apport),
      "Intérêts générés": Math.round(interets),
      "Capital total": Math.round(capital),
      "Capital net": Math.round(safe(net)),
      "Ajusté à l'inflation": Math.round(safe(netRealValue)),
    });
  }

  return points;
}

export interface LoanParams {
  loanAmount: number;
  years: number;
  rate: number;
  insurance: number;
}

export interface AmortizationPoint {
  Année: number;
  "Capital restant": number;
  "Intérêts restants": number;
  "Total restant": number;
}

export interface LoanResult {
  monthlyPayment: number;
  totalPayment: number;
  data: AmortizationPoint[];
}

export function computeLoan(params: LoanParams): LoanResult {
  const loanAmount = safe(params.loanAmount);
  const years = clampYears(params.years);
  const rate = safe(params.rate);
  const insurance = safe(params.insurance);

  const n = years * 12;

  if (n === 0) {
    return { monthlyPayment: 0, totalPayment: 0, data: [] };
  }

  const monthlyRate = rate / 100 / 12;
  const monthlyInsurance = (insurance / 100 / 12) * loanAmount;

  const monthly =
    monthlyRate === 0
      ? loanAmount / n
      : (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, n))) /
        (Math.pow(1 + monthlyRate, n) - 1);

  const totalMonthly = monthly + monthlyInsurance;

  let remainingCapital = loanAmount;
  const data: AmortizationPoint[] = [];

  const pushPoint = (year: number, monthsElapsed: number) => {
    const capital = Math.max(safe(remainingCapital), 0);
    const interest = Math.max(monthly * (n - monthsElapsed) - capital, 0);
    data.push({
      Année: year,
      "Capital restant": Math.round(capital),
      "Intérêts restants": Math.round(interest),
      "Total restant": Math.round(capital + interest),
    });
  };

  pushPoint(0, 0);

  for (let month = 1; month <= n; month++) {
    const interest = remainingCapital * monthlyRate;
    const principal = monthly - interest;

    remainingCapital -= principal;

    if (month % 12 === 0) {
      pushPoint(month / 12, month);
    }
  }

  return {
    monthlyPayment: isNaN(totalMonthly) ? 0 : totalMonthly,
    totalPayment: isNaN(totalMonthly * n) ? 0 : Math.round(totalMonthly * n),
    data,
  };
}
