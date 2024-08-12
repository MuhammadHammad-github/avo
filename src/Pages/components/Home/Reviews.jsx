import { FormatQuote, RequestQuote } from "@mui/icons-material";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Slider from "react-slick";
const CustomDot = () => (
  <div
    className="w-2 h-2 bg-[#ccc] myDot my-10 outline-double outline-[#ccc]"
    style={{
      borderRadius: "50%",
      cursor: "pointer",
    }}
  ></div>
);

const Reviews = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.1 });
  const settings = {
    dots: true,
    draggable: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    customPaging: (i) => (
      <button
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <CustomDot />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1280, // Tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 705, // Small screens (large phones)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="my-20 ">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="uppercase text-center"
      >
        Client Says About Us?
      </motion.h2>
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="my-10 respPx20 customDots"
      >
        <Slider {...settings}>
          <ReviewCard profilePic={"profile1.jpg"} />
          <ReviewCard profilePic={"profile2.jpg"} />
          <ReviewCard profilePic={"profile3.jpg"} />
          <ReviewCard profilePic={"profile1.jpg"} />
          <ReviewCard profilePic={"profile2.jpg"} />
          <ReviewCard profilePic={"profile3.jpg"} />{" "}
          <ReviewCard profilePic={"profile1.jpg"} />
          <ReviewCard profilePic={"profile2.jpg"} />
          <ReviewCard profilePic={"profile3.jpg"} />
        </Slider>
      </motion.div>
    </div>
  );
};

export default Reviews;
const ReviewCard = ({ profilePic }) => {
  return (
    <div className="relative flex flex-col gap-6 p-6 bg-offWhite rounded mx-4">
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia. there live the blind texts.
      </p>
      <FormatQuote className="rotate-180 text-crimson !text-5xl absolute -top-6 z-50" />
      <div className="flex items-center gap-3">
        <img
          src={`/images/${profilePic}`}
          alt="reviewer image"
          className="max-w-full rounded-full w-20 h-20 object-cover"
        />
        <div className="flex flex-col gap-1">
          <h6>Roger Scott</h6>
          <p>Marketing Manager</p>
        </div>
      </div>
    </div>
  );
};
