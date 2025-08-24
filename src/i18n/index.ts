import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import frHome from "./fr/home.json";
import frConcepts from "./fr/basics.concepts.json";
import frRisks from "./fr/basics.risks.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        home: frHome,
        concepts: frConcepts,
        risks: frRisks,
      },
    },
    fallbackLng: "fr",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
