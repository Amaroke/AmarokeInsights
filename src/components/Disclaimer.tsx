import React from "react";
import { FaFlask } from "react-icons/fa";

const Disclaimer: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="relative p-px rounded-xl overflow-hidden mb-8">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="animate-spin shrink-0"
          style={{
            width: "max(200%, 200px)",
            aspectRatio: "1",
            animationDuration: "6s",
            background:
              "conic-gradient(from 0deg, transparent 0%, #f59e0b 12%, #fcd34d 17%, transparent 22%, transparent 100%)",
          }}
        />
      </div>
      <div className="relative rounded-[11px] bg-gray-900 px-5 py-4">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-2">
          <FaFlask className="shrink-0 text-sm" />
          {title}
        </div>
        <div className="text-amber-100/85 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
