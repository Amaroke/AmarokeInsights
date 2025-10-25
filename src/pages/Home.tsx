import React from "react";
import {
  FaEnvelope,
  FaBookOpen,
  FaLightbulb,
  FaExclamationTriangle,
} from "react-icons/fa";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";

const Home: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="flex h-screen text-gray-300 bg-[#12121b]">
      <main
        className={`flex-1 overflow-auto pt-16 md:mt-16 md:pt-0 pb-8 transition-all duration-300 ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-6 space-y-4">
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
            <p className="leading-relaxed">
              Vous pouvez m’écrire par email ou <strong>via Discord</strong>{" "}
              (pseudo : amaroke).
            </p>
            <a
              href="mailto:hugo.amaroke@gmail.com"
              className="text-blue-400 font-medium hover:underline"
            >
              hugo.amaroke@gmail.com
            </a>
          </InfoBubble>

          <InfoBubble
            icon={<FaExclamationTriangle />}
            title="Disclaimer"
            color="text-red-400"
          >
            <p className="leading-relaxed">
              <strong>Ce site n’est pas un conseil financier</strong>. Je suis
              un développeur de 25 ans qui s'intéresse au monde de la finance
              seulement depuis quelques années, je ne suis donc{" "}
              <strong>pas un expert</strong>.
            </p>
            <p className="leading-relaxed">
              Investir comporte toujours des{" "}
              <strong>risques (perte en capital, volatilité)</strong>.
              Considérez ces contenus comme un point de départ, et non comme des
              recommandations. L’économie et la finance sont des{" "}
              <strong>domaines complexes</strong>, influencés par de nombreux
              facteurs (politiques, psychologiques, technologiques…). Ce qui est
              vrai aujourd’hui peut ne plus l’être demain.
            </p>
            <p className="leading-relaxed">
              Vous restez seul{" "}
              <strong>responsable de vos choix financiers</strong>. Il est
              essentiel de toujours vérifier les informations, garder un esprit
              critique et croiser vos sources avant de prendre des décisions
              concrètes.
            </p>
          </InfoBubble>
        </div>
      </main>
    </div>
  );
};

export default Home;
