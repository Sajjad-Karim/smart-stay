// components/UserPreferences.js
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

const UserPreferences = ({ userPreferences, onSavePreferences }) => {
  const [isEditing, setIsEditing] = useState(false);

  const initialValues = {
    location: userPreferences.location || "",
    budget: userPreferences.budget || "",
    amenities: userPreferences.amenities || [],
    roomType: userPreferences.roomType || "",
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Updated Preferences:", values);
    onSavePreferences(values);
    setSubmitting(false);
    setIsEditing(false);
  };

  return (
    <div className="user-preferences p-4">
      {!isEditing ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Preferences</h2>
          <div className="mb-3">
            <strong>Location:</strong> {userPreferences.location}
          </div>
          <div className="mb-3">
            <strong>Budget:</strong> {userPreferences.budget}
          </div>
          <div className="mb-3">
            <strong>Amenities:</strong> {userPreferences.amenities.join(", ")}
          </div>
          <div className="mb-3">
            <strong>Room Type:</strong> {userPreferences.roomType}
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
                  <option value="">Select a location</option>
                  <option value="New York">New York</option>
                  <option value="Paris">Paris</option>
                  <option value="Tokyo">Tokyo</option>
                </Field>
              </div>

              {/* Budget */}
              <div className="mb-4">
                <label className="block mb-1 font-medium">Budget:</label>
                <Field
                  as="select"
                  name="budget"
                  className="border rounded p-2 w-full"
                >
                  <option value="">Select a budget range</option>
                  <option value="$">Budget ($)</option>
                  <option value="$$">Mid-range ($$)</option>
                  <option value="$$$">Luxury ($$$)</option>
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
                      value="WiFi"
                      className="mr-1"
                    />
                    WiFi
                  </label>
                  <label className="mr-4">
                    <Field
                      type="checkbox"
                      name="amenities"
                      value="Parking"
                      className="mr-1"
                    />
                    Parking
                  </label>
                  <label className="mr-4">
                    <Field
                      type="checkbox"
                      name="amenities"
                      value="Air Conditioning"
                      className="mr-1"
                    />
                    Air Conditioning
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
                  <option value="">Select room type</option>
                  <option value="Spread">Spread</option>
                  <option value="Share">Share</option>
                  <option value="Other">Other</option>
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
