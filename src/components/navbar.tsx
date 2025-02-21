import React from "react";

const Navbar = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Skills section not found!");
    }
  };
  const contact = () => {
    const skillsSection = document.getElementById("portfolio");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("section not found!");
    }
  };
  return (
    <nav className=" grid md:grid-cols-2 bg-blue   w-full py-6 gap-y-6 items-center justify-items-center z-50 top-0 left-0  ">
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
          portfolio
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
