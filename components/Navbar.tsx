"use client";

import Image from "next/image";
import { CgTwitter } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa6";
import { TiSocialGithubCircular } from "react-icons/ti";
// import { useState } from "react";
import NavHamBurg from "./NavHamBurg";

const Navbar = () => {
  return (
    <nav className="p-4 z-50 h-16 flex items-center justify-between max-w-6xl mx-auto">
      <Image src="/logo 1.png" alt="logo" width={50} height={30} />
      {/* this Span Instead of imag as option */}
      {/* <span className="flex  flex-col cursor-pointer">
        <h1 className="bg-gradient-to-r from-[#00C0FD] to-[#E70FAA] inline-block text-transparent bg-clip-text">
          {`{007}`}
        </h1>
        <h1 className="bg-gradient-to-r from-[#00C0FD] to-[#E70FAA] inline-block text-transparent bg-clip-text">
          Islam
        </h1>
      </span> */}

      <div className="hidden md:flex justify-center items-center flex-grow">
        <ul className="flex space-x-8">
          <li>
            <a href="/home" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="text-white hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="/tech-stack" className="text-white hover:text-gray-400">
              Tech Stack
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex flex-row items-center space-x-3">
        <CgTwitter className="w-7 h-7 rounded-full bg-[#A7A7A7] cursor-pointer" />
        <TiSocialGithubCircular className="w-7 h-7 rounded-full bg-[#A7A7A7] cursor-pointer" />
        <FaLinkedinIn className="w-7 h-7 rounded-full p-1 bg-[#A7A7A7] cursor-pointer" />
      </div>
      <NavHamBurg />
    </nav>
  );
};

export default Navbar;
