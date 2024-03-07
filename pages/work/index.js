import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center relative overflow-y-auto"
      style={{
        paddingTop: "50px",
        paddingBottom: "80px",
        minHeight: "calc(100vh - 130px)",
      }}
    >
      <div className="grid">
        <h2 className="h2">
          Highlighted <span className="text-accent">projects</span> of mine:
        </h2>
        <div className="py-12">
          <TypeAnimation
            sequence={[
              "Want to see more of my projects?",
              1000,
              "Feel free to check out my other Github repositories, or send me a message",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "22px", display: "inline-block" }}
          />
        </div>
      </div>

      <div className="px-12 md:px-36 grid gap-5 lg:flex lg:flex-col lg:justify-center lg:items-center">
        <div className="flex flex-col md:flex-row w-full gap-5">
          <motion.div
            className="flex flex-col items-center justify-center w-full md:w-1/2"
            animate={{
              y: [0, 24, 0], // Start from the original position, move down, then back to the original position
              transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            <a
              href="https://movie-manor.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mb-5 w-full"
            >
              <Image
                src={"/movie-manor.png"}
                layout="responsive"
                width={737}
                height={678}
                alt="Movie Manor project preview"
              />
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center w-full md:w-1/2"
            animate={{
              y: [0, -24, 0], // Start from the original position, move up, then back to the original position
              transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            <a
              href="https://video-vortex-gamma.vercel.app/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full"
            >
              <Image
                src={"/Video-vortex.png"}
                layout="responsive"
                width={737}
                height={678}
                alt="Video Vortex project preview"
              />
            </a>
          </motion.div>
        </div>
        <p className="relative bg-white/10 backdrop-blur-sm p-4 text-center text-white my-6 rounded-md w-full">
          I have made a range of projects over the past 2 years - from
          university projects, to hobby projects, to building websites for
          friends and family. My Portfolio was made using React and Tailwind
          CSS, while my highlighted projects on this page, Movie Manor and Video
          Vortex, were built using Material UI, my preferred React component
          library. Movie Manor utilizes the TMDB API to fetch and display movie
          data on interactive cards whereas Video-Vortex, my other highlighted
          project, utilizes RapidAPI to fetch Youtube video data and display it
          on different channels and pages. Deployed via Vercel, both projects
          offer instant access without the need for manual setup. The source
          code for my repositories are pinned to my Github profile and available
          for viewing
          <a
            href="https://www.github.com/Frances-Hughes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-bold pl-1"
          >
            here.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Work;
