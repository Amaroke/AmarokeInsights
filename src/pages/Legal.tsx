import React from "react";
import { Link } from "react-router-dom";
import { FaBalanceScale, FaShieldAlt, FaDatabase, FaLinkedin } from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import PageLayout from "../components/PageLayout";
import Container from "../components/Container";

const Legal: React.FC = () => {
  return (
    <PageLayout
      title="Mentions légales & Confidentialité"
      description="Mentions légales et politique de confidentialité d'AmarokeInsights."
      noindex
    >
      <Container gap="sm">
        <InfoBubble
          icon={<FaBalanceScale />}
          title="Mentions légales"
          color="text-blue-400"
        >
          <p className="leading-relaxed">
            <span className="text-white font-semibold">Éditeur du site</span>
            <br />
            Hugo Mathieu Steinbach (Amaroke)
            <br />
            <a
              href="https://www.linkedin.com/in/hugo-mathieu-steinbach/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:underline"
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <br />
            <Link to="/contact" className="text-blue-400 hover:underline">
              Formulaire de contact
            </Link>
          </p>
          <p className="leading-relaxed">
            <span className="text-white font-semibold">Hébergeur</span>
            <br />
            GitHub, Inc.
            <br />
            88 Colin P Kelly Jr Street, San Francisco, CA 94107, États-Unis
            <br />
            <span className="text-gray-500 text-sm">
              Site hébergé via GitHub Pages.
            </span>
          </p>
          <p className="leading-relaxed text-sm text-gray-500">
            Ce site est fourni à titre informatif et éducatif uniquement. Il ne
            constitue pas un conseil en investissement. L'éditeur ne saurait
            être tenu responsable des décisions financières prises sur la base
            des contenus publiés.
          </p>
        </InfoBubble>

        <InfoBubble
          icon={<FaShieldAlt />}
          title="Politique de confidentialité"
          color="text-green-400"
        >
          <p className="leading-relaxed">
            <span className="text-white font-semibold">Données collectées</span>
            <br />
            Le seul traitement de données personnelles sur ce site intervient
            via le formulaire de contact, votre adresse email et votre message
            sont transmis au service tiers{" "}
            <span className="text-white">Formspree</span> (formspree.io), basé
            aux États-Unis, dans le seul but de vous répondre.
          </p>
          <p className="leading-relaxed">
            <span className="text-white font-semibold">
              Finalité & durée de conservation
            </span>
            <br />
            Vos données sont utilisées uniquement pour répondre à votre demande.
            Elles ne sont pas revendues, partagées ou utilisées à des fins
            commerciales. La conservation est limitée au temps nécessaire pour
            traiter votre demande.
          </p>
          <p className="leading-relaxed">
            <span className="text-white font-semibold">
              Aucun cookie tiers ni tracking
            </span>
            <br />
            Ce site n'utilise ni Google Analytics, ni pixel publicitaire, ni
            aucun autre outil de tracking externe.
          </p>
          <p className="leading-relaxed">
            <span className="text-white font-semibold">Stockage local</span>
            <br />
            Le site utilise le <span className="text-white">
              localStorage
            </span>{" "}
            de votre navigateur pour mémoriser les sections que vous avez déjà
            visitées (affichage du badge « NEW »). Ces données restent
            exclusivement sur votre appareil et ne sont jamais transmises à un
            serveur.
          </p>
          <p className="leading-relaxed">
            <span className="text-white font-semibold">Vos droits (RGPD)</span>
            <br />
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez d'un droit d'accès, de rectification et de
            suppression de vos données. Pour exercer ces droits, contactez-moi
            via le formulaire de contact ou à l'adresse{" "}
            <a
              href="mailto:hugo.amaroke@gmail.com"
              className="text-blue-400 hover:underline"
            >
              hugo.amaroke@gmail.com
            </a>
            .
          </p>
        </InfoBubble>

        <InfoBubble
          icon={<FaDatabase />}
          title="Sous-traitants"
          color="text-yellow-400"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-300 border-b border-gray-600">
                  <th className="pb-2 pr-4">Service</th>
                  <th className="pb-2 pr-4">Finalité</th>
                  <th className="pb-2">Localisation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="py-2 pr-4 text-white">Formspree</td>
                  <td className="py-2 pr-4">
                    Traitement du formulaire de contact
                  </td>
                  <td className="py-2">États-Unis</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-white">GitHub Pages</td>
                  <td className="py-2 pr-4">Hébergement du site</td>
                  <td className="py-2">États-Unis</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Dernière mise à jour : juin 2026
          </p>
        </InfoBubble>
      </Container>
    </PageLayout>
  );
};

export default Legal;
