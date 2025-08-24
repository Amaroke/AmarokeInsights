import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import Logo from "../assets/logo.png";

interface NavbarProps {
  onHamburgerClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHamburgerClick }) => {
  return (
    <header className="h-16 bg-[#1b1b27] text-gray-300 flex items-center px-4 md:px-6 shadow-md border-b border-gray-700 fixed top-0 left-0 right-0 z-20">
      {onHamburgerClick && (
        <>
          <button
            className="md:hidden mr-4 p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            onClick={onHamburgerClick}
          >
            <FaBars />
          </button>

          <button
            className="hidden md:block mr-4 p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            onClick={onHamburgerClick}
          >
            <HiOutlineBars3CenterLeft />
          </button>
        </>
      )}

      <NavLink
        to="/"
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
      </NavLink>
    </header>
  );
};

export default Navbar;
