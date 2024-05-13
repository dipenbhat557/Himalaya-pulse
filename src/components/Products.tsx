import { p1, p2 } from "../assets";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Products = () => {
  return (
    <div className="flex flex-col h-screen overflow-y-hidden justify-between ">
      <Navbar isHome={false} />
      <div
        id="products"
        className={`${styles.paddingX} py-2 w-full h-auto flex flex-col gap-2`}
      >
        <motion.p
          variants={textVariant(0.2)}
          className={`${styles.sectionHeadText}  text-primary font-semibold  ml-4`}
        >
          Products
        </motion.p>

        <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-around items-center">
          <motion.div
            variants={fadeIn("right", "spring", 0.7, 0.5)}
            className={`p-6 w-[80%] sm:w-[30%] rounded-3xl shadow-lg shadow-black flex flex-col gap-2`}
          >
            <div className="w-full h-[100px]">
              {" "}
              <img
                className="w-full h-full object-contain"
                src={p1}
                alt="product-1"
              />
            </div>
            <p className="text-primary text-[25px]">
              Himalaya Pulse - HEALIFERA
            </p>
            <p className="text-[14px] sm:leading-loose">
              Healifera: Moringa and Stevia blend for organic health benefits.
              Moringa fights inflammation, aids blood sugar/cholesterol. Stevia
              adds sweetness. Organically sourced from Nepal.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "spring", 0.7, 0.5)}
            className={`p-6 w-[80%] sm:w-[30%] rounded-3xl shadow-lg shadow-black flex flex-col gap-2`}
          >
            <div className="w-full h-[119px]">
              {" "}
              <img
                className="w-full h-full object-contain"
                src={p2}
                alt="product-2"
              />
            </div>
            <p className="text-primary text-[25px]">
              Himalaya Pulse - Shilajit 
            </p>
            <p className="text-[14px] sm:leading-loose">
              Himalaya Pulse sources Shilajit, a Himalayan mineral compound,
              with validated benefits including anti-aging, heart health,
              energy, testosterone boost, and fertility support.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SectionWrapper(Products);
