import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

// Import Swiper styles
import "swiper/swiper-bundle.css";

const testimonialData = [
  {
    image: "/Ayano.jpg",
    name: "Ayano Masuda",
    position: "Photographer",
    message:
      "Reliable and trustworthy, Frances is full of creative thinking and is very thorough with her work. Beyond her ability to solve problems quickly and precisely, she also has a lovely and friendly character that makes the people in the room feel warm and welcome.",
  },
  // Other testimonial data entries...
];

const TestimonialSliders = () => {
  return (
    <motion.div
      initial="hidden"
      exit="hidden"
      animate="show"
      className="text-sm md:text-base py-28"
    >
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="h-[440px]"
      >
        {testimonialData.map((person, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-[540px] px-16">
              <div className="w-full max-w-[300px] flex justify-around ">
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
              <div className="md:bg-white/40 flex-1 flex flex-col p-2 rounded-md ">
                <div className="m-2">
                  <FaQuoteLeft className="text-sm text-accent/90 " />
                </div>
                <div className="xl:text-lg text-center">{person.message}</div>
                <div className="m-2 flex items-center justify-end">
                  <FaQuoteRight className="text-sm text-accent/90 " />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default TestimonialSliders;
