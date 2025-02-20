import Image from "next/image";
import React from "react";
import html from "@/../public/image/html.png";
import css from "@/../public/image/css.png";
import git from "@/../public/image/git.webp";
import github from "@/../public/image/github.svg";
import javascript from "@/../public/image/javascript.webp";
import typescript from "@/../public/image/typescript.png";
import react from "@/../public/image/react.png";
import next from "@/../public/image/next.png";

const Skills = () => {
  return (
    <div id="skills" className="grid gap-y-9 pt-12 ">
      <h1 className="flex justify-center items-center text-3xl font-semibold ">
        ~~~SKILLS~~~
      </h1>
      {/* image  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 text-xl text-[#7784A3] gap-y-7 ">
        {/* html  */}
        <div className="grid justify-items-center">
          <Image src={html} alt="html" width={100} height={50} />
          <h1>HTML</h1>
        </div>
        {/* css  */}
        <div className="grid justify-items-center">
          <Image src={css} alt="html" width={500} height={50} />
          <h1>CSS</h1>
        </div>
        {/* git  */}
        <div className="grid justify-items-center">
          <Image src={git} alt="html" width={300} height={50} />
          <h1>git</h1>
        </div>
        {/* github  */}
        <div className="grid justify-items-center">
          <Image src={github} alt="html" width={100} height={50} />
          <h1>github</h1>
        </div>
        {/* javascript  */}
        <div className="grid justify-items-center">
          <Image src={javascript} alt="html" width={100} height={50} />
          <h1>javascript</h1>
        </div>
        {/* typescript */}
        <div className="grid justify-items-center">
          <Image src={typescript} alt="html" width={100} height={50} />
          <h1>typescript</h1>
        </div>
        {/* React  */}
        <div className="grid justify-items-center ">
          <Image src={react} alt="html" width={100} height={50} />
          <h1>React</h1>
        </div>
        {/* Next.js  */}
        <div className="grid justify-items-center">
          <Image src={next} alt="html" width={100} height={50} />
          <h1>Next.js</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
