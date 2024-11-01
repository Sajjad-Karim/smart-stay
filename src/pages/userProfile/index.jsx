// UserProfilePage.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserProfileSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .max(50, "Name cannot exceed 50 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  bio: Yup.string().max(200, "Bio should be 200 characters or less"),
  preferences: Yup.string().max(
    100,
    "Preferences should be 100 characters or less"
  ),
});

export default function UserProfile() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        User Profile
      </h2>
      <Formik
        initialValues={{
          name: "John Doe",
          email: "john.doe@example.com",
          bio: "Travel enthusiast, food lover, and tech geek.",
          preferences: "Quiet places, Private stays",
        }}
        validationSchema={UserProfileSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Profile updated successfully!");
        }}
      >
        {() => (
          <Form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <Field
                name="name"
                className="w-full text-gray-700 border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="w-full text-gray-700 border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Bio
              </label>
              <Field
                as="textarea"
                name="bio"
                className="w-full text-gray-700 border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="A short bio about yourself"
              />
              <ErrorMessage
                name="bio"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Preferences
              </label>
              <Field
                name="preferences"
                className="w-full text-gray-700 border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="e.g., Quiet places, Private stays"
              />
              <ErrorMessage
                name="preferences"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Save Changes
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
