import { leaf2 } from "../assets";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const bgClip = {
  clipPath:
    "polygon(0 32%, 11% 17%, 29% 11%, 56% 16%, 78% 9%, 92% 15%, 100% 49%, 95% 86%, 75% 97%, 42% 97%, 22% 95%, 0% 85%)",
};

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div
        id="aboutus"
        className={`w-full h-[800px] sm:h-[450px] flex flex-col sm:flex-row justify-between ${styles.paddingY}`}
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.7, 0.6)}
          className="w-full sm:w-[35%] flex items-center justify-center h-[50%] sm:h-full relative"
        >
          <div
            className="w-full h-full sm:left-6 absolute bg-gradient-to-b to-[#0C492878] from-primary  -z-10"
            style={bgClip}
          />

          <div className="w-full h-full  absolute z-10">
            <img
              src={leaf2}
              className="w-full h-full object-contain"
              alt="leaf-2"
            />
          </div>
          <motion.p
            variants={textVariant(0.9)}
            className="text-[30px] sm:text-[45px] w-[70%] text-center z-20 text-white font-light"
          >
            Authenticity meets Quality
          </motion.p>
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
