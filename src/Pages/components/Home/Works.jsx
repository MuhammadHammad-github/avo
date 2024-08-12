import { Person } from "@mui/icons-material";
import { motion, useInView } from "framer-motion";

import React, { useRef } from "react";

const Works = ({ works, clipPath = true }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className={` ${clipPath && "clipPathWorks bg-offWhite"} py-40`}>
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="uppercase text-semiTransparentBlack text-center"
      >
        Our Works
      </motion.h2>
      <div className="my-20 respPx20 750px:gap-0 flex flex-col gap-10">
        {works.map((work, index) => {
          return index % 2 === 0 ? (
            <WorkCard
              key={index}
              name={work.name}
              type={work.type}
              profileImg={work.profileImg}
              image={work.image}
              heading={work.heading}
            />
          ) : (
            <WorkCardReverse
              key={index}
              name={work.name}
              type={work.type}
              profileImg={work.profileImg}
              image={work.image}
              heading={work.heading}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Works;
const WorkCard = ({ type, image, name, profileImg, heading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="flex 750px:flex-row flex-col gap-10 items-center justify-center">
      <div className="750px:w-1/2 w-full">
        <img
          src={`/images/${image}`}
          alt="work image"
          className="max-w-full h-[500px] 950px:w-4/5 w-full object-cover mx-auto"
        />
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="750px:w-1/2 w-full flex flex-col gap-2 items-start"
      >
        <h6 className="tracking-widest text-xs  ">{type}</h6>
        <h1 className="!font-normal tracking-wider">{heading}</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="flex items-center gap-4 my-5">
          <div className="">
            <img
              src={`/images/${profileImg}`}
              alt="profile pic"
              className="max-w-full rounded-full  object-cover h-12 w-12"
            />
          </div>
          <div>
            {" "}
            <h6 className="text-sm">{name}</h6>
            <p className="text-xs">avo.com</p>
          </div>
        </div>
        <button className="uppercase !tracking-[0.2em] px-2 py-1 text-xs font-bold text-semiTransparentBlack border border-lightGrayishBlue rounded">
          View Portfolio
        </button>
      </motion.div>
    </div>
  );
};
const WorkCardReverse = ({ type, image, name, profileImg, heading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <div className="flex 750px:flex-row flex-col-reverse gap-10 items-center justify-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="750px:w-1/2 w-full flex flex-col gap-2 750px:items-end items-start"
      >
        <h6 className="tracking-widest text-xs  ">{type}</h6>
        <h1 className="!font-normal tracking-wider">{heading}</h1>
        <p className="750px:text-end">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="flex items-center gap-4 my-5">
          <div className="">
            <img
              src={`/images/${profileImg}`}
              alt="profile pic"
              className="max-w-full rounded-full  object-cover h-12 w-12"
            />
          </div>
          <div>
            {" "}
            <h6 className="text-sm">{name}</h6>
            <p className="text-xs">avo.com</p>
          </div>
        </div>
        <button className="uppercase !tracking-[0.2em] px-2 py-1 text-xs font-bold text-semiTransparentBlack border border-lightGrayishBlue rounded">
          View Portfolio
        </button>
      </motion.div>
      <div className="750px:w-1/2 w-full">
        <img
          src={`/images/${image}`}
          alt="work image"
          className="max-w-full h-[500px] 950px:w-4/5 w-full object-cover mx-auto"
        />
      </div>
    </div>
  );
};
