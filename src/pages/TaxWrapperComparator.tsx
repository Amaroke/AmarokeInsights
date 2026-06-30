import React from "react";
import { FaHammer } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";

const TaxWrapperComparator: React.FC = () => {
  return (
    <PageLayout
      title="Comparateur d'Enveloppes Fiscales"
      description="Comparer PEA, Assurance Vie, Plan 111bis, CTO et PER selon votre situation."
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
            permettra de comparer les cinq grandes enveloppes d'investissement -
            PEA, Assurance Vie, Plan 111bis Luxembourgeois, CTO et PER - selon
            votre profil, votre horizon de placement et votre situation fiscale,
            afin d'identifier l'allocation la plus adaptée à votre situation.
          </p>
        </InfoBubble>
      </Container>
    </PageLayout>
  );
};

export default TaxWrapperComparator;
