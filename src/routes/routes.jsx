import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import Singup from '@/pages/signup';
import LoginForm from '@/pages/login';
import UserProfile from '@/pages/userProfile';
import ProtectedRoutes from './protectedRoutes';

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
        element: <ProtectedRoutes />,
        children: [
          {
            path: '/user-profile',
            element: <UserProfile />,
          },
        ],
      },
    ],
  },
]);
