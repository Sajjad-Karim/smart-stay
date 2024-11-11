import React from "react";

const ReviewCard = ({ text, name, rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${
        index < rating ? "text-yellow-400" : "text-gray-300"
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 15.27l6.18 3.73-1.64-7.03 5.27-4.73-6.91-.56L10 .39 7.1 7.73l-6.91.56 5.27 4.73-1.64 7.03L10 15.27z"
        clipRule="evenodd"
      />
    </svg>
  ));

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <p className="text-gray-600 mb-4">{text}</p>
      <div className="flex items-center justify-center space-x-1 mb-4">
        {stars}
      </div>
      <h3 className="font-semibold">- {name}</h3>
    </div>
  );
};

export default ReviewCard;
