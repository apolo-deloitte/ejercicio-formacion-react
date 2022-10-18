import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { es, en } from "./assets/translations";
import Backend from "i18next-http-backend";

const resources = {
  en: { translation: en },
  es: { translation: es },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
