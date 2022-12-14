import React, { useEffect, useState } from 'react';
import getMovies from './movies/getMovies';
import { useParams } from 'react-router-dom';
import DisplayMovies from './DisplayMovies';
import Loading from './components/Loading';

export default function ShowMovies() {
  document.title = 'Movies | CineWish  ';

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm } = useParams();

  useEffect(() => {
    (async () => {
      setMovies(await getMovies(searchTerm));
      setLoading(false);
    })();
  }, [searchTerm]);

  if (loading) {
    return <Loading />;
  }
  console.log(movies);
  return <DisplayMovies movies={movies} searchTerm={`${searchTerm} `} />;
}
