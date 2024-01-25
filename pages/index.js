import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { fadeIn } from "../variants";
import { easeInOut, motion } from "framer-motion";
import Massey from "../components/Massey";
import DevAcademy from "../components/DevAcademy";
import AucklandUni from "../components/AucklandUni";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="bg-primary/50 h-full">
      <ParticlesContainer />
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/10 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="h1"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
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

          {/* Background elements */}
          <div className="w-[1200px] h-full absolute right-0 bottom-0">
            <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              exit="hidden"
              animate="show"
            >
              <Link
                href={"https://devacademy.co.nz/"}
                target="_blank"
                className="max-w-[120px] max-h-[120px] absolute top-60  lg:right-[25%]"
              >
                <DevAcademy />
              </Link>
              <Link
                href={"https://www.auckland.ac.nz/"}
                target="_blank"
                className="max-w-[120px] max-h-[120px] absolute top-24  lg:right-[25%]"
              >
                <AucklandUni />
              </Link>
              <Link
                href={"https://www.massey.ac.nz/"}
                target="_blank"
                className="max-w-[220px] max-h-[220px] absolute top-80  lg:right-[22%]"
              >
                <Massey />
              </Link>
            </motion.div>
          </div>

          {/* Avatar */}

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            exit="hidden"
            animate="show"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[520px] max-h-[520px] absolute -bottom-32 lg:bottom-0 lg:right-[5%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
