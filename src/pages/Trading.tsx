import React from "react";
import {
  FaChartLine,
  FaGlobeAmericas,
  FaExchangeAlt,
  FaChartBar,
  FaHammer,
} from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";

const Trading: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="flex h-screen text-gray-300 bg-[#12121b]">
      <main
        className={`flex-1 overflow-auto pt-16 md:mt-16 md:pt-0 transition-all duration-300 ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-6 space-y-4 md:mb-0 mb-24">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            En cours de conception
          </h2>
          <div className="space-y-4"></div>
          <InfoBubble
            icon={<FaHammer />}
            title="Work in Progress"
            color="text-orange-400"
          >
            <p className="leading-relaxed">
              Cette page est actuellement <strong>en construction</strong>.
            </p>
          </InfoBubble>
        </div>
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-6 md:mb-0 mb-24">
          <section id="trading-intro" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Qu’est-ce que le trading ?
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaChartLine />}
                title="Introduction au trading"
                color="text-blue-400"
              >
                <p className="leading-relaxed">
                  Le trading consiste à acheter et vendre des actifs financiers
                  (actions, devises, matières premières…) dans le but de générer
                  un profit à court ou moyen terme.
                </p>
                <p className="leading-relaxed">
                  Contrairement à l’investissement à long terme, le trading
                  repose sur l’analyse des mouvements du marché et des prix.
                </p>
              </InfoBubble>
            </div>
          </section>

          <section id="markets-platforms" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Marchés & plateformes
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaGlobeAmericas />}
                title="Les marchés financiers"
                color="text-green-400"
              >
                <p className="leading-relaxed">
                  Les traders opèrent sur différents marchés : actions, forex,
                  crypto-monnaies, matières premières… Chaque marché a ses
                  spécificités et horaires de trading.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaExchangeAlt />}
                title="Plateformes de trading"
                color="text-green-400"
              >
                <p className="leading-relaxed">
                  Les plateformes permettent de passer des ordres et suivre les
                  marchés en temps réel. Elles offrent des outils graphiques et
                  indicateurs pour aider à la prise de décision.
                </p>
                <p className="leading-relaxed">
                  Exemple : MetaTrader, TradingView, Binance, Interactive
                  Brokers.
                </p>
              </InfoBubble>
            </div>
          </section>

          <section id="trading-types" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Les types de trading
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaChartLine />}
                title="Day Trading"
                color="text-purple-400"
              >
                <p className="leading-relaxed">
                  Achat et vente d’actifs sur une seule journée. Les positions
                  sont clôturées avant la fin de la séance pour profiter des
                  fluctuations intrajournalières.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaExchangeAlt />}
                title="Swing Trading"
                color="text-purple-400"
              >
                <p className="leading-relaxed">
                  Maintien des positions plusieurs jours à semaines pour
                  profiter des tendances à court et moyen terme du marché.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaChartBar />}
                title="Scalping"
                color="text-purple-400"
              >
                <p className="leading-relaxed">
                  Stratégie très courte durée : ouvrir et fermer rapidement des
                  positions pour capturer de petits mouvements de prix, souvent
                  avec effet de levier.
                </p>
              </InfoBubble>
            </div>
          </section>

          <section id="long-short" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Positions Long / Short
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaExchangeAlt />}
                title="Position Long"
                color="text-pink-400"
              >
                <p className="leading-relaxed">
                  Acheter un actif dans l’espoir que son prix augmente. Le
                  profit est réalisé lors de la revente à un prix supérieur.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaExchangeAlt />}
                title="Position Short"
                color="text-pink-400"
              >
                <p className="leading-relaxed">
                  Vendre un actif emprunté dans l’espoir que son prix baisse,
                  puis le racheter moins cher pour rembourser l’emprunt. La
                  différence constitue le profit.
                </p>
              </InfoBubble>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Trading;
