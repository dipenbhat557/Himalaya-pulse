import { useState } from "react";
import { styles } from "../styles";
import * as emailjs from "emailjs-com";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { MdMobileScreenShare } from "react-icons/md";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const ContactUs = () => {
  const navigate = useNavigate();
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

    console.log("on change data is ", form);
  };

  const handleSubmit = (e: any) => {
    console.log("DAta is ", form);
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_htp2klw",
        "template_a9c3yzv",
        {
          from_name: `${form.fName} ${form.lName}`,
          to_name: "Himalaya Pulse",
          from_email: form.email,
          to_email: "bhattadipen557@gmail.com",
          message: form.message,
        },
        "70gtdMrv58XYFp0DP"
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
    <div
      id="contactus"
      className={`${styles.paddingX} py-3 w-full h-auto flex flex-col gap-4`}
    >
      <div className="border-b-2 border-dashed border-slate-400 w-full" />
      <p
        className={`${styles.sectionHeadText}  text-primary font-semibold  ml-4`}
      >
        Contact Us
      </p>
      <p className="text-[10px] font-semibold text-[#717171]">
        Any question or remarks? Just write us a message!
      </p>
      <div className="w-full h-auto flex flex-col sm:flex-row justify-between items-center">
        <div
          className={`w-[90%] sm:w-[30%] text-white flex flex-col h-[400px] rounded-lg relative bg-primary p-10 justify-around`}
        >
          <div className="flex flex-col gap-2">
            <p className="text-[22px] font-semibold">Contact Information</p>
            <p className="font-light text-[12px]">
              Say something to start converstion
            </p>
          </div>
          <div className="flex gap-5">
            <IoLocationSharp className="text-3xl  text-white rounded-lg p-1" />
            <p className="w-[70%]">
              Himalaya Pulse Pvt. Ltd. Rapti-04, Dang, Nepal.
            </p>
          </div>
          <div className="flex gap-5">
            <MdMobileScreenShare className="text-3xl text-white rounded-lg p-1" />
            <p className="w-[70%]">+9779706754903</p>
          </div>
          <div className="flex gap-5">
            <IoMail className="text-3xl  text-white rounded-lg p-1" />
            <p className="w-[70%]">info@himalayapulse.com</p>
          </div>

          <div className="flex gap-5">
            <FaTwitter
              onClick={() => navigate("#")}
              className="cursor-pointer text-white hover:text-black bg-yellow-400 p-1 text-2xl rounded-full  hover:bg-white"
            />
            <FaInstagram
              onClick={() => navigate("#")}
              className="cursor-pointer text-white hover:text-black bg-yellow-400 p-1 text-2xl rounded-full  hover:bg-white"
            />
            <FaDiscord
              onClick={() => navigate("#")}
              className="cursor-pointer text-white hover:text-black bg-yellow-400 p-1 text-2xl rounded-full  hover:bg-white"
            />
          </div>
          <div className="w-[150px] h-[150px] rounded-full opacity-30 bg-white absolute -bottom-[10%] -right-[10%]" />
          <div className="w-[100px] h-[100px] rounded-full opacity-30 bg-white absolute bottom-[8%] right-[8%]" />
        </div>
        <div
          className={`w-[90%] sm:w-[58%] flex flex-col ${styles.padding} gap-8`}
        >
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
                  value="Product Ingredients"
                  checked={form.subject === "Product Ingredients"}
                  onChange={handleChange}
                />
                Product Ingredients
              </label>
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
              className="bg-tertiary  placeholder:text-secondary border border-slate-200   w-[90%] outline-none  font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionWrapper(ContactUs);
