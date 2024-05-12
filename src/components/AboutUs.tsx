import { leaf1, leaf2 } from "../assets";
import { styles } from "../styles";

const bgClip = {
  clipPath:
    "polygon(0 32%, 11% 17%, 29% 11%, 56% 16%, 78% 9%, 92% 15%, 100% 49%, 95% 86%, 75% 97%, 42% 97%, 22% 95%, 0% 85%)",
};

const AboutUs = () => {
  return (
    <div className="w-full h-[400px] flex justify-between">
      <div className="w-[35%] flex items-center justify-center h-full relative">
        <div
          className="w-full h-full left-6 absolute bg-gradient-to-b to-[#0C492878] from-primary  -z-10"
          style={bgClip}
        />

        <div className="w-full h-full  absolute z-10">
          <img
            src={leaf2}
            className="w-full h-full object-contain"
            alt="leaf-2"
          />
        </div>
        <p className="text-[45px] w-[70%] text-center z-20 text-white font-light">
          Authenticity meets Quality
        </p>
      </div>
      <div className="w-[65%] flex flex-col items-center gap-3">
        <p
          className={`${styles.sectionHeadText}  text-primary font-semibold  ml-4`}
        >
          About Us
        </p>
        <p className="w-[70%] text-center leading-loose">
          Himalaya Pulse was envisioned in the year 2022, with an imaginative
          move to produce,plant, acquire and build goods/products related to the
          overall wellbeing of an individual. We are certain in delivering the
          highest quality of products by adhering to stringent quality control
          measures. We have initiated to plant and harvest different types of
          plants in Nepal and export newly researched and developed products to
          international markets. We are regularly supported by an ISO Certified
          Research facility whilst developing a new product, which provides us
          with the complete lab test reports and final outcomes of the product
          developed. We have an established packaging factory setup for our
          products in order to attain a harmonized and production oriented
          company. 
        </p>
      </div>
    </div>
  );
};
export default AboutUs;
