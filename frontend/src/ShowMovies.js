import React, { useEffect, useState } from 'react';
import getMovies from './movies/getMovies';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation, useParams } from 'react-router-dom';
import GetMovie from './GetMovie';
import Landing from './landingPage/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DisplayMovies from './movies/DisplayMovies';

const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
// function ShowSearchResults({ searchTerm }) {
//   return (
//     <div className="text-gray-500 search-results ">
//       {/* {`Search Results for`}  */}
//       <span className="tracking-wide text-black">"{searchTerm.toUpperCase()}" </span>
//     </div>
//   );
// }
export default function ShowMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm } = useParams();

  // const [searchTerm, setSearchTerm] = useState('');
  // const movieLink = useLocation();
  useEffect(() => {
    (async () => {
      setMovies(await getMovies(searchTerm));
      setLoading(false);
    })();
  }, [searchTerm]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-tr from-slate-400 to-slate-700 ">
        Loading
      </div>
    );
  }
  console.log(movies);
  return <DisplayMovies movies={movies} searchTerm={`${searchTerm} `} />;
}
