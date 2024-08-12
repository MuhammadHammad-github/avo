import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useGetScrollPos from "../hooks/useGetScrollPos";

const Header = ({ className, secondType = false }) => {
  const [toggled, setToggled] = useState(false);
  const scrollPos = useGetScrollPos();
  const location = useLocation();
  const showSecondHeader = scrollPos > 200;
  const pathname = location.pathname;
  const navigate = useNavigate();

  const links = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Work", link: "/work" },
    { text: "Blog", link: "/blog" },
    { text: "Contact", link: "/contact" },
  ];
  return (
    <header
      className={`${className} ${
        secondType
          ? `!fixed transition-all duration-300 ease-in-out !shadow-md bg-white text-black ${
              showSecondHeader ? "!top-0" : "!-top-[100%]"
            }   !left-0 `
          : "800px:absolute 800px:bg-transparent bg-black top-0 800px:!text-translucentWhite text-offWhite"
      }   w-full z-50  flex 800px:flex-row 800px:h-auto transitional h-20 ${
        toggled && "h-80 overflow-y-auto"
      }  flex-col  800px:justify-between py-6 800px:px-20 px-2 overflow-hidden`}
    >
      <div className="flex justify-between items-center ">
        <span
          className={`cursor-pointer  text-2xl font-bold ${
            secondType ? "text-semiTransparentBlack" : "!text-offWhite"
          } `}
        >
          a<span className="text-crimson">v</span>o
        </span>
        <span
          className={`cursor-pointer 800px:hidden ${
            secondType ? "text-semiTransparentBlack" : "!text-translucentWhite"
          } `}
          onClick={() => setToggled((prev) => !prev)}
        >
          MENU
        </span>
      </div>
      <nav className="flex 800px:flex-row flex-col 800px:items-center 800px:my-0 my-6 800px:gap-10 gap-5">
        {links.map((item, index) => {
          return (
            <a
              key={index}
              className={`${
                pathname === item.link && "text-crimson"
              } cursor-pointer uppercase text-sm font-semibold transitional hover:text-crimson`}
              onClick={() => navigate(item.link)}
            >
              {item.text}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
