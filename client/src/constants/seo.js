export const SITE_URL = 'https://www.omw.al';
export const SITE_NAME = 'OMW - On My Way';
export const DEFAULT_IMAGE = `${SITE_URL}/images/gas-station-home.webp`;

export const ORGANIZATION = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'OMW - On My Way',
  alternateName: ['OMW', 'On My Way'],
  url: SITE_URL,
  logo: `${SITE_URL}/images/omw-logo.webp`,
  email: 'legal@atoil.al',
  telephone: '+355 4 222 1666',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rruga Dëshmorët e 4 Shkurtit, Sky Tower Kati 7/3',
    addressLocality: 'Tiranë',
    addressCountry: 'AL',
  },
  areaServed: { '@type': 'Country', name: 'Albania' },
};
