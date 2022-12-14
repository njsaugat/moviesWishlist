import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GetMovie from './movies/GetMovie';

const DisplayMovies = ({
  movies,
  searchTerm,
  title = true,
  ShowRandomMovie,
  randomMovie,
}) => {
  const [showDiv, setShowDiv] = useState(true);
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center w-screen pb-10 m-0 bg-gradient-to-r from-slate-700 to-slate-900">
        {randomMovie && randomMovie.length > 0 && (
          <>
            <div className="flex items-center justify-center">
              <h1 className="mx-3 text-xl font-bold tracking-wider">
                A Random Movie for you{' '}
              </h1>
              {ShowRandomMovie && (
                <div>
                  <ShowRandomMovie />
                </div>
              )}
            </div>

            <div className="relative w-40 mt-5 h-72 rounded-xl">
              <GetMovie movie={randomMovie[0]} />
            </div>
          </>
        )}
        <div className="flex items-center justify-center">
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
          {ShowRandomMovie && showDiv && (
            <div
              className="px-10 mt-8 mb-5 "
              onClick={(e) => {
                setShowDiv(false);
              }}
            >
              <ShowRandomMovie />
            </div>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-center w-screen h-full m-0 gap-7 ">
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
