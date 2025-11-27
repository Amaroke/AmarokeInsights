import { useState } from "react";
import { terms, type TermKey } from "../data/terms";

interface TermProps {
  id: TermKey;
}

const Term: React.FC<TermProps> = ({ id }) => {
  const { title, definition } = terms[id];
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-flex items-center font-semibold group">
      <span
        className="underline underline-offset-2 decoration-dotted cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {title}
      </span>

      <sup
        className="ml-0.5 text-xs text-gray-400 align-super cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        ?
      </sup>

      <div
        className={`absolute left-1/2 bottom-full mb-2 -translate-x-1/2 z-50 w-64
          ${open ? "block" : "hidden"} 
          md:group-hover:block`}
      >
        <div className="relative bg-[#12121b] text-gray-200 text-sm p-3 rounded-lg shadow-lg border border-white/20">
          <div
            className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full 
                        w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent 
                        border-t-6 border-t-gray-900"
          />
          <strong className="block mb-1">{title}</strong>
          <p>{definition}</p>
        </div>
      </div>
    </span>
  );
};

export default Term;
