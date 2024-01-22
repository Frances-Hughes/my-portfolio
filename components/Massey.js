import Image from "next/image";

const Massey = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none" style={{ zIndex: 30 }}>
      <Image
        src={"/masseyuni-removed.png"}
        width={163}
        height={170}
        alt="Massey"
        className="w-full h-full"
      />
    </div>
  );
};

export default Massey;
