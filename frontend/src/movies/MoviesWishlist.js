import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { LoggedInContext } from '../App';
import Loading from '../components/Loading';
import DisplayMovies from '../DisplayMovies';
import { getMovie } from './getMovies';

const MoviesWishlist = () => {
  document.title = 'Wishlist | CineWish ';
  const randomIcon = <FontAwesomeIcon icon={faShuffle} />;

  const { moviesWishlistIds } = useContext(LoggedInContext);
  console.log(moviesWishlistIds);
  let randomId =
    moviesWishlistIds[
      Math.ceil(Math.random() * (moviesWishlistIds.length - 1))
    ];
  console.log(randomId);
  console.log('');
  const [moviesWishlist, setMoviesWishlist] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [randomMovie, setRandomMovie] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    (async () => {
      if (moviesWishlistIds.length > 0) {
        moviesWishlistIds.map(async (movieWishlistId) => {
          const movie = await getMovie(movieWishlistId);
          setMoviesWishlist((prevList) => [...prevList, movie]);
        });
        setLoading(false);
      }
    })();
    return () => setMoviesWishlist([{}]);
  }, [moviesWishlistIds]);
  if (loading) {
    return <Loading />;
  }
  console.log(moviesWishlist);
  const ShowRandomMovie = () => {
    return (
      <button
        className="flex items-center self-start justify-center w-10 h-10 p-2 mr-2 text-black transition-all duration-300 rounded-full random-movie hover:w-48 notification bg-gradient-to-t from-purple-200 to-purple-500"
        onClick={() => {
          setRandomMovie(() => {
            console.log(
              moviesWishlist.filter((movie) => movie.id === randomId)
            );
            return moviesWishlist.filter((movie) => movie.id === randomId);
          });
        }}
      >
        <span className={`reminder hidden pr-3`}>Random Select</span>
        <span>{randomIcon}</span>
      </button>
    );
  };

  return (
    <>
      {console.log(randomMovie)}
      {/* {randomMovie.length > 0 && <GetMovie movie={randomMovie[0]} />} */}
      <DisplayMovies
        movies={moviesWishlist}
        title={false}
        ShowRandomMovie={ShowRandomMovie}
        randomMovie={randomMovie}
      ></DisplayMovies>
      ;
    </>
  );
};

export default MoviesWishlist;
