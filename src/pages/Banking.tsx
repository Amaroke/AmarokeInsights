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
} from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";
import Term from "../components/Term";

const Banking: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <>
      <div className="flex h-screen text-gray-300 bg-[#12121b]">
        <main
          className={`flex-1 overflow-auto pt-16 md:mt-16 md:pt-0 transition-all duration-300 ${
            isOpen ? "md:ml-64" : "md:ml-0"
          }`}
        >
          <div className="max-w-6xl mx-auto px-2 md:px-4 py-6 md:mb-0 mb-24">
            <section id="how-banks-work" className="scroll-mt-22 mb-12">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                Comment fonctionnent les banques ?
              </h2>

              <div className="space-y-4">
                <InfoBubble
                  icon={<FaUniversity />}
                  title="Pourquoi les banques veulent votre argent"
                  color="text-purple-400"
                >
                  <p className="leading-relaxed mb-3">
                    Quand vous déposez de l’argent sur votre compte bancaire, il
                    ne reste pas « stocké dans un coffre ». En réalité,{" "}
                    <strong>
                      la banque devient propriétaire de votre argent
                    </strong>
                    , et ce que vous possédez, c’est une
                    <strong> créance sur la banque</strong>. Elle peut utiliser
                    votre argent pour prêter, investir ou renforcer sa solidité
                    financière.
                  </p>

                  <p className="leading-relaxed mb-3">
                    Même si vous ne possédez plus physiquement l’argent, la
                    banque doit :
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
                      protégés jusqu’à 100 000 € par le <Term id={"FGDR"} /> en
                      cas de faillite de la banque.
                    </li>
                  </ul>
                </InfoBubble>

                <InfoBubble
                  icon={<FaExchangeAlt />}
                  title="Le cœur du modèle bancaire : prêter plus cher qu’ils n’empruntent"
                  color="text-purple-400"
                >
                  <p className="leading-relaxed mb-3">
                    Le principal métier d’une banque est simple :
                    <strong>
                      {" "}
                      emprunter de l’argent à bas coût et le prêter plus cher
                    </strong>
                    . La différence entre les deux s’appelle la{" "}
                    <strong>marge bancaire</strong>.
                  </p>

                  <p className="leading-relaxed">
                    - La banque vous rémunère peu (ou pas) sur vos dépôts.
                    <br />- Elle prête cet argent à des particuliers ou
                    entreprises avec des intérêts.
                  </p>

                  <p className="leading-relaxed italic mt-3">
                    Exemple concret :
                  </p>

                  <ul className="list-disc list-inside ml-4 mt-2 leading-relaxed">
                    <li>Vous laissez 10 000 € sur votre compte (0 %).</li>
                    <li>
                      La banque prête ces 10 000 € à un client pour un crédit
                      auto à 6 %.
                    </li>
                    <li>
                      Chaque année, elle perçoit environ{" "}
                      <strong>600 € d’intérêts</strong>.
                    </li>
                  </ul>

                  <p className="leading-relaxed mt-3">
                    Une partie sert à payer ses coûts (salaires, agences,
                    informatique), le reste constitue son bénéfice.
                  </p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaLayerGroup />}
                  title="Les réserves fractionnaires, comment 1 € permet de prêter plus"
                  color="text-purple-400"
                >
                  <p className="leading-relaxed mb-3">
                    Les banques ne prêtent pas uniquement l’argent que vous
                    déposez. Elles fonctionnent avec un système appelé
                    <strong> réserves fractionnaires</strong>.
                  </p>

                  <p className="leading-relaxed">
                    Cela signifie qu’elles ne gardent qu’une petite partie des
                    dépôts en réserve, et peuvent prêter le reste.
                  </p>

                  <p className="leading-relaxed italic mt-3">Exemple :</p>

                  <ul className="list-disc list-inside ml-4 mt-2 leading-relaxed">
                    <li>
                      Vous déposez <strong>1 000 €</strong> sur votre compte
                      dans une banque A.
                    </li>
                    <li>
                      La banque A conserve <strong>100 €</strong> en réserve
                      pour faire face aux retraits et respecter la
                      réglementation.
                    </li>
                    <li>
                      Elle peut prêter les <strong>900 € restants</strong> à un
                      autre client (crédit auto, prêt personnel, crédit
                      immobilier…).
                    </li>
                    <li>
                      Ce client dépense ces <strong>900 €</strong> (par exemple
                      pour acheter une voiture).
                    </li>
                    <li>
                      Le vendeur dépose ensuite ces <strong>900 €</strong> sur
                      son compte dans une banque B.
                    </li>
                    <li>
                      La banque B conserve à son tour <strong>90 €</strong> en
                      réserve et peut prêter environ <strong>810 €</strong>.
                    </li>
                    <li>
                      Ces <strong>810 €</strong> sont à nouveau dépensés et
                      redéposés dans une autre banque.
                    </li>
                  </ul>

                  <p className="leading-relaxed mt-3">
                    À chaque étape, une partie de l’argent est conservée en
                    réserve et <strong>le reste est prêté à nouveau</strong>. Le
                    montant total de crédits accordés devient bien supérieur au
                    dépôt initial de 1 000 €.
                  </p>

                  <p className="leading-relaxed mt-3">
                    Résultat : <strong>le crédit crée de la monnaie</strong>. Ce
                    n’est pas de l’argent « imprimé », mais de l’argent
                    scriptural créé par le système bancaire, sous le contrôle
                    des autorités financières.
                  </p>

                  <p className="leading-relaxed mt-3 italic">
                    ⚠️ Ce mécanisme est strictement encadré : les banques
                    doivent respecter des règles de solvabilité, de liquidité et
                    de fonds propres pour éviter les excès et les crises
                    financières.
                  </p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaLandmark />}
                  title="Le rôle de la Banque centrale"
                  color="text-purple-400"
                >
                  <p className="leading-relaxed mb-3">
                    Les banques peuvent aussi emprunter de l’argent auprès de la{" "}
                    <Term id={"BCE"} />. Celle-ci fixe les
                    <strong> taux directeurs</strong>, qui influencent toute
                    l’économie.
                  </p>

                  <p className="leading-relaxed">
                    Quand les taux de la BCE sont bas :
                  </p>

                  <ul className="list-disc list-inside ml-4 mt-2 leading-relaxed">
                    <li>Les banques empruntent à faible coût.</li>
                    <li>Les crédits sont moins chers pour les particuliers.</li>
                    <li>L’économie est stimulée.</li>
                  </ul>

                  <p className="leading-relaxed">
                    Par exemple, si une banque emprunte à la BCE à 3 % et prête
                    des crédits immobiliers à 4,5 %, elle conserve une marge de
                    1,5 %. À l’inverse, quand la BCE augmente ses taux, les
                    crédits deviennent plus chers et les rendements des produits
                    d’épargne augmentent, car elles doivent attirer des dépôts.
                  </p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaCoins />}
                  title="Les autres sources de revenus des banques"
                  color="text-purple-400"
                >
                  <p className="leading-relaxed mb-3">
                    Les crédits ne sont pas la seule source de revenus des
                    banques.
                  </p>

                  <ul className="list-disc list-inside ml-4 mt-2 leading-relaxed">
                    <li>
                      <strong>Frais bancaires : </strong> cartes, tenue de
                      compte, incidents, virements internationaux.
                    </li>
                    <li>
                      <strong>
                        Frais sur les produits d’épargne et d’investissement
                        :{" "}
                      </strong>{" "}
                      <Term id={"AssuranceVie"} />, <Term id={"PEA"} />, etc.
                    </li>
                    <li>
                      <strong>Services aux entreprises :</strong> financement,
                      change, gestion de trésorerie.
                    </li>
                  </ul>

                  <p className="leading-relaxed mt-3 italic">
                    Exemple : une banque peut gagner quelques euros par client
                    et par mois en frais fixes. Multipliez cela par plusieurs
                    millions de clients.
                  </p>
                </InfoBubble>

                <InfoBubble
                  icon={<FaShieldAlt />}
                  title="Pourquoi une banque ne disparaît pas du jour au lendemain"
                  color="text-purple-400"
                >
                  <p className="leading-relaxed mb-3">
                    Les banques sont parmi les institutions les plus
                    réglementées. Elles doivent respecter des règles strictes de
                    fonds propres et de liquidité.
                  </p>

                  <p className="leading-relaxed">
                    En France, vos dépôts sont garantis jusqu’à
                    <strong> 100 000 € par personne et par banque</strong>.
                  </p>

                  <p className="leading-relaxed mt-3 italic">
                    En cas de difficulté, une banque est généralement :
                  </p>

                  <ul className="list-disc list-inside ml-4 mt-2 leading-relaxed">
                    <li>
                      La banque est surveillée et reçoit de l’argent pour rester
                      solide
                    </li>
                    <li>
                      Elle peut être rachetée ou fusionner avec une autre banque
                    </li>
                    <li>
                      Elle peut être réorganisée sous le contrôle de l’État pour
                      éviter les problèmes
                    </li>
                  </ul>
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
                    est intéressant aujourd’hui. Mais les nouveaux PEL plafonnés
                    à <strong>1 % brut</strong> ne sont plus compétitifs.
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
                    , soit en-dessous du taux du Livret A (1,5 % net et garanti,
                    au moment où j’écris ces lignes).
                  </p>

                  <p className="leading-relaxed mt-2">
                    ⚠️ Ces taux <strong>ne sont pas garantis</strong> : ils
                    dépendent des taux directeurs de la <Term id={"BCE"} /> et
                    des frais de dépôt appliqués par la plateforme. Une baisse
                    de la BCE = une baisse immédiate du rendement. Un produit
                    séduisant peut rapporter moins qu’un livret garanti et
                    défiscalisé.
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
                    ➜ peuvent coûter plus chères ou nécessiter des conditions
                    spécifiques mais incluent assurances voyage, assistance
                    médicale, retraits gratuits à l’étranger… Intéressantes
                    uniquement si vous exploitez réellement ces avantages.
                  </p>

                  <p className="leading-relaxed italic">
                    Exemple : une carte Gold à 130 €/an peut être rentabilisée
                    si vous voyagez souvent, car une assurance annulation coûte
                    40–60 € par trajet.
                  </p>

                  <p className="leading-relaxed mt-4">
                    <strong>Astuce :</strong> comparez toujours les frais. Les
                    banques en ligne proposent souvent des cartes gratuites
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
                    Pour optimiser vos frais, regardez surtout :
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
                    Choisir une banque et un compte qui minimisent vos frais
                    fixes, et un courtier ou une plateforme d’investissement
                    compétitive si vous placez de l’argent. Optimiser les frais,
                    c’est directement augmenter le rendement net de vos
                    placements.
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
                    au <Term id={"FGDR"} />. Cela couvre comptes courants,
                    livrets, et comptes d’épargne. Il ne s’applique pas aux
                    pertes dues à des fraudes, piratages ou erreurs de gestion
                    de votre part. Par exemple, si vous êtes victime d’une
                    arnaque et que votre compte est vidé, le{" "}
                    <Term id={"FGDR"} /> ne vous remboursera pas.
                  </p>

                  <p className="leading-relaxed mt-2">
                    Exemple : si vous avez 80 000 € sur votre compte courant et
                    30 000 € sur un livret, seuls{" "}
                    <strong>100 000 € seront remboursés</strong>.
                  </p>

                  <p className="leading-relaxed mt-2">
                    Ce plafond de 100 000 € par établissement bancaire
                    s’applique uniquement en cas de défaillance de la banque,
                    c’est-à-dire si la banque fait faillite et ne peut plus
                    restituer vos fonds. Une manère d'utiliser le{" "}
                    <Term id={"FGDR"} /> est de répartir vos fonds sur plusieurs
                    banques pour bénéficier de plusieurs plafonds de garantie.
                    Exemple : 150 000 € répartis sur deux banques (80 000 € dans
                    la banque A et 70 000 € dans la banque B) seraient
                    entièrement couverts, car chaque banque ne dépasse pas le
                    plafond de 100 000 €.
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
                    Pour vous en prémunir, activer 2FA, utiliser des mots de
                    passe forts et uniques, vérifier les sources, et bloquer
                    immédiatement tout accès suspect. Pour faire court,
                    appliquer les recommandations générale de sécurité en ligne.
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

export default Banking;
