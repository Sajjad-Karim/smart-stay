import HeroSection from "@/components/heroSection";
import Testimonials from "@/components/testmonials";
import FeaturesOverview from "@/components/feature";
import Accomdations from "@/components/accomudations";

const Home = () => {
  return (
    <div className="bg-gray-100 ">
      {/* Hero Section */}
      <HeroSection />
      {/* <AccommodationSearchPage />
       */}
      <Accomdations />
      <FeaturesOverview />
      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Home;
