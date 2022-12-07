const api_key = 'api_key=4fa5f43351cf51f47e092aa8911cb098';
export async function getCast(id) {
  const API_URL = `https://api.themoviedb.org/3/movie/${id}/credits?${api_key}&language=en-US`;
  const resultData = await fetch(API_URL, { accept: 'application/json' });
  const results = await resultData.json();
  // console.log(results);
  return results.cast;
}

export async function getSimilarMovies(id) {
  const API_URL = `https://api.themoviedb.org/3/movie/${id}/similar?${api_key}&language=en-US&page=1`;
  const resultData = await fetch(API_URL, { accept: 'application/json' });
  const { results } = await resultData.json();
  // console.log(results);
  return results;
}
export async function getRecommendedMovies(id) {
  const API_URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?${api_key}&language=en-US&page=1`;
  const resultData = await fetch(API_URL, { accept: 'application/json' });
  const { results } = await resultData.json();
  // console.log(results);
  return results;
}
export async function getReviews(id) {
  const API_URL = `https://api.themoviedb.org/3/movie/${id}/reviews?${api_key}&language=en-US&page=1`;
  const resultData = await fetch(API_URL, { accept: 'application/json' });
  const { results } = await resultData.json();
  // console.log(results);
  return results;
}

export async function getImages(id) {
  const API_URL = `https://api.themoviedb.org/3/movie/${id}/images?${api_key}&language=en-US`;
  const resultData = await fetch(API_URL, { accept: 'application/json' });
  const results = await resultData.json();
  console.log(results);
  return results;
}

export async function getVideos(id) {
  const API_URL = `https://api.themoviedb.org/3/movie/${id}/videos?${api_key}&language=en-US`;
  const resultData = await fetch(API_URL, { accept: 'application/json' });
  const { results } = await resultData.json();
  // console.log(results);
  return results;
}
