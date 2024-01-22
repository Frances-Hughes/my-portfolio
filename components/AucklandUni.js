import Image from "next/image";

const AucklandUni = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none" style={{ zIndex: 30 }}>
      <Image
        src={"/AucklandUniversity.png"}
        width={163}
        height={170}
        alt="Auckland University"
        className="w-full h-full"
      />
    </div>
  );
};

export default AucklandUni;
