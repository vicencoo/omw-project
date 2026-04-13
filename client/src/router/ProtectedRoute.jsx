import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export const ProtectedRoute = () => {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to='/' replace />;

  const user = jwtDecode(token);
  if (!user) {
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
};
