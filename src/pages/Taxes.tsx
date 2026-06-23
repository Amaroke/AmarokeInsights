import React from "react";
import { FaHammer } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";

const Taxes: React.FC = () => {
  return (
    <PageLayout
      title="Optimisation fiscale"
      description="Optimiser sa fiscalité sur les revenus du capital."
      noindex
    >
      <Container gap="sm">
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
      </Container>
    </PageLayout>
  );
};

export default Taxes;
