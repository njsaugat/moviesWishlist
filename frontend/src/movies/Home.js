import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import GetMovie from './GetMovie';
import {
  getGenres,
  getTopMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from './getMovies';
import {
  faAngleDown,
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MovieBg from '../components/MovieBg';
import { useNavigate } from 'react-router-dom';
import ScrollMovie from '../components/ScrollMovie';
import Loading from '../components/Loading';
const showMoreIcon = <FontAwesomeIcon icon={faAngleDown} />;
const leftIcon = <FontAwesomeIcon icon={faAngleLeft} />;
const rightIcon = <FontAwesomeIcon icon={faAngleRight} />;

const relativeImageSize = 215;
const Home = () => {
  document.title = 'Home | CineWish ';

  const [picturePointer, setPicturePointer] = useState(0);
  const [trendingMovies, setTrendingMovies] = useState([{}]);
  const [upcomingMovies, setUpcomingMovies] = useState([{}]);
  const [genres, setGenres] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [showItems, setShowItems] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const lineRef = useRef(null);
  const navigate = useNavigate();

  const ShowIcons = () => {
    return (
      <>
        <span
          className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer top-1/2 left-1 bg-gradient-to-t from-slate-600 to-slate-800"
          onClick={(e) => {
            setPicturePointer((prevPointer) => {
              return prevPointer < upcomingMovies.length - 1
                ? prevPointer + 1
                : 0;
            });
            document.body.querySelector('.line').style.transform = 'scaleX(0)';
          }}
        >
          {leftIcon}
        </span>
        <span
          className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer top-1/2 right-4 bg-gradient-to-t from-slate-600 to-slate-800"
          onClick={(e) => {
            setPicturePointer((prevPointer) => {
              return prevPointer > 0
                ? prevPointer - 1
                : upcomingMovies.length - 1;
            });
            lineRef.current.style.animation = 'grow 4s linear infinite';
          }}
        >
          {rightIcon}
        </span>
      </>
    );
  };

  useEffect(() => {
    (async () => {
      // const results = await fetch('/movies-wishlist');
      // console.log(results);
      // const moviesId = await results.json();
      // console.log(moviesId);
      setTrendingMovies(await getTrendingMovies());
      setUpcomingMovies(await getUpcomingMovies());
      setGenres(await getGenres());
      setTopMovies(await getTopMovies());
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
      setShowMore(false);
      setShowItems(Math.ceil(windowSize / relativeImageSize));
    }
    handleWindowResize();
    console.log(windowSize);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize]);
  useEffect(() => {
    function changePicture() {
      setPicturePointer((prevPointer) => {
        return prevPointer < trendingMovies.length - 1 ? prevPointer + 1 : 0;
      });
    }
    let interval = setInterval(changePicture, 5000);
    return () => clearInterval(interval);
  }, [picturePointer, trendingMovies.length]);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="relative flex flex-col w-screen min-h-screen text-white bg-gradient-to-r from-slate-700 to-slate-900">
        <div className="absolute z-10 ">
          <Navbar transparent={true} />
        </div>
        <div className="w-full h-full ">
          <div className="relative flex h-screen auto-slide">
            {trendingMovies.map((movie, index) => {
              return (
                <MovieBg
                  movie={movie}
                  id={movie.id}
                  index={index}
                  picturePointer={picturePointer}
                  ShowIcons={<ShowIcons />}
                ></MovieBg>
              );
            })}
          </div>
        </div>

        <h1 className="px-10 mt-5 text-2xl font-bold translate-y-5 ">
          Upcoming Movies
        </h1>

        <ScrollMovie movies={upcomingMovies} />

        <h1 className="px-10 mt-10 mb-5 text-2xl font-bold ">
          Top Rated Movies
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap items-center justify-center w-screen gap-5 px-10 mt-2 ">
            {topMovies.map((movie, index) => {
              return (
                index < showItems && (
                  <>
                    <div className="relative w-40 h-72 rounded-xl">
                      <GetMovie movie={movie} />
                    </div>
                  </>
                )
              );
            })}
          </div>
          <div
            className={`${
              showMore && 'hidden'
            } w-full cursor-pointer flex justify-center items-center h-14 hover:bg-slate-700 mt-5 `}
            onClick={(e) => {
              setShowItems(topMovies.length);
              setShowMore(true);
            }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-2xl show-more bg-gradient-to-t from-slate-400 to-slate-600">
              {showMoreIcon}
            </div>
          </div>
        </div>

        <h1 className="px-10 mt-10 mb-5 text-2xl font-bold ">
          Trending Movies
        </h1>
        <div className="flex self-center w-11/12 overflow-x-auto container-movies">
          <div className="flex items-center justify-center gap-4 flex-nowrap mb-14">
            {trendingMovies.map((movie, index) => {
              return (
                index < 10 && (
                  <div className="flex items-center justify-center h-40 w-72 rounded-xl">
                    <span className="z-10 font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-l from-slate-600 to-slate-200">
                      {index + 1}
                    </span>
                    <GetMovie movie={movie} />
                  </div>
                )
              );
            })}
          </div>
        </div>
        <h1 className="px-10 mt-5 text-2xl font-bold translate-y-5 ">
          Select a Genre
        </h1>
        <div className="flex flex-wrap items-center justify-center w-full gap-5 my-10 ">
          {genres.map((genre) => {
            return (
              <div
                className="flex items-center justify-center transition-all shadow-2xl cursor-pointer w-28 h-28 bg-gradient-to-r from-slate-800 to-slate-600 hover:bg-gradient-to-tr hover:from-slate-500 hover:to-slate-800"
                onClick={(e) => {
                  navigate(`/movies/genre/${genre.name}/${genre.id}`);
                }}
              >
                {genre.name}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
