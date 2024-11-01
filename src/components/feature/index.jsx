// FeaturesOverview.jsx
import React from "react";
import { FaLock, FaStar, FaCogs, FaPhoneAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaLock size={32} />,
    title: "Secure Payments",
    description: "Enjoy secure and seamless transactions.",
  },
  {
    icon: <FaStar size={32} />,
    title: "Personalized Recommendations",
    description: "Get stay suggestions tailored to you.",
  },
  {
    icon: <FaCogs size={32} />,
    title: "Easy-to-Use Platform",
    description: "Find and book accommodations easily.",
  },
  {
    icon: <FaPhoneAlt size={32} />,
    title: "24/7 Support",
    description: "We're here to help anytime, anywhere.",
  },
];

const FeaturesOverview = () => {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-semibold text-center mb-10">
        SmartStay Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center p-8 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-blue-50"
          >
            <div className="text-blue-600 mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesOverview;
