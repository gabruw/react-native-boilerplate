//#region Imports

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBr from './ptBr';

//#endregion

i18next.use(initReactI18next).init({
    lng: 'ptBr',
    fallbackLng: 'ptBr',
    compatibilityJSON: 'v3',
    resources: {
        ptBr: { translation: ptBr }
    },
    detection: {
        cache: ['cookie'],
        order: ['queryString', 'cookie']
    },
    interpolation: {
        escapeValue: false
    }
});

export default i18next;
