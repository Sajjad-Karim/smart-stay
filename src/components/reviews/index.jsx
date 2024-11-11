import React from "react";
import ReviewCard from "./card";
import SlickSlider from "../carousel";
import { useSelector } from "react-redux";
const Reviews = ({}) => {
  const { reviews } = useSelector((state) => state.hotel.hotelDetails);

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          What Our Guests Say
        </h2>
        <SlickSlider slides={4}>
          {reviews?.map((review, index) => (
            <ReviewCard
              key={index}
              text={review.review}
              name={review.userId.fullName}
              rating={review.rating}
            />
          ))}
        </SlickSlider>
      </div>
    </section>
  );
};

export default Reviews;
