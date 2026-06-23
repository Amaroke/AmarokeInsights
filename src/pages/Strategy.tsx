import React from "react";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";
import InfoBubble from "../components/InfoBubble";
import {
  FaPiggyBank,
  FaChartPie,
  FaBitcoin,
  FaLightbulb,
} from "react-icons/fa";
import Term from "../components/Term";

const Strategy: React.FC = () => {
  return (
    <PageLayout
      title="Ma stratégie personnelle"
      description="Ma stratégie d'investissement personnelle et une FAQ pour la mettre en pratique."
    >
      <Container>
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
                Cette section présente <strong>mon profil personnel</strong> et
                ma manière d'investir. Les informations, choix et positions que
                vous y trouverez reflètent mes expériences, mes convictions et
                ma tolérance au risque.
              </p>

              <p className="leading-relaxed mt-3">
                ⚠️ Ce contenu est fourni{" "}
                <strong>à titre informatif uniquement</strong>. Il ne doit pas
                être considéré comme un conseil financier ou reproduit tel quel.
                Je suis encore en phase d'apprentissage, et mes stratégies
                évoluent avec le temps. L'objectif est de partager ma perception
                du monde financier le plus neutrement possible, sans inciter à
                suivre mes choix.
              </p>

              <p className="leading-relaxed mt-3 italic text-gray-400">
                Rappelons que mon objectif initial est de partager ma vision,
                mes réflexions et avant tout d'apprendre à travers ce projet. Si
                je partage ici ma stratégie personnelle, c'est dans un esprit
                d'exposition de mes choix et non d'incitation à les suivre
                aveuglément. Au contraire, j'espère que cela encouragera chacun
                à forger sa propre voie en fonction de ses objectifs et de sa
                situation personnelle.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaPiggyBank />}
              title="Matelas de sécurité - Livret A"
              color="text-blue-400"
            >
              <p className="leading-relaxed">
                J'ai rempli un <Term id={"LivretA"} /> afin d'avoir une réserve
                de sécurité. Même si la somme est importante, elle me rassure,
                j'ai des liquidités disponibles immédiatement en cas d'imprévu
                ou de dépenses nécessaires.
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
                d'investissement à moyen / long terme.
              </p>
              <p className="leading-relaxed">
                J'y investis environ 2/3 de mes revenus chaque mois et souhaite
                le <strong>remplir d'ici fin 2030</strong>. Cet objectif marque
                ma première étape vers le FIRE dont j'ai parlé plus tôt.
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
                        Pour surpondérer la tech américaine en général, car j'ai
                        la conviction qu'elle occupera une place encore plus
                        importante sur les marchés futurs.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2">PAEEM (Emerging Markets)</td>
                      <td className="px-3 py-2 text-right">15 %</td>
                      <td className="px-3 py-2">
                        Pour obtenir une exposition aux pays émergents sans trop
                        fragiliser le noyau de mon PEA.{" "}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2">LWLD (MSCI World x2)</td>
                      <td className="px-3 py-2 text-right">5 %</td>
                      <td className="px-3 py-2">
                        Pour tenter un effet de levier sur le MSCI World à long
                        terme.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="leading-relaxed mt-3">
                Cette répartition reste <strong>évolutive</strong>, je l'ajuste
                selon les conditions du marché et mes objectifs financiers. Elle
                est également influencée par le fait que{" "}
                <strong>Saxo Banque</strong> propose ces <Term id={"ETF"} />{" "}
                Amundi <strong>sans frais de courtage</strong>, ce qui rend leur
                utilisation particulièrement intéressante pour mon cas.
              </p>
              <p className="leading-relaxed mt-3">
                La composition actuelle de mes actifs est pour le moment assez
                aggresive, mais je souhaite la faire évoluer vers une
                répartition plus équilibrée à mesure que j'approche de mon
                objectif.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaBitcoin />}
              title="Cryptos - Apprentissage et Exploration"
              color="text-yellow-400"
            >
              <p className="leading-relaxed">
                J'explore actuellement le <strong>trading</strong> et les{" "}
                <strong>cryptomonnaies</strong> dans une optique
                d'apprentissage.
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
        <section id="faq" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            FAQ
          </h2>
          <div className="space-y-6">
            <InfoBubble
              icon={<FaLightbulb />}
              title="Pourquoi cette section ?"
              color="text-purple-400"
            >
              <p className="leading-relaxed">
                On me pose souvent les mêmes questions, donc j'ai regroupé ici
                une FAQ pour y répondre de manière plus claire et centralisée.
                Les réponses reflètent mon point de vue personnel et restent
                donc <b>subjectives</b>. Elles ne doivent pas être interprétées
                comme des <b>vérités absolues</b> ni comme des
                <b> conseils à suivre</b>, mais simplement comme une expression
                de ma façon de voir les choses à l'instant actuel.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaLightbulb />}
              title="Pourquoi viser 1 million d'euros ?"
              color="text-purple-400"
            >
              <p className="leading-relaxed whitespace-pre-line">
                L'objectif n'est pas le chiffre en lui-même, mais ce qu'il
                permet. Avec 1 million d'euros investis, en appliquant une règle
                simple comme les
                <b> 4 % de retrait annuel</b>, ça représente environ{" "}
                <b>40 000 € par an</b>. Un revenu sans dépendre d'un salaire,
                qui couvre largement un mode de vie confortable. L'idée, c'est
                donc d'acheter du <b>temps</b> et de la
                <b> liberté</b>, pas des objets. Plus de détails dans la partie
                où j'explique ce qu'est le <b>FIRE</b>.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaLightbulb />}
              title="Tu vas faire quoi si tu prends ta retraite à 45 ans ? Tu ne vas pas t'ennuyer ?"
              color="text-purple-400"
            >
              <p className="leading-relaxed whitespace-pre-line">
                Il y a 20 ans, tu savais exactement ce que tu ferais aujourd'hui
                ? <b>Probablement pas</b>. Donc je verrai bien le moment venu.
                Par contre, il y a une chose dont je suis sûr : la{" "}
                <b>routine imposée</b>, comme quand on était enfant, école,
                obligations, horaires fixes, ça ne m'a jamais plu. Et
                aujourd'hui, le <b>travail obligatoire</b> me fait le même
                effet. Si je me libère de cette contrainte, je doute fortement
                de le regretter. Et au pire, rien ne m'empêche de continuer à
                travailler, mais cette fois par
                <b> choix</b>, pas par obligation.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaLightbulb />}
              title="Comment tu fais pour mettre 2/3 de tes revenus de côté chaque mois ? Tu ne dépenses rien ?"
              color="text-purple-400"
            >
              <p className="leading-relaxed whitespace-pre-line">
                C'est surtout une question de <b>choix de vie</b> et de{" "}
                <b>priorités</b>. Certains postes de dépenses pèsent énormément
                sur un budget. Par exemple, un enfant peut coûter des dizaines
                voire des centaines de milliers d'euros, et une voiture
                représente aussi plusieurs milliers d'euros par an entre
                l'achat, l'entretien, l'assurance et le carburant. De mon côté,
                mes loisirs coûtent très peu. Je joue aux jeux vidéo, je regarde
                des séries, des films, des animés et des vidéos, et je fais du
                sport, ce qui revient à<b> maximiser mon plaisir personnel</b>.
                Rien de particulièrement coûteux. Mon passe-temps principal
                revient à moins de <b>10 centimes de l'heure</b> de
                divertissement (n'aller pas croire que j'ai tout calculé en ce
                but c'est juste une constatation à but d'explication). J'utilise
                des transports en commun (gratuit la majorité du temps). Au
                final, mon mode de vie est simple et peu dépensier, ce qui me
                permet d'épargner une grande partie de mes revenus. Et
                attention, ça ne veut pas dire que certaines dépenses sont
                “mauvaises”. Avoir des enfants ou dépenser plus pour son
                confort, c'est un choix de vie totalement valide. Simplement, ce
                ne sont pas des choses qui m'attirent <b>personnellement</b> et{" "}
                <b>pour le moment</b>.
              </p>
            </InfoBubble>

            <InfoBubble
              icon={<FaLightbulb />}
              title="Investir c'est le mal ! Tu participes au capitalisme, la pauvreté, les crises, les guerres… N'as-tu pas honte ?"
              color="text-purple-400"
            >
              <p className="leading-relaxed whitespace-pre-line">
                Je comprends la critique. Le système économique actuel a des
                défauts, parfois majeurs, et investir ne le rend pas parfait.
                Mais ne pas investir ne change rien au système, ça te laisse
                juste en dehors. Pendant ce temps, l'inflation fait perdre de la
                valeur à ton argent et ceux qui investissent continuent de faire
                croître leur patrimoine. Investir, ce n'est pas soutenir
                aveuglément tout ce qui existe. C'est utiliser les règles du jeu
                actuel. Et surtout, ça te donne des <b>options</b>. Plus de
                liberté pour choisir ton travail, ton rythme de vie, ou même
                soutenir des causes qui te tiennent à cœur. Et si le système
                change, je m'adapterai. L'idée n'est pas de défendre un modèle
                coûte que coûte, mais de rester pragmatique et de faire au mieux
                avec les règles du moment. Refuser d'investir par principe peut
                sembler moral, mais dans les faits, ça te pénalise surtout toi,
                sans réellement impacter le système. Par ailleurs, je suis assez
                critique des systèmes politiques actuels. Il y a trop de
                fragmentation, trop de décisions court-termistes, et pas assez
                de vision globale à l'échelle de l'humanité. Je trouve aussi que
                certaines “pseudo-sciences” ou discours non rigoureux prennent
                parfois trop de place dans les débats publics, ce qui brouille
                la compréhension des vrais enjeux. Idéalement, je préférerais
                des systèmes de décision plus basés sur la compétence, la
                méthode et les faits, avec une vision beaucoup plus unifiée et
                ambitieuse pour l'espèce humaine. Mais encore une fois, c'est ma
                vision <b>personnelle</b> et <b>actuelle</b>, et je respecte
                totalement les opinions différentes. Mais dans tous les cas, je
                fais avec le monde tel qu'il est aujourd'hui, pas tel que je
                l'imagine dans l'absolu.
              </p>
            </InfoBubble>
          </div>
        </section>
      </Container>
    </PageLayout>
  );
};

export default Strategy;
