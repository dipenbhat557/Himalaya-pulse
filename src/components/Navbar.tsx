import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center  fixed top-0 z-50 bg-primary`}
    >
      <div className="w-full h-[80px]  flex justify-around items-center ">
        {/* Logo and site title */}
        <Link
          to="/"
          className="flex w-[60%] sm:w-[40%] h-full  gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="" className="w-[40%] h-full object-contain" />
        </Link>

        {/* Desktop navigation */}
        <ul className="list-none hidden  sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-white  text-[12px] font-light cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title.toUpperCase()}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <IoClose
              className="w-[30px] h-[30px] text-white object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <IoMdMenu
              className="w-[30px] h-[30px] text-white object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}

          {/* Mobile menu items */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-12 right-0 mx-4 my-2 bg-primary min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`text-white`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
