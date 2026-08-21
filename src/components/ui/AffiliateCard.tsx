import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

interface AffiliateCardProps {
  logo: string;
  name: string;
  description: string;
  why: string;
  warning?: string;
  href: string;
  plainHref: string;
  buttonClass: string;
}

const AffiliateCard: React.FC<AffiliateCardProps> = ({
  logo,
  name,
  description,
  why,
  warning,
  href,
  plainHref,
  buttonClass,
}) => {
  return (
    <div className="h-full flex flex-col bg-[#1f1f2e] rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 flex-1 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-white p-2">
            <img
              src={logo}
              alt={`Logo ${name}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
        </div>

        <p className="text-sm text-gray-400">{description}</p>

        <div className="flex gap-2 text-sm text-gray-300">
          <FaCheckCircle className="text-green-400 mt-0.5 shrink-0" />
          <p>{why}</p>
        </div>

        {warning && <p className="text-sm text-red-400">{warning}</p>}
      </div>

      <div className="p-6 pt-0 space-y-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group/btn flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-xl font-[system-ui,-apple-system,'Segoe_UI',sans-serif] ${buttonClass}`}
        >
          Lien affilié
          <FaArrowRight className="transition-transform duration-200 group-hover/btn:translate-x-1" />
        </a>
        <a
          href={plainHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-xs text-gray-500 hover:text-gray-400 underline underline-offset-2 transition-colors"
        >
          Lien sans affiliation
        </a>
      </div>
    </div>
  );
};

export default AffiliateCard;
