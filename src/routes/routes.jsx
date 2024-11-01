import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Singup from "@/pages/signup";
import LoginForm from "@/pages/login";
import VerifyOTP from "@/pages/otpverification";
import UserProfile from "@/pages/userProfile";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/signup",
        element: <Singup />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/verify-opt",
        element: <VerifyOTP />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
    ],
  },
]);
