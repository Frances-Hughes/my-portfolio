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
  SiTailwindcss,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiAuth0,
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
          <SiTailwindcss />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <SiAuth0 />,
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
        title: "Bachelor of Arts Degree + Computer Science",
        provider: "The University of Auckland",
        stage: "2012-2017",
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
            Captivating
            <span className="text-accent"> stories</span> create magnificent
            designs
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A maiores
            repudiandae doloremque sed ducimus, assumenda facere qui molestiae,
            necessitatibus ratione expedita labore rerum sint libero architecto
            quisquam tempora? In, modi.
          </p>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 justify-between">
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
          <div className="p-4  bg-pink-400/10 rounded-lg py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
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
