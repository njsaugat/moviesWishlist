const api_key = 'api_key=4fa5f43351cf51f47e092aa8911cb098';
const POPULAR_MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie/?${api_key}&sort_by=popularity.desc`;
export default async function getMovies(searchTerm) {
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
