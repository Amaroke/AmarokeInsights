import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {
  FaBook,
  FaPiggyBank,
  FaChartLine,
  FaMoneyCheckAlt,
  FaWallet,
  FaBitcoin,
  FaUser,
  FaFolderOpen,
} from "react-icons/fa";
import { useEffect } from "react";
import { useSidebar } from "../context/SidebarContext";
import { setVisit, isNew } from "../utils/visitTracker";

const sections = [
  {
    title: "Bases",
    path: "basics",
    icon: <FaBook />,
    lastUpdated: "2025-08-25",
    items: [
      { title: "Concepts fondamentaux", path: "concepts-fundamentals" },
      { title: "Risques", path: "risks" },
    ],
  },
  {
    title: "Gestion financière",
    path: "personal-finance",
    icon: <FaWallet />,
    lastUpdated: "2025-08-30",
    items: [
      { title: "Budget", path: "budget" },
      {
        title: "Épargne & FIRE",
        path: "savings-emergency-fund",
      },
      { title: "Dettes & emprunts", path: "debt" },
    ],
  },
  {
    title: "Banque",
    path: "banking",
    icon: <FaPiggyBank />,
    lastUpdated: "2025-08-31",
    items: [
      { title: "Types de comptes", path: "types-of-accounts" },
      { title: "Taux et frais", path: "rates-fees" },
      { title: "Sécurité & fraude", path: "security-fraud" },
    ],
  },
  {
    title: "Placements",
    path: "investments",
    icon: <FaChartLine />,
    lastUpdated: "2025-10-26",
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
    title: "Trading",
    path: "trading",
    icon: <FaMoneyCheckAlt />,
    lastUpdated: "",
    items: [
      { title: "Analyse technique", path: "technical-analysis" },
      { title: "Analyse fondamentale", path: "fundamental-analysis" },
      { title: "Dérivés financiers", path: "derivatives" },
    ],
  },
  {
    title: "Cryptomonnaies",
    path: "cryptos",
    icon: <FaBitcoin />,
    lastUpdated: "",
    items: [
      { title: "C'est quoi les crypto", path: "what-are-cryptos" },
      { title: "Choisir un broker", path: "choose-broker" },
      { title: "Investir en cryptos", path: "invest-cryptos" },
      { title: "Trader des cryptos", path: "trade-cryptos" },
    ],
  },
  {
    title: "Impôts",
    path: "taxes",
    icon: <FaFolderOpen />,
    lastUpdated: "",
    items: [
      { title: "Impôt sur le revenu", path: "income-tax" },
      { title: "Impôt sur les investissements", path: "investment-tax" },
      { title: "Optimisation fiscale", path: "tax-optimization" },
    ],
  },
  {
    title: "Psychologie",
    path: "psychology",
    icon: <FaUser />,
    lastUpdated: "",
    items: [
      { title: "Biais cognitifs & émotions", path: "cognitive-biases" },
      { title: "FOMO & discipline", path: "fomo-discipline" },
      { title: "Patience et horizon long terme", path: "long-term-horizon" },
    ],
  },
  {
    title: "Ressources & lectures",
    path: "resources",
    icon: <FaBook />,
    lastUpdated: "",
    items: [
      { title: "Ressources utiles", path: "resources" },
      { title: "Glossaire", path: "glossary" },
      { title: "Lectures recommandées", path: "readings" },
    ],
  },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, setIsOpen, expandedSection, setExpandedSection } =
    useSidebar();

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
        className={`fixed top-16 left-0 h-full bg-[#1b1b27]/95 text-gray-300 p-4 overflow-y-auto transform transition-transform duration-300 ease-in-out w-64 z-300 select-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-3">
          {sections.map((section) => {
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
                        expandedSection === section.path ? null : section.path
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
                  <span className="font-medium">{section.title}</span>
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
