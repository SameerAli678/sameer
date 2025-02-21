import { PortfolioData } from "@/constant/portfolio-data";
import { FaArrowRight } from "react-icons/fa";
import projects from "@/../public/image/PROJECTS.png";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="grid  w-full pt-28" id="portfolio">
      <div className=" relative flex  justify-center pt-5 px-3">
        <Image
          src={projects}
          alt="RESUME"
          width={700}
          height={300}
          className=""
        />
        <div className="absolute text-3xl md:text-6xl top-5 md:top-7  items-center">
          My<span className="text-orange"> Portfolio</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pt-9">
        {PortfolioData.map((item, i) => (
          <div
            key={i}
            className="grid  border border-orange whitespace-pre-line p-6 w-full rounded-lg gap-y-5 "
          >
            <div className="font-bold text-3xl ">{item.tittle}</div>
            <p> {item.text}</p>
            <Link href={item.link || ""} rel="noopener noreferrer" target="_blank">
              <button className=" relative flex border-2 border-orange px-8 rounded-2xl py-1 hover:text-white bg-white hover:bg-[#f0a275] transition duration-300 hover:scale-90 w-fit">
                {item.button}
                <div className="bg-orange rounded-full p-[11px] absolute -right-5 items-center -top-1 ">
                  <FaArrowRight />
                </div>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
