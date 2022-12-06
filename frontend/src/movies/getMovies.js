const api_key = 'api_key=4fa5f43351cf51f47e092aa8911cb098';
export default async function getMovies(searchTerm) {
  const POPULAR_MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie/?${api_key}&sort_by=popularity.desc`;
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?${api_key}&query=${searchTerm}`;
  let API_URL;
  if (searchTerm) {
    API_URL = SEARCH_URL;
  } else {
    API_URL = POPULAR_MOVIE_API_URL;
  }
  const resultData = await fetch(API_URL, { accept: 'application/json' });
  const { results } = await resultData.json();
  return results;
}
export async function getTrendingMovies() {
  // const api_key = 'api_key=4fa5f43351cf51f47e092aa8911cb098';
  const mediaType = 'movie';
  const timeWindow = 'week';
  // https://developers.themoviedb.org/3/trending/get-trending
  const API_URL = `https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?${api_key}`;
  const resultData = await fetch(API_URL, { accept: 'application/json' });
  const { results } = await resultData.json();
  return results;
}

export async function getPopularMovies() {
  // export async function getUpcomingMovies() {
  // const api_key = 'api_key=4fa5f43351cf51f47e092aa8911cb098';
  const page = 1;
  const region = 'en-US';
  // const API_URL = `https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?${api_key}`;
  // const API_URL = `https://api.themoviedb.org/3/movie/popular?${api_key}&language=${region}&page=${page}`;
  // const API_URL = `https://api.themoviedb.org/3/movie/top_rated?${api_key}&language=${region}&page=${page}`;
  const API_URL = `https://api.themoviedb.org/3/movie/upcoming?${api_key}&language=${region}&page=${page}`;
  const resultData = await fetch(API_URL, { accept: 'application/json' });
  const { results } = await resultData.json();
  return results;
}
export async function getGenres() {
  // const API_URL = `https://api.themoviedb.org/3/genre/movie/list?${api_key}&language=en-US`;
  const API_URL = `https://api.themoviedb.org/3/genre/movie/list?${api_key}&language=en-US`;
  const resultData = await fetch(API_URL, { accept: 'application/json' });
  const { genres } = await resultData.json();
  return genres;
}
export async function getTopMovies() {
  const API_URL = `https://api.themoviedb.org/3/movie/top_rated?${api_key}&language=en-US&page=1`;
  const resultData = await fetch(API_URL, { accept: 'application/json' });
  const { results } = await resultData.json();
  return results;
}
export async function getMovie(id) {
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?${api_key}`;
  const resultData = await fetch(API_URL, { accept: 'application/json' });
  const movie = await resultData.json();
  return movie;
}
