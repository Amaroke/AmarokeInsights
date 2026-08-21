import React from "react";
import {
  FaChartLine,
  FaGlobeAmericas,
  FaExchangeAlt,
  FaChartBar,
  FaBalanceScale,
  FaChartArea,
  FaRobot,
  FaUniversity,
} from "react-icons/fa";
import InfoBubble from "../components/ui/InfoBubble";
import PageLayout from "../components/layout/PageLayout";
import Container from "../components/ui/Container";
import Term from "../components/ui/Term";
import Disclaimer from "../components/ui/Disclaimer";
import CandlestickChart from "../components/charts/CandlestickChart";

const Trading: React.FC = () => {
  return (
    <PageLayout
      title="Les bases du trading"
      description="Marchés, plateformes, types de trading, positions long/short et chandeliers japonais."
    >
      <Container>
        <Disclaimer title="Activité à haut risque de perte">
          Le trading actif est une activité à haut risque. La grande majorité
          des traders particuliers perdent de l'argent sur le long terme. Cette
          section est informative et ne constitue pas un conseil financier. Ne
          tradez jamais avec de l'argent que vous ne pouvez pas vous permettre
          de perdre.
        </Disclaimer>
        <section id="quest-ce-que-le-trading" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Qu'est-ce que le trading ?
          </h2>

          <div className="space-y-4">
            <InfoBubble
              icon={<FaChartLine />}
              title="Bases du Trading"
              color="text-blue-400"
            >
              <p className="leading-relaxed mb-3">
                Le trading consiste à acheter et vendre des actifs financiers
                (actions, devises, matières premières, cryptomonnaies…) dans le
                but de générer un profit à court ou moyen terme.
              </p>

              <p className="leading-relaxed mb-3">
                Contrairement à l'investissement à long terme, le trading
                cherche à exploiter les fluctuations de prix, parfois sur
                quelques minutes, heures ou jours seulement.
              </p>

              <p className="leading-relaxed">
                Le trader ne cherche pas forcément à investir sur la valeur d'un
                actif, mais plutôt les{" "}
                <b>opportunités offertes par le marché</b>. Les prix évoluent en
                permanence en fonction de l'offre et de la demande, des annonces
                économiques, des résultats d'entreprises ou encore des
                événements mondiaux, c'est sur ces mouvements que le trader
                tente de tirer profit.
              </p>
              <p className="leading-relaxed">
                Grâce aux plateformes en ligne, il est aujourd'hui possible pour
                un particulier d'accéder aux marchés financiers du monde entier.
                Cependant, le trading demande de la discipline, de la formation
                et une bonne gestion du risque pour espérer être rentable sur le
                long terme.
              </p>
            </InfoBubble>
            <InfoBubble
              icon={<FaBalanceScale />}
              title="Trading vs Investissement"
              color="text-green-400"
            >
              <p className="leading-relaxed mb-4">
                Le trading et l'investissement sont souvent confondus, mais
                leurs objectifs, leurs horizons de temps et leurs niveaux de
                risque sont en général très différents.
              </p>

              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm text-left border border-gray-700 rounded-lg overflow-hidden">
                  <thead className="bg-gray-800 text-gray-200">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Critère</th>
                      <th className="px-4 py-3 font-semibold text-blue-400">
                        Trading
                      </th>
                      <th className="px-4 py-3 font-semibold text-green-400">
                        Investissement
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900/40">
                      <td className="px-4 py-3 font-medium">
                        Horizon de temps
                      </td>
                      <td className="px-4 py-3">
                        Court terme (minutes à quelques jours)
                      </td>
                      <td className="px-4 py-3">
                        Long terme (plusieurs années)
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-3 font-medium">Objectif</td>
                      <td className="px-4 py-3">
                        Profit rapide sur les variations de prix
                      </td>
                      <td className="px-4 py-3">
                        Accumulation de richesse et revenus passifs
                      </td>
                    </tr>

                    <tr className="bg-gray-900/40">
                      <td className="px-4 py-3 font-medium">
                        Niveau de risque
                      </td>
                      <td className="px-4 py-3">
                        Élevé (surtout avec effet de levier)
                      </td>
                      <td className="px-4 py-3">
                        Modéré (réduit sur le long terme)
                      </td>
                    </tr>

                    <tr className="bg-gray-900/40">
                      <td className="px-4 py-3 font-medium">
                        Fréquence d'intervention
                      </td>
                      <td className="px-4 py-3">
                        Très élevée / élevée (quotidienne, voire plusieurs fois
                        par jour)
                      </td>
                      <td className="px-4 py-3">
                        Faible (mensuelle ou annuelle)
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Compétences clés
                      </td>
                      <td className="px-4 py-3">
                        Discipline, rapidité, gestion du stress
                      </td>
                      <td className="px-4 py-3">
                        Patience, vision long terme, diversification
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="md:hidden space-y-3">
                <div className="bg-gray-900/40 p-3 rounded-lg border border-gray-700">
                  <p className="text-xs text-gray-400">Horizon de temps</p>
                  <p className="text-blue-400 font-semibold">Trading</p>
                  <p className="mb-2">Court terme (minutes à quelques jours)</p>
                  <p className="text-green-400 font-semibold">Investissement</p>
                  <p>Long terme (plusieurs années)</p>
                </div>

                <div className="bg-gray-900/40 p-3 rounded-lg border border-gray-700">
                  <p className="text-xs text-gray-400">Objectif</p>
                  <p className="text-blue-400 font-semibold">Trading</p>
                  <p className="mb-2">Profit rapide sur les variations</p>
                  <p className="text-green-400 font-semibold">Investissement</p>
                  <p>Accumulation de richesse</p>
                </div>

                <div className="bg-gray-900/40 p-3 rounded-lg border border-gray-700">
                  <p className="text-xs text-gray-400">Niveau de risque</p>
                  <p className="text-blue-400 font-semibold">Trading</p>
                  <p className="mb-2">Élevé (effet de levier)</p>
                  <p className="text-green-400 font-semibold">Investissement</p>
                  <p>Modéré</p>
                </div>

                <div className="bg-gray-900/40 p-3 rounded-lg border border-gray-700">
                  <p className="text-xs text-gray-400">Fréquence</p>
                  <p className="text-blue-400 font-semibold">Trading</p>
                  <p className="mb-2">Élevée (plusieurs fois/jour)</p>
                  <p className="text-green-400 font-semibold">Investissement</p>
                  <p>Faible (mensuelle)</p>
                </div>

                <div className="bg-gray-900/40 p-3 rounded-lg border border-gray-700">
                  <p className="text-xs text-gray-400">Compétences</p>
                  <p className="text-blue-400 font-semibold">Trading</p>
                  <p className="mb-2">Discipline, rapidité</p>
                  <p className="text-green-400 font-semibold">Investissement</p>
                  <p>Patience, vision long terme</p>
                </div>
              </div>
              <p className="leading-relaxed mt-4">
                Bien entendu il existe des exceptions et des zones grises,
                certains investisseurs peuvent adopter une approche plus active,
                tandis que certains traders peuvent conserver des positions plus
                longtemps.
              </p>
              <p className="leading-relaxed mt-4">
                Il est cependant <b>possible de combiner les deux approches</b>,
                avoir un portefeuille long terme pour la stabilité et une partie
                dédiée au trading pour saisir des opportunités à court terme.
              </p>
            </InfoBubble>
            <InfoBubble
              icon={<FaUniversity />}
              title="Réalité du trading et institutions"
              color="text-red-400"
            >
              <p className="leading-relaxed mb-3">
                Les marchés financiers sont{" "}
                <b>principalement occupés par des institutions</b> (banques,
                hedge funds, fonds d'investissement) et des traders
                professionnels qui disposent de ressources, d'outils et
                d'algorithmes très avancés.
              </p>

              <p className="leading-relaxed mb-3">
                Pour un particulier, il peut être difficile de trouver sa place
                et d'obtenir un avantage durable.{" "}
                <b>Les marchés sont très compétitifs</b> et les mouvements de
                prix peuvent être imprévisibles.
              </p>

              <p className="leading-relaxed mb-3">
                Statistiques réalistes sur le trading particulier :
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>
                    Environ <b>9 traders sur 10</b> perdent de l'argent
                  </li>
                  <li>
                    Le trading est <b>très risqué</b> et peut créer une{" "}
                    <b>dépendance psychologique</b>
                  </li>
                  <li>
                    Très peu de particuliers parviennent à être{" "}
                    <b>rentables sur le long terme</b>
                  </li>
                </ul>
              </p>

              <p className="leading-relaxed">
                Cette réalité souligne l'importance de se former, de commencer
                petit (compte démo ou faible capital) et de{" "}
                <b>
                  ne jamais considérer le trading comme un moyen rapide de
                  s'enrichir
                </b>
                .
              </p>
            </InfoBubble>
          </div>
        </section>

        <section id="marches-plateformes" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Marchés & plateformes
          </h2>
          <div className="space-y-4">
            <InfoBubble
              icon={<FaGlobeAmericas />}
              title="Les marchés financiers"
              color="text-green-400"
            >
              <p className="leading-relaxed mb-3">
                Les traders peuvent intervenir sur différents marchés
                financiers, chacun ayant ses propres caractéristiques, niveaux
                de risque, horaires et comportements de prix.
              </p>

              <ul className="space-y-3">
                <li>
                  <strong>Actions :</strong> parts d'entreprises cotées en
                  bourse. Elles permettent de spéculer sur la performance d'une
                  société. Volatilité modérée et horaires limités aux heures
                  d'ouverture des places boursières.
                </li>

                <li>
                  <strong>Forex (devises) :</strong> marché des monnaies
                  (EUR/USD, USD/JPY…). C'est le plus grand marché au monde,
                  ouvert 24h/24 en semaine, très liquide mais parfois volatile.
                </li>

                <li>
                  <strong>Cryptomonnaies :</strong> actifs numériques comme
                  Bitcoin ou Ethereum. Marché ouvert 24h/24 et 7j/7, extrêmement
                  volatil et encore peu régulé.
                </li>

                <li>
                  <strong>Matières premières :</strong> or, pétrole, gaz, blé…
                  Leur prix dépend fortement de l'offre, de la demande et des
                  événements géopolitiques.
                </li>

                <li>
                  <strong>Indices :</strong> paniers d'actions représentant une
                  économie ou un secteur (ex : <Term id="CAC40" />,{" "}
                  <Term id="S&P500" />
                  ). Permettent de trader la performance globale d'un marché.
                </li>
              </ul>

              <p className="leading-relaxed mt-4">
                Chaque marché demande une approche différente, certains sont
                plus stables, d'autres plus rapides et risqués.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaExchangeAlt />}
              title="Plateformes de trading"
              color="text-green-400"
            >
              <p className="leading-relaxed mb-3">
                Une plateforme de trading est l'outil qui permet d'accéder aux
                marchés, d'analyser les prix et de passer des ordres d'achat ou
                de vente en temps réel.
              </p>

              <p className="leading-relaxed mb-3">
                Elles proposent généralement des graphiques interactifs, des
                indicateurs techniques et différents types d'ordres pour gérer
                ses positions.
              </p>

              <h4 className="font-semibold mt-4 mb-2">
                Comment choisir une plateforme ?
              </h4>

              <ul className="space-y-2">
                <li>
                  <strong>Régulation :</strong> privilégier une plateforme
                  supervisée par une autorité financière reconnue.
                </li>

                <li>
                  <strong>Frais :</strong> commissions, <Term id="spread" />,
                  frais de retrait ou d'inactivité.
                </li>

                <li>
                  <strong>Sécurité :</strong> protection des fonds,
                  authentification forte, réputation.
                </li>

                <li>
                  <strong>Actifs disponibles :</strong> actions, forex, crypto,
                  matières premières selon vos objectifs.
                </li>

                <li>
                  <strong>Qualité des outils :</strong> graphiques, indicateurs,
                  rapidité d'exécution.
                </li>

                <li>
                  <strong>Facilité d'utilisation :</strong> interface claire,
                  adaptée aux débutants ou aux utilisateurs avancés.
                </li>

                <li>
                  <strong>Compte démo/papier :</strong> possibilité de
                  s'entraîner sans risque avec de l'argent virtuel.
                </li>
              </ul>
            </InfoBubble>
          </div>
        </section>

        <section id="types-de-trading" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Les types de trading
          </h2>

          <div className="space-y-4">
            <InfoBubble
              icon={<FaChartLine />}
              title="Day Trading"
              color="text-purple-400"
            >
              <p className="leading-relaxed mb-3">
                Le day trading consiste à ouvrir et fermer toutes ses positions
                au cours de la même journée. Le trader cherche à profiter des
                fluctuations de prix intrajournalières sans conserver de
                position pendant la nuit.
              </p>

              <p className="leading-relaxed mb-3">
                Exemple : acheter une action le matin après une annonce positive
                et la revendre quelques heures plus tard lorsque le prix a
                augmenté.
              </p>

              <p className="leading-relaxed">
                Ce style demande beaucoup de temps, de concentration et une
                bonne gestion du stress, car les décisions doivent être prises
                rapidement.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaExchangeAlt />}
              title="Swing Trading"
              color="text-purple-400"
            >
              <p className="leading-relaxed mb-3">
                Le swing trading consiste à conserver une position pendant
                plusieurs jours ou semaines afin de profiter d'une tendance à
                court ou moyen terme.
              </p>

              <p className="leading-relaxed mb-3">
                Exemple : acheter un indice ou une action après une correction
                et la conserver jusqu'à ce que la tendance haussière reprenne.
              </p>

              <p className="leading-relaxed">
                Ce style est souvent considéré comme plus accessible car il
                nécessite moins de présence constante devant l'écran.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaChartBar />}
              title="Scalping"
              color="text-purple-400"
            >
              <p className="leading-relaxed mb-3">
                Le scalping consiste à réaliser un grand nombre de trades très
                courts, parfois de quelques secondes à quelques minutes, afin de
                capturer de petits mouvements de prix.
              </p>

              <p className="leading-relaxed mb-3">
                Exemple : acheter une paire de devises et la revendre quelques
                instants plus tard avec un gain très faible, répété de
                nombreuses fois dans la journée.
              </p>

              <p className="leading-relaxed">
                C'est une stratégie exigeante nécessitant une excellente
                réactivité, des frais faibles et souvent l'utilisation d'un
                effet de levier.
              </p>
            </InfoBubble>
            <InfoBubble
              icon={<FaChartArea />}
              title="Position Trading"
              color="text-purple-400"
            >
              <p className="leading-relaxed mb-3">
                Le position trading consiste à conserver une position pendant
                plusieurs mois, voire années, afin de profiter d'une tendance
                majeure du marché.
              </p>

              <p className="leading-relaxed mb-3">
                Exemple : acheter un indice ou une action dans une phase
                haussière durable et la conserver tant que la tendance globale
                reste intacte.
              </p>

              <p className="leading-relaxed">
                Ce style se rapproche de l'investissement long terme, mais reste
                basé sur une logique de trading avec des points d'entrée et de
                sortie précis. Il demande surtout de la patience et une vision
                globale du marché.
              </p>
            </InfoBubble>
            <InfoBubble
              icon={<FaRobot />}
              title="Algorithmic Trading"
              color="text-purple-400"
            >
              <p className="leading-relaxed mb-3">
                L'algorithmic trading, ou trading automatisé, consiste à
                utiliser des programmes informatiques (algorithmes) pour passer
                automatiquement des ordres selon des conditions prédéfinies.
              </p>

              <p className="leading-relaxed mb-3">
                Exemple : un robot qui achète une action si elle dépasse un
                certain prix ou qui vend un indice si la volatilité atteint un
                seuil défini.
              </p>

              <p className="leading-relaxed">
                Ce style permet de réagir très rapidement aux mouvements du
                marché et de gérer un grand nombre de positions simultanément.
                Il demande des compétences techniques et une bonne compréhension
                des marchés.
              </p>
            </InfoBubble>
          </div>
        </section>

        <section id="positions-longues-courtes" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Positions Long / Short & Chandeliers
          </h2>

          <div className="space-y-6">
            <InfoBubble
              icon={<FaExchangeAlt />}
              title="Position Long"
              color="text-pink-400"
            >
              <p className="leading-relaxed mb-3">
                La position long consiste à acheter un actif dans l'espoir que
                son prix augmente. Le profit est réalisé lorsque vous revendez
                l'actif à un prix supérieur à celui d'achat.
              </p>

              <p className="leading-relaxed mb-3 font-semibold">
                Étapes simplifiées :
              </p>

              <ul className="list-disc list-inside space-y-2 mb-3">
                <li>Vous achetez l'actif au prix actuel du marché.</li>
                <li>
                  Vous conservez la position tant que le prix monte ou que votre
                  objectif de gain n'est pas atteint.
                </li>
                <li>
                  Vous vendez l'actif à un prix supérieur pour réaliser un
                  profit.
                </li>
              </ul>

              <p className="leading-relaxed mb-3 font-mono bg-gray-900/30 p-2 rounded text-sm">
                Exemple positif : Acheter 10 actions à 50 € → dépense 500 € Prix
                monte à 60 € → revente pour 600 € Profit = 100 €
              </p>

              <p className="leading-relaxed mb-3 font-semibold">
                Attention aux pertes : si le prix baisse, le capital investi
                diminue.
              </p>

              <p className="leading-relaxed mb-3 font-mono bg-gray-900/30 p-2 rounded text-sm">
                Exemple de perte : Acheter 10 actions à 50 € → dépense 500 €
                Prix baisse à 40 € → revente pour 400 € Perte = 100 €
              </p>

              <p className="leading-relaxed">
                Le long est le style le plus simple pour débuter car le risque
                est limité au capital investi. Il reste important de suivre le
                marché et de définir des objectifs ou des{" "}
                <Term id="stop-loss" />.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaExchangeAlt />}
              title="Position Short (vente à découvert)"
              color="text-pink-400"
            >
              <p className="leading-relaxed mb-3">
                La position short consiste à parier sur la baisse du prix d'un
                actif. Contrairement à l'achat classique (long), on vend d'abord
                un actif que l'on ne possède pas, puis on le rachète plus tard à
                un prix inférieur pour réaliser un profit.
              </p>

              <p className="leading-relaxed mb-3 font-semibold">
                Étapes simplifiées :
              </p>

              <ul className="list-disc list-inside space-y-2 mb-3">
                <li>
                  Vous empruntez des actions auprès d'un <Term id="broker" /> ou
                  d'un autre investisseur.
                </li>
                <li>
                  Vous vendez immédiatement ces actions sur le marché au prix
                  actuel.
                </li>
                <li>
                  Si le prix baisse, vous rachetez les mêmes actions à un prix
                  inférieur.
                </li>
                <li>
                  Vous rendez les actions empruntées et gardez la différence
                  comme profit.
                </li>
              </ul>

              <p className="leading-relaxed mb-3 font-mono bg-gray-900/30 p-2 rounded text-sm">
                Exemple positif : Vendre 10 actions empruntées à 50 € → encaisse
                500 € Prix baisse à 40 € → rachat pour 400 € Profit = 100 €
              </p>

              <p className="leading-relaxed mb-3 font-semibold">
                Attention aux pertes : si le prix augmente au lieu de baisser,
                il faut racheter plus cher.
              </p>

              <p className="leading-relaxed mb-3 font-mono bg-gray-900/30 p-2 rounded text-sm">
                Exemple de perte : Vendre 10 actions empruntées à 50 € →
                encaisse 500 € Prix monte à 60 € → rachat pour 600 € Perte = 100
                €
              </p>

              <p className="leading-relaxed">
                Le short nécessite une gestion stricte du risque, l'utilisation
                de <Term id="stop-loss" /> et une bonne compréhension du marché.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaChartArea />}
              title="Les chandeliers japonais"
              color="text-blue-400"
            >
              <p className="leading-relaxed mb-3">
                Les chandeliers japonais représentent l'évolution du prix sur
                une période donnée (une minute, une heure, un jour…). Chaque
                bougie résume <b>4 informations</b> : ouverture, clôture, plus
                haut et plus bas atteints pendant cette période.
              </p>

              <p className="leading-relaxed mb-3">
                Le rectangle central s'appelle le <b>corps</b>, il représente
                l'écart entre l'ouverture et la clôture. Une bougie{" "}
                <b className="text-green-400">verte</b> indique une hausse sur
                la période (clôture au-dessus de l'ouverture), une bougie{" "}
                <b className="text-red-400">rouge</b> indique une baisse. Les
                traits fins au-dessus et en dessous du corps sont les{" "}
                <b>mèches</b> (ou "queues"), elles montrent jusqu'où le prix est
                allé avant de revenir vers son niveau de clôture.
              </p>

              <CandlestickChart />

              <p className="leading-relaxed mb-3 mt-4 font-semibold">
                Trois cas concrets, repérés sur le graphique ci-dessus :
              </p>

              <ul className="list-disc list-inside space-y-2 mb-3">
                <li>
                  <b>1. Bougie verte avec longue mèche basse :</b> le prix a
                  fortement chuté puis les acheteurs ont repris le contrôle
                  avant la clôture.
                </li>
                <li>
                  <b>2. Bougie rouge avec longue mèche haute :</b> le prix a
                  tenté de monter fortement mais les vendeurs ont dominé jusqu'à
                  la clôture.
                </li>
                <li>
                  <b>3. Petite bougie, mèches courtes :</b> ouverture et clôture
                  proches, peu de mouvement sur la période.
                </li>
              </ul>

              <p className="leading-relaxed">
                Un seul chandelier ne donne qu'un instantané. En pratique, les
                traders les lisent <b>en série</b> pour repérer des tendances ou
                des figures récurrentes, plutôt qu'en se basant sur une seule
                bougie isolée.
              </p>
            </InfoBubble>
          </div>
        </section>
      </Container>
    </PageLayout>
  );
};

export default Trading;
