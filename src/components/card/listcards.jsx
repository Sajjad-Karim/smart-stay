// src/components/card/listcards.jsx
/* eslint-disable react/prop-types */

import HotelCard from './index'; // Ensure you import the HotelCard component correctly
import SlickSlider from '../carousel';
const HotelList = ({ hotels, bookNow }) => {
  return (
    <div className="px-7">
      {hotels && (
        <SlickSlider slides={4}>
          {hotels &&
            hotels.map((hotel) => (
              <HotelCard {...hotel} key={hotel._id} bookNow={bookNow} />
            ))}
        </SlickSlider>
      )}
    </div>
  );
};

export default HotelList;
