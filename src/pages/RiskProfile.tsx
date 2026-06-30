import React from "react";
import { FaHammer } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";
import Disclaimer from "../components/Disclaimer";

const RiskProfile: React.FC = () => {
  return (
    <PageLayout
      title="Profil de risque"
      description="Estimer sa tolérance au risque pour orienter ses choix d'allocation."
      noindex
    >
      <Container gap="sm">
        <Disclaimer title="Estimation indicative, pas un conseil personnalisé">
          Le résultat de ce questionnaire est fourni à titre informatif et
          éducatif uniquement. Il ne constitue en aucun cas un conseil en
          investissement personnalisé et ne tient pas compte de l'intégralité
          de votre situation patrimoniale, fiscale ou personnelle. Avant toute
          décision d'investissement, rapprochez-vous d'un professionnel
          agréé.
        </Disclaimer>
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
            permettra, à travers un questionnaire, d'estimer votre tolérance
            au risque et votre horizon de placement, afin de vous orienter
            vers une répartition d'actifs adaptée à votre situation.
          </p>
        </InfoBubble>
      </Container>
    </PageLayout>
  );
};

export default RiskProfile;
