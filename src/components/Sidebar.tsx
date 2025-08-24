import { NavLink, useLocation } from "react-router-dom";
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

const sections = [
  {
    title: "Bases",
    path: "basics",
    icon: <FaBook />,
    items: [
      { title: "Concepts fondamentaux", path: "concepts-fundamentals" },
      { title: "Glossaire", path: "glossary" },
      { title: "Risques", path: "risks" },
    ],
  },
  {
    title: "Banque",
    path: "banking",
    icon: <FaPiggyBank />,
    items: [
      { title: "Types de comptes", path: "types-of-accounts" },
      { title: "Crédit et cartes bancaires", path: "credit-debit-cards" },
      { title: "Taux et frais", path: "rates-fees" },
      { title: "Sécurité & fraude", path: "security-fraud" },
    ],
  },
  {
    title: "Gestion financière",
    path: "personal-finance",
    icon: <FaWallet />,
    items: [
      { title: "Budget", path: "budget" },
      { title: "Épargne & fonds de secours", path: "savings-emergency-fund" },
      { title: "Dettes & emprunts", path: "debt" },
    ],
  },
  {
    title: "Placements",
    path: "investments",
    icon: <FaChartLine />,
    items: [
      { title: "Actions", path: "stocks" },
      { title: "Obligations", path: "bonds" },
      { title: "Fonds & ETF", path: "index-funds-etfs" },
      { title: "Immobilier", path: "real-estate" },
      { title: "Produits structurés", path: "structured-products" },
    ],
  },
  {
    title: "Trading",
    path: "trading",
    icon: <FaMoneyCheckAlt />,
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
    items: [],
  },
];
interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname.split("/").slice(1);

  return (
    <>
      <Navbar onHamburgerClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm backdrop-brightness-75 md:hidden z-10"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={`fixed top-16 left-0 h-full bg-[#1b1b27]/95 text-gray-300 p-4 overflow-y-auto transform transition-transform duration-300 ease-in-out w-64 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-3">
          {sections.map((section) => {
            const isActive = currentPath[0] === section.path;
            return (
              <li key={section.path}>
                <NavLink
                  to={`/${section.path}`}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg
                    transition-colors duration-200
                    ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-700 hover:text-white"
                    }
                  `}
                >
                  <span className="text-lg">{section.icon}</span>
                  <span className="font-medium">{section.title}</span>
                </NavLink>

                {isActive && section.items.length > 0 && (
                  <ul className="mt-2 ml-6 space-y-1">
                    {section.items.map((item) => (
                      <li key={item.path}>
                        <NavLink
                          to={`/${section.path}#${item.path}`}
                          className="block px-2 py-1 rounded-lg text-sm hover:bg-gray-600 hover:text-white transition-colors duration-200"
                        >
                          {item.title}
                        </NavLink>
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
