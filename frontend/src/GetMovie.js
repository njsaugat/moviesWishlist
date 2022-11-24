const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
const yearCount = 4;
export default function GetMovie({ movie }) {
  return (
    <div className="movie">
      <img src={IMAGE_URL + movie.backdrop_path} alt="" srcSet="" />

      <div className="details">
        <div className="left">
          <span className="name">{movie.title}</span>
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
