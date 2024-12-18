import { useEffect, useState } from "react";
import { useFormik } from "formik";
import signupSchema from "./singupSchema";
import Modal from "@/components/modal";
import { FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleLogin, userRegister } from "@/features/auth/auth.actions";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import Spinner from "@/components/spinner/Spinner";
const RegistrationForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    isRegisterSuccess,
    isRegisterLoading,
    isRegisterFailed,
    error,
    isLoginSuccess,
    isLoginLoading,
  } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      dispatch(userRegister(values));
    },
  });
  const singup = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      dispatch(googleLogin(tokenResponse.access_token));
    },
  });

  useEffect(() => {
    if (isRegisterSuccess) {
      toast.success("Registered Successfully");
      setIsModalOpen(true);
      navigate("/login");
    }
    if (isLoginSuccess) {
      toast.success("Login Successfully");
      navigate("/");
    }
    if (isRegisterFailed) {
      toast.error(error);
    }
  }, [isRegisterSuccess, isRegisterFailed, isLoginSuccess, error, navigate]);

  if (isLoginLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex justify-center items-center py-5 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-3 text-center">Register</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.name && formik.errors.fullName ? (
              <div className="text-red-500 text-sm">
                {formik.errors.fullName}
              </div>
            ) : null}
          </div>

          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500 text-sm">
                {formik.errors.username}
              </div>
            ) : null}
          </div>

          <div>
            <label className="block text-gray-700">Email</label>{" "}
            {/* New email label */}
            <input
              type="email" // Set input type to email
              name="email" // Name should match the initialValues
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div> // Error message for email
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
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-500 text-sm">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full py-1 bg-blue-500 text-gray-800 border font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            {isRegisterLoading ? "loading" : "Register"}
          </button>
          <div className="mt-6">
            <button
              onClick={singup}
              className="w-full flex justify-center items-center py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200"
            >
              <FaGoogle className="mr-2" /> Continue with Google
            </button>
          </div>
        </form>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p className="font-medium">
          Registered Successfully. Verify Your Profile Through Gmail
        </p>
      </Modal>
    </div>
  );
};

export default RegistrationForm;
