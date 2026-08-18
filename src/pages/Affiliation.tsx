import React from "react";
import AffiliateCard from "../components/AffiliateCard";
import Disclaimer from "../components/Disclaimer";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";
import boursobankLogo from "../assets/logos/boursobank.png";
import saxoLogo from "../assets/logos/saxo.svg";
import paypalLogo from "../assets/logos/paypal.svg";
import ledgerLogo from "../assets/logos/ledger.svg";
import krakenLogo from "../assets/logos/kraken.svg";
import krakLogo from "../assets/logos/krak.png";
import gominingLogo from "../assets/logos/gomining.svg";

const Affiliation: React.FC = () => {
  return (
    <PageLayout
      title="Affiliation"
      description="Mes liens d'affiliation pour la banque, l'investissement et les cryptomonnaies."
    >
      <Container gap="lg">
        <section className="scroll-mt-22">
          <Disclaimer title="Transparence sur ces liens">
            <p className="mb-3">
              En général, quelqu'un qui partage des liens d'affiliation cherche
              à vous faire cliquer, et gagner de l'argent sur votre dos.
            </p>
            <p className="mb-3">
              Ici, je partage uniquement des services que j'utilise vraiment et
              que je trouve intéressants. Je touche effectivement une commission
              sur certains de ces liens, mais je ne suis pas payé pour en faire
              la promotion, ce ne sont pas des partenariats sponsorisés, juste
              des recommandations honnêtes avec un lien d'affiliation attaché.
            </p>
            <p>
              Si ça ne vous intéresse pas, quittez cette page. Et si un service
              vous intéresse, n'ouvrez pas de compte juste pour ça, ne le faites
              que si vous en avez vraiment l'usage et après de multiples
              recherches pour vous assurer que c'est le bon choix pour vous.
            </p>
          </Disclaimer>
        </section>

        <section id="banque-paiement" className="scroll-mt-22">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Banque & Paiement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AffiliateCard
              logo={boursobankLogo}
              name="Boursobank"
              description="Banque 100% en ligne, carte bancaire et compte courant gratuits sous conditions."
              why="Ma banque principale au quotidien, pour la gratuité de la carte et la simplicité de l'application."
              warning="Conditions de dépenses nécessaires pour conserver la gratuité de la carte."
              href="https://bour.so/p/Arh8fYmCu4I"
              buttonClass="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300"
            />
            <AffiliateCard
              logo={saxoLogo}
              name="Saxo Banque"
              description="Courtier en ligne pour investir dans les marchés financiers."
              why="Mon courtier principal pour mon PEA, grâce à son large catalogue et ses frais compétitifs sur les gros ordres."
              href="https://refer.saxo/2gZw3"
              buttonClass="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300"
            />
            <AffiliateCard
              logo={paypalLogo}
              name="PayPal"
              description="Solution de paiement en ligne pour vos achats, transferts et remboursements."
              why="Pratique pour les paiements en ligne sécurisés et simplifiés ainsi que pour les transferts rapides entre particuliers."
              href="https://py.pl/5tQYe6yi32Q"
              buttonClass="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300"
            />
          </div>
        </section>

        <section id="cryptos" className="scroll-mt-22 mb-16">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Cryptomonnaies
          </h2>
          <Disclaimer title="Actifs à très haut risque" className="mb-4">
            Les cryptomonnaies sont des actifs très volatils et risqués. Ne
            placez jamais plus que ce que vous êtes prêt à perdre, et faites vos
            propres recherches avant d'investir. J'insiste sur le fait que je ne
            suis pas un conseiller financier, et que je ne donne pas de conseils
            d'investissement. Je partage simplement mon expérience personnelle
            et mes liens d'affiliation pour des services que j'utilise. Services
            pouvant s'avérer à l'heure ou je les partage, fiables et sérieux,
            mais qui peuvent changer à tout moment. À vous de faire vos propres
            recherches avant de vous engager.
          </Disclaimer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AffiliateCard
              logo={ledgerLogo}
              name="Ledger"
              description="Portefeuille matériel (hardware wallet) pour stocker ses cryptomonnaies hors ligne."
              why="Indispensable pour sécuriser moi-même mes cryptomonnaies, sans dépendre d'une plateforme d'échange."
              href="#"
              buttonClass="bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-400 hover:to-orange-300"
            />
            <AffiliateCard
              logo={krakenLogo}
              name="Kraken"
              description="Plateforme permettant d'acheter, vendre et échanger des cryptomonnaies."
              why="Une des plateformes les plus sérieuses et réglementées du marché, que j'utilise pour mes achats de cryptos."
              warning="Ne laissez pas vos cryptos sur une plateforme d'échange sur le long terme."
              href="#"
              buttonClass="bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-400 hover:to-orange-300"
            />
            <AffiliateCard
              logo={krakLogo}
              name="Krak"
              description="Carte bancaire Mastercard qui permet de dépenser directement ses cryptomonnaies au quotidien."
              why="Cashback en cryptomonnaies sur tous les achats, et possibilité de dépenser ses cryptos directement."
              warning="Chaque paiement avec des cryptos déclenche une vente de cryptos, donc potentiellement un événement fiscal à déclarer."
              href="https://krak.app/@Amaroke"
              buttonClass="bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-400 hover:to-orange-300"
            />
            <AffiliateCard
              logo={gominingLogo}
              name="GoMining"
              description="Plateforme de minage cloud de Bitcoin sous forme de NFT."
              why="Je trouve le concept et l'entreprise intéressants, j'y investis donc une petite somme à haut risque, une sorte de pari sur l'avenir du Bitcoin et du minage."
              warning="Plateforme à très haut risque de perte en capital. Je ne recommande pas d'y investir si vous n'êtes pas prêt à subir une perte totale."
              href="https://gomining.com/?ref=6WSYYCB"
              buttonClass="bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-400 hover:to-orange-300"
            />
          </div>
        </section>
      </Container>
    </PageLayout>
  );
};

export default Affiliation;
