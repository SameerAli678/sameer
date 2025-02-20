import React from "react";
import RESUME from "@/../public/image/RESUME.png";
import { FaArrowRight } from "react-icons/fa";

import Image from "next/image";

const About = () => {
  return <div><div className="grid  bg-[#D9D9D9] p-9 ">
  <div className=" relative flex  justify-center pt-5">
    <Image
      src={RESUME}
      alt="RESUME"
      width={500}
      height={300}
      className=""
    />
    <div className="absolute text-3xl md:text-6xl top-7 ">
      ABOUT<span className="text-orange">ME</span>
    </div>
  </div>
  {/* PERSONAL INFOS */}
  <div className="flex flex-col justify-center items-center gap-y-9 pt-6">
    <h1 className="flex text-xl font-semibold pt-6">
      ~~~PERSONAL INFOS~~~
    </h1>
    {/* Names */}
    <div className="grid md:grid-cols-2 md:gap-x-24 text-xl">
      <div>
        <p>
          <span className="text-text">First Name: </span>Sameer
        </p>
        <p>
          <span className="text-text">Last Name: </span>Ali
        </p>
        <p>
          <span className="text-text">F Name: </span>Saeed
        </p>
        <p>
          <span className="text-text">Age: </span>18 year old
        </p>
      </div>
      <div>
        <p>
          <span className="text-text">Address: </span>Orangi town karachi
        </p>
        <p>
          <span className="text-text">Nationality: </span>Pakistani
        </p>

        <p>
          <span className="text-text">Email: </span>
          alikhansameer234@gamil.com
        </p>
        <p>
          <span className="text-text">Phone: </span>
          +923151265238
        </p>
      </div>
    </div>
    {/* button  */}
    <div className="grid md:grid-cols-2 items-center gap-x-36 gap-y-5">
      <button className=" relative flex border-2 border-orange px-8 rounded-2xl py-1 hover:text-white bg-white hover:bg-[#f0a275] transition duration-300 hover:scale-90 w-fit md:order-1 order-2">
        Download CV
        <div className="bg-orange rounded-full p-[11px] absolute -right-5 items-center -top-1 ">
          <FaArrowRight />
        </div>
      </button>
      {/* Experience */}
      <div className=" w-fit border border-orange p-9 md:order-2 order-1 bg-white rounded-md hover:scale-110  ">
        <span className="text-3xl text-orange">1+</span>
        <p>---YEARS OF EXPERIENCE</p>
      </div>
    </div>
  </div>
</div></div>;
};

export default About;
