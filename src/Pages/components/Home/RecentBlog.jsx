import { Message } from "@mui/icons-material";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const RecentBlog = ({ blogs, heading = true }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div
      className={`${heading && "clipPathBlogs bg-offWhite"} py-40 ${
        heading && "mt-40"
      }`}
    >
      {heading && (
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="uppercase text-semiTransparentBlack text-center"
        >
          Recent Blog
        </motion.h2>
      )}
      <div
        className={`${
          heading && "my-20"
        } respPx20 grid 1150px:grid-cols-4 900px:grid-cols-3 500px:grid-cols-2 grid-cols-1 gap-10`}
      >
        {blogs.map((blog, index) => {
          return (
            <BlogCard image={blog.image} key={index} delay={0.1 * index} />
          );
        })}
      </div>
    </div>
  );
};

export default RecentBlog;
const BlogCard = ({ image, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ ease: "easeOut", duration: 0.5, delay }}
      className="flex flex-col gap-3"
    >
      <h5 className="cursor-pointer hover:text-crimson transitional">
        Amplify your blockchain team
      </h5>
      <div>
        <img
          src={`/images/${image}`}
          alt="blogImage"
          className="max-w-full h-80 w-full object-cover"
        />
      </div>
      <h6 className="uppercase text-sm tracking-wider">
        June 01, 2020 admin <Message className="mx-2" />3
      </h6>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia.
      </p>
    </motion.div>
  );
};
