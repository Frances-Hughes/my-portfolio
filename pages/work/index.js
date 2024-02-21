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
          Highlighted <span className="text-accent">project</span> of mine:
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
            style={{ fontSize: "22", display: "inline-block" }}
          />
        </div>
      </div>

      <div className="px-12 md:px-36 grid gap-5 lg:flex lg:justify-center">
        <motion.div
          className="flex items-center justify-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            bottom: "0",
            borderRadius: "6px",
            width: "100%",
          }}
          animate={{
            y: [0, -12, 0],
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
            className="relative"
          >
            <Image
              src={"/movie-manor.png"}
              width={737}
              height={678}
              alt="Movie Manor project preview"
              className="translate-z-0 w-full h-full"
            />
          </a>
        </motion.div>
        <p className="relative bg-white/10 backdrop-blur-sm p-4 text-center text-white my-12">
          I have made a range of projects over the past 2 years - from
          university projects, to hobby projects, to building websites for
          friends and family. This project, Movie Manor, was built using
          Material UI, my preferred React component library. It utilizes the
          TMDB API to fetch and display movie data on interactive cards.
          Deployed via Vercel, it offers instant access without the need for
          manual setup. The source code for my repository is available for
          viewing
          <a
            href="https://www.github.com/Frances-Hughes/movie-manor"
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
