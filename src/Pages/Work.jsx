import React from "react";
import Hero from "../components/Hero";
import Works from "./components/Home/Works";
import { Pagination } from "@mui/material";

const Work = () => {
  const works = [
    {
      name: "Jamie Jonson",
      type: "Web Design",
      profileImg: "profile1.jpg",
      image: "casetteVert2.jpg",
      heading: "Casette Tape",
    },
    {
      name: "Jamie Jonson",
      type: "Application",
      profileImg: "profile2.jpg",
      image: "clock.jpg",
      heading: "Miniwall clock",
    },
    {
      name: "Jamie Jonson",
      type: "UI/UX Design",
      profileImg: "profile2.jpg",
      image: "computer.jpg",
      heading: "Avo Portfolio Agency",
    },
    {
      name: "Jamie Jonson",
      type: "Web Development",
      profileImg: "profile3.jpg",
      image: "notes.jpg",
      heading: "Hand Writing",
    },
    {
      name: "Jamie Jonson",
      type: "Illustration",
      profileImg: "profile1.jpg",
      image: "keyboard.jpg",
      heading: "Keyboard",
    },
    {
      name: "Jamie Jonson",
      type: "Web Development",
      profileImg: "profile3.jpg",
      image: "spiral.jpg",
      heading: "Spiral",
    },
    {
      name: "Jamie Jonson",
      type: "Web Development",
      profileImg: "profile2.jpg",
      image: "chair2.jpg",
      heading: "Hand Writing",
    },
    {
      name: "Jamie Jonson",
      type: "Illustration",
      profileImg: "profile1.jpg",
      image: "work2.jpg",
      heading: "Keyboard",
    },
    {
      name: "Jamie Jonson",
      type: "Web Development",
      profileImg: "profile3.jpg",
      image: "chair3.jpg",
      heading: "Spiral",
    },
  ];
  return (
    <div>
      <Hero path="Work" />
      <Works clipPath={false} works={works} />
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

export default Work;
