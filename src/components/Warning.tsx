import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

interface WarningProps {
  children: React.ReactNode;
}

const Warning: React.FC<WarningProps> = ({ children }) => {
  return (
    <div
      className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 
                    bg-yellow-400 border-l-4 border-red-500 
                    text-red-500 px-5 py-3 rounded-md shadow-md"
    >
      <div className="flex items-center">
        <FaExclamationTriangle className="mr-3 text-xl" />
        <p className="font-semibold">{children}</p>
      </div>
    </div>
  );
};

export default Warning;
