// components/AdvancedSearchFilters.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object().shape({
  location: Yup.string().required("Please select a location"),
  maxPrice: Yup.number().required("Please set a maximum price"),
  amenities: Yup.array().min(1, "Select at least one amenity"),
  rating: Yup.number(),
  roomType: Yup.string().required("Please select a room type"),
});

const AdvancedSearchFilters = ({ onSearch }) => {
  const initialValues = {
    location: "",
    maxPrice: 500,
    amenities: [],
    rating: "",
    roomType: "",
  };

  const handleSubmit = (values) => {
    onSearch(values); // Pass filter values to parent component
  };

  return (
    <div className="advanced-search-filters bg-white text-gray-500 p-4 rounded-lg shadow-md">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="flex flex-wrap items-end gap-x-6 gap-y-4">
            {/* Location Selector */}
            <div className="flex flex-col w-40">
              <label className="font-medium mb-1 text-sm">Location</label>
              <Field
                as="select"
                name="location"
                className="border rounded p-2 text-sm"
              >
                <option value="">Select</option>
                <option value="New York">New York</option>
                <option value="Paris">Paris</option>
                <option value="Tokyo">Tokyo</option>
              </Field> 
              <ErrorMessage
                name="location"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            {/* Single Price Range Slider (Max Price) */}
            <div className="flex flex-col w-52">
              <label className="font-medium mb-1 text-sm">Max Price</label>
              <div className="flex gap-2 items-center text-xs">
                <span className="text-gray-700">${values.maxPrice}</span>
                <Field
                  type="range"
                  name="maxPrice"
                  min="0"
                  max="1000"
                  value={values.maxPrice}
                  onChange={(e) => setFieldValue("maxPrice", e.target.value)}
                  className="w-full"
                />
              </div>
              <ErrorMessage
                name="maxPrice"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            {/* Amenities Checkboxes */}
            <div className="flex flex-col w-52">
              <label className="font-medium mb-1 text-sm">Amenities</label>
              <div
                role="group"
                aria-labelledby="checkbox-group"
                className="flex gap-2 items-center text-xs"
              >
                <label>
                  <Field
                    type="checkbox"
                    name="amenities"
                    value="WiFi"
                    className="mr-1"
                  />
                  WiFi
                </label>
                <label>
                  <Field
                    type="checkbox"
                    name="amenities"
                    value="Parking"
                    className="mr-1"
                  />
                  Parking
                </label>
                <label>
                  <Field
                    type="checkbox"
                    name="amenities"
                    value="Air Conditioning"
                    className="mr-1"
                  />
                  A/C
                </label>
              </div>
              <ErrorMessage
                name="amenities"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            {/* Rating Selector */}
            <div className="flex flex-col w-32">
              <label className="font-medium mb-1 text-sm">Rating</label>
              <Field
                as="select"
                name="rating"
                className="border rounded p-2 text-sm"
              >
                <option value="">Select</option>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </Field>
              <ErrorMessage
                name="rating"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            {/* Room Type Selector */}
            <div className="flex flex-col w-32">
              <label className="font-medium mb-1 text-sm">Room Type</label>
              <Field
                as="select"
                name="roomType"
                className="border rounded p-2 text-sm"
              >
                <option value="">Select</option>
                <option value="Spread">Spread</option>
                <option value="Share">Share</option>
                <option value="Other">Other</option>
              </Field>
              <ErrorMessage
                name="roomType"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white borde bg-indigo-600 r py-2 px-4 rounded text-sm hover:bg-indigo-800 transition duration-300"
            >
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdvancedSearchFilters;
