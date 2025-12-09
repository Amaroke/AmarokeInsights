import React from "react";
import {
  FaEnvelope,
  FaBookOpen,
  FaLightbulb,
  FaExclamationTriangle,
  FaListOl,
  FaBars,
} from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="flex h-screen text-gray-300 bg-[#12121b]">
      <main
        className={`flex-1 overflow-auto pt-16 md:mt-16 md:pt-0 transition-all duration-300 ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-6 space-y-4 md:mb-0 mb-24">
          <InfoBubble
            icon={<FaLightbulb />}
            title="Bienvenue !"
            color="text-yellow-400"
          >
            <p className="leading-relaxed">
              AmarokeInsights est un site personnel où je partage mes
              apprentissages et expériences en finance sous la forme la plus
              claire possible.
            </p>
            <p className="leading-relaxed">
              L’objectif est double,{" "}
              <strong>consolider mes connaissances</strong> et les rendre
              accessibles à toute personne souhaitant découvrir la finance étape
              par étape.
            </p>
          </InfoBubble>

          <InfoBubble
            icon={<FaBookOpen />}
            title="À savoir"
            color="text-blue-400"
          >
            <p className="leading-relaxed">
              Le contenu évolue régulièrement : le plan, les articles et même le
              site sont amenés à changer.
            </p>
            <p className="leading-relaxed">
              L’approche est <strong>progressive et expérimentale</strong>,
              certains sujets seront approfondis, d’autres resteront en surface.
            </p>
            <p className="leading-relaxed">
              Enfin, certains domaines ou stratégies qui m’intéressent peu ne
              seront pas abordés ici, une raison supplémentaire de{" "}
              <strong>poursuivre vos recherches de votre côté</strong>.
            </p>
          </InfoBubble>

          <InfoBubble
            icon={<FaListOl />}
            title="Ordre conseillé"
            color="text-purple-400"
          >
            <p className="leading-relaxed">
              Les sections principales du site sont présentées dans un ordre
              logique. Si vous avez peu de connaissances en finance, il est
              conseillé de les lire dans cet ordre, car la plupart des termes
              utilisés sont définis dans les sections précédentes. Les sections
              "Ressources & outils" et "Me contacter" peuvent être consultées à
              tout moment.
            </p>
            <p className="leading-relaxed">
              Pour débuter la navigation, vous pouvez ouvrir le menu en cliquant
              sur l’icône
              <span className="inline-block align-middle mx-1">
                <FaBars className="inline" />
              </span>
              située en haut à gauche de la page. Ce menu (accessibles à tout
              moment) vous permet d’accéder rapidement à toutes les sections du
              site.
            </p>
          </InfoBubble>

          <InfoBubble
            icon={<FaEnvelope />}
            title="Contact & retours"
            color="text-green-400"
          >
            <p className="leading-relaxed">
              Je suis toujours preneur de{" "}
              <strong>retours, suggestions et contributions</strong> ! Si vous
              souhaitez discuter, proposer une amélioration ou me signaler une
              erreur, <strong>n’hésitez pas à me contacter</strong>.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
            >
              Me contacter
            </Link>
          </InfoBubble>

          <InfoBubble
            icon={<FaExclamationTriangle />}
            title="Disclaimer"
            color="text-red-400"
          >
            <p className="leading-relaxed">
              <strong>
                Ce site ne constitue en aucun cas un conseil financier.
              </strong>{" "}
              Je suis simplement un développeur de 25 ans passionné par la
              finance depuis quelques années,{" "}
              <strong>je ne suis pas un expert</strong>.
            </p>

            <p className="leading-relaxed">
              Investir comporte toujours des <strong>risques importants</strong>
              . Les informations présentées ici doivent être considérées comme
              des pistes de réflexion, non comme des recommandations. Les
              domaines économiques et financiers sont{" "}
              <strong>complexes et changeants</strong>, influencés par de
              multiples facteurs (politiques, psychologiques, technologiques…).
              Ce qui est vrai aujourd’hui peut ne plus l’être demain.
            </p>

            <p className="leading-relaxed">
              Vous restez seul{" "}
              <strong>responsable de vos décisions financières</strong>. Prenez
              toujours le temps de vérifier vos informations, garder un esprit
              critique et croiser vos sources avant d’agir.
            </p>
          </InfoBubble>
        </div>
      </main>
    </div>
  );
};

export default Home;
