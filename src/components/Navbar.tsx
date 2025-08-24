import React from "react";

interface NavbarProps {
  onHamburgerClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHamburgerClick }) => {
  return (
    <header className="h-16 bg-[#1b1b27] text-gray-300 flex items-center px-4 md:px-6 shadow-md border-b border-gray-700 fixed top-0 left-0 right-0 z-20">
      {onHamburgerClick && (
        <button
          className="md:hidden mr-4 p-2 bg-gray-800 text-white rounded-md"
          onClick={onHamburgerClick}
        >
          ☰
        </button>
      )}

      <h1 className="font-bold text-xl">Lorem Ipsum Dolor</h1>
      <div className="ml-auto hidden md:block">Sit Amet Consectetur</div>
    </header>
  );
};

export default Navbar;
