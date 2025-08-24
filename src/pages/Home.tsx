import React, { useState } from "react";
import {
  FaEnvelope,
  FaBookOpen,
  FaLightbulb,
  FaExclamationTriangle,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import InfoBubble from "../components/InfoBubble";
import { renderParagraphs } from "../utils/text"; // <-- import ici

const Home: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const { t } = useTranslation("home");

  return (
    <div className="flex h-screen text-gray-300 bg-[#12121b]">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <main
        className={`flex-1 overflow-auto pt-16 pb-8 transition-all duration-300 ${
          sidebarOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-6 space-y-4">
          <InfoBubble
            icon={<FaLightbulb />}
            title={t("welcome.title")}
            color="text-yellow-400"
          >
            {renderParagraphs(t("welcome.content"))}
          </InfoBubble>

          <InfoBubble
            icon={<FaBookOpen />}
            title={t("info.title")}
            color="text-blue-400"
          >
            {renderParagraphs(t("info.content"))}
          </InfoBubble>

          <InfoBubble
            icon={<FaEnvelope />}
            title={t("contact.title")}
            color="text-green-400"
          >
            {renderParagraphs(t("contact.content"))}
            <a
              href={`mailto:${t("contact.email")}`}
              className="text-blue-400 font-medium hover:underline"
            >
              {t("contact.email")}
            </a>
          </InfoBubble>

          <InfoBubble
            icon={<FaExclamationTriangle />}
            title={t("precautions.title")}
            color="text-red-400"
          >
            {renderParagraphs(t("precautions.content"))}
          </InfoBubble>
        </div>
      </main>
    </div>
  );
};

export default Home;
