import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Nota: import.meta.env.BASE_URL maneja bien el "base" de Vite en prod
void i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        supportedLngs: ['en', 'es'],
        ns: ['common'],
        defaultNS: 'common',
        debug: import.meta.env.DEV,
        interpolation: { escapeValue: false },
        backend: {
            loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
        },
        detection: {
            order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
            lookupQuerystring: 'lng',
            caches: ['localStorage'],
        },
        react: { useSuspense: true },
    });

export default i18n;