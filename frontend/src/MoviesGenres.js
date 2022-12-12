import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DisplayMovies from './DisplayMovies';
import getMovies, { getMoviesOfGenres } from './movies/getMovies';

const MoviesGenres = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id, genreName } = useParams();

  // const [searchTerm, setSearchTerm] = useState('');
  // const movieLink = useLocation();
  useEffect(() => {
    (async () => {
      setMovies(await getMoviesOfGenres(id));
      setLoading(false);
    })();
  }, [id]);
  console.log(movies);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-tr from-slate-400 to-slate-700 ">
        Loading
      </div>
    );
  }
  return (
    <>
      <DisplayMovies movies={movies} searchTerm={`${genreName} Movies`} />
    </>
  );
};

export default MoviesGenres;
