import { Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { Home } from '../pages/home/Home';
import { AboutUs } from '../pages/aboutUs/AboutUs';
import { Locations } from '../pages/locations/Locations';
import { Products } from '../pages/products/Products';
import { Services } from '../pages/services/Services';
import { Contact } from '../pages/contact/Contact';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  );
};
