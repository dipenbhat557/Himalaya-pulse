import { d1, d2, descBg } from "../assets";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const Description = () => {
  return (
    <div
      id="description"
      className="my-10 h-[700px] sm:h-[650px] w-full relative flex flex-col justify-between"
    >
      <div className="w-full h-full top-0 absolute">
        {" "}
        <img
          src={descBg}
          alt="descBg "
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full bg-black absolute top-0 opacity-60" />
      <div className="w-full h-[45.8%] flex items-center justify-center relative">
        <motion.div
          variants={fadeIn("right", "spring", 0.7, 0.6)}
          className="absolute left-[5%] sm:left-[28%] border-2 rounded-3xl  z-20 top-[18%] w-[50%] sm:w-[30%] h-[70%]"
        >
          <img
            src={d1}
            alt="desc1"
            className="rounded-3xl w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "spring", 0.7, 0.6)}
          className="absolute p-4 sm:p-0 right-[7%] sm:right-[24%] top-[10%] rounded-lg z-10 w-[40%] sm:w-[20%] bg-white bg-opacity-60 ring-8 ring-opacity-40  ring-green-800 h-[90%] flex flex-col justify-center items-center gap-4"
        >
          <p className="font-semibold underline">
            Our finest herbs all in one place
          </p>
          <p className="sm:leading-loose">
            All of our herbs in one place. <br />
            Everybody finds something. <br /> Take a look, ey?
          </p>
        </motion.div>
      </div>
      <div className="border-b-4 absolute top-[50%] left-[10%] border-dashed w-[60%] border-white border-opacity-70" />
      <div className="w-full h-[45.8%] flex items-center justify-center relative">
        <motion.div
          variants={fadeIn("right", "spring", 0.7, 0.6)}
          className="absolute p-4 sm:p-0 right-[7%] sm:left-[14%]  rounded-lg z-10 w-[40%] sm:w-[20%] bg-white bg-opacity-60 ring-8 ring-opacity-40 ring-green-800  h-[90%] flex flex-col justify-center items-center gap-4"
        >
          <p className="w-full sm:w-[70%] font-semibold underline">
            We produce herbs of the highest quality
          </p>
          <p className="w-full sm:w-[70%] sm:leading-loose line-clamp-3">
            Our herbs are cultivated under a very strict conditions. we do not
            use any chemicals, nor growth fasteners. our team is made of only
            high skilled people, provided with quality equipment.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "spring", 0.7, 0.6)}
          className="absolute left-[5%] sm:left-[32%] border-2 rounded-3xl  z-20 sm:top-[18%] w-[50%] sm:w-[30%] h-[70%]"
        >
          <img
            src={d2}
            alt="desc1"
            className="rounded-3xl  w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default SectionWrapper(Description);
