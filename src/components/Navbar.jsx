import React from "react";
import logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className=" bg-purple-800 text-white flex justify-between">
          <img
            src={logo}
            alt="logo"
            className="h-12 pl-4 py-2  cursor-pointer"
          />
          <ul className=" hidden px-8 py-4 space-x-8 md:flex md:justify-end md:items-baseline">
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
          <FiMenu className=" md:hidden mr-4 h-12 text-3xl cursor-pointer hover:text-pink-700" />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
