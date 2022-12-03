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
      <Navbar />
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
