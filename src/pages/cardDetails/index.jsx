// src/components/HotelDetails.jsx
import Spinner from "@/components/spinner/Spinner";
import { FaStar, FaMapMarkerAlt, FaBed, FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Reviews from "@/components/reviews";
import { getSingleHotel } from "@/features/hotel/hotel.action";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const HotelDetails = () => {
  // Static hotel data
  const { _id } = useParams();


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleHotel(_id));
  }, [_id]);
  const {
    hotelDetails: {
      AccommodationTypeName,
      Description,
      HotelLocation,
      Image,
      Name,
      freeSlots,
      rating,
      hotelAmenities,
    },
    isHotelDetailsLoading,
  } = useSelector((state) => state.hotel);
  if (isHotelDetailsLoading) {
    return <Spinner />;
  }
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={Image}
          alt={Name}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-4 w-full rounded-b-lg">
          <h2 className="text-3xl font-bold">{Name}</h2>
          <div className="flex items-center mt-2">
            <FaMapMarkerAlt className="mr-2 text-yellow-400" />
            <span className="text-gray-300">{HotelLocation}</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mt-8 grid gap-8 grid-cols-1 lg:grid-cols-3">
        {/* Hotel Info Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 col-span-2">
          <h3 className="text-xl font-semibold mb-2">Description</h3>
          <p className="text-gray-700 mb-4">{Description}</p>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="text-sm text-gray-600 flex items-center">
              <FaBed className="mr-2 text-indigo-500" /> Type:{" "}
              {AccommodationTypeName}
            </div>
            <div className="text-sm text-gray-600 flex items-center">
              <FaCheckCircle className="mr-2 text-green-500" /> Free Slots:{" "}
              {freeSlots}
            </div>
          </div>
          <button className="mt-6 w-[300px] py-3 rounded-md bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg font-semibold shadow-lg hover:from-green-600 hover:to-teal-600 transition duration-300 transform hover:scale-105">
            Check out
          </button>
        </div>

        {/* Rating and Amenities Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Ratings */}
          <h3 className="text-xl font-semibold mb-4">Rating</h3>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < rating ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
            <span className="ml-2 text-gray-700 font-medium">{rating}/5</span>
          </div>

          {/* Amenities */}
          <h3 className="text-xl font-semibold mt-6 mb-4">Amenities</h3>
          <ul className="grid grid-cols-2 gap-2">
            {hotelAmenities?.map((amenity, index) => (
              <li
                key={index}
                className="text-gray-600 text-sm flex items-center"
              >
                <FaCheckCircle className="mr-2 text-blue-500" />
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default HotelDetails;
