import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Certificate of Distinction - Massey University",
        years: "2020, 2021",
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
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "NZQA Diploma in Full Stack Development - Dev Academy, Auckland",
        stage: "2022-2023",
      },
      {
        title:
          "Certificate in Business Studies (Economics) - Massey University",
        stage: "2023",
      },
      {
        title:
          "Bachelor of Arts Degree + Computer Science - University of Auckland",
        stage: "2012-2017",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[12px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mt-12 mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div>Text</div>
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
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
        <div>
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex}>
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
