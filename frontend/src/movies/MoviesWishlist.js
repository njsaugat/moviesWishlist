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

  let { moviesWishlistIds, setMoviesWishlistIds } = useContext(LoggedInContext);

  let randomId =
    moviesWishlistIds &&
    moviesWishlistIds[
      Math.ceil(
        Math.random() * (moviesWishlistIds ? moviesWishlistIds.length - 1 : 20)
      )
    ];
  console.log(randomId);
  console.log('');
  const [moviesWishlist, setMoviesWishlist] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [randomMovie, setRandomMovie] = useState([]);
  // const [moviesWishlistId, setMoviesWishlistId] = useState(
  //   moviesWishlistIds ? moviesWishlistIds : []
  // );

  // useEffect(() => {
  //   async function getIds() {
  //     const results = await fetch('/api/movies-wishlist-ids', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //     });
  //     console.log(results);
  //     const moviesId = await results.json();
  //     console.log(moviesId);
  //     setMoviesWishlistIds(moviesId);
  //     sessionStorage.setItem('movieIds', JSON.stringify(moviesId));
  //     // moviesWishlistIds = moviesWishlistIds ? moviesWishIds : moviesWishlistIds;
  //   }
  //   // console.log(typeof moviesWishlistIds);
  //   if (!moviesWishlistIds) {
  //     getIds();
  //     console.log('getIds ');
  //     // let moviesWishIds = JSON.parse(sessionStorage.getItem('movieIds'));
  //     // setMoviesWishlistIds(moviesWishIds);
  //   }

  //   return () => setMoviesWishlistIds([]);
  // }, [moviesWishlistIds, setMoviesWishlistIds]);
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
    // return () => setMoviesWishlist([{}]);
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
