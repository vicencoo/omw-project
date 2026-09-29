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

const latestUpdate = (stations) =>
  stations
    .map((s) => s.last_price_update)
    .filter(Boolean)
    .sort()
    .pop();

export const getPricesSeo = (stations, t, lang) => {
  if (!stations?.length) {
    return {
      title: t('seo.prices.title'),
      description: t('seo.prices.description'),
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
  const summary = Object.entries(lowestPrices(stations))
    .map(
      ([fuel, price]) =>
        `${capitalize(fuel)} ${t('seo.prices.from')} ${price} ALL/L`,
    )
    .join(', ');
  const updated = latestUpdate(stations);
  const date = new Date(updated || Date.now()).toLocaleDateString(
    lang === 'en' ? 'en-GB' : 'sq-AL',
    { day: 'numeric', month: 'long', year: 'numeric' },
  );

  const description = t('seo.prices.descriptionLive', {
    date,
    count: stations.length,
    cities: cities.join(', '),
    summary: summary ? `${summary}.` : '',
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
      ],
    },
  };
};
