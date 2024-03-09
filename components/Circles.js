import Image from "next/image";

const Circles = () => {
  return (
    <div className="fixed bottom-0 right-0 w-[200px] md:w-[300px] mix-blend-color-dodge animate-pulse duration-75 z-10 hidden md:block">
      <Image
        src={"/circle11.png"}
        width={560}
        height={560}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Circles;
