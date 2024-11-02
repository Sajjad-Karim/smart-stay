import React from "react";
import bg from "../../assets/images/hero1.jpg";
import AdvancedSearchFilters from "../advancedSearch";
const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-blend-darken bg-[rgba(0,0,0,0.4)] bg-center h-[500px] flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Your Perfect Stay with SmartStay
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Personalized room-sharing experiences for modern travelers.
        </p>
        <button className="bg-indigo-600 px-6 py-3 rounded-md text-white hover:bg-indigo-700 transition">
          Start Exploring
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
