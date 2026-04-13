import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { Footer } from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import { useTranslation } from 'react-i18next';
import { getSidebarItems } from '../constants/sidebar';

export const Layout = () => {
  const { t } = useTranslation('common');
  const SIDEBAR_ITEMS = getSidebarItems(t);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-1'>
        {/* <main className='flex-1'>
          <Outlet />
        </main> */}
        <div className='flex flex-1'>
          <Sidebar items={SIDEBAR_ITEMS} />

          <main className='flex-1'>
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};
