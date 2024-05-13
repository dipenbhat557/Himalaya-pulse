import { useEffect, useState } from "react";
import { bg1, bg2, bg3 } from "../assets";
const heroElements = [bg2, bg1, bg3];

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import "../index.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { MdMail } from "react-icons/md";
import { SectionWrapper } from "../hoc";

const hero = () => {
  const [currentElement, setCurrentElement] = useState(0);
  const navigate = useNavigate();

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
      <div className="w-full relative  h-screen    overflow-hidden">
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
        <Navbar isHome={true} />

        <div className="w-full mt-[80px] z-30 h-full bg-black bg-opacity-60 absolute top-0 left-0 " />

        <div className="flex flex-col justify-start top-[35%] items-center gap-6 h-[20%]  absolute left-[10%] sm:h-full w-full text-center  sm:w-[40%]">
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

          <motion.button
            variants={fadeIn("right", "spring", 0.5, 0.6)}
            onClick={() => navigate("/contactus")}
            type="button"
            className="text-white  z-50 gap-3  border hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg  text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
          >
            <MdMail className="text-2xl" />
            Contact Us
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(hero);
