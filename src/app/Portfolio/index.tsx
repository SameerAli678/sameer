"use client";
import React from "react";
import { PiPhoneTransferLight } from "react-icons/pi";
import Image from "next/image";
import coding from "@/../public/image/Coding.png";

import ContactFrom from "@/components/contact-from";
import { FaArrowRight } from "react-icons/fa";
import About from "@/components/about";
import Skills from "@/components/skills";
import Footer from "@/components/footer";

const Portfolio = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Skills section not found!");
    }
  };
  const contact = () => {
    const skillsSection = document.getElementById("Contact-From");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("con section not found!");
    }
  };
  return (
    <div>
      {/* Start navbar  */}
      <nav className=" fixed  grid md:grid-cols-2 bg-blue   w-full py-6 gap-y-6 items-center justify-items-center z-50 top-0">
        <h1 className="flex text-3xl text-[#FF9C01] font-bold ">Sameer Ali</h1>
        <div className="flex gap-x-5 text-white ">
          <button
            className="flex border border-white rounded-full p-2 px-7 text-lg "
            onClick={scrollToSkills}
          >
            Skills
          </button>
          <button
            className="flex border border-white rounded-full p-2 px-9 text-lg items-center gap-2 "
            onClick={contact}
          >
            <PiPhoneTransferLight />
            Contact us
          </button>
        </div>
      </nav>
      {/* End navbar */}
      {/* Start hero section */}
      <div className="grid md:grid-cols-2 bg-[#E8DCDC]  justify-items-center items-center p-20 gap-9">
        <div className=" flex pt-12 ">
          <Image
            src={coding}
            alt="coding"
            width={500}
            height={600}
            className="shadow-xl rounded-3xl"
          />
        </div>

        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="flex text-2xl text-[#FF9C01] font-semibold">
            I`m Sameer Ali
          </h1>
          <p className="flex text-[#FF9C01]">Web Designer</p>
          <p className="flex justify-center text-start text-sm">
            I am A Nigerian based webs designer and front-end developer
            <br />
            focused on creating a clean & user friendly experiences. I am <br />
            passionate about building excellent software that improves
            <br /> the lives of those around me.
          </p>
          <button className=" relative flex border-2 border-orange px-8 rounded-2xl py-1 hover:text-white bg-white hover:bg-[#f0a275] transition duration-300 hover:scale-90">
            Hire me
            <div className="bg-orange rounded-full p-[11px] absolute -right-5 items-center -top-1 ">
              <FaArrowRight />
            </div>
          </button>
        </div>
      </div>
      {/*Start About us  */}
      <About />
      {/*End About us  */}
      {/* start Skills  */}
      <Skills />
      {/* ContactFrom */}
      <ContactFrom />
      <Footer />
    </div>
  );
};

export default Portfolio;
// bg-[#7784A3]
