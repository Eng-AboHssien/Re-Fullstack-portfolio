import React from "react";
import { CgTwitter } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa6";
import { TiSocialGithubCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-full overflow-hidden shadow-xl shadow-[#2A0E61]/50 backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4">
        {/* Row 1: Logo and Contact Info */}
        <div className="flex flex-row  justify-between w-full items-center mb-2">
          <span className="flex flex-col cursor-pointer">
            <h1 className="bg-gradient-to-r from-[#00C0FD] to-[#E70FAA] inline-block text-transparent bg-clip-text">
              {`{007}`}
            </h1>
            <h1 className="bg-gradient-to-r from-[#00C0FD] to-[#E70FAA] inline-block text-transparent bg-clip-text">
              Islam
            </h1>
          </span>

          <div className="flex flex-col md:flex-row items-center justify-between  md:w-1/2 mt-2 md:mt-0">
            <p className="text-white mr-2">+001008406806</p>
            <p className="text-white mr-2">islam@gmail.com</p>
            <div className="hidden md:flex flex-row items-center space-x-3">
              <CgTwitter className="w-7 h-7 rounded-full bg-[#A7A7A7] cursor-pointer" />
              <TiSocialGithubCircular className="w-7 h-7 rounded-full bg-[#A7A7A7] cursor-pointer" />
              <FaLinkedinIn className="w-7 h-7 rounded-full p-1 bg-[#A7A7A7] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Row 2: Divider Line */}
        <hr className="border-t border-gray-400 w-full my-4" />

        {/* Row 3: Navigation Links and Attribution */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <ul className="flex  text-white md:space-x-8 space-x-3 mb-4 md:mb-0">
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
              <a href="/tech-stack" className="Nav-hover">
                Tech Stack
              </a>
            </li>
            <li>
              <a href="/contact" className="Nav-hover">
                Contact
              </a>
            </li>
          </ul>

          <span className="flex items-center md:text-lg text-sm ">
            <h1 className="text-white mr-1">Designed and built by</h1>
            <h1 className="bg-gradient-to-r from-[#00C0FD] to-[#E70FAA] inline-block text-transparent bg-clip-text">
              Islam MG
            </h1>
            <p className="text-white mx-1">with</p>
            <h1 className="bg-gradient-to-r from-[#00C0FD] to-[#E70FAA] inline-block text-transparent bg-clip-text">
              Love & Coffee
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
