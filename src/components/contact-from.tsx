// src/Components/common/ClientLogo.tsx

// React & Next  Imports
import React from "react";
import Image from "next/image";

// Image Import
import contactHouse from "@/../public/image/contactHouse.png";

// Constant Import
import Input from "./input ";
import { ContactFormData } from "@/constant/contact-form-data";

// Input Import

const ContactFrom = () => {
  return (
    <div id="Contact-From" className="grid lg:grid-cols-2  rounded-3xl justify-around items-center h-full m-6 lg:m-9 shadow-xl  ">
      {/* 1st section  owner information  */}
      <div
        className="grid bg-[#FFEFEA] border  lg:border-r-0 border-b-0 lg:border-b h-full items-center justify-center
      p-5  sm:px-28 lg:py-20  gap-y-6 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none relative "
      >
        {/* back ground image  */}
        <Image
          src={contactHouse}
          alt="contactHouse"
          className="absolute w-[400px]  lg:w-[600px]   transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-5"
        />
        {/* Text part */}
        <p className="text-primary text-xl relative"> --- Lets Talk </p>
        <h1 className="font-bold text-xl">
          Have a Project in Mind?
          <br />
          Contact With Us
        </h1>
        <p className="text-xs">
          If you are going to use a passage of Lorem Ips, <br />
          you need this be sure there is not anything embarrassing hidden.
        </p>
        {/* Haiger engineer  */}
        <div className="flex gap-5">
          <div>
            <h1 className="font-semibold ">software engineer</h1>
            <p className="text-xs">Web developer</p>
          </div>
        </div>
      </div>
      {/* 2nd section user information  */}
      <div className="grid rounded-3xl  rounded-t-none lg:rounded-r-3xl lg:rounded-l-none bg-white border lg:border-t lg:border-l-0 border-t-0  w-full p-5  gap-y-6 ">
        {/* input  */}
        <div className="grid lg:grid-cols-2 gap-4 pt-6">
          {ContactFormData.map((items, i) => (
            <div key={i} className="grid text-md gap-6">
              <Input {...items} className="text-gray-700 w-full" />
            </div>
          ))}
        </div>
        {/* Massage  */}
        <div className=" mb-4">
          <label htmlFor="message" className="leading-7 text-md">
            Send us a message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded-lg border border-gray-300 focus:border-primary focus:ring-2
             focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-7 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>
    </div>
  );
};
// w-[250px] md:w-[350px] xl:w-[500px] lg:pr-12 xl:pr-0
export default ContactFrom;
