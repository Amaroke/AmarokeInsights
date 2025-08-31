import React from "react";
import {
  FaPiggyBank,
  FaChartLine,
  FaExclamationTriangle,
  FaPercentage,
  FaShieldAlt,
  FaLock,
  FaUserSecret,
  FaCreditCard,
} from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";

const BankingAccounts: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <>
      <div className="flex h-screen text-gray-300 bg-[#12121b]">
        <main
          className={`flex-1 overflow-auto pt-16 pb-8 transition-all duration-300 ${
            isOpen ? "md:ml-64" : "md:ml-0"
          }`}
        >
          <div className="max-w-6xl mx-auto px-2 md:px-4 py-6">
            <section id="types-of-accounts" className="scroll-mt-22 mb-12">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Comptes bancaires, livrets et plans d’épargne
              </h2>

              <div className="space-y-4">
                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Compte courant (Single)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Compte principal pour gérer ses
                  opérations bancaires quotidiennes individuellement.
                  <br />
                  <strong>Avantages :</strong> Gestion individuelle et accès
                  immédiat aux fonds.
                  <br />
                  <strong>Inconvénients :</strong> Aucun rendement, frais
                  bancaires possibles.
                  <br />
                  <strong>Stratégie :</strong> Gestion de la trésorerie
                  quotidienne.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Compte courant (Joint)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Compte principal partagé pour
                  gérer les opérations bancaires quotidiennes à plusieurs.
                  <br />
                  <strong>Avantages :</strong> Partage des dépenses et
                  transparence entre co-titulaires.
                  <br />
                  <strong>Inconvénients :</strong> Responsabilité partagée,
                  aucun rendement.
                  <br />
                  <strong>Stratégie :</strong> Gestion commune des finances
                  quotidiennes.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Livret A"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Livret d'épargne réglementé,
                  accessible à tous.
                  <br />
                  <strong>Type :</strong> Épargne
                  <br />
                  <strong>Taux :</strong> 1,7% / Plafond 22 950 €
                  <br />
                  <strong>Fiscalité :</strong> Exonéré d'impôt sur le revenu et
                  prélèvements sociaux.
                  <br />
                  <strong>Avantages :</strong> Sécurisé, fonds disponibles à
                  tout moment.
                  <br />
                  <strong>Inconvénients :</strong> Rendement limité.
                  <br />
                  <strong>Stratégie :</strong> Épargne de précaution.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Livret de Développement Durable et Solidaire (LDDS)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Livret similaire au Livret A,
                  destiné à financer des projets durables.
                  <br />
                  <strong>Type :</strong> Épargne
                  <br />
                  <strong>Taux :</strong> 1,7% / Plafond 12 000 €
                  <br />
                  <strong>Fiscalité :</strong> Exonéré d'impôt et prélèvements
                  sociaux.
                  <br />
                  <strong>Avantages :</strong> Sécurisé, accessible
                  immédiatement.
                  <br />
                  <strong>Inconvénients :</strong> Rendement limité.
                  <br />
                  <strong>Stratégie :</strong> Épargne de précaution.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Livret d'Épargne Populaire (LEP)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Livret réservé aux revenus
                  modestes avec taux attractif.
                  <br />
                  <strong>Type :</strong> Épargne
                  <br />
                  <strong>Taux :</strong> 2,7% / Plafond 10 000 €
                  <br />
                  <strong>Fiscalité :</strong> Exonéré d'impôt et prélèvements
                  sociaux.
                  <br />
                  <strong>Avantages :</strong> Rendement plus élevé que le
                  Livret A et LDDS.
                  <br />
                  <strong>Inconvénients :</strong> Plafond limité, conditions de
                  revenus strictes.
                  <br />
                  <strong>Stratégie :</strong> Épargne de précaution, avec un
                  taux supérieur aux autres livrets réglementés couvrant la même
                  fonction. À prioriser si vous êtes éligible.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Livret Jeune"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Livret pour les jeunes de 12 à
                  25 ans, taux parfois attractif.
                  <br />
                  <strong>Type :</strong> Épargne
                  <br />
                  <strong>Taux :</strong> 1.7% / Plafond 1 600 €
                  <br />
                  <strong>Fiscalité :</strong> Exonéré d'impôt et prélèvements
                  sociaux.
                  <br />
                  <strong>Avantages :</strong> Taux parfois attractif, toujours
                  supérieur au livret A, disponibilité immédiate.
                  <br />
                  <strong>Inconvénients :</strong> Plafond faible, réservé aux
                  jeunes.
                  <br />
                  <strong>Stratégie :</strong> Épargne jeunesse et de précaution
                  avec un taux parfois supérieur au Livret A et au LDDS.
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Plan Épargne en Actions (PEA)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Compte pour investir en actions
                  européennes avec avantage fiscal.
                  <br />
                  <strong>Type :</strong> Investissement
                  <br />
                  <strong>Taux :</strong> Très variable, fortement lié à votre
                  stratégie / Plafond 150 000 €
                  <br />
                  <strong>Fiscalité :</strong> PFU avant 5ans, uniquement les
                  prélèvements sociaux 17,2% après 5 ans
                  <br />
                  <strong>Avantages :</strong> Rendement potentiel élevé,
                  fiscalité attractive.
                  <br />
                  <strong>Inconvénients :</strong> Risque de perte en capital,
                  limité aux actions UE.
                  <br />
                  <strong>Stratégie :</strong> Investissement long terme.
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Plan d'Épargne Entreprise (PEE)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Compte collectif proposé par
                  l’entreprise pour investir dans des fonds communs (FCPE),
                  souvent avec abondement de l’employeur.
                  <br />
                  <strong>Type :</strong> Investissement
                  <br />
                  <strong>Taux :</strong> Variable selon fonds choisis
                  <br />
                  <strong>Fiscalité :</strong> Abondement exonéré d’impôt sur le
                  revenu et soumis uniquement aux prélèvements sociaux.
                  Plus-value des fonds défiscalisée si retrait après 5 ans.
                  <br />
                  <strong>Avantages :</strong> Abondement employeur, fiscalité
                  avantageuse.
                  <br />
                  <strong>Inconvénients :</strong> Fonds bloqués 5 ans minimum
                  (sauf cas exceptionnels : mariage, naissance, licenciement,
                  etc.), choix limité de fonds.
                  <br />
                  <strong>Stratégie :</strong> Épargne salariale à moyen terme,
                  profiter de l’abondement et optimiser la fiscalité.
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Plan Épargne Retraite (PER)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Épargne retraite avec avantages
                  fiscaux immédiats.
                  <br />
                  <strong>Type :</strong> Investissement
                  <br />
                  <strong>Taux :</strong> Variable selon fonds
                  <br />
                  <strong>Fiscalité :</strong> Déduction des versements du
                  revenu imposable, report d'imposition, prélèvements sociaux à
                  la sortie. 30% si sortie en capital, barème de l'impôt sur le
                  revenu si sortie en rente.
                  <br />
                  <strong>Avantages :</strong> Réduction d’impôt, capital
                  disponible à la retraite.
                  <br />
                  <strong>Inconvénients :</strong> Argent bloqué jusqu’à la
                  retraite.
                  <br />
                  <strong>Stratégie :</strong> Préparer sa retraite à long
                  terme.
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Assurance Vie (AV)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Contrat d’épargne permettant de
                  préparer projets et succession.
                  <br />
                  <strong>Type :</strong> Investissement
                  <br />
                  <strong>Taux :</strong> Variable selon fonds choisis
                  <br />
                  <strong>Fiscalité :</strong> Avantage fiscal après 8 ans :
                  abattement annuel 4 600€ (célibataires) ou 9 200€ (couples)
                  sur les gains, prélèvements sociaux 17,2%, succession
                  optimisée.
                  <br />
                  <strong>Avantages :</strong> Flexibilité des supports, gestion
                  libre ou pilotée, succession facilitée, liquidité partielle
                  possible.
                  <br />
                  <strong>Inconvénients :</strong> Rendement fonds euros faible,
                  unités de compte risquées, frais d’entrée et de gestion à
                  surveiller.
                  <br />
                  <strong>Stratégie :</strong> Épargne long terme diversifiée,
                  optimisation fiscale, préparation succession.
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Compte-Titres Ordinaire (CTO)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Compte permettant d’acheter et
                  vendre librement actions, obligations, ETF, cryptos et autres
                  titres financiers.
                  <br />
                  <strong>Type :</strong> Investissement
                  <br />
                  <strong>Taux :</strong> Variable selon performance des titres
                  choisis
                  <br />
                  <strong>Fiscalité :</strong> Gains et dividendes soumis au PFU
                  (30%)
                  <br />
                  <strong>Avantages :</strong> Liberté totale d’investissement,
                  aucun plafond, possibilité de diversifier internationalement.
                  <br />
                  <strong>Inconvénients :</strong> Risque de perte en capital,
                  fiscalité moins avantageuse qu’un PEA ou PER.
                  <br />
                  <strong>Stratégie :</strong> Investissement à long terme pour
                  diversifier et compléter un PEA ou un PER.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Plan Épargne Logement (PEL)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Livret pour préparer un projet
                  immobilier, possibilité de prêt à taux préférentiel.
                  <br />
                  <strong>Type :</strong> Épargne
                  <br />
                  <strong>Taux :</strong> 1,75% / Plafond 61 200 €, attention
                  cependant le taux est bloqué à l'ouverture du plan, certains
                  PEL ouverts il y a plusieurs années ont des taux plus élevés.
                  Il est important de vérifier le taux à l'ouverture et lors de
                  la clôture. Certains PEL ouverts il y a longtemps ont des taux
                  très intéressants.
                  <br />
                  <strong>Fiscalité :</strong> PFU, 12,8 % d'impôt sur le revenu
                  et 17,2 % de prélèvements sociaux.
                  <br />
                  <strong>Avantages :</strong> Possibilité de prêt immobilier.
                  <br />
                  <strong>Inconvénients :</strong> Fonds bloqués 2 ans minimum,
                  autrement retour au taux du CEL.
                  <br />
                  <strong>Stratégie :</strong> Épargne projet immobilier à moyen
                  terme.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Compte Épargne Logement (CEL)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Livret pour financer un projet
                  immobilier.
                  <br />
                  <strong>Type :</strong> Épargne
                  <br />
                  <strong>Taux :</strong> 1,25% / Plafond 15 300 €
                  <br />
                  <strong>Fiscalité :</strong> PFU, 12,8 % d'impôt sur le revenu
                  et 17,2 % de prélèvements sociaux.
                  <br />
                  <strong>Avantages :</strong> Possibilité de prêt immobilier,
                  fonds disponibles au delà de 300 €.
                  <br />
                  <strong>Inconvénients :</strong> Rendement faible et imposé,
                  fonds bloqués minimum 18 mois.
                  <br />
                  <strong>Stratégie :</strong> Épargne projet immobilier.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Compte à terme (CAT)"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Épargne placée pour une durée
                  déterminée avec taux garanti.
                  <br />
                  <strong>Type :</strong> Épargne
                  <br />
                  <strong>Taux :</strong> 2%, variable selon durée et banque
                  <br />
                  <strong>Fiscalité :</strong> PFU 30%
                  <br />
                  <strong>Avantages :</strong> Rendement stable, sécurisé.
                  <br />
                  <strong>Inconvénients :</strong> Fonds bloqués jusqu’à
                  échéance, autrement aucun intérêt, rendements soumis au PFU.
                  <br />
                  <strong>Stratégie :</strong> Épargne moyen terme avec faible
                  risque.
                </InfoBubble>

                <InfoBubble
                  icon={<FaPiggyBank />}
                  title="Compte sur livret / Livret bancaire"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Compte d’épargne flexible
                  proposé par les banques.
                  <br />
                  <strong>Type :</strong> Épargne
                  <br />
                  <strong>Taux :</strong> 1% à 2% en moyenne et selon la banque
                  <br />
                  <strong>Fiscalité :</strong> PFU 30%
                  <br />
                  <strong>Avantages :</strong> Flexibilité, fonds disponibles
                  immédiatement.
                  <br />
                  <strong>Inconvénients :</strong> Rendement faible et soumis
                  aux PFU.
                  <br />
                  <strong>Stratégie :</strong> Épargne flexible.
                </InfoBubble>

                <InfoBubble
                  icon={<FaChartLine />}
                  title="Plan Épargne Avenir Climat"
                  color="text-blue-400"
                >
                  <strong>Description :</strong> Compte pour investir dans des
                  projets durables et climatiques.
                  <br />
                  <strong>Type :</strong> Investissement
                  <br />
                  <strong>Taux :</strong> Variable selon fonds / Plafond 22 950
                  €
                  <br />
                  <strong>Fiscalité :</strong> Exonéré d'impôt sur le revenu et
                  prélèvements sociaux.
                  <br />
                  <strong>Avantages :</strong> Contribue à la transition
                  écologique.
                  <br />
                  <strong>Inconvénients :</strong> Risque de perte en capital.
                  Fonds bloqués 5 ans et avant 18 ans. Fermeture automatique
                  l'année des 30 ans.
                  <br />
                  <strong>Stratégie :</strong> Investissements ESG
                  (Environnementaux, Sociaux et Gouvernance), long terme.
                </InfoBubble>
              </div>
            </section>

            <section id="rates-fees" className="scroll-mt-22 mb-12">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Taux et frais
              </h2>
              <div className="space-y-4">
                <InfoBubble
                  icon={<FaPercentage />}
                  title="Taux d’épargne"
                  color="text-purple-400"
                >
                  <p className="leading-relaxed mb-3">
                    Tous les produits d’épargne affichent un taux, mais il faut
                    distinguer le <strong>taux brut</strong> (avant impôts et
                    prélèvements sociaux) du <strong>taux net</strong> (ce que
                    vous touchez réellement). Comprendre comment ces taux sont
                    fixés permet d’éviter de tomber dans le piège des offres
                    "trop belles pour être vraies".
                  </p>

                  <p className="leading-relaxed mt-3">
                    - <strong>Livrets réglementés</strong> (Livret A, LDDS, LEP)
                    ➜ taux fixés par l’État et révisés 2 fois par an. Leur
                    rendement est <strong>garanti et exonéré d’impôt</strong>.
                    En revanche, ils sont souvent
                    <strong> inférieurs à l’inflation</strong>, ce qui entraîne
                    une perte de pouvoir d’achat à long terme. Exemple : un
                    Livret A à 3 % alors que l’inflation est à 4 %.
                  </p>

                  <p className="leading-relaxed mt-3">
                    - <strong>PEL / CEL</strong> ➜ taux déterminés à l’ouverture
                    et figés dans le temps. Un ancien PEL (avant 2016) peut
                    rapporter jusqu’à <strong>2,5 % net garanti</strong>, ce qui
                    est très intéressant aujourd’hui. Mais les nouveaux PEL
                    plafonnés à <strong>1 % brut</strong> ne sont plus
                    compétitifs.
                  </p>

                  <p className="leading-relaxed mt-3">
                    - <strong>Livret bancaire & comptes à terme</strong> ➜ taux
                    libres fixés par la banque. Souvent sous forme de{" "}
                    <strong>promotions temporaires</strong> (ex. 3 % pendant 3
                    mois, puis 0,5 % ensuite). Utile pour placer du cash court
                    terme, mais rarement rentable à long terme.
                  </p>

                  <p className="leading-relaxed mt-3">
                    - <strong>Comptes rémunérés type fintech</strong> ➜
                    rémunération quotidienne ou mensuelle, avec des taux
                    attractifs (souvent 2 à 4 %). Mais attention : ces produits
                    sont <strong>100 % imposés</strong> au PFU (30 %),
                    contrairement aux livrets réglementés.
                  </p>

                  <p className="leading-relaxed italic">
                    Exemple : un compte à 2 % brut dans une fintech ➜ après
                    impôt, le taux net tombe à seulement <strong>1,33 %</strong>
                    , soit à peine au-dessus du Livret A (1,25 % net et garanti,
                    au moment où j’écris ces lignes).
                  </p>

                  <p className="leading-relaxed mt-2">
                    ⚠️ Ces taux <strong>ne sont pas garantis</strong> : ils
                    dépendent des taux directeurs de la <strong>BCE</strong> et
                    des frais de dépôt appliqués par la plateforme. Une baisse
                    de la BCE = une baisse immédiate du rendement.
                  </p>

                  <p className="leading-relaxed mt-4">
                    ✅ En résumé : ne vous arrêtez jamais au taux affiché. Ce
                    qui compte, c’est le{" "}
                    <strong>rendement net après impôts et frais</strong>. Un
                    produit séduisant peut rapporter moins qu’un livret garanti
                    et défiscalisé.
                  </p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaCreditCard />}
                  title="Cartes de débit & crédit"
                  color="text-purple-400"
                >
                  <p className="leading-relaxed mb-3">
                    Les cartes bancaires sont obligatoires. Mais toutes ne se
                    valent pas : entre débit immédiat, différé, crédit
                    renouvelable ou cartes premium, les différences peuvent
                    avoir un impact direct sur vos finances. Bien choisir sa
                    carte permet d’
                    <strong>éviter des frais inutiles</strong> et d’
                    <strong>optimiser ses avantages</strong>.
                  </p>

                  <p className="leading-relaxed">
                    - <strong>Carte de débit</strong> ➜ reliée au compte
                    courant, elle débite vos achats soit immédiatement, soit en
                    fin de mois (<strong>débit différé</strong>).
                  </p>

                  <p className="leading-relaxed italic">
                    Exemple : 200 € de courses le 5 ➜ débit immédiat = prélevé
                    le jour même, débit différé = prélevé en une seule fois à la
                    fin du mois.
                  </p>

                  <p className="leading-relaxed mt-3">
                    - <strong>Carte de crédit</strong> ➜ très peu répandue en
                    France au niveau des banques. Elle est surtout proposée par
                    certaines enseignes (Carrefour, Fnac, etc.) et fonctionne
                    avec un <strong>crédit renouvelable</strong>. Attention :
                    les <strong>taux d’intérêt sont élevés (15–20 %)</strong>. À
                    éviter sauf si vous en comprenez et acceptez parfaitement
                    les risques et le coût.
                  </p>

                  <p className="leading-relaxed italic">
                    Exemple : un achat de 1 000 € remboursé sur 12 mois à 18 % =
                    environ <strong>90 € d’intérêts</strong> en plus.
                  </p>

                  <p className="leading-relaxed mt-3">
                    - <strong>Cartes premium</strong> (Gold, Platinum, Infinite)
                    ➜ coûtent entre 120 € et 350 €/an mais incluent assurances
                    voyage, assistance médicale, retraits gratuits à l’étranger…
                    Intéressantes uniquement si vous exploitez réellement ces
                    avantages.
                  </p>

                  <p className="leading-relaxed italic">
                    Exemple : une carte Gold (130 €/an) peut être rentabilisée
                    si vous voyagez souvent, car une assurance annulation coûte
                    40–60 € par trajet.
                  </p>

                  <p className="leading-relaxed mt-4">
                    👉 <strong>Astuce :</strong> comparez toujours les frais.
                    Les banques en ligne proposent souvent des cartes gratuites
                    (débit immédiat ou différé), alors que les banques
                    traditionnelles facturent 30 à 60 €/an pour une carte
                    classique.
                  </p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaExclamationTriangle />}
                  title="Frais bancaires"
                  color="text-purple-400"
                >
                  <p className="leading-relaxed">
                    Les frais bancaires peuvent rapidement grignoter vos gains,
                    même sur des placements modestes. Ils incluent :{" "}
                    <strong>frais de tenue de compte</strong>,{" "}
                    <strong>cartes bancaires</strong>,{" "}
                    <strong>virements internationaux</strong>,{" "}
                    <strong>commissions de courtage</strong>, et parfois des
                    frais cachés sur certains services.
                  </p>

                  <p className="leading-relaxed mt-3">
                    👉 Pour optimiser vos frais, regardez surtout :
                  </p>

                  <ul className="list-disc list-inside ml-4 mt-2 leading-relaxed">
                    <li>
                      <strong>Frais fixes du compte courant :</strong> certaines
                      banques en ligne sont <em>gratuites</em> ou très peu
                      chères.
                    </li>
                    <li>
                      <strong>Cartes bancaires :</strong> vérifiez le coût
                      annuel assurez vous d'utiliser les avantages inclus.
                    </li>
                    <li>
                      <strong>Frais de virements :</strong> domestiques, SEPA ou
                      internationaux, certains comptes gratuits ne facturent
                      rien pour les virements standards.
                    </li>
                    <li>
                      <strong>Commissions de courtage :</strong> si vous
                      investissez, comparez les courtiers ou brokers pour éviter
                      des frais élevés sur chaque transaction.
                    </li>
                    <li>
                      <strong>Frais cachés :</strong> découvert autorisé,
                      retraits hors réseau, services additionnels… regardez le
                      détail dans la brochure tarifaire.
                    </li>
                    <li>
                      <strong>Promotions temporaires :</strong> attention aux
                      offres de lancement qui disparaissent au bout de quelques
                      mois.
                    </li>
                  </ul>

                  <p className="leading-relaxed mt-3">
                    ⚠️ Objectif : choisir une banque et un compte qui minimisent
                    vos frais fixes, et un courtier ou une plateforme
                    d’investissement compétitive si vous placez de l’argent.
                    Optimiser les frais, c’est directement augmenter le
                    rendement net de vos placements.
                  </p>
                </InfoBubble>
              </div>
            </section>

            <section id="security-fraud" className="scroll-mt-22">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Sécurité et fraude
              </h2>

              <div className="space-y-4">
                <InfoBubble
                  icon={<FaShieldAlt />}
                  title="Garantie des dépôts"
                  color="text-red-400"
                >
                  <p className="leading-relaxed">
                    En France, vos dépôts sont protégés jusqu’à{" "}
                    <strong>100 000 € par établissement bancaire</strong> grâce
                    au Fonds de Garantie des Dépôts et de Résolution (FGDR).
                    Cela couvre comptes courants, livrets, et comptes d’épargne.
                  </p>

                  <p className="leading-relaxed mt-2">
                    Exemple : si vous avez 80 000 € sur votre compte courant et
                    30 000 € sur un livret, seuls{" "}
                    <strong>100 000 € seront remboursés</strong>.
                  </p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaLock />}
                  title="Sécurité des transactions"
                  color="text-red-400"
                >
                  <p className="leading-relaxed">
                    Les banques et fintech utilisent plusieurs dispositifs pour
                    sécuriser vos opérations :
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 leading-relaxed">
                    <li>
                      <strong>
                        Code OTP et authentification à deux facteurs (2FA)
                      </strong>{" "}
                      : chaque connexion ou transaction est validée via un code
                      unique reçu par SMS ou application.
                    </li>
                    <li>
                      <strong>
                        Ne jamais partager ses codes ou mots de passe
                      </strong>{" "}
                      : ils sont strictement personnels et permettent d’accéder
                      à vos comptes.
                    </li>
                    <li>
                      <strong>Vérifier les URL et contacts officiels</strong> :
                      assurez-vous que vous êtes bien sur le site officiel de la
                      banque et que les emails ou SMS proviennent de sources
                      authentiques.
                    </li>
                    <li>
                      <strong>
                        Cartes virtuelles et verrouillage instantané
                      </strong>{" "}
                      : idéal pour les achats en ligne et pour bloquer
                      immédiatement une carte en cas de perte ou fraude.
                    </li>
                    <li>
                      <strong>Support client réactif</strong> : savoir contacter
                      rapidement sa banque est essentiel pour stopper une
                      transaction suspecte ou contester un paiement frauduleux.
                    </li>
                  </ul>
                </InfoBubble>

                <InfoBubble
                  icon={<FaUserSecret />}
                  title="Fraudes courantes"
                  color="text-red-400"
                >
                  <p className="leading-relaxed">
                    Les arnaques les plus fréquentes incluent :
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 leading-relaxed">
                    <li>
                      <strong>Phishing / hameçonnage</strong> : emails ou SMS
                      falsifiés demandant vos identifiants, codes OTP ou
                      informations personnelles.
                    </li>
                    <li>
                      <strong>Fraudes par carte bancaire</strong> : détournement
                      de données pour des achats frauduleux. Important de savoir{" "}
                      <strong>verrouiller sa carte rapidement</strong> et de
                      connaître le support client pour réagir.
                    </li>
                    <li>
                      <strong>Escroqueries en ligne</strong> : prêts fictifs,
                      offres d’investissement trop belles pour être vraies.
                      Vérifier la légitimité des plateformes avant tout
                      engagement.
                    </li>
                    <li>
                      <strong>Faux conseillers bancaires</strong> : appels ou
                      messages se faisant passer pour votre banquier pour
                      récupérer vos codes ou données.
                    </li>
                    <li>
                      <strong>Piratage de comptes en ligne</strong> : accès
                      frauduleux via mots de passe faibles ou réutilisés.
                    </li>
                  </ul>
                  <p className="leading-relaxed mt-2">
                    ✅ Bonnes pratiques : activer 2FA, utiliser des mots de
                    passe forts et uniques, vérifier les sources, et bloquer
                    immédiatement tout accès suspect.
                  </p>
                </InfoBubble>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default BankingAccounts;
