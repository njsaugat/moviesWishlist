import React, { useContext, useEffect, useState } from 'react';
import { LoggedInContext } from '../App';
import DisplayMovies from '../DisplayMovies';
import GetMovie from './GetMovie';
import { getMovie } from './getMovies';

const MoviesWishlist = () => {
  const { moviesWishlistIds } = useContext(LoggedInContext);
  console.log(moviesWishlistIds);
  const [moviesWishlist, setMoviesWishlist] = useState([{}]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    (async () => {
      if (moviesWishlistIds.length > 0) {
        moviesWishlistIds.map(async (movieWishlistId) => {
          const movie = await getMovie(movieWishlistId);
          setMoviesWishlist((prevList) => [...prevList, movie]);
        });
        setLoading(false);
        // const movie = await getMovie(moviesWishlistIds[0]);
        // console.log(movie);
        // setMoviesWishlist((prevList) => [...prevList, movie]);
      }
    })();
    return () => setMoviesWishlist([{}]);
  }, [moviesWishlistIds]);
  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-tr from-slate-400 to-slate-700 ">
        Loading
      </div>
    );
  }
  console.log(moviesWishlist);
  //   return moviesWishlist.map((movie) => {
  //     // return <GetMovie movie={movie} />;
  // });
  return <DisplayMovies movies={moviesWishlist} title={false} />;
};

export default MoviesWishlist;
