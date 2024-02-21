import Image from "next/image";

const Avatar = () => {
  return (
    <div
      className="hidden xl:flex justify-center items-center relative h-full"
      style={{ width: "453px", height: "406px", position: "fixed" }}
    >
      <div
        className="absolute"
        style={{
          width: "710px",
          height: "680px",
          top: "-100px",
          left: "-105px",
        }}
      >
        <Image
          src={"/b6.png"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="animate-spin-slower"
        />
      </div>

      <div className="z-10">
        <Image
          src={"/mainimage.png"}
          width={553}
          height={506}
          alt="avatar"
          priority
        />
      </div>
    </div>
  );
};

export default Avatar;
