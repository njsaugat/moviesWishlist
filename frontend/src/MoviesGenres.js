import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './components/Loading';
import DisplayMovies from './DisplayMovies';
import { getMoviesOfGenres } from './movies/getMovies';

const MoviesGenres = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id, genreName } = useParams();

  useEffect(() => {
    (async () => {
      setMovies(await getMoviesOfGenres(id));
      setLoading(false);
    })();
  }, [id]);
  console.log(movies);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <DisplayMovies movies={movies} searchTerm={`${genreName} Movies`} />
    </>
  );
};

export default MoviesGenres;
