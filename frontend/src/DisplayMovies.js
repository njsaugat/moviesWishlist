import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GetMovie from './movies/GetMovie';

const DisplayMovies = ({ movies, searchTerm, title = true }) => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center w-screen pb-10 m-0 bg-gradient-to-r from-slate-700 to-slate-900">
        {/* <div
        className="search-bar "
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
        <h1
          className={`px-10 mt-10 mb-5 text-2xl ${
            movies.length <= 0 && 'md:mb-32 lg:mb-56'
          }`}
        >
          {title ? (
            <>{movies.length > 0 ? 'Search' : 'No'} Results for </>
          ) : (
            <>Your List of favorite movies !</>
          )}
          <span className="font-bold">{searchTerm}</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center w-screen h-full m-0 gap-7 ">
          {/* {movies.filter(movie=>movie.poster_path!=null)} */}
          {movies
            .filter((movie) => movie.poster_path != null)
            .map((movie) => {
              return (
                <>
                  <Link
                    to={`/movie/${movie.id}`}
                    key={movie.id}
                    state={movie}
                    className="relative w-40 h-72 rounded-xl"
                  >
                    <GetMovie movie={movie} />
                  </Link>
                  {/* {movieLink.state} */}
                </>
              );
            })}
        </div>
        {/* hello! */}
      </div>
      <Footer />
      {/* // </div> */}
    </>
  );
};

export default DisplayMovies;
