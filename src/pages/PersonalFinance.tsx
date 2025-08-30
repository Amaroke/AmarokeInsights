import React from "react";
import {
  FaWallet,
  FaPiggyBank,
  FaShieldAlt,
  FaUniversity,
  FaBalanceScale,
  FaLightbulb,
  FaRocket,
  FaHandHoldingUsd,
} from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";

const PersonalFinance: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="flex h-screen text-gray-300 bg-[#12121b]">
      <main
        className={`flex-1 overflow-auto pt-16 pb-8 transition-all duration-300 ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-6">
          <section id="budget" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Gérer un budget
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaWallet />}
                title="Qu’est-ce qu’un budget ?"
                color="text-yellow-400"
              >
                <p className="leading-relaxed">
                  Le budget est la base d’une bonne gestion financière. Il
                  consiste à<strong> suivre vos revenus et vos dépenses</strong>{" "}
                  afin de savoir où part votre argent et d’éviter les mauvaises
                  surprises.
                </p>

                <p className="leading-relaxed">
                  Le budget est grandement influencé par votre revenu, il
                  peut-être aussi simple ou détaillé que vous le souhaitez, mais
                  voici quelques étapes clés pour bien le gérer :
                </p>

                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li>
                    <strong>Faites le point</strong> : recensez vos ressources
                    et vos dépenses réelles sur l’année passée (salaires,
                    revenus annexes, charges fixes, dépenses variables).
                  </li>

                  <li>
                    <strong>Établissez des prévisions</strong> : projetez vos
                    revenus et dépenses pour le semestre ou l’année à venir.
                    Anticipez les hausses ponctuelles, abonnements et projets
                    (vacances, travaux, etc.).
                  </li>

                  <li>
                    <strong>Suivez régulièrement</strong> : comparez
                    périodiquement vos prévisions aux dépenses réelles et
                    ajustez le budget. Avant d’engager une nouvelle dépense,
                    vérifiez que vous disposez des ressources nécessaires.
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
                icon={<FaBalanceScale />}
                title="Un exemple de gestion de budget, la méthode du 50 / 30 / 20"
                color="text-green-400"
              >
                <p className="leading-relaxed">
                  Une méthode simple et populaire consiste à répartir vos
                  revenus nets ainsi :
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    <strong>50% : Besoins essentiels</strong> : logement,
                    alimentation, énergie, transports, assurances, santé.
                  </li>
                  <li>
                    <strong>30% : Plaisirs</strong> : loisirs, voyages, sorties,
                    abonnements, shopping non essentiel.
                  </li>
                  <li>
                    <strong>20% : Épargne et remboursement de dettes</strong> :
                    livret d’épargne, investissements, remboursement anticipé de
                    crédit.
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Cette règle est un <strong>point de départ</strong> :
                  adaptez-la à vos revenus, vos charges fixes et vos objectifs
                  de vie.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaLightbulb />}
                title="Un autre exemple : Stratégie de priorités financières"
                color="text-blue-400"
              >
                <p className="leading-relaxed">
                  Une autre approche consiste à définir un ordre de priorités
                  pour vos revenus disponibles après dépenses essentielles :
                </p>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li>
                    <strong>Dépenses obligatoires</strong> : logement, impôts,
                    énergie, alimentation, crédit immobilier.
                  </li>
                  <li className="mt-4">
                    <strong>Contributions entreprise</strong> : si vous avez
                    accès à un PEE, cotisez au minimum pour profiter de
                    l’abondement employeur.
                    <p className="mt-1">
                      Exemple : si votre employeur double vos 100 € versés, vous
                      obtenez immédiatement 200 €. C’est un rendement garanti
                      difficile à égaler ailleurs.
                    </p>
                  </li>
                  <li className="mt-4">
                    <strong>Épargne de précaution</strong> : constituez un
                    coussin de 3 à 6 mois de dépenses courantes, immédiatement
                    disponible.
                    <p className="mt-1">
                      Cette épargne doit rester disponible à tout moment, de
                      préférence sur un Livret A ou un LDDS. Elle couvre les
                      imprévus : panne de voiture, frais médicaux, perte
                      d’emploi, etc. Nous y revenons en détail plus bas.
                    </p>
                  </li>
                  <li className="mt-4">
                    <strong>Rembourser les dettes</strong> : ciblez en priorité
                    les crédits à taux élevés (souvent supérieurs à
                    l’inflation).
                    <ul className="list-disc list-inside pl-4 space-y-1">
                      <li>
                        <strong>Prioritaires</strong> : crédits à la
                        consommation, découvert bancaire, etc.
                      </li>
                      <li>
                        <strong>Moins urgents</strong> : crédit immobilier (taux
                        plus faible, parfois inférieur à l’inflation)
                      </li>
                    </ul>
                    <p className="mt-1">
                      Rembourser ces dettes, c’est comme obtenir un rendement
                      garanti équivalent au taux d’intérêt économisé.
                    </p>
                  </li>
                  <li className="mt-4">
                    <strong>Épargne défiscalisée</strong> : profitez des
                    dispositifs permettant de réduire votre imposition, comme le{" "}
                    PER.
                    <p className="mt-1">
                      Les sommes investies peuvent être déduites de vos revenus
                      imposables, ce qui augmente votre pouvoir d’épargne net.
                      Attention toutefois : l’argent est bloqué jusqu’à la
                      retraite (hors cas exceptionnels) et ne peut donc pas
                      convenir à tous les objectifs.
                    </p>
                  </li>

                  <li className="mt-4">
                    <strong>Épargne long terme</strong> : destinez vos excédents
                    à vos grands projets de vie.
                    <ul className="list-disc list-inside pl-4 space-y-1">
                      <li>
                        <strong>Retraite</strong> : via une assurance-vie en
                        unités de compte ou un PEA actions.
                      </li>
                      <li>
                        <strong>Achat immobilier</strong> : constitution d’un
                        apport pour un futur logement.
                      </li>
                      <li>
                        <strong>Investissements</strong> : actions, ETF,
                        immobilier locatif pour générer des revenus
                        complémentaires.
                      </li>
                    </ul>
                  </li>
                </ol>
                <p className="leading-relaxed">
                  Le reste constitue votre <strong>revenu disponible</strong>,
                  utilisable pour les plaisirs et projets facultatifs.
                </p>
              </InfoBubble>
            </div>
          </section>

          <section id="savings-emergency-fund" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Épargne, fonds de secours et FIRE
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaPiggyBank />}
                title="L’épargne"
                color="text-green-400"
              >
                <p className="leading-relaxed">
                  Épargner signifie mettre de côté une partie de ses revenus
                  pour préparer l’avenir. L’épargne peut avoir différents
                  objectifs :
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>
                    <strong>Épargne de précaution</strong> : pour les imprévus
                    du quotidien. nous y revenons plus bas.
                  </li>
                  <li>
                    <strong>Épargne projet</strong> : pour financer un objectif
                    spécifique comme des vacances, l’achat d’une voiture ou d’un
                    bien immobilier.
                  </li>
                  <li>
                    <strong>Épargne long terme</strong> : pour préparer des
                    objectifs financiers lointains comme la retraite ou l'achat
                    d'une résidence secondaire.
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Commencez petit mais de façon régulière :{" "}
                  <strong>mieux vaut 50€ par mois que rien du tout</strong>.
                  L’important est la constance et la discipline.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaShieldAlt />}
                title="Le fonds de secours"
                color="text-blue-400"
              >
                <p className="leading-relaxed">
                  Le fonds de secours, aussi appelé épargne de précaution, est
                  un <strong>coussin de sécurité</strong> qui permet d’affronter
                  un imprévu sans avoir à emprunter (panne de voiture, frais
                  médicaux, perte de revenus…).
                </p>
                <p className="leading-relaxed">
                  La recommandation courante est d’avoir{" "}
                  <strong>3 à 6 mois de dépenses courantes</strong> mis de côté,
                  idéalement sur un livret accessible et sécurisé (Livret A,
                  LDDS…). Exemple : si vos dépenses mensuelles sont de 1 500€,
                  visez un fonds de secours compris entre 4 500€ et 9 000€.
                </p>
                <p className="leading-relaxed">
                  Astuce : commencez par un petit montant régulier et
                  augmentez-le progressivement. Même 20€ par semaine peuvent
                  constituer un solide fonds de secours sur un an.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaRocket />}
                title="Qu'est-ce que le mouvement FIRE ?"
                color="text-yellow-400"
              >
                <p className="leading-relaxed">
                  Le mouvement FIRE (Financial Independence, Retire Early)
                  consiste à épargner et investir massivement pour atteindre
                  l’indépendance financière le plus tôt possible, afin de
                  pouvoir arrêter de travailler avant l’âge légal de la
                  retraite.
                </p>
                <p className="leading-relaxed font-semibold">
                  Principaux types de FIRE :
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>
                    <strong>LeanFIRE</strong> : vivre de manière minimaliste
                    pour atteindre l’indépendance financière avec moins de
                    revenus. Exemple : épargner 60-70% de ses revenus et vivre
                    avec un budget réduit.
                  </li>
                  <li>
                    <strong>FatFIRE</strong> : viser l’indépendance financière
                    tout en conservant un style de vie confortable. Exemple :
                    épargner et investir pour générer un revenu passif élevé
                    permettant de maintenir un niveau de vie similaire à celui
                    d’avant la retraite anticipée.
                  </li>
                  <li>
                    <strong>BaristaFIRE</strong> : atteindre partiellement
                    l’indépendance financière et continuer à travailler
                    légèrement ou à temps partiel pour compléter les revenus.
                    Exemple : quitter son emploi principal et travailler
                    quelques heures en freelance pour financer certains loisirs.
                  </li>
                </ul>
                <p className="leading-relaxed font-semibold">
                  Exemple concret :
                </p>
                <p className="leading-relaxed pl-2">
                  Une personne investissant <strong>2 000 €/mois</strong>{" "}
                  pendant <strong>15 à 20 ans</strong> avec un rendement annuel
                  de 4 à 7 % pourrait obtenir :
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>15 ans, 4 % : environ 500 000 €</li>
                  <li>15 ans, 7 % : environ 588 000 €</li>
                  <li>20 ans, 4 % : environ 660 000 €</li>
                  <li>20 ans, 7 % : environ 960 000 €</li>
                </ul>
                <p className="leading-relaxed pl-2">
                  En retirant 4 % par an de ce capital, cela permettrait de
                  générer un revenu passif annuel compris entre 20 000 et 38 000
                  €, sans toucher au capital initial. Ces chiffres sont donnés à
                  titre indicatif et dépendent de nombreux facteurs (rendement,
                  inflation, fiscalité, etc.).
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaWallet />}
                title="Capacité d’épargne"
                color="text-green-500"
              >
                <p className="leading-relaxed">
                  Pour quelqu’un qui gagne un salaire d'environ 2000 € net/mois
                  et paie un loyer, une{" "}
                  <strong>capacité d’épargne correcte</strong> commence autour
                  de <strong>10 % de son revenu net</strong>, soit environ 200 €
                  par mois.
                </p>

                <p className="leading-relaxed">
                  Une <strong>épargne plus agressive</strong> commence vers 20 %
                  du net (~400 € par mois) et permet d’accélérer la constitution
                  de patrimoine ou d’atteindre des objectifs FIRE plus
                  rapidement.
                </p>

                <p className="leading-relaxed">
                  Si vous vivez chez vos parents ou gagnez plus que le salaire
                  médian, vous pouvez épargner davantage sans réduire votre
                  niveau de vie. Exemple : quelqu’un qui gagne le double (~3 500
                  € net) peut raisonnablement épargner{" "}
                  <strong>30 à 40 % de son revenu net</strong> tout en
                  conservant un bon train de vie.
                </p>

                <p className="leading-relaxed">
                  À l’inverse, si vos revenus sont plus faibles ou que vous avez
                  des contraintes (enfants, santé, charges non couvertes),
                  atteindre 10 % peut être difficile. Néanmoins, c’est un
                  objectif intéressant pour se constituer un{" "}
                  <strong>fonds de précaution</strong> et sécuriser sa situation
                  financière sur le long terme.
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
                  Les dettes et emprunts ne sont pas toujours négatifs : un{" "}
                  <strong>crédit immobilier</strong> bien géré peut être un bon
                  investissement, permettant de constituer un patrimoine. En
                  revanche, les <strong>crédits à la consommation</strong>{" "}
                  (voiture, électroménager, découvert bancaire…) coûtent souvent
                  très cher et doivent être évités si possible.
                </p>

                <p className="leading-relaxed">
                  La clé est de{" "}
                  <strong>maîtriser son taux d’endettement</strong> : vos
                  mensualités ne devraient pas dépasser environ{" "}
                  <strong>30 à 35 % de vos revenus</strong>.
                </p>

                <p className="leading-relaxed">
                  Exemple concret : si vous gagnez 2 500 €/mois, vos mensualités
                  totales ne devraient pas dépasser 750 à 875 €. Cela inclut le
                  crédit immobilier, le prêt auto ou tout autre emprunt.
                </p>

                <p className="leading-relaxed">
                  Pour un couple, le calcul change : on prend en compte
                  l’ensemble des revenus et des dettes. Par exemple, si l’un
                  gagne 2 500 € et l’autre 2 000 €, le taux d’endettement
                  maximal de 30 à 35 % s’applique sur 4 500 € de revenus
                  combinés, soit 1 350 à 1 575 € de mensualités totales.
                </p>

                <p className="leading-relaxed">
                  Avant d’emprunter, posez-vous deux questions simples :{" "}
                  <em>en ai-je vraiment besoin ?</em> et{" "}
                  <em>
                    ai-je les moyens de rembourser sans fragiliser mon budget ?
                  </em>
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaHandHoldingUsd />}
                title="Optimiser et gérer ses emprunts"
                color="text-red-600"
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
                    les crédits à taux élevé (ex. cartes de crédit, prêts
                    personnels) avant de rembourser le crédit immobilier.
                  </li>
                  <li>
                    <strong>Profiter des taux bas</strong> : si les taux
                    d’intérêt sont bas, il peut être intéressant de conserver un
                    crédit à faible coût tout en investissant votre épargne
                    ailleurs.
                  </li>
                </ul>

                <p className="leading-relaxed font-semibold">
                  Exemples concrets :
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>
                    <strong>Cas classique :</strong> vous avez un crédit auto à
                    8 % et un crédit immobilier à 2 %. Il est plus rentable de
                    rembourser rapidement le crédit auto tout en continuant à
                    payer normalement le crédit immobilier.
                  </li>
                  <li>
                    <strong>Cas avec inflation :</strong> si l’inflation est de
                    5 % et que votre crédit immobilier est à 2 %, la valeur
                    réelle de vos mensualités diminue chaque année. Dans ce cas,
                    il peut être intéressant de garder ce crédit plutôt que de
                    le rembourser trop vite, car vous remboursez "moins chère"
                    avec le temps.
                  </li>
                </ul>
              </InfoBubble>
              <InfoBubble
                icon={<FaBalanceScale />}
                title="Emprunt levier"
                color="text-red-500"
              >
                <p className="leading-relaxed">
                  L’<strong>emprunt levier</strong> consiste à utiliser un
                  crédit pour investir, dans l’espoir que le rendement de
                  l’investissement soit supérieur au coût du crédit. Cela peut
                  accélérer la constitution de patrimoine, mais comporte un
                  risque supplémentaire.
                </p>

                <p className="leading-relaxed font-semibold">Exemples :</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>
                    <strong>Investissement immobilier :</strong> emprunter pour
                    acheter un bien locatif dont le loyer couvre tout ou partie
                    des mensualités et des charges. Exemple : un crédit
                    immobilier à 2 %/an pour un bien qui génère 5 % de rendement
                    locatif.
                  </li>
                  <li>
                    <strong>Investissement en bourse :</strong> certains
                    investisseurs expérimentés utilisent un effet de levier
                    modéré pour amplifier leurs gains, en s’assurant que le coût
                    du crédit reste inférieur au rendement attendu.
                  </li>
                </ul>

                <p className="leading-relaxed">
                  ⚠️ Attention : l’emprunt levier augmente le risque. Si le
                  rendement attendu n’est pas atteint, vous devez tout de même
                  rembourser le crédit. Il est conseillé de maîtriser
                  parfaitement son budget et de ne jamais emprunter au-delà de
                  ses capacités financières.
                </p>
              </InfoBubble>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PersonalFinance;
