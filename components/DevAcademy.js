import Image from "next/image";

// DevAcademy Component
const DevAcademy = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none" style={{ zIndex: 30 }}>
      <Image
        src={"/devacademy.png"}
        width={163}
        height={170}
        alt="Dev Academy"
        className="w-full h-full"
      />
    </div>
  );
};

export default DevAcademy;
