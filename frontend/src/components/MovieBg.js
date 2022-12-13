import React, { useState } from 'react';
import GetMovie from '../movies/GetMovie';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import AddReminder from './AddReminder';

const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
const DESCRIPTION_MAX_LENGTH = 100;
const bellIcon = <FontAwesomeIcon icon={faBell} />;

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
        {/* <Link
          to={`/movie/${id}`}
          className="absolute object-cover mb-4 -translate-x-1/2 -translate-y-1/2 rounded w-44 h-80 left-1/2 top-2/3 md:left-1/4 md:-translate-x-3/4 md:top-1/4 md:translate-y-3/4"
        > */}
        <img
          src={IMAGE_URL + movie.poster_path}
          alt=""
          srcSet=""
          className="absolute object-cover mb-4 -translate-x-1/2 -translate-y-1/2 rounded-2xl w-44 h-80 left-1/2 top-2/3 md:left-1/4 md:-translate-x-3/4 md:top-1/4 md:translate-y-3/4"
          lazy="loading"
        />
        {/* <div className="absolute w-40 transition-all duration-300 h-72 ">
            <GetMovie movie={movie} movieId={false} />
          </div> */}
        {/* <GetMovie movie={movie} movieId={false} /> */}
        {/* </Link> */}

        <div className="absolute flex flex-col flex-wrap w-full text-white bottom-10 md:w-96 lg:w-auto lg:break-words md:left-1/3 md:bottom-1/3 md:translate-y-1/2 md:justify-start md:px-10 ">
          <span className="text-3xl font-bold leading-10 tracking-wider md:text-5xl">
            {movie.title}
          </span>
          {/* <span className="absolute right-10">{bellIcon}</span> */}
          <span className="hidden mt-4 md:block">
            {/* {picturePointer
              ? movie.overview.substring(0, DESCRIPTION_MAX_LENGTH) + '...'
              : movie.overview} */}
            {movie.overview.substring(0, DESCRIPTION_MAX_LENGTH) + '...'}
          </span>
          {/* <button className="self-start w-10 h-10 p-2 mt-4 text-black transition-all rounded-full hover:w-20 bg-gradient-to-t from-purple-200 to-purple-500">
             <span className="hidden reminder"> Set Reminder</span>
            {bellIcon}
            Add to Wishlist
          </button> */}
        </div>
        {ShowIcons}
      </Link>
      {/* picturePointer--> first page */}
      {
        <div
          // ref={lineRef}
          className={` ${
            picturePointer === index ? 'active' : ''
          }  w-full  h-3  absolute bottom-0 line`}
        ></div>
      }
    </div>
  );
};

export default MovieBg;
