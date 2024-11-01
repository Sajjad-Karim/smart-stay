import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { FaLock, FaStar, FaCogs, FaPhoneAlt } from "react-icons/fa";
import "./style.css";
function SlickSlider({ children }) {
  var settings = {
    dots: false,
    infinite: true, // Set to true for smooth navigation
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true, // Ensure arrows are enabled on all breakpoints
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className="flex gap-2">
        {children}
      </Slider>
    </div>
  );
}

export default SlickSlider;
