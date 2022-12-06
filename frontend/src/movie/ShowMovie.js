import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import MovieBg from '../components/MovieBg';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../components/Navbar';
import { getMovie } from '../movies/getMovies';
import { getCast, getSimilarMovies } from './getCast';
import ScrollMovie from '../components/ScrollMovie';

const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

const starIcon = <FontAwesomeIcon icon={faStar} />;

export default function ShowMovie() {
  // const movieLink = useLocation();
  // const movie = movieLink.state;
  // console.log(movie);
  const [movie, setMovie] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([{}]);
  const [similarMovies, setSimilarMovies] = useState([{}]);
  console.log(similarMovies);
  const params = useParams();
  useEffect(() => {
    (async () => {
      setMovie(await getMovie(params.id));
      setCast(await getCast(params.id));
      setSimilarMovies(await getSimilarMovies(params.id));
      setLoading(false);
    })();
  }, [params.id]);
  // return (
  //   <div className="flex items-center justify-center w-screen min-h-screen contain bg-gradient-to-r from-slate-700 to-slate-900">
  //     {/* <div className="flex flex-col items-center justify-center w-11/12 h-full mt-20 movie-entire lg:flex-row ">
  //       <div className="flex justify-center w-full h-full m-4 left-image md:w-1/2">
  //         <img
  //           src={IMAGE_URL + movie.backdrop_path}
  //           className="object-cover w-3/5 mb-0 h-3/4"
  //           alt=""
  //           srcSet=""
  //           loading="lazy"
  //         />
  //       </div>
  //       <div className="mx-4 my-2 text-white right-detail md:w-1/2 ">
  //         <h1 className="mt-2 mb-5 text-5xl font-bold">{movie.title}</h1>
  //         <div className="text-xl leading-8 overview">{movie.overview}</div>
  //         <div className="mx-0 my-6 italic release-date">
  //           {movie.release_date}
  //         </div>
  //         <div className="flex items-center justify-center w-12 h-12 text-black bg-yellow-400 rounded-full rating">
  //           {movie.vote_average}
  //         </div>
  //       </div>
  //     </div> */}
  //     {/* <MovieBg movie={movie} /> */}

  //   </div>
  // );
  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-tr from-slate-400 to-slate-700 ">
        Loading
      </div>
    );
  }
  return (
    <>
      <div
        className={`w-screen min-h-screen  movie-background  `}
        style={{
          backgroundImage: `url(${IMAGE_URL + movie.backdrop_path})`,
        }}
      >
        <div className="absolute z-10 ">
          <Navbar transparent={true} />
        </div>
        <div className="relative flex flex-col items-center justify-center w-screen h-screen md:flex-row md:justify-evenly gap-x-10 translate-y-1/4">
          <div className="flex items-center justify-center w-full md:w-1/3 ">
            <img
              src={IMAGE_URL + movie.poster_path}
              alt=""
              srcSet=""
              // className="absolute object-cover mb-4 -translate-x-1/2 -translate-y-1/2 rounded w-44 h-80 left-1/2 top-2/3 md:left-1/4 md:-translate-x-3/4 md:top-1/4 md:translate-y-3/4"
              className="object-cover w-64 transition-all shadow-2xl h-96 rounded-2xl hover:scale-105"
              lazy="loading"
            />
          </div>
          <div className="flex flex-col justify-center w-11/12 md:w-2/3 lg:pr-32">
            <span className="self-start text-3xl font-bold leading-10 tracking-wider md:text-5xl ">
              {movie.title}
            </span>
            <div className="flex flex-wrap my-5 meta-data gap-x-10">
              <div className="rating">
                <span className="mr-1 text-yellow-400 text-shadow">
                  {starIcon}
                </span>
                <span>{movie.vote_average.toFixed(2)} | </span>
                <span className="text-slate-400">{movie.vote_count}</span>
              </div>
              <div className="length">{`${parseInt(movie.runtime / 60)} hr ${
                movie.runtime % 60
              } min `}</div>
              <div className="flex genres gap-x-3">
                {movie.genres.map((genre) => {
                  return (
                    <div className="" key={genre.id}>
                      {genre.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-5">{movie.overview}</div>
            <div className="mx-0 my-6 italic release-date">
              {movie.release_date.substring(0, 4)}
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen pl-5 md:pl-10 lg:pl-16 py-36 bg-gradient-to-t from-slate-700 to-slate-900 md:py-0">
        <h1 className="py-5 text-2xl font-bold">Cast</h1>
        <div className="flex items-center w-11/12 overflow-x-auto container-movies">
          <div className="flex items-center justify-center gap-5 flex-nowrap">
            {cast.map((actor, index) => {
              return (
                index < 20 && (
                  <div className="w-40 h-72">
                    {/* <GetMovie movie={movie} /> */}
                    <img
                      src={IMAGE_URL + actor.profile_path}
                      alt=""
                      className="rounded-2xl"
                    />
                    <div>{actor.original_name}</div>
                  </div>
                )
              );
            })}
          </div>
        </div>
        {similarMovies && <ScrollMovie movies={similarMovies} />}
      </div>
    </>
  );
}
