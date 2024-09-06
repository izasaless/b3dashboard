// src/components/PrivateRoute.tsx

import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  console.log('isAuthenticated in PrivateRoute:', isAuthenticated); // Adicione este log
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

