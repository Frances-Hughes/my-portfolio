import React from "react";

const AboutMe = () => {
  return (
    <div className="responsive-font font-light z-30">
      <div className="typewriter text-center mb-6">
        <p className="whitespace-nowrap">
          Hi there! My name is Frances Hughes and I have
        </p>
        <p className="whitespace-nowrap animation-type duration-2s">
          been creating websites for the last two years.
        </p>
        <p className="whitespace-nowrap animation-type duration-2s">
          While I&apos;m quite proud of my web development
        </p>
        <p className="whitespace-nowrap animation-type duration-2s">
          tech stack, here is what sets me apart from
        </p>
        <p className="whitespace-nowrap animation-type duration-2s">
          other junior front-end developers:
        </p>
      </div>
      <div className="text-start ">
        <ul className="typewriter mx-6">
          <li className="whitespace-nowrap animation-type duration-2s list-none">
            Probably the most important one is that I
          </li>
          <li className="whitespace-nowrap animation-type duration-2s list-none">
            can solve problems on my own without
          </li>
          <li className="whitespace-nowrap animation-type duration-2s list-none mb-4">
            needing any babysitting.
          </li>
          <li className="whitespace-nowrap animation-type duration-2s list-none">
            If I don&apos;t know something, I learn it
          </li>
          <li className="whitespace-nowrap animation-type duration-2s list-none mb-4">
            <span className="text-accent font-bold">very quickly.</span>
          </li>
          <li className="whitespace-nowrap animation-type duration-2s list-none">
            I&apos;m also an avid video-gamer and board
          </li>
          <li className="whitespace-nowrap animation-type duration-2s list-none">
            gamer, so there is no way that you cannot
          </li>
          <li className="whitespace-nowrap animation-type duration-2s list-none mb-4">
            speak to me about cool stuff.
          </li>
          <li className="whitespace-nowrap animation-type duration-2s list-none">
            I could go on for longer, but there&apos;s only
          </li>
          <li className="whitespace-nowrap animation-type duration-2s list-none">
            so much space on this website.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
