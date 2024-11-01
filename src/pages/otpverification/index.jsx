// VerifyOTP.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const VerifyOTPSchema = Yup.object().shape({
  otp: Yup.string()
    .required("OTP is required")
    .length(6, "OTP must be exactly 6 digits")
    .matches(/^\d+$/, "OTP must be a number"),
});

export default function VerifyOTP() {
  const initialValues = { otp: "" };

  const handleSubmit = (values) => {
    console.log(values);
    alert("OTP verified!");
  };

  return (
    <div className=" flex flex-col items-center p-6">
      <h2 className="text-2xl font-semibold mb-4">Verify OTP</h2>
      <p className="mb-6 text-center">
        Enter the OTP sent to your registered email
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={VerifyOTPSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block mb-2">Enter OTP</label>
              <Field
                type="text"
                name="otp"
                className="w-full border p-2 rounded-lg focus:border-blue-500"
                placeholder="6-digit OTP"
              />
              <ErrorMessage
                name="otp"
                component="div"
                className="text-red-600 mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-gray-500 border py-2 rounded-lg hover:bg-blue-700"
            >
              Verify OTP
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
