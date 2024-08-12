import React from "react";
import Hero from "../components/Hero";
import RecentBlog from "./components/Home/RecentBlog";
import { Pagination } from "@mui/material";

const Blog = () => {
  const blogs = [
    { image: "chair.jpg" },
    { image: "work.jpg" },
    { image: "desk.jpg" },
    { image: "planner.jpg" },
    { image: "work3.jpg" },
    { image: "work2.jpg" },
    { image: "blog.jpg" },
    { image: "chair3.jpg" },
  ];
  return (
    <div>
      <Hero path="BLog" />
      <RecentBlog blogs={blogs} heading={false} />
      <div className="flex items-center justify-center mb-20">
        <Pagination
          count={8}
          variant="outlined"
          className="!font-bold"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "gray", // Default text color
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#d1002c", // Custom background color for the active page
              color: "white", // Custom text color for the active page
            },
            "& .MuiPaginationItem-root.Mui-selected:hover": {
              backgroundColor: "#d1002c", // Darker shade on hover
            },
          }}
        />
      </div>
    </div>
  );
};

export default Blog;
