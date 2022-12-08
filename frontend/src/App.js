import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage';
import Landing from './landingPage/LandingPage';
import Login from './login-signup/Login';
import Signup from './login-signup/Signup';
import ShowMovie from './movie/ShowMovie';
import Home from './movies/Home';
import MoviesGenres from './MoviesGenres';
// import ShowMovie from './ShowMovie';
import ShowMovies from './ShowMovies';
import './style.css';
export const LoggedInContext = createContext();
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />;
          {/* <Route path="/" element={<ShowMovies />} />; */}
          <Route path="/home" element={<Home />} />;
          <Route path="/movie/:id" element={<ShowMovie />} />;
          <Route path="movies/search/:searchTerm" element={<ShowMovies />} />;
          <Route
            path="movies/genre/:genreName/:id"
            element={<MoviesGenres />}
          />
          ;
        </Routes>
      </BrowserRouter>
    </LoggedInContext.Provider>
  );
}

export default App;
