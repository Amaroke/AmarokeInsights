import React from "react";
import { FaBookOpen } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";
import {
  FaChartLine,
  FaHandshake,
  FaPercentage,
  FaMoneyBillWave,
  FaWater,
  FaGlobeAmericas,
  FaTools,
  FaLayerGroup,
} from "react-icons/fa";

const Basics: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="flex h-screen text-gray-300 bg-[#12121b]">
      <main
        className={`flex-1 overflow-auto pt-16 md:mt-16 md:pt-0 transition-all duration-300 ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-6 md:mb-0 mb-24">
          <section id="concepts-fundamentals" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Concepts fondamentaux
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaBookOpen />}
                title="Valeur de l’argent dans le temps, inflation et déflation"
                color="text-blue-400"
              >
                <p className="leading-relaxed">
                  L’argent possédé aujourd’hui n’a pas la même valeur dans le
                  futur.
                </p>
                <p className="leading-relaxed">
                  <strong>L’inflation</strong> est une hausse des prix générale
                  affectant tous les biens et services. Elle{" "}
                  <strong>réduit le pouvoir d’achat</strong>. Ce que l’on peut
                  acheter avec 100 € aujourd’hui coûtera plus cher demain.
                </p>
                <p className="leading-relaxed">
                  Exemple concret :<br />
                  - Aujourd’hui, panier de courses ➜ 100 €<br />
                  - Dans 1 an avec 3 % d’inflation ➜ 103 €<br />
                  - Dans 10 ans avec 3 % d’inflation ➜ ~134 €<br />
                  Conclusion : si 100 € restent inactifs (non dépensés sur un
                  compte courant, sans générer d’intérêts), on perd environ 34 %
                  de pouvoir d’achat sur 10 ans.
                </p>
                <p className="leading-relaxed">
                  <strong>L’argent peut "travailler"</strong> grâce aux intérêts
                  : lorsqu’il est investi ou placé, il génère des revenus qui
                  compensent l’inflation et augmentent le pouvoir d’achat.
                </p>
                <p className="leading-relaxed">
                  Exemple concret :<br />
                  - Placement ➜ 100 € à 5 % par an
                  <br />
                  - Après 1 an ➜ 105 €<br />
                  - Après 10 ans ➜ 163 €<br />
                  - Rendement net après 3 % d’inflation ➜ 2 % par an
                  <br />- Pouvoir d’achat réel après 10 ans ➜ ~122 €
                </p>
                <p className="leading-relaxed">
                  <strong>La déflation</strong> est l’inverse de l’inflation :
                  baisse générale et durable des prix, ce qui augmente le
                  pouvoir d’achat.
                </p>
                <p className="leading-relaxed">
                  Exemple concret :<br />- Un panier de 100 € aujourd’hui
                  coûtera 97 € l’an prochain avec 3 % de déflation.
                </p>
                <p className="leading-relaxed">
                  <strong>
                    Pourquoi l’inflation est plus fréquente que la déflation ?
                  </strong>
                  <br />
                  Les banques centrales visent généralement ~2 % d’inflation
                  pour stimuler consommation et investissement. La déflation,
                  souvent liée à une crise, peut bloquer l’économie (revenus en
                  baisse, licenciements, etc.).
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaBookOpen />}
                title="Taux d’intérêt & intérêt composé"
                color="text-green-400"
              >
                <p className="leading-relaxed">
                  <strong>Intérêt simple</strong> : calculé uniquement sur le
                  capital initial. Par exemple, si vous prêtez 1 000 € à un ami
                  à 5 % par an, les intérêts ne produisent pas d’intérêts
                  supplémentaires.
                </p>
                <p className="leading-relaxed">
                  Exemple concret :<br />
                  - Placement ➜ 1 000 € prêtés à 5 % par an
                  <br />
                  - Après 1 an ➜ 1 050 €<br />- Après 10 ans ➜ 1 500 €
                </p>
                <p className="leading-relaxed">
                  <strong>Intérêt composé</strong> : les intérêts génèrent
                  eux-mêmes des intérêts, créant un effet boule de neige.
                </p>
                <p className="leading-relaxed">
                  Exemple concret :<br />
                  - Placement ➜ 1 000 € à 5 % par an
                  <br />
                  - Après 1 an ➜ 1 050 €<br />
                  - Après 2 ans ➜ 1 102,50 €<br />- Après 10 ans ➜ 1 628 €
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaBookOpen />}
                title="Différence revenu vs patrimoine"
                color="text-purple-400"
              >
                <p className="leading-relaxed">
                  <strong>Le revenu</strong> correspond à un flux d’argent
                  régulier (salaire, loyers, dividendes). Une personne peut
                  percevoir un salaire élevé mais ne pas accumuler de richesse.
                </p>
                <p className="leading-relaxed">
                  Exemple concret :<br />
                  - Salaire ➜ 3 000 €/mois
                  <br />- Après 1 an ➜ 36 000 € perçus, mais patrimoine inchangé
                  si tout est dépensé.
                </p>
                <p className="leading-relaxed">
                  <strong>Le patrimoine</strong> correspond au stock (ce que
                  l’on possède moins ce que l’on doit). Même avec un revenu
                  modeste, un patrimoine solide peut assurer une sécurité
                  financière.
                </p>
                <p className="leading-relaxed">
                  Exemple concret :<br />
                  - Maison ➜ valeur 150 000 €<br />
                  - Crédit restant ➜ 50 000 €<br />- Patrimoine net ➜ 100 000 €
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaBookOpen />}
                title="Épargne vs investissement"
                color="text-pink-400"
              >
                <p className="leading-relaxed">
                  <strong>L’épargne</strong> est sécurisée mais rapporte peu
                  (livret, compte épargne). Elle protège le capital et génère un
                  petit revenu.
                </p>
                <p className="leading-relaxed">
                  Exemple concret :<br />
                  - Placement ➜ 5 000 € sur livret à 2 %<br />- Après 1 an ➜ 5
                  100 €
                </p>
                <p className="leading-relaxed">
                  <strong>L’investissement</strong> peut rapporter plus mais
                  comporte un risque. La valeur du capital peut fluctuer selon
                  les marchés (actions, immobilier…).
                </p>
                <p className="leading-relaxed">
                  Exemple concret :<br />
                  - Placement ➜ 5 000 € en actions
                  <br />
                  - Rendement attendu ➜ 8 %/an
                  <br />
                  - Après 1 an :<br />
                  • Scénario favorable ➜ 5 400 €<br />• Scénario défavorable ➜ 4
                  500 € (perte de 10 % en cas de crise)
                </p>
              </InfoBubble>
            </div>
          </section>

          <section id="risks" className="scroll-mt-22">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Risques
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaChartLine />}
                title="Risque de marché"
                color="text-red-400"
              >
                <p className="leading-relaxed">
                  Le risque de marché, c’est la perte possible quand les prix
                  des actions, obligations ou autres actifs changent rapidement,
                  comme lors d’une crise économique. On peut le limiter en
                  diversifiant et en gardant une vision long terme.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaHandshake />}
                title="Risque de contrepartie"
                color="text-red-400"
              >
                <p className="leading-relaxed">
                  Il survient lorsqu’une personne ou institution ne respecte pas
                  ses engagements financiers (par exemple, un ami qui ne
                  rembourse pas un prêt). On peut le réduire en choisissant des
                  partenaires fiables et en évitant de concentrer ses actifs au
                  même endroit.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaPercentage />}
                title="Risque de taux"
                color="text-red-400"
              >
                <p className="leading-relaxed">
                  Ce risque apparaît quand les taux d’intérêt évoluent et
                  augmentent le coût d’un emprunt (par exemple, un prêt
                  immobilier à taux variable). On peut le gérer en diversifiant
                  les types/durées de taux ou en utilisant des protections.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaMoneyBillWave />}
                title="Risque de change"
                color="text-red-400"
              >
                <p className="leading-relaxed">
                  La variation des devises peut affecter la valeur d’un
                  investissement à l’étranger (par exemple, un placement en
                  dollars perd de la valeur si l’euro monte). On peut limiter ce
                  risque par diversification ou couverture.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaWater />}
                title="Risque de liquidité"
                color="text-red-400"
              >
                <p className="leading-relaxed">
                  Un actif difficile à vendre sans perte (par exemple,
                  immobilier rare ou actions peu échangées) expose à ce risque.
                  On le réduit en gardant une part de liquidités et en
                  diversifiant.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaGlobeAmericas />}
                title="Risque pays"
                color="text-red-400"
              >
                <p className="leading-relaxed">
                  Lié à une crise politique/économique d’un pays (guerre, défaut
                  de dette) qui affecte les entreprises locales. Il se réduit en
                  évaluant la stabilité et en diversifiant géographiquement.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaTools />}
                title="Risque opérationnel"
                color="text-red-400"
              >
                <p className="leading-relaxed">
                  Erreurs, fraudes, défaillances techniques ou cyberattaques
                  peuvent bloquer une activité. On le limite avec des procédures
                  fiables, systèmes sécurisés et bonne organisation.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaLayerGroup />}
                title="Risque idiosyncratique"
                color="text-red-400"
              >
                <p className="leading-relaxed">
                  C’est le risque lié à un seul investissement (« mettre tous
                  ses œufs dans le même panier »), par exemple, détenir
                  uniquement les actions d’une entreprise qui chute. On le
                  réduit en diversifiant son portefeuille.
                </p>
              </InfoBubble>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Basics;
