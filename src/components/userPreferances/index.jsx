// components/UserPreferences.js
import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { updateUserPreferences } from "@/features/user/user.action";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const UserPreferences = () => {
  const { preferences } = useSelector((state) => state.auth.login);
  const {
    isUserPreferenceSuccess,
    isUserPreferenceLoading,
    isUserPreferenceFailed,
    userPreference,
    errorUserPreference,
  } = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  console.log(preferences);

  const initialValues = {
    location: preferences.location || "",
    numOfPersons: preferences.numOfPersons || 1,
    budget: preferences.budget || "",
    amenities: preferences.amenities || [],
    roomType: preferences.roomType || "",
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(updateUserPreferences(values));
  };
  useEffect(() => {
    if (isUserPreferenceSuccess) {
      toast.success(userPreference.message);
      setIsEditing(false);
    }
    if (isUserPreferenceFailed) {
      toast.error(errorUserPreference);
      setIsEditing(false);
    }
  }, [
    isUserPreferenceSuccess,
    isUserPreferenceLoading,
    isUserPreferenceFailed,
  ]);

  return (
    <div className="user-preferences p-4">
      {!isEditing ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Preferences</h2>
          <div className="mb-3">
            <strong>Location:</strong> {initialValues.location}
          </div>
          <div className="mb-3">
            <strong>Number of Persons:</strong> {initialValues.numOfPersons}
          </div>
          <div className="mb-3">
            <strong>Budget:</strong> {initialValues.budget}
          </div>
          <div className="mb-3">
            <strong>Amenities:</strong> {initialValues.amenities.join(", ")}
          </div>
          <div className="mb-3">
            <strong>Room Type:</strong> {initialValues.roomType}
          </div>
          <button
            onClick={handleEditToggle}
            className="mt-4 bg-blue-500 border text-gray-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Edit Preferences
          </button>
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ isSubmitting }) => (
            <Form>
              <h2 className="text-2xl font-semibold mb-4">Edit Preferences</h2>

              {/* Location */}
              <div className="mb-4">
                <label className="block mb-1 font-medium">Location:</label>
                <Field
                  as="select"
                  name="location"
                  className="border rounded p-2 w-full"
                >
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Gilgit">Gilgit</option>
                  <option value="Sikardu">Sikardu</option>
                  <option value="Quetta">Queeta</option>
                </Field>
              </div>

              {/* Number of Persons */}
              <div className="mb-4">
                <label className="block mb-1 font-medium">
                  Number of Persons:
                </label>
                <Field
                  type="number"
                  name="numOfPersons"
                  className="border rounded p-2 w-full"
                  min="1"
                />
              </div>

              {/* Budget */}
              <div className="mb-4">
                <label className="block mb-1 font-medium">Budget:</label>
                <Field
                  as="select"
                  name="budget"
                  className="border rounded p-2 w-full"
                >
                  <option value="1000">1,000</option>
                  <option value="2000">2,000</option>
                  <option value="3000">3,000</option>
                </Field>
              </div>

              {/* Amenities */}
              <div className="mb-4">
                <label className="block mb-1 font-medium">Amenities:</label>
                <div role="group" aria-labelledby="checkbox-group">
                  <label className="mr-4">
                    <Field
                      type="checkbox"
                      name="amenities"
                      value="Wi-Fi"
                      className="mr-1"
                    />
                    Wi-Fi
                  </label>
                  <label className="mr-4">
                    <Field
                      type="checkbox"
                      name="amenities"
                      value="breakfast"
                      className="mr-1"
                    />
                    Breakfast
                  </label>
                  <label className="mr-4">
                    <Field
                      type="checkbox"
                      name="amenities"
                      value="air-condition"
                      className="mr-1"
                    />
                    Air-Condition
                  </label>
                  <label className="mr-4">
                    <Field
                      type="checkbox"
                      name="amenities"
                      value="pool"
                      className="mr-1"
                    />
                    Pool
                  </label>
                  <label className="mr-4">
                    <Field
                      type="checkbox"
                      name="amenities"
                      value="gym"
                      className="mr-1"
                    />
                    Gym
                  </label>
                  <label className="mr-4">
                    <Field
                      type="checkbox"
                      name="amenities"
                      value="parking"
                      className="mr-1"
                    />
                    Parking
                  </label>
                </div>
              </div>

              {/* Room Type */}
              <div className="mb-4">
                <label className="block mb-1 font-medium">Room Type:</label>
                <Field
                  as="select"
                  name="roomType"
                  className="border rounded p-2 w-full"
                >
                  <option value="single">Single</option>
                  <option value="double">Double</option>
                  <option value="shared">Shared</option>
                  <option value="suite">Suite</option>
                  <option value="family-room">Family Room</option>
                </Field>
              </div>

              {/* Buttons */}
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-500 border text-gray-500 py-2 px-4 rounded hover:bg-green-600 transition duration-300"
                >
                  Save Preferences
                </button>
                <button
                  type="button"
                  onClick={handleEditToggle}
                  className="ml-4 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default UserPreferences;
