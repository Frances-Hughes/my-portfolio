import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import NodeJsImage from "../public/Tech/NodeJs.png";
import ReactImage from "../public/Tech/React.png";
import ThreeJsImage from "../public/Tech/ThreeJs.png";
import ReduxImage from "../public/Tech/Redux.png";
import MuiImage from "../public/Tech/MUI.png";
import EmailJsImage from "../public/Tech/EmailJs.png";
import TailwindImage from "../public/Tech/Tailwind.png";
import AnimateCSSImage from "../public/Tech/Animate.png";
import Auth0Image from "../public/Tech/Auth0.png";
import BootstrapImage from "../public/Tech/Bootstrap.png";
import FramerMotionImage from "../public/Tech/FramerMotion.png";
import HTML5Image from "../public/Tech/HTML.png";
import KnexJsImage from "../public/Tech/Knex.png";
import SQLImage from "../public/Tech/SQL-logo.png";
import CPPImage from "../public/Tech/CPP.png";
import UE5Image from "../public/Tech/U.png";
import SuperTestImage from "../public/Tech/SuperTest1.png";
import JestImage from "../public/Tech/Jest.png";
import FlexBoxImage from "../public/Tech/flex-box.png";
import RestAPIsImage from "../public/Tech/RestAPIs.png";

const logos = [
  { src: NodeJsImage, alt: "NodeJs", width: 150, height: 100 },
  { src: ReactImage, alt: "React", width: 150, height: 100 },
  { src: ThreeJsImage, alt: "ThreeJs", width: 150, height: 100 },
  { src: ReduxImage, alt: "Redux", width: 150, height: 100 },
  { src: MuiImage, alt: "Mui", width: 170, height: 100 },
  { src: EmailJsImage, alt: "EmailJs", width: 170, height: 100 },
  { src: TailwindImage, alt: "Tailwind", width: 170, height: 100 },
  { src: AnimateCSSImage, alt: "AnimateCSS", width: 220, height: 100 },
  { src: Auth0Image, alt: "Auth0", width: 170, height: 100 },
  { src: BootstrapImage, alt: "Bootstrap", width: 160, height: 100 },
  { src: FramerMotionImage, alt: "Framer Motion", width: 180, height: 100 },
  { src: HTML5Image, alt: "HTML5", width: 150, height: 100 },
  { src: KnexJsImage, alt: "KnexJs", width: 300, height: 100 },
  { src: SQLImage, alt: "SQL", width: 150, height: 100 },
  { src: CPPImage, alt: "CPP", width: 100, height: 100 },
  { src: UE5Image, alt: "Unreal Engine 5", width: 180, height: 100 },
  { src: SuperTestImage, alt: "SuperTest", width: 160, height: 100 },
  { src: JestImage, alt: "Jest", width: 160, height: 100 },
  { src: FlexBoxImage, alt: "FlexBox", width: 160, height: 100 },
  { src: RestAPIsImage, alt: "RestAPIs", width: 160, height: 100 },
];

const Carousel = () => {
  const [animateX, setAnimateX] = useState(0);
  const intervalRef = useRef();
  const isReversing = useRef(false);
  const speed = 4; // Speed of the carousel

  const totalWidth = logos.reduce((acc, logo) => acc + logo.width, 0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setAnimateX((prevX) => {
        let newX = prevX;
        if (isReversing.current) {
          newX = prevX + speed; // Move in reverse direction
          if (newX >= 0) {
            isReversing.current = false; // Reset to forward direction
          }
        } else {
          newX = prevX - speed; // Move in forward direction
          if (newX <= -totalWidth) {
            isReversing.current = true; // Switch to reverse direction
          }
        }
        return newX;
      });
    }, 20);

    return () => clearInterval(intervalRef.current);
  }, [totalWidth]);

  const pauseAnimation = () => clearInterval(intervalRef.current);
  const resumeAnimation = () => {
    // Resume animation from current position
    intervalRef.current = setInterval(() => {
      setAnimateX((prevX) => {
        let newX = prevX;
        if (isReversing.current) {
          newX = prevX + speed;
          if (newX >= 0) {
            isReversing.current = false;
          }
        } else {
          newX = prevX - speed;
          if (newX <= -totalWidth) {
            isReversing.current = true;
          }
        }
        return newX;
      });
    }, 20);
  };

  const renderLogos = () => (
    <>
      {logos.map((logo, index) => (
        <Image key={index} src={logo.src} alt={logo.alt} {...logo} />
      ))}
    </>
  );

  return (
    <div
      className="carousel-container relative w-full h-100px overflow-hidden"
      onMouseEnter={pauseAnimation}
      onMouseLeave={resumeAnimation}
    >
      <motion.div
        className="carousel flex"
        initial={{ x: animateX }}
        animate={{ x: animateX }}
        transition={{ type: "tween" }}
      >
        <div className="flex space-x-8">{renderLogos()}</div>
      </motion.div>
    </div>
  );
};

export default Carousel;
