export const terms = {
  PEE: {
    title: "PEE",
    definition:
      "Plan d’épargne entreprise permettant au salarié d’épargner avec une fiscalité avantageuse.",
  },
} as const;

export type TermKey = keyof typeof terms;
