import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import GetMovie from '../GetMovie';
import ShowMovies from '../ShowMovies';
import getMovies, {
  getGenres,
  getPopularMovies,
  getTopMovies,
  getTrendingMovies,
} from './getMovies';
import {
  faAngleDown,
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MovieBg from '../components/MovieBg';
import ScrollMovie from '../components/ScrollMovie';
// import { getTrendingMovies } from './getTrendingMovies';
// import getMovies from './getMovies';
// import getMovies from 'getMovies';

// const moviesList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const moviesSlider = [1, 2, 3, 4, 5];
const showMoreIcon = <FontAwesomeIcon icon={faAngleDown} />;
const leftIcon = <FontAwesomeIcon icon={faAngleLeft} />;
const rightIcon = <FontAwesomeIcon icon={faAngleRight} />;

const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
const relativeImageSize = 215;
const DESCRIPTION_MAX_LENGTH = 100;
const Home = () => {
  const [picturePointer, setPicturePointer] = useState(0);
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([{}]);
  const [popularMovies, setPopularMovies] = useState([{}]);
  const [searchTerm, setSearchTerm] = useState('');
  const [genres, setGenres] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [moviesList,setMoviesList]=useState([{}]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [showItems, setShowItems] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const lineRef = useRef(null);
  // const movieLink = useLocation();

  const ShowIcons = () => {
    return (
      <>
        <span
          className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer top-1/2 left-1 bg-gradient-to-t from-slate-600 to-slate-800"
          onClick={(e) => {
            setPicturePointer((prevPointer) => {
              return prevPointer < popularMovies.length - 1
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
                : popularMovies.length - 1;
            });
            // document.body.querySelector('.line').style.width =
            //   '0px';
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
      const moviesData = await getMovies(searchTerm);
      setMovies(moviesData);
      setTrendingMovies(await getTrendingMovies());
      setPopularMovies(await getPopularMovies());
      setPopularMovies(await getPopularMovies());
      setGenres(await getGenres());
      setTopMovies(await getTopMovies());
      setLoading(false);
    })();
  }, [searchTerm]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
      setShowMore(false);
      setShowItems(Math.ceil(windowSize / relativeImageSize));
      // if (windowSize >= 850) {
      //   // setShowMenu(false);
      // }
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
      //   picturePointer++;
      setPicturePointer((prevPointer) => {
        // return prevPointer < moviesSlider.length - 1 ? prevPointer + 1 : 0;
        return prevPointer < popularMovies.length - 1 ? prevPointer + 1 : 0;
      });
      //   setPicturePointer(pre);
    }
    let interval = setInterval(changePicture, 5000);
    return () => clearInterval(interval);
  }, [picturePointer, popularMovies.length]);
  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-tr from-slate-400 to-slate-700 ">
        Loading
      </div>
    );
  }
  console.log(genres);
  return (
    <>
      {/* <div className="mix-blend-screen">
      </div> */}
      {/* <ShowMovies /> */}
      {/* for auto slide */}

      <div className="relative flex flex-col w-screen min-h-screen text-white bg-gradient-to-r from-slate-700 to-slate-900">
        <div className="absolute z-10 ">
          <Navbar transparent={true} />
        </div>
        <div className="w-full h-full ">
          <div className="relative flex h-screen auto-slide">
            {popularMovies.map((movie, index) => {
              return (
                <MovieBg
                  movie={movie}
                  index={index}
                  picturePointer={picturePointer}
                  ShowIcons={<ShowIcons />}
                  // <ShowIcons/>
                >
                  {/* <ShowIcons /> */}
                </MovieBg>
                // <div
                //   className={`${
                //     picturePointer === index ? 'opacity-1' : 'opacity-0'
                //   } w-screen h-full  absolute  transition-all duration-300  movie-background`}
                //   style={{
                //     backgroundImage: `url(${IMAGE_URL + movie.backdrop_path})`,
                //   }}
                // >
                //   <div className="flex justify-between w-screen ">

                //     <div>
                //       <img
                //         src={IMAGE_URL + movie.poster_path}
                //         alt=""
                //         srcSet=""
                //         className="absolute object-cover mb-4 -translate-x-1/2 -translate-y-1/2 rounded  w-44 h-80 left-1/2 top-2/3 md:left-1/4 md:-translate-x-3/4 md:top-1/4 md:translate-y-3/4"
                //         lazy="loading"
                //       />
                //     </div>

                //     <div className="absolute flex flex-col flex-wrap w-full text-white bottom-10 md:w-96 lg:w-auto lg:break-words md:left-1/3 md:bottom-1/3 md:translate-y-1/2 md:justify-start md:px-10 ">
                //       <span className="text-3xl font-bold leading-10 tracking-wider md:text-5xl">
                //         {movie.title}
                //       </span>
                //       <span className="mt-4">
                //         {movie.overview.substring(0, DESCRIPTION_MAX_LENGTH) +
                //           '...'}
                //       </span>
                //     </div>
                //     <ShowIcons />
                //   </div>
                //   <div
                //     ref={lineRef}
                //     className={` ${
                //       picturePointer === index ? 'active' : ''
                //     }  w-full  h-3  absolute bottom-0 line`}
                //   ></div>
                // </div>
              );
            })}
          </div>
        </div>
        {/* for hover: */}

        <h1 className="px-10 mt-5 text-2xl ">Popular Movies</h1>
        <ScrollMovie movies={movies} />
        {/* <div className="flex self-center w-11/12 overflow-x-auto container-movies h-96">
          <div className="flex items-center justify-center gap-4  flex-nowrap">
            {movies.map((movie) => {
              return (
                <div className="w-40 transition-all duration-300  h-72 hover:w-72">
                  <GetMovie movie={movie} />
                </div>
              );
            })}
          </div>
        </div> */}

        <h1 className="px-10 mt-10 mb-1 text-2xl ">Trending Movies</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap items-center w-screen gap-5 px-10 mt-2 ">
            {trendingMovies.map((movie, index) => {
              return (
                index < showItems && (
                  <>
                    <div className="relative w-40  h-72 rounded-xl">
                      <GetMovie movie={movie} />
                      {/* <span className="absolute z-10 text-5xl font-bold text-transparent -right-6 -top-5 bg-clip-text bg-gradient-to-t from-slate-600 to-slate-300">
                      0{index + 1}
                    </span> */}
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
              // setShowItems((prevItems) => prevItems * 2);
              setShowItems(trendingMovies.length);
              setShowMore(true);
              // document.body.querySelector('.show-more').style.transform =
              //   'rotate(180deg)';
              // e.target.style.display = 'none';
              // e.target.remove();
            }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-2xl  show-more bg-gradient-to-t from-slate-400 to-slate-600">
              {showMoreIcon}
            </div>
          </div>
        </div>

        <h1 className="px-10 mt-10 mb-1 text-2xl ">Trending Movies</h1>
        <div className="flex self-center w-11/12 overflow-x-auto container-movies">
          <div className="flex items-center justify-center gap-4  flex-nowrap mb-14">
            {trendingMovies.map((movie, index) => {
              return (
                index < 10 && (
                  <div className="flex items-center justify-center h-40  w-72 rounded-xl">
                    <span className="z-10 font-bold text-transparent  text-8xl bg-clip-text bg-gradient-to-l from-slate-600 to-slate-200">
                      {index + 1}
                    </span>
                    <GetMovie movie={movie} />
                  </div>
                  // <div className="relative w-40  h-72 rounded-xl">
                  //   <GetMovie movie={movie} />
                  //   <span className="absolute z-10 text-5xl font-bold text-transparent -right-6 -top-5 bg-clip-text bg-gradient-to-t from-slate-600 to-slate-300">
                  //     0{index + 1}
                  //   </span>
                  // </div>
                )
              );
            })}
          </div>
        </div>
        <div className="flex flex-wrap gap-5 m-10">
          {genres.map((genre) => {
            return (
              <div className="flex items-center justify-center transition-all shadow-2xl cursor-pointer w-28 h-28 bg-gradient-to-r from-slate-800 to-slate-600 hover:bg-gradient-to-tr hover:from-slate-500 hover:to-slate-800">
                {genre.name}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-center w-screen min-h-screen gap-5 mb-10">
          {topMovies.map((movie) => {
            return (
              <div className="relative w-40  h-72 rounded-xl">
                <GetMovie movie={movie} />
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
