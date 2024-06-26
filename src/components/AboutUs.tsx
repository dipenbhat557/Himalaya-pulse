import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { abBg1, abBg2, abBg3 } from "../assets";
const heroElements = [abBg1, abBg2, abBg3];

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const [currentElement, setCurrentElement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElement(
        (prevElement) => (prevElement + 1) % heroElements.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-auto sm:h-[58.5vh] ">
      <Navbar isHome={false} />
      <div
        className={`w-full h-full flex flex-col sm:flex-row sm:justify-between pl-4 ${styles.paddingY}`}
      >
        <div className="sm:hidden w-full h-[312px] -z-10" />
        <motion.div
          variants={fadeIn("right", "spring", 0.7, 0.6)}
          className="w-full sm:w-[35%] flex items-center sm:mt-7 justify-center h-[50%] sm:h-full sm:relative"
        >
          {heroElements.map((element, index) => (
            <div
              key={index}
              className={` absolute left-[3%]  top-[12%] sm:top-0 w-[95%] sm:w-full h-[300px] sm:h-full  ${
                index === currentElement
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              } transition-opacity duration-500`}
            >
              <img
                src={element}
                alt="Background Photo"
                className="photo-slide w-full h-full rounded-2xl  object-fill"
              />
              {/* <div className="w-full rounded-2xl z-30 h-full bg-black bg-opacity-40 absolute top-0 left-0" /> */}
            </div>
          ))}
        </motion.div>

        <div className="w-full sm:w-[65%] h-auto flex flex-col items-center gap-3">
          <motion.p
            variants={textVariant(0.6)}
            className={`${styles.sectionHeadText} text-primary font-semibold ml-4`}
          >
            About Us
          </motion.p>
          <motion.p
            variants={fadeIn("left", "spring", 0.7, 0.6)}
            className="w-[90%] text-justify sm:text-center sm:leading-loose"
          >
            Himalaya Pulse was envisioned in the year 2022, with an imaginative
            move to produce, plant, acquire and build goods/products related to
            the overall wellbeing of an individual. We are certain in delivering
            the highest quality of products by adhering to stringent quality
            control measures. We have initiated to plant and harvest different
            types of plants in Nepal and export newly researched and developed
            products to international markets. We are regularly supported by an
            ISO Certified Research facility whilst developing a new product,
            which provides us with the complete lab test reports and final
            outcomes of the product developed. We have an established packaging
            factory setup for our products in order to attain a harmonized and
            production-oriented company.
          </motion.p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SectionWrapper(AboutUs);
