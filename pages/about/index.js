import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import AboutMe from "../../components/AboutMe";
// icons

// Hobbies
import { GiMountainClimbing } from "react-icons/gi";
import { GiGrandPiano } from "react-icons/gi";
import { GiViolin } from "react-icons/gi";
import { GiCupcake } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiTennisRacket } from "react-icons/gi";
import { GiSittingDog } from "react-icons/gi";
import { GiHiking } from "react-icons/gi";
import { SiUnrealengine } from "react-icons/si";
import { SiPlaystation5 } from "react-icons/si";
import { FaSteam } from "react-icons/fa";
import { MdOutlineRowing } from "react-icons/md";

const aboutData = [
  {
    title: "Education",
    info: [
      {
        title: "NZQA Diploma in Full Stack Development",
        provider: "Dev Academy, Auckland",
        stage: "2022-2023",
      },
      {
        title: "Certificate in Business Studies",
        provider: "Massey University",
        stage: "2023",
      },
      {
        title: "Bachelor of Arts Degree + Computer Science papers",
        provider: "The University of Auckland",
        stage: "2012-2017",
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "3 x Certificate of Distinction - Massey University",
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
    title: "experience",
    info: [
      {
        title: "Front-End Developer (Freelance)",
        stage: "2023 - 2024",
      },
      {
        title: "PCO Officer - ASB Bank",
        stage: "2022",
      },
      {
        title: "Ministry of Justice",
        stage: "2016-2022",
      },
    ],
  },

  {
    title: "Hobbies",
    info: [
      {
        title: "Outdoor",
        icons: [
          <GiMountainClimbing />,
          <MdOutlineRowing />,
          <GiCommercialAirplane />,
          <GiTennisRacket />,
          <GiSittingDog />,
          <GiHiking />,
        ],
      },
      {
        title: "Indoor",
        icons: [
          <SiUnrealengine />,
          <SiPlaystation5 />,
          <FaSteam />,
          <GiCupcake />,
          <GiGrandPiano />,
          <GiViolin />,
        ],
      },
    ],
  },
];

import Circles from "../../components/Circles";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/*TEXT*/}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="h2">
            <span className="text-accent"> Front-end developer</span> with a
            passion. Reach out today!
          </h2>
          <div className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            <AboutMe />
          </div>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="text-xl flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 justify-between">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer
                capitalize
                xl:text-lg
                relative after:w-8 after:h-[2px] after"bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="p-4  bg-white/10 rounded-lg py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-6 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>

                  <div>{item.provider}</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
