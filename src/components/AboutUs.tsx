import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { abBg1, abBg2, abBg3 } from "../assets";
const heroElements = [abBg1, abBg2, abBg3];

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const bgClip = {
  clipPath:
    "polygon(0 32%, 11% 17%, 29% 11%, 56% 16%, 78% 9%, 92% 15%, 100% 49%, 95% 86%, 75% 97%, 42% 97%, 22% 95%, 0% 85%)",
};

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
    <>
      <Navbar isHome={false} />
      <div
        id="aboutus"
        className={`w-full h-[800px] sm:h-[413px] flex flex-col sm:flex-row justify-between ${styles.paddingY}`}
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.7, 0.6)}
          className="w-full sm:w-[35%] flex items-center mt-7  justify-center left-8 h-[50%] sm:h-full relative"
        >
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
                className={`photo-slide w-full h-full photo-element rounded-2xl ${
                  index === currentElement ? "photo-fade-in" : "photo-fade-out"
                }`}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
              <div className="w-full rounded-2xl z-30 h-full bg-black bg-opacity-40 absolute top-0 left-0 " />
            </div>
          ))}
        </motion.div>

        <div className="w-full sm:w-[65%] h-[500px] sm:h-auto flex flex-col items-center gap-3">
          <motion.p
            variants={textVariant(0.6)}
            className={`${styles.sectionHeadText}  text-primary font-semibold  ml-4`}
          >
            About Us
          </motion.p>
          <motion.p
            variants={fadeIn("left", "spring", 0.7, 0.6)}
            className=" w-[90%] text-center sm:leading-loose "
          >
            Himalaya Pulse was envisioned in the year 2022, with an imaginative
            move to produce,plant, acquire and build goods/products related to
            the overall wellbeing of an individual. We are certain in delivering
            the highest quality of products by adhering to stringent quality
            control measures. We have initiated to plant and harvest different
            types of plants in Nepal and export newly researched and developed
            products to international markets. We are regularly supported by an
            ISO Certified Research facility whilst developing a new product,
            which provides us with the complete lab test reports and final
            outcomes of the product developed. We have an established packaging
            factory setup for our products in order to attain a harmonized and
            production oriented company. 
          </motion.p>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SectionWrapper(AboutUs);
