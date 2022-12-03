export async function getTrendingMovies() {
  const api_key = 'api_key=4fa5f43351cf51f47e092aa8911cb098';
  const mediaType = 'movie';
  const timeWindow = 'week';
  // https://developers.themoviedb.org/3/trending/get-trending
  const API_URL = `https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?${api_key}`;
  const resultData = await fetch(API_URL, { accept: 'application/json' });
  const { results } = await resultData.json();
  return results;
}
