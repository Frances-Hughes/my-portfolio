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
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxLine />
      </Link>
      <Link
        href={"https://github.com/Frances-Hughes"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
    </div>
  );
};

export default Socials;
