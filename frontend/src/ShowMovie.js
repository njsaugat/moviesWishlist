import React from 'react';
import { useLocation } from 'react-router-dom';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

export default function ShowMovie() {
  const movieLink = useLocation();
  const movie = movieLink.state;
  return (
    <div className="movie-entire">
      <div className="left-image">
        <img
          src={IMAGE_URL + movie.backdrop_path}
          alt=""
          srcSet=""
          loading="lazy"
        />
      </div>
      <div className="right-detail">
        <h1>{movie.title}</h1>
        <div className="overview">{movie.overview}</div>
        <div className="release-date">{movie.release_date}</div>
        <div className="rating">{movie.vote_average}</div>
      </div>
    </div>
  );
}
