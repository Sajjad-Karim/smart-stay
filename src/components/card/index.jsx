// src/components/card/HotelCard.jsx
/* eslint-disable react/prop-types */
import { FaStarHalfAlt } from 'react-icons/fa';
const HotelCard = ({
  AccommodationTypeName,
  HotelLocation,
  Name,
  freeSlots,
  Image,
  rating,
  bookNow,
  _id,
}) => {
  const hotelName = Name?.slice(0, 30) + '...';
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={Image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{hotelName}</h3>
        <p className="text-gray-500 text-sm">{HotelLocation}</p>
        <p className="text-gray-500 text-sm flex items-center">
          Rating : 5 /{rating}
          <FaStarHalfAlt className=" text-yellow-600 ml-[5px]" />
        </p>
        <p className="text-gray-700 mt-1 text-sm font-medium">
          {AccommodationTypeName}
        </p>
        <p className="text-gray-700 mt-1 text-sm font-medium">
          Free Slots: {freeSlots}
        </p>
        <p className="mt-2 text-gray-600 text-sm line-clamp-3"></p>
        <div className="mt-4">
          <button
            onClick={() => bookNow(_id)}
            className="w-full bg-blue-500 text-gray-500 border py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
