import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "ease-in-out",
    infinite: true,
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
  };

  return (
    <div className="min-h-screen   ">
      <Slider {...settings} className="  h-full  ">
        <div className="clipPathHero">
          <img
            src="/images/tunnel1.jpg"
            className="max-w-full h-full object-cover"
            alt="hero1"
          />
        </div>
        <div className="clipPathHero">
          <img
            src="/images/tunnel2.jpg"
            className="max-w-full h-full object-cover"
            alt="hero2"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
