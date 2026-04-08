import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { Footer } from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import { SIDEBAR_ITEMS } from '../constants/sidebar';

export const Layout = () => {
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
