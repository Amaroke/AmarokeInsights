import React from "react";
import { FaChartLine } from "react-icons/fa";
import InfoBubble from "../../components/ui/InfoBubble";
import PageLayout from "../../components/layout/PageLayout";
import Container from "../../components/ui/Container";
import Disclaimer from "../../components/ui/Disclaimer";

import "@xyflow/react/dist/style.css";
import InvestmentTree from "../../components/charts/InvestmentTree";

const InvestmentDecisionTree: React.FC = () => {
  return (
    <PageLayout
      title="Organigramme d'investissement"
      description="Un organigramme interactif pour visualiser les décisions d'investissement selon sa situation et son horizon."
    >
      <Container gap="md">
        <Disclaimer title="Approche personnelle, pas un modèle universel">
          Cet organigramme reflète une approche personnelle basée sur des
          notions de gestion du risque et de structuration d'un capital. Ce
          n'est pas une règle absolue ni un conseil financier personnalisé,
          votre situation peut justifier des choix différents.
        </Disclaimer>
        <section id="organigramme" className="scroll-mt-22">
          <InfoBubble
            icon={<FaChartLine />}
            title="Organigramme d'investissement"
            color="text-green-400"
          >
            Cet organigramme représente une manière d'organiser ses décisions
            d'investissement selon sa situation (budget, dettes, épargne de
            sécurité) et son horizon de placement.
            <InvestmentTree />
          </InfoBubble>
        </section>
      </Container>
    </PageLayout>
  );
};

export default InvestmentDecisionTree;
