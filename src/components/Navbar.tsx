import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import Logo from "../assets/logo.png";
import { useSidebar } from "../context/SidebarContext";

const Navbar: React.FC = () => {
  const { toggleSidebar, resetSidebar } = useSidebar();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    resetSidebar();
    navigate("/");
  };

  return (
    <header className="h-16 bg-[#1b1b27] text-gray-300 flex items-center px-4 md:px-6 shadow-md border-b border-gray-700 fixed top-0 left-0 right-0 z-300 select-none">
      <button
        className="md:hidden mr-4 p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      <button
        className="hidden md:block mr-4 p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        onClick={toggleSidebar}
      >
        <HiOutlineBars3CenterLeft />
      </button>

      <button
        onClick={handleLogoClick}
        className="flex items-center gap-2 font-bold text-xl hover:text-white transition-colors font-sans"
      >
        <img
          src={Logo}
          alt="AmarokeInsights Logo"
          className="h-8 w-8 object-contain"
        />
        <span className="text-2xl font-sans font-semibold tracking-tight">
          marokeInsights
        </span>
      </button>
    </header>
  );
};

export default Navbar;
