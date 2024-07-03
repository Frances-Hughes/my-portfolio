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
            className="flex flex-col items-center justify-center w-full md:w-1/3"
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
              href="https://photographer-site-gamma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full"
            >
              <Image
                src={"/ayano_photography.png"}
                layout="responsive"
                width={500}
                height={460}
                alt="Ayano Masuda Photography project preview"
              />
            </a>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center w-full md:w-1/3"
            animate={{
              y: [0, 24, 0],
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
                src={"/movie_manor.png"}
                layout="responsive"
                width={500}
                height={460}
                alt="Movie Manor project preview"
              />
            </a>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center w-full md:w-1/3"
            animate={{
              y: [0, -24, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            <a
              href="https://basic-cart-frances.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full"
            >
              <Image
                src={"/basic-shopping-cart.png"}
                layout="responsive"
                width={500}
                height={460}
                alt="Example Project preview"
              />
            </a>
          </motion.div>
        </div>
        <p className="relative bg-white/10 backdrop-blur-sm p-4 text-center text-white my-6 rounded-md w-full">
          I have worked on a range of projects over the past couple of years,
          and am currently working on my Typescript and Sass which will be added
          to my hobby Github account once completed. Before assuming my current
          role as a junior front-end developer at Simmaren, I worked as a
          contractor. This role followed the completion of my apprenticeship
          program at Enspiral Dev Academy in late 2022, where I earned a level 6
          NZQA certification. In addition to my professional journey, I hold a
          Certificate in Business Studies from Massey University, and a
          Bachelors Degree from the University of Auckland. My Portfolio was
          made using React and Tailwind CSS, while my highlighted projects on
          this page, Movie Manor and Ayano Masuda Photography, were built using
          Material UI, my preferred React component library. Movie Manor
          utilizes the TMDB API to fetch and display movie data on interactive
          cards whereas Ayano Masuda Photography, my other highlighted project
          is a fun website I am building for a friend/previous colleague who is
          turning a long-term hobby into a business. Deployed via Vercel, both
          projects offer instant access without the need for manual setup. The
          source code for my repositories are pinned to my Github Hobby profile
          and available for viewing
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
