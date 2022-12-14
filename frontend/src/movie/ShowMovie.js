import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  faStar,
  faAngleDown,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../components/Navbar';
import { getMovie } from '../movies/getMovies';
import {
  getCast,
  getRecommendedMovies,
  getReviews,
  getSimilarMovies,
  getVideos,
} from './getCast';
import ScrollMovie from '../components/ScrollMovie';
import YoutubeEmbed from '../components/YoutubeEmbed';
import Reviews from './Reviews';
import Footer from '../components/Footer';
import AddReminder from '../components/AddReminder';
import Loading from '../components/Loading';

const showMoreIcon = <FontAwesomeIcon icon={faAngleDown} />;
const shareIcon = <FontAwesomeIcon icon={faArrowUpRightFromSquare} />;
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
const starIcon = <FontAwesomeIcon icon={faStar} />;
const TOTAL_TRAILER = 1;
export default function ShowMovie() {
  document.title = 'CineWish ';

  const [movie, setMovie] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([{}]);
  const [similarMovies, setSimilarMovies] = useState([{}]);
  const [recommendedMovies, setRecommendedMovies] = useState([{}]);
  const [reviews, setReviews] = useState([{}]);
  const [videos, setVideos] = useState([{}]);
  const [showItems, setShowItems] = useState(1);
  const [showMore, setShowMore] = useState(false);

  const params = useParams();
  let trailerCount = 0;

  useEffect(() => {
    (async () => {
      setMovie(await getMovie(params.id));
      setCast(await getCast(params.id));
      setVideos(await getVideos(params.id));

      setReviews(await getReviews(params.id));
      setSimilarMovies(await getSimilarMovies(params.id));
      setRecommendedMovies(await getRecommendedMovies(params.id));
      setLoading(false);
    })();
  }, [params.id]);

  if (loading) {
    return <Loading />;
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
            <div className="mx-0 mt-6 mb-2 italic release-date">
              {movie.release_date.substring(0, 4)}
            </div>
            <AddReminder movieId={movie.id} />
          </div>
        </div>
      </div>

      <div className="w-screen py-56 pl-5 md:pl-10 lg:pl-36 bg-gradient-to-t from-slate-700 to-slate-900 md:py-0">
        <h1 className="py-5 text-2xl font-bold">Cast</h1>
        <div className="flex items-center w-11/12 overflow-x-auto container-movies">
          <div className="flex items-center justify-center gap-5 flex-nowrap">
            {cast.map((actor, index) => {
              return (
                index < 20 && (
                  <div className="w-40 h-72">
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

        {videos.map((video) => {
          // console.log(trailerCount);
          if (
            video.type.toLowerCase() === 'trailer' &&
            trailerCount < TOTAL_TRAILER
          ) {
            trailerCount++;
            return <YoutubeEmbed videoId={video.key} />;
          } else {
            return '';
          }
        })}
        {console.log(reviews)}
        {reviews.length > 0 && (
          <div className="relative py-5 transition-all duration-300 lg:mb-5">
            <h1 className="mb-5 text-2xl font-bold ">Reviews</h1>

            <Reviews reviews={reviews} showItems={showItems} />
            <div
              className={`${
                !showMore && 'active'
              } w-11/12 absolute -bottom-3 lg:-bottom-8  show-more-reviews cursor-pointer flex justify-center items-center h-14  mt-5 `}
              onClick={(e) => {
                if (!showMore) {
                  setShowItems(reviews.length);
                  setShowMore(true);
                } else {
                  setShowItems(1);
                  setShowMore(false);
                }
              }}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full shadow-2xl opacity-100 show-more bg-gradient-to-t from-slate-400 to-slate-600`}
              >
                <span className={showMore && 'rotate-180'}>{showMoreIcon}</span>
              </div>
            </div>
          </div>
        )}
        {!showMore && (
          <div className="flex flex-col items-center justify-center w-11/12 p-0 m-0">
            <h1 className="mt-10 mb-5 text-3xl font-bold text-center lg:mt-20 ">
              Don't wanna
              <span className="mx-2 text-transparent drop-shadow-md bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">
                READ
              </span>
              reviews?
              <span className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-500">
                WATCH
              </span>
              'EM{' '}
            </h1>
            <a
              href={`https://www.youtube.com/results?search_query=${movie.title}+review`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-5 py-3 my-10 text-black transition-all duration-300 rounded-lg bg-gradient-to-t from-purple-500 to-purple-100 hover:shadow-xl hover:scale-105 animate-pulse ">
                Watch Now {shareIcon}
              </button>
            </a>
          </div>
        )}
        <h1 className="text-2xl font-bold translate-y-8 ">Similar Movies</h1>
        {similarMovies && <ScrollMovie movies={similarMovies} />}
        <h1 className="mt-10 text-2xl font-bold translate-y-8 ">For YOU</h1>
        {recommendedMovies && <ScrollMovie movies={recommendedMovies} />}
      </div>
      <Footer />
    </>
  );
}
