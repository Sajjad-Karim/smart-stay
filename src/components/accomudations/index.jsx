// src/components/Accomdations.jsx
import { useEffect } from 'react';
import SearchFilter from '../advancedSearch';
// import hotelsData from '../card/data';
import HotelList from '../card/listcards';

import { getHotelData } from '@/features/hotel/hotel.action';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleHotel } from '@/features/hotel/hotel.action';
import { useNavigate } from 'react-router-dom';
import Spinner from '../spinner/Spinner';

const Accomdations = () => {
  const { hotelData, isHotelDataLoading } = useSelector((state) => state.hotel);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [filters, setFilters] = useState({
  //   location: '',
  //   price: '',
  //   amenities: [],
  //   rating: '',
  //   roomType: '',
  // });
  const bookNow = (_id) => {
    dispatch(getSingleHotel(_id));
    navigate(`/hotel-details/${_id}`);
  };
  // const handleFilterChange = (newFilters) => {
  //   setFilters(newFilters);
  // };
  // get the hotel data
  useEffect(() => {
    dispatch(getHotelData());
  }, [dispatch]);
  // const filteredHotels = hotelsData.filter((hotel) => {
  //   const matchesLocation = hotel.location
  //     .toLowerCase()
  //     .includes(filters.location.toLowerCase());
  //   const matchesPrice = !filters.price || hotel.priceRange === filters.price; // Adjust based on your data structure
  //   const matchesRating =
  //     !filters.rating || hotel.rating === Number(filters.rating); // Adjust based on your data structure
  //   const matchesRoomType =
  //     !filters.roomType || hotel.roomType === filters.roomType; // Adjust based on your data structure
  //   const matchesAmenities =
  //     filters.amenities.length === 0 ||
  //     filters.amenities.every((amenity) => hotel.amenities.includes(amenity)); // Adjust based on your data structure

  //   return (
  //     matchesLocation &&
  //     matchesPrice &&
  //     matchesRating &&
  //     matchesRoomType &&
  //     matchesAmenities
  //   );
  // });
  if (isHotelDataLoading) {
    return <Spinner />;
  }
  return (
    <>
      <SearchFilter />
      <HotelList hotels={hotelData} bookNow={bookNow} />
    </>
  );
};

export default Accomdations;
