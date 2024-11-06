import React, { useState } from "react";

const SearchFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    location: "",
    price: "",
    amenities: [],
    rating: "",
    roomType: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let updatedFilters;

    if (type === "checkbox") {
      const updatedAmenities = checked
        ? [...filters.amenities, value]
        : filters.amenities.filter((amenity) => amenity !== value);

      updatedFilters = { ...filters, amenities: updatedAmenities };
    } else {
      updatedFilters = { ...filters, [name]: value };
    }

    setFilters(updatedFilters);
    onFilterChange(updatedFilters); // Call onFilterChange directly on change
  };

  return (
    <div className="w-[95%] mx-auto my-[30px] p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Accommodation
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="City or landmark"
          />
        </div>

        {/* Price Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price Range
          </label>
          <select
            name="price"
            value={filters.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Any</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="200+">$200+</option>
          </select>
        </div>

        {/* Amenities Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amenities
          </label>
          <div className="flex flex-wrap gap-1">
            {["WiFi", "Pool", "Parking", "Gym"].map((amenity) => (
              <label
                key={amenity}
                className="flex items-center text-sm space-x-1"
              >
                <input
                  type="checkbox"
                  value={amenity}
                  checked={filters.amenities.includes(amenity)}
                  onChange={handleChange}
                  className="focus:ring-2 focus:ring-blue-500"
                />
                <span>{amenity}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rating
          </label>
          <select
            name="rating"
            value={filters.rating}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Any</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>

        {/* Room Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Room Type
          </label>
          <select
            name="roomType"
            value={filters.roomType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Any</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
            <option value="family">Family</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
