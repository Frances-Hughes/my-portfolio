import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-20 w-[400px] xl:w-[400px]">
      <Image src="/paint.svg" width={200} height={200} alt="" />
    </div>
  );
};

export default TopLeftImg;
