const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
const yearCount = 4;
export default function GetMovie({ movie }) {
  return (
    <div className="movie w-11/12 md:w-full   cursor-pointer relative flex items-center justify-center rounded-lg ">
      <img
        src={IMAGE_URL + movie.backdrop_path}
        alt=""
        srcSet=""
        className="h-full md:h-72  object-cover mb-0  w-full lg:w-96 "
      />

      <div className="details flex items-center justify-center ">
        <div className="left flex  justify-center flex-col items-start">
          <span className="name mb-3 font-bold tracking-wider">
            {movie.title}
          </span>
          <span className="likes">
            {movie.release_date.substr(0, yearCount)}{' '}
          </span>
        </div>
        <div className="right">
          {/* <a
                  href={movie.user.social.portfolio_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={movie.user.profile_image.large} alt="" srcSet="" />
                </a> */}
        </div>
      </div>
    </div>
  );
}
