import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { AppRoutes } from './AppRoutes';
import { ScrollToTop } from '../utils/scrollToTop';
import '../i18n';

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
      <Analytics />
    </BrowserRouter>
  );
};
