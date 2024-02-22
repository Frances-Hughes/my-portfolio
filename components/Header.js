import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="w-full flex items-center bg-white/10 backdrop-blur-sm z-30 h-[50px] p-4">
      <div className="container mx-auto">
        <div className="flex justify-end py-4 md:py-8" z-40>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
