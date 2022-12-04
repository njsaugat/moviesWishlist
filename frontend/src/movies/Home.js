import React, { useEffect, useState } from 'react';
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
// import { getTrendingMovies } from './getTrendingMovies';
// import getMovies from './getMovies';
// import getMovies from 'getMovies';

// const moviesList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const moviesSlider = [1, 2, 3, 4, 5];
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

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
    function changePicture() {
      //   picturePointer++;
      setPicturePointer((prevPointer) => {
        // return prevPointer < moviesSlider.length - 1 ? prevPointer + 1 : 0;
        return prevPointer < popularMovies.length - 1 ? prevPointer + 1 : 0;
      });
      //   setPicturePointer(pre);
    }
    let interval = setInterval(changePicture, 3000);
    return () => clearInterval(interval);
  }, [picturePointer, popularMovies.length]);
  if (loading) {
    return <>'Loading'</>;
  }
  console.log(genres);
  return (
    <>
      <Navbar />
      {/* <ShowMovies /> */}
      {/* for auto slide */}

      <div className="w-screen min-h-screen bg-gradient-to-r from-slate-700 to-slate-900 text-white relative flex flex-col">
        <div className="w-full h-full   ">
          <div className="auto-slide  h-full flex   relative">
            {popularMovies.map((movie, index) => {
              return (
                <div
                  className={`${
                    picturePointer === index ? 'opacity-1' : 'opacity-0'
                  } w-screen h-screen   absolute transition-all duration-300  movie-background`}
                  style={{
                    backgroundImage: `url(${IMAGE_URL + movie.backdrop_path})`,
                  }}
                  // style={{ backgroundColor: 'red' }}
                >
                  <div className="w-44 h-80 relative">
                    {/* Movie{movie} */}
                    {/* <GetMovie movie={movie} /> */}
                    <img
                      // src={IMAGE_URL + movie.backdrop_path}
                      src={IMAGE_URL + movie.poster_path}
                      alt=""
                      srcSet=""
                      className="h-full   object-cover mb-0  w-full  "
                      lazy="loading"
                    />

                    <div
                      className={` ${
                        picturePointer === index ? 'active' : ''
                      }  w-full  h-3  absolute bottom-0 line`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* for hover: */}

        {/* <div className="container-movies mt-20 overflow-x-auto h-40  flex w-11/12 self-center">
          <div className="flex-scroll   flex items-center justify-center flex-nowrap ">
            {movies.map((movie) => {
              return (
                <div className="  w-20 h-20 border-2 mx-2 hover:w-40 transition-all duration-300 ">
                  <GetMovie movie={movie} />
                </div>
              );
            })}
          </div>
        </div> */}
        {/* <div>
          <div className="flex flex-wrap ml-3 items-center gap-10 mt-10">
            {trendingMovies.map((movie, index) => {
              return (
                <div className="border-2 w-28 h-28 relative rounded-xl">
                  <GetMovie movie={movie} />
                  {console.log(movie)}
                  <span className="absolute -right-6 -top-5 font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-t from-slate-600 to-slate-300 z-50">
                    0{index + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div> */}
        {/* <div className="flex gap-5 flex-wrap m-10">
          {genres.map((genre) => {
            return (
              <div className="w-28 h-28  shadow-2xl  flex items-center justify-center  bg-gradient-to-r from-slate-800 to-slate-600 transition-all hover:bg-gradient-to-tr cursor-pointer hover:from-slate-500 hover:to-slate-800">
                {genre.name}
              </div>
            );
          })}
        </div> */}
        {/* <div>
          {topMovies.map((movie) => {
            return <GetMovie movie={movie} />;
          })}
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
