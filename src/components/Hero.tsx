import { leaf1, p1, p2 } from "../assets";

const bgClip = {
  clipPath:
    "polygon(0 32%, 11% 17%, 29% 11%, 56% 16%, 78% 9%, 92% 15%, 100% 49%, 95% 86%, 75% 97%, 42% 97%, 22% 95%, 0% 85%)",
};

const Hero = () => {
  return (
    <div className="mt-[80px] bg-primary h-[500px] relative w-full flex items-center justify-around">
      <img
        src={leaf1}
        alt="leaf 1"
        className="w-[20%] rotate-45 h-[30%] absolute -top-[2%] -left-[6%] z-40"
      />
      <div className="flex flex-col justify-center items-center gap-6 h-full w-[40%]">
        <p className="w-[90%] font-medium tracking-wider z-40 text-[45px] text-white font-serif">
          "Nature's Powerhouse, Packed with Nutrition and Healing Potential."
        </p>
        <p className="w-[80%] font-light text-[20px] leading-loose text-slate-400 font-serif">
          "Moringa: Nutrient-rich herb with anti-inflammatory, antioxidant
          properties, promoting health and vitality naturally."
        </p>
      </div>
      <div className="w-[40%] h-[50%] flex flex-col relative items-center justify-start -mt-36">
        <div
          className="w-full h-[400px] bg-gradient-to-b from-[#0C492878] to-[#FFFFFF61]  absolute  z-10"
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
      </div>
      <img
        src={leaf1}
        alt="leaf 1"
        className="w-[20%] h-[20%] absolute -bottom-[5%] -right-[4%] z-10"
      />
    </div>
  );
};
export default Hero;
