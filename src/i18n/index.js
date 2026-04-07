import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import sqHome from './locales/sq/home.json';
import enHome from './locales/en/home.json';
import sqCommon from './locales/sq/common.json';
import enCommon from './locales/en/common.json';
import sqContact from './locales/sq/contact.json';
import enContact from './locales/en/contact.json';
import sqAbout from './locales/sq/about.json';
import enAbout from './locales/en/about.json';
import sqProducts from './locales/sq/products.json';
import enProducts from './locales/en/products.json';
import sqServices from './locales/sq/services.json';
import enServices from './locales/en/services.json';

const savedLanguage = localStorage.getItem('language') || 'sq';

i18n.use(initReactI18next).init({
  resources: {
    sq: {
      home: sqHome,
      contact: sqContact,
      common: sqCommon,
      about: sqAbout,
      products: sqProducts,
      services: sqServices,
    },
    en: {
      home: enHome,
      contact: enContact,
      common: enCommon,
      about: enAbout,
      products: enProducts,
      services: enServices,
    },
  },
  lng: savedLanguage,
  fallbackLng: 'sq',
  ns: ['common', 'home', 'contact', 'about', 'products', 'services'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
