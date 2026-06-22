// Calculs financiers purs (sans dépendance React), réutilisés par les pages
// calculatrices et couverts par des tests unitaires.

const safe = (v: number) => (isNaN(v) ? 0 : v);

export interface CompoundInterestParams {
  /** Capital de départ (€). */
  initial: number;
  /** Versement mensuel (€). */
  monthly: number;
  /** Taux annuel (%). */
  rate: number;
  /** Durée (années). */
  years: number;
}

export interface CompoundInterestPoint {
  Année: number;
  "Apport cumulé": number;
  "Intérêts générés": number;
  "Capital total": number;
}

/**
 * Projection année par année d'un capital avec versements mensuels et
 * capitalisation annuelle des intérêts.
 */
export function computeCompoundInterest(
  params: CompoundInterestParams,
): CompoundInterestPoint[] {
  const initial = safe(params.initial);
  const monthly = safe(params.monthly);
  const rate = safe(params.rate);
  const years = safe(params.years);

  const points: CompoundInterestPoint[] = [];
  let capital = initial;

  for (let year = 0; year <= years; year++) {
    if (year > 0) {
      capital = capital * (1 + rate / 100) + monthly * 12;
    }
    const apport = initial + monthly * 12 * year;
    const interets = capital - apport;

    points.push({
      Année: year,
      "Apport cumulé": Math.round(apport),
      "Intérêts générés": Math.round(interets),
      "Capital total": Math.round(capital),
    });
  }

  return points;
}

export interface LoanParams {
  /** Montant emprunté (€). */
  loanAmount: number;
  /** Durée (années). */
  years: number;
  /** Taux annuel (%). */
  rate: number;
  /** Taux d'assurance annuel (%). */
  insurance: number;
}

export interface AmortizationPoint {
  Année: number;
  "Capital restant": number;
  "Intérêts restants": number;
  "Total restant": number;
}

export interface LoanResult {
  /** Mensualité totale (crédit + assurance), en €. */
  monthlyPayment: number;
  /** Coût total payé sur toute la durée, arrondi en €. */
  totalPayment: number;
  /** Tableau d'amortissement annuel pour le graphique. */
  data: AmortizationPoint[];
}

/**
 * Calcule la mensualité, le coût total et le tableau d'amortissement d'un prêt
 * à taux fixe (avec assurance optionnelle calculée sur le capital initial).
 */
export function computeLoan(params: LoanParams): LoanResult {
  const loanAmount = safe(params.loanAmount);
  const years = safe(params.years);
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
  let remainingInterest = monthly * n - loanAmount;
  const data: AmortizationPoint[] = [];

  for (let month = 1; month <= n; month++) {
    const interest = remainingCapital * monthlyRate;
    const principal = monthly - interest;

    remainingCapital -= principal;
    remainingInterest -= interest;

    if (month % 12 === 0 || month === 1) {
      data.push({
        Année: month / 12,
        "Capital restant": Math.max(
          Math.round(isNaN(remainingCapital) ? 0 : remainingCapital),
          0,
        ),
        "Intérêts restants": Math.max(
          Math.round(isNaN(remainingInterest) ? 0 : remainingInterest),
          0,
        ),
        "Total restant": Math.max(
          Math.round(
            isNaN(remainingCapital + remainingInterest)
              ? 0
              : remainingCapital + remainingInterest,
          ),
          0,
        ),
      });
    }
  }

  return {
    monthlyPayment: isNaN(totalMonthly) ? 0 : totalMonthly,
    totalPayment: isNaN(totalMonthly * n) ? 0 : Math.round(totalMonthly * n),
    data,
  };
}
