import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import { getTrendingMovies } from '../movies/getMovies';
import Business from './Business';
import Heroes from './Heroes';
import TryService from './TryService';

const LandingPage = () => {
  document.title = 'CineWish';
  const [trendingMovies, setTrendingMovies] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const getRandomNum = () => Math.floor(Math.random() * trendingMovies.length);
  useEffect(() => {
    (async () => {
      setTrendingMovies(await getTrendingMovies());
      setLoading(false);
    })();
  }, []);
  if (loading) {
    return <Loading />;
  }
  console.log(trendingMovies);

  return (
    <>
      <div className="absolute z-10 ">
        <Navbar transparent={true} />
      </div>

      <Heroes movieImg={trendingMovies[getRandomNum()].poster_path} />
      <Business />
      <TryService
        movieImgs={[
          trendingMovies[0].poster_path,
          trendingMovies[1].poster_path,
          trendingMovies[2].poster_path,
        ]}
      />
      <Footer />
    </>
  );
};

export default LandingPage;
