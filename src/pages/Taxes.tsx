import React from "react";
import { FaExchangeAlt } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import ExampleBox from "../components/ExampleBox";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";
import Term from "../components/Term";

const Taxes: React.FC = () => {
  return (
    <PageLayout
      title="Optimisation fiscale"
      description="Optimiser sa fiscalité sur les revenus du capital."
      noindex
    >
      <Container gap="sm">
        <section id="purge-plus-values-cto" className="scroll-mt-22">
          <div className="space-y-4">
            <InfoBubble
              icon={<FaExchangeAlt />}
              title="La purge des plus-values au décès (CTO)"
              color="text-green-400"
            >
              <p className="leading-relaxed">
                Contrairement à une idée reçue, le <Term id="CTO" /> n'est pas
                totalement dénué d'avantage fiscal. En cas de décès du
                titulaire, les plus-values latentes accumulées de son vivant
                sont <strong>purgées</strong>.
              </p>

              <p className="leading-relaxed mt-2">
                Concrètement, au décès, la valeur des titres est réévaluée à
                leur cours du jour du décès pour le calcul des droits de
                succession. Les héritiers reçoivent les titres avec cette
                nouvelle valeur comme <strong>prix d'acquisition</strong>. S'ils
                revendent juste après la succession, aucune plus-value
                taxable au titre de l'impôt sur le revenu n'est constatée,
                même si le titulaire initial avait acheté ces titres des
                décennies plus tôt à un prix bien plus bas.
              </p>

              <ExampleBox>
                Vous achetez des actions <b>10 000 €</b> il y a 20 ans, elles
                valent <b>50 000 €</b> à votre décès. Vos héritiers reçoivent
                ces titres avec un prix d'acquisition réévalué à 50 000 €, la
                plus-value latente de <b>40 000 €</b> accumulée de votre
                vivant n'est jamais taxée au titre de l'impôt sur le revenu.
                Seuls les droits de succession s'appliquent, sur la valeur
                totale transmise.
              </ExampleBox>

              <p className="leading-relaxed mt-2">
                Cet avantage successoral ne se retrouve pas de la même manière
                dans une <Term id="AssuranceVie" />, où la transmission suit un
                régime dédié (abattement de 152 500 € par bénéficiaire pour les
                versements avant 70 ans) mais où les gains restent taxés
                différemment selon la date des versements. Le CTO, souvent
                perçu comme fiscalement désavantageux comparé au{" "}
                <Term id="PEA" /> ou à l'<Term id="AssuranceVie" />, retrouve
                donc un intérêt réel dans une logique de détention très long
                terme, avec un objectif de <strong>transmission</strong> plutôt
                que de consommation du capital de son vivant.
              </p>
            </InfoBubble>
          </div>
        </section>
      </Container>
    </PageLayout>
  );
};

export default Taxes;
