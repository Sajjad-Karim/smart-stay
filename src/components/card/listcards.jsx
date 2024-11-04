// src/components/card/listcards.jsx
import React from "react";
import HotelCard from "./index"; // Ensure you import the HotelCard component correctly
import SlickSlider from "../carousel";
const HotelList = ({ hotels }) => {
  return (
    <div className="px-7">
      <SlickSlider slides={4}>
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            image={hotel.image}
            name={hotel.name}
            location={hotel.location}
            roomType={hotel.roomType}
            description={hotel.description}
          />
        ))}
      </SlickSlider>
    </div>
  );
};

export default HotelList;
