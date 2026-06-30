import {
  FaBook,
  FaPiggyBank,
  FaChartLine,
  FaMoneyCheckAlt,
  FaBitcoin,
  FaLightbulb,
  FaChartBar,
  FaEnvelope,
  FaMoneyBillWave,
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
    path: "basics",
    icon: FaLightbulb,
    iconColor: "text-yellow-400",
    activeColor: "bg-yellow-500/10 text-yellow-50",
    hoverColor: "hover:bg-yellow-500/10 hover:text-yellow-50",
    hoverIconColor: "group-hover:text-yellow-400",
    hoverItemColor: "hover:bg-yellow-500/5 hover:text-yellow-200",
    lastUpdated: "2025-08-25",
    items: [
      { title: "Concepts fondamentaux", path: "concepts-fundamentals" },
      { title: "Risques", path: "risks" },
    ],
  },
  {
    title: "Finance Personnelle",
    path: "personal-finance",
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
      { title: "Dettes & emprunts", path: "debt" },
    ],
  },
  {
    title: "Système Bancaire",
    path: "banking",
    icon: FaPiggyBank,
    iconColor: "text-blue-400",
    activeColor: "bg-blue-500/10 text-blue-50",
    hoverColor: "hover:bg-blue-500/10 hover:text-blue-50",
    hoverIconColor: "group-hover:text-blue-400",
    hoverItemColor: "hover:bg-blue-500/5 hover:text-blue-200",
    lastUpdated: "2026-03-16",
    items: [
      { title: "Les banques", path: "how-banks-work" },
      { title: "Taux et frais", path: "rates-fees" },
      { title: "Sécurité & fraude", path: "security-fraud" },
    ],
  },
  {
    title: "Types de Comptes",
    path: "accounts",
    icon: FaMoneyCheckAlt,
    iconColor: "text-indigo-400",
    activeColor: "bg-indigo-500/10 text-indigo-50",
    hoverColor: "hover:bg-indigo-500/10 hover:text-indigo-50",
    hoverIconColor: "group-hover:text-indigo-400",
    hoverItemColor: "hover:bg-indigo-500/5 hover:text-indigo-200",
    lastUpdated: "2026-03-16",
    items: [
      { title: "Comptes courants", path: "current-accounts" },
      { title: "Comptes d'épargne", path: "saving-account" },
      { title: "Comptes d'investissement", path: "investment-account" },
    ],
  },
  {
    title: "Investissements",
    path: "investments",
    icon: FaChartLine,
    iconColor: "text-emerald-400",
    activeColor: "bg-emerald-500/10 text-emerald-50",
    hoverColor: "hover:bg-emerald-500/10 hover:text-emerald-50",
    hoverIconColor: "group-hover:text-emerald-400",
    hoverItemColor: "hover:bg-emerald-500/5 hover:text-emerald-200",
    lastUpdated: "2025-12-23",
    items: [
      { title: "Qu'est-ce qu'investir ?", path: "what-is-invest" },
      {
        title: "Actions, ETF, Obligations et fonds d'investissement",
        path: "stocks",
      },
      { title: "Produits complexes et dérivés", path: "complex-products" },
      { title: "Immobilier", path: "real-estate" },
      { title: "Placements alternatifs", path: "alternatives" },
    ],
  },
  {
    title: "Comment investir ?",
    path: "investments2",
    icon: FaMoneyBillWave,
    iconColor: "text-teal-400",
    activeColor: "bg-teal-500/10 text-teal-50",
    hoverColor: "hover:bg-teal-500/10 hover:text-teal-50",
    hoverIconColor: "group-hover:text-teal-400",
    hoverItemColor: "hover:bg-teal-500/5 hover:text-teal-200",
    lastUpdated: "2026-04-14",
    items: [
      { title: "Organigramme : comment j'investirais ?", path: "organigram" },
      { title: "Pourquoi le PEA ?", path: "pea-interesting" },
      { title: "Limites des assurances vie", path: "av-limits" },
      { title: "Assurance Vie vs CTO", path: "av-vs-cto" },
      {
        title: "PEA vs Plan 111bis Luxembourgeois",
        path: "pea-vs-plan-111bis",
      },
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
      { title: "Qu'est-ce que le trading ?", path: "trading-intro" },
      { title: "Marchés & plateformes", path: "markets-platforms" },
      { title: "Les types de trading", path: "trading-types" },
      { title: "Positions Long / Short & Chandeliers", path: "long-short" },
    ],
  },
  {
    title: "Cryptomonnaies",
    path: "cryptos",
    icon: FaBitcoin,
    iconColor: "text-amber-400",
    activeColor: "bg-amber-500/10 text-amber-50",
    hoverColor: "hover:bg-amber-500/10 hover:text-amber-50",
    hoverIconColor: "group-hover:text-amber-400",
    hoverItemColor: "hover:bg-amber-500/5 hover:text-amber-200",
    lastUpdated: "2026-03-18",
    items: [
      { title: "Qu'est-ce qu'une crypto ?", path: "what-are-cryptos" },
      { title: "Les différentes cryptos", path: "different-cryptos" },
      { title: "Acheter, stocker et sécuriser", path: "buy-store-secure" },
    ],
  },
  {
    title: "Ma Stratégie",
    path: "strategy",
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
    path: "tools",
    icon: FaTools,
    iconColor: "text-cyan-400",
    activeColor: "bg-cyan-500/10 text-cyan-50",
    hoverColor: "hover:bg-cyan-500/10 hover:text-cyan-50",
    hoverIconColor: "group-hover:text-cyan-400",
    hoverItemColor: "hover:bg-cyan-500/5 hover:text-cyan-200",
    lastUpdated: "2026-06-30",
    items: [
      { title: "Simulateur de prêt", path: "loan", href: "/loan" },
      {
        title: "Intérêts composés",
        path: "compound-interest",
        href: "/compound-interest",
      },
      {
        title: "Louer ou Acheter ?",
        path: "rent-vs-buy",
        href: "/rent-vs-buy",
      },
      {
        title: "Comparateur d'enveloppes",
        path: "tax-wrapper-comparator",
        href: "/tax-wrapper-comparator",
      },
      {
        title: "Profil de risque",
        path: "risk-profile",
        href: "/risk-profile",
      },
    ],
  },
  {
    title: "Ressources",
    path: "resources",
    icon: FaBook,
    iconColor: "text-slate-400",
    activeColor: "bg-slate-500/10 text-slate-50",
    hoverColor: "hover:bg-slate-500/10 hover:text-slate-50",
    hoverIconColor: "group-hover:text-slate-400",
    hoverItemColor: "hover:bg-slate-500/5 hover:text-slate-200",
    lastUpdated: "",
    items: [
      { title: "Documentation", path: "documentation" },
      { title: "Glossaire", path: "glossary" },
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
