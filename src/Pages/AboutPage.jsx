import React, { useRef } from "react";
import Hero from "../components/Hero";
import About from "./components/Home/About";
import Cta from "./components/Home/Cta";
import Reviews from "./components/Home/Reviews";
import {
  FacebookOutlined,
  Google,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { motion, useInView } from "framer-motion";

const AboutPage = () => {
  return (
    <div>
      <Hero path="About us" />
      <About />
      <Cta />
      <Team />

      <Reviews />
    </div>
  );
};

export default AboutPage;
const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <div className="respPx20 my-20 bg-offWhite clipPathWorks py-20 ">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="uppercase text-center my-20"
      >
        Expert team
      </motion.h2>
      <div className="my-20 grid 1100px:grid-cols-4 900px:grid-cols-3 600px:grid-cols-2 grid-cols-1 gap-5 gap-y-10 respPx20">
        <TeamCard
          image={"profile1.jpg"}
          name={"John wilson"}
          role={"Web developer"}
          delay={0.1}
        />
        <TeamCard
          image={"profile2.jpg"}
          name={"robert wills"}
          delay={0.2}
          role={"Web developer"}
        />
        <TeamCard
          image={"profile3.jpg"}
          name={"mike smith"}
          delay={0.3}
          role={"Graphic designer"}
        />
        <TeamCard
          image={"profile4.jpg"}
          name={"Andrian anderson"}
          delay={0.4}
          role={"system analyst"}
        />
        <TeamCard
          image={"profile5.jpg"}
          name={"John wilson"}
          delay={0.5}
          role={"Web developer"}
        />
        <TeamCard
          image={"profile6.jpg"}
          name={"robert wills"}
          delay={0.6}
          role={"Web developer"}
        />
        <TeamCard
          image={"profile7.jpg"}
          name={"mike smith"}
          delay={0.7}
          role={"Graphic designer"}
        />
        <TeamCard
          image={"profile8.jpg"}
          name={"Andrian anderson"}
          delay={0.8}
          role={"system analyst"}
        />
      </div>
    </div>
  );
};
const TeamCard = ({ image, name, role, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ ease: "easeOut", duration: 0.5, delay }}
      className="relative group flex flex-col"
    >
      <div className="absolute top-5 left-5 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-all duration-300 ease-in-out">
        <div className="bg-white my-1 rounded-full p-2  text-crimson hover:bg-crimson hover:text-white transition-all duration-300 cursor-pointer">
          <Twitter className="!text-xl" />
        </div>
        <div className="bg-white my-1 rounded-full p-2  text-crimson  hover:bg-crimson hover:text-white transition-all duration-300 cursor-pointer">
          <FacebookOutlined className="!text-xl" />
        </div>{" "}
        <div className="bg-white my-1 rounded-full p-2  text-crimson  hover:bg-crimson hover:text-white transition-all duration-300 cursor-pointer">
          <Google className="!text-xl" />
        </div>{" "}
        <div className="bg-white my-1 rounded-full p-2  text-crimson  hover:bg-crimson hover:text-white transition-all duration-300 cursor-pointer">
          <Instagram className="!text-xl" />
        </div>
      </div>
      <img
        src={`/images/${image}`}
        className="max-w-full object-cover h-80 w-full "
        alt="team member's img"
      />
      <div className="flex flex-col gap-2 p-2 justify-center ">
        <h5 className="uppercase   !font-extrabold group-hover:text-crimson transition-all duration-300">
          {name}
        </h5>
        <h6 className="capitalize font-bold tracking-widest text-sm text-crimson ">
          {role}
        </h6>
      </div>
    </motion.div>
  );
};
