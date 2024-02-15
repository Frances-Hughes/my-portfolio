import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="w-full flex items-center bg-white/10 backdrop-blur-sm z-30 h-[50px] p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-y-6 py-4 md:py-8">
          <Link href={"/"}>
            <Image
              src={"/headerimage.png"}
              width={50}
              height={50}
              alt="logo"
              priority={true}
            />
          </Link>

          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
