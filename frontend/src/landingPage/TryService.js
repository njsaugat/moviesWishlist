import React from 'react';
import { Link } from 'react-router-dom';
const TryService = () => {
  return (
    <>
      <div class="custom-shape-divider-top-1669726171">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col md:flex-row relative p-10 md:p-20  justify-between items-center  bg-gradient-to-r from-slate-700 to-slate-900 ">
        <div className="left w-full lg:w-3/5 pt-10">
          <h1 className="font-bold text-5xl my-8  leading-tight md:leading-snug">
            Let’s start your movies wishlist now!
          </h1>
          <span className="text-gray-400 w-11/12">
            Find the right house over the wide rande of houses.
          </span>
          <br />
          <Link to="/signup">
            <button className="py-3 px-5 my-10 bg-gradient-to-t from-purple-500 to-purple-100  rounded-lg text-black hover:shadow-xl hover:scale-105 transition-all duration-300">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="right boxes images w-11/12 lg:w-2/5  h-36 flex items-center ">
          <div className="box first w-1/4 border-2 h-full "></div>
          <div className="box second w-1/2 border-2 h-44  "></div>
          <div className="box third w-1/4 border-2 h-full"></div>
        </div>
      </div>
    </>
  );
};

export default TryService;
