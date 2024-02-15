import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { fadeIn } from "../variants";
import { easeInOut, motion } from "framer-motion";

import Link from "next/link";

import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="bg-primary/10 h-full overflow-hidden">
      <ParticlesContainer />
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/5 to-black/5">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="h2"
          >
            Welcome to the <span className="text-accent"> portfolio</span>
            <br /> of Frances Hughes
          </motion.h1>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            <TypeAnimation
              sequence={[
                "Trained in full stack developement",
                1000,
                "Dabbled in game developement",
                1000,
                "Passionate about frontend development!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
            />
          </motion.p>

          {/* Projects button - mobile view */}
          <div className="flex justify-center xl:hidden relative z-10">
            <ProjectsBtn />
          </div>

          {/* Projects button - desktop view */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="hidden xl:flex z-10"
          >
            <ProjectsBtn />
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            exit="hidden"
            animate="show"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[400px] max-h-[390px] absolute lg:bottom-0 lg:right-[12%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
