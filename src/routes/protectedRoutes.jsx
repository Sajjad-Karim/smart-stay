import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { userData } = useSelector((state) => state.auth.login);

  return userData ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
