import { Link, useNavigate } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import axios, * as others from 'axios';
import { LoggedInContext } from '../App';
import ShowFeedback from '../components/ShowFeedback';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
const wishIcon = <FontAwesomeIcon icon={faHeart} beat />;
export default function GetMovie({ movie, movieId = true }) {
  const { moviesWishlistIds, loggedIn } = useContext(LoggedInContext);
  const navigate = useNavigate();

  const [movieLiked, setMovieLiked] = useState(false);
  const [movieAddedFeedback, setMovieAdd] = useState(null);

  if (
    moviesWishlistIds.length >= 0 &&
    moviesWishlistIds.includes(movie.id) &&
    document.getElementById(`${movie.id}`)
  ) {
    document.getElementById(`${movie.id}`).classList.add('active');
  }

  return (
    <>
      <Link
        className="relative flex items-center justify-center w-full h-full rounded-lg cursor-pointer movie "
        to={`/movie/${movie.id}`}
        state={movie}
      >
        <img
          src={IMAGE_URL + movie.poster_path}
          alt=""
          srcSet=""
          className="object-cover w-full h-full mb-0 shadow-2xl lg:w-96 rounded-2xl"
          lazy="loading"
        />
        <div className="absolute top-0 flex justify-end w-full wish-icon-top">
          <span
            className={` text-white self-end pt-1 pr-2 text-xl  opacity-0 wish-icon hover:text-red-600`}
            id={movieId ? movie.id : ''}
            onClick={(e) => {
              console.log(movieLiked);
              e.preventDefault();
              setMovieLiked(true);
              if (!loggedIn) {
                return navigate('/login');
              }
              if (!moviesWishlistIds.includes(movie.id)) {
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
                    console.log(res.data.movieAddedFeedback);
                    if (res.data.movieAddedFeedback) {
                      return setMovieAdd(true);
                    }
                    return setMovieAdd(false);
                  });
              }
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
            <span className="likes"></span>
          </div>
          <div className="right"></div>
        </div>
      </Link>
      {(movieAddedFeedback === true || movieAddedFeedback === false) && (
        <ShowFeedback
          movieFeedback={movieAddedFeedback}
          setMovieFeedback={setMovieAdd}
        />
      )}
    </>
  );
}
