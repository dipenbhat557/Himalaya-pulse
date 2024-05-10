import { leaf1, p1, p2 } from "../assets";

const Hero = () => {
  return (
    <div className="mt-[80px] bg-primary h-[550px] relative w-full flex items-center justify-around">
      <img
        src={leaf1}
        alt="leaf 1"
        className="w-[20%] h-[20%] absolute top-[0%] -left-[4%] z-10"
      />
      <div className="flex flex-col justify-center items-center gap-6 h-full w-[40%]">
        <p className="w-[80%] font-medium tracking-wider text-[45px] text-white font-serif">
          "Nature's powerhouse, packed with nutrition and healing potential."
        </p>
        <p className="w-[80%] font-light text-[20px] text-slate-400 font-serif">
          "Moringa: Nutrient-rich herb with anti-inflammatory, antioxidant
          properties, promoting health and vitality naturally."
        </p>
      </div>
      <div className="w-[40%] h-[50%] flex flex-col items-center justify-start -mt-36">
        <div className="w-full h-[80%] ">
          <img
            src={p1}
            alt="product 1"
            className="w-full h-full object-contain "
          />
        </div>
        <div className="w-[90%] h-[40%] ">
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
        className="w-[20%] h-[20%] absolute bottom-[0%] -right-[4%] z-10"
      />
    </div>
  );
};
export default Hero;
