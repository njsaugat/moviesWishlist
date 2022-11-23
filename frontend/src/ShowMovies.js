import React, { useEffect, useState } from 'react';
import getMovies from './GetMovies';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import GetMovie from './GetMovie';

const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
// function ShowSearchResults({ searchTerm }) {
//   return (
//     <div className="search-results">
//       {/* {`Search Results for`}  */}
//       <span>"{searchTerm.toUpperCase()}" </span>
//     </div>
//   );
// }
export default function ShowMovies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const movieLink = useLocation();
  useEffect(() => {
    (async () => {
      const moviesData = await getMovies(searchTerm);
      setMovies(moviesData);
    })();
  }, [searchTerm]);
  if (movies === null || movies.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <div className="search-bar">
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
      </div>
      {/* <ShowSearchResults searchTerm={'popular movies'} /> */}
      <div className="movies">
        {movies.map((movie) => {
          return (
            <>
              <Link to={`/movie/${movie.id}`} key={movie.id} state={movie}>
                {/* have to pass in the above place */}
                <GetMovie movie={movie} />
              </Link>
              {movieLink.state}
            </>
          );
        })}
      </div>
    </div>
  );
}
