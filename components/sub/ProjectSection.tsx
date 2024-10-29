/* eslint-disable react/jsx-no-undef */
"use client";
import { BsGithub } from "react-icons/bs";
import TechStackImge from "@/utils/TechImges";
import { ProjectImageData } from "@/utils/TechImges";
import Image from "next/image";
import React from "react";
const ProjectSection = () => {
  return (
    <div className="w-full  my-32 ">
      <div className="max-w-7xl ">
        <div className="flex flex-col justify-center items-center mb-4 space-y-4 text-center ">
          <h1 className="text-white font-bold text-4xl tracking-wider mb-2">Projects</h1>
          <p className="text-gray-400 text-2xl"> Things I&apos;ve built so far</p>
          <div className="grid md:grid-cols-3    flex-col-1 md:gap-10  justify-center items-center">
            {TechStackImge.map((imge: ProjectImageData) => (
              <div
                key={imge.key}
                className="w-full h-auto mt-4 border-2 border-transparent hover:border-blue-500 rounded-xl"
              >
                <Image
                  src={imge.src}
                  alt={`Image ${imge.key}`}
                  width={imge.width}
                  height={imge.height}
                  className="w-[350px] h-[260px] rounded-tl-lg rounded-tr-lg "
                />

                <div className="text-start px-4 max-w-[350px]  rounded-bl-lg rounded-br-lg z-50 bg-[#363636] p-4">
                  <h1 className="text-2xl font-semibold  mb-2 text-gray-400">Project Tile goes here</h1>
                  <p className="text-[18px] text-[#CCCCCC]">
                    This is sample project description random things are here in description This is sample project
                    lorem ipsum generator for dummy content
                  </p>
                  <h1 className="my-4 text-[#CCCCCC] text-[14px]">Tech stack : HTML , JavaScript, SASS, React</h1>
                  <div className="flex space-x-12  items-center flex-row text-decoration-line: underline text-gray-300 hover:cursor-pointer">
                    <div className="flex items-center justify-center space-x-2">
                      <Image src="/proj-image/chain.png" alt="icon" width={15} height={15} />
                      <p>View Code</p>
                    </div>
                    <span className="flex  items-center space-x-2 hover:cursor-pointer">
                      <BsGithub size={12} />
                      <p className="text-[16px] text-[#ffffff]">Live Preview</p>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
