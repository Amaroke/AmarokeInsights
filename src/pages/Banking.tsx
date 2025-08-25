import React from "react";
import { FaPiggyBank } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import InfoBubble from "../components/InfoBubble";
import { useSidebar } from "../context/SidebarContext";

const BankingAccounts: React.FC = () => {
  const { isOpen } = useSidebar();
  const { t } = useTranslation("accounts");

  return (
    <div className="flex h-screen text-gray-300 bg-[#12121b]">
      <main
        className={`flex-1 overflow-auto pt-16 pb-8 transition-all duration-300 ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-6">
          <section id="types-of-accounts" className="scroll-mt-22 mb-12">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Types de comptes
            </h2>
            <div className="space-y-4">
              <InfoBubble
                icon={<FaPiggyBank />}
                title={t("types_of_accounts.livret_a.title")}
                color="text-blue-400"
              >
                {t("types_of_accounts.livret_a.content")}
              </InfoBubble>

              <InfoBubble
                icon={<FaPiggyBank />}
                title={t("types_of_accounts.ldd.title")}
                color="text-blue-400"
              >
                {t("types_of_accounts.ldd.content")}
              </InfoBubble>

              <InfoBubble
                icon={<FaPiggyBank />}
                title={t("types_of_accounts.livret_jeune.title")}
                color="text-blue-400"
              >
                {t("types_of_accounts.livret_jeune.content")}
              </InfoBubble>

              <InfoBubble
                icon={<FaPiggyBank />}
                title={t("types_of_accounts.lep.title")}
                color="text-blue-400"
              >
                {t("types_of_accounts.lep.content")}
              </InfoBubble>

              <InfoBubble
                icon={<FaPiggyBank />}
                title={t("types_of_accounts.compte_a_terme.title")}
                color="text-blue-400"
              >
                {t("types_of_accounts.compte_a_terme.content")}
              </InfoBubble>

              <InfoBubble
                icon={<FaPiggyBank />}
                title={t("types_of_accounts.livret_bancaire.title")}
                color="text-blue-400"
              >
                {t("types_of_accounts.livret_bancaire.content")}
              </InfoBubble>

              <InfoBubble
                icon={<FaPiggyBank />}
                title={t("types_of_accounts.pel.title")}
                color="text-blue-400"
              >
                {t("types_of_accounts.pel.content")}
              </InfoBubble>

              <InfoBubble
                icon={<FaPiggyBank />}
                title={t("types_of_accounts.cel.title")}
                color="text-blue-400"
              >
                {t("types_of_accounts.cel.content")}
              </InfoBubble>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default BankingAccounts;
