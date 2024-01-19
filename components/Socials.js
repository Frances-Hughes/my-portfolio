import Link from "next/link";

import {
  RiLinkedinBoxLine,
  RiGithubFill,
  RiInstagramLine,
  RiFacebookLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <Link
        href={"https://www.linkedin.com/in/frances-l-hughes/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxLine />
      </Link>
      <Link
        href={"https://github.com/Frances-Hughes"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>

      <Link
        href={"https://www.facebook.com/ViveLaFrances/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://www.instagram.com/francesroundtheworld/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
