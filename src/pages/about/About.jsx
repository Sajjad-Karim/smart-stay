import React from "react";
import picAboutUsCover from "../../assets/images/hero.jpg";
import communityTrust from "../../assets/svg/community-svgrepo-com.svg";
import securePayment from "../../assets/svg/secure-payment-svgrepo-com.svg";
import personalizedSearch from "../../assets/svg/hotel-svgrepo-com.svg";

const About = () => {
  return (
    <>
      <section
        className="relative h-96 bg-cover bg-center "
        style={{ backgroundImage: `url(${picAboutUsCover})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className=" relative flex justify-center flex-col  items-center h-full text-center text-white px-4">
          <h1 className="text-4xl font-bold">
            Discover Personalized Travel Experience With SmartStay
          </h1>
          <p className="text-lg mt-2">
            Your ideal stay, tailored to your preferences
          </p>
          {/* <button className="mt-4 px-6 py-2 bg-gray-800 rounded-full hover:bg-gray-900 transition">
            Read more ...
          </button> */}
        </div>
      </section>

      <section className="text-center py-16 px-4">
        <h2 className="text-4xl font-semibold text-gray-800">Our Mission</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          At SmartStay, our mission is to provide travelers with personalized,
          secure, and memorable travel experiences.
        </p>
                    {/* optional  */}
        {/* <div className="flex flex-wrap justify-center mt-8 gap-8">
          <div class="flex flex-col items-center">
           <svg class="w-12 h-12 text-blue-500" fill="currentColor">
              ...
            </svg>
            <p class="mt-2 text-gray-700">Personalization</p>
          </div>
          <div class="flex flex-col items-center">
            <svg class="w-12 h-12 text-blue-500" fill="currentColor">
              ...
            </svg>
            <p class="mt-2 text-gray-700">Security</p>
          </div>
          <div class="flex flex-col items-center">
            <svg class="w-12 h-12 text-blue-500" fill="currentColor">
              ...
            </svg>
            <p class="mt-2 text-gray-700">Community</p>
          </div>
        </div> */}
      </section>

      <section className="py-16 px-4 bg-gray-100">
  <h2 className="text-4xl text-gray-800 font-semibold text-center">
    What We Offer
  </h2>
  <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
    <div className="rounded-lg shadow-md p-6 bg-white">
      <div className="p-10 bg-gray-100 rounded-md">
        <img src={personalizedSearch} alt="personalizedSearch" />
      </div>
      <div className="mt-4 p-6 bg-gray-100 rounded-md">
        <h3 className="text-xl font-semibold text-gray-800">
          Personalized Search
        </h3>
        <p className="mt-2 text-gray-600">
          Find accommodations based on your preferences, location, and budget.
        </p>
      </div>
    </div>
    <div className="rounded-lg shadow-md p-6 bg-white">
      <div className="p-10 bg-gray-100 rounded-md">
        <img src={securePayment} alt="securePayment" />
      </div>
      <div className="mt-4 p-6 bg-gray-100 rounded-md">
        <h3 className="text-xl font-semibold text-gray-800">
          Secure Payments
        </h3>
        <p className="mt-2 text-gray-600">
          We ensure a safe transaction process with data encryption.
        </p>
      </div>
    </div>
    <div className="rounded-lg shadow-md p-6 bg-white">
      <div className="p-10 bg-gray-100 rounded-md">
        <img src={communityTrust} alt="communityTrust" />
      </div>
      <div className="mt-4 p-6 bg-gray-100 rounded-md">
        <h3 className="text-xl font-semibold text-gray-800">
          Community Trust
        </h3>
        <p className="mt-2 text-gray-600">
          Engage with verified hosts and guests to build a trusted community.
        </p>
      </div>
    </div>
  </div>
</section>


      <section className="py-16 px-4 text-center  bg-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800">
          Join the SmartStay Community
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Experience travel the way you want. Join our community of travelers
          and hosts, and make every stay memorable.
        </p>
        <button className="mt-6 px-8 py-3 bg-gray-800 rounded-full hover:bg-gray-900 transition text-white">
          Get Started
        </button>
      </section>
    </>
  );
};

export default About;
