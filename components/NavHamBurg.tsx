import { useState } from "react";

const NavHamBurg = () => {
  const [isOpen, setIsOpen] = useState(false);
 const HamBurgOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Hamburger Icon for Mobile */}
      <button className="md:hidden  text-white focus:outline-none" onClick={HamBurgOpen}>
        <svg className="w-7 h-7 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      {isOpen && (
        <div className="md:hidden absolute bg-gray-600 top-16 right-0 mr-4 py-4 w-1/4  flex-grow items-center justify-center ">
          <ul className="flex justify-between  items-center flex-col space-y-12 ">
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
              <a href="/tech-stach" className="text-white hover:text-gray-400">
                Texh Stach
              </a>
            </li>
            <li>
              <a href="/projects" className="text-white hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="/Contact" className="text-white hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default NavHamBurg;
