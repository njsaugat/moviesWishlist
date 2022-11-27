import React from 'react';
import movieGoer from '../assets/movieGoer.jpg';
import projector from '../assets/projector.jpg';
import projectors from '../assets/projectors.jpg';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
const Hero = () => {
  return (
    <div className="wrapper">
      {/* <header>
        <img src={projectors} alt="" srcset="" className="background" />
        <img src={projector} alt="" srcset="" className="foreground" />
        <img src="" alt="" srcset=""  className=''/>
        <h1 className="title drop-shadow-lg">Welcome</h1>
      </header> */}
      <Parallax pages={4}>
        <ParallaxLayer offset={0} speed={1}>
          <h2 className="text-6xl">Welcome to website</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <h2 className="text-6xl">Welcome to website</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Hero;
