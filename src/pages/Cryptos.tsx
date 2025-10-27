import React from "react";
import { FaHammer } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";

const Cryptos: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="flex h-screen text-gray-300 bg-[#12121b]">
      <main
        className={`flex-1 overflow-auto pt-16 md:mt-16 md:pt-0 transition-all duration-300 ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-6 space-y-4">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            En cours de conception
          </h2>
          <div className="space-y-4"></div>
          <InfoBubble
            icon={<FaHammer />}
            title="Work in Progress"
            color="text-orange-400"
          >
            <p className="leading-relaxed">
              Cette page est actuellement <strong>en construction</strong>.
            </p>
          </InfoBubble>
        </div>
      </main>
    </div>
  );
};

export default Cryptos;
