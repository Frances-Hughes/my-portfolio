import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

const TestimonialSliders = () => {
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[auto] text-sm md:text-base"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="flex flex-col md:flex-row items-center gap-x-8 h-full px-16"
          >
            <div className="w-full max-w-[300px] flex justify-around mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="text-lg">{person.name}</div>
                <div className="text-[12px] text-accent font-bold uppercase tracking-widest my-1">
                  {person.position}
                </div>
              </div>
            </div>
            <div className=" flex-1 flex flex-col p-4 rounded-md my-4 md:mt-0 md:ml-4">
              <div className="m-2">
                <FaQuoteLeft className="text-sm text-accent/90 " />
              </div>
              <div className="xl:text-lg text-center">{person.message}</div>
              <div className="m-2 flex items-center justify-end">
                <FaQuoteRight className="text-sm text-accent/90 " />
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// testimonial data
const testimonialData = [
  {
    image: "/Ayano.jpg",
    name: "Ayano Masuda",
    position: "Photographer",
    message:
      "Reliable and trustworthy, Frances is full of creative thinking and is very thorough with her work. Beyond her ability to solve problems quickly and precisely, she also has a lovely and friendly character that makes the people in the room feel warm and welcome.",
  },
  {
    image: "/Flora.png",
    name: "Flora Tan",
    position: "Researcher",
    message:
      "I can confidently say that Frances' websites reflect her talent and work ethic. She is very talented and I would definitely highly recommend her for any websites you are wanting to create!",
  },
  {
    image: "/Natalie.png",
    name: "Natalie Clark",
    position: "Court Registry Officer",
    message:
      "During her time at Hamilton DC, Frances proved to be an invaluable asset, leveraging her impressive problem-solving abilities and quick learning skills to enhance our team's performance.",
  },
  {
    image: "/Brook.jpg",
    name: "Brook Horan",
    position: "Policy Advisor",
    message:
      "Frances is used to learning quickly on her feet in a fast-paced environment. She is incredibly goal driven, and always willing to add new skills to her kete.",
  },
  {
    image: "/Elaine.jpg",
    name: "Elaine Deng",
    position: "Associate",
    message:
      "During the time I have known Frances, she has consistently lived out her values of being a kind, reliable, dilligent and sincere person. I have seen her impressive work ethic throughout the years - she goes the extra mile without needing to be asked, and she never stops working on herself.",
  },
  {
    image: "/CasseyBliss.png",
    name: "Cassey Bliss",
    position: "Advocate",
    message:
      "I have had the pleasure of working with Frances on various projects and would have to say her attention to detail is out of this world. Not only is Frances a friendly, trustworth individual, but her knowledge base is extensive and she approaches her work with a high level of skill and professionalism.",
  },
  {
    image: "/Danielle.png",
    name: "Danni Stone-Slater",
    position: "Teacher",
    message:
      " Frances is dedicated, hard working and a fantastic problem solver. She has a real passion for programming and makes a mean chocolate brownie!",
  },
];

export default TestimonialSliders;
