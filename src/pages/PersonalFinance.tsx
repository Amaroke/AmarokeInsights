import React from "react";
import {
  FaWallet,
  FaPiggyBank,
  FaShieldAlt,
  FaUniversity,
  FaBalanceScale,
  FaChartPie,
  FaListOl,
  FaRocket,
  FaHandHoldingUsd,
  FaChartBar,
} from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";
import Term from "../components/Term";
import ExampleBox from "../components/ExampleBox";

const PersonalFinance: React.FC = () => {
  return (
    <PageLayout
      title="Finance personnelle"
      description="Gérer son budget, son épargne (FIRE) et ses dettes : les fondamentaux de la finance personnelle."
    >
      <Container>
        <section id="budget" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Gérer un budget
          </h2>
          <div className="space-y-4">
            <InfoBubble
              icon={<FaWallet />}
              title="Qu'est-ce qu'un budget ?"
              color="text-yellow-400"
            >
              <p className="leading-relaxed">
                Le budget est la base d'une bonne gestion financière. Il
                consiste à <strong>suivre vos revenus et vos dépenses</strong>{" "}
                afin de savoir où part votre argent et d'éviter les mauvaises
                surprises.
              </p>
              <p className="leading-relaxed">
                Le budget est grandement influencé par votre revenu, il
                peut-être aussi simple ou détaillé que vous le souhaitez, mais
                voici quelques étapes clés pour bien le gérer :
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>
                  <strong>Faites le point</strong> : recensez vos ressources et
                  vos dépenses réelles sur l'année passée (salaires, revenus
                  annexes, charges fixes, dépenses variables).
                </li>
                <li>
                  <strong>Établissez des prévisions</strong> : projetez vos
                  revenus et dépenses pour le semestre ou l'année à venir.
                  Anticipez les hausses ponctuelles, abonnements et projets
                  (vacances, travaux, etc.).
                </li>
                <li>
                  <strong>Suivez régulièrement</strong> : comparez
                  périodiquement vos prévisions aux dépenses réelles et ajustez
                  le budget. Avant d'engager une nouvelle dépense, vérifiez que
                  vous disposez des ressources nécessaires.
                </li>
              </ol>
              <p className="leading-relaxed">
                Il existe de nombreux outils pour vous aider : tableur,
                application mobile, cahier… Choisissez celui qui vous convient
                le mieux et que vous utiliserez régulièrement. Inutile que
                celui-ci soit trop complexe ou payant.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaChartPie />}
              title="La méthode 50 / 30 / 20"
              color="text-orange-400"
            >
              <p className="leading-relaxed">
                Une méthode simple et populaire consiste à répartir vos revenus
                nets ainsi :
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>50 % - Besoins essentiels</strong> : logement,
                  alimentation, énergie, transports, assurances, santé.
                </li>
                <li>
                  <strong>30 % - Plaisirs</strong> : loisirs, voyages, sorties,
                  abonnements, shopping non essentiel.
                </li>
                <li>
                  <strong>20 % - Épargne et remboursement de dettes</strong> :
                  livret d'épargne, investissements, remboursement anticipé de
                  crédit.
                </li>
              </ul>
              <ExampleBox>
                <p>
                  Revenu net de 2 000 €/mois ➜ 1 000 € pour les besoins, 600 €
                  pour les plaisirs, 400 € pour l'épargne.
                </p>
              </ExampleBox>
              <p className="leading-relaxed">
                Cette règle est un <strong>point de départ</strong>, adaptez-la
                à vos revenus, vos charges fixes et vos objectifs de vie.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaListOl />}
              title="Stratégie de priorités financières"
              color="text-blue-400"
            >
              <p className="leading-relaxed">
                Une autre approche consiste à définir un ordre de priorités pour
                vos revenus disponibles après dépenses essentielles :
              </p>
              <ol className="list-decimal list-inside space-y-4 pl-4">
                <li>
                  <strong>Contributions entreprise</strong> : si vous avez accès
                  à un <Term id={"PEE"} />, cotisez au minimum pour profiter au
                  maximum de l'abondement employeur.
                  <div className="mt-2">
                    <ExampleBox>
                      <p>
                        Votre employeur double vos versements : 100 € versés ➜
                        200 € obtenus immédiatement. C'est un rendement garanti
                        difficile à égaler ailleurs.
                      </p>
                    </ExampleBox>
                  </div>
                </li>
                <li>
                  <strong>Rembourser les dettes à taux élevés</strong> : ciblez
                  en priorité les crédits dont le taux dépasse l'inflation.
                  <ul className="list-disc list-inside pl-4 space-y-1 mt-1">
                    <li>Crédits à la consommation, découvert bancaire.</li>
                  </ul>
                  <div className="mt-2">
                    <ExampleBox>
                      <p>
                        Rembourser un crédit à 8 % = un rendement garanti de 8 %
                        sur la somme remboursée. Difficile à battre en bourse
                        avec certitude. Inutile de mettre de l'argent de côté
                        pour investir ailleurs tant que ce crédit n'est pas
                        remboursé.
                      </p>
                    </ExampleBox>
                  </div>
                </li>
                <li>
                  <strong>Épargne de précaution</strong> : constituez un coussin
                  de 3 à 6 mois de dépenses courantes, immédiatement disponible
                  sur un <Term id={"LEP"} /> si vous êtes éligible, sinon un{" "}
                  <Term id={"LivretA"} /> ou un <Term id={"LDDS"} />. Elle
                  couvre les imprévus : panne de voiture, frais médicaux, perte
                  d'emploi, etc.
                </li>

                <li>
                  <strong>Épargne défiscalisée</strong> : profitez des
                  dispositifs comme le <Term id={"PER"} /> pour réduire votre
                  imposition. Les sommes investies sont déductibles de vos
                  revenus imposables. Attention, l'argent est bloqué jusqu'à la
                  retraite (hors cas exceptionnels). Renseignez-vous sur les
                  conditions et comparez avec d'autres options d'investissement
                  selon votre situation. Il faut que ce soit cohérent avec vos
                  objectifs et votre horizon de placement.
                </li>
                <li>
                  <strong>Épargne long terme</strong> : destinez vos excédents à
                  vos grands projets de vie.
                </li>
              </ol>
              <p className="leading-relaxed">
                Le reste constitue votre <strong>revenu disponible</strong>,
                utilisable pour les plaisirs et projets facultatifs.
              </p>
            </InfoBubble>
          </div>
        </section>

        <section id="fire" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Épargne, fonds de secours et FIRE
          </h2>
          <div className="space-y-4">
            <InfoBubble
              icon={<FaPiggyBank />}
              title="L'épargne"
              color="text-green-400"
            >
              <p className="leading-relaxed">
                Épargner signifie mettre de côté une partie de ses revenus pour
                préparer l'avenir. L'épargne peut avoir différents objectifs :
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  <strong>Épargne de précaution</strong> : pour les imprévus du
                  quotidien.
                </li>
                <li>
                  <strong>Épargne projet</strong> : pour financer un objectif
                  spécifique (vacances, voiture, immobilier…).
                </li>
                <li>
                  <strong>Épargne long terme</strong> : pour préparer des
                  objectifs lointains comme la retraite.
                </li>
              </ul>
              <ExampleBox>
                <p>
                  Commencer avec 50 €/mois, c'est 600 €/an et 3 000 € en 5 ans -
                  sans compter les intérêts.{" "}
                  <strong>La constance prime sur le montant.</strong>
                </p>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaShieldAlt />}
              title="Le fonds de secours"
              color="text-blue-400"
            >
              <p className="leading-relaxed">
                Le fonds de secours, aussi appelé épargne de précaution, est un{" "}
                <strong>coussin de sécurité</strong> qui permet d'affronter un
                imprévu sans avoir à emprunter (panne de voiture, frais
                médicaux, perte de revenus…).
              </p>
              <p className="leading-relaxed">
                La recommandation courante est d'avoir{" "}
                <strong>3 à 6 mois de dépenses courantes</strong> mis de côté,
                idéalement sur un livret accessible et sécurisé (
                <Term id={"LEP"} />, <Term id={"LivretA"} />,{" "}
                <Term id={"LDDS"} />
                …).
              </p>
              <ExampleBox>
                <ul>
                  <li>Dépenses mensuelles : 1 500 €</li>
                  <li>Objectif minimum (3 mois) ➜ 4 500 €</li>
                  <li>À 150 €/mois ➜ objectif atteint en 2,5 ans</li>
                  <li>À 300 €/mois ➜ objectif atteint en 15 mois</li>
                </ul>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaRocket />}
              title="Qu'est-ce que le mouvement FIRE ?"
              color="text-orange-400"
            >
              <p className="leading-relaxed">
                Le mouvement FIRE (Financial Independence, Retire Early)
                consiste à épargner et investir massivement pour atteindre
                l'indépendance financière le plus tôt possible, afin de pouvoir
                arrêter de travailler avant l'âge légal de la retraite.
              </p>
              <p className="leading-relaxed font-semibold">
                Principaux types de FIRE :
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong>LeanFIRE</strong> : vivre de manière minimaliste pour
                  atteindre l'indépendance financière avec moins de revenus.
                </li>
                <li>
                  <strong>FatFIRE</strong> : viser l'indépendance financière
                  tout en conservant un style de vie confortable.
                </li>
                <li>
                  <strong>BaristaFIRE</strong> : atteindre partiellement
                  l'indépendance financière et continuer à travailler légèrement
                  ou à temps partiel pour compléter les revenus.
                </li>
              </ul>
              <ExampleBox>
                <p>
                  Investir <strong>2 000 €/mois</strong> pendant 15 à 20 ans
                  avec un rendement annuel de 4 à 7 % :
                </p>
                <ul>
                  <li>15 ans à 4 % ➜ ~500 000 €</li>
                  <li>15 ans à 7 % ➜ ~588 000 €</li>
                  <li>20 ans à 4 % ➜ ~660 000 €</li>
                  <li>20 ans à 7 % ➜ ~960 000 €</li>
                </ul>
                <p>
                  En retirant 4 %/an de ce capital ➜ revenu passif de 20 000 à
                  38 000 €/an sans toucher au capital. Ces chiffres dépendent du
                  rendement réel, de l'inflation et de la fiscalité.
                </p>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaChartBar />}
              title="Capacité d'épargne"
              color="text-teal-400"
            >
              <p className="leading-relaxed">
                Il n'existe pas de taux d'épargne universel : tout dépend de
                votre revenu, de vos charges fixes et de votre situation
                personnelle. Quelques repères courants :
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  <strong>10 %</strong> : un bon point de départ pour commencer
                  à épargner sans trop contraindre son quotidien.
                </li>
                <li>
                  <strong>20 %</strong> : rythme confortable pour construire un
                  patrimoine progressivement.
                </li>
                <li>
                  <strong>30 % et plus</strong> : épargne agressive, permet
                  d'accélérer significativement vers des objectifs FIRE ou un
                  achat immobilier.
                </li>
              </ul>
              <ExampleBox>
                <ul>
                  <li>
                    <strong>2 000 €/mois avec loyer</strong> ➜ 10 % = 200 €
                    épargnés, 20 % = 400 €
                  </li>
                  <li>
                    <strong>3 000 €/mois sans loyer</strong> ➜ 30 à 40 %
                    atteignable tout en vivant confortablement
                  </li>
                </ul>
              </ExampleBox>
              <p className="leading-relaxed">
                Si épargner 10 % est difficile aujourd'hui en raison de charges
                élevées ou d'un revenu faible, commencez par le montant que vous
                pouvez tenir dans la durée, même 50 € par mois. La régularité
                compte plus que le montant.
              </p>
            </InfoBubble>
          </div>
        </section>

        <section id="debt" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Dettes & emprunts
          </h2>
          <div className="space-y-4">
            <InfoBubble
              icon={<FaUniversity />}
              title="Maîtriser son endettement"
              color="text-red-400"
            >
              <p className="leading-relaxed">
                Les dettes et emprunts ne sont pas toujours négatifs, un{" "}
                <strong>crédit immobilier</strong> bien géré peut être un bon
                investissement. En revanche, les{" "}
                <strong>crédits à la consommation</strong> (voiture,
                électroménager, découvert bancaire…) coûtent souvent très cher
                et doivent être évités si possible.
              </p>
              <p className="leading-relaxed">
                L'important c'est de{" "}
                <strong>maîtriser son taux d'endettement</strong>, vos
                mensualités ne devraient pas dépasser environ{" "}
                <strong>30 à 35 % de vos revenus</strong>.
              </p>
              <ExampleBox>
                <ul>
                  <li>
                    <strong>Seul, 2 500 €/mois</strong> ➜ mensualités max 750 à
                    875 € (crédit immo + prêt auto cumulés)
                  </li>
                  <li>
                    <strong>Couple, 4 500 €/mois combinés</strong> ➜ mensualités
                    max 1 350 à 1 575 €
                  </li>
                </ul>
              </ExampleBox>
              <p className="leading-relaxed">
                Avant d'emprunter, posez-vous deux questions simples : En ai-je
                vraiment besoin ?Ai-je les moyens de rembourser sans fragiliser
                mon budget ?
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaHandHoldingUsd />}
              title="Optimiser et gérer ses emprunts"
              color="text-red-400"
            >
              <p className="leading-relaxed">
                Pour gérer vos dettes de manière intelligente, voici quelques
                bonnes pratiques :
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  <strong>Regrouper ses crédits</strong> : un rachat de crédit
                  peut réduire le montant des mensualités et simplifier la
                  gestion.
                </li>
                <li>
                  <strong>Prioriser le remboursement</strong> : commencez par
                  les crédits à taux élevé (cartes de crédit, prêts personnels)
                  avant le crédit immobilier.
                </li>
                <li>
                  <strong>Profiter des taux bas</strong> : si les taux d'intérêt
                  sont bas, il peut être intéressant de conserver un crédit à
                  faible coût tout en investissant votre épargne ailleurs.
                </li>
              </ul>
              <ExampleBox>
                <ul>
                  <li>
                    <strong>Cas classique</strong> : crédit auto à 8 % + crédit
                    immo à 2 % ➜ remboursez d'abord le crédit auto.
                  </li>
                  <li>
                    <strong>Cas avec inflation à 5 %</strong> : crédit immo à 2
                    % ➜ la valeur réelle de vos mensualités diminue chaque
                    année. Garder le crédit et investir l'épargne peut être plus
                    rentable que de rembourser par anticipation.
                  </li>
                </ul>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaBalanceScale />}
              title="Emprunt levier"
              color="text-amber-400"
            >
              <p className="leading-relaxed">
                L'<strong>emprunt levier</strong> consiste à utiliser un crédit
                pour investir, dans l'espoir que le rendement de
                l'investissement soit supérieur au coût du crédit. Cela peut
                accélérer la constitution de patrimoine, mais comporte un risque
                supplémentaire.
              </p>
              <ExampleBox>
                <p>
                  Crédit immobilier à 2 %/an pour un bien locatif générant 5 %
                  de rendement ➜ écart positif de 3 % qui rembourse une partie
                  du crédit et constitue du patrimoine.
                </p>
              </ExampleBox>
              <p className="leading-relaxed">
                L'emprunt levier augmente le risque, si le rendement attendu
                n'est pas atteint, vous devez tout de même rembourser le crédit.
                Ne jamais emprunter au-delà de ses capacités financières.
              </p>
            </InfoBubble>
          </div>
        </section>
      </Container>
    </PageLayout>
  );
};

export default PersonalFinance;
