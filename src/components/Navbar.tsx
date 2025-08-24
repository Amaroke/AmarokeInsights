import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="h-16 bg-[#1b1b27] text-gray-300 flex items-center px-6 shadow-md border-b border-gray-700 fixed top-0 left-0 right-0 z-10">
      <h1 className="font-bold text-xl">Lorem Ipsum Dolor</h1>
      <div className="ml-auto">Sit Amet Consectetur</div>
    </header>
  );
};

export default Navbar;
