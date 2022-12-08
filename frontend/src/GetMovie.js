import { Link } from 'react-router-dom';

const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
const yearCount = 4;
export default function GetMovie({ movie }) {
  return (
    // <div className="relative flex items-center justify-center w-11/12 rounded-lg cursor-pointer movie md:w-full ">
    <Link
      className="relative flex items-center justify-center w-full h-full rounded-lg cursor-pointer movie "
      to={`/movie/${movie.id}`}
      state={movie}
    >
      <img
        // src={IMAGE_URL + movie.backdrop_path}
        src={IMAGE_URL + movie.poster_path}
        alt=""
        srcSet=""
        className="object-cover w-full h-full mb-0 shadow-2xl lg:w-96 rounded-2xl"
        lazy="loading"
      />

      <div className="flex items-center justify-center details ">
        <div className="flex flex-col items-start justify-center left">
          <span className="mb-3 font-bold tracking-wider name">
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
