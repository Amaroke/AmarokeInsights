import React from "react";
import {
  FaUser,
  FaUserFriends,
  FaShieldAlt,
  FaLeaf,
  FaGem,
  FaGraduationCap,
  FaHome,
  FaKey,
  FaChartLine,
  FaBriefcase,
  FaUmbrella,
  FaLifeRing,
  FaGlobe,
  FaLock,
  FaUniversity,
  FaSeedling,
} from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";
import Term from "../components/Term";
import ExampleBox from "../components/ExampleBox";

const Accounts: React.FC = () => {
  return (
    <PageLayout
      title="Les types de comptes"
      description="Comptes courants, d'épargne et d'investissement : lequel choisir et pourquoi."
    >
      <Container>
        <section id="current-accounts" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Comptes courants
          </h2>
          <div className="space-y-4">
            <InfoBubble
              icon={<FaUser />}
              title="Compte courant individuel"
              color="text-blue-400"
            >
              <p className="leading-relaxed">
                Compte principal pour gérer ses opérations bancaires
                quotidiennes seul. C'est le compte sur lequel arrive votre
                salaire et depuis lequel partent vos prélèvements.
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  <strong>Avantage</strong> : gestion autonome, accès immédiat
                  aux fonds.
                </li>
                <li>
                  <strong>Inconvénient</strong> : aucun rendement, frais
                  bancaires possibles.
                </li>
              </ul>
            </InfoBubble>

            <InfoBubble
              icon={<FaUserFriends />}
              title="Compte courant joint"
              color="text-blue-400"
            >
              <p className="leading-relaxed">
                Compte partagé entre deux personnes (couple, colocataires) pour
                gérer les dépenses communes. Chaque co-titulaire peut effectuer
                des opérations indépendamment.
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  <strong>Avantage</strong> : transparence et partage des
                  dépenses communes.
                </li>
                <li>
                  <strong>Inconvénient</strong> : responsabilité partagée, un
                  co-titulaire peut agir seul sur le compte.
                </li>
              </ul>
            </InfoBubble>
          </div>
        </section>

        <section id="saving-account" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Livrets d'épargne
          </h2>
          <div className="space-y-4">
            <InfoBubble
              icon={<FaShieldAlt />}
              title="Livret A"
              color="text-green-400"
            >
              <p className="leading-relaxed">
                Le livret réglementé de référence, accessible à tous sans
                condition de revenus. Sécurisé, disponible à tout moment et
                exonéré d'impôt.
              </p>
              <ExampleBox>
                <ul>
                  <li>
                    <strong>Taux :</strong> 1,5 % net
                  </li>
                  <li>
                    <strong>Plafond :</strong> 22 950 €
                  </li>
                  <li>
                    <strong>Fiscalité :</strong> exonéré d'
                    <Term id={"IR"} /> et de prélèvements sociaux
                  </li>
                  <li>
                    <strong>Usage :</strong> fonds de précaution, épargne
                    disponible à tout moment
                  </li>
                </ul>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaLeaf />}
              title="LDDS - Livret de Développement Durable et Solidaire"
              color="text-green-500"
            >
              <p className="leading-relaxed">
                Livret similaire au Livret A, destiné à financer des projets
                durables et de l'économie sociale. Mêmes avantages, plafond plus
                bas. À utiliser en complément du Livret A.
              </p>
              <ExampleBox>
                <ul>
                  <li>
                    <strong>Taux :</strong> 1,5 % net
                  </li>
                  <li>
                    <strong>Plafond :</strong> 12 000 €
                  </li>
                  <li>
                    <strong>Fiscalité :</strong> exonéré d'impôt et prélèvements
                    sociaux
                  </li>
                  <li>
                    <strong>Usage :</strong> similaire au Livret A
                  </li>
                </ul>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaGem />}
              title="LEP - Livret d'Épargne Populaire"
              color="text-amber-400"
            >
              <p className="leading-relaxed">
                Le meilleur taux parmi les livrets réglementés, réservé aux
                foyers dont le revenu fiscal de référence ne dépasse pas un
                certain plafond.{" "}
                <strong>À prioriser si vous êtes éligible</strong>, avant le
                Livret A et le LDDS.
              </p>
              <ExampleBox>
                <ul>
                  <li>
                    <strong>Taux :</strong> 2,5 % net
                  </li>
                  <li>
                    <strong>Plafond :</strong> 10 000 €
                  </li>
                  <li>
                    <strong>Fiscalité :</strong> exonéré d'impôt et prélèvements
                    sociaux
                  </li>
                  <li>
                    <strong>Conditions :</strong> plafond de revenu fiscal de
                    référence à vérifier chaque année
                  </li>
                  <li>
                    <strong>Usage :</strong> fonds de précaution prioritaire si
                    éligible
                  </li>
                </ul>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaGraduationCap />}
              title="Livret Jeune"
              color="text-purple-400"
            >
              <p className="leading-relaxed">
                Livret réservé aux 12-25 ans avec un taux au moins égal au
                Livret A, parfois supérieur selon la banque. À conserver jusqu'à
                25 ans, puis il se ferme automatiquement.
              </p>
              <ExampleBox>
                <ul>
                  <li>
                    <strong>Taux :</strong> 1,5 % minimum, parfois plus selon la
                    banque
                  </li>
                  <li>
                    <strong>Plafond :</strong> 1 600 €
                  </li>
                  <li>
                    <strong>Fiscalité :</strong> exonéré d'impôt et prélèvements
                    sociaux
                  </li>
                  <li>
                    <strong>Conditions :</strong> 12 à 25 ans, fermeture
                    automatique à 25 ans
                  </li>
                  <li>
                    <strong>Usage :</strong> première épargne, argent disponible
                  </li>
                </ul>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaHome />}
              title="PEL - Plan Épargne Logement"
              color="text-orange-400"
            >
              <p className="leading-relaxed">
                Plan d'épargne bloqué destiné à préparer un projet immobilier.
                Le taux est fixé à l'ouverture et ne change pas pendant toute la
                durée du plan. Certains anciens PEL ont des taux très
                attractifs.
              </p>
              <ExampleBox>
                <ul>
                  <li>
                    <strong>Taux :</strong> 2 % brut (pour les PEL ouverts à
                    partir de janvier 2026, taux bloqué à l'ouverture)
                  </li>
                  <li>
                    <strong>Plafond :</strong> 61 200 €
                  </li>
                  <li>
                    <strong>Fiscalité :</strong> gains soumis au{" "}
                    <Term id={"PFU"} />
                  </li>
                  <li>
                    <strong>Blocage :</strong> 2 ans minimum (sinon retour au
                    taux du CEL)
                  </li>
                  <li>
                    <strong>Usage :</strong> épargne projet immobilier à moyen
                    terme
                  </li>
                </ul>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaKey />}
              title="CEL - Compte Épargne Logement"
              color="text-orange-300"
            >
              <p className="leading-relaxed">
                Compte d'épargne souple lié à un projet immobilier. Moins
                avantageux que le PEL mais plus flexible sur les retraits.
              </p>
              <ExampleBox>
                <ul>
                  <li>
                    <strong>Taux :</strong> 1 % brut
                  </li>
                  <li>
                    <strong>Plafond :</strong> 15 300 €
                  </li>
                  <li>
                    <strong>Fiscalité :</strong> gains soumis au{" "}
                    <Term id={"PFU"} />
                  </li>
                  <li>
                    <strong>Disponibilité :</strong> fonds disponibles au-delà
                    de 300 €
                  </li>
                  <li>
                    <strong>Usage :</strong> épargne projet immobilier,
                    complément du PEL
                  </li>
                </ul>
              </ExampleBox>
            </InfoBubble>
          </div>
        </section>

        <section id="investment-account" className="scroll-mt-22 mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Enveloppes d'investissement
          </h2>
          <div className="space-y-4">
            <InfoBubble
              icon={<FaChartLine />}
              title="PEA - Plan Épargne en Actions"
              color="text-blue-400"
            >
              <p className="leading-relaxed">
                L'enveloppe de référence pour investir en actions européennes
                avec une fiscalité très avantageuse après 5 ans. Idéale pour
                investir à long terme via des ETF.
              </p>
              <ExampleBox>
                <ul>
                  <li>
                    <strong>Plafond :</strong> 150 000 €
                  </li>
                  <li>
                    <strong>Fiscalité :</strong> <Term id={"PFU"} /> si retrait
                    avant 5 ans, seulement les <Term id={"PS"} /> après 5 ans
                  </li>
                  <li>
                    <strong>Usage :</strong> investissement long terme,
                    retraite, ETF world
                  </li>
                  <li>
                    <strong>Avantage :</strong> fiscalité très favorable après 5
                    ans, rendement potentiel élevé.
                  </li>
                  <li>
                    <strong>Inconvénient :</strong> limité aux titres de l'UE
                    (hors certains fonds).
                  </li>
                </ul>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaBriefcase />}
              title="PEE - Plan d'Épargne Entreprise"
              color="text-indigo-400"
            >
              <p className="leading-relaxed">
                Dispositif d'épargne salariale proposé par l'employeur. Il peut
                être alimenté par vos versements volontaires, votre prime
                d'intéressement ou de participation, et surtout par l'abondement
                : votre entreprise complète ce que vous versez. C'est un gain
                garanti dès le départ, difficile à battre.
              </p>
              <ExampleBox>
                <p>
                  <strong>L'abondement</strong>
                  <br />
                  Si vous versez 500 € et que votre employeur abonde à 100 %,
                  vous avez 1 000 € investis. L'abondement est exonéré d'impôt
                  sur le revenu.
                </p>
                <p>
                  <strong>Fiscalité à la sortie (après 5 ans)</strong>
                  <br />
                  Le capital récupéré (versements + abondement) est exonéré d'
                  <Term id={"IR"} /> et de prélèvements sociaux. Seules les
                  plus-values (les gains générés) restent soumises aux{" "}
                  <Term id={"PS"} />, mais pas à l'
                  <Term id={"IR"} />.
                </p>
                <ul>
                  <li>
                    <strong>Déblocage anticipé possible :</strong> mariage,
                    naissance, licenciement, invalidité, achat de résidence
                    principale...
                  </li>
                  <li>
                    <strong>Inconvénient :</strong> fonds bloqués 5 ans, choix
                    de fonds souvent limité à ce que propose l'employeur
                  </li>
                </ul>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaUmbrella />}
              title="PER - Plan Épargne Retraite"
              color="text-violet-400"
            >
              <p className="leading-relaxed">
                Enveloppe dédiée à la retraite. L'argent est bloqué jusqu'à la
                retraite - c'est le principe. En échange, l'État vous propose un
                choix : payer moins d'impôts maintenant, ou payer moins à la
                sortie. Vous ne choisissez pas si vous payez, mais quand.
              </p>
              <ExampleBox>
                <p>
                  <strong>Option A - Réduction d'impôts maintenant</strong>
                  <br />
                  Ce que vous versez sur le PER est soustrait de votre revenu
                  imposable de l'année. Si vous gagnez 40 000 € et versez 2 000
                  €, vous n'êtes imposé que sur 38 000 €. En contrepartie, à la
                  retraite, tout ce que vous retirez est imposé comme un revenu
                  (le capital versé + les gains). Intéressant si vous êtes
                  fortement imposé aujourd'hui.
                </p>
                <p>
                  <strong>
                    Option B - Pas d'avantage maintenant, sortie plus légère
                  </strong>
                  <br />
                  Vous ne réduisez rien sur votre feuille d'impôts. En échange,
                  à la retraite, vous récupérez exactement ce que vous avez
                  versé sans payer d'impôts dessus. Seuls les gains générés
                  (intérêts, plus-values) sont taxés au <Term id={"PFU"} />.
                  Intéressant si vous êtes peu imposé aujourd'hui.
                </p>
                <p>
                  <strong>À la retraite : capital ou rente ?</strong>
                  <br />
                  Quand vous débloquez votre PER, vous choisissez comment
                  récupérer l'argent. En <strong>capital</strong>, vous
                  récupérez tout d'un coup (ou en plusieurs fois), comme un
                  virement sur votre compte. En <strong>rente</strong>, l'argent
                  vous est versé chaque mois jusqu'à votre décès, comme un
                  complément de retraite. La rente est plus sécurisante si vous
                  vivez longtemps, mais l'argent ne se transmet pas à vos
                  héritiers. Le capital vous laisse plus de liberté mais demande
                  à être géré.
                </p>
                <ul>
                  <li>
                    <strong>Inconvénient principal :</strong> argent
                    inaccessible jusqu'à la retraite, sauf exceptions (achat de
                    résidence principale, invalidité, licenciement...)
                  </li>
                </ul>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaLifeRing />}
              title="Assurance Vie"
              color="text-teal-400"
            >
              <p className="leading-relaxed">
                Enveloppe polyvalente permettant d'épargner sur des fonds
                sécurisés (fonds euros) ou des supports dynamiques (unités de
                compte). Très utile pour optimiser la succession.
              </p>
              <ExampleBox>
                <ul>
                  <li>
                    <strong>Fiscalité :</strong> abattement annuel sur les gains
                    de 4 600 € (seul) ou 9 200 € (couple) après 8 ans,{" "}
                    <Term id={"PS"} />
                  </li>
                  <li>
                    <strong>Usage :</strong> épargne diversifiée long terme,
                    succession, complément retraite
                  </li>
                  <li>
                    <strong>Avantage :</strong> flexibilité des supports,
                    fiscalité avantageuse après 8 ans, outil de succession.
                  </li>
                  <li>
                    <strong>Inconvénient :</strong> frais d'entrée et de gestion
                    à surveiller, unités de compte risquées.
                  </li>
                </ul>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaGlobe />}
              title="CTO - Compte-Titres Ordinaire"
              color="text-sky-400"
            >
              <p className="leading-relaxed">
                Le compte d'investissement sans contrainte : aucun plafond,
                aucune restriction géographique, accès à tous les actifs
                (actions, obligations, ETF, cryptos…).
              </p>
              <ExampleBox>
                <ul>
                  <li>
                    <strong>Plafond :</strong> aucun
                  </li>
                  <li>
                    <strong>Fiscalité :</strong> gains et dividendes soumis au{" "}
                    <Term id={"PFU"} />
                  </li>
                  <li>
                    <strong>Usage :</strong> diversification internationale,
                    actifs hors PEA, complément d'enveloppes fiscales
                  </li>
                  <li>
                    <strong>Avantage :</strong> liberté totale, aucun plafond,
                    diversification internationale.
                  </li>
                  <li>
                    <strong>Inconvénient :</strong> fiscalité moins avantageuse
                    qu'un PEA.
                  </li>
                </ul>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaLock />}
              title="CAT - Compte à Terme"
              color="text-yellow-500"
            >
              <p className="leading-relaxed">
                Épargne bloquée pour une durée déterminée (quelques mois à
                plusieurs années) en échange d'un taux garanti. Sans risque de
                perte en capital.
              </p>
              <ExampleBox>
                <ul>
                  <li>
                    <strong>Fiscalité :</strong> gains soumis au{" "}
                    <Term id={"PFU"} />
                  </li>
                  <li>
                    <strong>Usage :</strong> épargne moyen terme sécurisée,
                    alternative aux livrets si taux attractif
                  </li>
                  <li>
                    <strong>Avantage :</strong> rendement stable et garanti,
                    sans risque.
                  </li>
                  <li>
                    <strong>Inconvénient :</strong> fonds bloqués jusqu'à
                    l'échéance, aucun intérêt versé en cas de retrait anticipé.
                  </li>
                </ul>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaUniversity />}
              title="Livret bancaire (non réglementé)"
              color="text-gray-400"
            >
              <p className="leading-relaxed">
                Livret d'épargne proposé librement par les banques, sans plafond
                réglementé ni exonération fiscale. Généralement moins avantageux
                que les livrets réglementés.
              </p>
              <ExampleBox>
                <ul>
                  <li>
                    <strong>Fiscalité :</strong> gains soumis au{" "}
                    <Term id={"PFU"} />
                  </li>
                  <li>
                    <strong>Usage :</strong> à éviter si éligible aux livrets
                    réglementés
                  </li>
                  <li>
                    <strong>Avantage :</strong> flexible, fonds disponibles
                    immédiatement.
                  </li>
                  <li>
                    <strong>Inconvénient :</strong> rendement faible et
                    fiscalisé.
                  </li>
                </ul>
              </ExampleBox>
            </InfoBubble>

            <InfoBubble
              icon={<FaSeedling />}
              title="PEAC - Plan Épargne Avenir Climat"
              color="text-emerald-400"
            >
              <p className="leading-relaxed">
                Enveloppe créée en 2024 pour les moins de 21 ans, dédiée à
                l'investissement dans des projets contribuant à la transition
                écologique. Fonds bloqués jusqu'aux 18 ans du titulaire ou 5 ans
                minimum.
              </p>
              <ExampleBox>
                <ul>
                  <li>
                    <strong>Plafond :</strong> 22 950 €
                  </li>
                  <li>
                    <strong>Fiscalité :</strong> exonéré d'
                    <Term id={"IR"} /> et de <Term id={"PS"} />
                  </li>
                  <li>
                    <strong>Conditions :</strong> moins de 21 ans à l'ouverture,
                    fermeture à 30 ans
                  </li>
                  <li>
                    <strong>Usage :</strong> investissement <Term id={"ESG"} />{" "}
                    long terme pour les jeunes
                  </li>
                  <li>
                    <strong>Avantage :</strong> exonération fiscale complète,
                    contribue à la transition climatique.
                  </li>
                  <li>
                    <strong>Inconvénient :</strong> fonds bloqués, fermeture
                    automatique à 30 ans.
                  </li>
                </ul>
              </ExampleBox>
            </InfoBubble>
          </div>
        </section>
      </Container>
    </PageLayout>
  );
};

export default Accounts;
