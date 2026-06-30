import React from "react";
import { FaHammer } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";

const RentVsBuy: React.FC = () => {
  return (
    <PageLayout
      title="Louer ou Acheter ?"
      description="Comparer financièrement la location et l'achat de sa résidence principale."
      noindex
    >
      <Container gap="sm">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
          En cours de conception
        </h2>
        <InfoBubble
          icon={<FaHammer />}
          title="Work in Progress"
          color="text-orange-400"
        >
          <p className="leading-relaxed">
            Cet outil est actuellement <strong>en construction</strong>. Il
            permettra de comparer financièrement la location et l'achat de votre
            résidence principale, en tenant compte de l'apport, des mensualités,
            du coût du crédit, de la fiscalité et du coût d'opportunité du
            capital immobilisé.
          </p>
        </InfoBubble>
      </Container>
    </PageLayout>
  );
};

export default RentVsBuy;
