import React, { useState } from "react";
import logo from "../assets/logod.svg";

const LogIn = () => {
  const [enteredInp, setEnteredInp] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    setEnteredInp({ ...enteredInp, [event.target.name]: event.target.value });
  };

  const loginHandler = () => {
    console.log(enteredInp);
    setEnteredInp({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container flex flex-col mx-auto justify-center items-center mt-16 ">
        <div className="top-layer mb-2">
          <img className="w-60" src={logo} alt="FB Logo" />
        </div>
        <div className="bottom-layer bg-white flex flex-col py-6 px-4 border border-1 border-gray-100 rounded-lg w-1/3 shadow-xl">
          <p className="text-center text-lg mb-3 font-semibold">
            Log in to Facebook
          </p>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email address or phone number"
            className="px-4 h-14 my-2 rounded-md border border-1 border-gray-200 text-lg outline-none"
            onChange={onChangeHandler}
            value={enteredInp.email}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Passsword"
            className="px-4 h-14 my-2 rounded-md border border-1 border-gray-200 text-lg outline-none"
            onChange={onChangeHandler}
            value={enteredInp.password}
          />

          <button
            onClick={loginHandler}
            className="bg-blue-600 rounded-md py-3 text-white text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>
          <div className="flex justify-center my-4">
            <span className="text-blue-500 mr-1 hover:underline cursor-pointer">
              Forgotten account?
            </span>
            <span className="text-blue-500 ml-1 hover:underline cursor-pointer">
              Sign up for Facebook
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
