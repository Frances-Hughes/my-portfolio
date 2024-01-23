import React from "react";
import Carousel from "../../components/Carousel";

const Work = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-8">
        <h1 className="h2">
          Technology I <span className="text-accent">regularly </span>use:
        </h1>
      </div>
      <div className="flex items-center justify-center w-full max-w-700px h-96px mx-auto bg-pink-900/40 py-10">
        <Carousel />
      </div>
    </div>
  );
};

export default Work;
