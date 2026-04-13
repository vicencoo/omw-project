import { Route, Routes, useNavigate } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { Home } from '../pages/home/Home';
import { AboutUs } from '../pages/aboutUs/AboutUs';
import { Locations } from '../pages/locations/Locations';
import { Products } from '../pages/products/Products';
import { Services } from '../pages/services/Services';
import { Contact } from '../pages/contact/Contact';
import { Prices } from '../pages/prices/Prices';
import { ManagePrices } from '../pages/managePrices/ManagePrices';
import { Login } from '../pages/login/Login';
import { useLayoutEffect } from 'react';
import { setUpInterceptors } from '../api/axios';
import { ProtectedRoute } from '../router/ProtectedRoute';

export const AppRoutes = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    setUpInterceptors(navigate);
  }, [navigate]);
  return (
    <Routes>
      <Route path='/omw-admin-access' element={<Login />} />

      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/prices' element={<Prices />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />

        <Route element={<ProtectedRoute />}>
          <Route path='/manage-prices' element={<ManagePrices />} />
        </Route>
      </Route>
    </Routes>
  );
};
