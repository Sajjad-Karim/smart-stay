// src/components/card/HotelCard.jsx
import React from "react";

const HotelCard = ({ image, name, location, roomType, description }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-500 text-sm">{location}</p>
        <p className="text-gray-700 mt-1 text-sm font-medium">{roomType}</p>
        <p className="mt-2 text-gray-600 text-sm line-clamp-3">{description}</p>
        <div className="mt-4">
          <button className="w-full bg-blue-500 text-gray-500 border py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-200">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
