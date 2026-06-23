import React from "react";
import { FaHammer } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import PageLayout from "../components/PageLayout";

const Trading2: React.FC = () => {
  return (
    <PageLayout
      title="Stratégies de trading"
      description="Stratégies de trading plus avancées."
      noindex
    >
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-6 space-y-4 md:mb-0 mb-24">
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
    </PageLayout>
  );
};

export default Trading2;
