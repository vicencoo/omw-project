import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';
import { Footer } from '../components/footer/Footer';

export const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-1'>
        <main className='flex-1'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
