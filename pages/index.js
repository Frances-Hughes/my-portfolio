import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-primary/80 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/15 via-black/35 to-black/20">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/*title*/}
          <h1 className="h1">
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            nostrum perspiciatis corporis. Pariatur reiciendis minima facere
            deserunt? Corrupti, omnis numquam, praesentium possimus modi, amet
            facilis culpa dignissimos quo ex officia!
          </p>
          <div className="flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>
        </div>
        <div>image</div>
      </div>
    </div>
  );
};

export default Home;
