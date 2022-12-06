import React from 'react';
import GetMovie from '../GetMovie';

const ScrollMovie = ({ movies }) => {
  console.log(movies);
  return (
    <div className="flex self-center w-11/12 overflow-x-auto container-movies h-96">
      <div className="flex items-center justify-center gap-4 flex-nowrap">
        {movies.map((movie) => {
          return (
            <div className="w-40 transition-all duration-300 h-72 hover:w-72">
              <GetMovie movie={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollMovie;
