import React from "react";
import { FaFlask } from "react-icons/fa";

const Disclaimer: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="border border-amber-600/50 rounded-xl px-5 py-4 mb-8">
      <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-2">
        <FaFlask className="shrink-0 text-sm" />
        {title}
      </div>
      <div className="text-amber-100/85 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default Disclaimer;
