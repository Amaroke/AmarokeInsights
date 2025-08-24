import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import InfoBubble from "../components/InfoBubble";
import { renderParagraphs } from "../utils/text";
import { useSidebar } from "../context/SidebarContext";
import {
  FaChartLine,
  FaHandshake,
  FaPercentage,
  FaMoneyBillWave,
  FaWater,
  FaGlobeAmericas,
  FaTools,
  FaLayerGroup,
} from "react-icons/fa";

const Basics: React.FC = () => {
  const { isOpen } = useSidebar();
  const { t: tConcepts } = useTranslation("concepts");
  const { t: tRisks } = useTranslation("risks");

  return (
    <div className="flex h-screen text-gray-300 bg-[#12121b]">
      <main
        className={`flex-1 overflow-auto pt-16 pb-8 transition-all duration-300 ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-6">
          <section id="concepts-fundamentals" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Concepts fondamentaux
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaBookOpen />}
                title={tConcepts("value_time_and_inflation.title")}
                color="text-blue-400"
              >
                {renderParagraphs(
                  tConcepts("value_time_and_inflation.content")
                )}
              </InfoBubble>

              <InfoBubble
                icon={<FaBookOpen />}
                title={tConcepts("interest.title")}
                color="text-green-400"
              >
                {renderParagraphs(tConcepts("interest.content"))}
              </InfoBubble>

              <InfoBubble
                icon={<FaBookOpen />}
                title={tConcepts("income_vs_wealth.title")}
                color="text-purple-400"
              >
                {renderParagraphs(tConcepts("income_vs_wealth.content"))}
              </InfoBubble>

              <InfoBubble
                icon={<FaBookOpen />}
                title={tConcepts("savings_vs_investment.title")}
                color="text-pink-400"
              >
                {renderParagraphs(tConcepts("savings_vs_investment.content"))}
              </InfoBubble>
            </div>
          </section>

          <section id="risks" className="scroll-mt-22">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Risques
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaChartLine />}
                title={tRisks("market.title")}
                color="text-red-400"
              >
                {renderParagraphs(tRisks("market.content"))}
              </InfoBubble>

              <InfoBubble
                icon={<FaHandshake />}
                title={tRisks("counterparty.title")}
                color="text-red-400"
              >
                {renderParagraphs(tRisks("counterparty.content"))}
              </InfoBubble>

              <InfoBubble
                icon={<FaPercentage />}
                title={tRisks("interest_rate.title")}
                color="text-red-400"
              >
                {renderParagraphs(tRisks("interest_rate.content"))}
              </InfoBubble>

              <InfoBubble
                icon={<FaMoneyBillWave />}
                title={tRisks("currency.title")}
                color="text-red-400"
              >
                {renderParagraphs(tRisks("currency.content"))}
              </InfoBubble>

              <InfoBubble
                icon={<FaWater />}
                title={tRisks("liquidity.title")}
                color="text-red-400"
              >
                {renderParagraphs(tRisks("liquidity.content"))}
              </InfoBubble>

              <InfoBubble
                icon={<FaGlobeAmericas />}
                title={tRisks("country.title")}
                color="text-red-400"
              >
                {renderParagraphs(tRisks("country.content"))}
              </InfoBubble>

              <InfoBubble
                icon={<FaTools />}
                title={tRisks("operational.title")}
                color="text-red-400"
              >
                {renderParagraphs(tRisks("operational.content"))}
              </InfoBubble>

              <InfoBubble
                icon={<FaLayerGroup />}
                title={tRisks("idiosyncratic.title")}
                color="text-red-400"
              >
                {renderParagraphs(tRisks("idiosyncratic.content"))}
              </InfoBubble>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Basics;
