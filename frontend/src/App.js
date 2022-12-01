import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage';
import Landing from './landingPage/LandingPage';
import ShowMovie from './ShowMovie';
import ShowMovies from './ShowMovies';
import './style.css';

function App() {
  return (
    <BrowserRouter className>
      <Routes>
        <Route path="/" element={<LandingPage />} />;
        {/* <Route path="/" element={<ShowMovies />} />; */}
        <Route path="/movie/:id" element={<ShowMovie />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
