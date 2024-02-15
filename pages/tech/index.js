import React from "react";
import Carousel from "../../components/Carousel";
import { TypeAnimation } from "react-type-animation";

const Tech = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center ">
      <div className="mb-8 p-4">
        <h2 className="h2">
          Technology I have used
          <span className="text-accent"> since becoming a developer:</span>
        </h2>
        <TypeAnimation
          sequence={[
            "Going a bit fast?",
            1000,
            "Hover over an image to pause:",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
        />
      </div>
      <div className="flex items-center justify-center w-full max-w-700px h-96px mx-auto  bg-white/10 backdrop-blur-sm py-12">
        <Carousel />
      </div>
    </div>
  );
};

export default Tech;
