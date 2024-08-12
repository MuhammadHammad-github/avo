import {
  DesignServices,
  MobileFriendlyOutlined,
  PaletteOutlined,
  Search,
  TerminalOutlined,
} from "@mui/icons-material";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.1 });
  const isInView3 = useInView(ref3, { once: true, amount: 0.1 });
  return (
    <section className="my-40 flex flex-col items-center respPx20">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="uppercase text-center"
      >
        About Us
      </motion.h2>
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="my-20 flex gap-20 flex-wrap items-center justify-center"
      >
        <Service
          text={"UI/UX Design"}
          icon={
            <PaletteOutlined className="text-semiTransparentBlack !text-6xl " />
          }
        />
        <Service
          text={"Web Development"}
          icon={
            <TerminalOutlined className="text-semiTransparentBlack !text-6xl" />
          }
        />
        <Service
          text={"Product Design"}
          icon={
            <DesignServices className="text-semiTransparentBlack !text-6xl" />
          }
        />
        <Service
          text={"Mobile Apps"}
          icon={
            <MobileFriendlyOutlined className="text-semiTransparentBlack !text-6xl" />
          }
        />
        <Service
          text={"Seo"}
          icon={<Search className="text-semiTransparentBlack !text-6xl" />}
        />
      </motion.div>
      <WelcomeToAvo />
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView3 ? { opacity: 1, y: 0 } : {}}
        transition={{ ease: "easeOut", duration: 1 }}
        className="flex 950px:justify-center w-full 950px:flex-row flex-col 950px:items-center gap-10"
      >
        <Point />
        <Point number="02" />
        <Point number="03" />
      </motion.div>
    </section>
  );
};

export default About;
const Service = ({ text, icon }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      {icon}
      <h6 className="font-semibold tracking-widest">{text}</h6>
    </div>
  );
};
const WelcomeToAvo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ ease: "easeOut", duration: 1 }}
      className="my-10 flex 1000px:flex-row flex-col 1000px:items-stretch justify-center gap-10 "
    >
      <div className=" 1000px:hidden block    overflow-hidden">
        <img
          src="/images/officeVert.jpg"
          className="max-w-full w-full h-96  object-cover"
          alt="office"
        />
      </div>
      <div className="flex flex-col gap-4 1000px:w-1/3">
        <h3 className="1000px:text-end font-bold text-semiTransparentBlack">
          {" "}
          Welcome to AVO A Personal Porfolio Web Agency
        </h3>
        <p className="1000px:text-end">
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean. A small river named Duden flows by
          their place and supplies it with the necessary regelialia. It is a
          paradisematic country, in which roasted parts of sentences fly into
          your mouth.
        </p>
      </div>
      <div className="1000px:w-1/3 1000px:block hidden">
        <img
          src="/images/officeVert.jpg"
          className="max-w-full h-full"
          alt="office"
        />
      </div>
      <div className="flex flex-col gap-4 items-start 1000px:w-1/3">
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth.
        </p>
        <button className="btn !px-4 !py-2">View All Projects</button>
      </div>
    </motion.div>
  );
};
const Point = ({ number = "01" }) => {
  return (
    <div className="flex items-start gap-4">
      <h3 className="text-5xl text-crimson !font-normal border-b border-lightGrayishBlue pb-1">
        {number}
      </h3>
      <div className="flex flex-col gap-1">
        <h6 className="tracking-widest font-medium">
          Search Engine Optimization
        </h6>
        <p>Far far away, behind the word mountains</p>
      </div>
    </div>
  );
};
