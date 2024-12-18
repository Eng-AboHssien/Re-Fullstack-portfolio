"use client";

import { CgTwitter } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa6";
import { TiSocialGithubCircular } from "react-icons/ti";
import NavHamBurg from "../sub/NavHamBurg";

const Navbar = () => {
  return (
    <nav className="w-full h-16 shadow-xl px-4 shadow-[#2A0E61]/50  backdrop-blur-md mx-auto py-1">
      <div className="max-w-7xl px-4 h-full z-50 mx-auto flex items-center justify-between shadow-xl ">
        <span className="flex  flex-col cursor-pointer">
          <h1 className="bg-gradient-to-r from-[#00C0FD] to-[#E70FAA] inline-block text-transparent bg-clip-text">
            {`{007}`}
          </h1>
          <h1 className="bg-gradient-to-r from-[#00C0FD] to-[#E70FAA] inline-block text-transparent bg-clip-text">
            Islam
          </h1>
        </span>

        <div className="hidden md:flex justify-center items-center flex-grow">
          <ul className="flex text-white space-x-8">
            <li>
              <a href="/home" className="Nav-hover">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="Nav-hover">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="Nav-hover">
                Projects
              </a>
            </li>
            <li>
              <a href="/tech-stack" className=" Nav-hover">
                Tech Stack
              </a>
            </li>
            <li>
              <a href="/contact" className=" Nav-hover">
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
      </div>
    </nav>
  );
};

export default Navbar;
