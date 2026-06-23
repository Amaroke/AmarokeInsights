import React from "react";
import { FaChartLine, FaExclamationTriangle } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import PageLayout from "../components/PageLayout";

import "@xyflow/react/dist/style.css";
import InvestmentTree from "../components/InvestmentTree";

const HowToInvest: React.FC = () => {
  return (
    <PageLayout
      title="Comment investir ?"
      description="Une méthode pas à pas pour décider où placer son argent selon son horizon et son appétence au risque."
    >
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-6 space-y-6 md:mb-0 mb-24">
        <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">
          Comment investir ?
        </h2>
        <InfoBubble
          icon={<FaExclamationTriangle />}
          title="Produits structurés et logique bancaire"
          color="text-red-400"
        >
          <p className="leading-relaxed">
            Les produits structurés vendus par les banques sont souvent
            présentés comme “sans risque de perte au-delà d'un certain seuil” ou
            capables de “protéger le capital”. En réalité, cette protection est
            construite via un mélange d'<b>obligations</b> et de{" "}
            <b>produits dérivés</b>, et elle se paie directement sur le
            rendement potentiel.
            <br />
            Plus la “sécurité” affichée est élevée, plus la performance attendue
            est généralement réduite une fois les frais et la structuration
            intégrés. Ces produits sont très souvent distribués via des contrats
            d'
            <b>assurance vie</b>, ce qui les rend encore moins lisibles pour
            l'investisseur particulier, car ils sont noyés dans une enveloppe
            globale avec des frais additionnels.
          </p>

          <p className="leading-relaxed mt-2">
            Exemple concret : une assurance vie “profil équilibré” proposée par
            une grande banque comme <b>BNP Paribas</b> ou une banque similaire
            est souvent composée de plusieurs blocs :
          </p>

          <p className="leading-relaxed mb-2">
            <b>Fonds euros (environ 40 à 60 %)</b> : partie “sécurisée” investie
            surtout en obligations. Capital garanti mais rendement faible
            (souvent autour de 2 à 3 % brut selon les années). Dans les faits,
            le rendement est souvent proche ou inférieur à l'inflation récente.
          </p>

          <p className="leading-relaxed mb-2">
            <b>Unités de compte actions (environ 20 à 40 %)</b> : exposition aux
            marchés actions via des fonds internes ou externes. C'est la partie
            qui porte la performance, mais elle est réduite par les frais de
            l'assurance vie et ceux des fonds sous-jacents.
          </p>

          <p className="leading-relaxed mb-2">
            <b>Produits structurés (environ 10 à 20 %)</b> : produits complexes
            liés à des indices (CAC 40, Euro Stoxx 50, MSCI World). Ils
            affichent souvent une “protection partielle du capital” (ex : 90 %
            ou 95 %). Cette protection est en réalité financée par une
            limitation des gains (plafonds de performance, coupons
            conditionnels) et des frais de structuration.
          </p>

          <p className="leading-relaxed mb-2">
            <b>Frais globaux</b> : frais de gestion de l'assurance vie (0,6 à 1
            %), frais des fonds, et frais implicites des produits structurés.
            L'ensemble réduit fortement la performance finale par rapport à une
            allocation simple équivalente (ETF + obligations).
          </p>

          <p className="leading-relaxed mb-2">
            Au final, tu obtiens une exposition aux marchés assez proche d'une
            allocation simple, mais avec plus de complexité, plus de couches
            d'intermédiaires, et une performance souvent plus contrainte.
          </p>

          <p className="leading-relaxed">
            Le conseiller bancaire agit dans un cadre <b>commercial</b> et
            distribue les produits de sa banque, conçus aussi pour générer de la
            marge. Cela peut créer un décalage entre l'intérêt du client et
            celui de l'établissement, surtout sur les produits complexes.
          </p>
        </InfoBubble>

        <InfoBubble
          icon={<FaChartLine />}
          title="Organigramme d'investissement"
          color="text-green-400"
        >
          Cet organigramme représente la manière dont j'organiserais mes
          décisions d'investissement avec mes connaissances actuelles. Il ne
          s'agit pas d'une règle absolue, mais d'une approche personnelle basée
          sur ce que j'ai appris sur la gestion du risque et la structuration
          d'un capital.
          <InvestmentTree />
        </InfoBubble>
      </div>
    </PageLayout>
  );
};

export default HowToInvest;
