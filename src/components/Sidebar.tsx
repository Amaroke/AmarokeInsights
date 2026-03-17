import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {
  FaBook,
  FaPiggyBank,
  FaChartLine,
  FaMoneyCheckAlt,
  FaBitcoin,
  FaFolderOpen,
  FaLightbulb,
  FaChartBar,
  FaEnvelope,
} from "react-icons/fa";
import { useEffect } from "react";
import { useSidebar } from "../context/SidebarContext";
import { setVisit, isNew } from "../utils/visitTracker";
import { GiBullseye, GiPathDistance, GiWallet } from "react-icons/gi";
import { MdCurrencyBitcoin } from "react-icons/md";

const sections = [
  {
    title: "Fondamentaux",
    advanced: false,
    path: "basics",
    icon: <FaLightbulb />,
    lastUpdated: "2025-08-25",
    items: [
      { title: "Concepts fondamentaux", path: "concepts-fundamentals" },
      { title: "Risques", path: "risks" },
    ],
  },
  {
    title: "Finance Personnelle",
    advanced: false,
    path: "personal-finance",
    icon: <GiWallet />,
    lastUpdated: "2025-08-30",
    items: [
      { title: "Budget", path: "budget" },
      {
        title: "Épargne & FIRE",
        path: "fire",
      },
      { title: "Dettes & emprunts", path: "debt" },
    ],
  },
  {
    title: "Système Bancaire",
    advanced: false,
    path: "banking",
    icon: <FaPiggyBank />,
    lastUpdated: "2026-03-16",
    items: [
      { title: "Les banques", path: "how-banks-work" },
      { title: "Taux et frais", path: "rates-fees" },
      { title: "Sécurité & fraude", path: "security-fraud" },
    ],
  },
  {
    title: "Types de Comptes",
    advanced: false,
    path: "accounts",
    icon: <FaMoneyCheckAlt />,
    lastUpdated: "2026-03-16",
    items: [
      { title: "Comptes courants", path: "current-accounts" },
      { title: "Comptes d'épargne", path: "saving-account" },
      { title: "Comptes d'investissement", path: "investment-account" },
    ],
  },
  {
    title: "Investissements",
    advanced: false,
    path: "investments",
    icon: <FaChartLine />,
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
    title: "Bases du Trading",
    advanced: false,
    path: "trading",
    icon: <FaChartBar />,
    lastUpdated: "2026-03-16",
    items: [
      { title: "Qu’est-ce que le trading ?", path: "trading-intro" },
      {
        title: "Marchés & plateformes",
        path: "markets-platforms",
      },
      { title: "Les types de trading", path: "trading-types" },
      { title: "Positions Long / Short", path: "long-short" },
    ],
  },
  {
    title: "Stratégies de Trading",
    advanced: true,
    path: "trading2",
    icon: <GiBullseye />,
    lastUpdated: "",
    items: [],
  },
  {
    title: "Cryptomonnaies",
    advanced: false,
    path: "cryptos",
    icon: <FaBitcoin />,
    lastUpdated: "",
    items: [
      { title: "Qu’est-ce qu’une crypto ?", path: "what-are-cryptos" },
      { title: "Les différentes cryptos", path: "different-cryptos" },
      { title: "Acheter, stocker et sécuriser", path: "buy-store-secure" },
    ],
  },
  {
    title: "Cryptos & Usages",
    advanced: true,
    path: "cryptos2",
    icon: <MdCurrencyBitcoin />,
    lastUpdated: "",
    items: [],
  },
  {
    title: "Optimisation Fiscale",
    advanced: true,
    path: "taxes",
    icon: <FaFolderOpen />,
    lastUpdated: "",
    items: [],
  },
  {
    title: "Ma Stratégie",
    advanced: false,
    path: "strategy",
    icon: <GiPathDistance />,
    lastUpdated: "",
    items: [],
  },
  {
    title: "Outils & Ressources",
    advanced: false,
    path: "resources",
    icon: <FaBook />,
    lastUpdated: "",
    items: [
      { title: "Outils", path: "tools" },
      { title: "Documentation", path: "documentation" },
      { title: "Glossaire", path: "glossary" },
    ],
  },
  {
    title: "Me Contacter",
    advanced: false,
    path: "contact",
    icon: <FaEnvelope />,
    lastUpdated: "",
    items: [],
  },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    isOpen,
    setIsOpen,
    expandedSection,
    setExpandedSection,
    isAdvanced,
    toggleAdvanced,
  } = useSidebar();

  const currentPath = location.pathname.split("/")[1];

  useEffect(() => {
    if (currentPath) {
      setExpandedSection(currentPath);
    }
  }, [currentPath]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
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
        className={`fixed top-16 left-0 h-full bg-[#1b1b27]/95 text-gray-300 p-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transform transition-transform duration-300 ease-in-out w-64 z-300 select-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mt-auto pb-4 border-b border-gray-700">
          <button
            onClick={toggleAdvanced}
            className="w-full flex items-center justify-between px-2 py-2"
          >
            <span
              className={`text-sm font-medium transition ${
                !isAdvanced ? "text-white" : "text-gray-400"
              }`}
            >
              Normal
            </span>
            <div
              className={`relative w-14 h-7 rounded-full transition ${
                isAdvanced
                  ? "bg-linear-to-r from-orange-300 to-orange-400"
                  : "bg-gray-400"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  isAdvanced ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </div>
            <span className="text-sm font-medium transition flex items-center gap-1">
              <span
                className={`${
                  isAdvanced
                    ? "bg-linear-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent"
                    : "text-gray-400"
                }`}
              >
                Avancé
              </span>
              <span
                className={`${!isAdvanced && "bg-linear-to-r bg-clip-text text-transparent bg-gray-400"}`}
              >
                🔥
              </span>
            </span>
          </button>
        </div>
        <ul className="space-y-3 pt-4 md:mb-0 mb-32">
          {sections
            .filter((section) => isAdvanced || !section.advanced)
            .map((section) => {
              const isActive = currentPath === section.path;
              const showNew = isNew(section.path, section.lastUpdated);

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
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    <span className="text-lg">{section.icon}</span>
                    <span
                      className={`font-medium ${
                        section.advanced &&
                        "bg-linear-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent"
                      }`}
                    >
                      {section.title}
                    </span>
                    {showNew && (
                      <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full">
                        NEW
                      </span>
                    )}
                  </NavLink>
                  {expandedSection === section.path &&
                    section.items.length > 0 && (
                      <ul className="mt-2 ml-6 space-y-1">
                        {section.items.map((item) => (
                          <li key={item.path}>
                            <button
                              onClick={() => handleScrollTo(item.path)}
                              className="w-full text-left block px-2 py-1 rounded-lg text-sm hover:bg-gray-600 hover:text-white transition-colors duration-200"
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              );
            })}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
