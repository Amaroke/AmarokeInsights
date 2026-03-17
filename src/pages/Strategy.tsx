import React from "react";
import { useSidebar } from "../context/SidebarContext";
import InfoBubble from "../components/InfoBubble";
import {
  FaPiggyBank,
  FaChartPie,
  FaBitcoin,
  FaLightbulb,
} from "react-icons/fa";
import Term from "../components/Term";

const Strategy: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="flex h-screen text-gray-300 bg-[#12121b]">
      <main
        className={`flex-1 overflow-auto pt-16 md:mt-16 md:pt-0 transition-all duration-300 ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-6 md:mb-0 mb-24">
          <section id="strategie-personnelle" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Stratégie personnelle
            </h2>
            <div className="space-y-6">
              <InfoBubble
                icon={<FaLightbulb />}
                title="Ma vision"
                color="text-green-400"
              >
                <p className="leading-relaxed mt-3">
                  Cette section présente <strong>mon profil personnel</strong>{" "}
                  et ma manière d’investir. Les informations, choix et positions
                  que vous y trouverez reflètent mes expériences, mes
                  convictions et ma tolérance au risque.
                </p>

                <p className="leading-relaxed mt-3">
                  ⚠️ Ce contenu est fourni{" "}
                  <strong>à titre informatif uniquement</strong>. Il ne doit pas
                  être considéré comme un conseil financier ou reproduit tel
                  quel. Je suis encore en phase d’apprentissage, et mes
                  stratégies évoluent avec le temps. L’objectif est de partager
                  ma perception du monde financier le plus neutrement possible,
                  sans inciter à suivre mes choix.
                </p>

                <p className="leading-relaxed mt-3 italic text-gray-400">
                  Rappelons que mon objectif initial est de partager ma vision,
                  mes réflexions et avant tout d'apprendre à travers ce projet.
                  Si je partage ici ma stratégie personnelle, c'est dans un
                  esprit d'exposition de mes choix et non d'incitation à les
                  suivre aveuglément. Au contraire, j'espère que cela
                  encouragera chacun à forger sa propre voie en fonction de ses
                  objectifs et de sa situation personnelle.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaPiggyBank />}
                title="Matelas de sécurité - Livret A"
                color="text-blue-400"
              >
                <p className="leading-relaxed">
                  J’ai rempli un <Term id={"LivretA"} /> afin d’avoir une
                  réserve de sécurité. Même si la somme est importante, elle me
                  rassure, j’ai des liquidités disponibles immédiatement en cas
                  d’imprévu ou de dépenses nécessaires.
                </p>
                <p className="leading-relaxed">
                  Ce capital ne vise pas le rendement, mais la sérénité. Il
                  constitue mon filet de sécurité avant tout investissement.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaChartPie />}
                title="PEA - Objectif 2030"
                color="text-green-400"
              >
                <p className="leading-relaxed">
                  Le <Term id={"PEA"} /> représente le cœur de ma stratégie
                  d’investissement à moyen / long terme.
                </p>
                <p className="leading-relaxed">
                  J’y investis environ <strong>2 000 € par mois</strong> et
                  souhaite le <strong>remplir d’ici fin 2030</strong>. Cet
                  objectif marque ma première étape vers le FIRE dont j’ai parlé
                  plus tôt.
                </p>
                <p className="leading-relaxed">
                  Mon portefeuille est principalement construit autour de
                  plusieurs <Term id={"ETF"} />
                  <strong> Amundi </strong> :
                </p>

                <div className="mt-6 border border-gray-700 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-green-900/30 px-4 py-2 font-semibold text-green-300 border-b border-gray-700 flex items-center gap-2">
                    📊 Répartition actuelle de mon PEA
                  </div>

                  <table className="min-w-full border border-gray-700 text-sm">
                    <thead>
                      <tr className="bg-gray-800 text-gray-200">
                        <th className="px-3 py-2 text-left border-b border-gray-600">
                          Ticker
                        </th>
                        <th className="px-3 py-2 text-right border-b border-gray-600">
                          Poids
                        </th>
                        <th className="px-3 py-2 text-left border-b border-gray-600">
                          Commentaire
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-gray-700">
                        <td className="px-3 py-2">DCAM (MSCI World)</td>
                        <td className="px-3 py-2 text-right" rowSpan={2}>
                          65 %
                        </td>
                        <td className="px-3 py-2" rowSpan={2}>
                          MSCI World principalement pour construire une base
                          solide à long terme.
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="px-3 py-2">CW8 (MSCI World)</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="px-3 py-2">PUST (NASDAQ 100)</td>
                        <td className="px-3 py-2 text-right">15 %</td>
                        <td className="px-3 py-2">
                          Pour surpondérer la tech américaine en général, car
                          j’ai la conviction qu’elle occupera une place encore
                          plus importante sur les marchés futurs.
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="px-3 py-2">PAEEM (Emerging Markets)</td>
                        <td className="px-3 py-2 text-right">15 %</td>
                        <td className="px-3 py-2">
                          Pour obtenir une exposition aux pays émergents sans
                          trop fragiliser le noyau de mon PEA.{" "}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="px-3 py-2">LWLD (MSCI World x2)</td>
                        <td className="px-3 py-2 text-right">5 %</td>
                        <td className="px-3 py-2">
                          Pour tenter un effet de levier sur le MSCI World à
                          long terme.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed mt-3">
                  Cette répartition reste <strong>évolutive</strong>, je
                  l’ajuste selon les conditions du marché et mes objectifs
                  financiers. Elle est également influencée par le fait que{" "}
                  <strong>Saxo Banque</strong> propose ces <Term id={"ETF"} />{" "}
                  Amundi <strong>sans frais de courtage</strong>, ce qui rend
                  leur utilisation particulièrement intéressante pour mon cas.
                </p>
                <p className="leading-relaxed mt-3">
                  La composition actuelle de mes actifs est pour le moment assez
                  aggresive, mais je souhaite la faire évoluer vers une
                  répartition plus équilibrée à mesure que j’approche de mon
                  objectif.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaBitcoin />}
                title="Cryptos - Apprentissage et Exploration"
                color="text-yellow-400"
              >
                <p className="leading-relaxed">
                  J’explore actuellement le <strong>trading</strong> et les{" "}
                  <strong>cryptomonnaies</strong> dans une optique
                  d’apprentissage.
                </p>
                <p className="leading-relaxed">
                  Je possède des crytomonnaies et j'en utilise, mais je ne
                  souhaite pas entrer dans les détails de cette partie pour le
                  moment.
                </p>
                <p className="leading-relaxed">
                  Je m'expérimente aussi au trading avec un capital limité, dans
                  le but de comprendre les mécanismes et stratégies sans prendre
                  de risques excessifs.
                </p>
              </InfoBubble>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Strategy;
