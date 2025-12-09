export const terms = {
  AssuranceVie: {
    title: "Assurance-vie",
    definition:
      "Contrat d’épargne flexible permettant d’investir sur différents supports (fonds euros et unités de compte) avec une fiscalité avantageuse après 8 ans.",
  },
  BCE: {
    title: "BCE",
    definition:
      "Banque Centrale Européenne : La banque chargée de gérer la monnaie unique (l’euro) et la politique monétaire dans la zone euro, notamment en fixant les taux d’intérêt et en veillant à la stabilité des prix.",
  },
  ESG: {
    title: "ESG",
    definition:
      "Environnement, Social, Gouvernance : ce sont des critères utilisés pour évaluer la responsabilité et la durabilité d’une entreprise dans ses pratiques environnementales, sociales et de gouvernance. Les investissements ESG cherchent à concilier performance financière et impact positif sur la société et la planète.",
  },
  ETF: {
    title: "ETF",
    definition:
      "Exchange Traded Fund : fonds indiciel coté en Bourse qui réplique la performance d’un indice (comme le CAC 40 ou le S&P 500) tout en étant facile à acheter et à faible coût.",
  },

  LDDS: {
    title: "LDDS",
    definition:
      "Livret de Développement Durable et Solidaire : un livret d’épargne réglementé, sécurisé et défiscalisé, permettant de placer jusqu’à un plafond fixé par l’État tout en soutenant des projets à vocation sociale ou environnementale.",
  },
  LivretA: {
    title: "Livret A",
    definition:
      "Livret d’épargne réglementé, sécurisé et entièrement défiscalisé, avec un taux fixé par l’État et un plafond limité.",
  },
  PEA: {
    title: "PEA",
    definition:
      "Plan d’Épargne en Actions : compte permettant d’investir en actions européennes avec une fiscalité avantageuse après 5 ans, tout en bénéficiant d’un cadre réglementé.",
  },
  PEE: {
    title: "PEE",
    definition:
      "Plan d’épargne entreprise permettant au salarié d’épargner avec une fiscalité avantageuse.",
  },
  PER: {
    title: "PER",
    definition:
      "Plan d’Épargne Retraite : produit d’épargne permettant de préparer la retraite avec des avantages fiscaux, en bloquant généralement les fonds jusqu’à la retraite sauf cas de déblocage anticipé.",
  },
  PFU: {
    title: "PFU",
    definition:
      "Prélèvement Forfaitaire Unique : Taxe forfaitaire de 30 % sur les revenus du capital (dividendes, intérêts, plus-values) en France, comprenant 12,8 % d’impôt sur le revenu et 17,2 % de prélèvements sociaux.",
  },
  SEPA: {
    title: "SEPA",
    definition:
      "Single Euro Payments Area : L’espace unique de paiement en euros qui permet d’effectuer des virements, prélèvements et paiements par carte facilement et rapidement entre les pays participants, comme s’il s’agissait d’opérations nationales.",
  },
  TPE: {
    title: "TPE",
    definition:
      "Très Petite Entreprise : entreprise comptant généralement moins de 10 salariés et réalisant un chiffre d’affaires ou un total de bilan maximal de 2 millions d’euros.",
  },
  PME: {
    title: "PME",
    definition:
      "Petite et Moyenne Entreprise : entreprise comptant moins de 250 salariés, avec un chiffre d’affaires annuel n’excédant pas 50 millions d’euros ou un total de bilan inférieur à 43 millions d’euros.",
  },
  CAC40: {
    title: "CAC 40",
    definition:
      "Indice boursier français composé des 40 plus grandes capitalisations cotées à la Bourse de Paris. Il est considéré comme l’indicateur de référence de la performance du marché actions français.",
  },
  FCP: {
    title: "FCP",
    definition:
      "Fonds Commun de Placement : véhicule d’investissement collectif qui regroupe l’épargne de plusieurs investisseurs pour l’investir dans un portefeuille d’actifs (actions, obligations, etc.). Le FCP n’a pas de personnalité juridique propre : il est géré par une société de gestion pour le compte des porteurs de parts.",
  },
  SICAV: {
    title: "SICAV",
    definition:
      "Société d’Investissement à Capital Variable : fonds d’investissement doté d’une personnalité juridique propre. Les investisseurs deviennent actionnaires de la SICAV, qui gère un portefeuille d’actifs (actions, obligations, etc.) et dont le capital varie en fonction des souscriptions et des retraits.",
  },
  Web3: {
    title: "Web3",
    definition:
      "Ensemble de technologies décentralisées reposant principalement sur la blockchain. Web3 vise à redonner le contrôle des données et des applications aux utilisateurs, grâce à des systèmes ouverts, transparents et sans intermédiaires.",
  },
  NFT: {
    title: "NFT",
    definition:
      "Non-Fungible Token : jeton numérique unique basé sur la blockchain. Contrairement aux cryptomonnaies classiques, un NFT n’est pas interchangeable. Il sert à représenter la propriété d’un objet numérique (image, musique, carte de collection, etc.).",
  },
  DeFi: {
    title: "DeFi",
    definition:
      "Finance Décentralisée : ensemble d’applications financières construites sur la blockchain, permettant d’emprunter, prêter, échanger ou investir sans passer par les banques ou institutions traditionnelles.",
  },
  DAO: {
    title: "DAO",
    definition:
      "Decentralized Autonomous Organization : organisation gouvernée par ses membres via des règles inscrites dans la blockchain. Les décisions sont prises collectivement grâce à des votes, souvent via des jetons de gouvernance.",
  },
} as const;

export type TermKey = keyof typeof terms;
