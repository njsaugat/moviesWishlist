import React, { useEffect, useState } from 'react';
import getMovies from './movies/getMovies';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import GetMovie from './GetMovie';
import Landing from './landingPage/LandingPage';

const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
// function ShowSearchResults({ searchTerm }) {
//   return (
//     <div className="search-results text-gray-500 ">
//       {/* {`Search Results for`}  */}
//       <span className="text-black tracking-wide">"{searchTerm.toUpperCase()}" </span>
//     </div>
//   );
// }
export default function ShowMovies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const movieLink = useLocation();
  useEffect(() => {
    async function getMovies(searchTerm) {
      const api_key = 'api_key=4fa5f43351cf51f47e092aa8911cb098';
      const POPULAR_MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie/?${api_key}&sort_by=popularity.desc`;
      const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?${api_key}&query=${searchTerm}`;
      let API_URL;
      if (searchTerm) {
        API_URL = SEARCH_URL;
      } else {
        API_URL = POPULAR_MOVIE_API_URL;
      }
      const resultData = await fetch(API_URL, { accept: 'application/json' });
      const { results } = await resultData.json();
      setMovies(results);
      // return results;
    }
    getMovies();
    // (async () => {
    //   const moviesData = await getMovies(searchTerm);
    //   setMovies(moviesData);
    // })();
  }, [searchTerm]);

  if (movies === null || movies.length === 0) {
    return (
      <h1 className="font-bold flex items-center justify-center text-4xl mt-4">
        Loading...
      </h1>
    );
  }
  console.log(movies);
  return (
    <div className=" w-screen h-screen m-0 flex items-center justify-center flex-col  bg-gradient-to-tr from-gray-600 to-indigo-700">
      {/* <div
        className="search-bar 
       "
      >
        <input
          type="text"
          placeholder="Search Movies..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setSearchTerm(e.target.value);
              console.log(e.target.value);
              console.log(searchTerm);
              e.target.value = '';
            }
          }}
        />
        <span className="search">{searchIcon}</span>
      </div> */}
      <div className="movies w-screen  flex items-center justify-center gap-7 flex-wrap  md:w-full h-full  relative m-0 px-48">
        {movies.map((movie) => {
          return (
            <>
              <Link to={`/movie/${movie.id}`} key={movie.id} state={movie}>
                <GetMovie movie={movie} />
              </Link>
              {movieLink.state}
            </>
          );
        })}
      </div>
      {/* hello! */}
    </div>
    // </div>
  );
}
