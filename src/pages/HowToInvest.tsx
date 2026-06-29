import React from "react";
import { FaChartLine, FaExclamationTriangle } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import ExampleBox from "../components/ExampleBox";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";

import "@xyflow/react/dist/style.css";
import InvestmentTree from "../components/InvestmentTree";
import Term from "../components/Term";
import Disclaimer from "../components/Disclaimer";

const HowToInvest: React.FC = () => {
  return (
    <PageLayout
      title="Comment investir ?"
      description="Une méthode pas à pas pour décider où placer son argent selon son horizon et son appétence au risque."
    >
      <Container gap="md">
        <Disclaimer title="Approche personnelle basée sur des études">
          Cette section s'appuie sur des études et des données pour proposer une
          approche structurée de l'investissement. Les conclusions tirées et les
          choix présentés restent des interprétations personnelles de ces
          données, pas des règles universelles. Les performances passées ne
          préjugent pas des performances futures. Rien ici ne constitue un
          conseil financier personnalisé.
        </Disclaimer>
        <section id="organigram" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Organigramme : comment j'investirais selon ma situation ?
          </h2>

          <InfoBubble
            icon={<FaChartLine />}
            title="Organigramme d'investissement"
            color="text-green-400"
          >
            Cet organigramme représente la manière dont j'organiserais mes
            décisions d'investissement avec mes connaissances actuelles. Il ne
            s'agit pas d'une règle absolue, mais d'une approche personnelle
            basée sur ce que j'ai appris sur la gestion du risque et la
            structuration d'un capital.
            <InvestmentTree />
          </InfoBubble>
        </section>

        <section id="pea-interesting" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Pourquoi le PEA est-il si intéressant ?
          </h2>

          <InfoBubble
            icon={<FaChartLine />}
            title="Une enveloppe fiscale très puissante"
            color="text-green-400"
          >
            <p className="leading-relaxed">
              Le <Term id={"PEA"} /> est l'une des enveloppes les plus
              avantageuses pour investir en bourse en France. Son intérêt
              principal tient à sa <b>fiscalité allégée</b> : après{" "}
              <b>5 ans de détention</b> du plan, les gains (plus-values et
              dividendes) sont{" "}
              <b>
                exonérés d'
                <Term id={"IR"} />
              </b>
              . Seuls les <Term id={"PS"} /> restent dus au moment du retrait.
            </p>

            <p className="leading-relaxed mt-2">
              Autre avantage majeur, <b>tant que l'argent reste dans le PEA</b>,
              vous ne payez <b>aucun impôt</b>, même si vous{" "}
              <b>achetez et revendez vos titres plusieurs fois</b>. L'imposition
              n'intervient qu'au moment où vous <b>retirez de l'argent</b> du
              plan. Vous pouvez donc <b>arbitrer librement</b> (vendre un{" "}
              <Term id={"ETF"} /> pour en acheter un autre, sécuriser des
              plus-values, rééquilibrer votre portefeuille) sans aucune
              fiscalité, ce qui laisse l'intégralité de vos gains continuer à
              travailler grâce aux intérêts composés.
            </p>

            <p className="leading-relaxed mt-2">
              À titre de comparaison, un <Term id={"CTO"} /> est soumis au{" "}
              <Term id={"PFU"} /> sur l'ensemble des gains. Sur un horizon long,
              l'écart de fiscalité se traduit par une différence de capital
              final très significative grâce à l'effet des intérêts composés.
            </p>

            <ExampleBox>
              <p>
                <b>Exemple chiffré : même versement, même performance</b>
                <br />
                Prenons un versement unique de <b>10 000 €</b> investi sur un{" "}
                <Term id={"ETF"} /> capitalisant, à{" "}
                <b>+7 %/an pendant 20 ans</b>. Le contenu et la performance sont
                strictement identiques, seule la <b>fiscalité à la sortie</b>{" "}
                change selon l'enveloppe et la durée de détention.
              </p>

              <div className="mt-3 border border-gray-700 rounded-xl overflow-hidden shadow-sm">
                <table className="min-w-full border border-gray-700 text-sm">
                  <thead>
                    <tr className="bg-gray-800 text-gray-200">
                      <th className="px-3 py-2 text-left border-b border-gray-600">
                        Étape
                      </th>
                      <th className="px-3 py-2 text-right border-b border-gray-600">
                        PEA (&gt; 5 ans)
                      </th>
                      <th className="px-3 py-2 text-right border-b border-gray-600">
                        PEA (&lt; 5 ans)
                      </th>
                      <th className="px-3 py-2 text-right border-b border-gray-600">
                        CTO
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2">Versement initial</td>
                      <td className="px-3 py-2 text-right">10 000 €</td>
                      <td className="px-3 py-2 text-right">10 000 €</td>
                      <td className="px-3 py-2 text-right">10 000 €</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2">
                        Valeur brute à la sortie (+7 %/an)
                      </td>
                      <td className="px-3 py-2 text-right">38 697 €</td>
                      <td className="px-3 py-2 text-right">38 697 €</td>
                      <td className="px-3 py-2 text-right">38 697 €</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2">Plus-value imposable</td>
                      <td className="px-3 py-2 text-right">28 697 €</td>
                      <td className="px-3 py-2 text-right">28 697 €</td>
                      <td className="px-3 py-2 text-right">28 697 €</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2">
                        Impôt sur le revenu (12,8 %)
                      </td>
                      <td className="px-3 py-2 text-right text-green-400">
                        0 € (exonéré)
                      </td>
                      <td className="px-3 py-2 text-right">- 3 673 €</td>
                      <td className="px-3 py-2 text-right">- 3 673 €</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2">
                        Prélèvements sociaux (18,6 %)
                      </td>
                      <td className="px-3 py-2 text-right">- 5 338 €</td>
                      <td className="px-3 py-2 text-right">- 5 338 €</td>
                      <td className="px-3 py-2 text-right">- 5 338 €</td>
                    </tr>
                    <tr className="bg-gray-800/40 font-semibold text-gray-100">
                      <td className="px-3 py-2">Capital net récupéré</td>
                      <td className="px-3 py-2 text-right text-green-400">
                        33 359 €
                      </td>
                      <td className="px-3 py-2 text-right">29 686 €</td>
                      <td className="px-3 py-2 text-right">29 686 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                À performance et contenu <b>identiques</b>, le PEA conservé plus
                de 5 ans permet environ <b>3 673 € de gains supplémentaires</b>,
                soit l'intégralité de l'impôt sur le revenu (12,8 % de la
                plus-value) économisé et donc environ <b>+12 % de gain net</b>,
                uniquement grâce à l'enveloppe. En revanche, un retrait{" "}
                <b>avant 5 ans</b> est taxé comme un CTO au <Term id={"PFU"} />,
                l'avantage disparaît et le plan est clôturé.
              </p>
            </ExampleBox>
          </InfoBubble>
        </section>

        <section id="av-limits" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Les limites des assurances vie
          </h2>

          <InfoBubble
            icon={<FaExclamationTriangle />}
            title="Les pièges à éviter"
            color="text-red-400"
          >
            <p className="leading-relaxed">
              Présentée comme « l'enveloppe préférée des Français », l'
              <Term id={"AssuranceVie"} /> est souvent <b>survendue</b> par les
              banques et les assureurs. Derrière ses vrais atouts (fiscalité
              après 8 ans, transmission), beaucoup de contrats cachent un{" "}
              <b>empilement de frais</b> et des supports « maison » qui détruise
              l'essentiel de la performance. Voici ses principales limites.
            </p>

            <p className="leading-relaxed mt-4">
              L'empilement de frais est le premier piège d'une AV, chaque couche
              de frais paraît anodine, mais leur accumulation, prélevée{" "}
              <b>chaque année sur tout l'encours</b>, change radicalement le
              résultat final.
            </p>

            <div className="mt-3 border border-gray-700 rounded-xl overflow-hidden shadow-sm">
              <table className="min-w-full border border-gray-700 text-sm">
                <thead>
                  <tr className="bg-gray-800 text-gray-200">
                    <th className="px-3 py-2 text-left border-b border-gray-600">
                      Type de frais
                    </th>
                    <th className="px-3 py-2 text-left border-b border-gray-600">
                      Fourchette courante
                    </th>
                    <th className="px-3 py-2 text-left border-b border-gray-600">
                      Ce qu'il faut savoir
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="px-3 py-2 font-semibold">
                      Frais d'entrée / sur versement
                    </td>
                    <td className="px-3 py-2">0 à 5 %</td>
                    <td className="px-3 py-2">
                      Prélevés à <b>chaque dépôt</b> : verser 10 000 € n'en
                      investit que 9 500 €. Totalement injustifiés, les bons
                      contrats en ligne sont à <b>0 %</b>.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-3 py-2 font-semibold">
                      Frais de gestion (maintien)
                    </td>
                    <td className="px-3 py-2">0,5 à 1 % / an</td>
                    <td className="px-3 py-2">
                      Prélevés <b>chaque année sur la totalité de l'encours</b>,
                      que le contrat monte ou baisse. C'est le frais le plus
                      coûteux sur le long terme.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-3 py-2 font-semibold">
                      Frais des supports
                    </td>
                    <td className="px-3 py-2">0,5 à 2,5 % / an</td>
                    <td className="px-3 py-2">
                      Frais courants des fonds (OPCVM), <b>en plus</b> de ceux
                      de l'enveloppe et souvent invisibles. Un{" "}
                      <Term id={"ETF"} /> indiciel coûte ~0,2 %.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-3 py-2 font-semibold">
                      Frais d'arbitrage
                    </td>
                    <td className="px-3 py-2">0 à 1 % / opération</td>
                    <td className="px-3 py-2">
                      Facturés à chaque changement de support. Pénalisent ceux
                      qui veulent réallouer leur portefeuille.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-3 py-2 font-semibold">
                      Gestion pilotée / mandat
                    </td>
                    <td className="px-3 py-2">+ 0,2 à 0,5 % / an</td>
                    <td className="px-3 py-2">
                      Pour déléguer la gestion : s'empile encore sur tout le
                      reste, sans garantie de surperformance.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold">Frais de sortie</td>
                    <td className="px-3 py-2">0 % (le plus souvent)</td>
                    <td className="px-3 py-2">
                      Rares en sortie, mais un rachat partiel avant 8 ans fait
                      perdre l'avantage fiscal et peut prendre plusieurs jours.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="leading-relaxed mt-3">
              Les unités de compte sont présentées comme « le moteur de
              performance » du contrat, mais c'est souvent là que se joue le
              conflit d'intérêts. L'assureur et le distributeur touchent des{" "}
              <b>rétrocommissions</b>, une part des frais du fonds leur est
              reversée chaque année. Ils ont donc intérêt à proposer les fonds{" "}
              <b>les plus chargés en frais</b>, pas les plus performants. Au
              final, les <b>fonds « maison »</b> battent rarement un simple ETF
              indiciel, et sont bourrés de frais empilés (enveloppe + fonds)
              dépassant fréquemment 2 % par an, sans transparence réelle pour
              l'épargnant.
            </p>

            <ExampleBox>
              <p>
                <b>Au final, qui gagne quoi ?</b> Prenons <b>50 000 €</b> placés
                20 ans sur un marché à <b>7 %/an</b>, dans un contrat bancaire
                facturant <b>2 %/an</b> de frais. Voici ce que chacun retire
                réellement de l'opération :
              </p>

              <div className="mt-3 border border-gray-700 rounded-xl overflow-hidden shadow-sm">
                <table className="min-w-full border border-gray-700 text-sm">
                  <thead>
                    <tr className="bg-gray-800 text-gray-200">
                      <th className="px-3 py-2 text-left border-b border-gray-600">
                        Sur 20 ans
                      </th>
                      <th className="px-3 py-2 text-right border-b border-gray-600">
                        Vous (épargnant)
                      </th>
                      <th className="px-3 py-2 text-right border-b border-gray-600">
                        La banque
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2 font-semibold">
                        Risque supporté
                      </td>
                      <td className="px-3 py-2 text-right">
                        Tout (aléa de marché)
                      </td>
                      <td className="px-3 py-2 text-right">Aucun</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2 font-semibold">
                        Rôle dans l'opération
                      </td>
                      <td className="px-3 py-2 text-right">
                        Apporte les 50 000 €
                      </td>
                      <td className="px-3 py-2 text-right">
                        Prélève 2 %/an sur l'encours
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2 font-semibold">
                        Argent encaissé sur 20 ans
                      </td>
                      <td className="px-3 py-2 text-right text-green-400">
                        + 79 172 € de gain net
                      </td>
                      <td className="px-3 py-2 text-right text-red-400">
                        ≈ 34 900 € de frais
                      </td>
                    </tr>
                    <tr className="bg-gray-800/40 font-semibold text-gray-100">
                      <td className="px-3 py-2">
                        Répartition de l'argent encaissé
                      </td>
                      <td className="px-3 py-2 text-right text-green-400">
                        ≈ 69 % pour vous
                      </td>
                      <td className="px-3 py-2 text-right text-red-400">
                        ≈ 31 % pour la banque
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Autrement dit, vous apportez les <b>50 000 €</b> et supportez{" "}
                <b>tout le risque</b> pour <b>≈ 79 000 € de gain net</b>,
                pendant que la banque encaisse <b>≈ 35 000 € de frais</b> sans
                aucun risque, soit <b>≈ 31 % de l'argent tiré de l'opération</b>{" "}
                capté par celle qui ne prend aucun risque.
              </p>
            </ExampleBox>

            <p className="leading-relaxed mt-3">
              <b>En conclusion</b>, l'
              <Term id={"AssuranceVie"} /> reste un excellent outil{" "}
              <b>pour la transmission</b> et la fiscalité long terme, à
              condition de choisir un contrat{" "}
              <b>
                en ligne, sans frais d'entrée, le plus proche possible de 0% de
                frais degestion et investi en ETF
              </b>
              . Ce sont les contrats{" "}
              <b>bancaires chargés et bourrés de fonds "maison"</b> qu'il faut
              fuir, leurs frais annulant la quasi-totalité de l'avantage fiscal.
            </p>
          </InfoBubble>
        </section>

        <section id="av-vs-cto" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Comparatif Assurance Vie vs CTO
          </h2>

          <InfoBubble
            icon={<FaChartLine />}
            title="Que choisir entre Assurance Vie et CTO ?"
            color="text-green-400"
          >
            <p className="leading-relaxed">
              Une fois le <Term id={"PEA"} /> optimisé, le choix se pose souvent
              entre l'
              <Term id={"AssuranceVie"} /> et le <Term id={"CTO"} />. Le CTO
              offre une <b>liberté totale</b> (tous les actifs, frais réduits)
              mais sans avantage fiscal, alors que l'assurance vie offre une{" "}
              <b>fiscalité dégressive</b> et un cadre successoral très
              favorable, au prix de frais et d'un univers d'investissement plus
              encadré.
            </p>

            <div className="mt-4 border border-gray-700 rounded-xl overflow-hidden shadow-sm">
              <table className="min-w-full border border-gray-700 text-sm">
                <thead>
                  <tr className="bg-gray-800 text-gray-200">
                    <th className="px-3 py-2 text-left border-b border-gray-600">
                      Critère
                    </th>
                    <th className="px-3 py-2 text-left border-b border-gray-600">
                      Assurance Vie
                    </th>
                    <th className="px-3 py-2 text-left border-b border-gray-600">
                      CTO
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="px-3 py-2 font-semibold">
                      Fiscalité des gains
                    </td>
                    <td className="px-3 py-2">
                      Avantageuse après 8 ans (abattement annuel de 4 600 € / 9
                      200 € pour un couple).
                    </td>
                    <td className="px-3 py-2">
                      <Term id={"PFU"} /> sur l'ensemble des gains, dès le
                      premier euro.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-3 py-2 font-semibold">Frais</td>
                    <td className="px-3 py-2">
                      Frais de gestion annuels (0,5 à 1 %) + frais des supports.
                    </td>
                    <td className="px-3 py-2">
                      Faibles : courtage à l'achat/vente, pas de frais
                      d'enveloppe.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-3 py-2 font-semibold">
                      Univers d'investissement
                    </td>
                    <td className="px-3 py-2">
                      Fonds euros, unités de compte, ETF sélectionnés par
                      l'assureur.
                    </td>
                    <td className="px-3 py-2">
                      Tout : actions, ETF, obligations, mondial sans
                      restriction.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-3 py-2 font-semibold">Succession</td>
                    <td className="px-3 py-2">
                      Abattement très avantageux de 152 500 € par bénéficiaire
                      (versements avant 70 ans).
                    </td>
                    <td className="px-3 py-2">
                      Intégré à la succession classique, aucun régime de faveur.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ExampleBox>
              <br />
              Hypothèse : <b>100 000 €</b> placés sur un <Term id={"ETF"} />{" "}
              capitalisant à <b>7 %/an brut</b> pendant 20 ans, puis retrait
              total. Une bonne <Term id={"AssuranceVie"} /> facture{" "}
              <b>0,5 %/an</b> de frais de gestion (rendement net 6,5 %/an), le{" "}
              <Term id={"CTO"} /> n'a aucun frais d'enveloppe (7 %/an).
              <div className="mt-3 border border-gray-700 rounded-xl overflow-hidden shadow-sm">
                <table className="min-w-full border border-gray-700 text-sm">
                  <thead>
                    <tr className="bg-gray-800 text-gray-200">
                      <th className="px-3 py-2 text-left border-b border-gray-600">
                        Étape
                      </th>
                      <th className="px-3 py-2 text-right border-b border-gray-600">
                        Assurance Vie
                      </th>
                      <th className="px-3 py-2 text-right border-b border-gray-600">
                        CTO
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2">Versement initial</td>
                      <td className="px-3 py-2 text-right">100 000 €</td>
                      <td className="px-3 py-2 text-right">100 000 €</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2">Valeur brute après 20 ans</td>
                      <td className="px-3 py-2 text-right">352 365 €</td>
                      <td className="px-3 py-2 text-right">386 968 €</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2">Plus-value</td>
                      <td className="px-3 py-2 text-right">252 365 €</td>
                      <td className="px-3 py-2 text-right">286 968 €</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2">
                        Impôt sur le revenu (7,5 % AV après abattement · 12,8 %
                        CTO)
                      </td>
                      <td className="px-3 py-2 text-right">- 18 582 €</td>
                      <td className="px-3 py-2 text-right">- 36 732 €</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2">
                        Prélèvements sociaux (18,6 %)
                      </td>
                      <td className="px-3 py-2 text-right">- 46 940 €</td>
                      <td className="px-3 py-2 text-right">- 53 376 €</td>
                    </tr>
                    <tr className="bg-gray-800/40 font-semibold text-gray-100">
                      <td className="px-3 py-2">Capital net récupéré</td>
                      <td className="px-3 py-2 text-right">286 843 €</td>
                      <td className="px-3 py-2 text-right text-green-400">
                        296 860 €
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ExampleBox>

            <p className="leading-relaxed mt-3">
              Le CTO laisse <b>≈ 10 000 € de plus</b> au bout de 20 ans, alors
              même que l'assurance vie est <b>moins taxée</b> (65 522 € de
              prélèvements contre 90 108 €). L'explication tient aux{" "}
              <b>frais de gestion</b>, 0,5 %/an prélevés chaque année amputent
              le capital de plus de <b>34 000 €</b> avant impôt, soit davantage
              que l'économie d'impôt offerte par l'enveloppe. Au-delà d'environ{" "}
              <b>4 %</b> de rendement annuel, plus l'horizon est long, plus le
              CTO reprend l'avantage pour une sortie de son vivant.
            </p>

            <p className="leading-relaxed mt-3">
              Cependant, en cas de décès, l'assurance vie bénéficie d'un
              abattement de <b>152 500 € par bénéficiaire</b> (versements avant
              70 ans), là où le CTO est intégré à la succession classique. Pour
              transmettre, l'
              <Term id={"AssuranceVie"} /> reprend donc souvent l'avantage, tout
              dépend si l'objectif est de <b>consommer</b> son capital ou de le{" "}
              <b>transmettre</b>.
            </p>

            <p className="leading-relaxed mt-3">
              Attention enfin aux assurances vie « maison » des banques, dont
              les frais empilés (gestion, fonds, produits structurés) érodent
              encore davantage la performance, voir la section ci-dessus.
            </p>
          </InfoBubble>
        </section>

        <section id="pea-vs-plan-111bis" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Comparatif PEA vs Plan 111bis Luxembourgeois (pour les frontaliers)
          </h2>

          <InfoBubble
            icon={<FaChartLine />}
            title="L'article 111bis est-il intéressant pour les frontaliers ?"
            color="text-green-400"
          >
            <p className="leading-relaxed">
              L'article 111bis de la loi luxembourgeoise permet aux salariés
              travaillant au Luxembourg, résidents ou <b>frontaliers</b>, de
              déduire jusqu'à <b>4 500 €/an</b> de leur revenu imposable au
              Luxembourg (depuis janvier 2026, contre 3 200 € auparavant) en
              souscrivant un contrat de prévoyance-vieillesse individuelle. Pour
              un salaire annuel de <b>50 000 €</b>, le taux marginal
              luxembourgeois est de <b>~36 %</b>, ce qui représente un{" "}
              <b>remboursement fiscal de 1 620 €/an</b> pour le versement du
              plafond. Les calculs qui suivent se basent sur ce plafond de 4 500
              € et un remboursement fiscal de 1 620 €, il ne faut donc pas
              oublier que la rentaibilité des plans 111bis augmentera ou
              diminuera selon le salaire et le taux marginal luxembourgeois.
            </p>
            <p className="leading-relaxed mt-2">
              De plus il ne faut pas oublier que le capital est{" "}
              <b>bloqué jusqu'à la retraite</b> (minimum 60 ans, maximum 75
              ans), et le capital récupéré est <b>imposé en France</b> comme une
              pension étrangère (barême <Term id="IR" /> + <Term id="PS" />
              ), contrairement au <Term id="PEA" /> qui ne supporte que les{" "}
              <Term id="PS" /> après 5 ans. Nous comparons donc la rentabilité
              de ces enveloppes ci-dessous.
            </p>

            <div className="mt-4 border border-gray-700 rounded-xl overflow-hidden shadow-sm">
              <table className="min-w-full border border-gray-700 text-sm">
                <thead>
                  <tr className="bg-gray-800 text-gray-200">
                    <th className="px-3 py-2 text-left border-b border-gray-600">
                      Critère
                    </th>
                    <th className="px-3 py-2 text-left border-b border-gray-600">
                      PEA CW8
                    </th>
                    <th className="px-3 py-2 text-left border-b border-gray-600">
                      111bis CAW (Foyer Horizon)
                    </th>
                    <th className="px-3 py-2 text-left border-b border-gray-600">
                      111bis Baloise (ETF World)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="px-3 py-2 font-semibold">Frais d'entrée</td>
                    <td className="px-3 py-2 text-green-400">0 %</td>
                    <td className="px-3 py-2">2 % (Foyer)</td>
                    <td className="px-3 py-2">2 % (négocié - de base 4,5 %)</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-3 py-2 font-semibold">
                      Frais annuels contrat
                    </td>
                    <td className="px-3 py-2 text-green-400">0 %</td>
                    <td className="px-3 py-2">1,2 % (Foyer)</td>
                    <td className="px-3 py-2">1,2 %</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-3 py-2 font-semibold">Frais du fonds</td>
                    <td className="px-3 py-2 text-green-400">0,17 % (CW8)</td>
                    <td className="px-3 py-2 text-red-400">
                      1,11 % (Dynamic C SICAV)
                    </td>
                    <td className="px-3 py-2">0,17 % (CW8)</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-3 py-2 font-semibold">
                      Total frais annuels
                    </td>
                    <td className="px-3 py-2 text-green-400">~0,2 %</td>
                    <td className="px-3 py-2 text-red-400">~2,3 %</td>
                    <td className="px-3 py-2">~1,4 %</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-3 py-2 font-semibold">
                      Rendement net estimé
                    </td>
                    <td className="px-3 py-2 text-green-400">
                      ~11,5 % (moy. 10 ans CW8)
                    </td>
                    <td className="px-3 py-2 text-red-400">~7,1 %</td>
                    <td className="px-3 py-2">~10,3 %</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-3 py-2 font-semibold">Disponibilité</td>
                    <td className="px-3 py-2 text-green-400">
                      Après 5 ans (sans clôture)
                    </td>
                    <td className="px-3 py-2 text-red-400">
                      Bloqué jusqu'à 60-75 ans
                    </td>
                    <td className="px-3 py-2 text-red-400">
                      Bloqué jusqu'à 60-75 ans
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-3 py-2 font-semibold">
                      Fiscalité sortie (gains)
                    </td>
                    <td className="px-3 py-2 text-green-400">
                      18,6 % (PS uniquement)
                    </td>
                    <td className="px-3 py-2 text-red-400">
                      ~25 % estimés (IR + PS en France)
                    </td>
                    <td className="px-3 py-2 text-red-400">
                      ~25 % estimés (IR + PS en France)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold">
                      Déduction fiscale à l'entrée
                    </td>
                    <td className="px-3 py-2">Non</td>
                    <td className="px-3 py-2 text-green-400">
                      1 620 €/an récupérés
                    </td>
                    <td className="px-3 py-2 text-green-400">
                      1 620 €/an récupérés
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="leading-relaxed mt-3">
              Le Dynamic C de CapitalatWork est un fonds{" "}
              <b>mixte actions/obligations</b>. Sur 10 ans, il affiche{" "}
              <b>+8,3 % annualisé net de frais</b>, auquel il faut retrancher la
              surcouche Foyer de 1,2 %/an, soit environ <b>7,1 % net global</b>.
              Il est le plan de foyer (parmis équilibré, dynamique, croissance)
              le plus performant sur 10 ans. Pour le PEA nous prenons le CW8, un
              ETF World capitalisant, qui a affiché{" "}
              <b>+11,7 % annualisé brut</b> sur 10 ans, auquel il faut
              retrancher le TER de 0,17 %, soit environ <b>11,5 % net global</b>
              .
            </p>

            <ExampleBox>
              <ul className="text-sm text-gray-300 space-y-1 list-none">
                <li>
                  <span className="text-gray-400">Versement :</span>{" "}
                  <b>4 500 €/an</b> (plafond 111bis depuis 2026)
                </li>
                <li>
                  <span className="text-gray-400">Remboursement fiscal :</span>{" "}
                  <b>1 620 €/an</b> (TMI luxembourgeois ~36 %, salaire de 50 000
                  € annuel)
                </li>
                <li>
                  <span className="text-gray-400">
                    Colonne "avec impôt en PEA" :
                  </span>{" "}
                  le remboursement est réinvesti chaque année dans un PEA CW8,
                  coût net <b>2 880 €/an</b>
                </li>
                <li>
                  <span className="text-gray-400">Colonne "seul" :</span> le
                  remboursement est gardé en cash, coût net <b>2 880 €/an</b>
                </li>
                <li>
                  <span className="text-gray-400">Rendement CW8 :</span> 11,7 %
                  brut (moy. 10 ans), 0,17 % TER = <b>11,5 % net</b>
                </li>
                <li>
                  <span className="text-gray-400">Fiscalité sortie :</span> 18,6
                  % de PS pour le PEA, ~25 % pour les 111bis
                </li>
              </ul>

              <div className="mt-3 border border-gray-700 rounded-xl overflow-x-auto shadow-sm">
                <table className="min-w-full border border-gray-700 text-sm">
                  <thead>
                    <tr className="bg-gray-800 text-gray-200">
                      <th
                        className="px-3 py-2 text-left border-b border-r border-gray-600"
                        rowSpan={2}
                      >
                        Horizon
                      </th>
                      <th
                        className="px-3 py-2 text-right border-b border-r border-gray-600"
                        rowSpan={2}
                      >
                        PEA CW8
                      </th>
                      <th
                        className="px-3 py-2 text-center border-b border-r border-gray-600"
                        colSpan={2}
                      >
                        111bis CAW (Foyer Horizon)
                      </th>
                      <th
                        className="px-3 py-2 text-center border-b border-gray-600"
                        colSpan={2}
                      >
                        111bis Baloise (CW8)
                      </th>
                    </tr>
                    <tr className="bg-gray-800 text-gray-400 text-xs">
                      <th className="px-3 py-1 text-right border-b border-gray-600">
                        avec impôt en PEA
                      </th>
                      <th className="px-3 py-1 text-right border-b border-r border-gray-600">
                        seul
                      </th>
                      <th className="px-3 py-1 text-right border-b border-gray-600">
                        avec impôt en PEA
                      </th>
                      <th className="px-3 py-1 text-right border-b border-gray-600">
                        seul
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2 font-semibold border-r border-gray-700">
                        10 ans
                      </td>
                      <td className="px-3 py-2 text-right border-r border-gray-700">
                        71 200 €
                      </td>
                      <td className="px-3 py-2 text-right">82 500 €</td>
                      <td className="px-3 py-2 text-right border-r border-gray-700">
                        56 900 €
                      </td>
                      <td className="px-3 py-2 text-right text-green-400">
                        90 100 €
                      </td>
                      <td className="px-3 py-2 text-right">64 500 €</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-3 py-2 font-semibold border-r border-gray-700">
                        20 ans
                      </td>
                      <td className="px-3 py-2 text-right border-r border-gray-700">
                        266 400 €
                      </td>
                      <td className="px-3 py-2 text-right">255 000 €</td>
                      <td className="px-3 py-2 text-right border-r border-gray-700">
                        159 100 €
                      </td>
                      <td className="px-3 py-2 text-right text-green-400">
                        314 000 €
                      </td>
                      <td className="px-3 py-2 text-right">218 100 €</td>
                    </tr>
                    <tr className="bg-gray-800/40 font-semibold text-gray-100">
                      <td className="px-3 py-2 border-r border-gray-700">
                        40 ans
                      </td>
                      <td className="px-3 py-2 text-right border-r border-gray-700">
                        2 493 100 €
                      </td>
                      <td className="px-3 py-2 text-right">1 619 300 €</td>
                      <td className="px-3 py-2 text-right border-r border-gray-700">
                        721 600 €
                      </td>
                      <td className="px-3 py-2 text-right text-green-400">
                        2 530 300 €
                      </td>
                      <td className="px-3 py-2 text-right">1 632 700 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <ul className="mt-3 text-sm space-y-2 list-none">
                <li>
                  <b>Réinvestir l'impôt en PEA est toujours optimal</b>, la
                  colonne "avec impôt en PEA" surpasse systématiquement la
                  colonne "seul" pour les deux 111bis. Donc si l'on part dur le
                  principe que l'on consome l'argent récupéré de l'impôt, le PEA
                  reste toujours plus performant que le 111bis en terme
                  d'investissement long terme.
                </li>
                <li>
                  <b>Baloise CW8 + PEA gagne à tous les horizons</b>, y compris
                  à 40 ans (2 530 300 € vs 2 493 100 € pour le PEA seul).
                  L'explication, en effet, grâce au levier fiscal, on investit
                  réellement 5 670 €/an (4 500 € en Baloise + 1 620 € de
                  remboursement en PEA).
                </li>
                <li>
                  <b>Le PEA seul reste devant à effort égal</b>, comparé à 2 880
                  €/an dans un PEA (même sortie de caisse). Mais il conserve
                  l'avantage de la liquidité, contrairement aux 111bis bloqués
                  jusqu'à 60-75 ans.
                </li>
                <li>
                  <b>Le CAW Dynamic C est le moins performant</b> des deux
                  111bis à tous les horizons, frais Foyer 1,2 %/an empilés sur
                  un fonds mixte à 7,1 % net, contre 10,3 % net pour le Baloise
                  sur CW8 pur. Les autres plans Foyer (équilibré, croissance)
                  sont encore moins performants.
                </li>
              </ul>
            </ExampleBox>

            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-300 mb-2">
                Hypothèses simplificatrices qui pourrait changer les résultats
              </p>
              <ul className="text-sm text-gray-400 space-y-2 list-none">
                <li>
                  <b className="text-gray-200">Rendement CW8 exceptionnel :</b>{" "}
                  Les 11,7 % annualisés sur 10 ans reflètent une décennie
                  particulièrement favorable. La moyenne historique longue durée
                  du MSCI World en EUR est plutôt autour de <b>7-8 %/an</b>. À
                  un rendement plus faible, l'avantage fiscal du 111bis pèse
                  plus lourd.
                </li>
                <li>
                  <b className="text-gray-200">Plafond PEA à 150 000 :</b> À 4
                  500 €/an, le plafond est atteint au bout de 33 ans. Les 7
                  années restantes dans la simulation à 40 ans ne peuvent plus
                  recevoir de nouveaux versements. Les 111bis n'ont pas ce
                  plafond en versements cumulés.
                </li>
                <li>
                  <b className="text-gray-200">
                    Fiscalité de sortie du 111bis estimée à 25 % :
                  </b>{" "}
                  Ce taux combiné (IR retraite + PS) peut varier fortement, si
                  vos revenus à la retraite sont élevés, le taux marginal peut
                  dépasser 30 %, pénalisant davantage le 111bis. A l'inverse,
                  des revenus modestes à la retraite abaisseraient ce taux.
                </li>
                <li>
                  <b className="text-gray-200">TMI fixe à 36 % :</b> Une
                  évolution de salaire, un changement de classe fiscale ou une
                  réforme du barème luxembourgeois modifient directement le
                  montant remboursé et donc tout l'avantage du 111bis.
                </li>
                <li>
                  <b className="text-gray-200">
                    Blocage du 111bis jusqu'à 60-75 ans :
                  </b>{" "}
                  Contrairement au PEA (accessible sans clôture après 5 ans), le
                  capital du 111bis est totalement immobilisé. En cas de besoin
                  de liquidité ou d'arrêt de l'activité au Luxembourg, cette
                  contrainte est majeure.
                </li>
                <li>
                  <b className="text-gray-200">
                    Frais Baloise négociés à 2 % :
                  </b>{" "}
                  Le tarif officiel est de 4,5 %. Sans négociation. Il faut
                  systématiquement négocier ces frais d'entrée avant de
                  souscrire.
                </li>
                <li>
                  <b className="text-gray-200">
                    Emploi continu au Luxembourg jusqu'à la retraite :
                  </b>{" "}
                  Le 111bis n'est alimentable que tant que vous payez des impôts
                  au Luxembourg. Un départ de la frontière ou une perte d'emploi
                  interrompt la déductibilité.
                </li>
              </ul>
            </div>

            <p className="leading-relaxed mt-4">
              Ces chiffres sont des ordres de grandeur basés sur des hypothèses
              moyennes. La simulation idéale est celle que vous ferez avec{" "}
              <b>vos propres paramètres</b>, votre salaire exact, votre TMI
              réel, votre horizon de retraite, votre taux marginal prévu à la
              sortie. Ce qui est certain, en revanche, c'est qu'{" "}
              <b>
                investir, quelle que soit l'enveloppe choisie, est toujours
                préférable à ne rien faire
              </b>
              . L'inaction a un coût lui aussi, celui de l'inflation et des
              opportunités manquées.
            </p>
          </InfoBubble>

          <div className="mt-4 border-l-2 border-green-600 pl-4 py-1">
            <p className="text-xs font-semibold text-green-400 mb-1">
              Outil de simulation à venir
            </p>
            <p className="text-xs text-gray-400">
              Un simulateur interactif permettant de comparer PEA, assurance
              vie, CTO, PER et plan 111bis selon votre situation personnelle
              (salaire, TMI, horizon, frais négociés) sera disponible dans la
              section Outils du site. Sa mise en place demande du temps pour
              être correcte et sans erreur de calcul, mais il est prévu.
            </p>
          </div>
        </section>
      </Container>
    </PageLayout>
  );
};

export default HowToInvest;
