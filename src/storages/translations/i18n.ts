/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { checkIfIsDevelopment } from "@app/functions/environments/checkIfIsDevelopment";
import { translations } from "@app/translations";

i18n.use(initReactI18next).init({
    lng: "enUS",
    compatibilityJSON: "v3",
    resources: translations,
    debug: checkIfIsDevelopment(),
    interpolation: {
        escapeValue: false,
    },
    fallbackLng: {
        "en*": ["enUS"],
        "pt*": ["ptBR"],
        default: ["enUS"],
    },
});

export { i18n };
