import React from "react";
import {
  FaBitcoin,
  FaLock,
  FaGlobeAmericas,
  FaHammer,
  FaCoins,
} from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";

const Cryptos: React.FC = () => {
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

        <div className="max-w-6xl mx-auto px-2 md:px-4 py-6 space-y-4 md:mb-0 mb-24">
          <section id="what-are-cryptos" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Qu’est-ce qu’une crypto ?
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaBitcoin />}
                title="Définition d’une crypto-monnaie"
                color="text-blue-400"
              >
                <p className="leading-relaxed">
                  Une crypto-monnaie est une monnaie numérique basée sur la
                  technologie blockchain. Elle permet des transactions
                  sécurisées et décentralisées sans intermédiaire bancaire.
                </p>
                <p className="leading-relaxed">
                  Exemple : Bitcoin, Ethereum, Solana…
                </p>
              </InfoBubble>
            </div>
          </section>

          <section id="top-cryptos" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Les principales cryptos
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaCoins />}
                title="Bitcoin & altcoins"
                color="text-green-400"
              >
                <p className="leading-relaxed">
                  <strong>Bitcoin (BTC)</strong> : première crypto,
                  principalement utilisée comme réserve de valeur.
                </p>
                <p className="leading-relaxed">
                  <strong>Ethereum (ETH)</strong> : permet la création de
                  contrats intelligents et applications décentralisées (dApps).
                </p>
                <p className="leading-relaxed">
                  D’autres altcoins existent avec des fonctionnalités variées :
                  Solana, Cardano, Binance Coin…
                </p>
              </InfoBubble>
            </div>
          </section>

          <section id="buy-store-secure" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Acheter, stocker et sécuriser
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaGlobeAmericas />}
                title="Plateformes d’achat"
                color="text-purple-400"
              >
                <p className="leading-relaxed">
                  Les cryptos s’achètent sur des plateformes d’échange (ex :
                  Binance, Coinbase, Kraken). Il est important de comparer les
                  frais et la sécurité.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaLock />}
                title="Sécurisation"
                color="text-purple-400"
              >
                <p className="leading-relaxed">
                  Les cryptos doivent être stockées dans des portefeuilles
                  sécurisés. Les wallets peuvent être :
                </p>
                <ul className="list-disc list-inside leading-relaxed">
                  <li>
                    Hot wallet : connecté à Internet, pratique mais moins sûr
                  </li>
                  <li>
                    Cold wallet : hors ligne, très sécurisé pour stocker sur le
                    long terme
                  </li>
                </ul>
              </InfoBubble>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Cryptos;
