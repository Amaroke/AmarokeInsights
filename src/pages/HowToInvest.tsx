import React from "react";
import { FaChartLine, FaExclamationTriangle } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
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
              dividendes) sont <b>exonérés d'impôt sur le revenu</b>. Seuls les
              prélèvements sociaux (18,6 %) restent dus au moment du retrait.
            </p>

            <p className="leading-relaxed mt-2">
              À titre de comparaison, un <Term id={"CTO"} /> est soumis au{" "}
              <Term id={"PFU"} /> (« flat tax ») de 31,4 % sur l'ensemble des
              gains. Sur un horizon long, l'écart de fiscalité se traduit par
              une différence de capital final très significative grâce à l'effet
              des intérêts composés.
            </p>

            <p className="leading-relaxed mt-4">
              <b>Exemple chiffré : même versement, même performance</b>
              <br />
              Prenons un versement unique de <b>10 000 €</b> investi sur un{" "}
              <Term id={"ETF"} /> capitalisant, à <b>+7 %/an pendant 20 ans</b>.
              Le contenu et la performance sont strictement identiques, seule la{" "}
              <b>fiscalité à la sortie</b> change selon l'enveloppe et la durée
              de détention.
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
                    <td className="px-3 py-2">Impôt sur le revenu (12,8 %)</td>
                    <td className="px-3 py-2 text-right text-green-400">
                      0 € (exonéré)
                    </td>
                    <td className="px-3 py-2 text-right">- 3 673 €</td>
                    <td className="px-3 py-2 text-right">- 3 673 €</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-3 py-2">Prélèvements sociaux (18,6 %)</td>
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

            <p className="leading-relaxed mt-3">
              À performance et contenu <b>identiques</b>, le PEA conservé plus
              de 5 ans permet environ <b>3 673 € de gains supplémentaires</b>,
              soit l'intégralité de l'impôt sur le revenu (12,8 % de la
              plus-value) économisé et donc environ <b>+12 % de gain net</b>,
              uniquement grâce à l'enveloppe. En revanche, un retrait{" "}
              <b>avant 5 ans</b> est taxé comme un CTO (<Term id={"PFU"} /> de
              31,4 %) : l'avantage disparaît et le plan est clôturé.
            </p>
          </InfoBubble>
        </section>

        <section id="pea-vs-plan-111bis" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Comparatif PEA vs Plan 111bis Luxembourgeois (pour les frontaliers)
          </h2>
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
                      <Term id={"PFU"} /> de 31,4 % sur l'ensemble des gains,
                      dès le premier euro.
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
                      Abattement de 152 500 € par bénéficiaire (versements avant
                      70 ans) : très avantageux.
                    </td>
                    <td className="px-3 py-2">
                      Intégré à la succession classique, aucun régime de faveur.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="leading-relaxed mt-4">
              <b>Exemple chiffré : 100 000 € sur 20 ans, même ETF</b>
              <br />
              Hypothèse : <b>100 000 €</b> placés sur un <Term id={"ETF"} />{" "}
              capitalisant à <b>7 %/an brut</b> pendant 20 ans, puis retrait
              total. Une bonne <Term id={"AssuranceVie"} /> facture{" "}
              <b>0,5 %/an</b> de frais de gestion (rendement net 6,5 %/an), le{" "}
              <Term id={"CTO"} /> n'a aucun frais d'enveloppe (7 %/an).
            </p>

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
                    <td className="px-3 py-2">Prélèvements sociaux (18,6 %)</td>
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

            <p className="leading-relaxed mt-3">
              Résultat : le CTO laisse <b>≈ 10 000 € de plus</b> au bout de 20
              ans, alors même que l'assurance vie est <b>moins taxée</b> (65 522
              € de prélèvements contre 90 108 €). L'explication tient aux{" "}
              <b>frais de gestion</b> : 0,5 %/an prélevés chaque année amputent
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
              <Term id={"AssuranceVie"} /> reprend donc souvent l'avantage :
              tout dépend si l'objectif est de <b>consommer</b> son capital ou
              de le <b>transmettre</b>.
            </p>

            <p className="leading-relaxed mt-3">
              Attention enfin aux assurances vie « maison » des banques, dont
              les frais empilés (gestion, fonds, produits structurés) érodent
              encore davantage la performance, voir la section ci-dessous.
            </p>
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
              <b>L'empilement de frais : le défaut majeur</b>
              <br />
              C'est le premier piège d'une AV : chaque couche de frais paraît
              anodine, mais leur accumulation, prélevée{" "}
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
              <b>Les unités de compte : là où se cache le vrai coût.</b> Les{" "}
              <b>UC</b> sont présentées comme « le moteur de performance » du
              contrat, mais c'est souvent là que se joue le conflit d'intérêts.
              L'assureur et le distributeur touchent des <b>rétrocommissions</b>{" "}
              : une part des frais du fonds leur est reversée chaque année. Ils
              ont donc intérêt à proposer les fonds{" "}
              <b>les plus chargés en frais</b>, pas les plus performants.
              Résultat : des <b>fonds « maison »</b> qui battent rarement un
              simple ETF indiciel, mais dont les frais empilés (enveloppe +
              fonds) dépassent fréquemment 2 % par an, sans transparence réelle
              pour l'épargnant.
            </p>

            <p className="leading-relaxed mt-3">
              <b>Au final, qui gagne quoi ?</b> Prenons <b>50 000 €</b> placés
              20 ans sur un marché à <b>7 %/an</b>, dans un contrat bancaire
              facturant <b>2 %/an</b> de frais (gestion + UC). Voici ce que
              chacun retire réellement de l'opération :
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
                    <td className="px-3 py-2 font-semibold">Risque supporté</td>
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

            <p className="leading-relaxed mt-3">
              Autrement dit : vous apportez les <b>50 000 €</b> et supportez{" "}
              <b>tout le risque</b> pour <b>≈ 79 000 € de gain net</b>, pendant
              que la banque encaisse <b>≈ 35 000 € de frais</b> sans aucun
              risque, soit <b>≈ 31 % de l'argent tiré de l'opération</b> capté
              par celle qui ne prend aucun risque.
            </p>

            <p className="leading-relaxed mt-3">
              <b>Les produits structurés glissés dans le contrat.</b> Beaucoup
              de contrats bancaires logent des <b>produits structurés</b>,
              vendus comme « à capital protégé ». En réalité, cette protection
              est financée par un <b>plafonnement des gains</b> et des frais de
              structuration : plus la « sécurité » affichée est élevée, plus le
              rendement attendu est réduit. Noyés dans l'enveloppe et illisibles
              pour l'épargnant, ils servent surtout la marge de la banque.
            </p>

            <p className="leading-relaxed mt-3">
              <b>Manque de transparence</b> : il est volontairement difficile de
              connaître le total réel des frais. <br />
              <b>Fonds euros en déclin</b> : capital garanti mais rendement
              souvent inférieur à l'inflation, et accès parfois conditionné à un
              % d'UC.
              <br />
              <b>Liquidité relative</b> : l'argent reste accessible mais un
              rachat peut prendre plusieurs jours à semaines.
              <br />
              <b>Aucun avantage fiscal avant 8 ans</b> : avant ce cap, les gains
              sont taxés comme un <Term id={"CTO"} />, l'intérêt ne joue donc
              qu'à long terme.
              <br />
              <b>Complexité entretenue</b> : la multiplication des couches sert
              aussi à justifier des frais et à fidéliser le client.
            </p>

            <p className="leading-relaxed mt-3">
              <b>En clair :</b> l'
              <Term id={"AssuranceVie"} /> reste un excellent outil{" "}
              <b>pour la transmission</b> et la fiscalité long terme, à
              condition de choisir un contrat{" "}
              <b>
                en ligne, sans frais d'entrée, à 0,5 % de gestion et investi en
                ETF
              </b>
              . Ce sont les contrats{" "}
              <b>bancaires chargés et bourrés de fonds "maison"</b> qu'il faut
              fuir : leurs frais annulent la quasi-totalité de l'avantage
              fiscal.
            </p>
          </InfoBubble>
        </section>
      </Container>
    </PageLayout>
  );
};

export default HowToInvest;
