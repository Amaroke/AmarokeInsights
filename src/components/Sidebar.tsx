import React, { useState } from "react";
import Navbar from "./Navbar";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar onHamburgerClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm backdrop-brightness-75 md:hidden z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <nav
        className={`
          fixed top-16 left-0 h-full bg-[#1b1b27]/95 text-gray-300 p-4 border-r border-gray-700 overflow-y-auto
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          w-64 z-30 rounded-tr-lg rounded-br-lg
          md:translate-x-0 md:top-16 md:rounded-none
        `}
      >
        <h2 className="font-semibold mb-4 border-b border-gray-700 pb-2">
          Lorem Ipsum
        </h2>
        <ul className="space-y-2">
          <li className="hover:text-white cursor-pointer border border-gray-600 rounded px-2 py-1">
            Lorem ipsum dolor sit amet
          </li>
          <li className="hover:text-white cursor-pointer border border-gray-600 rounded px-2 py-1">
            Consectetur adipiscing elit
          </li>
          <li className="hover:text-white cursor-pointer border border-gray-600 rounded px-2 py-1">
            Sed do eiusmod tempor
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
