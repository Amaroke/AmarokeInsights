import React from "react";
import { FaCalculator, FaHome, FaBalanceScale, FaShieldAlt } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";
import { NavLink } from "react-router-dom";

const Tools: React.FC = () => {
  return (
    <PageLayout
      title="Outils"
      description="Simulateurs et calculateurs pour vous aider dans vos décisions financières."
    >
      <Container gap="lg">
        <section id="tools" className="scroll-mt-22">
          <div className="space-y-4">
            <InfoBubble
              icon={<FaCalculator />}
              title="Calcul d'intérêts composés"
              color="text-green-400"
            >
              <p className="leading-relaxed mb-3">
                Simule la croissance d'un capital dans le temps grâce à
                l'intérêt composé.
              </p>
              <NavLink
                to="/compound-interest"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded-xl transition-colors duration-200 font-medium"
              >
                <FaCalculator className="text-green-400" />
                <span>Ouvrir le calculateur</span>
              </NavLink>
            </InfoBubble>

            <InfoBubble
              icon={<FaCalculator />}
              title="Calcul de prêt"
              color="text-purple-400"
            >
              <p className="leading-relaxed mb-3">
                Estime les mensualités, la durée et le coût total d'un emprunt,
                en prenant en compte le taux et l'assurance.
              </p>
              <NavLink
                to="/loan"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-xl transition-colors duration-200 font-medium"
              >
                <FaCalculator className="text-purple-400" />
                <span>Accéder au simulateur</span>
              </NavLink>
            </InfoBubble>

            <InfoBubble
              icon={<FaHome />}
              title="Louer ou Acheter ?"
              color="text-blue-400"
            >
              <p className="leading-relaxed mb-3">
                Compare financièrement la location et l'achat de sa résidence
                principale.
              </p>
              <NavLink
                to="/rent-vs-buy"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-xl transition-colors duration-200 font-medium"
              >
                <FaHome className="text-blue-400" />
                <span>Ouvrir le comparateur</span>
              </NavLink>
            </InfoBubble>

            <InfoBubble
              icon={<FaBalanceScale />}
              title="Comparateur d'Enveloppes Fiscales"
              color="text-teal-400"
            >
              <p className="leading-relaxed mb-3">
                Compare PEA, Assurance Vie, Plan 111bis, CTO et PER selon votre
                situation.
              </p>
              <NavLink
                to="/tax-wrapper-comparator"
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 rounded-xl transition-colors duration-200 font-medium"
              >
                <FaBalanceScale className="text-teal-400" />
                <span>Ouvrir le comparateur</span>
              </NavLink>
            </InfoBubble>

            <InfoBubble
              icon={<FaShieldAlt />}
              title="Profil de risque"
              color="text-cyan-400"
            >
              <p className="leading-relaxed mb-3">
                Estime votre tolérance au risque pour orienter vos choix
                d'allocation entre les différentes classes d'actifs.
              </p>
              <NavLink
                to="/risk-profile"
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded-xl transition-colors duration-200 font-medium"
              >
                <FaShieldAlt className="text-cyan-400" />
                <span>Découvrir l'outil</span>
              </NavLink>
            </InfoBubble>
          </div>
        </section>
      </Container>
    </PageLayout>
  );
};

export default Tools;
