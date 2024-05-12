import { useEffect, useState } from "react";
import { bg1, bg2, bg3 } from "../assets";
const heroElements = [bg2, bg1, bg3];

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import "../index.css";

const hero = () => {
  const [currentElement, setCurrentElement] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 105) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElement(
        (prevElement) => (prevElement + 1) % heroElements.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full   h-screen mt-[80px] sm:h-[616px]  overflow-hidden">
        <div className="photo-container">
          {heroElements.map((element, index) => (
            <div
              key={index}
              className={`absolute w-full h-full  ${
                index === currentElement ? "visible" : "hidden"
              }`}
            >
              <img
                src={element}
                alt="Background Photo"
                className={`photo-slide w-full h-full photo-element ${
                  index === currentElement ? "photo-fade-in" : "photo-fade-out"
                }`}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          ))}
        </div>

        <div className="w-full mt-[80px] z-30 h-full bg-black bg-opacity-60 absolute top-0 left-0 flex flex-col justify-between text-white"></div>

        <div className="flex flex-col justify-center items-center gap-6 h-[20%]  absolute left-[10%]  sm:h-full w-full text-center  sm:w-[40%]">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-[90%] font-medium tracking-wider z-40 text-[35px] sm:text-[55px] text-white font-serif"
          >
            {"Authenticity meets ".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.1 }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}

            {" ".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.1 }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}

            {"Quality".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.1 }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>

          <motion.p
            variants={textVariant(0.3)}
            className="hidden sm:flex w-[80%] z-20 font-light text-[20px] leading-loose text-white font-serif"
          >
            "Moringa: Nutrient-rich herb with anti-inflammatory, antioxidant
            properties, promoting health and vitality naturally."
          </motion.p>
          <button
            type="button"
            className="text-white  z-50   border hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg  text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-2"
            >
              <path
                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                fill="#ffffff"
              />
            </svg>
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default hero;
