// LoginForm.jsx
import { useFormik } from 'formik';
import loginSchema from './loginSchema';
import { FaGoogle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { googleLogin, userLogin } from '@/features/auth/auth.actions';
import { useGoogleLogin } from '@react-oauth/google';
import Spinner from '@/components/spinner/Spinner';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoginSuccess, isLoginFailed, isLoginLoading, error } = useSelector(
    (state) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      let payload = {
        ...values,
        provider: 'manual',
      };
      dispatch(userLogin(payload));
    },
  });

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success('logged In Successfully');

      navigate('/');
    }
    if (isLoginFailed) {
      toast.error(error);
    }
  }, [isLoginSuccess, isLoginFailed, error, navigate]);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      dispatch(googleLogin(tokenResponse.access_token));
    },
  });

  if (isLoginLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-gray-800 border font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6">
          <button
            onClick={() => login()}
            className="w-full flex justify-center items-center py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            <FaGoogle className="mr-2" /> Continue with Google
          </button>
        </div>
      </div>

      {/* Modal for OTP Verification */}
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <VerifyOTP />
      </Modal> */}
    </div>
  );
};

export default LoginForm;
