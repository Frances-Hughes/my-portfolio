import Image from "next/image";

const Avatar = () => {
  return (
    <div
      className="hidden xl:flex justify-center items-center relative h-full"
      style={{ width: "453px", height: "406px", position: "relative" }}
    >
      {/* Adjusted positioning for b2.png */}
      <div
        className="absolute"
        style={{
          width: "710px",
          height: "680px",
          top: "-100px",
          left: "-105px",
        }} // Moves b2.png 20px left and 15px up
      >
        <Image
          src={"/b6.png"}
          alt=""
          layout="fill"
          objectFit="cover" // Adjust as needed to 'contain' or 'cover' based on desired effect
          className="animate-spin-slower"
        />
      </div>
      {/* Main image positioned to be in front of the spinning image, centered within the flex container */}
      <div className="z-10">
        <Image
          src={"/mainimage.png"}
          width={553}
          height={506}
          alt="avatar"
          priority // Helps with loading the image faster; consider if it's the main image
        />
      </div>
    </div>
  );
};

export default Avatar;
