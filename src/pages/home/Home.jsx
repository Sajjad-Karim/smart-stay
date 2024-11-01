import React from "react";
import HeroSection from "@/components/heroSection";
import Testimonials from "@/components/testmonials";
import FeaturesOverview from "@/components/feature";

const Home = () => {
  return (
    <div className="bg-gray-100 ">
      {/* Hero Section */}
      <HeroSection />

      <FeaturesOverview />
      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Home;
