import { leaf1, p1, p2 } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const bgClip = {
  clipPath:
    "polygon(0 32%, 11% 17%, 29% 11%, 56% 16%, 78% 9%, 92% 15%, 100% 49%, 95% 86%, 75% 97%, 42% 97%, 22% 95%, 0% 85%)",
};

const Hero = () => {
  return (
    <div
      id="hero"
      className="mt-[80px] bg-primary h-[500px] relative w-full flex flex-col sm:flex-row items-center justify-around"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 1.7)}
        className="w-[40%] sm:w-[20%] rotate-45 h-[20%] sm:h-[30%] absolute -top-[2%] -left-[6%] z-40"
      >
        <img
          src={leaf1}
          alt="leaf 1"
          className="w-full h-full object-contain"
        />
      </motion.div>
      <div className="flex flex-col justify-center items-center gap-6 h-[20%] sm:h-full w-full text-center  sm:w-[40%]">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-[90%] font-medium tracking-wider z-40 text-[25px] sm:text-[45px] text-white font-serif"
        >
          {"Nature's Powerhouse,".split("").map((char, index) => (
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
          <br />
          {" Packed with Nutrition".split("").map((char, index) => (
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
          <br />
          {"and Healing Potential.".split("").map((char, index) => (
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
          className="hidden sm:flex w-[80%] font-light text-[20px] leading-loose text-slate-400 font-serif"
        >
          "Moringa: Nutrient-rich herb with anti-inflammatory, antioxidant
          properties, promoting health and vitality naturally."
        </motion.p>
      </div>
      <motion.div
        variants={fadeIn("left", "spring", 0.7, 0.5)}
        className="w-[90%] sm:w-[40%]  h-[50%] flex flex-col relative items-center justify-start -mt-36"
      >
        <div
          className="w-full h-[300px] sm:h-[400px] bg-gradient-to-b from-[#0C492878] to-[#FFFFFF61]  absolute  z-10"
          style={bgClip}
        />
        <div className="w-full h-[80%] z-20">
          <img
            src={p1}
            alt="product 1"
            className="w-full h-full object-contain "
          />
        </div>
        <div className="w-[90%] h-[40%] z-20">
          <img
            src={p2}
            alt="product 1"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 1.7)}
        className="w-[40%] sm:w-[20%] h-[30%] absolute -bottom-[5%] -right-[4%] z-10"
      >
        <img
          src={leaf1}
          alt="leaf 1"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
};
export default SectionWrapper(Hero);
