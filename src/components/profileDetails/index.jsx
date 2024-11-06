import React, { useState, useRef } from "react";
import { Formik, Form, Field } from "formik";
import { FaPen } from "react-icons/fa"; // Import pen icon

const ProfileDetails = ({ userData, isEditing, onEditToggle }) => {
  const [profileImage, setProfileImage] = useState(userData.profileImage);
  const fileInputRef = useRef(null); // Create a ref for the file input

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (values) => {
    console.log("Updated User Data:", { ...values, profileImage });
    onEditToggle(); // Close editing mode after saving
  };

  return (
    <div className="profile-details text-center p-4 rounded-lg">
      <div className="cover-image mb-4">
        <img
          src={userData.coverImage}
          alt="Cover"
          className="w-full h-40 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="profile-image mb-4 relative">
        <img
          src={profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current.click()}
          className="absolute top-[65px] left-[60px] bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition duration-300"
        >
          <FaPen className="text-blue-500" />
        </button>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          ref={fileInputRef} // Set the ref here
        />
      </div>
      <Formik
        initialValues={{
          name: userData.name,
          email: userData.email,
          username: userData.username, // Add username field
        }}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form className="mt-4">
            <div className="mb-4">
              <label className="block mb-1">Full Name:</label>
              <Field
                type="text"
                name="name"
                disabled={!isEditing}
                className="input-field border rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Username:</label>
              <Field
                type="text"
                name="username"
                disabled={!isEditing}
                className="input-field border rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Email:</label>
              <Field
                type="email"
                name="email"
                disabled={!isEditing}
                className="input-field border rounded p-2 w-full"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={onEditToggle}
                className={`bg-blue-500 text-gray-500 border py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ${
                  isEditing ? "hidden" : "block"
                }`}
              >
                Edit Details
              </button>
              {isEditing && (
                <>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-500 text-gray-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={onEditToggle}
                    className="ml-2 bg-gray-300 text-gray-500 py-2 px-4 rounded hover:bg-gray-400 transition duration-300"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileDetails;
