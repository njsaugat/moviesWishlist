import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
// import { Axios } from 'axios';
import axios, * as others from 'axios';
import { createPortal } from 'react-dom';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
const yearCount = 4;
const wishIcon = <FontAwesomeIcon icon={faHeart} beat />;
export default function GetMovie({ movie }) {
  const [movieLiked, setMovieLiked] = useState(false);
  const [movieAdded, setMovieAdd] = useState(null);
  const ShowMovieAddedFeedBack = () => {
    setTimeout(() => {
      if (document.querySelector('.movie-feedback')) {
        document.querySelector('.movie-feedback').remove();
      }
    }, 3000);
    return createPortal(
      <div className="fixed z-50 flex justify-center w-56 p-3 tracking-wide text-black rounded-lg movie-feedback bottom-5 right-5 bg-slate-200 ">
        Movie was {movieAdded ? 'added' : 'not added'}
      </div>,
      document.getElementById('portal3')
    );
  };

  return (
    // <div className="relative flex items-center justify-center w-11/12 rounded-lg cursor-pointer movie md:w-full ">
    <>
      <Link
        className="relative flex items-center justify-center w-full h-full rounded-lg cursor-pointer movie "
        to={`/movie/${movie.id}`}
        state={movie}
      >
        <img
          // src={IMAGE_URL + movie.backdrop_path}
          src={IMAGE_URL + movie.poster_path}
          alt=""
          srcSet=""
          className="object-cover w-full h-full mb-0 shadow-2xl lg:w-96 rounded-2xl"
          lazy="loading"
        />
        <div className="absolute top-0 flex justify-end w-full wish-icon-top">
          <span
            className={`${
              movieLiked ? 'text-red-600' : 'text-white'
            } self-end pt-1 pr-2 text-xl text-white opacity-0 wish-icon`}
            onClick={(e) => {
              console.log(movieLiked);
              setMovieLiked(true);
              e.preventDefault();
              e.target.classList.add('text-red-600');
              axios
                .post('/add-movie', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'mutlipart/form-data',
                  },
                  body: {
                    movieId: movie.id,
                  },
                })
                .then((res) => {
                  console.log(res.data.movieAdded);
                  if (res.data.movieAdded) {
                    return setMovieAdd(true);
                  }
                  return setMovieAdd(false);
                });
              // e.target.classList.remov
              // e('beat');
            }}
          >
            {wishIcon}
          </span>
        </div>
        <div className="flex items-center justify-center details ">
          <div className="flex flex-col items-start justify-center left">
            <span className="mb-3 font-bold tracking-wider name">
              {movie.title}
            </span>
            <span className="likes">
              {/* {movie.release_date.substr(0, yearCount)}{' '} */}
            </span>
          </div>
          <div className="right"></div>
        </div>
      </Link>
      {(movieAdded === true || movieAdded === false) && (
        <ShowMovieAddedFeedBack />
      )}
    </>
  );
}
