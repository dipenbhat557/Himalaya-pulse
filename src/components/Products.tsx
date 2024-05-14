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
      "Healifera is an organic mixture of naturally beneficial plants. Healifera consists mostly of Moringa leaves powder which are known to be rich in vitamins, minerals, amino acids, and antioxidants. Moringa leaves powder helps in fighting inflammation, lowers blood sugar levels and cholesterol. The plant is known as the “Super Food” for its many other beneficial health protective properties. Stevia is a natural sweetener and has many health benefits and adds a bit of sweetness to the mixture for easy consumption. Heal-i-fera or as mentioned Healifera is a derived name from Moringa Oleifera which is the scientific name of Moringa. Our Moringa leaves powder are from organically grown plants in Nepal.",
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
  const i = location?.state?.p;
  return (
    <div className="flex flex-col  h-screen sm:h-[100vh] overflow-y-hidden justify-between ">
      <Navbar isHome={false} />
      <div
        id="products"
        className={`${styles.paddingX} py-2 w-full h-auto flex flex-col gap-2`}
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
          <div className="w-[80%] sm:w-[40%] h-[80%]">
            <img
              className="w-full h-full object-contain"
              src={products?.[i]?.img}
              alt="product-1"
            />
          </div>
          <p className="w-[80%] sm:w-[50%] text-primary  sm:leading-loose sm:tracking-wider">
            {products?.[i]?.content}
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};
export default SectionWrapper(Products);
