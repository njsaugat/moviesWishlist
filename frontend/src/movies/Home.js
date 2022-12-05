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
      <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-tr from-slate-400 to-slate-700 ">
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

      <div className="w-screen min-h-screen bg-gradient-to-r from-slate-700 to-slate-900 text-white relative flex flex-col text-white">
        <div className="absolute z-10 ">
          <Navbar transparent={true} />
        </div>
        <div className="w-full h-full   ">
          <div className="auto-slide  h-screen flex   relative">
            {popularMovies.map((movie, index) => {
              return (
                <div
                  className={`${
                    picturePointer === index ? 'opacity-1' : 'opacity-0'
                  } w-screen h-full  absolute  transition-all duration-300  movie-background`}
                  style={{
                    backgroundImage: `url(${IMAGE_URL + movie.backdrop_path})`,
                  }}
                  // style={{ backgroundColor: 'red' }}
                >
                  <div className="w-screen     flex justify-between  ">
                    {/* Movie{movie} */}
                    {/* <GetMovie movie={movie} /> */}
                    <div>
                      <img
                        // src={IMAGE_URL + movie.backdrop_path}
                        src={IMAGE_URL + movie.poster_path}
                        alt=""
                        srcSet=""
                        // className=" w-44 h-80 absolute rounded   object-cover mb-0  left-1/4 -translate-x-3/4  top-1/4 translate-y-3/4  "
                        className=" w-44 h-80 absolute rounded   object-cover   left-1/2 -translate-x-1/2  top-2/3 -translate-y-1/2  mb-4 md:left-1/4 md:-translate-x-3/4 md:top-1/4 md:translate-y-3/4"
                        // className=" w-44 h-80 absolute rounded   object-cover   flex items-center jus"
                        lazy="loading"
                      />
                    </div>
                    {/* <div className="text-white leading-10 tracking-wider w-64 md:w-96 lg:w-auto lg:px-10 font-bold text-4xl lg:text-5xl absolute right-1/3 translate-x-1/4 bottom-1/3 translate-y-3/4 "> */}
                    {/* <div className="text-white leading-10 tracking-wider absolute text-4xl font-bold left-1/3 bottom-1/3 px-10 translate-y-1/4"> */}
                    {/* <div className="text-white leading-10 tracking-wider absolute text-3xl font-bold left-1/2 -translate-x-1/2 -bottom-2 w-11/12   px-5 -translate-y-1/2 "> */}
                    <div className="text-white leading-10 tracking-wider absolute text-3xl font-bold flex justify-center items-center w-full bottom-10 flex-wrap md:w-96 lg:w-screen md:left-1/3 md:bottom-1/3 md:translate-y-1/2 md:justify-start md:px-10 md:text-5xl">
                      {movie.title}
                    </div>
                    <span
                      className="absolute cursor-pointer top-1/2 left-1  w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-t from-slate-600 to-slate-800"
                      onClick={(e) => {
                        setPicturePointer((prevPointer) => {
                          return prevPointer < popularMovies.length - 1
                            ? prevPointer + 1
                            : 0;
                        });
                        document.body.querySelector('.line').style.transform =
                          'scaleX(0)';
                      }}
                    >
                      {leftIcon}
                    </span>
                    <span
                      className="absolute cursor-pointer top-1/2 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-t from-slate-600 to-slate-800"
                      onClick={(e) => {
                        setPicturePointer((prevPointer) => {
                          return prevPointer > 0
                            ? prevPointer - 1
                            : popularMovies.length - 1;
                        });
                        // document.body.querySelector('.line').style.width =
                        //   '0px';
                        lineRef.current.style.animation =
                          'grow 4s linear infinite';
                      }}
                    >
                      {rightIcon}
                    </span>
                  </div>
                  <div
                    ref={lineRef}
                    className={` ${
                      picturePointer === index ? 'active' : ''
                    }  w-full  h-3  absolute bottom-0 line`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
        {/* for hover: */}

        <h1 className="text-2xl px-10 mt-5  ">Popular Movies</h1>
        <div className="container-movies h-96  overflow-x-auto   flex  w-11/12 self-center">
          <div className="  flex items-center justify-center flex-nowrap gap-4 ">
            {movies.map((movie) => {
              return (
                <div className="  w-40 h-72   hover:w-72 transition-all duration-300  ">
                  <GetMovie movie={movie} />
                </div>
              );
            })}
          </div>
        </div>

        <h1 className="text-2xl px-10  mb-1 mt-10 ">Trending Movies</h1>
        <div className="flex flex-col items-center justify-center">
          <div className=" w-screen items-center flex flex-wrap gap-5 px-10 mt-2 ">
            {trendingMovies.map((movie, index) => {
              return (
                index < showItems && (
                  <>
                    <div className=" w-40 h-72 relative rounded-xl">
                      <GetMovie movie={movie} />
                      {/* <span className="absolute -right-6 -top-5 font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-t from-slate-600 to-slate-300 z-10">
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
            <div className=" show-more w-10 h-10 rounded-full shadow-2xl   bg-gradient-to-t from-slate-400 to-slate-600  flex justify-center items-center">
              {showMoreIcon}
            </div>
          </div>
        </div>

        <h1 className="text-2xl px-10  mb-1 mt-10 ">Trending Movies</h1>
        <div className="container-movies   overflow-x-auto   flex  w-11/12 self-center">
          <div className="  flex items-center justify-center flex-nowrap gap-4 mb-14">
            {trendingMovies.map((movie, index) => {
              return (
                index < 10 && (
                  <div className=" w-72 h-40 flex items-center justify-center rounded-xl">
                    <span className=" font-bold text-8xl text-transparent bg-clip-text bg-gradient-to-l from-slate-600 to-slate-200 z-10">
                      {index + 1}
                    </span>
                    <GetMovie movie={movie} />
                  </div>
                  // <div className=" w-40 h-72 relative rounded-xl">
                  //   <GetMovie movie={movie} />
                  //   <span className="absolute -right-6 -top-5 font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-t from-slate-600 to-slate-300 z-10">
                  //     0{index + 1}
                  //   </span>
                  // </div>
                )
              );
            })}
          </div>
        </div>
        <div className="flex gap-5 flex-wrap m-10">
          {genres.map((genre) => {
            return (
              <div className="w-28 h-28  shadow-2xl  flex items-center justify-center  bg-gradient-to-r from-slate-800 to-slate-600 transition-all hover:bg-gradient-to-tr cursor-pointer hover:from-slate-500 hover:to-slate-800">
                {genre.name}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap min-h-screen gap-5 mb-10 w-screen items-center justify-center">
          {topMovies.map((movie) => {
            return (
              <div className=" w-40 h-72 relative rounded-xl ">
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
