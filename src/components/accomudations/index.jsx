// src/components/Accomdations.jsx
import { useEffect, useState } from 'react';
import SearchFilter from '../advancedSearch';
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

  const [filteredHotels, setFilteredHotels] = useState(hotelData || []);

  useEffect(() => {
    dispatch(getHotelData());
  }, [dispatch]);

  useEffect(() => {
    setFilteredHotels(hotelData);
  }, [hotelData]);

  const bookNow = (_id) => {
    dispatch(getSingleHotel(_id));
    navigate(`/hotel-details/${_id}`);
  };

  const handleFilterChange = (filters) => {
    const filtered = hotelData.filter((hotel) => {
      const matchesLocation = filters.location
        ? hotel.HotelLocation?.toLowerCase().includes(
            filters.location.toLowerCase()
          )
        : true;
      const matchesPrice = filters.price
        ? hotel.hotelRateInfo.MinimumAmount >= Number(filters.price)
        : true;
      const matchesRating = filters.rating
        ? hotel.rating === Number(filters.rating)
        : true;
      const matchesRoomType = filters.roomType
        ? hotel.roomType.includes(filters.roomType)
        : true;
      const matchesAmenities = filters.amenities.length
        ? filters.amenities.every((amenity) =>
            hotel.hotelAmenities.includes(amenity)
          )
        : true;

      return (
        matchesLocation &&
        matchesPrice &&
        matchesRating &&
        matchesRoomType &&
        matchesAmenities
      );
    });
    setFilteredHotels(filtered);
  };

  if (isHotelDataLoading) return <Spinner />;

  return (
    <>
      <SearchFilter onFilterChange={handleFilterChange} />
      <HotelList hotels={filteredHotels} bookNow={bookNow} />
    </>
  );
};

export default Accomdations;
