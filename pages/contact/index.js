import React, { useRef, useState } from "react";
import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import emailjs from "@emailjs/browser";
import { TypeAnimation } from "react-type-animation";

const Contact = () => {
  const form = useRef();
  const [validationMessages, setValidationMessages] = useState({
    userName: "",
    userEmail: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Reset validation messages
    setValidationMessages({
      userName: "",
      userEmail: "",
      subject: "",
      message: "",
    });

    let isValid = true;

    // Simple form validation
    if (!e.target.user_name.value) {
      setValidationMessages((prev) => ({
        ...prev,
        userName: "*Required field",
      }));
      isValid = false;
    }
    if (!e.target.user_email.value) {
      setValidationMessages((prev) => ({
        ...prev,
        userEmail: "*Required field",
      }));
      isValid = false;
    } else if (!emailRegex.test(e.target.user_email.value)) {
      setValidationMessages((prev) => ({
        ...prev,
        userEmail: "Please enter a valid email address",
      }));
      isValid = false;
    }
    if (!e.target.subject.value) {
      setValidationMessages((prev) => ({
        ...prev,
        subject: "*Required field",
      }));
      isValid = false;
    }
    if (!e.target.message.value) {
      setValidationMessages((prev) => ({
        ...prev,
        message: "*Required field",
      }));
      isValid = false;
    }

    if (!isValid) return;

    // EmailJS sendForm method
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
          alert("Your email has been sent!");
          e.target.reset(); // Reset form fields
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="h2 text-center text-accent"
          >
            Get in touch
          </motion.h2>
          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="h3 text-center mb-12"
          >
            <TypeAnimation
              sequence={[
                "Need a hand in front-end?",
                1000,
                "Send me a message:",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              className="text-white"
            />
          </motion.h3>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <div className="flex-1 flex flex-col">
                <div className="h-6 text-accent text-sm">
                  {validationMessages.userName}
                </div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="input"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="h-6 text-accent text-sm">
                  {validationMessages.userEmail}
                </div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="input"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-6 text-accent text-sm">
                {validationMessages.subject}
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input"
              />
            </div>
            <div className="flex flex-col">
              <div className="h-6 text-accent text-sm">
                {validationMessages.message}
              </div>
              <textarea
                name="message"
                placeholder="Message"
                className="textarea"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
        <Circles />
      </div>
    </div>
  );
};

export default Contact;
