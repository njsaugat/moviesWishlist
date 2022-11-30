import React from 'react';
import Business from './Business';
import Footer from './Footer';
import Hero from './Hero';
import Heroes from './Heroes';
import TryService from './TryService';

const LandingPage = () => {
  return (
    <>
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
