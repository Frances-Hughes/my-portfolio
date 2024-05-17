import React, { useState, useEffect } from "react";
import AboutMe from "../../components/AboutMe";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import {
  GiMountainClimbing,
  GiViolin,
  GiCommercialAirplane,
  GiTennisRacket,
  GiSittingDog,
  GiHiking,
  GiCakeSlice,
  GiPianoKeys,
} from "react-icons/gi";
import { SiUnrealengine, SiPlaystation5 } from "react-icons/si";
import { FaSteam } from "react-icons/fa";
import { MdOutlineRowing } from "react-icons/md";

const aboutData = [
  {
    title: "Education",
    info: [
      {
        title: "NZQA Diploma in Full Stack Development",
        provider: "Dev Academy, Auckland",
        stage: "2022",
      },
      {
        title: "Certificate in Business Studies",
        provider: "Massey University",
        stage: "2023",
      },
      {
        title:
          "Bachelor of Arts Degree (Double Major) + Computer Science papers",
        provider: "The University of Auckland",
        stage: "2012-2016",
      },
    ],
  },
  {
    title: "Awards",
    info: [
      {
        title: "4 x Certificate of Distinction - Massey University",
        stage: "2022",
      },
      {
        title:
          "Griffith University Rowing Cup (Australia) - Quadruple Scull 1st place",
        stage: "2019",
      },
    ],
  },
  {
    title: "Experience",
    info: [
      {
        title: "Junior Front-End Developer - Simmaren",
        stage: "September 2023 - present",
      },
      {
        title: "Freelance Web Developer",
        stage: "January 2023 - September 2023",
      },
      {
        title: "PCO Officer (Estates Team) - ASB Bank",
        stage: "2022",
      },
      {
        title: "Ministry of Justice (Auckland DC, Hamilton DC)",
        stage: "2017-2022",
      },
    ],
  },
  {
    title: "Hobbies",
    info: [
      {
        title: "Outdoor",
        icons: [
          <GiMountainClimbing key="mountainClimbing" />,
          <MdOutlineRowing key="rowing" />,
          <GiCommercialAirplane key="airplane" />,
          <GiTennisRacket key="tennis" />,
          <GiSittingDog key="dog" />,
          <GiHiking key="hiking" />,
        ],
      },
      {
        title: "Indoor",
        icons: [
          <SiUnrealengine key="unrealEngine" />,
          <SiPlaystation5 key="playstation5" />,
          <FaSteam key="steam" />,
          <GiCakeSlice key="cake" />,
          <GiPianoKeys key="piano" />,
          <GiViolin key="violin" />,
        ],
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState("calc(100vh - 50px)");

  useEffect(() => {
    const handleResize = () => {
      const newHeight = `100vh`;
      setContainerHeight(newHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="bg-primary/30 pt-24 text-center xl:text-left px-4 xl:pt-56"
      style={{ minHeight: containerHeight }}
    >
      <div className="blob hidden xl:flex z-10"></div>
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 relative gap-y-6">
        <div className="flex-1 flex flex-col relative top-[-30px] items-center">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="h2 px-4 xs:h3 text-center z-30"
          >
            <span className="header-typewriter text-accent font-bold text-wrap mx-2 ">
              Front-end developer
            </span>
            <div className="mx-2">with a passion.</div>
            <div className="mx-2">Reach out today!</div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="max-w-[450px] mx-auto xl:mx-0 mb-6  px-2 xl:px-0"
          >
            <AboutMe className="z-30" />
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          exit="hidden"
          animate="show"
          className="flex flex-col w-full xl:max-w-[48%] h-[380px] mb-32"
        >
          <div className="flex gap-x-2 text-lg md:gap-x-8 mx-auto xl:mx-0 mb-4 justify-between">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex
                    ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    : ""
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="p-4 bg-white/10 rounded-lg py-2 xl:py-2 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-center text-center">
            {aboutData[index]?.info?.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className=" flex-col  max-w-max items-center text-white"
              >
                <div className="font-bold">{item.title}</div>
                <div className="">{item.provider}</div>
                <div className="mb-4">{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
