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
            <section id="financial-markets" className="scroll-mt-22 mb-12">
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
                  {/* SRD */}
                  <p>Description à venir</p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="ETF (Trackers)"
                  color="text-blue-400"
                >
                  <p>Description à venir</p>
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
              {/* ETN Certificats*/}
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
                  {/*ETP*/}

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
