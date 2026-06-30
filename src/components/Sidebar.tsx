import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
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
} from "react-icons/fa";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSidebar } from "../context/useSidebar";
import { setVisit, isNew, getVisits } from "../utils/visitTracker";
import { GiPathDistance, GiWallet } from "react-icons/gi";

const sections = [
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
  /* {
    title: "Optimisation Fiscale",
    path: "taxes",
    icon: FaFolderOpen,
    iconColor: "text-gray-400",
    activeColor: "bg-gray-500/10 text-gray-50",
    lastUpdated: "",
    items: [],
  }, */
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
    title: "Outils & Ressources",
    path: "resources",
    icon: FaBook,
    iconColor: "text-slate-400",
    activeColor: "bg-slate-500/10 text-slate-50",
    hoverColor: "hover:bg-slate-500/10 hover:text-slate-50",
    hoverIconColor: "group-hover:text-slate-400",
    hoverItemColor: "hover:bg-slate-500/5 hover:text-slate-200",
    lastUpdated: "",
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

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, setIsOpen, expandedSection, setExpandedSection } =
    useSidebar();

  const currentPath = location.pathname.split("/")[1];

  const visits = useMemo(() => getVisits(), []);

  const routeToSection = useMemo(() => {
    const map: Record<string, string> = {};
    sections.forEach((section) => {
      section.items.forEach((item) => {
        if ("href" in item) {
          const segment = (item as { href: string }).href
            .replace(/^\//, "")
            .split("/")[0];
          map[segment] = section.path;
        }
      });
    });
    return map;
  }, []);

  const scrollObserverRef = useRef<MutationObserver | null>(null);

  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const spyObserverRef = useRef<IntersectionObserver | null>(null);
  const spySetupObserverRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    if (currentPath) {
      setExpandedSection(routeToSection[currentPath] ?? currentPath);
    }
  }, [currentPath, setExpandedSection, routeToSection]);

  useEffect(() => {
    spyObserverRef.current?.disconnect();
    spySetupObserverRef.current?.disconnect();
    setActiveItemId(null);

    const section = sections.find((s) => s.path === currentPath);
    const scrollItems =
      section?.items.filter((item) => !("href" in item)) ?? [];
    if (scrollItems.length === 0) return;

    const setup = () => {
      const elements = scrollItems
        .map((item) => document.getElementById(item.path))
        .filter((el): el is HTMLElement => Boolean(el));

      if (elements.length === 0) return false;

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
            );
          if (visible.length > 0) {
            setActiveItemId(visible[0].target.id);
          }
        },
        { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
      );

      elements.forEach((el) => observer.observe(el));
      spyObserverRef.current = observer;
      return true;
    };

    if (setup()) return;

    const mutationObserver = new MutationObserver(() => {
      if (setup()) mutationObserver.disconnect();
    });
    spySetupObserverRef.current = mutationObserver;
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    const timeout = window.setTimeout(() => mutationObserver.disconnect(), 5000);

    return () => window.clearTimeout(timeout);
  }, [currentPath, location.pathname]);

  useEffect(() => {
    return () => {
      scrollObserverRef.current?.disconnect();
      spyObserverRef.current?.disconnect();
      spySetupObserverRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, setIsOpen]);

  const handleScrollTo = (sectionPath: string, id: string) => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }

    if (currentPath !== sectionPath) {
      navigate(`/${sectionPath}`);
    }

    const scrollNow = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return Boolean(el);
    };

    if (scrollNow()) return;

    scrollObserverRef.current?.disconnect();
    const observer = new MutationObserver(() => {
      if (scrollNow()) observer.disconnect();
    });
    scrollObserverRef.current = observer;
    observer.observe(document.body, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 5000);
  };

  return (
    <>
      <Navbar />

      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm backdrop-brightness-75 md:hidden z-100"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        id="sidebar-nav"
        aria-label="Navigation principale"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed top-16 left-0 h-full bg-[#1b1b27]/95 text-gray-300 p-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none transform transition-transform duration-300 ease-in-out w-64 z-300 select-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col min-h-full">
          <ul className="flex-1 space-y-1">
            {sections.map((section) => {
              const isActive =
                (routeToSection[currentPath] ?? currentPath) ===
                section.path;
              const showNew = isNew(section.path, section.lastUpdated, visits);
              const Icon = section.icon;

              return (
                <li key={section.path}>
                  <NavLink
                    to={`/${section.path}`}
                    onClick={(e) => {
                      setVisit(section.path);
                      if (window.innerWidth < 768) {
                        e.preventDefault();
                        setExpandedSection(
                          expandedSection === section.path
                            ? null
                            : section.path,
                        );
                        navigate(`/${section.path}`);
                      }
                    }}
                    className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 ${
                      isActive
                        ? `${section.activeColor} ring-1 ring-inset ring-white/15`
                        : `text-gray-200 ${section.hoverColor}`
                    }`}
                  >
                    <span
                      className={`text-base shrink-0 transition-all duration-300 ${
                        isActive
                          ? `${section.iconColor} scale-110`
                          : `text-gray-400 ${section.hoverIconColor} group-hover:scale-110`
                      }`}
                    >
                      <Icon />
                    </span>
                    <span className="font-medium text-sm flex-1">
                      {section.title}
                    </span>
                    {showNew && (
                      <span className="text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded-full font-bold">
                        NEW
                      </span>
                    )}
                  </NavLink>
                  {expandedSection === section.path &&
                    section.items.length > 0 && (
                      <ul className="mt-1 ml-4 pl-3 border-l border-gray-700/60 space-y-0.5 pb-1">
                        {section.items.map((item) => (
                          <li key={item.path}>
                            {"href" in item ? (
                              <NavLink
                                to={
                                  (item as { path: string; title: string; href: string }).href
                                }
                                onClick={() => {
                                  if (window.innerWidth < 768) setIsOpen(false);
                                }}
                                className={({ isActive }) =>
                                  `block w-full text-left px-2 py-1.5 rounded text-xs transition-colors duration-300 ${
                                    isActive
                                      ? "text-white bg-white/5"
                                      : `text-gray-400 ${section.hoverItemColor}`
                                  }`
                                }
                              >
                                {item.title}
                              </NavLink>
                            ) : (
                              <button
                                onClick={() =>
                                  handleScrollTo(section.path, item.path)
                                }
                                className={`w-full text-left px-2 py-1.5 rounded text-xs transition-colors duration-300 ${
                                  activeItemId === item.path
                                    ? "text-white bg-white/5"
                                    : `text-gray-400 ${section.hoverItemColor}`
                                }`}
                              >
                                {item.title}
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              );
            })}
          </ul>
          <div className="mt-4 pt-3 pb-36 md:pb-16 border-t border-gray-700 flex flex-col gap-1">
            <NavLink
              to="/legal"
              className={({ isActive }) =>
                `text-xs px-3 py-1.5 rounded transition-colors ${
                  isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`
              }
            >
              Mentions légales & Confidentialité
            </NavLink>
            <NavLink
              to="/licenses"
              className={({ isActive }) =>
                `text-xs px-3 py-1.5 rounded transition-colors ${
                  isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`
              }
            >
              Licences
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
