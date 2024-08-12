import React from "react";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import Works from "./components/Home/Works";
import Cta from "./components/Home/Cta";
import RecentBlog from "./components/Home/RecentBlog";
import Reviews from "./components/Home/Reviews";

const Home = () => {
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
  ];
  const blogs = [
    { image: "chair.jpg" },
    { image: "work.jpg" },
    { image: "desk.jpg" },
    { image: "planner.jpg" },
  ];
  return (
    <div>
      <Hero />
      <About />
      <Works works={works} />
      <Reviews />
      <Cta />
      <RecentBlog blogs={blogs} />
    </div>
  );
};

export default Home;
