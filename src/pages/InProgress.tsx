import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

interface InProgressProps {
  title: string;
}

const InProgress: React.FC<InProgressProps> = ({ title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(
    window.innerWidth > 768 ? true : false
  );

  return (
    <div className="min-h-screen bg-[#12121c] text-gray-300 flex">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col transition-all duration-300 md:ml-0">
        <Navbar onHamburgerClick={() => setSidebarOpen(!sidebarOpen)} />
        <main
          className={`flex-1 flex flex-col items-center justify-center p-6 transition-all duration-300 ${
            sidebarOpen ? "md:ml-64" : "md:ml-0"
          }`}
        >
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-400">
            🚧 Page en cours de développement
          </p>
        </main>
      </div>
    </div>
  );
};

export default InProgress;
