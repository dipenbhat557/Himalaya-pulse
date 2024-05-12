import { p1, p2 } from "../assets";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Products = () => {
  return (
    <div className="flex flex-col justify-between mt-16">
      <Navbar />
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
        <div className="w-full border-b border-primary" />

        <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-around items-center">
          <motion.div
            variants={fadeIn("right", "spring", 0.7, 0.5)}
            className={`p-6 w-[80%] sm:w-[30%] rounded-3xl shadow-lg shadow-black flex flex-col gap-4`}
          >
            <div className="w-full h-[150px]">
              {" "}
              <img
                className="w-full h-full object-contain"
                src={p1}
                alt="product-1"
              />
            </div>
            <p className="text-primary text-[25px]">HEALIFERA</p>
            <p className="text-[14px] sm:leading-loose">
              Healifera, a blend of Moringa leaves powder and Stevia, offers
              organic benefits. Moringa is rich in nutrients, fights
              inflammation, and aids blood sugar and cholesterol. Stevia adds
              sweetness. Derived from Moringa Oleifera, it's sourced from
              organically grown plants in Nepal.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "spring", 0.7, 0.5)}
            className={`p-6 w-[80%] sm:w-[30%] rounded-3xl shadow-lg shadow-black flex flex-col gap-4`}
          >
            <div className="w-full h-[150px]">
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
              Shilajit, a natural mineral compound from the Himalayas, sourced
              by Himalaya Pulse, undergoes rigorous processing. It offers
              benefits like anti-aging, heart health, energy, testosterone
              boost, and fertility support, validated by lab reports from ISO
              Certified Laboratory and Research Centre.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SectionWrapper(Products);
