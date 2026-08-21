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
  FaCut,
  FaChartPie,
  FaFileContract,
  FaFaucet,
  FaGraduationCap,
  FaGamepad,
  FaParachuteBox,
  FaLayerGroup,
  FaMicrochip,
} from "react-icons/fa";
import InfoBubble from "../components/ui/InfoBubble";
import PageLayout from "../components/layout/PageLayout";
import Container from "../components/ui/Container";
import Term from "../components/ui/Term";
import Disclaimer from "../components/ui/Disclaimer";
import ExampleBox from "../components/ui/ExampleBox";

const Cryptos: React.FC = () => {
  return (
    <PageLayout
      title="Les cryptomonnaies"
      description="Qu'est-ce qu'une cryptomonnaie, les différentes cryptos, et comment les acheter, stocker et sécuriser."
    >
      <Container gap="sm">
        <Disclaimer title="Actifs à très haut risque">
          Les cryptomonnaies sont des actifs extrêmement volatils. Leur valeur
          peut chuter de 50 % ou plus en quelques semaines. Cette section est
          informative et ne constitue pas un conseil d'investissement. Investir
          en crypto comporte un risque de perte totale du capital. Tous les
          projets, tokens, plateformes ou services cités sur cette page le sont{" "}
          <strong>à titre d'exemple indicatif uniquement</strong>, je ne fais la
          promotion d'aucun actif, service ou cryptomonnaie en particulier.
          Chacun d'eux reste à très haut risque et nécessite{" "}
          <strong>beaucoup de recherches personnelles</strong> avant de s'y
          intéresser.
        </Disclaimer>
        <section id="quest-ce-quune-crypto" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Qu'est-ce qu'une crypto-monnaie ?
          </h2>
          <div className="space-y-4">
            <InfoBubble
              icon={<FaBitcoin />}
              title="Introduction aux cryptomonnaies"
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
                toutes les transactions sont enregistrées de façon chronologique
                et visible par tous. Chaque participant peut vérifier ce qui se
                passe, et personne ne peut modifier l'historique sans l'accord
                du réseau.
              </p>

              <p className="leading-relaxed mb-3">
                Cette transparence permet de créer de la confiance sans
                intermédiaire centralisé. À l'origine, l'idée était de donner
                aux individus le contrôle de leur argent et de proposer un
                système financier plus libre et ouvert, indépendant des banques
                et des États.
              </p>

              <p className="leading-relaxed mb-3">
                Les cryptos offrent ainsi plusieurs avantages, des transactions
                rapides, l'internationalisation des paiements, la protection
                contre certaines censures et la possibilité de nouveaux modèles
                économiques et autres applications financières.
              </p>

              <p className="leading-relaxed mb-3">
                Cependant, des dérives existent incluant une forte volatilité,
                des arnaques, la perte de clés privées, l'utilisation pour des
                activités illégales, et parfois une consommation énergétique
                élevée selon les mécanismes de validation.
              </p>

              <p className="leading-relaxed">
                Les cryptos restent un domaine en construction, mêlant
                innovation et expérimentation, avec un potentiel considérable
                mais des risques importants. Comprendre la{" "}
                <Term id="blockchain" /> et sa vision originelle est essentiel
                pour se lancer en toute connaissance.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaMicrochip />}
              title="Le minage, comment les transactions sont validées"
              color="text-orange-400"
            >
              <p className="leading-relaxed mb-3">
                Le <strong>minage</strong> est le mécanisme par lequel des
                ordinateurs (les "mineurs") vérifient et regroupent les
                transactions en blocs, avant de les ajouter à la{" "}
                <Term id="blockchain" />. C'est ce qui sécurise le réseau et
                empêche qu'une même somme soit dépensée deux fois.
              </p>

              <p className="leading-relaxed mb-3">
                Sur Bitcoin, ce mécanisme s'appelle la{" "}
                <strong>preuve de travail</strong> (proof-of-work). Les mineurs
                font tourner du matériel spécialisé (des puces{" "}
                <strong>ASIC</strong>) pour résoudre en premier un calcul
                cryptographique très coûteux en énergie mais facile à vérifier.
                Le premier à trouver la solution ajoute le bloc et reçoit en
                récompense des nouveaux bitcoins ainsi que les frais de
                transaction du bloc.
              </p>

              <p className="leading-relaxed mb-3">
                Comme la puissance de calcul totale du réseau varie dans le
                temps, la <strong>difficulté</strong> du calcul s'ajuste
                automatiquement pour qu'un nouveau bloc soit trouvé environ
                toutes les 10 minutes. Miner seul dans son coin est aujourd'hui
                illusoire face aux acteurs industriels, la plupart des mineurs
                individuels rejoignent des <strong>pools de minage</strong>, qui
                mutualisent la puissance de calcul et redistribuent les
                récompenses au prorata de la contribution de chacun.
              </p>

              <p className="leading-relaxed mb-3">
                Ce système consomme énormément d'électricité à l'échelle
                mondiale, ce qui a poussé de nombreuses blockchains (dont
                Ethereum depuis 2022) à abandonner le minage au profit de la{" "}
                <strong>preuve d'enjeu</strong> (proof-of-stake), où ce sont des
                cryptos bloquées via le <Term id="staking" /> qui sécurisent le
                réseau, sans matériel de calcul dédié.
              </p>

              <p className="leading-relaxed">
                Il existe aussi des plateformes de "minage" accessibles sans
                matériel, sous forme de contrats de{" "}
                <strong>cloud mining</strong> ou de NFT représentant une part de
                puissance de calcul. Ces offres restent à examiner avec la plus
                grande prudence. La rentabilité dépend du cours du Bitcoin, il
                existe un risque de contrepartie si l'opérateur n'est pas
                fiable, et de nombreuses arnaques du même type existent dans le
                secteur.
              </p>
            </InfoBubble>
          </div>
        </section>

        <section
          id="halving-tokenomics-smart-contracts"
          className="scroll-mt-22 mb-12"
        >
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Halving, tokenomics et smart contracts, comprendre l'économie d'une
            crypto
          </h2>

          <div className="space-y-4">
            <InfoBubble
              icon={<FaCut />}
              title="Le halving, une rareté programmée"
              color="text-red-400"
            >
              <p className="leading-relaxed mb-3">
                Le <strong>halving</strong> est un événement inscrit dans le
                code de certaines blockchains, qui divise par deux la récompense
                versée aux mineurs pour chaque nouveau bloc validé. Sur Bitcoin,
                cela survient tous les <strong>210 000 blocs</strong>, soit
                environ tous les <strong>4 ans</strong>, et ce jusqu'à
                l'épuisement des 21 millions de BTC (vers 2140).
              </p>

              <p className="leading-relaxed mb-3">
                En divisant le rythme de création de nouvelles unités, le
                halving réduit mécaniquement l'inflation de l'offre. C'est un
                évènement surveillé par le marché car il modifie l'équilibre
                offre/demande, sans pour autant garantir une hausse du prix.
              </p>

              <ExampleBox>
                <ul className="space-y-1">
                  <li>2009, 50 BTC par bloc (lancement)</li>
                  <li>2012, 25 BTC par bloc</li>
                  <li>2016, 12,5 BTC par bloc</li>
                  <li>2020, 6,25 BTC par bloc</li>
                  <li>2024, 3,125 BTC par bloc (halving le plus récent)</li>
                  <li>~2028, 1,5625 BTC par bloc (prochain halving estimé)</li>
                </ul>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaChartPie />}
              title="La tokenomics, l'économie d'un token"
              color="text-emerald-400"
            >
              <p className="leading-relaxed mb-3">
                La <strong>tokenomics</strong> désigne l'ensemble des règles
                économiques qui régissent un token, son offre (totale, max, en
                circulation), sa répartition (équipe, investisseurs, communauté,
                trésorerie), son calendrier de déblocage (vesting), et son
                utilité réelle (paiement, gouvernance, accès à un service).
              </p>

              <p className="leading-relaxed mb-3">
                Un token peut être <strong>inflationniste</strong> (de nouveaux
                tokens sont créés en continu, ce qui dilue les détenteurs) ou{" "}
                <strong>déflationniste</strong> (une partie de l'offre est
                régulièrement détruite, ou "brûlée", ce qui la réduit dans le
                temps). Avant d'investir dans un projet, lire sa tokenomics
                permet de repérer les signaux d'alerte, une part trop importante
                réservée à l'équipe, un vesting trop court qui autorise des
                ventes massives rapides, ou une utilité du token très floue.
              </p>

              <ExampleBox>
                <p className="mb-2">
                  GoMining est une plateforme de minage de Bitcoin sous forme de
                  NFT, avec son propre token <strong>GOMINING</strong>, dont
                  l'offre initiale était d'environ 437 millions d'unités.
                </p>
                <p className="mb-2">
                  Son fonctionnement repose sur un mécanisme{" "}
                  <strong>déflationniste</strong> de "burn and mint", chaque
                  semaine, les frais de maintenance payés en token par les
                  détenteurs de NFT "Digital Miners" sont brûlés, puis une
                  partie seulement est réémise, ce qui fait diminuer l'offre
                  totale au fil du temps.
                </p>
                <p>
                  La gouvernance passe par <strong>veGOMINING</strong>, un
                  système de vote, en verrouillant ses tokens pour une durée de
                  une semaine à quatre ans, un détenteur obtient un pouvoir de
                  vote proportionnel à la quantité et à la durée du
                  verrouillage. Chaque semaine, ces votants décident
                  collectivement de l'intensité du burn, voter OUI accélère la
                  réduction de l'offre tandis que voter NON favorise une
                  redistribution plus généreuse vers la communauté, et 20% des
                  tokens réémis à chaque cycle leur sont reversés au prorata de
                  leur pouvoir de vote.
                </p>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaFileContract />}
              title="Les smart contracts"
              color="text-blue-400"
            >
              <p className="leading-relaxed mb-3">
                Un <strong>smart contract</strong> est un programme
                auto-exécutable déployé sur une blockchain. Il applique
                automatiquement des règles prédéfinies (par exemple, "si X paie
                Y, alors transférer le NFT Z") sans intermédiaire humain ni
                serveur central.
              </p>

              <p className="leading-relaxed mb-3">
                C'est la brique technique qui rend possibles la{" "}
                <Term id="DeFi" />, les <Term id="NFT" /> et les{" "}
                <Term id="DAO" />. Une fois déployé, son code est en général
                immuable, il est impossible de le corriger discrètement en cas
                de faille. C'est pourquoi les projets sérieux font auditer leurs
                smart contracts par des sociétés spécialisées avant leur mise en
                production, un piratage de smart contract mal sécurisé pouvant
                entraîner une perte totale et irréversible des fonds qui y sont
                engagés.
              </p>
            </InfoBubble>
          </div>
        </section>

        <section id="gagner-des-cryptos" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Faucet, learn-to-earn, play-to-earn, airdrop et staking, gagner des
            cryptos autrement
          </h2>

          <div className="space-y-4">
            <InfoBubble
              icon={<FaFaucet />}
              title="Les faucets"
              color="text-cyan-400"
            >
              <p className="leading-relaxed mb-3">
                Un <strong>faucet</strong> est un site ou une application qui
                distribue de très petites quantités de cryptos gratuitement,
                généralement financé par de la publicité. C'est historiquement
                l'un des tout premiers moyens de découvrir Bitcoin.
              </p>
              <p className="leading-relaxed">
                En pratique, les montants sont dérisoires et le temps passé est
                rarement rentable. Certains "faucets" ne servent qu'à collecter
                des données personnelles ou générer des clics publicitaires, à
                réserver à la découverte plutôt qu'à un objectif de revenu.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaGraduationCap />}
              title="Le learn-to-earn"
              color="text-yellow-400"
            >
              <p className="leading-relaxed mb-3">
                Le <strong>learn-to-earn</strong> consiste, pour des plateformes
                comme les exchanges, à proposer de courtes vidéos ou des quiz
                sur un projet crypto en échange d'une petite quantité de son
                token.
              </p>
              <p className="leading-relaxed">
                C'est un bon moyen de se former gratuitement tout en touchant
                quelques euros, mais gardez en tête que c'est avant tout un
                outil marketing pour le projet concerné, la petite récompense ne
                doit jamais influencer votre jugement sur la qualité du projet.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaGamepad />}
              title="Le play-to-earn (P2E)"
              color="text-pink-400"
            >
              <p className="leading-relaxed mb-3">
                Le <strong>play-to-earn (P2E)</strong> désigne des jeux vidéo
                utilisant la blockchain, où jouer permet de gagner des tokens ou
                des NFT ayant une valeur d'échange réelle.
              </p>
              <p className="leading-relaxed">
                Attention au piège, l'économie de ces jeux dépend souvent de
                l'arrivée constante de nouveaux joueurs pour financer les gains
                des précédents, une dynamique proche d'un système pyramidal
                quand elle est mal conçue. De nombreux tokens P2E se sont
                effondrés une fois l'afflux de nouveaux joueurs ralenti.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaParachuteBox />}
              title="Les airdrops"
              color="text-purple-400"
            >
              <p className="leading-relaxed mb-3">
                Un <strong>airdrop</strong> est une distribution gratuite de
                tokens à des portefeuilles remplissant certains critères (avoir
                utilisé un protocole, détenu un autre token, participé à un
                testnet...). Les projets s'en servent pour récompenser leurs
                premiers utilisateurs et décentraliser leur token dès son
                lancement.
              </p>
              <p className="leading-relaxed">
                Attention aux faux airdrops, ne connectez jamais votre wallet à
                un site inconnu et ne signez jamais une transaction dont vous ne
                comprenez pas le contenu pour "réclamer" un airdrop, c'est l'une
                des arnaques les plus répandues du secteur.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaLayerGroup />}
              title="Le staking"
              color="text-green-400"
            >
              <p className="leading-relaxed mb-3">
                Le <Term id="staking" /> consiste à verrouiller ses cryptos pour
                participer à la sécurisation d'une blockchain (preuve d'enjeu)
                ou d'un protocole, en échange d'une récompense. C'est
                aujourd'hui l'un des moyens les plus courants de faire
                fructifier des cryptos que l'on compte conserver.
              </p>
              <p className="leading-relaxed mb-3">
                Le rendement dépend souvent de la durée de blocage choisie (plus
                l'engagement est long, plus la récompense est élevée), avec en
                contrepartie un risque de blocage des fonds en cas de besoin de
                liquidités.
              </p>
              <ExampleBox>
                <p className="mb-2">
                  Ethereum fonctionne en preuve d'enjeu depuis 2022. Pour faire
                  tourner soi-même un validateur qui sécurise le réseau, il faut
                  immobiliser 32 ETH, en échange de quoi le réseau verse une
                  récompense de l'ordre de 2,5 à 3 % par an, à laquelle
                  s'ajoutent des frais de transaction et des revenus
                  supplémentaires qui portent le rendement total autour de 3 à 4
                  % par an.
                </p>
                <p>
                  Ceux qui n'ont pas 32 ETH sous la main peuvent passer par du{" "}
                  <strong>staking liquide</strong> (des plateformes qui
                  mutualisent les fonds de nombreux utilisateurs et
                  redistribuent la récompense au prorata, en échange d'un token
                  représentatif) ou par le staking proposé directement par une
                  plateforme. Ces chiffres évoluent avec le temps et le marché,
                  vérifiez toujours les conditions à jour avant d'y engager des
                  fonds.
                </p>
              </ExampleBox>
            </InfoBubble>
          </div>
        </section>

        <section id="differentes-cryptos" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Les différents types de cryptomonnaies et leur vision d'origine
          </h2>

          <div className="space-y-4">
            <InfoBubble
              icon={<FaCoins />}
              title="Cryptos de paiement / réserve de valeur"
              color="text-yellow-400"
            >
              <p className="leading-relaxed mb-2">
                Conçues pour servir d'argent numérique, transférer de la valeur
                sans banque et, dans certains cas, protéger contre l'inflation.
              </p>

              <p className="leading-relaxed mb-2">
                <strong>Bitcoin (BTC)</strong> : première crypto, offre limitée
                à 21 millions d'unités. Souvent utilisée comme réserve de valeur
                ("or numérique") et pour des paiements internationaux.
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
                décentralisées : <Term id="DeFi" />, jeux, <Term id="NFT" />,
                réseaux sociaux, etc.
              </p>

              <p className="leading-relaxed mb-2">
                <strong>Ethereum (ETH)</strong> : pionnier des smart contracts,
                base de la majorité de la <Term id="DeFi" /> et des{" "}
                <Term id="NFT" />.
              </p>

              <p className="leading-relaxed mb-2">
                <strong>Solana (SOL)</strong> : blockchain très rapide et peu
                coûteuse, adaptée aux applications à grande échelle.
              </p>

              <p className="leading-relaxed mb-2">
                <strong>Cardano (ADA)</strong> : met l'accent sur la sécurité et
                la recherche scientifique.
              </p>

              <p className="leading-relaxed">
                <strong>Avalanche (AVAX)</strong> : transactions rapides et
                finalité quasi instantanée, orientée finance décentralisée.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaExchangeAlt />}
              title="Tokens d'exchange"
              color="text-orange-400"
            >
              <p className="leading-relaxed mb-2">
                Créés par des plateformes d'échange pour offrir des avantages
                internes, réduction de frais, <Term id="staking" /> ou accès à
                certains services.
              </p>

              <p className="leading-relaxed mb-2">
                <strong>BNB</strong> : utilisé sur Binance pour payer les frais,
                participer à des projets et alimenter la BNB Chain.
              </p>

              <p className="leading-relaxed">
                <strong>GoMining (GOMINING)</strong> : token d'une plateforme de
                minage de Bitcoin sous forme de NFT, utilisé pour payer, avec
                une réduction, les frais internes (électricité,
                achat/amélioration des NFT). Il est également utilisé pour le
                staking et la gouvernance de la plateforme.
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
                Conçues pour masquer l'identité des utilisateurs et rendre les
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
                Servent à alimenter des services spécifiques sur la blockchain :
                finance <Term id="decentralized" />, gouvernance ou données
                externes.
              </p>

              <p className="leading-relaxed mb-2">
                <strong>Chainlink (LINK)</strong> : fournit aux smart contracts
                des données du monde réel (prix, météo, etc.).
              </p>

              <p className="leading-relaxed">
                <strong>Uniswap (UNI)</strong> : token de gouvernance d'un
                échange <Term id="decentralized" /> sans intermédiaire.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaUniversity />}
              title="Cryptos d'infrastructure financière"
              color="text-pink-400"
            >
              <p className="leading-relaxed mb-2">
                Axées sur les paiements rapides entre institutions financières
                et l'intégration avec le système bancaire.
              </p>

              <p className="leading-relaxed">
                <strong>XRP</strong> : conçu pour faciliter les transferts
                internationaux rapides et peu coûteux entre banques.
              </p>
            </InfoBubble>
          </div>
        </section>

        <section id="acheter-stocker-securiser" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Stocker et sécuriser ses cryptomonnaies
          </h2>

          <div className="space-y-4">
            <InfoBubble
              icon={<FaExchangeAlt />}
              title="Utiliser ses cryptos au quotidien"
              color="text-teal-400"
            >
              <p className="leading-relaxed mb-3">
                Dans les faits, très peu de commerçants acceptent les cryptos
                comme moyen de paiement courant. La plupart des détenteurs les
                utilisent surtout pour investir, épargner ou spéculer, plutôt
                que pour payer leurs achats du quotidien, la faute à la
                volatilité des cours et à la lenteur ou au coût de certaines
                transactions on-chain.
              </p>

              <p className="leading-relaxed">
                Quelques cartes bancaires adossées à des plateformes d'échange
                permettent de dépenser ses cryptos chez n'importe quel
                commerçant, en convertissant automatiquement le montant en
                monnaie classique au moment du paiement.
              </p>

              <ExampleBox>
                <p className="mb-2">
                  En 2021, le Salvador est devenu le premier pays au monde à
                  adopter le Bitcoin comme monnaie légale au même titre que le
                  dollar, avec l'obligation pour les commerçants de l'accepter.
                </p>
                <p>
                  Face aux exigences du FMI pour lui accorder un prêt, le pays a
                  fait marche arrière en 2025. L'État salvadorien continue
                  malgré tout d'accumuler du Bitcoin dans ses réserves. Ce cas
                  reste une exception, aucun autre pays n'a suivi cette voie à
                  aussi grande échelle.
                </p>
              </ExampleBox>

              <p className="leading-relaxed mt-3">
                À l'inverse du cas salvadorien imposé par l'État, l'usage des
                cryptos se développe aussi de façon spontanée, à l'initiative de
                la population, dans les pays frappés par une inflation extrême.
                Quand la monnaie locale perd sa valeur trop vite, les cryptos
                deviennent un moyen d'épargner ou de faire des achats sans voir
                son pouvoir d'achat fondre.
              </p>

              <ExampleBox>
                Au Venezuela, où l'inflation a dépassé 200 % par an en 2025, une
                part croissante de la population utilise Bitcoin et des
                stablecoins comme le dollar numérique pour protéger son épargne,
                faute d'accès facile au dollar physique. Des dynamiques
                comparables existent en Argentine, en Turquie, au Liban et au
                Zimbabwe, où les habitants se tournent vers la crypto pour
                contourner l'effondrement de leur monnaie nationale plutôt que
                par choix idéologique.
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaGlobeAmericas />}
              title="Hot wallets (portefeuilles en ligne)"
              color="text-purple-400"
            >
              <p className="leading-relaxed mb-2">
                Les hot wallets sont connectés à Internet. Ils permettent
                d'acheter, vendre et utiliser ses cryptos facilement, mais sont
                plus exposés aux piratages.
              </p>

              <ul className="list-disc list-inside leading-relaxed mb-2">
                <li>
                  Comptes sur des plateformes d'échange (Binance, Coinbase,
                  Kraken)
                </li>
                <li>
                  Applications mobiles ou extensions (MetaMask, Trust Wallet)
                </li>
              </ul>

              <p className="leading-relaxed">
                Ces solutions sont pratiques pour débuter ou pour le trading,
                mais il est déconseillé d'y stocker de grosses sommes sur le
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
                Il s'agit généralement d'appareils physiques appelés hardware
                wallets (par exemple Ledger ou Trezor).
              </p>

              <p className="leading-relaxed">
                Même si votre ordinateur est compromis, un attaquant ne peut pas
                accéder directement à vos fonds sans posséder l'appareil.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaKey />}
              title="Clé privée et phrase de récupération"
              color="text-yellow-400"
            >
              <p className="leading-relaxed mb-2">
                Les cryptomonnaies ne sont pas stockées dans le wallet lui-même.
                Elles existent sur la <Term id="blockchain" />. Le portefeuille
                contient les clés permettant d'y accéder.
              </p>

              <p className="leading-relaxed mb-2">
                • <strong>Clé privée</strong> : code secret donnant un contrôle
                total sur vos fonds
              </p>

              <p className="leading-relaxed mb-2">
                • <strong>Phrase de récupération (seed phrase)</strong> : série
                de 12 ou 24 mots permettant de restaurer votre wallet
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
                <li>Activer l'authentification à deux facteurs (2FA)</li>
                <li>Vérifier l'adresse des sites pour éviter le phishing</li>
                <li>Ne jamais partager sa clé privée ou sa seed phrase</li>
                <li>Utiliser un cold wallet pour les montants importants</li>
              </ul>

              <p className="leading-relaxed">
                En crypto, il n'existe généralement aucun recours en cas de vol
                : la sécurité dépend entièrement de l'utilisateur.
              </p>
            </InfoBubble>
          </div>
        </section>
      </Container>
    </PageLayout>
  );
};

export default Cryptos;
