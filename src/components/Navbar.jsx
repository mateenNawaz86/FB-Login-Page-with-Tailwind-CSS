import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className=" bg-purple-800 text-white flex justify-between">
          <img src={logo} alt="logo" className="h-8 pl-8 mt-3 cursor-pointer" />
          <ul className="px-8 py-4 flex space-x-8 justify-end">
            <li className="cursor-pointer hover:text-teal-400 font-medium">
              Home
            </li>
            <li className="cursor-pointer hover:text-teal-400 font-medium">
              Services
            </li>
            <li className="cursor-pointer hover:text-teal-400 font-medium">
              About
            </li>
            <li className="cursor-pointer hover:text-teal-400 font-medium">
              Contact Us
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
