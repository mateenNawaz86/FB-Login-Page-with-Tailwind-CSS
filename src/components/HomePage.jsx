import React from "react";
import homePng from "../assets/programmer.png";

const HomePage = () => {
  return (
    <>
      <div className="flex justify-around py-24 bg-purple-500 text-white">
        <div className="left-content w-1/2">
          <h1 className="font-extrabold tracking-widest uppercase text-2xl">
            Welcome to Home Services
          </h1>
          <p className="py-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quas
            libero quaerat ipsa! Perspiciatis cum temporibus, quod fugiat
            laboriosam perferendis dolor aut quisquam commodi repellat.
          </p>
          <button className="border-2 border-blue-700 py-2 px-4 rounded hover:bg-blue-900">
            Learn More
          </button>
        </div>
        <div className="right-content">
          <img src={homePng} alt="Home" className="h-40" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
