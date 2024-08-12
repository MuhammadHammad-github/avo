import React from "react";
import Hero from "../components/Hero";
import { LocationOn, Mail, Map, Phone, Public } from "@mui/icons-material";

const Contact = () => {
  return (
    <div>
      <Hero path="Contact" />
      <div className="mt-40 mb-20 respPx20 flex items-center flex-col">
        <h6 className="uppercase text-crimson text-sm tracking-widest my-2 font-bold">
          Contact Us
        </h6>
        <h1 className="uppercase my-2">Have A project?</h1>
        <p className="my-6 text-center">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <div className="grid 750px:grid-cols-2 grid-cols-1 gap-10 my-10 w-full">
          <div className="500px:p-10 p-5 flex items-start flex-col gap-5 bg-offWhite ">
            <div className="grid grid-cols-2 gap-5 w-full">
              <MyInput placeholder={"Your Name"} />
              <MyInput placeholder={"Your Name"} />
            </div>
            <div className="w-full">
              <MyInput placeholder={"Subject"} />
            </div>
            <div className="w-full">
              <textarea
                name="message"
                id="message"
                rows="7"
                placeholder="Message"
                className="w-full text-sm p-5"
              ></textarea>
            </div>
            <button className="btn">Send Message</button>
          </div>
          <div className="flex flex-col  gap-10">
            <IconAndInfo
              heading={"Address"}
              info={"198 West 21th Street, Suite 721 New York NY 10016"}
              icon={<LocationOn className="text-white " />}
            />
            <IconAndInfo
              heading={"Phone"}
              info={"+ 1235 2355 98"}
              icon={<Phone className="text-white " />}
            />{" "}
            <IconAndInfo
              heading={"Email"}
              info={"info@yoursite.com"}
              icon={<Mail className="text-white " />}
            />
            <IconAndInfo
              heading={"Website"}
              info={"yoursite.com"}
              icon={<Public className="text-white " />}
            />
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26289.602712791075!2d-91.98761497014776!3d34.548482617745876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d2d242bf2cffd1%3A0xb30a4236a7eb672a!2sEngland%2C%20AR%2072046%2C%20USA!5e0!3m2!1sen!2s!4v1723443869316!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[50vh]"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
const IconAndInfo = ({ icon, heading, info }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-crimson p-3 rounded-full">{icon}</div>
      <div className="flex flex-col gap-1">
        <h6>{heading}:</h6>
        <p>{info}</p>
      </div>
    </div>
  );
};
const MyInput = ({ placeholder, type = "text" }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="outline-none w-full p-4 text-sm bg-white rounded"
    />
  );
};
