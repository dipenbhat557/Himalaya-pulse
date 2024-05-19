import { useState } from "react";
import { styles } from "../styles";
import * as emailjs from "emailjs-com";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { MdMail, MdMobileScreenShare } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { SectionWrapper } from "../hoc";

import Navbar from "./Navbar";

const ContactUs = () => {
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleWhatsAppClick = () => {
    const receiverNumber = "+9779706754903";
    if (receiverNumber) {
      const whatsappURL = `https://wa.me/${receiverNumber}`;
      window.open(whatsappURL, "_blank");
    } else {
      console.error("WhatsApp number not provided");
    }
  };

  const handleMailButtonClick = () => {
    window.location.href = "mailto:info@himalayapulse.com";
  };

  const handleSubmit = (e: any) => {
    console.log("DAta is ", form);
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: `${form.fName} ${form.lName}`,
          to_name: "Himalaya Pulse",
          from_email: form.email,
          to_email: "info@himalayapulse.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )

      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            fName: "",
            lName: "",
            email: "",
            phone: "",
            message: "",
            subject: "",
          });
        },
        (error: any) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };
  return (
    <div className="h-screen sm:overflow-y-hidden">
      <Navbar isHome={false} />
      <div
        id="contactus"
        className={`${styles.paddingX} py-3 w-full h-auto flex flex-col gap-4`}
      >
        <p
          className={`${styles.sectionHeadText}  text-primary font-semibold  ml-4`}
        >
          Contact Us
        </p>
        <p className="text-[10px] font-semibold text-[#717171]">
          Message us with your queries
        </p>
        <div className="w-full h-auto flex flex-col gap-4 sm:flex-row justify-between items-start">
          <div
            className={`w-[90%] sm:w-[30%] text-white flex flex-col h-[400px] rounded-lg relative bg-primary p-10 justify-around`}
          >
            <div className="flex flex-col gap-2">
              <p className="text-[22px] font-semibold">Contact Information</p>
              <p className="font-light text-[12px]">
                Say something to a start converstion
              </p>
            </div>
            <div className="flex gap-5">
              <IoLocationSharp className="text-3xl  text-white rounded-lg p-1" />
              <p className="w-[70%]">
                Himalaya Pulse Pvt. Ltd. Rapti-04, Dang, Nepal.
              </p>
            </div>
            <div
              onClick={handleWhatsAppClick}
              className="cursor-pointer flex gap-5"
            >
              <MdMobileScreenShare className=" text-3xl text-white rounded-lg p-1" />
              <p className="w-[70%]">+9779706754903</p>
            </div>
            <div
              onClick={handleMailButtonClick}
              className="cursor-pointer flex gap-5"
            >
              <IoMail className="text-3xl  text-white rounded-lg p-1" />
              <p className="w-[70%]">info@himalayapulse.com</p>
            </div>

            <div className="flex gap-5">
              <FaFacebook
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=61551597487198",
                    "_blank"
                  )
                }
                className="cursor-pointer text-white hover:text-black p-1 text-3xl rounded-full  hover:bg-white"
              />
              <FaInstagram
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/himalayapulse/",
                    "_blank"
                  )
                }
                className="cursor-pointer text-white hover:text-blackc p-1 text-3xl rounded-full hover:bg-white"
              />
              <MdMail
                onClick={handleMailButtonClick}
                className="cursor-pointer text-white hover:text-black  p-1 text-3xl rounded-full  hover:bg-white"
              />
              <FaWhatsapp
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=+9779706754903",
                    "_blank"
                  )
                }
                className="cursor-pointer text-white hover:text-green-500 p-1 text-3xl rounded-full hover:bg-green-100"
              />
            </div>
          </div>
          <div className={`w-[90%] sm:w-[58%] flex flex-col gap-4`}>
            <div className="w-full font-medium flex justify-between items-center">
              <div className="flex w-[50%] flex-col gap-2">
                <p>First Name</p>
                <input
                  type="text"
                  name="fName"
                  value={form?.fName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="bg-tertiary  placeholder:text-secondary border-b border-slate-200   w-[90%] outline-none  font-medium"
                />
              </div>
              <div className="flex w-[50%] flex-col gap-2">
                <p>Last Name</p>
                <input
                  type="text"
                  name="lName"
                  value={form?.lName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="bg-tertiary  placeholder:text-secondary border-b border-slate-200   w-[90%] outline-none  font-medium"
                />
              </div>
            </div>
            <div className=" font-medium  w-full flex justify-between items-center">
              <div className="flex w-[50%] flex-col gap-2">
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  value={form?.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="bg-tertiary  placeholder:text-secondary border-b border-slate-200   w-[90%] outline-none  font-medium"
                />
              </div>
              <div className="flex w-[50%] flex-col gap-2">
                <p>Phone Number</p>
                <input
                  type="text"
                  name="phone"
                  value={form?.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="bg-tertiary  placeholder:text-secondary border-b border-slate-200   w-[90%] outline-none  font-medium"
                />
              </div>
            </div>

            <div className="   flex w-full flex-col gap-2">
              <p className="font-medium">Select Subject</p>
              <div className="w-full flex gap-3 flex-wrap sm:gap-5">
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="subject"
                    value="Product Inquiry"
                    checked={form.subject === "Product Inquiry"}
                    onChange={handleChange}
                  />
                  Product Inquiry
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="subject"
                    value="Product Benefits"
                    checked={form.subject === "Product Benefits"}
                    onChange={handleChange}
                  />
                  Product Benefits
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="subject"
                    value="Others"
                    checked={form.subject === "Others"}
                    onChange={handleChange}
                  />
                  Others
                </label>
              </div>
            </div>
            <div className=" font-medium  flex w-full flex-col gap-2">
              <p>Message</p>
              <textarea
                rows={7}
                name="message"
                value={form?.message}
                onChange={handleChange}
                placeholder="Write your message here"
                className="bg-tertiary p-3 rounded-lg placeholder:text-secondary border border-slate-200   w-[90%] outline-none  font-medium"
              />
            </div>
            <button
              className="py-2 px-4 rounded-lg w-[50%] bg-primary text-white"
              onClick={handleSubmit}
            >
              {loading ? "Sending Message..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionWrapper(ContactUs);
