import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import Singup from '@/pages/signup';
import LoginForm from '@/pages/login';
import UserProfile from '@/pages/userProfile';
import ResetPassword from '@/pages/resetPassowrd';
// import { useSelector } from 'react-redux';
// import useAuth from '../hooks/auth';
// const AuthProtection = ({ children }) => {
//   const { authed } = useAuth();

//   return authed === true ? children : <Navigate to="/login" replace />;
// };

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signup',
        element: <Singup />,
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
      {
        path: '/user-profile',
        element: <UserProfile />,
      },
      {
        path: '/reset-password/:token',
        element: <ResetPassword />,
      },
    ],
  },
]);
