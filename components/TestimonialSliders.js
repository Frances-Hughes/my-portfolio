// TestimonialSliders component

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

const TestimonialSliders = ({ keyProp, testimonialData }) => {
  // State to manage Swiper key
  const [swiperKey, setSwiperKey] = useState(keyProp);

  useEffect(() => {
    // Update Swiper key on component mount and page change
    setSwiperKey(keyProp);
  }, [keyProp]);

  return (
    <Swiper
      key={swiperKey} // Ensure Swiper remounts when key changes
      spaceBetween={10}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[340px] text-sm md:text-base"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16"
          >
            <div className="w-full max-w-[300px] flex flex-col  relative mx-auto xl:mx-0">
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
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSliders;
