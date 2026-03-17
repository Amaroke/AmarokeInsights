import React from "react";
import { FaPiggyBank, FaChartLine } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";
import Term from "../components/Term";

const Accounts: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <>
      <div className="flex h-screen text-gray-300 bg-[#12121b]">
        <main
          className={`flex-1 overflow-auto pt-16 md:mt-16 md:pt-0 transition-all duration-300 ${
            isOpen ? "md:ml-64" : "md:ml-0"
          }`}
        >
          <div className="max-w-6xl mx-auto px-2 md:px-4 py-6 md:mb-0 mb-24">
            <section id="current-accounts" className="scroll-mt-22 mb-12">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Comptes courants
              </h2>
              <div className="space-y-4">
                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Compte courant (Single)"
                  color="text-blue-400"
                >
                  Compte principal pour gérer ses opérations bancaires
                  quotidiennes individuellement.
                  <br />
                  <strong>Avantages :</strong> Gestion individuelle et accès
                  immédiat aux fonds.
                  <br />
                  <strong>Inconvénients :</strong> Aucun rendement, frais
                  bancaires possibles.
                  <br />
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Compte courant (Joint)"
                  color="text-blue-400"
                >
                  Compte principal partagé pour gérer les opérations bancaires
                  quotidiennes à plusieurs.
                  <br />
                  <strong>Avantages :</strong> Partage des dépenses et
                  transparence entre co-titulaires.
                  <br />
                  <strong>Inconvénients :</strong> Responsabilité partagée,
                  aucun rendement, frais bancaires possibles.
                  <br />
                </InfoBubble>
              </div>
            </section>
            <section id="saving-account" className="scroll-mt-22 mb-12">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Comptes d'épargne
              </h2>
              <div className="space-y-4">
                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Livret A"
                  color="text-blue-400"
                >
                  Livret d'épargne réglementé, accessible à tous.
                  <br />
                  <strong>Taux :</strong> 1,5% / Plafond 22 950 €
                  <br />
                  <strong>Fiscalité :</strong> Exonéré d'impôt sur le revenu et
                  prélèvements sociaux.
                  <br />
                  <strong>Avantages :</strong> Sécurisé, fonds disponibles à
                  tout moment.
                  <br />
                  <strong>Inconvénients :</strong> Rendement limité.
                  <br />
                  <strong>Stratégie :</strong> Épargne de précaution.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Livret de Développement Durable et Solidaire (LDDS)"
                  color="text-blue-400"
                >
                  Livret similaire au Livret A, destiné à financer des projets
                  durables.
                  <br />
                  <strong>Taux :</strong> 1,5% / Plafond 12 000 €
                  <br />
                  <strong>Fiscalité :</strong> Exonéré d'impôt et prélèvements
                  sociaux.
                  <br />
                  <strong>Avantages :</strong> Sécurisé, fonds disponibles à
                  tout moment.
                  <br />
                  <strong>Inconvénients :</strong> Rendement limité.
                  <br />
                  <strong>Stratégie :</strong> Épargne de précaution.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Livret d'Épargne Populaire (LEP)"
                  color="text-blue-400"
                >
                  Livret réservé aux revenus modestes avec taux attractif.
                  <br />
                  <strong>Taux :</strong> 2,5% / Plafond 10 000 €
                  <br />
                  <strong>Fiscalité :</strong> Exonéré d'impôt et prélèvements
                  sociaux.
                  <br />
                  <strong>Avantages :</strong> Rendement plus élevé que le
                  Livret A et LDDS.
                  <br />
                  <strong>Inconvénients :</strong> Plafond limité, conditions de
                  revenus strictes.
                  <br />
                  <strong>Stratégie :</strong> Épargne de précaution, avec un
                  taux supérieur aux autres livrets réglementés couvrant la même
                  fonction. À prioriser si vous êtes éligible.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Livret Jeune"
                  color="text-blue-400"
                >
                  Livret pour les jeunes de 12 à 25 ans, taux parfois attractif.
                  <br />
                  <strong>Taux :</strong> 1.5% minimum / Plafond 1 600 €
                  <br />
                  <strong>Fiscalité :</strong> Exonéré d'impôt et prélèvements
                  sociaux.
                  <br />
                  <strong>Avantages :</strong> Taux parfois attractif,
                  potentiellement supérieur au livret A, disponibilité
                  immédiate.
                  <br />
                  <strong>Inconvénients :</strong> Plafond faible, réservé aux
                  jeunes.
                  <br />
                  <strong>Stratégie :</strong> Épargne jeunesse et de précaution
                  avec un taux parfois supérieur au Livret A et au LDDS.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Plan Épargne Logement (PEL)"
                  color="text-blue-400"
                >
                  Livret pour préparer un projet immobilier, possibilité de prêt
                  à taux préférentiel.
                  <br />
                  <strong>Taux :</strong> 2% pour les PEL ouverts à partir du
                  1er janvier 2026 / Plafond 61 200 €, attention cependant le
                  taux est bloqué à l'ouverture du plan, certains PEL ouverts il
                  y a plusieurs années ont des taux plus élevés. Il est
                  important de vérifier le taux à l'ouverture et lors de la
                  clôture. Certains PEL ouverts il y a longtemps ont des taux
                  très intéressants.
                  <br />
                  <strong>Fiscalité :</strong> Gains soumis au{" "}
                  <Term id={"PFU"} />
                  .
                  <br />
                  <strong>Avantages :</strong> Possibilité de prêt immobilier.
                  <br />
                  <strong>Inconvénients :</strong> Fonds bloqués 2 ans minimum,
                  autrement retour au taux du CEL.
                  <br />
                  <strong>Stratégie :</strong> Épargne projet immobilier à moyen
                  terme.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Compte Épargne Logement (CEL)"
                  color="text-blue-400"
                >
                  Livret pour financer un projet immobilier.
                  <br />
                  <strong>Taux :</strong> 1% / Plafond 15 300 €
                  <br />
                  <strong>Fiscalité :</strong> Gains soumis au{" "}
                  <Term id={"PFU"} />
                  .
                  <br />
                  <strong>Avantages :</strong> Possibilité de prêt immobilier,
                  fonds disponibles au delà de 300 €.
                  <br />
                  <strong>Inconvénients :</strong> Rendement faible et imposé,
                  fonds bloqués minimum 18 mois.
                  <br />
                  <strong>Stratégie :</strong> Épargne projet immobilier.
                </InfoBubble>
              </div>
            </section>
            <section id="investment-account" className="scroll-mt-22 mb-12">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Comptes d'investissement
              </h2>
              <div className="space-y-4">
                <InfoBubble
                  icon={<FaChartLine />}
                  title="Plan Épargne en Actions (PEA)"
                  color="text-blue-400"
                >
                  Compte pour investir en actions européennes avec avantage
                  fiscal.
                  <br />
                  <strong>Taux :</strong> Très variable, fortement lié à votre
                  stratégie / Plafond 150 000 €
                  <br />
                  <strong>Fiscalité :</strong> <Term id={"PFU"} /> au total si
                  retiré avant 5 ans, uniquement les prélèvements sociaux 18,6%
                  après 5 ans
                  <br />
                  <strong>Avantages :</strong> Rendement potentiel élevé,
                  fiscalité attractive.
                  <br />
                  <strong>Inconvénients :</strong> Risque de perte en capital,
                  limité aux actions de l'Union Européenne (même si certains
                  fonds peuvent inclure des titres non européens).
                  <br />
                  <strong>Stratégie :</strong> Investissement long terme.
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Plan d'Épargne Entreprise (PEE)"
                  color="text-blue-400"
                >
                  Compte collectif proposé par l’entreprise pour investir dans
                  des fonds communs, souvent avec abondement de l’employeur.
                  <br />
                  <strong>Taux :</strong> Variable selon fonds choisis
                  <br />
                  <strong>Fiscalité :</strong> Abondement exonéré d’impôt sur le
                  revenu et soumis uniquement aux prélèvements sociaux (
                  <Term id={"CSG/CRDS"} />, 9,7 %). Les plus-values sont
                  exonérées d’impôt sur le revenu si retrait après 5 ans, mais
                  soumises aux prélèvements sociaux (18,6 %).
                  <br />
                  <strong>Avantages :</strong> Abondement employeur, fiscalité
                  avantageuse.
                  <br />
                  <strong>Inconvénients :</strong> Fonds bloqués 5 ans minimum
                  (sauf cas exceptionnels : mariage, naissance, licenciement,
                  etc.), choix limité de fonds.
                  <br />
                  <strong>Stratégie :</strong> Épargne salariale à moyen terme,
                  profiter de l’abondement et optimiser la fiscalité.
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Plan Épargne Retraite (PER)"
                  color="text-blue-400"
                >
                  Épargne retraite avec avantages fiscaux immédiats.
                  <br />
                  <strong>Taux :</strong> Variable selon fonds
                  <br />
                  <strong>Fiscalité :</strong> Déduction des versements du
                  revenu imposable, report d'imposition, prélèvements sociaux à
                  la sortie. <Term id={"PFU"} /> si sortie en capital, barème de
                  l'impôt sur le revenu si sortie en rente.
                  <br />
                  <strong>Avantages :</strong> Réduction d’impôt, capital
                  disponible à la retraite.
                  <br />
                  <strong>Inconvénients :</strong> Argent bloqué jusqu’à la
                  retraite.
                  <br />
                  <strong>Stratégie :</strong> Préparer sa retraite à long
                  terme.
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Assurance Vie (AV)"
                  color="text-blue-400"
                >
                  Contrat d’épargne permettant de préparer projets et
                  succession.
                  <br />
                  <strong>Taux :</strong> Variable selon fonds choisis
                  <br />
                  <strong>Fiscalité :</strong> Avantage fiscal après 8 ans,
                  abattement annuel 4 600€ (célibataires) ou 9 200€ (couples)
                  sur les gains, prélèvements sociaux 18,6%, succession
                  optimisée.
                  <br />
                  <strong>Avantages :</strong> Flexibilité des supports, gestion
                  libre ou pilotée, succession facilitée, liquidité partielle
                  possible.
                  <br />
                  <strong>Inconvénients :</strong> Rendement fonds euros faible,
                  unités de compte risquées, frais d’entrée et de gestion à
                  surveiller.
                  <br />
                  <strong>Stratégie :</strong> Épargne long terme diversifiée,
                  optimisation fiscale, préparation succession.
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Compte-Titres Ordinaire (CTO)"
                  color="text-blue-400"
                >
                  Compte permettant d’acheter et vendre librement actions,
                  obligations, <Term id={"ETF"} />, cryptos et autres titres
                  financiers.
                  <br />
                  <strong>Taux :</strong> Variable selon performance des titres
                  choisis
                  <br />
                  <strong>Fiscalité :</strong> Gains et dividendes soumis au{" "}
                  <Term id={"PFU"} />.
                  <br />
                  <strong>Avantages :</strong> Liberté totale d’investissement,
                  aucun plafond, possibilité de diversifier internationalement.
                  <br />
                  <strong>Inconvénients :</strong> Risque de perte en capital,
                  fiscalité moins avantageuse qu’un PEA ou PER.
                  <br />
                  <strong>Stratégie :</strong> Investissement à long terme pour
                  diversifier et compléter un PEA ou un PER.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Compte à terme (CAT)"
                  color="text-blue-400"
                >
                  Épargne placée pour une durée déterminée avec taux garanti.
                  <br />
                  <strong>Taux :</strong> 2%, variable selon durée et banque
                  <br />
                  <strong>Fiscalité :</strong> Gains soumis au{" "}
                  <Term id={"PFU"} />
                  .
                  <br />
                  <strong>Avantages :</strong> Rendement stable, sécurisé.
                  <br />
                  <strong>Inconvénients :</strong> Fonds bloqués jusqu’à
                  échéance, autrement aucun intérêt.
                  <br />
                  <strong>Stratégie :</strong> Épargne moyen terme avec faible
                  risque.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Compte sur livret / Livret bancaire"
                  color="text-blue-400"
                >
                  Compte d’épargne flexible proposé par les banques.
                  <br />
                  <strong>Taux :</strong> 1% à 2% en moyenne et selon la banque
                  <br />
                  <strong>Fiscalité :</strong> Gains soumis au{" "}
                  <Term id={"PFU"} />
                  .
                  <br />
                  <strong>Avantages :</strong> Flexibilité, fonds disponibles
                  immédiatement.
                  <br />
                  <strong>Inconvénients :</strong> Rendement faible.
                  <br />
                  <strong>Stratégie :</strong> Épargne flexible.
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Plan Épargne Avenir Climat"
                  color="text-blue-400"
                >
                  Compte pour investir dans des projets durables et climatiques.
                  <br />
                  <strong>Taux :</strong> Variable selon fonds / Plafond 22 950
                  €
                  <br />
                  <strong>Fiscalité :</strong> Exonéré d'impôt sur le revenu et
                  prélèvements sociaux.
                  <br />
                  <strong>Avantages :</strong> Contribue à la transition
                  écologique.
                  <br />
                  <strong>Inconvénients :</strong> Risque de perte en capital.
                  Fonds bloqués 5 ans et avant 18 ans. Fermeture automatique
                  l'année des 30 ans.
                  <br />
                  <strong>Stratégie :</strong> Investissements{" "}
                  <Term id={"ESG"} />, long terme.
                </InfoBubble>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Accounts;
