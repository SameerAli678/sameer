"use client";
import Image from "next/image";
import React from "react";
import github from "@/../public/image/github.svg";
const Footer = () => {
  return (
    <div className="flex flex-col bg-blue w-full text-[#c4c0c0] items-center gap-9 p-6">
      {/* github  */}
      <div className="flex flex-col sm:flex-row items-center m-auto sm:gap-40 xl:gap-[700px]">
        <div
          className="flex flex-col items-center"
          onClick={() => window.open("https://github.com/SameerAli678")}
        >
          <Image
            src={github}
            alt="html"
            width={80}
            height={50}
            className="bg-white p-4 rounded-full"
          />
          <h1 className="text-xl text-[#c4c0c0]">SameerAli678</h1>
        </div>
        <div className="flex flex-col text-md sm:text-2xl">
          <p className="">
            <span className="text-text  ">Mail Me: </span>
            alikhansameer234@gamil.com
          </p>
          <p>
            <span className="text-text ">CALL ME: </span>
            +923151265238
          </p>
        </div>
      </div>

      {/* border  */}
      <div className=" flex border border-[#e7dbdb1a] w-full" />
      {/* build */}
      <div className="flex  p-4 items-center">
        © Copyright Ri build  2025 . All right reserved.
      </div>
    </div>
  );
};

export default Footer;
