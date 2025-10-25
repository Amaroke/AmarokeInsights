import React from "react";
import {
  FaChartLine,
  FaLandmark,
  FaCubes,
  FaHome,
  FaGem,
  FaCube,
} from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";

const Investments: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <>
      <div className="flex h-screen text-gray-300 bg-[#12121b]">
        <main
          className={`flex-1 overflow-auto pt-16 pb-8 transition-all duration-300 ${
            isOpen ? "md:ml-64" : "md:ml-0"
          }`}
        >
          <div className="max-w-6xl mx-auto px-2 md:px-4 py-6">
            <section id="what-is-invest" className="scroll-mt-22 mb-12">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Qu'est-ce qu'investir ?
              </h2>

              <div className="space-y-4">
                <InfoBubble
                  icon={<FaGem />}
                  title="Pourquoi investir ?"
                  color="text-blue-400"
                >
                  <p>
                    Investir permet de protéger son pouvoir d’achat contre
                    l’inflation, de préparer ses projets futurs (achat
                    immobilier, retraite, indépendance financière), et de
                    soutenir l’économie réelle en finançant des entreprises et
                    des innovations. Ce n’est pas un moyen de s’enrichir
                    rapidement, mais une stratégie à long terme pour faire
                    fructifier son capital.
                  </p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaCubes />}
                  title="Les trois dimensions d’un investissement"
                  color="text-blue-400"
                >
                  <p>
                    Chaque investissement se mesure selon trois critères :
                    <strong> le rendement </strong> (le gain espéré),
                    <strong> le risque </strong> (la possibilité de perte), et{" "}
                    <strong> la liquidité </strong> (la facilité à récupérer son
                    argent). Aucun placement n’excelle sur les trois à la fois.
                    <br />
                    <strong>Exemples :</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>
                        <strong>Livret A :</strong> très sûr et liquide (on peux
                        retirer son argent quand le souhaite, il n'est pas
                        bloqué), mais rendement faible.
                      </li>
                      <li>
                        <strong>Actions :</strong> rendement potentiellement
                        élevé, mais risque important et valeur qui peut beaucoup
                        varier.
                      </li>
                      <li>
                        <strong>Immobilier :</strong> rendement moyen à bon,
                        risque modéré (selon le marché), mais liquidité faible
                        (revente longue). Risque différent de celui des actions
                        ou d'autres actifs financiers.
                      </li>
                    </ul>
                  </p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Le couple rendement / risque, comment choisir ?"
                  color="text-blue-400"
                >
                  <p>
                    Tout placement offre un rendement potentiel mais implique
                    également un risque de perte. Plus le rendement attendu est
                    élevé, plus le risque l’est aussi. L’objectif est de trouver
                    un équilibre adapté au profil de l’investisseur et à
                    l’horizon de placement.
                  </p>

                  <p>
                    Avant d’investir, il est nécessaire de définir l’objectif,
                    l’horizon de temps et le profil de risque. Ces trois
                    éléments servent de guide pour sélectionner les placements
                    appropriés.
                  </p>

                  <ul className="list-disc list-inside mb-3 space-y-1">
                    <li>
                      <strong>Objectif :</strong> par exemple retraite, projet
                      spécifique, achat d'une résidence ou constitution de
                      patrimoine
                    </li>
                    <li>
                      <strong>Horizon :</strong> court, moyen ou long terme
                    </li>
                    <li>
                      <strong>Profil de risque :</strong> prudent, équilibré ou
                      dynamique
                    </li>
                  </ul>

                  <p>
                    Il est important de ne pas rechercher un enrichissement
                    rapide et d’éviter que les décisions soient guidées par les
                    émotions. Par exemple, les investisseurs débutants vendent
                    souvent leurs actions au plus bas lors d’une crise, pour
                    constater ensuite que le marché a rebondi et que la reprise
                    a été manquée.
                  </p>

                  <p>
                    La patience, la discipline et la diversification sont les
                    meilleures pratiques pour limiter les risques. Il est
                    important de noter que l’investissement n’est pas recommandé
                    pour les personnes sensibles aux émotions ou qui craignent
                    la perte de capital. Pour ceux qui souhaitent minimiser tout
                    risque, il existe des placements à capital garanti, comme
                    les livrets ou les fonds euros en assurance-vie. Leur
                    rendement est faible, mais le capital est sécurisé.
                  </p>

                  <p>
                    Les sections suivantes, à l'image de celles de la page
                    précédentes sur les types de compte, détaillent les
                    différents types de placements, afin de permettre des
                    décisions éclairées et adaptées à votre situation.
                    Attention, chaque investissement n'est pas disponible dans
                    tous les types de compte, ce sont deux choix distincts à
                    faire.
                  </p>
                </InfoBubble>
              </div>
            </section>

            <section id="financial-markets" className="scroll-mt-22 mb-12">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Marchés financiers
              </h2>

              <div className="space-y-4">
                <InfoBubble
                  icon={<FaChartLine />}
                  title="Actions et assimilés"
                  color="text-blue-400"
                >
                  <p>
                    Les <strong>actions</strong> sont des titres financiers
                    représentant une part du capital d'une entreprise. Détenir
                    une action signifie devenir copropriétaire et bénéficier de
                    droits comme :
                  </p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Droit de vote lors des assemblées générales.</li>
                    <li>
                      Droit de percevoir des dividendes (part des bénéfices).
                    </li>
                    <li>
                      Droit à l’information sur les comptes et la stratégie de
                      l’entreprise.
                    </li>
                  </ul>
                  <p>
                    Les actions dites de préférences peuvent octroyer
                    d'avantages de droits. De plus posséder des actions permet
                    de s'exposer a de potentiels plus-values si le cours de
                    l'action augmente.
                  </p>
                  <p>
                    Il existe les actions cotées et les actions non cotées. Les
                    actions cotées sont négociées sur des marchés boursiers
                    comme Euronext Paris. Elles sont liquides, ce qui permet de
                    les acheter ou de les revendre facilement. Les actions non
                    cotées, émises par des PME ou des TPE, ne sont pas négociées
                    en bourse. Elles sont moins liquides et plus risquées, et
                    leur revente peut être difficile voire impossible. Les
                    actions peuvent être au porteur ou nominatives. Les actions
                    au porteur ne permettent pas d’identifier l’actionnaire
                    auprès de la société, tandis que les actions nominatives
                    identifient l’actionnaire, qui peut bénéficier d’avantages
                    supplémentaires.
                  </p>
                  <h3 className="font-semibold mt-4">Où acheter et vendre ?</h3>
                  <p>
                    Les actions s’échangent sur une{" "}
                    <strong>place de cotation</strong>, principalement en
                    bourse. En France, la plus connue est{" "}
                    <strong>NYSE Euronext Paris</strong>. Il est aussi possible,
                    dans certains cas, de négocier <strong>de gré à gré</strong>{" "}
                    (hors bourse).
                    <p>
                      Pour reconnaitre une action cotée et ainsi pouvoir
                      l'acheter, on se base sur deux éléments principaux : son{" "}
                      <strong>nom</strong>, qui correspond généralement au nom
                      de la société émettrice, et son <strong>ticker</strong>,
                      un code unique utilisé sur les marchés financiers pour
                      identifier l’action. Le ticker facilite la recherche et le
                      suivi de l’action dans les plateformes de trading ou les
                      journaux financiers. Par exemple les actions Christian
                      Dior, LVMH et Total Energies ont pour tickers respectifs :{" "}
                      <strong>CDI</strong>, <strong>MC</strong> et{" "}
                      <strong>TTE</strong>.
                    </p>
                  </p>
                  <h3 className="font-semibold mt-4">
                    Quand passer vos ordres ?
                  </h3>
                  <p>
                    Les ordres sont centralisés sur le système de la bourse. Les
                    actions les plus liquides sont cotées en continu de 9h à
                    17h40. Les autres valeurs sont échangées via des{" "}
                    <strong>fixing</strong> à horaires fixes : 11h30 et 16h30
                    (ou 15h00 pour le marché libre, non réglementé,
                    principalement utilisé par des PME).
                  </p>
                  <h3 className="font-semibold mt-4">
                    Comment acheter ou vendre ?
                  </h3>
                  <p>
                    Les particuliers passent par un intermédiaire financier
                    (courtier, banque, plateforme), via un{" "}
                    <strong>compte-titres</strong> ou un <strong>PEA</strong>.
                    L’intermédiaire transmet l’ordre au marché, avec des
                    services et coûts propres à chaque prestataire.
                  </p>
                  <h3 className="font-semibold mt-4">
                    Intérêts pour les entreprises et risques
                  </h3>
                  <p>
                    Pour l’entreprise, les actionnaires apportent des fonds pour
                    financer la croissance et les investissements.
                  </p>
                  <p>
                    Les risques incluent la perte totale du capital si la
                    société fait faillite, la fluctuation du cours selon les
                    résultats et la politique de dividendes, et des différences
                    de risques selon les sociétés et les périodes. Les actions
                    non cotées présentent un risque de liquidité important.
                  </p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="ETF (Trackers)"
                  color="text-blue-400"
                >
                  <p>
                    Un ETF (Exchange Traded Funds), ou tracker, est un produit
                    financier négocié en Bourse qui réplique la performance d’un
                    indice ou d’un panier d’actions. Il permet d’accéder à un
                    portefeuille diversifié en une seule transaction, comme si
                    vous achetiez toutes les actions de l’indice. Il s'agit d'un
                    type d'ETP (Exchange Traded Products).
                  </p>

                  <p>
                    Les ETF se négocient et s'achètent comme des actions, leur
                    prix varie en continu selon l’offre et la demande. Ils
                    peuvent être standard (suivi passif d’un indice comme le CAC
                    40 par exemple) ou complexes (effet de levier, inverse,
                    matières premières, stratégies sophistiquées). Le prix d’un
                    ETF dépend de sa valeur liquidative, calculée à partir du
                    portefeuille qu’il réplique, et de la valeur de marché, qui
                    fluctue selon l’offre et la demande. Des acteurs comme les
                    émetteurs ou arbitragistes assurent la liquidité et veillent
                    à ce que le prix reste proche de la valeur réelle du panier
                    d’actions.
                  </p>

                  <p>
                    Les noms d’ETF contiennent souvent des informations
                    importantes sur le sous-jacent, la stratégie et la fiscalité
                    du produit. Comprendre ces mots-clés permet de savoir
                    exactement ce que vous achetez.
                  </p>
                  <p>
                    Exemple :{" "}
                    <strong>Amundi MSCI World Swap (Acc) UCITS ETF</strong>
                  </p>

                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <strong>Amundi</strong> : gestionnaire de fonds européen
                      reconnu, spécialisé dans les ETF et autres produits
                      d’investissement, garantissant fiabilité et expertise.
                    </li>
                    <li>
                      <strong>MSCI World</strong> : indique l’indice que l’ETF
                      réplique. Ici, il suit l’indice mondial MSCI World,
                      composé d’actions de pays développés.
                    </li>
                    <li>
                      <strong>Swap</strong> : signifie que l’ETF utilise un
                      mécanisme de réplication synthétique via des swaps pour
                      reproduire la performance de l’indice.
                    </li>
                    <li>
                      <strong>UCITS</strong> : montre que l’ETF respecte la
                      réglementation européenne sur les fonds d’investissement,
                      garantissant un cadre de sécurité et de transparence.
                    </li>
                    <li>
                      <strong>Acc (Accumulation)</strong> : signifie que les
                      dividendes générés par les actions du panier sont
                      réinvestis automatiquement dans l’ETF, au lieu d’être
                      versés aux investisseurs.
                    </li>
                  </ul>

                  <p>
                    D’autres mots-clés courants, <strong>Dist</strong> pour
                    distributif (dividendes versés), <strong>LEVERAGE</strong>{" "}
                    pour ETF à effet de levier, <strong>INVERSE</strong> pour
                    ETF inversé, ou encore la mention d’un secteur ou d’une
                    région spécifique (exemple, Emerging Markets pour les pays
                    émergents). Certains portent également la mention{" "}
                    <strong>ESG</strong> (environnementaux, sociaux et de
                    gouvernance). Sans oublier l'émetteur, qui peut être Amundi,
                    Lyxor, iShares, etc.
                  </p>

                  <p>
                    Les ETF impliquent des frais, principalement des frais de
                    gestion annuels prélevés directement sur le fonds. Ces frais
                    couvrent la gestion, l’administration et les coûts
                    opérationnels du fonds. Les coûts de courtage pour l’achat
                    et la vente sont similaires à ceux des actions et varient
                    selon le courtier. Les ETF complexes, comme ceux à effet de
                    levier, inversés ou sur des matières premières, ont
                    généralement des frais plus élevés en raison de la
                    complexité de leur gestion et des instruments utilisés.
                  </p>

                  <p>
                    Les ETF offrent plusieurs avantages, ils sont simples à
                    acheter et vendre, peu coûteux, transparents et permettent
                    de diversifier facilement un portefeuille. Certains
                    permettent également de se couvrir contre la volatilité ou
                    d’utiliser un effet de levier. Comme tout investissement,
                    ils comportent des risques, la valeur peut fluctuer selon
                    les marchés, certains ETF peuvent manquer de liquidité, leur
                    performance peut légèrement s’écarter de l’indice (tracking
                    error), et l’effet de levier, pour les ETF complexes, peut
                    amplifier les pertes.
                  </p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Fonds d’investissement (OPCVM, SICAV, FCP)"
                  color="text-blue-400"
                >
                  <p>Description à venir</p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaLandmark />}
                  title="Obligations"
                  color="text-blue-400"
                >
                  <p>Description à venir</p>
                </InfoBubble>
              </div>
            </section>

            <section id="complex-products" className="scroll-mt-22 mb-12">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Produits complexes et dérivés
              </h2>
              {/* ETN Certificats _ FOREX*/}
              <div className="space-y-4">
                <InfoBubble
                  icon={<FaCubes />}
                  title="Produits dérivés et à effet de levier"
                  color="text-purple-400"
                >
                  {/* Liste d'exemples de produits dérivés à effet de levier :
                    - Turbos
                    - Warrants
                    - CFD (Contracts for Difference)
                    - Options et futures
                  */}
                  <p>Description à venir</p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaCubes />}
                  title="Produits structurés"
                  color="text-purple-400"
                >
                  <p>Description à venir</p>
                </InfoBubble>
              </div>
            </section>

            <section id="real-estate" className="scroll-mt-22 mb-12">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Immobilier
              </h2>

              <div className="space-y-4">
                <InfoBubble
                  icon={<FaHome />}
                  title="Immobilier direct"
                  color="text-green-400"
                >
                  <p>Description à venir</p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaHome />}
                  title="Immobilier collectif (SCPI, OPCI, REIT)"
                  color="text-green-400"
                >
                  <p>Description à venir</p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaHome />}
                  title="Crowdfunding immobilier"
                  color="text-green-400"
                >
                  <p>Description à venir</p>
                </InfoBubble>
              </div>
            </section>

            <section id="alternatives" className="scroll-mt-22 mb-12">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Placements alternatifs
              </h2>

              <div className="space-y-4">
                <InfoBubble
                  icon={<FaGem />}
                  title="Matières premières et métaux précieux"
                  color="text-yellow-400"
                >
                  {/* ETC */}
                  <p>Description à venir</p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaCube />}
                  title="Cryptoactifs et Web3"
                  color="text-yellow-400"
                >
                  {/*ETN*/}

                  <p>Description à venir</p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaCube />}
                  title="Private Equity"
                  color="text-yellow-400"
                >
                  <p>Description à venir</p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaCube />}
                  title="Hedge Funds"
                  color="text-yellow-400"
                >
                  <p>Description à venir</p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaGem />}
                  title="Placements atypiques (art, vin, montres...)"
                  color="text-yellow-400"
                >
                  <p>Description à venir</p>
                </InfoBubble>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Investments;
