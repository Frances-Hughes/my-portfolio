import Image from "next/image";

import Link from "next/link";

import Socials from "../components/Socials";
import { FaRegFilePdf } from "react-icons/fa";

const Header = () => {
  return (
    <header className="absolute bg-white/10 backdrop-blur-sm z-30 w-full flex items-center px-16 xl:px-0 xl:h-[60px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <Image
              src={"/headerimage.png"}
              width={50}
              height={50}
              alt="logo"
              priority={true}
            />
          </Link>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all duration-300"
          >
            <FaRegFilePdf />
          </a>

          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
