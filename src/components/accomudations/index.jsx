// src/components/Accomdations.jsx
import React, { useState } from "react";
import SearchFilter from "../advancedSearch"; // Ensure this component exists
import hotelsData from "../card/data"; // Ensure the path is correct
import HotelList from "../card/listcards"; // Ensure the path is correct

const Accomdations = () => {
  const [filters, setFilters] = useState({
    location: "",
    price: "",
    amenities: [],
    rating: "",
    roomType: "",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredHotels = hotelsData.filter((hotel) => {
    const matchesLocation = hotel.location
      .toLowerCase()
      .includes(filters.location.toLowerCase());
    const matchesPrice = !filters.price || hotel.priceRange === filters.price; // Adjust based on your data structure
    const matchesRating =
      !filters.rating || hotel.rating === Number(filters.rating); // Adjust based on your data structure
    const matchesRoomType =
      !filters.roomType || hotel.roomType === filters.roomType; // Adjust based on your data structure
    const matchesAmenities =
      filters.amenities.length === 0 ||
      filters.amenities.every((amenity) => hotel.amenities.includes(amenity)); // Adjust based on your data structure

    return (
      matchesLocation &&
      matchesPrice &&
      matchesRating &&
      matchesRoomType &&
      matchesAmenities
    );
  });

  return (
    <>
      <SearchFilter onFilterChange={handleFilterChange} />
      <HotelList hotels={filteredHotels} />
    </>
  );
};

export default Accomdations;
