import React from "react";
import {
  FaChartLine,
  FaLandmark,
  FaCubes,
  FaHome,
  FaGem,
  FaCube,
} from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";

const Investments: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <>
      <div className="flex h-screen text-gray-300 bg-[#12121b]">
        <main
          className={`flex-1 overflow-auto pt-16 md:mt-16 md:pt-0 pb-8 transition-all duration-300 ${
            isOpen ? "md:ml-64" : "md:ml-0"
          }`}
        >
          <div className="max-w-6xl mx-auto px-2 md:px-4 py-6">
            <section id="what-is-invest" className="scroll-mt-22 mb-12">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Qu'est-ce qu'investir ?
              </h2>

              <div className="space-y-4">
                <InfoBubble
                  icon={<FaGem />}
                  title="Pourquoi investir ?"
                  color="text-blue-400"
                >
                  <p>
                    Investir permet de protéger son pouvoir d’achat contre
                    l’inflation, de préparer ses projets futurs (achat
                    immobilier, retraite, indépendance financière), et de
                    soutenir l’économie réelle en finançant des entreprises et
                    des innovations. Ce n’est pas un moyen de s’enrichir
                    rapidement, mais une stratégie à long terme pour faire
                    fructifier son capital.
                  </p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaCubes />}
                  title="Les trois dimensions d’un investissement"
                  color="text-blue-400"
                >
                  <p>
                    Chaque investissement se mesure selon trois critères :
                    <strong> le rendement </strong> (le gain espéré),
                    <strong> le risque </strong> (la possibilité de perte), et{" "}
                    <strong> la liquidité </strong> (la facilité à récupérer son
                    argent). Aucun placement n’excelle sur les trois à la fois.
                    <br />
                    <strong>Exemples :</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>
                        <strong>Livret A :</strong> très sûr et liquide (on peut
                        retirer son argent quand on le souhaite, il n'est pas
                        bloqué), mais rendement faible.
                      </li>
                      <li>
                        <strong>Actions :</strong> rendement potentiellement
                        élevé, mais risque important et valeur qui peut beaucoup
                        varier.
                      </li>
                      <li>
                        <strong>Immobilier :</strong> rendement moyen à bon,
                        risque modéré (selon le marché), mais liquidité faible
                        (revente longue). Risque différent de celui des actions
                        ou d'autres actifs financiers.
                      </li>
                    </ul>
                  </p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Le couple rendement / risque, comment choisir ?"
                  color="text-blue-400"
                >
                  <p>
                    Tout placement offre un rendement potentiel mais implique
                    également un risque de perte. Plus le rendement attendu est
                    élevé, plus le risque l’est aussi. L’objectif est de trouver
                    un équilibre adapté au profil de l’investisseur et à
                    l’horizon de placement.
                  </p>

                  <p>
                    Avant d’investir, il est nécessaire de définir l’objectif,
                    l’horizon de temps et le profil de risque. Ces trois
                    éléments servent de guide pour sélectionner les placements
                    appropriés.
                  </p>

                  <ul className="list-disc list-inside mb-3 space-y-1">
                    <li>
                      <strong>Objectif :</strong> par exemple retraite, projet
                      spécifique, achat d'une résidence ou constitution de
                      patrimoine
                    </li>
                    <li>
                      <strong>Horizon :</strong> court, moyen ou long terme
                    </li>
                    <li>
                      <strong>Profil de risque :</strong> prudent, équilibré ou
                      dynamique
                    </li>
                  </ul>

                  <p>
                    Il est important de ne pas rechercher un enrichissement
                    rapide et d’éviter que les décisions soient guidées par les
                    émotions. Par exemple, les investisseurs débutants vendent
                    souvent leurs actions au plus bas lors d’une crise, pour
                    constater ensuite que le marché a rebondi et que la reprise
                    a été manquée.
                  </p>

                  <p>
                    La patience, la discipline et la diversification sont les
                    meilleures pratiques pour limiter les risques. Il est
                    important de noter que l’investissement n’est pas recommandé
                    pour les personnes sensibles aux émotions ou qui craignent
                    la perte de capital. Pour ceux qui souhaitent minimiser tout
                    risque, il existe des placements à capital garanti, comme
                    les livrets ou les fonds euros en assurance-vie. Leur
                    rendement est faible, mais le capital est sécurisé.
                  </p>

                  <p>
                    Les sections suivantes, à l'image de celles de la page
                    précédente sur les types de compte, détaillent les
                    différents types de placements, afin de permettre des
                    décisions éclairées et adaptées à votre situation.
                    Attention, chaque investissement n'est pas disponible dans
                    tous les types de compte, ce sont deux choix distincts à
                    faire.
                  </p>
                </InfoBubble>
              </div>
            </section>

            <section id="stocks" className="scroll-mt-22 mb-12">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Actions, ETF, OPCVM, Obligations
              </h2>

              <div className="space-y-4">
                <InfoBubble
                  icon={<FaChartLine />}
                  title="Les actions"
                  color="text-blue-400"
                >
                  <p>
                    Les <strong>actions</strong> sont des titres financiers
                    représentant une part du capital d'une entreprise. Détenir
                    une action signifie devenir copropriétaire et bénéficier de
                    droits comme :
                  </p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Droit de vote lors des assemblées générales.</li>
                    <li>
                      Droit de percevoir des dividendes (part des bénéfices).
                    </li>
                    <li>
                      Droit à l’information sur les comptes et la stratégie de
                      l’entreprise.
                    </li>
                  </ul>
                  <p>
                    Les actions dites de préférences peuvent octroyer
                    d'avantages de droits. De plus posséder des actions permet
                    de s'exposer à de potentielles plus-values si le cours de
                    l'action augmente.
                  </p>
                  <p>
                    Il existe les actions cotées et les actions non cotées. Les
                    actions cotées sont négociées sur des marchés boursiers
                    comme Euronext Paris. Elles sont liquides, ce qui permet de
                    les acheter ou de les revendre facilement. Les actions non
                    cotées, émises par des PME ou des TPE, ne sont pas négociées
                    en bourse. Elles sont moins liquides et plus risquées, et
                    leur revente peut être difficile voire impossible. Les
                    actions peuvent être au porteur ou nominatives. Les actions
                    au porteur ne permettent pas d’identifier l’actionnaire
                    auprès de la société, tandis que les actions nominatives
                    identifient l’actionnaire, qui peut bénéficier d’avantages
                    supplémentaires.
                  </p>
                  <h3 className="font-semibold mt-4">Où acheter et vendre ?</h3>
                  <p>
                    Les actions s’échangent sur une{" "}
                    <strong>place de cotation</strong>, principalement en
                    bourse. En France, la plus connue est{" "}
                    <strong>NYSE Euronext Paris</strong>. Il est aussi possible,
                    dans certains cas, de négocier <strong>de gré à gré</strong>{" "}
                    (hors bourse).
                    <p>
                      Pour reconnaitre une action cotée et ainsi pouvoir
                      l'acheter, on se base sur deux éléments principaux : son{" "}
                      <strong>nom</strong>, qui correspond généralement au nom
                      de la société émettrice, et son <strong>ticker</strong>,
                      un code unique utilisé sur les marchés financiers pour
                      identifier l’action. Le ticker facilite la recherche et le
                      suivi de l’action dans les plateformes de trading ou les
                      journaux financiers. Par exemple les actions Christian
                      Dior, LVMH et Total Energies ont pour tickers respectifs :{" "}
                      <strong>CDI</strong>, <strong>MC</strong> et{" "}
                      <strong>TTE</strong>.
                    </p>
                  </p>
                  <h3 className="font-semibold mt-4">
                    Quand passer vos ordres ?
                  </h3>
                  <p>
                    Les ordres sont centralisés sur le système de la bourse. Les
                    actions les plus liquides sont cotées en continu de 9h à
                    17h40 (pour la bourse de Paris). Les autres valeurs sont
                    échangées via des
                    <strong>fixing</strong> à horaires fixes : 11h30 et 16h30
                    (ou 15h00 pour le marché libre, non réglementé,
                    principalement utilisé par des PME). Chaque marché financier
                    dans le monde possède ses propres horaires d’ouverture et de
                    fermeture selon son fuseau horaire.
                  </p>

                  <h3 className="font-semibold mt-4">
                    Comment acheter ou vendre ?
                  </h3>
                  <p>
                    Les particuliers passent par un intermédiaire financier
                    (courtier, banque, plateforme), via un{" "}
                    <strong>compte-titres</strong> ou un <strong>PEA</strong>.
                    L’intermédiaire transmet l’ordre au marché, avec des
                    services et coûts propres à chaque prestataire.
                  </p>
                  <h3 className="font-semibold mt-4">
                    Intérêts pour les entreprises et risques
                  </h3>
                  <p>
                    Pour l’entreprise, les actionnaires apportent des fonds pour
                    financer la croissance et les investissements.
                  </p>
                  <p>
                    Les risques incluent la perte totale du capital si la
                    société fait faillite, la fluctuation du cours selon les
                    résultats et la politique de dividendes, et des différences
                    de risques selon les sociétés et les périodes. Les actions
                    non cotées présentent un risque de liquidité important.
                  </p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Les ETF (Trackers)"
                  color="text-blue-400"
                >
                  <p>
                    Un ETF (Exchange Traded Funds), ou tracker, est un produit
                    financier négocié en Bourse qui réplique la performance d’un
                    indice ou d’un panier d’actions. Il permet d’accéder à un
                    portefeuille diversifié en une seule transaction, comme si
                    vous achetiez toutes les actions de l’indice. Il s'agit d'un
                    type d'ETP (Exchange Traded Products).
                  </p>

                  <p>
                    Les ETF se négocient et s'achètent comme des actions, leur
                    prix varie en continu selon l’offre et la demande. Ils
                    peuvent être standard (suivi passif d’un indice comme le CAC
                    40 par exemple) ou complexes (effet de levier, inverse,
                    matières premières, stratégies sophistiquées). Le prix d’un
                    ETF dépend de sa valeur liquidative, calculée à partir du
                    portefeuille qu’il réplique, et de la valeur de marché, qui
                    fluctue selon l’offre et la demande. Des acteurs comme les
                    émetteurs ou arbitragistes assurent la liquidité et veillent
                    à ce que le prix reste proche de la valeur réelle du panier
                    d’actions.
                  </p>

                  <p>
                    Les noms d’ETF contiennent souvent des informations
                    importantes sur le sous-jacent, la stratégie et la fiscalité
                    du produit. Comprendre ces mots-clés permet de savoir
                    exactement ce que vous achetez.
                  </p>
                  <p>
                    Exemple :{" "}
                    <strong>Amundi MSCI World Swap (Acc) UCITS ETF</strong>
                  </p>

                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <strong>Amundi</strong> : émetteur du fonds, responsable
                      de sa création et de sa gestion opérationnelle. C’est
                      l’entité qui met le produit sur le marché et en assure le
                      suivi.
                    </li>
                    <li>
                      <strong>MSCI World</strong> : indique l’indice que l’ETF
                      réplique. Ici, il suit l’indice mondial MSCI World,
                      composé d’actions de pays développés.
                    </li>
                    <li>
                      <strong>Swap</strong> : veut dire que l’ETF ne détient pas
                      directement les actions de l’indice. Grâce à un accord
                      (swap) avec une banque, il reproduit la même performance.
                      C’est ce mécanisme qui permet d’accéder à des indices
                      américains tout en restant éligible au PEA.
                    </li>
                    <li>
                      <strong>UCITS</strong> : montre que l’ETF respecte la
                      réglementation européenne sur les fonds d’investissement,
                      garantissant un cadre de sécurité et de transparence.
                    </li>
                    <li>
                      <strong>Acc (Accumulation)</strong> : signifie que les
                      dividendes générés par les actions du panier sont
                      réinvestis automatiquement dans l’ETF, au lieu d’être
                      versés aux investisseurs.
                    </li>
                  </ul>

                  <p>
                    D’autres mots-clés courants, <strong>Dist</strong> pour
                    distributif (dividendes versés), <strong>LEVERAGE</strong>{" "}
                    pour ETF à effet de levier, <strong>INVERSE</strong> pour
                    ETF inversé, ou encore la mention d’un secteur ou d’une
                    région spécifique (exemple, Emerging Markets pour les pays
                    émergents). Certains portent également la mention{" "}
                    <strong>ESG</strong> (environnementaux, sociaux et de
                    gouvernance). Sans oublier l'émetteur, qui peut être Amundi,
                    Lyxor, iShares, etc.
                  </p>

                  <p>
                    Les ETF impliquent des frais, principalement des frais de
                    gestion annuels prélevés directement sur le fonds. Ces frais
                    couvrent la gestion, l’administration et les coûts
                    opérationnels du fonds. Les coûts de courtage pour l’achat
                    et la vente sont similaires à ceux des actions et varient
                    selon le courtier. Les ETF complexes, comme ceux à effet de
                    levier, inversés ou sur des matières premières, ont
                    généralement des frais plus élevés en raison de la
                    complexité de leur gestion et des instruments utilisés.
                  </p>

                  <p>
                    Les ETF offrent plusieurs avantages, ils sont simples à
                    acheter et vendre, peu coûteux, transparents et permettent
                    de diversifier facilement un portefeuille. Certains
                    permettent également de se couvrir contre la volatilité ou
                    d’utiliser un effet de levier. Comme tout investissement,
                    ils comportent des risques, la valeur peut fluctuer selon
                    les marchés, certains ETF peuvent manquer de liquidité, leur
                    performance peut légèrement s’écarter de l’indice (tracking
                    error), et l’effet de levier, pour les ETF complexes, peut
                    amplifier les pertes.
                  </p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaLandmark />}
                  title="Les Obligations"
                  color="text-blue-400"
                >
                  <p>
                    Une obligation est un prêt que vous faites à quelqu’un
                    (État, entreprise ou collectivité). En échange, l’emprunteur
                    promet de vous rendre votre argent à une date précise et de
                    vous verser parfois des intérêts. Chaque obligation a son
                    propre code (ISIN), un taux d’intérêt appelé coupon, et une
                    date d’échéance. Son prix peut varier sur les marchés et est
                    exprimé en pourcentage de sa valeur initiale.
                  </p>
                  <p>Les types principaux d'obligations sont :</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <strong>Obligations à taux fixe :</strong> elles
                      rapportent le même intérêt pendant toute la durée et
                      remboursent le capital à l’échéance. Leur prix peut varier
                      selon les taux des nouvelles obligations : si les nouveaux
                      taux montent, le prix des anciennes baisse, et
                      inversement.
                    </li>
                    <li>
                      <strong>Obligations à taux variable :</strong> le capital
                      reste identique, mais le taux d’intérêt change selon les
                      taux du marché, ce qui fait varier les intérêts que vous
                      recevez.
                    </li>
                    <li>
                      <strong>Obligations à taux révisable :</strong> similaires
                      aux obligations à taux variable, mais le taux est ajusté
                      seulement à certaines périodes selon l’évolution des taux
                      du marché. Elles protègent le capital, mais le revenu peut
                      varier dans le temps.
                    </li>
                    <li>
                      <strong>Obligations échangeables :</strong> elles peuvent
                      être échangées contre d’autres obligations (taux fixe ou
                      variable) selon les conditions et dates prévues dans le
                      contrat.
                    </li>
                    <li>
                      <strong>Obligations à coupon zéro :</strong> elles ne
                      versent pas d’intérêts pendant la vie de l’obligation. Le
                      rendement provient de la différence entre le prix d’achat
                      et le remboursement à l’échéance.
                    </li>
                  </ul>
                  <p>
                    Les obligations peuvent générer un revenu via des coupons
                    annuels ou par une plus-value/moins-value à l’échéance. Le
                    taux de rendement effectif combine ces deux sources et
                    diffère souvent du taux de coupon.
                  </p>

                  <h3 className="font-semibold">Comment ça fonctionne ?</h3>
                  <p>
                    Pour acheter ou vendre une obligation, vous passez
                    généralement par une banque ou une plateforme de courtage.
                    Vous pouvez acheter une obligation neuve directement lors
                    d'une émission ou une obligation déjà existante sur le
                    marché secondaire. Le prix que vous payez peut varier selon
                    l'offre et la demande, et des intérêts accumulés depuis le
                    dernier paiement peuvent s'ajouter au prix. Pour vendre,
                    vous la revendez également via votre banque ou plateforme,
                    au prix du marché au moment de la vente.
                  </p>
                  <p>
                    Si vous payez plus cher que la valeur normale (le nominal),
                    votre gain sera plus faible. Si vous payez moins, votre gain
                    sera plus élevé. Les prix peuvent aussi changer à cause des
                    taux d'intérêt et de la demande sur le marché : si les taux
                    augmentent ou que peu de gens veulent acheter l'obligation,
                    son prix baisse, si les taux baissent ou que beaucoup de
                    gens veulent l'obligation, son prix monte.
                  </p>

                  <h3 className="font-semibold mt-4">Exemples concrets</h3>
                  <p>
                    <strong>Exemple 1 – Variation des taux :</strong> vous
                    possédez une obligation qui verse 50 € d'intérêt par an. Si
                    les taux d'intérêt du marché augmentent, les nouvelles
                    obligations sont plus intéressantes. La vôtre devient moins
                    attrayante et son prix baisse.
                  </p>
                  <p>
                    <strong>Exemple 2 – Obligation avec coupon :</strong> vous
                    achetez une obligation de 1 000 € qui verse 50 € par an
                    pendant 5 ans. Si vous payez 1 050 € pour l'acheter, vous
                    recevrez toujours 50 € par an, mais votre rendement réel
                    sera un peu plus faible car vous avez payé plus cher que le
                    nominal.
                  </p>
                  <p>
                    <strong>Exemple 3 – Zéro-coupon :</strong> vous achetez une
                    obligation qui ne verse pas d'intérêt mais remboursera 1 000
                    € dans 3 ans. Si vous l'achetez pour 900 €, vous gagnez 100
                    € à l'échéance, même sans recevoir d'intérêt annuel.
                  </p>
                  <p>
                    Ces exemples supposent que vous gardez l'obligation jusqu'à
                    son remboursement et que l'emprunteur ne fait pas défaut.
                  </p>
                  <h3 className="font-semibold mt-4">
                    Notation de risque d'une obligation
                  </h3>
                  <p>
                    La notation d'une obligation indique la solidité financière
                    de l'émetteur (État ou entreprise) et sa capacité à
                    rembourser. Elle est fournie par des agences comme Standard
                    & Poor's (S&P). Une bonne note signifie que l'émetteur est
                    fiable et a peu de risques de défaut, tandis qu'une note
                    faible indique un risque plus élevé. Elles permettent aux
                    investisseurs de comprendre rapidement le niveau de risque
                    d’une obligation et de prendre des décisions en connaissance
                    de cause.
                  </p>
                  <p>
                    Les notes vont de <strong>AAA</strong> (meilleure qualité,
                    très sûr) à <strong>D</strong> (défaut). Voici un résumé :
                  </p>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <strong>AAA :</strong> très fiable, risque de défaut quasi
                      nul.
                    </li>
                    <li>
                      <strong>AA / A :</strong> fiable, mais un peu plus
                      sensible aux changements économiques.
                    </li>
                    <li>
                      <strong>BBB :</strong> solide, mais peut être affecté par
                      des conditions économiques défavorables.
                    </li>
                    <li>
                      <strong>BB / B :</strong> plus risqué, susceptible de
                      rencontrer des difficultés en cas de problèmes
                      économiques.
                    </li>
                    <li>
                      <strong>CCC / CC / C :</strong> très risqué, dépend
                      fortement de conditions favorables pour être remboursé.
                    </li>
                    <li>
                      <strong>D :</strong> défaut, l'émetteur ne rembourse pas.
                    </li>
                  </ul>
                  <h3 className="font-semibold mt-4">Obligations complexes</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <strong>Obligations indexées sur l'inflation :</strong> le
                      capital et les intérêts suivent l'inflation pour protéger
                      le pouvoir d'achat.
                    </li>
                    <li>
                      <strong>Obligations perpétuelles :</strong> elles n'ont
                      pas de date de remboursement fixe, mais l'émetteur peut
                      parfois les rembourser à certaines dates.
                    </li>
                    <li>
                      <strong>Obligations convertibles :</strong> peuvent être
                      transformées en actions de l'émetteur selon des conditions
                      prévues dans le contrat.
                    </li>
                    <li>
                      <strong>Obligations structurées :</strong> combinent une
                      obligation avec un ou plusieurs instruments financiers
                      pour ajuster le risque et le rendement.
                    </li>
                    <li>
                      <strong>
                        Obligations remboursables par anticipation :
                      </strong>{" "}
                      l'émetteur peut décider de rembourser l'obligation avant
                      son échéance selon certaines conditions.
                    </li>
                  </ul>
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Les Fonds d’investissement (OPCVM, SICAV, FCP)"
                  color="text-blue-400"
                >
                  <p>
                    Les fonds d’investissement, également appelés{" "}
                    <strong>OPC</strong> (Organismes de Placement Collectif),
                    regroupent différents actifs financiers tels que des
                    actions, de l'immobilier, des obligations, etc. Plutôt que
                    d’acquérir directement ces titres un à un, un investisseur
                    peut souscrire à un fonds et ainsi détenir une part d’un
                    portefeuille géré par des professionnels. Pour souscrire une
                    part d’un FCP ou acquérir une action d’une SICAV,
                    l’investisseur transmet un ordre via son intermédiaire (sa
                    banque, son courtier), qui le fait exécuter par la société
                    de gestion du fonds. Les ordres peuvent nécessiter un délai
                    avant d’être effectivement traités, en raison de la
                    centralisation et de la fréquence de calcul (parfois
                    hebdomadaire) du fond.
                  </p>

                  <p className="mt-3">
                    Le principe repose sur la mise en commun de capitaux par
                    plusieurs investisseurs. La société de gestion investit
                    ensuite ces capitaux selon une stratégie d’investissement
                    définie. En contrepartie, chaque investisseur détient des{" "}
                    <strong>parts</strong> du fonds, dont la valeur évolue en
                    fonction des performances du portefeuille. Chaque OPC doit
                    établir un Document d’Informations Clés pour l’Investisseur
                    (DIC), qui est contrôlé par l’Autorité des Marchés
                    Financiers. Ce DIC est indispensable pour s’informer sur le
                    produit et le comparer aux autres OPC.
                  </p>

                  <p className="mt-3">
                    Les OPC présentent trois caractéristiques principales.
                  </p>

                  <ul className="list-disc list-inside ml-4">
                    <li>
                      Ils offrent une diversification immédiate du portefeuille
                    </li>
                    <li>Ils sont gérés par des professionnels agréés</li>
                    <li>
                      Leurs parts peuvent être achetées ou revendues à leur
                      valeur liquidative
                    </li>
                  </ul>

                  <p className="mt-3">
                    Il existe deux grandes catégories d’OPC.
                  </p>

                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <strong>Les OPCVM</strong> sont des fonds d’investissement
                      dits “classiques”, encadrés par la réglementation
                      européenne. Ils visent à offrir une diversification
                      importante et une liquidité élevée tout en respectant des
                      règles strictes de transparence et de gestion des risques.
                    </li>
                    <li>
                      <strong>Les FIA</strong> (Fonds d’Investissement
                      Alternatifs) regroupent des placements plus spécialisés
                      tels que les fonds immobiliers, de capital-investissement
                      ou de stratégie alternative. Ils disposent d’une plus
                      grande flexibilité de gestion, mais présentent
                      généralement un niveau de risque plus élevé et une
                      liquidité plus limitée.
                    </li>
                  </ul>

                  <p className="mt-3">
                    Les deux principales formes juridiques de ces fonds sont la{" "}
                    <strong>SICAV</strong> (Société d’Investissement à Capital
                    Variable) et le <strong>FCP</strong> (Fonds Commun de
                    Placement). La SICAV est une société anonyme à capital
                    variable dont les souscripteurs deviennent actionnaires, et
                    peuvent ainsi bénéficier de droits de vote. Le FCP, quant à
                    lui, est une copropriété de différents biens financiers où
                    les investisseurs détiennent des parts, sans pour autant
                    disposer de droits liés à la qualité d’actionnaire.
                  </p>

                  <p className="mt-4">
                    Les fonds se distinguent aussi par leur classe d’actifs :
                  </p>

                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <strong>Fonds monétaires</strong> : investis dans des
                      produits à court terme, ils présentent un risque très
                      faible mais un rendement limité.
                    </li>
                    <li>
                      <strong>Fonds obligataires</strong> : investis dans des
                      obligations d’États ou d’entreprises, ils offrent un
                      rendement modéré pour un risque mesuré.
                    </li>
                    <li>
                      <strong>Fonds actions</strong> : investis majoritairement
                      sur les marchés actions, plus risqués mais à potentiel de
                      rendement supérieur.
                    </li>
                    <li>
                      <strong>Fonds diversifiés</strong> : combinent actions,
                      obligations et produits monétaires, avec un niveau de
                      risque dépendant de la répartition entre ces actifs.
                    </li>
                    <li>
                      <strong>Fonds alternatifs</strong> : mettent en œuvre des
                      stratégies spécifiques via d’autres OPC, offrant une
                      diversification accrue.
                    </li>
                    <li>
                      <strong>Fonds à formule</strong> : visent un rendement
                      défini par une formule, souvent assorti d’une garantie de
                      capital à échéance.
                    </li>
                    <li>
                      <strong>Fonds complexes</strong> : utilisent des
                      stratégies avancées comme l’effet de levier ou les
                      produits dérivés pour amplifier la performance. Ils sont
                      destinés à des investisseurs avertis en raison du risque
                      accru.
                    </li>
                  </ul>

                  <p className="mt-3">
                    Il convient de noter que l’investissement dans des fonds
                    entraîne des <strong>frais de gestion</strong> et autres
                    coûts associés à l’exploitation et à l’administration du
                    fonds. Ces frais réduisent le rendement effectif pour
                    l’investisseur. Par ailleurs, bien que l’objectif des fonds
                    soit souvent de surperformer le marché ou un indice de
                    référence, aucune garantie de performance n’est fournie.
                  </p>
                </InfoBubble>
              </div>
            </section>

            <section id="complex-products" className="scroll-mt-22 mb-12">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Produits complexes et dérivés
              </h2>

              <div className="space-y-4">
                <InfoBubble
                  icon={<FaCubes />}
                  title="Produits dérivés et structurés"
                  color="text-purple-400"
                >
                  <p>
                    Ces produits sont principalement utilisés pour le trading ou
                    la couverture de positions, et non pour un investissement
                    long terme. Ils permettent de parier sur la hausse ou la
                    baisse d’un actif, d’amplifier gains et pertes, ou de créer
                    des solutions sur mesure combinant plusieurs instruments
                    financiers.
                  </p>

                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>
                      <strong>Turbos :</strong> contrats à effet de levier
                      suivant un actif, amplifiant gains et pertes.
                    </li>
                    <li>
                      <strong>Warrants :</strong> options à long terme
                      permettant de spéculer sans posséder l’actif, avec effet
                      de levier.
                    </li>
                    <li>
                      <strong>CFD :</strong> contrats sur différence pour
                      spéculer sur un actif sans le posséder.
                    </li>
                    <li>
                      <strong>Options et futures :</strong> contrats
                      standardisés pour acheter ou vendre un actif à une date et
                      un prix déterminés, utilisés pour spéculation ou
                      couverture.
                    </li>
                    <li>
                      <strong>Forex :</strong> marché des devises accessible via
                      CFD ou dérivés, permettant de spéculer sur les taux de
                      change avec effet de levier.
                    </li>
                    <li>
                      <strong>Produits structurés :</strong> combinent plusieurs
                      instruments pour créer un produit sur mesure, avec capital
                      garanti ou partiellement garanti et rendements
                      conditionnels.
                    </li>
                    <li>
                      <strong>Certificats :</strong> produits structurés cotés
                      en bourse répliquant des indices, des paniers d’actions,
                      des matières premières ou des stratégies complexes.
                    </li>
                    <li>
                      <strong>ETN (Exchange Traded Notes) :</strong> titres de
                      créance émis par une banque suivant un indice, sans que
                      l’investisseur possède directement les composants
                      sous-jacents.
                    </li>
                  </ul>

                  <p className="mt-2">
                    Je n’en détaille pas plus ici, car leur usage est complexe,
                    dépend de la plateforme et je n'ai aucune expérience avec
                    ces produits.
                  </p>
                </InfoBubble>
              </div>
            </section>

            <section id="real-estate" className="scroll-mt-22 mb-12">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Immobilier
              </h2>

              <div className="space-y-4">
                <InfoBubble
                  icon={<FaHome />}
                  title="Immobilier direct"
                  color="text-green-400"
                >
                  <p>Description à venir</p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaHome />}
                  title="Immobilier collectif (SCPI, OPCI, REIT)"
                  color="text-green-400"
                >
                  <p>Description à venir</p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaHome />}
                  title="Crowdfunding immobilier"
                  color="text-green-400"
                >
                  <p>Description à venir</p>
                </InfoBubble>
              </div>
            </section>

            <section id="alternatives" className="scroll-mt-22 mb-12">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Placements alternatifs
              </h2>
              {/* ETC */}

              <div className="space-y-4">
                <InfoBubble
                  icon={<FaGem />}
                  title="Matières premières et métaux précieux"
                  color="text-yellow-400"
                >
                  <p>Description à venir</p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaCube />}
                  title="Cryptoactifs et Web3"
                  color="text-yellow-400"
                >
                  <p>Description à venir</p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaCube />}
                  title="Private Equity"
                  color="text-yellow-400"
                >
                  <p>Description à venir</p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaCube />}
                  title="Hedge Funds"
                  color="text-yellow-400"
                >
                  <p>Description à venir</p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaGem />}
                  title="Placements atypiques (art, vin, montres...)"
                  color="text-yellow-400"
                >
                  <p>Description à venir</p>
                </InfoBubble>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Investments;
