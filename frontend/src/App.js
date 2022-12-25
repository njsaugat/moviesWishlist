import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage';
import Login from './login-signup/Login';
import Signup from './login-signup/Signup';
import ShowMovie from './movie/ShowMovie';
import Home from './movies/Home';
import MoviesWishlist from './movies/MoviesWishlist';
import MoviesGenres from './MoviesGenres';
// import ShowMovie from './ShowMovie';
import ShowMovies from './ShowMovies';
import './style.css';
export const LoggedInContext = createContext();
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  let movieIds = JSON.parse(sessionStorage.getItem('movieIds'));

  const [moviesWishlistIds, setMoviesWishlistIds] = useState(
    movieIds ? movieIds : []
  );
  useEffect(() => {
    async function checkAuthenticated() {
      let isLoggedIn = sessionStorage.getItem('isLoggedIn');
      let movieIds = sessionStorage.getItem('movieIds');
      if (isLoggedIn) {
        setLoggedIn(true);
        if (movieIds) {
          setMoviesWishlistIds(movieIds);
          return;
        }
        const results = await fetch('/api/movies-wishlist-ids');
        const moviesId = await results.json();
        console.log(moviesId);
        setMoviesWishlistIds(moviesId);
        sessionStorage.setItem('movieIds', moviesId);
        return;
      }

      const data = await fetch('/api/isAuthenticated');
      const validation = await data.json();
      if (validation.loggedIn === true) {
        setLoggedIn(true);
        if (movieIds) {
          setMoviesWishlistIds(movieIds);
          return;
        }
        const results = await fetch('/api/movies-wishlist-ids');
        const moviesId = await results.json();
        console.log(moviesId);
        setMoviesWishlistIds(moviesId);
        sessionStorage.setItem('movieIds', JSON.stringify(moviesId));

        // sessionStorage.setItem('moviesWishlistIds', moviesId);
      }
    }
    checkAuthenticated();
  }, []);
  return (
    <LoggedInContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        moviesWishlistIds,
        setMoviesWishlistIds,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />;
          <Route path="/home" element={<Home />} />;
          <Route path="/movie/:id" element={<ShowMovie />} />;
          <Route path="/movies-wishlist" element={<MoviesWishlist />} />
          <Route path="/movies/search/:searchTerm" element={<ShowMovies />} />;
          <Route
            path="/movies/genre/:genreName/:id"
            element={<MoviesGenres />}
          />
          ;
        </Routes>
      </BrowserRouter>
    </LoggedInContext.Provider>
  );
}

export default App;
