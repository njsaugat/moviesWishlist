import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowMovie from './ShowMovie';
import ShowMovies from './ShowMovies';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowMovies />} />;
        <Route path="/movie/:id" element={<ShowMovie />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
