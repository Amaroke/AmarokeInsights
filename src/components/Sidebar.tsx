import React from "react";

const Sidebar: React.FC = () => {
  return (
    <nav className="w-64 bg-[#1b1b27] text-gray-300 p-4 border-r border-gray-700 fixed top-16 bottom-0 left-0 overflow-y-auto">
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
  );
};

export default Sidebar;
