import { usePageSeo } from '../../hooks/useSeo';
import { LegalPage } from './LegalPage';

export const TermsOfService = () => {
  usePageSeo('terms', '/terms-of-service');
  return <LegalPage page='terms' />;
};
