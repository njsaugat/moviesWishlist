import { Link } from 'react-router-dom';

const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
const yearCount = 4;
export default function GetMovie({ movie }) {
  return (
    // <div className="movie w-11/12 md:w-full   cursor-pointer relative flex items-center justify-center rounded-lg ">
    <Link
      className="movie w-full  h-full cursor-pointer relative flex items-center justify-center rounded-lg "
      to={`/movie/${movie.id}`}
      state={movie}
    >
      <img
        // src={IMAGE_URL + movie.backdrop_path}
        src={IMAGE_URL + movie.poster_path}
        alt=""
        srcSet=""
        className="h-full   object-cover mb-0  w-full lg:w-96 rounded-2xl shadow-2xl"
        lazy="loading"
      />

      <div className="details flex items-center justify-center ">
        <div className="left flex  justify-center flex-col items-start">
          <span className="name mb-3 font-bold tracking-wider">
            {movie.title}
          </span>
          <span className="likes">
            {/* {movie.release_date.substr(0, yearCount)}{' '} */}
          </span>
        </div>
        <div className="right"></div>
      </div>
    </Link>
  );
}
