import React from 'react';
import { Link } from 'react-router-dom';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

const TryService = ({ movieImgs }) => {
  console.log(movieImgs);
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
      <div className="relative flex flex-col items-center justify-between p-10 md:flex-row md:p-20 bg-gradient-to-r from-slate-700 to-slate-900 ">
        <div className="w-full pt-10 left lg:w-3/5">
          <h1 className="my-8 text-5xl font-bold leading-tight md:leading-snug">
            Let’s start your movies wishlist now!
          </h1>
          <span className="w-11/12 text-gray-400">
            Find the right movie over the wide range of movies.
          </span>
          <br />
          <Link to="/signup">
            <button className="px-5 py-3 my-10 text-black transition-all duration-300 rounded-lg bg-gradient-to-t from-purple-500 to-purple-100 hover:shadow-xl hover:scale-105">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="flex items-center w-11/12 right boxes images lg:w-2/5 h-36 ">
          <div
            className="w-1/4 h-full bg-center bg-no-repeat bg-cover border-2 box first"
            style={{ backgroundImage: `url(${IMAGE_URL + movieImgs[0]})` }}
          ></div>
          <div
            className="w-1/2 bg-center bg-no-repeat bg-cover border-2 box second h-44 "
            style={{ backgroundImage: `url(${IMAGE_URL + movieImgs[1]})` }}
          ></div>
          <div
            className="w-1/4 h-full bg-center bg-no-repeat bg-cover border-2 box third"
            style={{ backgroundImage: `url(${IMAGE_URL + movieImgs[2]})` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default TryService;
