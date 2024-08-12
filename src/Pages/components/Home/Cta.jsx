import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Cta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="respPx20 my-20">
      <div className="cta 500px:px-10 450px:px-5 400px:px-3 px-1   py-20 rounded ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="flex flex-col items-start gap-2 1150px:w-2/5 950px:w-1/2 750px:w-3/5 650px:w-3/4 600px:w-4/5 w-full"
        >
          <h6 className="text-crimson">Get Started</h6>
          <h3 className="text-offWhite">
            Fill in the brief and get the project estimate
          </h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <button className="btn !px-4 !py-2 my-4">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Cta;
