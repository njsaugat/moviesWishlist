import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Business from './Business';
import Hero from './Hero';
import Heroes from './Heroes';
import TryService from './TryService';

const LandingPage = () => {
  return (
    <>
      <div className="absolute z-10 ">
        <Navbar transparent={true} />
      </div>

      <Heroes />
      <Business />
      <TryService />
      <Footer />
      {/* <Hero />
       */}
    </>
  );
};

export default LandingPage;
