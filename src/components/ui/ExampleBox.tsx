import React from "react";
import { FaLightbulb } from "react-icons/fa";

const ExampleBox: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="rounded-xl bg-white/4 border border-white/8 px-4 py-3">
      <div className="flex items-center gap-1.5 text-gray-500 text-[11px] font-medium uppercase tracking-wide mb-2">
        <FaLightbulb className="shrink-0" />
        En pratique
      </div>
      <div className="text-gray-300 text-sm leading-relaxed space-y-2 [&_ul]:list-none [&_ul]:m-0 [&_ul]:p-0 [&_ul]:space-y-1.5 [&_li]:leading-snug">
        {children}
      </div>
    </div>
  );
};

export default ExampleBox;
