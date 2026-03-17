import React from "react";
import {
  FaBitcoin,
  FaLock,
  FaGlobeAmericas,
  FaCoins,
  FaChartLine,
  FaBalanceScale,
  FaExchangeAlt,
  FaUniversity,
  FaShieldAlt,
  FaKey,
} from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";
import Term from "../components/Term";

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
          <section id="what-are-cryptos" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Introduction aux cryptomonnaies
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaBitcoin />}
                title="Qu’est-ce qu’une crypto-monnaie ?"
                color="text-blue-400"
              >
                <p className="leading-relaxed mb-3">
                  Une crypto-monnaie est une monnaie numérique utilisant la
                  technologie de la <Term id="blockchain" />. Elle permet des
                  transactions sécurisées et <Term id="decentralized" /> sans
                  passer par une banque.
                </p>

                <p className="leading-relaxed mb-3">
                  Exemple : Bitcoin, Ethereum, Solana… Chaque crypto a ses
                  caractéristiques, sa technologie et son utilité.
                </p>

                <p className="leading-relaxed mb-3">
                  La <Term id="blockchain" /> fonctionne comme un livre ouvert,
                  toutes les transactions sont enregistrées de façon
                  chronologique et visible par tous. Chaque participant peut
                  vérifier ce qui se passe, et personne ne peut modifier
                  l’historique sans l’accord du réseau.
                </p>

                <p className="leading-relaxed mb-3">
                  Cette transparence permet de créer de la confiance sans
                  intermédiaire centralisé. À l’origine, l’idée était de donner
                  aux individus le contrôle de leur argent et de proposer un
                  système financier plus libre et ouvert, indépendant des
                  banques et des États.
                </p>

                <p className="leading-relaxed mb-3">
                  Les cryptos offrent ainsi plusieurs avantages : transactions
                  rapides, internationalisation des paiements, protection contre
                  certaines censures, et possibilité de nouveaux modèles
                  économiques (applications <Term id="decentralized" />,
                  contrats intelligents…).
                </p>

                <p className="leading-relaxed mb-3">
                  Cependant, des dérives existent : forte volatilité, arnaques,
                  perte de clés privées, utilisation pour des activités
                  illégales, et parfois consommation énergétique élevée selon
                  les mécanismes de validation.
                </p>

                <p className="leading-relaxed">
                  Les cryptos restent un domaine en construction, mêlant
                  innovation et expérimentation, avec un potentiel considérable
                  mais des risques importants. Comprendre la{" "}
                  <Term id="blockchain" /> et sa vision originelle est essentiel
                  pour se lancer en toute connaissance.
                </p>
              </InfoBubble>
            </div>
          </section>

          <section id="different-cryptos" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Les différents types de cryptomonnaies et leur vision d’origine
            </h2>

            <div className="space-y-4">
              <InfoBubble
                icon={<FaCoins />}
                title="Cryptos de paiement / réserve de valeur"
                color="text-yellow-400"
              >
                <p className="leading-relaxed mb-2">
                  Conçues pour servir d’argent numérique : transférer de la
                  valeur sans banque et, dans certains cas, protéger contre
                  l’inflation.
                </p>

                <p className="leading-relaxed mb-2">
                  <strong>Bitcoin (BTC)</strong> : première crypto, offre
                  limitée à 21 millions d’unités. Souvent utilisée comme réserve
                  de valeur (« or numérique ») et pour des paiements
                  internationaux.
                </p>

                <p className="leading-relaxed">
                  <strong>Litecoin (LTC)</strong> : inspiré du Bitcoin mais avec
                  des transactions plus rapides et des frais plus faibles.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaGlobeAmericas />}
                title="Plateformes de smart contracts"
                color="text-blue-400"
              >
                <p className="leading-relaxed mb-2">
                  Ces blockchains permettent de créer des applications
                  décentralisées : <Term id="defi" />, jeux, <Term id="nft" />,
                  réseaux sociaux, etc.
                </p>

                <p className="leading-relaxed mb-2">
                  <strong>Ethereum (ETH)</strong> : pionnier des smart
                  contracts, base de la majorité de la <Term id="defi" /> et des{" "}
                  <Term id="nft" />.
                </p>

                <p className="leading-relaxed mb-2">
                  <strong>Solana (SOL)</strong> : blockchain très rapide et peu
                  coûteuse, adaptée aux applications à grande échelle.
                </p>

                <p className="leading-relaxed mb-2">
                  <strong>Cardano (ADA)</strong> : met l’accent sur la sécurité
                  et la recherche scientifique.
                </p>

                <p className="leading-relaxed">
                  <strong>Avalanche (AVAX)</strong> : transactions rapides et
                  finalité quasi instantanée, orientée finance décentralisée.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaExchangeAlt />}
                title="Tokens d’exchange"
                color="text-orange-400"
              >
                <p className="leading-relaxed mb-2">
                  Créés par des plateformes d’échange pour offrir des avantages
                  internes : réduction de frais, <Term id="staking" /> ou accès
                  à certains services.
                </p>

                <p className="leading-relaxed">
                  <strong>BNB</strong> : utilisé sur Binance pour payer les
                  frais, participer à des projets et alimenter la BNB Chain.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaBalanceScale />}
                title="Stablecoins"
                color="text-green-400"
              >
                <p className="leading-relaxed mb-2">
                  Cryptos conçues pour garder une valeur stable, généralement
                  indexée sur une monnaie réelle comme le dollar. Très utilisées
                  pour le trading et les transferts.
                </p>

                <p className="leading-relaxed mb-2">
                  <strong>USDT (Tether)</strong> : le plus utilisé au monde.
                </p>

                <p className="leading-relaxed">
                  <strong>USDC</strong> : stablecoin émis par des institutions
                  financières, réputé plus transparent.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaLock />}
                title="Cryptos axées sur la confidentialité"
                color="text-purple-400"
              >
                <p className="leading-relaxed mb-2">
                  Conçues pour masquer l’identité des utilisateurs et rendre les
                  transactions difficiles à tracer.
                </p>

                <p className="leading-relaxed">
                  <strong>Monero (XMR)</strong> : référence en matière de
                  confidentialité grâce à des techniques cryptographiques
                  avancées.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaChartLine />}
                title="Tokens utilitaires (DeFi / services)"
                color="text-cyan-400"
              >
                <p className="leading-relaxed mb-2">
                  Servent à alimenter des services spécifiques sur la blockchain
                  : finance <Term id="decentralized" />, gouvernance ou données
                  externes.
                </p>

                <p className="leading-relaxed mb-2">
                  <strong>Chainlink (LINK)</strong> : fournit aux smart
                  contracts des données du monde réel (prix, météo, etc.).
                </p>

                <p className="leading-relaxed">
                  <strong>Uniswap (UNI)</strong> : token de gouvernance d’un
                  échange <Term id="decentralized" /> sans intermédiaire.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaUniversity />}
                title="Cryptos d’infrastructure financière"
                color="text-pink-400"
              >
                <p className="leading-relaxed mb-2">
                  Axées sur les paiements rapides entre institutions financières
                  et l’intégration avec le système bancaire.
                </p>

                <p className="leading-relaxed">
                  <strong>XRP</strong> : conçu pour faciliter les transferts
                  internationaux rapides et peu coûteux entre banques.
                </p>
              </InfoBubble>
            </div>
          </section>

          <section id="buy-store-secure" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Stocker et sécuriser ses cryptomonnaies
            </h2>

            <div className="space-y-4">
              <InfoBubble
                icon={<FaGlobeAmericas />}
                title="Hot wallets (portefeuilles en ligne)"
                color="text-purple-400"
              >
                <p className="leading-relaxed mb-2">
                  Les hot wallets sont connectés à Internet. Ils permettent
                  d’acheter, vendre et utiliser ses cryptos facilement, mais
                  sont plus exposés aux piratages.
                </p>

                <p className="leading-relaxed mb-2">Exemples :</p>

                <ul className="list-disc list-inside leading-relaxed mb-2">
                  <li>
                    Comptes sur des plateformes d’échange (Binance, Coinbase,
                    Kraken)
                  </li>
                  <li>
                    Applications mobiles ou extensions (MetaMask, Trust Wallet)
                  </li>
                </ul>

                <p className="leading-relaxed">
                  Ces solutions sont pratiques pour débuter ou pour le trading,
                  mais il est déconseillé d’y stocker de grosses sommes sur le
                  long terme.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaLock />}
                title="Cold wallets (portefeuilles hors ligne)"
                color="text-blue-400"
              >
                <p className="leading-relaxed mb-2">
                  Les cold wallets stockent vos clés privées hors ligne, sans
                  connexion permanente à Internet. Ils sont considérés comme la
                  solution la plus sûre pour conserver des cryptos sur le long
                  terme.
                </p>

                <p className="leading-relaxed mb-2">
                  Il s’agit généralement d’appareils physiques appelés hardware
                  wallets (par exemple Ledger ou Trezor).
                </p>

                <p className="leading-relaxed">
                  Même si votre ordinateur est compromis, un attaquant ne peut
                  pas accéder directement à vos fonds sans posséder l’appareil.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaKey />}
                title="Clé privée et phrase de récupération"
                color="text-yellow-400"
              >
                <p className="leading-relaxed mb-2">
                  Les cryptomonnaies ne sont pas stockées dans le wallet
                  lui-même. Elles existent sur la <Term id="blockchain" />. Le
                  portefeuille contient les clés permettant d’y accéder.
                </p>

                <p className="leading-relaxed mb-2">
                  • <strong>Clé privée</strong> : code secret donnant un
                  contrôle total sur vos fonds
                </p>

                <p className="leading-relaxed mb-2">
                  • <strong>Phrase de récupération (seed phrase)</strong> :
                  série de 12 ou 24 mots permettant de restaurer votre wallet
                </p>

                <p className="leading-relaxed">
                  Toute personne possédant cette phrase peut transférer vos
                  cryptos. Elle doit être conservée hors ligne et en lieu sûr.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaShieldAlt />}
                title="Risques et bonnes pratiques"
                color="text-red-400"
              >
                <p className="leading-relaxed mb-2">
                  Le secteur crypto est régulièrement ciblé par des piratages,
                  arnaques et faux sites imitant des plateformes officielles.
                </p>

                <p className="leading-relaxed mb-2">
                  Des plateformes ont déjà été compromises par le passé,
                  entraînant la perte de fonds pour de nombreux utilisateurs.
                </p>

                <ul className="list-disc list-inside leading-relaxed mb-2">
                  <li>Activer l’authentification à deux facteurs (2FA)</li>
                  <li>Vérifier l’adresse des sites pour éviter le phishing</li>
                  <li>Ne jamais partager sa clé privée ou sa seed phrase</li>
                  <li>Utiliser un cold wallet pour les montants importants</li>
                </ul>

                <p className="leading-relaxed">
                  En crypto, il n’existe généralement aucun recours en cas de
                  vol : la sécurité dépend entièrement de l’utilisateur.
                </p>
              </InfoBubble>
            </div>
          </section>

          <section id="learn-more" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Pour approfondir
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaChartLine />}
                title="Détails et conseils pour se lancer"
                color="text-yellow-400"
              >
                <p className="leading-relaxed mb-3">
                  Cette page présente les bases des cryptomonnaies. Pour se
                  lancer sereinement, il est recommandé de se former,
                  d’expérimenter sur des comptes démo et de suivre l’actualité
                  des marchés.
                </p>
                <p className="leading-relaxed">
                  Ne considérez jamais les cryptos comme un moyen rapide de
                  s’enrichir. Discipline, patience et gestion du risque sont
                  essentiels.
                </p>
              </InfoBubble>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Cryptos;
