import React from "react";
import { FaExchangeAlt, FaGift, FaReceipt, FaChartLine } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import ExampleBox from "../components/ExampleBox";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";
import Term from "../components/Term";
import Disclaimer from "../components/Disclaimer";

const Taxes: React.FC = () => {
  return (
    <PageLayout
      title="Optimisation fiscale"
      description="Optimiser sa fiscalité sur les revenus du capital."
    >
      <Container gap="sm">
        <Disclaimer title="Page en cours de création">
          Cette page est en cours de construction. Le contenu actuel n'est
          qu'un premier jet, publié au fur et à mesure des sujets traités.
          D'autres parties viendront le compléter, et celles déjà en ligne
          sont susceptibles d'être revues ou reformulées.
        </Disclaimer>
        <section id="pourquoi-pea" className="scroll-mt-22">
          <div className="space-y-4">
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
                . Seuls les <Term id={"PS"} /> restent dus au moment du
                retrait.
              </p>

              <p className="leading-relaxed mt-2">
                Autre avantage majeur, <b>tant que l'argent reste dans le
                PEA</b>, vous ne payez <b>aucun impôt</b>, même si vous{" "}
                <b>achetez et revendez vos titres plusieurs fois</b>.
                L'imposition n'intervient qu'au moment où vous{" "}
                <b>retirez de l'argent</b> du plan. Vous pouvez donc{" "}
                <b>arbitrer librement</b> (vendre un <Term id={"ETF"} /> pour
                en acheter un autre, sécuriser des plus-values, rééquilibrer
                votre portefeuille) sans aucune fiscalité, ce qui laisse
                l'intégralité de vos gains continuer à travailler grâce aux
                intérêts composés.
              </p>

              <p className="leading-relaxed mt-2">
                À titre de comparaison, un <Term id={"CTO"} /> est soumis au{" "}
                <Term id={"PFU"} /> sur l'ensemble des gains. Sur un horizon
                long, l'écart de fiscalité se traduit par une différence de
                capital final très significative grâce à l'effet des intérêts
                composés.
              </p>

              <ExampleBox>
                Sur <b>10 000 €</b> investis sur un <Term id={"ETF"} />{" "}
                capitalisant à <b>+7 %/an pendant 20 ans</b>, le résultat net
                est <b className="text-green-400">33 359 €</b> avec un PEA de
                plus de 5 ans, contre <b>29 686 €</b> en CTO ou PEA retiré
                trop tôt - soit <b>+3 673 €</b> de gain supplémentaire
                uniquement grâce à l'exonération d'impôt sur le revenu (12,8 %
                de la plus-value économisés). Un retrait <b>avant 5 ans</b>{" "}
                est taxé comme un CTO au <Term id={"PFU"} />, l'avantage
                disparaît et le plan est clôturé.
              </ExampleBox>
            </InfoBubble>
          </div>
        </section>

        <section id="purge-plus-values-cto" className="scroll-mt-22">
          <div className="space-y-4">
            <InfoBubble
              icon={<FaExchangeAlt />}
              title="La purge des plus-values au décès (CTO)"
              color="text-green-400"
            >
              <p className="leading-relaxed">
                Contrairement à une idée reçue, le <Term id="CTO" /> n'est pas
                totalement dénué d'avantage fiscal. En cas de décès du
                titulaire, les plus-values latentes accumulées de son vivant
                sont <strong>purgées</strong>.
              </p>

              <p className="leading-relaxed mt-2">
                Concrètement, au décès, la valeur des titres est réévaluée à
                leur cours du jour du décès pour le calcul des droits de
                succession. Les héritiers reçoivent les titres avec cette
                nouvelle valeur comme <strong>prix d'acquisition</strong>. S'ils
                revendent juste après la succession, aucune plus-value
                taxable au titre de l'impôt sur le revenu n'est constatée,
                même si le titulaire initial avait acheté ces titres des
                décennies plus tôt à un prix bien plus bas.
              </p>

              <ExampleBox>
                Vous achetez des actions <b>10 000 €</b> il y a 20 ans, elles
                valent <b>50 000 €</b> à votre décès. Vos héritiers reçoivent
                ces titres avec un prix d'acquisition réévalué à 50 000 €, la
                plus-value latente de <b>40 000 €</b> accumulée de votre
                vivant n'est jamais taxée au titre de l'impôt sur le revenu.
                Seuls les droits de succession s'appliquent, sur la valeur
                totale transmise.
              </ExampleBox>

              <p className="leading-relaxed mt-2">
                Cet avantage successoral ne se retrouve pas de la même manière
                dans une <Term id="AssuranceVie" />, où la transmission suit un
                régime dédié (abattement de 152 500 € par bénéficiaire pour les
                versements avant 70 ans) mais où les gains restent taxés
                différemment selon la date des versements. Le CTO, souvent
                perçu comme fiscalement désavantageux comparé au{" "}
                <Term id="PEA" /> ou à l'<Term id="AssuranceVie" />, retrouve
                donc un intérêt réel dans une logique de détention très long
                terme, avec un objectif de <strong>transmission</strong> plutôt
                que de consommation du capital de son vivant.
              </p>
            </InfoBubble>
          </div>
        </section>

        <section id="donations-100k" className="scroll-mt-22">
          <div className="space-y-4">
            <InfoBubble
              icon={<FaGift />}
              title="L'abattement de 100 000 € sur les donations"
              color="text-blue-400"
            >
              <p className="leading-relaxed">
                Chaque parent peut donner jusqu'à <strong>100 000 €</strong> à
                chacun de ses enfants <strong>en franchise totale de droits de
                donation</strong>. Cet abattement est personnel à chaque lien
                parent-enfant, et se cumule donc naturellement au sein d'une
                famille.
              </p>

              <p className="leading-relaxed mt-2">
                Point essentiel : cet abattement n'est <strong>pas
                annuel</strong>, il se renouvelle tous les <strong>15
                ans</strong> (de manière glissante, pas au 1ᵉʳ janvier). Une
                fois les 15 ans écoulés depuis la dernière donation, la totalité
                du plafond redevient disponible.
              </p>

              <ExampleBox>
                Un couple avec 2 enfants peut transmettre jusqu'à{" "}
                <b>400 000 €</b> sans aucun droit de donation à payer (100 000 €
                × 2 parents × 2 enfants), puis renouveler l'opération 15 ans
                plus tard.
              </ExampleBox>

              <p className="leading-relaxed mt-2">
                Au-delà de cet abattement, la donation est taxée selon le{" "}
                <strong>barème progressif des droits de donation en ligne
                directe</strong> (de 5 % à 45 % selon le montant transmis). Cet
                abattement se cumule avec d'autres dispositifs, notamment le{" "}
                <strong>don familial de sommes d'argent</strong> (31 865 €,
                sous conditions d'âge du donateur et du bénéficiaire, également
                renouvelable tous les 15 ans).
              </p>

              <p className="leading-relaxed mt-2">
                En pratique, transmettre <strong>tôt et régulièrement</strong>{" "}
                (dès que la fenêtre de 15 ans est rouverte) permet de lisser la
                transmission d'un patrimoine sur plusieurs décennies sans
                fiscalité, plutôt que de tout transmettre d'un coup à la
                succession.
              </p>
            </InfoBubble>
          </div>
        </section>

        <section id="preuve-achat-cryptos" className="scroll-mt-22">
          <div className="space-y-4">
            <InfoBubble
              icon={<FaReceipt />}
              title="Conserver ses preuves d'achat de cryptomonnaies"
              color="text-red-400"
            >
              <p className="leading-relaxed">
                La plus-value imposable sur une vente de cryptomonnaies se
                calcule par différence entre le <strong>prix de cession</strong>{" "}
                et le <strong>prix d'acquisition</strong> de la quote-part
                cédée. Pour justifier ce prix d'acquisition auprès de
                l'administration fiscale, il faut pouvoir produire une{" "}
                <strong>preuve d'achat</strong> : relevé du virement bancaire
                vers la plateforme d'échange, historique des transactions de la
                plateforme, ou preuve d'achat en carte bancaire.
              </p>

              <p className="leading-relaxed mt-2">
                Le piège : si vous ne pouvez <strong>pas justifier</strong> le
                prix d'acquisition (plateforme disparue, historique perdu,
                achat en espèces non tracé...), l'administration peut retenir
                un <strong>prix d'acquisition nul</strong>. Résultat, ce n'est
                plus seulement votre gain réel qui est taxé, mais la{" "}
                <strong>totalité de la somme retirée</strong>, comme si vous
                aviez acheté vos cryptos à 0 €.
              </p>

              <ExampleBox>
                Vous avez acheté <b>5 000 €</b> de Bitcoin il y a 3 ans sur une
                plateforme aujourd'hui disparue, sans avoir conservé de
                justificatif. Vous revendez pour <b>20 000 €</b>. Sans preuve
                d'achat, l'administration peut retenir un prix d'acquisition
                nul : vous seriez alors imposé au <Term id={"PFU"} /> sur les{" "}
                <b>20 000 €</b> (soit 6 000 € d'impôt), au lieu des{" "}
                <b>15 000 €</b> de plus-value réellement réalisée (soit 4 500 €
                d'impôt).
              </ExampleBox>

              <p className="leading-relaxed mt-2">
                Bonnes pratiques : conservez systématiquement les{" "}
                <strong>relevés bancaires</strong> des virements vers vos
                plateformes, exportez régulièrement l'{" "}
                <strong>historique des transactions</strong> de chaque
                plateforme utilisée (au format CSV/PDF), et archivez ces
                documents en dehors de la plateforme elle-même. De nombreuses
                plateformes ont fermé sans préavis par le passé, emportant avec
                elles l'historique d'achat de leurs utilisateurs.
              </p>
            </InfoBubble>
          </div>
        </section>
      </Container>
    </PageLayout>
  );
};

export default Taxes;
