import React from "react";
import homePng from "../assets/programmer.png";

const HomePage = () => {
  return (
    <>
      <div className="flex px-2 items-center flex-col py-16 bg-purple-500 sm:bg-orange-500 sm:px-4 md:px-6 md:bg-lime-600 md:justify-around md:flex-row lg:bg-emerald-600 text-white">
        <div className="left-content md:basis-1/2">
          <h1 className="font-extrabold uppercase text-sm sm:text-base md:text-left md:text-lg text-center  md:tracking-widest lg:text-xl">
            Welcome to Home Services
          </h1>
          <p className="py-2 text-xs sm:text-base md:text-lg md:py-3 lg:py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quas
            libero quaerat ipsa! Perspiciatis cum temporibus, quod fugiat
            laboriosam perferendis dolor aut quisquam commodi repellat.
          </p>
          <button className="uppercase bg-blue-800 py-1 px-2 rounded-md hover:bg-blue-700 active:bg-blue-900 text-xs sm:px-3 sm:py-1 sm:text-base md:px-4 md:py-2 md:tracking-widest ">
            Learn More
          </button>
        </div>
        <div className="right-content mt-5 ">
          <img
            src={homePng}
            alt="Home"
            className="h-24 sm:h-28 md:h-32 lg:h-40"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
