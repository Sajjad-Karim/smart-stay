import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./style.css";

function SlickSlider({ children, slides }) {
  // Hide arrows if the number of slides is less than or equal to the children count
  const showArrows = React.Children.count(children) > slides;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    arrows: showArrows, // Set arrows based on the condition
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: showArrows,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: showArrows,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: showArrows,
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
