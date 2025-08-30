import React from "react";
import {
  FaPiggyBank,
  FaChartLine,
  FaHome,
  FaExclamationTriangle,
} from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";
import Warning from "../components/Warning";

const BankingAccounts: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <>
      <Warning>
        ATTENTION : cette section est{" "}
        <span className="underline">en cours de rédaction</span>.
      </Warning>
      <div className="flex h-screen text-gray-300 bg-[#12121b]">
        <main
          className={`flex-1 overflow-auto pt-16 pb-8 transition-all duration-300 ${
            isOpen ? "md:ml-64" : "md:ml-0"
          }`}
        >
          <div className="max-w-6xl mx-auto px-2 md:px-4 py-6">
            <section id="types-of-accounts" className="scroll-mt-22 mb-12">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Comptes bancaires, livrets et plans d’épargne
              </h2>

              <div className="space-y-4">
                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Compte courant (Single)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Compte principal pour gérer ses
                  opérations bancaires quotidiennes individuellement.
                  <br />
                  <strong>Type :</strong> Compte courant
                  <br />
                  <strong>Avantages :</strong> Gestion individuelle et accès
                  immédiat aux fonds.
                  <br />
                  <strong>Inconvénients :</strong> Aucun rendement, frais
                  bancaires possibles.
                  <br />
                  <strong>Stratégie :</strong> Gestion de la trésorerie
                  quotidienne.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Compte courant (Joint)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Compte principal partagé pour
                  gérer les opérations bancaires quotidiennes à plusieurs.
                  <br />
                  <strong>Avantages :</strong> Partage des dépenses et
                  transparence entre co-titulaires.
                  <br />
                  <strong>Inconvénients :</strong> Responsabilité partagée,
                  aucun rendement.
                  <br />
                  <strong>Stratégie :</strong> Gestion commune des finances
                  quotidiennes.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Livret A"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Livret d'épargne réglementé,
                  accessible à tous.
                  <br />
                  <strong>Type :</strong> Épargne
                  <br />
                  <strong>Taux :</strong> 1,7% / Plafond 22 950 €
                  <br />
                  <strong>Fiscalité :</strong> Exonéré d'impôt sur le revenu et
                  prélèvements sociaux
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
                  <strong>Description :</strong> Livret similaire au Livret A,
                  destiné à financer des projets durables.
                  <br />
                  <strong>Type :</strong> Épargne
                  <br />
                  <strong>Taux :</strong> 1,7% / Plafond 12 000 €
                  <br />
                  <strong>Fiscalité :</strong> Exonéré d'impôt et prélèvements
                  sociaux
                  <br />
                  <strong>Avantages :</strong> Sécurisé, accessible
                  immédiatement.
                  <br />
                  <strong>Inconvénients :</strong> Rendement faible.
                  <br />
                  <strong>Stratégie :</strong> Épargne de précaution.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Livret d'Épargne Populaire (LEP)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Livret réservé aux revenus
                  modestes avec taux attractif.
                  <br />
                  <strong>Type :</strong> Épargne
                  <br />
                  <strong>Taux :</strong> 2,7% / Plafond 10 000 €
                  <br />
                  <strong>Fiscalité :</strong> Exonéré d'impôt et prélèvements
                  sociaux
                  <br />
                  <strong>Avantages :</strong> Rendement élevé pour épargne
                  courte.
                  <br />
                  <strong>Inconvénients :</strong> Plafond limité, conditions de
                  revenus strictes.
                  <br />
                  <strong>Stratégie :</strong> Épargne de précaution, avec un
                  taux supérieur aux autres livrets réglementés couvrant la même
                  fonction.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Livret Jeune"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Livret pour les jeunes de 12 à
                  25 ans, taux attractif.
                  <br />
                  <strong>Type :</strong> Épargne
                  <br />
                  <strong>Taux :</strong> 1.7% / Plafond 1 600 €
                  <br />
                  <strong>Fiscalité :</strong> Exonéré
                  <br />
                  <strong>Avantages :</strong> Taux attractif, disponibilité
                  immédiate.
                  <br />
                  <strong>Inconvénients :</strong> Plafond faible, réservé aux
                  jeunes.
                  <br />
                  <strong>Stratégie :</strong> Épargne jeunesse.
                </InfoBubble>

                <InfoBubble
                  icon={<FaHome />}
                  title="Compte Épargne Logement (CEL)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Livret pour financer un projet
                  immobilier.
                  <br />
                  <strong>Type :</strong> Épargne
                  <br />
                  <strong>Taux :</strong> 1,25% / Plafond 15 300 €
                  <br />
                  <strong>Fiscalité :</strong> Prélèvements sociaux 17,2%
                  <br />
                  <strong>Avantages :</strong> Flexibilité, possibilité de prêt
                  immobilier.
                  <br />
                  <strong>Inconvénients :</strong> Rendement faible, fonds
                  bloqués minimum 18 mois.
                  <br />
                  <strong>Stratégie :</strong> Épargne projet immobilier.
                </InfoBubble>

                <InfoBubble
                  icon={<FaHome />}
                  title="Plan Épargne Logement (PEL)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Livret pour préparer un projet
                  immobilier, possibilité de prêt à taux préférentiel.
                  <br />
                  <strong>Type :</strong> Épargne
                  <br />
                  <strong>Taux :</strong> 1,75% / Plafond 61 200 €, attention
                  cependant le taux est bloqué à l'ouverture du plan, certains
                  PEL ouverts il y a plusieurs années ont des taux plus élevés.
                  Il est important de vérifier le taux à l'ouverture et lors de
                  la clôture. Certains PEL ouverts il y a longtemps ont des taux
                  très intéressants.
                  <br />
                  <strong>Fiscalité :</strong> Impôt sur les intérêts après 12
                  ans, prélèvements sociaux 17,2%
                  <br />
                  <strong>Avantages :</strong> Prime d'État possible, prêt
                  immobilier avantageux.
                  <br />
                  <strong>Inconvénients :</strong> Fonds bloqués 4 ans minimum.
                  <br />
                  <strong>Stratégie :</strong> Épargne projet immobilier à moyen
                  terme.
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Plan Épargne Retraite Populaire (PERP)"
                  color="text-green-400"
                >
                  <strong>Description :</strong> Épargne retraite avec avantages
                  fiscaux immédiats.
                  <br />
                  <strong>Type :</strong> Investissement
                  <br />
                  <strong>Taux :</strong> Variable selon fonds
                  <br />
                  <strong>Fiscalité :</strong> Déduction des versements du
                  revenu imposable
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
                  icon={<FaPiggyBank />}
                  title="Compte sur livret / Livret bancaire"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Compte d’épargne flexible
                  proposé par les banques.
                  <br />
                  <strong>Type :</strong> Épargne
                  <br />
                  <strong>Taux :</strong> 1% à 2% selon banque
                  <br />
                  <strong>Fiscalité :</strong> PFU 30%
                  <br />
                  <strong>Avantages :</strong> Flexibilité, fonds disponibles
                  immédiatement.
                  <br />
                  <strong>Inconvénients :</strong> Rendement faible.
                  <br />
                  <strong>Stratégie :</strong> Épargne flexible.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Compte à terme (CAT)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Épargne placée pour une durée
                  déterminée avec taux garanti.
                  <br />
                  <strong>Type :</strong> Épargne
                  <br />
                  <strong>Taux :</strong> 3% à 4% selon durée
                  <br />
                  <strong>Fiscalité :</strong> PFU 30%
                  <br />
                  <strong>Avantages :</strong> Rendement stable, sécurisé.
                  <br />
                  <strong>Inconvénients :</strong> Fonds bloqués jusqu’à
                  échéance.
                  <br />
                  <strong>Stratégie :</strong> Épargne moyen terme avec faible
                  risque.
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Plan Épargne en Actions (PEA)"
                  color="text-green-400"
                >
                  <strong>Description :</strong> Compte pour investir en actions
                  européennes avec avantage fiscal.
                  <br />
                  <strong>Type :</strong> Investissement
                  <br />
                  <strong>Fiscalité :</strong> Exonéré après 5 ans, prélèvements
                  sociaux 17,2%
                  <br />
                  <strong>Avantages :</strong> Rendement potentiel élevé,
                  fiscalité attractive.
                  <br />
                  <strong>Inconvénients :</strong> Risque de perte en capital,
                  limité aux actions UE.
                  <br />
                  <strong>Stratégie :</strong> Investissement long terme.
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Plan Épargne Avenir Climat"
                  color="text-green-400"
                >
                  <strong>Description :</strong> Compte pour investir dans des
                  projets durables et climatiques.
                  <br />
                  <strong>Type :</strong> Investissement
                  <br />
                  <strong>Taux :</strong> Variable selon fonds
                  <br />
                  <strong>Fiscalité :</strong> PFU 30%
                  <br />
                  <strong>Avantages :</strong> Contribue à la transition
                  écologique, diversification.
                  <br />
                  <strong>Inconvénients :</strong> Risque de perte en capital.
                  <br />
                  <strong>Stratégie :</strong> Investissement ESG / durable.
                </InfoBubble>

                <InfoBubble
                  icon={<FaExclamationTriangle />}
                  title="Comptes anciens à 1% (ex. Cofidis)"
                  color="text-red-400"
                >
                  <strong>Description :</strong> Comptes d'épargne très faible
                  rendement encore ouverts.
                  <br />
                  <strong>Type :</strong> Épargne
                  <br />
                  <strong>Fiscalité :</strong> PFU 30%
                  <br />
                  <strong>Avantages :</strong> Aucun réel avantage, fonds
                  disponibles.
                  <br />
                  <strong>Inconvénients :</strong> Rendement très faible.
                  <br />
                  <strong>Stratégie :</strong> Il est préférable de les clôturer
                  et transférer l’argent vers des produits plus rentables.
                </InfoBubble>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default BankingAccounts;
