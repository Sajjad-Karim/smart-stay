import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Layout;
