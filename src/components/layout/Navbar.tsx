import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { useSidebar } from "../../context/useSidebar";
import SearchModal from "./SearchModal";

const Navbar: React.FC = () => {
  const { toggleSidebar, resetSidebar, isOpen } = useSidebar();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);

  const handleLogoClick = () => {
    resetSidebar();
    navigate("/");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="h-16 bg-[#1b1b27] text-gray-300 flex items-center px-4 md:px-6 shadow-md border-b border-gray-700 fixed top-0 left-0 right-0 z-300 select-none">
      <button
        type="button"
        aria-label="Ouvrir ou fermer le menu"
        aria-expanded={isOpen}
        aria-controls="sidebar-nav"
        className="md:hidden mr-4 p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      <button
        type="button"
        aria-label="Ouvrir ou fermer le menu"
        aria-expanded={isOpen}
        aria-controls="sidebar-nav"
        className="hidden md:block mr-4 p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        onClick={toggleSidebar}
      >
        <HiOutlineBars3CenterLeft />
      </button>

      <button
        type="button"
        onClick={handleLogoClick}
        aria-label="Retour à l'accueil"
        className="flex items-center gap-2 font-bold text-xl hover:text-white transition-colors font-sans"
      >
        <span className="text-2xl font-sans font-semibold tracking-tight">
          AmarokeInsights
        </span>
      </button>

      <div className="ml-auto flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          aria-label="Rechercher"
          className="flex items-center gap-2 pl-3 pr-2 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors text-gray-200"
        >
          <FaSearch className="text-gray-300" />
          <span className="hidden lg:inline text-sm text-gray-300">
            Rechercher
          </span>
          <kbd className="hidden md:inline-flex items-center text-xs font-semibold text-gray-100 bg-gray-950/60 border border-gray-500 rounded px-1.5 py-0.5">
            Ctrl K
          </kbd>
        </button>
      </div>

      <SearchModal
        key={searchOpen ? "search-open" : "search-closed"}
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </header>
  );
};

export default Navbar;
