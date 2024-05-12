import { MdLocationCity, MdMobileScreenShare } from "react-icons/md";
import { logo } from "../assets";
import { IoLocationSharp, IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-black w-full h-[300px] flex flex-col justify-between">
      <div className="w-full h-[90%] flex items-center justify-around">
        <div className="w-[30%] h-full flex flex-col items-center gap-4">
          <div className="w-full h-[40%]">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-slate-600 font-semibold text-[16px] w-[80%] ">
            "Moringa: Nutrient-rich herb with anti-inflammatory, antioxidant
            properties, promoting health and vitality naturally."
          </p>
        </div>
        <div className="text-white w-[10%] h-full flex flex-col   justify-center gap-2">
          <p className="font-semibold text-white text-[22px]">Quick Links</p>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Gallery</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="w-[20%] h-full text-white flex justify-center flex-col gap-4">
          <p className="font-semibold text-white text-[22px]">Contact</p>
          <div className="flex gap-5">
            <IoLocationSharp className="text-3xl bg-white text-black rounded-lg p-1" />
            <p className="w-[70%]">
              Himalaya Pulse Pvt. Ltd. Rapti-04, Dang, Nepal.
            </p>
          </div>
          <div className="flex gap-5">
            <MdMobileScreenShare className="text-3xl bg-white text-black rounded-lg p-1" />
            <p className="w-[70%]">+9779706754903</p>
          </div>
          <div className="flex gap-5">
            <IoMail className="text-3xl bg-white text-black rounded-lg p-1" />
            <p className="w-[70%]">info@himalayapulse.com</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[17%] flex items-center justify-center font-light text-[13px] text-white">
        Copyrights. All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
