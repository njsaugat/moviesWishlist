import React from 'react';
import { useLocation } from 'react-router-dom';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

export default function ShowMovie() {
  const movieLink = useLocation();
  const movie = movieLink.state;
  return (
    <div className="contain w-screen h-screen flex justify-center items-center">
      <div className="movie-entire  h-full flex flex-col lg:flex-row mt-20 justify-center items-center w-11/12  ">
        <div className="left-image w-full md:w-1/2 m-4 h-full flex justify-center">
          <img
            src={IMAGE_URL + movie.backdrop_path}
            className="w-3/5 object-cover mb-0 h-3/4"
            alt=""
            srcSet=""
            loading="lazy"
          />
        </div>
        <div className="right-detail md:w-1/2 my-2 mx-4 text-white ">
          <h1 className="mt-2 font-bold text-5xl mb-5">{movie.title}</h1>
          <div className="overview leading-8 text-xl">{movie.overview}</div>
          <div className="release-date my-6 mx-0 italic">
            {movie.release_date}
          </div>
          <div className="rating flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 text-black">
            {movie.vote_average}
          </div>
        </div>
      </div>
    </div>
  );
}
