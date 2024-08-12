import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  FacebookOutlined,
  FacebookSharp,
  Home,
  Instagram,
  Mail,
  Phone,
  Twitter,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-offWhite">
      <div className=" clipPathFooter py-40 bg-black respPx20  gap-10">
        <div className=" grid 1050px:grid-cols-5 900px:grid-cols-4 700px:grid-cols-3 400px:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex flex-col gap-10">
            <h6 className="text-white font-bold">avo</h6>
            <p>
              Far far away, behind the word mountains, far from the countries.
            </p>
            <div className="flex gap-4">
              <span className="bg-[#ffffff1a] p-3 rounded-full    flex items-center">
                <Twitter className="text-translucentWhite !text-lg " />
              </span>
              <span className="bg-[#ffffff1a] p-3 rounded-full    flex items-center">
                <FacebookSharp className="text-translucentWhite !text-lg " />
              </span>
              <span className="bg-[#ffffff1a] p-3 rounded-full    flex items-center">
                <Instagram className="text-translucentWhite !text-lg " />
              </span>
            </div>
          </div>
          <LinksAndHeading
            heading={"Community"}
            links={[
              { text: "Projects" },
              { text: "Team" },
              { text: "Reviews" },
              { text: "FAQ's" },
            ]}
          />
          <LinksAndHeading
            heading={"About Us"}
            links={[
              { text: "Our Story" },
              { text: "Meet the team" },
              { text: "Careers" },
            ]}
          />
          <LinksAndHeading
            heading={"Company"}
            links={[
              { text: "About Us" },
              { text: "Press" },
              { text: "Contact" },
              { text: "Careers" },
            ]}
          />
          <div className="flex flex-col gap-10 items-start">
            <h6 className="text-white font-bold">Have a Question?</h6>
            <div>
              <div className="flex  gap-4">
                <Home className="text-translucentWhite !text-xl" />
                <p>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
              <div className="flex items-center gap-4 my-2">
                <Phone className="text-translucentWhite !text-lg" />
                <p> +2 392 3929 210</p>
              </div>
              <div className="flex items-center gap-4 my-3">
                <Mail className="text-translucentWhite !text-lg" />
                <p> info@yourdomain.com</p>
              </div>
            </div>
          </div>
        </div>
        <h6 className="text-translucentWhite mt-20 w-full text-center">
          Copyright ©2024 All rights reserved | This template is made by
          <a
            href="https://github.com/MuhammadHammad-github"
            className="text-crimson mx-2"
            target="_blank"
          >
            Muhammad Hammad
          </a>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
const LinksAndHeading = ({ heading, links }) => {
  return (
    <div className="flex flex-col gap-10 items-start">
      <h6 className="text-white font-bold">{heading}</h6>
      <div className="flex flex-col gap-2 items-start">
        {links.map((link, index) => {
          return (
            <a
              href="#"
              key={index}
              className="text-translucentWhite flex items-center"
            >
              <ChevronRight />
              {link.text}
            </a>
          );
        })}
      </div>
    </div>
  );
};
