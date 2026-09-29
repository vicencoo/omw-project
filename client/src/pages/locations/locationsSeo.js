import { ORGANIZATION, SITE_URL } from '../../constants/seo';

const LOCATIONS_URL = `${SITE_URL}/locations`;

export const getLocationsJsonLd = (locations) => {
  const stations = locations
    .filter((loc) => loc.name.startsWith('OMW'))
    .map((loc) => ({
      '@type': 'GasStation',
      '@id': `${LOCATIONS_URL}#location-${loc.id}`,
      name: loc.name,
      brand: { '@id': ORGANIZATION['@id'] },
      telephone: loc.phone,
      url: LOCATIONS_URL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: loc.address,
        addressCountry: 'AL',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: loc.lat,
        longitude: loc.lng,
      },
      hasMap: `https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`,
    }));

  return {
    '@graph': [
      ORGANIZATION,
      {
        '@type': 'ItemList',
        '@id': `${LOCATIONS_URL}#stations`,
        numberOfItems: stations.length,
        itemListElement: stations.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item,
        })),
      },
    ],
  };
};
