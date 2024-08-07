import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ className }) => {
  const [toggled, setToggled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  const links = [
    { text: "Home", link: "/" },
    { text: "About", link: "#" },
    { text: "Work", link: "#" },
    { text: "Blog", link: "#" },
    { text: "Contact", link: "#" },
  ];
  return (
    <header
      className={`${className} md:absolute md:bg-transparent bg-black top-0 w-full z-50 md:!text-translucentWhite text-offWhite flex md:flex-row md:h-auto transitional h-20 ${
        toggled && "h-80 overflow-y-auto"
      }  flex-col  md:justify-between py-6 md:px-20 px-2 overflow-hidden`}
    >
      <div className="flex justify-between items-center ">
        <span className="cursor-pointer  text-2xl font-bold !text-offWhite">
          a<span className="text-crimson">v</span>o
        </span>
        <span
          className="cursor-pointer md:hidden !text-translucentWhite"
          onClick={() => setToggled((prev) => !prev)}
        >
          MENU
        </span>
      </div>
      <nav className="flex md:flex-row flex-col md:items-center md:my-0 my-6 md:gap-10 gap-5">
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
