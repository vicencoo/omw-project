import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DEFAULT_IMAGE, SITE_NAME, SITE_URL } from '../constants/seo';

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const setJsonLd = (data) => {
  let el = document.getElementById('seo-jsonld');
  if (!data) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.id = 'seo-jsonld';
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    ...data,
  });
};

// Updates <head> only (title, description, canonical, Open Graph, JSON-LD).
// Renders nothing, so pages keep their markup and design unchanged.
export const useSeo = ({ title, description, path = '/', jsonLd, noindex }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'sq';
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.documentElement.lang = lang;
    if (title) document.title = title;

    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }
    if (title) {
      setMeta('property', 'og:title', title);
      setMeta('name', 'twitter:title', title);
    }
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', DEFAULT_IMAGE);
    setMeta('property', 'og:locale', lang === 'en' ? 'en_US' : 'sq_AL');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:image', DEFAULT_IMAGE);
    setCanonical(url);
    setJsonLd(jsonLdString ? JSON.parse(jsonLdString) : null);
  }, [title, description, path, jsonLdString, noindex, lang]);
};

// Static pages: title/description come from common.json -> seo.<page>
export const usePageSeo = (page, path, options = {}) => {
  const { t, i18n } = useTranslation('common');
  const descKey = `seo.${page}.description`;

  useSeo({
    title: t(`seo.${page}.title`),
    description: i18n.exists(descKey, { ns: 'common' })
      ? t(descKey)
      : undefined,
    path,
    ...options,
  });
};
