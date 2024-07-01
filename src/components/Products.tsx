import { p1, p2 } from "../assets";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const products = [
  {
    title: "Himalaya Pulse - HEALIFERA",
    content:
      "Healifera is an organic mix of beneficial plants, mainly Moringa leaves powder, rich in vitamins, minerals, amino acids, and antioxidants. It helps fight inflammation, lower blood sugar and cholesterol. Known as a “Super Food,” it offers many health benefits. Stevia, a natural sweetener, is added for taste. Healifera is derived from Moringa Oleifera.",
    img: p1,
  },
  {
    title: "Himalaya Pulse - Shilajit",
    content:
      "Shilajit is a naturally found organic mineral compound found in the Himalayan Ranges of Nepal, India, Afghanistan and elsewhere. Himalaya Pulse - Shilajit is naturally sourced from the mountainous regions of Nepal and is thoroughly processed for consumption with lab reports from ISO Certified Laboratory and Research Centre. Shilajit has many beneficial factors such as aging, heart health, energy boost, boosts testosterone, supports fertility etc.",
    img: p2,
  },
];

const Products = () => {
  const location = useLocation();
  const queryString = location.search;

  const queryParams = new URLSearchParams(queryString);

  const i = parseInt(queryParams.get("i") || "");
  return (
    <div className="flex flex-col  h-auto sm:h-[100vh] overflow-y-hidden justify-between ">
      <Navbar isHome={false} />
      <div
        id="products"
        className={`${styles.paddingX} py-2 w-full h-[550px] sm:h-auto flex flex-col gap-2`}
      >
        <motion.p
          variants={textVariant(0.2)}
          className={`${styles.sectionHeadText} h-[20%] text-primary font-semibold  ml-4`}
        >
          {products?.[i]?.title}
        </motion.p>

        <motion.div
          variants={fadeIn("right", "spring", 0.7, 0.5)}
          className="w-full flex sm:h-[40vh] flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-around items-center"
        >
          <div className="w-[80%] sm:w-[50%] h-[90%]">
            <img
              className="w-full h-full object-contain"
              src={products?.[i]?.img}
              alt="product-1"
            />
          </div>
          <p className="w-[80%] sm:w-[57%] text-primary  sm:leading-loose sm:tracking-wider">
            {products?.[i]?.content}
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};
export default SectionWrapper(Products);
