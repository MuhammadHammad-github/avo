import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";
import Slider from "react-slick";
import CountUp from "react-countup";
import { PlayArrow, PlayArrowOutlined } from "@mui/icons-material";
const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => setIsOpen(true);
  const closeLightbox = () => setIsOpen(false);
  const settings = {
    dots: false,
    draggable: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "ease-in-out",
    infinite: true,
    slide: true,
    beforeChange: (current, next) => {
      const slides = document.querySelectorAll(".slick-slide");
      slides.forEach((slide, index) => {
        if (index !== next) {
          slide.classList.remove("slick-active");
        }
      });
    },
    afterChange: (current) => {
      const slides = document.querySelectorAll(".slick-slide");
      slides.forEach((slide, index) => {
        if (index === current) {
          slide.classList.add("slick-active");
        }
      });
    },
    customPaging: (i) => (
      <CustomDots
        onClick={() => setActiveSlide(i)}
        isActive={i === activeSlide}
      />
    ),
    appendDots: (dots) => (
      <ul
        className=""
        style={{
          position: "absolute",
          bottom: "5%",
          display: "flex",
          justifyContent: "center",
          padding: 0,
        }}
      >
        {dots}
      </ul>
    ),
  };
  const btnRef = useRef();
  useEffect(() => {
    setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 2000);
    }, 10000);
  }, []);
  return (
    <div className="min-h-screen hero   ">
      <Slider {...settings} className="  h-full  ">
        <Content
          className={"homeHero1"}
          btnText={"Explore Projects"}
          number={400}
          text={"More then a hundred successful projects "}
        />
        <Content
          className={"homeHero2"}
          btnText={"Start Project"}
          number={21}
          text={"Years of Experienced"}
        />
      </Slider>
      <div className="absolute top-[90%] left-[60%]">
        <button
          onClick={openLightbox}
          ref={btnRef}
          className={` btn !px-4 !rounded-full ${animate && " playBtn"}`}
        >
          <PlayArrow className="text-black" />
        </button>
      </div>
      {isOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6stlCkUDG_s?si=5zuWpdKtFkw_wLsz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
            <button className="close-button" onClick={closeLightbox}>
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

const Content = ({ className, number = 0, text, btnText }) => {
  return (
    <div
      className={`${className} homeHero min-h-screen   flex 800px:flex-row flex-col-reverse 800px:gap-0 gap-5 h-full 800px:items-stretch justify-center 800px:py-[30vh] 800px:px-20 px-2 !overflow-x-hidden`}
    >
      <div className="800px:w-1/2 relative 450px:w-3/4 xl:px-20 1120px:px-10 lg:px-3 px-1  ">
        <h1 className="uppercase text-white leading-[1.1] ">
          We Create modern & minimal website
        </h1>
        <p className="text-[#ffffffcc] my-5 leading-normal">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia
        </p>
        <button className="btn">{btnText}</button>
      </div>
      <div className="800px:w-1/2 flex flex-col justify-start 800px:items-end ">
        <div className="relative flex items-center gap-2">
          <div className=" w-1 h-8 bg-crimson 800px:hidden "></div>
          <h1>
            <CountUp end={number} className="text-white " />
          </h1>
          <div className=" w-1 h-8 bg-crimson 800px:block hidden"></div>
        </div>
        <p className="text-translucentWhite 800px:w-36 800px:text-end">
          {text}
        </p>
      </div>
    </div>
  );
};
const CustomDots = ({ onClick, isActive }) => (
  <div
    onClick={onClick}
    className={`${
      isActive
        ? "!bg-white !border border-white outline-double outline-white p-1"
        : "bg-gray-400  outline-double outline-white p-1"
    }`}
    style={{
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      margin: "0 5px",
      cursor: "pointer",
    }}
  >
    {console.log(isActive)}
  </div>
);
