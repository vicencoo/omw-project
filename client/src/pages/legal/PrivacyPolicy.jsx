import { usePageSeo } from '../../hooks/useSeo';
import { LegalPage } from './LegalPage';

export const PrivacyPolicy = () => {
  usePageSeo('privacy', '/privacy-policy');
  return <LegalPage page='privacy' />;
};
