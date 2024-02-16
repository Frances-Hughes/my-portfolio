import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[400px] xl:w-[400px]">
      <Image src="/splatter.png" width={600} height={600} alt="" />
    </div>
  );
};

export default TopLeftImg;
