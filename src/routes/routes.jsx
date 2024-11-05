import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import Singup from '@/pages/signup';
import LoginForm from '@/pages/login';
import UserProfile from '@/pages/userProfile';
import AuthProtection from '@/components/layout/AuthProtection';
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/signup',
        element: <Singup />,
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
      // {
      //   path: "/verify-opt",
      //   element: <VerifyOTP />,
      // },
      {
        path: '/user-profile',
        element: <UserProfile />,
      },
      {
        element: <AuthProtection />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
        ],
      },
    ],
  },
]);
