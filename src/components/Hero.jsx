import React from "react";

const Hero = ({ path = "your path" }) => {
  return (
    <div className="allHero 500px:px-32 px-16 clipPathHero parallax min-h-[65vh] flex flex-col  justify-end py-20">
      <p className="uppercase my-4 text-[#ffffffb3]">
        Home <span className="text-crimson"> &gt;</span> {path}{" "}
      </p>
      <h1 className="uppercase text-offWhite">{path}</h1>
    </div>
  );
};

export default Hero;
