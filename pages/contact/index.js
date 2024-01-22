import React, { useRef } from "react";
import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m54z2da",
        "template_63rpyw9",
        form.current,
        "FDDJruNoWmKigmd8E"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            ref={form}
            onSubmit={sendEmail} // Changed onClick to onSubmit
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="input"
              />
              <input
                type="text"
                name="user_email"
                placeholder="Your Email"
                className="input"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="subject"
              className="input"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="textarea"
            ></textarea>
            <button
              type="submit" // Ensured button type is submit for form submission
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
