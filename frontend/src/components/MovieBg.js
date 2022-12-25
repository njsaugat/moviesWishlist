import React from 'react';
import { Link } from 'react-router-dom';

const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
const DESCRIPTION_MAX_LENGTH = 100;

const MovieBg = ({ movie, id, index, picturePointer, ShowIcons }) => {
  return (
    <div
      to={`/movie/${id}`}
      className={`${
        picturePointer === index ? ' visible opacity-1' : ' invisible opacity-0'
      } w-screen h-full  absolute  transition-all duration-300  movie-background`}
      style={{
        backgroundImage: `url(${IMAGE_URL + movie.backdrop_path})`,
      }}
    >
      <Link to={`/movie/${id}`} className="flex justify-between w-screen ">
        <img
          src={IMAGE_URL + movie.poster_path}
          alt=""
          srcSet=""
          className="absolute object-cover mb-4 -translate-x-1/2 -translate-y-1/2 rounded-2xl w-44 h-80 left-1/2 top-2/3 md:left-1/4 md:-translate-x-3/4 md:top-1/4 md:translate-y-3/4"
          lazy="loading"
        />

        <div className="absolute flex flex-col flex-wrap w-full text-white bottom-10 md:w-96 lg:w-auto lg:break-words md:left-1/3 md:bottom-1/3 md:translate-y-1/2 md:justify-start md:px-10 ">
          <span className="text-3xl font-bold leading-10 tracking-wider md:text-5xl">
            {movie.title}
          </span>
          <span className="hidden mt-4 md:block">
            {movie.overview.substring(0, DESCRIPTION_MAX_LENGTH) + '...'}
          </span>
        </div>
      </Link>
      {ShowIcons}
      {
        <div
          className={` ${
            picturePointer === index ? 'active' : ''
          }  w-full  h-3  absolute bottom-0 line`}
        ></div>
      }
    </div>
  );
};

export default MovieBg;
