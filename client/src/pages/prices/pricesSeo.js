import { ORGANIZATION, SITE_URL } from '../../constants/seo';

const PRICES_URL = `${SITE_URL}/prices`;

const capitalize = (str = '') =>
  str.trim().replace(/(^|\s)\S/g, (c) => c.toUpperCase());

const activePrices = (station) =>
  (station.station_prices || []).filter((p) => Number(p.price) > 0);

// Lowest price per fuel across all stations, e.g. { 'diesel 10ppm': 219 }
const lowestPrices = (stations) => {
  const result = {};
  stations.forEach((s) =>
    activePrices(s).forEach((p) => {
      const price = Number(p.price);
      if (!(p.fuel in result) || price < result[p.fuel]) result[p.fuel] = price;
    }),
  );
  return result;
};

// Fuel names from the API grouped the way people search ("çmimi i naftës")
const FUEL_GROUPS = [
  ['diesel', /diesel|naft/i],
  ['petrol', /benzin|petrol/i],
  ['lpg', /gaz|lpg|gpl/i],
];

// Lowest price per group, e.g. [['diesel', 219], ['petrol', 225]]
const lowestByGroup = (stations) => {
  const prices = Object.entries(lowestPrices(stations));
  return FUEL_GROUPS.map(([group, pattern]) => {
    const matches = prices
      .filter(([fuel]) => pattern.test(fuel))
      .map(([, price]) => price);
    return [group, matches.length ? Math.min(...matches) : null];
  }).filter(([, price]) => price !== null);
};

const latestUpdate = (stations) =>
  stations
    .map((s) => s.last_price_update)
    .filter(Boolean)
    .sort()
    .pop();

const formatDate = (value, lang) =>
  new Date(value || Date.now()).toLocaleDateString(
    lang === 'en' ? 'en-GB' : 'sq-AL',
    { day: 'numeric', month: 'long', year: 'numeric' },
  );

// Q&A shown on the page and in FAQPage JSON-LD; answers use live prices
export const getPricesFaq = (stations, t, lang) => {
  if (!stations?.length) return [];
  const date = formatDate(latestUpdate(stations), lang);

  return [
    ...lowestByGroup(stations).map(([group, price]) => ({
      question: t(`prices.faq.${group}_q`),
      answer: t(`prices.faq.${group}_a`, { date, price }),
    })),
    {
      question: t('prices.faq.updates_q'),
      answer: t('prices.faq.updates_a', { date }),
    },
  ];
};

export const getPricesSeo = (stations, t, lang) => {
  if (!stations?.length) {
    return {
      title: t('seo.prices.title'),
      description: t('seo.prices.description'),
      keywords: t('seo.prices.keywords'),
      path: '/prices',
      jsonLd: {
        '@graph': [
          ORGANIZATION,
          {
            '@type': 'WebPage',
            '@id': `${PRICES_URL}#webpage`,
            url: PRICES_URL,
            name: t('seo.prices.title'),
            description: t('seo.prices.description'),
            publisher: { '@id': ORGANIZATION['@id'] },
          },
        ],
      },
    };
  }

  const cities = [...new Set(stations.map((s) => capitalize(s.city)))];
  const summary = lowestByGroup(stations)
    .map(([group, price]) =>
      t('seo.prices.fuelFrom', {
        fuel: t(`seo.prices.groups.${group}`),
        price,
      }),
    )
    .join(', ');
  const updated = latestUpdate(stations);
  const date = formatDate(updated, lang);
  const faq = getPricesFaq(stations, t, lang);

  // Base keywords plus city-specific ones, e.g. "karburant Tiranë"
  const keywords = [
    t('seo.prices.keywords'),
    ...cities.map((city) => t('seo.prices.keywordsCity', { city })),
  ].join(', ');

  const description = t('seo.prices.descriptionLive', {
    date,
    count: stations.length,
    cities: cities.join(', '),
    summary: summary
      ? `${summary.charAt(0).toUpperCase()}${summary.slice(1)}.`
      : '',
  });

  const gasStations = stations.map((s) => ({
    '@type': 'GasStation',
    '@id': `${PRICES_URL}#station-${s.id}`,
    name: `OMW ${capitalize(s.area)}`,
    brand: { '@id': ORGANIZATION['@id'] },
    url: PRICES_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: capitalize(s.area),
      addressLocality: capitalize(s.city),
      addressCountry: 'AL',
    },
    makesOffer: activePrices(s).map((p) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Product', name: capitalize(p.fuel) },
      price: Number(p.price),
      priceCurrency: 'ALL',
      validFrom: p.updatedAt || s.last_price_update,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: Number(p.price),
        priceCurrency: 'ALL',
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: 1,
          unitCode: 'LTR',
        },
      },
    })),
  }));

  return {
    title: t('seo.prices.title'),
    description,
    keywords,
    path: '/prices',
    jsonLd: {
      '@graph': [
        ORGANIZATION,
        {
          '@type': 'WebPage',
          '@id': `${PRICES_URL}#webpage`,
          url: PRICES_URL,
          name: t('seo.prices.title'),
          description,
          inLanguage: lang,
          dateModified: updated,
          publisher: { '@id': ORGANIZATION['@id'] },
          mainEntity: { '@id': `${PRICES_URL}#stations` },
        },
        {
          '@type': 'ItemList',
          '@id': `${PRICES_URL}#stations`,
          numberOfItems: gasStations.length,
          itemListElement: gasStations.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item,
          })),
        },
        {
          '@type': 'FAQPage',
          '@id': `${PRICES_URL}#faq`,
          mainEntity: faq.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer },
          })),
        },
      ],
    },
  };
};
