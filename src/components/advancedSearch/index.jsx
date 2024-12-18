/* eslint-disable react/prop-types */
import { useState } from 'react';
const SearchFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    location: '',
    price: '',
    amenities: [],
    rating: '',
    roomType: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let updatedFilters = { ...filters };

    if (type === 'checkbox') {
      updatedFilters.amenities = checked
        ? [...filters.amenities, value]
        : filters.amenities.filter((amenity) => amenity !== value);
    } else {
      updatedFilters[name] = value;
    }

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
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

        {/* Price Range Filter (Dropdown) */}
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
            <option value="1000">1000+ PKR</option>
            <option value="2000">2000+ PKR</option>
            <option value="3000">3000+ PKR</option>
            <option value="4000">4000+ PKR</option>
            <option value="5000">5000+ PKR</option>
            <option value="6000">6000+ PKR</option>
            <option value="7000">7000+ PKR</option>
          </select>
        </div>

        {/* Amenities Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amenities
          </label>
          <div className="space-y-2">
            {[
              'Wi-Fi',
              'breakfast',
              'air-condition',
              'pool',
              'gym',
              'parking',
            ].map((amenity) => (
              <div key={amenity} className="flex items-center">
                <input
                  type="checkbox"
                  id={amenity}
                  name="amenities"
                  value={amenity}
                  checked={filters.amenities.includes(amenity)}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label
                  htmlFor={amenity}
                  className="text-sm font-medium text-gray-700"
                >
                  {amenity}
                </label>
              </div>
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
            <option value="shared">Shared</option>
            <option value="suite">Suite</option>
            <option value="family-room">Family Room</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
