import Image from "next/image";
import React from "react";
import { PiHandWavingFill } from "react-icons/pi";
import MyHeroTech from "../sub/MyHeroTech";
import ProjectSection from "../sub/ProjectSection";

const Hero = () => {
  return (
    <div className="w-full  flex-grow ">
      <div className="max-w-7xl mx-auto md:mt-48 mt-20 px-4 text-center">
        <div className="flex md:flex-row flex-col md:justify-between justify-center items-center">
          <div className="hidden md:flex flex-col px-4 font-bold text-start  text-3xl md:mb-0 mb-4   text-white ">
            <h1 className="flex flex-row bg-transparent">
              Hi
              <PiHandWavingFill className="ml-2 text-yellow-500  w-10 h-10" fill="currentColor" />
            </h1>
            <h1>My Name Is</h1>
            <h1 className="text-blue-600">Islam</h1>
            <h1>I build things for web</h1>
          </div>
          <Image src="/epyIslam.jpg" alt="islam" width={140} height={140} className="rounded-full mt-4 " />
        </div>
        <MyHeroTech />
        <ProjectSection/>
      </div>
    </div>
  );
};

export default Hero;
