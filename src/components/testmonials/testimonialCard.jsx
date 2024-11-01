// Testimonial.jsx
import React from "react";

const TestimonialCard = ({ text, name }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <p className="text-gray-600 mb-4">{text}</p>
      <h3 className="font-semibold">- {name}</h3>
    </div>
  );
};

export default TestimonialCard;
