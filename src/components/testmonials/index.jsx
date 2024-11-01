// Testimonials.jsx
import React from "react";
import TestimonialCard from "./testimonialCard";

const Testimonials = () => {
  const testimonialsData = [
    {
      text: "SmartStay made finding the perfect stay so easy. The recommendations were spot on!",
      name: "Emily, Solo Traveler",
    },
    {
      text: "Loved the community vibe and the easy booking process. Highly recommended!",
      name: "Alex, Backpacker",
    },
    {
      text: "From beachside bungalows to city apartments, SmartStay had it all!",
      name: "Sarah, Digital Nomad",
    },
  ];

  return (
    <section className="bg-indigo-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              name={testimonial.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
