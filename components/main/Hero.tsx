import Image from "next/image";
import React from "react";
import { PiHandWavingFill } from "react-icons/pi";
import MyHeroTech from "../sub/MyHeroTech";

const Hero = () => {
  return (
    <div className="w-full px-6 flex-grow">
      <div className="max-w-7xl mx-auto md:mt-48 px-4 mt-20">
        <div className="flex md:flex-row flex-col md:justify-between justify-center items-center">
          <div className="flex flex-col font-bold text-3xl md:mb-0 mb-4   text-white">
            <h1 className="flex flex-row items-end bg-transparent">
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
      </div>
    </div>
  );
};

export default Hero;
