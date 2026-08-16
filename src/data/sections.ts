import {
  FaBook,
  FaPiggyBank,
  FaChartLine,
  FaMoneyCheckAlt,
  FaBitcoin,
  FaLightbulb,
  FaChartBar,
  FaEnvelope,
  FaBalanceScale,
  FaTools,
} from "react-icons/fa";
import { GiPathDistance, GiWallet } from "react-icons/gi";
import type { IconType } from "react-icons";

export interface SectionItem {
  title: string;
  path: string;
  href?: string;
}

export interface Section {
  title: string;
  path: string;
  icon: IconType;
  iconColor: string;
  activeColor: string;
  hoverColor: string;
  hoverIconColor: string;
  hoverItemColor: string;
  lastUpdated: string;
  items: SectionItem[];
}

export const sections: Section[] = [
  {
    title: "Fondamentaux",
    path: "fondamentaux",
    icon: FaLightbulb,
    iconColor: "text-yellow-400",
    activeColor: "bg-yellow-500/10 text-yellow-50",
    hoverColor: "hover:bg-yellow-500/10 hover:text-yellow-50",
    hoverIconColor: "group-hover:text-yellow-400",
    hoverItemColor: "hover:bg-yellow-500/5 hover:text-yellow-200",
    lastUpdated: "2025-08-25",
    items: [
      { title: "Concepts fondamentaux", path: "concepts-fondamentaux" },
      { title: "Risques", path: "risques" },
    ],
  },
  {
    title: "Finance Personnelle",
    path: "finance-personnelle",
    icon: GiWallet,
    iconColor: "text-green-400",
    activeColor: "bg-green-500/10 text-green-50",
    hoverColor: "hover:bg-green-500/10 hover:text-green-50",
    hoverIconColor: "group-hover:text-green-400",
    hoverItemColor: "hover:bg-green-500/5 hover:text-green-200",
    lastUpdated: "2025-08-30",
    items: [
      { title: "Budget", path: "budget" },
      { title: "Épargne & FIRE", path: "fire" },
      { title: "Dettes & emprunts", path: "dettes" },
    ],
  },
  {
    title: "Système Bancaire",
    path: "systeme-bancaire",
    icon: FaPiggyBank,
    iconColor: "text-blue-400",
    activeColor: "bg-blue-500/10 text-blue-50",
    hoverColor: "hover:bg-blue-500/10 hover:text-blue-50",
    hoverIconColor: "group-hover:text-blue-400",
    hoverItemColor: "hover:bg-blue-500/5 hover:text-blue-200",
    lastUpdated: "2026-03-16",
    items: [
      { title: "Les banques", path: "fonctionnement-banques" },
      { title: "Taux et frais", path: "taux-frais" },
      { title: "Sécurité & fraude", path: "securite-fraude" },
    ],
  },
  {
    title: "Types de Comptes",
    path: "types-de-comptes",
    icon: FaMoneyCheckAlt,
    iconColor: "text-indigo-400",
    activeColor: "bg-indigo-500/10 text-indigo-50",
    hoverColor: "hover:bg-indigo-500/10 hover:text-indigo-50",
    hoverIconColor: "group-hover:text-indigo-400",
    hoverItemColor: "hover:bg-indigo-500/5 hover:text-indigo-200",
    lastUpdated: "2026-03-16",
    items: [
      { title: "Comptes courants", path: "comptes-courants" },
      { title: "Comptes d'épargne", path: "comptes-epargne" },
      { title: "Comptes d'investissement", path: "comptes-investissement" },
    ],
  },
  {
    title: "Investissements",
    path: "investissements",
    icon: FaChartLine,
    iconColor: "text-emerald-400",
    activeColor: "bg-emerald-500/10 text-emerald-50",
    hoverColor: "hover:bg-emerald-500/10 hover:text-emerald-50",
    hoverIconColor: "group-hover:text-emerald-400",
    hoverItemColor: "hover:bg-emerald-500/5 hover:text-emerald-200",
    lastUpdated: "2025-12-23",
    items: [
      { title: "Qu'est-ce qu'investir ?", path: "quest-ce-quinvestir" },
      {
        title: "Actions, ETF, Obligations et fonds d'investissement",
        path: "actions-etf-obligations",
      },
      { title: "Produits complexes et dérivés", path: "produits-complexes" },
      { title: "Immobilier", path: "immobilier" },
      { title: "Placements alternatifs", path: "alternatives" },
    ],
  },
  {
    title: "Trading",
    path: "trading",
    icon: FaChartBar,
    iconColor: "text-orange-400",
    activeColor: "bg-orange-500/10 text-orange-50",
    hoverColor: "hover:bg-orange-500/10 hover:text-orange-50",
    hoverIconColor: "group-hover:text-orange-400",
    hoverItemColor: "hover:bg-orange-500/5 hover:text-orange-200",
    lastUpdated: "2026-04-14",
    items: [
      { title: "Qu'est-ce que le trading ?", path: "quest-ce-que-le-trading" },
      { title: "Marchés & plateformes", path: "marches-plateformes" },
      { title: "Les types de trading", path: "types-de-trading" },
      {
        title: "Positions Long / Short & Chandeliers",
        path: "positions-longues-courtes",
      },
    ],
  },
  {
    title: "Cryptomonnaies",
    path: "cryptomonnaies",
    icon: FaBitcoin,
    iconColor: "text-amber-400",
    activeColor: "bg-amber-500/10 text-amber-50",
    hoverColor: "hover:bg-amber-500/10 hover:text-amber-50",
    hoverIconColor: "group-hover:text-amber-400",
    hoverItemColor: "hover:bg-amber-500/5 hover:text-amber-200",
    lastUpdated: "2026-03-18",
    items: [
      { title: "Qu'est-ce qu'une crypto ?", path: "quest-ce-quune-crypto" },
      { title: "Les différentes cryptos", path: "differentes-cryptos" },
      { title: "Acheter, stocker et sécuriser", path: "acheter-stocker-securiser" },
    ],
  },
  {
    title: "Comparatifs et Études",
    path: "comparatifs-et-etudes",
    icon: FaBalanceScale,
    iconColor: "text-teal-400",
    activeColor: "bg-teal-500/10 text-teal-50",
    hoverColor: "hover:bg-teal-500/10 hover:text-teal-50",
    hoverIconColor: "group-hover:text-teal-400",
    hoverItemColor: "hover:bg-teal-500/5 hover:text-teal-200",
    lastUpdated: "2026-04-14",
    items: [
      { title: "Pourquoi le PEA ?", path: "pourquoi-pea" },
      { title: "Limites des assurances vie", path: "limites-assurance-vie" },
      { title: "Assurance Vie vs CTO", path: "assurance-vie-vs-cto" },
      {
        title: "PEA vs Plan 111bis Luxembourgeois",
        path: "pea-vs-111bis",
      },
    ],
  },
  {
    title: "Ma Stratégie",
    path: "strategie",
    icon: GiPathDistance,
    iconColor: "text-violet-400",
    activeColor: "bg-violet-500/10 text-violet-50",
    hoverColor: "hover:bg-violet-500/10 hover:text-violet-50",
    hoverIconColor: "group-hover:text-violet-400",
    hoverItemColor: "hover:bg-violet-500/5 hover:text-violet-200",
    lastUpdated: "",
    items: [
      { title: "Stratégie personnelle", path: "strategie-personnelle" },
      { title: "FAQ", path: "faq" },
    ],
  },
  {
    title: "Outils",
    path: "outils",
    icon: FaTools,
    iconColor: "text-cyan-400",
    activeColor: "bg-cyan-500/10 text-cyan-50",
    hoverColor: "hover:bg-cyan-500/10 hover:text-cyan-50",
    hoverIconColor: "group-hover:text-cyan-400",
    hoverItemColor: "hover:bg-cyan-500/5 hover:text-cyan-200",
    lastUpdated: "2026-06-30",
    items: [
      {
        title: "Organigramme d'investissement",
        path: "organigramme-investissement",
        href: "/organigramme-investissement",
      },
      {
        title: "Simulateur de prêt",
        path: "simulateur-pret",
        href: "/simulateur-pret",
      },
      {
        title: "Intérêts composés",
        path: "interets-composes",
        href: "/interets-composes",
      },
      {
        title: "Louer ou Acheter ?",
        path: "louer-ou-acheter",
        href: "/louer-ou-acheter",
      },
      {
        title: "Comparateur d'enveloppes",
        path: "comparateur-enveloppes",
        href: "/comparateur-enveloppes",
      },
      {
        title: "Profil de risque",
        path: "profil-de-risque",
        href: "/profil-de-risque",
      },
    ],
  },
  {
    title: "Ressources",
    path: "ressources",
    icon: FaBook,
    iconColor: "text-slate-400",
    activeColor: "bg-slate-500/10 text-slate-50",
    hoverColor: "hover:bg-slate-500/10 hover:text-slate-50",
    hoverIconColor: "group-hover:text-slate-400",
    hoverItemColor: "hover:bg-slate-500/5 hover:text-slate-200",
    lastUpdated: "",
    items: [
      { title: "Documentation", path: "documentation" },
      { title: "Glossaire", path: "glossaire" },
    ],
  },
  {
    title: "Me Contacter",
    path: "contact",
    icon: FaEnvelope,
    iconColor: "text-pink-400",
    activeColor: "bg-pink-500/10 text-pink-50",
    hoverColor: "hover:bg-pink-500/10 hover:text-pink-50",
    hoverIconColor: "group-hover:text-pink-400",
    hoverItemColor: "hover:bg-pink-500/5 hover:text-pink-200",
    lastUpdated: "",
    items: [],
  },
];
