import { useState } from "react";
import { styles } from "../styles";
import { AiOutlineSearch } from "react-icons/ai";
import { reports } from "../constants";

import { SectionWrapper } from "../hoc";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Reports = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="h-auto sm:h-[56.5vh]">
      <Navbar isHome={false} />
      <div
        id="reports"
        className={`${styles.padding} flex flex-col sm:flex-row justify-between items-center w-full h-full  mt-4`}
      >
        <div className="w-full sm:w-[40%] h-full flex flex-col justify-between items-center mb-5 sm:mb-0 overflow-y-scroll">
          <div className="flex w-full justify-start items-center">
            <p
              className={`${styles.sectionHeadText}  text-primary font-semibold  ml-4`}
            >
              Reports
            </p>
          </div>

          {reports?.length > 0 ? (
            reports.map((report, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    index == currentIndex ? " " : ""
                  } w-full h-[70px] border-2 flex  items-center pl-4 cursor-pointer`}
                  onClick={() => setCurrentIndex(index)}
                >
                  {/* <IoMdInformationCircle
                    className={`${
                      index == currentIndex ? "text-primary " : ""
                    }`}
                  /> */}
                  <p
                    className={`${
                      index == currentIndex ? "font-semibold" : "font-light"
                    }text-[10px] sm:text-[14px] ml-1 sm:ml-4 py-1 line-clamp-1`}
                  >
                    {report.title}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-[16px] text-primary font-semibold">Loading...</p>
          )}
        </div>

        <div className="flex flex-col w-full sm:w-[40%] h-[420px] sm:h-[370px] items-center justify-around border-x-2 pb-9 border-y-2 rounded-xl p-4">
          <p className="w-[50%] text-[13px] sm:text-[20px] font-semibold h-auto my-1">
            {reports?.[currentIndex]?.title}
          </p>
          <p className="mr-2 text-[11px]">{reports?.[currentIndex]?.batchno}</p>
          <div className="w-[80%] h-[95%] relative flex justify-center items-center">
            <img
              src={reports?.[currentIndex]?.img}
              alt="Report Image"
              className="w-[95%] h-[90%] object-contain  -z-1 "
            />
            {/* <div className="w-[93%] sm:w-[82%] h-[60%] sm:h-[90%] bg-black absolute bg-opacity-20 hover:bg-opacity-0" /> */}
            <div className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full left-[50%] top-[45%] text-primary absolute text-3xl hover:bg-primary hover:text-white">
              <a href={reports?.[currentIndex]?.img} target="_blank">
                <AiOutlineSearch />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SectionWrapper(Reports);
