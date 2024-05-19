import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../constants";
import { logo } from "../assets";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdMenu } from "react-icons/io";

const Navbar = ({ isHome }: { isHome: boolean }) => {
  const [toggle, setToggle] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  let timeoutId1: NodeJS.Timeout;
  const navigate = useNavigate();

  const handleMouseLeave1 = () => {
    timeoutId1 = setTimeout(() => {
      setShowDropdown1(false);
    }, 1000);
  };

  const handleMouseOverDropdown1 = () => {
    setShowDropdown1(true);
    if (timeoutId1) {
      clearTimeout(timeoutId1);
    }
  };

  return (
    <nav
      className={`w-full flex items-center relative top-0 ${
        isHome ? "bg-opacity-60 bg-black" : "bg-primary"
      }`}
    >
      <div className="w-full h-[80px] flex justify-around items-center">
        {/* Logo and site title */}
        <Link
          to="/"
          className="flex w-[60%] sm:w-[40%] h-full gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="" className="w-[40%] h-full object-contain" />
        </Link>

        {/* Desktop navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-white hover:text-slate-400 text-[12px] font-medium cursor-pointer`}
              onMouseEnter={() => {
                if (link.title === "Products") {
                  setShowDropdown1(true);
                }
              }}
              onMouseLeave={() => {
                if (link.title === "Products") {
                  handleMouseLeave1();
                }
              }}
            >
              <Link to={`/${link.id.toLowerCase()}`}>
                {" "}
                {link.title === "Products" ? (
                  <>
                    {link.title.toUpperCase()}
                    <IoMdArrowDropdown className={`inline  `} />
                  </>
                ) : (
                  <>{link.title.toUpperCase()}</>
                )}
              </Link>
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
            } p-6 absolute top-12 right-0 mx-4 my-2 bg-primary min-w-[140px] z-50 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`text-white`}
                  onClick={() => {
                    if (link.title === "Products") {
                      setShowProducts(!showProducts);
                    } else {
                      navigate(`/${link.id.toLowerCase()}`);
                      setToggle(false);
                    }
                  }}
                >
                  <div>
                    {link.title}
                    {link.title === "Products" && (
                      <IoMdArrowDropdown className="inline" />
                    )}
                  </div>
                  {link.title === "Products" && showProducts && (
                    <div className="w-full pb-3 h-[70px] flex flex-col">
                      <p
                        className="p-2"
                        onClick={() => {
                          navigate("/products", { state: { p: 0 } });
                          setToggle(false);
                        }}
                      >
                        Moringa
                      </p>
                      <p
                        className="p-2"
                        onClick={() => {
                          navigate("/products", { state: { p: 1 } });
                          setToggle(false);
                        }}
                      >
                        Shilajit
                      </p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showDropdown1 && (
        <div
          className="dropdown-menu top-14 p-3 rounded-b-xl rounded-r-xl left-[72%] shadow-md shadow-black text-black bg-white w-[16%] absolute z-50"
          onMouseLeave={() => setShowDropdown1(false)}
          onMouseOver={() => handleMouseOverDropdown1()}
        >
          <ul className="w-full">
            {["Healifera", "Shilajit"].map((p, index) => (
              <li
                key={index}
                className="hover:bg-[#80b38930] px-2 py-1 rounded-sm text-[14px] cursor-pointer"
              >
                <p onClick={() => navigate(`/products?i=${index}`)}>{p}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
