// Testimonials component

import React from "react";
import TestimonialSliders from "../../components/TestimonialSliders";
import { TypeAnimation } from "react-type-animation";

const Testimonials = () => {
  const keyProp = "uniqueKey"; // Unique key for TestimonialSlider

  // testimonial data
  const testimonialData = [
    {
      image: "/Ayano.jpg",
      name: "Ayano Masuda",
      position: "International Trade / Logistics",
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

  return (
    <div className="py-36 text-center">
      <div className="container mx-auto flex flex-col justify-center">
        <div className="mb-8 xl:mb-0 font-bold">
          <TypeAnimation
            sequence={["What people say about me:", 1000]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "3rem",
              display: "inline-block",
            }}
            className="text-white"
          />
        </div>
        <div>
          <TestimonialSliders
            keyProp={keyProp}
            testimonialData={testimonialData}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
