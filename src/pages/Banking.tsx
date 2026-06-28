import React from "react";
import {
  FaExclamationTriangle,
  FaPercentage,
  FaShieldAlt,
  FaLock,
  FaUserSecret,
  FaCreditCard,
  FaExchangeAlt,
  FaUniversity,
  FaLayerGroup,
  FaLandmark,
  FaCoins,
  FaLifeRing,
} from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import ExampleBox from "../components/ExampleBox";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";
import Term from "../components/Term";

const Banking: React.FC = () => {
  return (
    <>
      <PageLayout
        title="Le système bancaire"
        description="Comment fonctionnent les banques, les taux et frais, et comment se protéger de la fraude."
      >
        <Container>
          <section id="how-banks-work" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Comment fonctionnent les banques ?
            </h2>

            <div className="space-y-4">
              <InfoBubble
                icon={<FaUniversity />}
                title="Pourquoi les banques veulent votre argent"
                color="text-blue-500"
              >
                <p className="leading-relaxed mb-3">
                  Quand vous déposez de l'argent sur votre compte bancaire, il
                  ne reste pas « stocké dans un coffre ». En réalité,{" "}
                  <strong>
                    la banque devient propriétaire de votre argent
                  </strong>
                  , et ce que vous possédez, c'est une
                  <strong> créance sur la banque</strong>. Elle peut utiliser
                  votre argent pour prêter, investir ou renforcer sa solidité
                  financière.
                </p>

                <p className="leading-relaxed mb-3">
                  Même si vous ne possédez plus physiquement l'argent, la banque
                  doit :
                </p>

                <ul className="list-disc list-inside ml-4 mt-2 leading-relaxed">
                  <li>
                    Vous restituer vos fonds à tout moment (compte courant) ou
                    selon les conditions du compte (compte à terme).
                  </li>
                  <li>
                    Vous offrir une rémunération éventuelle (livrets, comptes
                    rémunérés).
                  </li>
                  <li>
                    Assurer une sécurité réglementaire : vos dépôts sont
                    protégés jusqu'à 100 000 € par le <Term id={"FGDR"} /> en
                    cas de faillite de la banque.
                  </li>
                </ul>
              </InfoBubble>

              <InfoBubble
                icon={<FaExchangeAlt />}
                title="Le cœur du modèle bancaire : prêter plus cher qu'ils n'empruntent"
                color="text-green-400"
              >
                <p className="leading-relaxed mb-3">
                  Le principal métier d'une banque est simple :
                  <strong>
                    {" "}
                    emprunter de l'argent à bas coût et le prêter plus cher
                  </strong>
                  . La différence entre les deux s'appelle la{" "}
                  <strong>marge bancaire</strong>.
                </p>

                <p className="leading-relaxed">
                  - La banque vous rémunère peu (ou pas) sur vos dépôts.
                  <br />- Elle prête cet argent à des particuliers ou
                  entreprises avec des intérêts.
                </p>

                <ExampleBox>
                  <ul className="space-y-1">
                    <li>Vous laissez 10 000 € sur votre compte (0 %).</li>
                    <li>
                      La banque prête ces 10 000 € à un client pour un crédit
                      auto à 6 %.
                    </li>
                    <li>
                      Chaque année, elle perçoit environ{" "}
                      <strong>600 € d'intérêts</strong>.
                    </li>
                  </ul>
                  <p className="mt-2">
                    Une partie sert à payer ses coûts (salaires, agences,
                    informatique), le reste constitue son bénéfice.
                  </p>
                </ExampleBox>
              </InfoBubble>

              <InfoBubble
                icon={<FaLayerGroup />}
                title="Les réserves fractionnaires, comment 1 € permet de prêter plus"
                color="text-violet-400"
              >
                <p className="leading-relaxed mb-3">
                  Les banques ne prêtent pas uniquement l'argent que vous
                  déposez. Elles fonctionnent avec un système appelé
                  <strong> réserves fractionnaires</strong> : elles ne gardent
                  qu'une petite partie des dépôts en réserve, et peuvent prêter
                  le reste.
                </p>

                <ExampleBox>
                  <ul className="space-y-1">
                    <li>
                      Vous déposez <strong>1 000 €</strong> dans la banque A.
                    </li>
                    <li>
                      La banque A conserve <strong>100 €</strong> en réserve et
                      prête les <strong>900 € restants</strong> à un autre
                      client.
                    </li>
                    <li>
                      Ce client dépense ses <strong>900 €</strong>, le vendeur
                      les dépose dans la banque B.
                    </li>
                    <li>
                      La banque B conserve <strong>90 €</strong> et peut prêter{" "}
                      <strong>810 €</strong>. Et ainsi de suite.
                    </li>
                  </ul>
                  <p className="mt-2">
                    Le montant total de crédits accordés dépasse largement le
                    dépôt initial de 1 000 €.{" "}
                    <strong>Le crédit crée de la monnaie.</strong>
                  </p>
                </ExampleBox>

                <p className="leading-relaxed mt-3">
                  Ce mécanisme est strictement encadré : les banques doivent
                  respecter des règles de solvabilité, de liquidité et de fonds
                  propres pour éviter les excès et les crises financières.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaLandmark />}
                title="Le rôle de la Banque centrale"
                color="text-teal-400"
              >
                <p className="leading-relaxed mb-3">
                  Les banques peuvent aussi emprunter de l'argent auprès de la{" "}
                  <Term id={"BCE"} />. Celle-ci fixe les
                  <strong> taux directeurs</strong>, qui influencent toute
                  l'économie.
                </p>

                <p className="leading-relaxed">
                  Quand les taux de la BCE sont bas : les banques empruntent à
                  faible coût, les crédits sont moins chers pour les
                  particuliers, et l'économie est stimulée. L'inverse se produit
                  quand la BCE monte ses taux.
                </p>

                <ExampleBox>
                  Une banque emprunte à la <Term id={"BCE"} /> à 3 % et prête
                  des crédits immobiliers à 4,5 % : elle conserve une marge de{" "}
                  <strong>1,5 %</strong>. Si la BCE monte ses taux, les crédits
                  deviennent plus chers et les rendements des livrets
                  augmentent, car les banques doivent attirer des dépôts.
                </ExampleBox>
              </InfoBubble>

              <InfoBubble
                icon={<FaCoins />}
                title="Les autres sources de revenus des banques"
                color="text-amber-400"
              >
                <p className="leading-relaxed mb-3">
                  Les crédits ne sont pas la seule source de revenus des
                  banques.
                </p>

                <ul className="list-disc list-inside ml-4 mt-2 leading-relaxed">
                  <li>
                    <strong>Frais bancaires : </strong> cartes, tenue de compte,
                    incidents, virements internationaux.
                  </li>
                  <li>
                    <strong>
                      Frais sur les produits d'épargne et d'investissement
                      :{" "}
                    </strong>{" "}
                    <Term id={"AssuranceVie"} />, <Term id={"PEA"} />, etc.
                  </li>
                  <li>
                    <strong>Services aux entreprises :</strong> financement,
                    change, gestion de trésorerie.
                  </li>
                </ul>

                <ExampleBox>
                  Une banque peut gagner quelques euros par client et par mois
                  en frais fixes. Multipliée par plusieurs millions de clients,
                  cette somme représente une source de revenus considérable,
                  indépendante des crédits.
                </ExampleBox>
              </InfoBubble>

              <InfoBubble
                icon={<FaShieldAlt />}
                title="Pourquoi une banque ne disparaît pas du jour au lendemain"
                color="text-emerald-400"
              >
                <p className="leading-relaxed mb-3">
                  Les banques sont parmi les institutions les plus réglementées.
                  Elles doivent respecter des règles strictes de fonds propres
                  et de liquidité.
                </p>

                <p className="leading-relaxed">
                  En France, vos dépôts sont garantis jusqu'à
                  <strong> 100 000 € par personne et par banque</strong>.
                </p>

                <p className="leading-relaxed mt-3">
                  En cas de difficulté, les autorités interviennent :
                  renflouement, rachat par une autre banque, ou mise sous
                  contrôle de l'État. L'objectif est d'éviter qu'une faillite
                  bancaire ne se propage à l'ensemble du système financier.
                </p>
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
                title="Taux d'épargne"
                color="text-sky-400"
              >
                <p className="leading-relaxed mb-3">
                  Tous les produits d'épargne affichent un taux, mais il faut
                  distinguer le <strong>taux brut</strong> (avant impôts et
                  prélèvements sociaux) du <strong>taux net</strong> (ce que
                  vous touchez réellement). Comprendre comment ces taux sont
                  fixés permet d'éviter de tomber dans le piège des offres "trop
                  belles pour être vraies".
                </p>

                <p className="leading-relaxed mt-3">
                  - <strong>Livrets réglementés</strong> (Livret A, LDDS, LEP) -
                  taux fixés par l'État et révisés 2 fois par an. Rendement
                  garanti et exonéré d'impôt. Souvent inférieurs à l'inflation,
                  ce qui entraîne une perte de pouvoir d'achat à long terme.
                </p>

                <p className="leading-relaxed mt-3">
                  - <strong>PEL / CEL</strong> - taux déterminés à l'ouverture
                  et figés dans le temps. Un ancien PEL (avant 2016) peut
                  rapporter jusqu'à <strong>2,5 % net garanti</strong>. Les
                  nouveaux PEL plafonnés à <strong>1 % brut</strong> ne sont
                  plus compétitifs.
                </p>

                <p className="leading-relaxed mt-3">
                  - <strong>Livret bancaire & comptes à terme</strong> - taux
                  libres fixés par la banque. Souvent sous forme de{" "}
                  <strong>promotions temporaires</strong> (ex. 3 % pendant 3
                  mois, puis 0,5 % ensuite).
                </p>

                <p className="leading-relaxed mt-3">
                  - <strong>Comptes rémunérés type fintech</strong> -
                  rémunération quotidienne ou mensuelle, avec des taux
                  attractifs (souvent 2 à 4 %). Ces produits sont{" "}
                  <strong>100 % imposés</strong> au <Term id={"PFU"} />{" "}
                  contrairement aux livrets réglementés. Et ces taux{" "}
                  <strong>ne sont pas garantis</strong> : une baisse de la{" "}
                  <Term id={"BCE"} /> = une baisse immédiate du rendement.
                </p>

                <ExampleBox>
                  Un compte fintech à 2 % brut après <Term id={"PFU"} /> à 30 %,
                  le taux net tombe à <strong>1,4 %</strong>, soit souvent en
                  dessous du Livret A (garanti et défiscalisé). Le taux affiché
                  n'est pas le taux réel.
                </ExampleBox>
              </InfoBubble>

              <InfoBubble
                icon={<FaCreditCard />}
                title="Cartes de débit & crédit"
                color="text-indigo-400"
              >
                <p className="leading-relaxed mb-3">
                  Les cartes bancaires sont obligatoires. Mais toutes ne se
                  valent pas : entre débit immédiat, différé, crédit
                  renouvelable ou cartes premium, les différences peuvent avoir
                  un impact direct sur vos finances.
                </p>

                <p className="leading-relaxed">
                  - <strong>Carte de débit</strong> - reliée au compte courant,
                  elle débite vos achats soit immédiatement, soit en fin de mois
                  (<strong>débit différé</strong>).
                </p>

                <p className="leading-relaxed mt-3">
                  - <strong>Carte de crédit</strong> - très peu répandue en
                  France au niveau des banques. Proposée surtout par certaines
                  enseignes (Carrefour, Fnac, etc.) avec un{" "}
                  <strong>crédit renouvelable</strong>. Les{" "}
                  <strong>taux d'intérêt sont élevés (15-20 %)</strong>. À
                  éviter sauf si vous en comprenez parfaitement les risques.
                </p>

                <p className="leading-relaxed mt-3">
                  - <strong>Cartes premium</strong> (Gold, Platinum, Infinite) -
                  coûtent plus cher mais incluent assurances voyage, assistance
                  médicale, retraits gratuits à l'étranger. Intéressantes
                  uniquement si vous exploitez réellement ces avantages.
                </p>

                <ExampleBox>
                  <ul className="space-y-1.5">
                    <li>
                      <strong>Débit différé</strong> : 200 € de courses le 5 -
                      prélevés en une seule fois en fin de mois au lieu du jour
                      même.
                    </li>
                    <li>
                      <strong>Crédit renouvelable à 18 %</strong> : 1 000 €
                      remboursés sur 12 mois = environ{" "}
                      <strong>90 € d'intérêts</strong> en plus.
                    </li>
                    <li>
                      <strong>Carte Gold à 130 €/an</strong> : rentable si vous
                      voyagez souvent - une assurance annulation vaut 40-60 €
                      par trajet.
                    </li>
                  </ul>
                </ExampleBox>

                <p className="leading-relaxed mt-3">
                  Les banques en ligne proposent souvent des cartes gratuites
                  (débit immédiat ou différé), alors que les banques
                  traditionnelles facturent 30 à 60 €/an pour une carte
                  classique.
                </p>
              </InfoBubble>

              <InfoBubble
                icon={<FaExclamationTriangle />}
                title="Frais bancaires"
                color="text-orange-400"
              >
                <p className="leading-relaxed">
                  Les frais bancaires peuvent rapidement grignoter vos gains,
                  même sur des placements modestes. Ils incluent :{" "}
                  <strong>frais de tenue de compte</strong>,{" "}
                  <strong>cartes bancaires</strong>,{" "}
                  <strong>virements internationaux</strong>,{" "}
                  <strong>commissions de courtage</strong>, et parfois des frais
                  cachés sur certains services.
                </p>

                <p className="leading-relaxed mt-3">
                  Pour optimiser vos frais, regardez surtout :
                </p>

                <ul className="list-disc list-inside ml-4 mt-2 leading-relaxed">
                  <li>
                    <strong>Frais fixes du compte courant :</strong> certaines
                    banques en ligne sont gratuites ou très peu chères.
                  </li>
                  <li>
                    <strong>Cartes bancaires :</strong> vérifiez le coût annuel
                    et assurez vous d'utiliser les avantages inclus.
                  </li>
                  <li>
                    <strong>Frais de virements :</strong> domestiques,{" "}
                    <Term id={"SEPA"} /> ou internationaux, certains comptes
                    gratuits ne facturent rien pour les virements standards.
                  </li>
                  <li>
                    <strong>Commissions de courtage :</strong> si vous
                    investissez, comparez les courtiers ou brokers pour éviter
                    des frais élevés sur chaque transaction.
                  </li>
                  <li>
                    <strong>Frais cachés :</strong> découvert autorisé, retraits
                    hors réseau, services additionnels - regardez le détail dans
                    la brochure tarifaire.
                  </li>
                  <li>
                    <strong>Promotions temporaires :</strong> attention aux
                    offres de lancement qui disparaissent au bout de quelques
                    mois.
                  </li>
                </ul>

                <p className="leading-relaxed mt-3">
                  Choisir une banque et un compte qui minimisent vos frais
                  fixes, et un courtier compétitif si vous placez de l'argent.
                  Optimiser les frais, c'est directement augmenter le rendement
                  net de vos placements.
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
                icon={<FaLifeRing />}
                title="Garantie des dépôts"
                color="text-cyan-400"
              >
                <p className="leading-relaxed">
                  En France, vos dépôts sont protégés jusqu'à{" "}
                  <strong>100 000 € par établissement bancaire</strong> grâce au{" "}
                  <Term id={"FGDR"} />. Cela couvre comptes courants, livrets,
                  et comptes d'épargne. Il ne s'applique pas aux pertes dues à
                  des fraudes, piratages ou erreurs de gestion de votre part.
                </p>

                <ExampleBox>
                  <ul className="space-y-1.5">
                    <li>
                      Vous avez 80 000 € sur votre compte courant et 30 000 €
                      sur un livret dans la même banque, seuls{" "}
                      <strong>100 000 € seront remboursés</strong> en cas de
                      faillite.
                    </li>
                    <li>
                      150 000 € répartis sur deux banques différentes (80 000 €
                      + 70 000 €) seraient <strong>entièrement couverts</strong>
                      , car chaque banque reste sous le plafond.
                    </li>
                  </ul>
                </ExampleBox>
              </InfoBubble>

              <InfoBubble
                icon={<FaLock />}
                title="Sécurité des transactions"
                color="text-blue-400"
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
                    : ils sont strictement personnels et permettent d'accéder à
                    vos comptes.
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
                    offres d'investissement trop belles pour être vraies.
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
                  Pour vous en prémunir : activer le 2FA, utiliser des mots de
                  passe forts et uniques, vérifier les sources, et bloquer
                  immédiatement tout accès suspect.
                </p>
              </InfoBubble>
            </div>
          </section>
        </Container>
      </PageLayout>
    </>
  );
};

export default Banking;
