import React from "react";
import TestimonialSliders from "../../components/TestimonialSliders";
import { TypeAnimation } from "react-type-animation";

const Testimonials = () => {
  return (
    <div className="h-full py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <div className="mb-8 xl:mb-0 font-bold">
          <TypeAnimation
            sequence={["What people say about me:", 1000]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "3rem",
              display: "inline-block",
            }}
            className="text-white"
          />
        </div>
        <div>
          <TestimonialSliders />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
