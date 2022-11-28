import React, { useRef } from 'react';
// import movieGoer from '../assets/movieGoer.jpg';
// import projector from '../assets/projector.jpg';
// import projectors from '../assets/projectors.jpg';
import projector1 from '../assets/projector1.png';

// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
const Hero = () => {
  // const ref = useRef();
  return (
    <div className="wrapper w-screen min-h-screen">
      {/* <header>
        <img src={projectors} alt="" srcset="" className="background" />
        <img src={projector} alt="" srcset="" className="foreground" />
        <img src="" alt="" srcset=""  className=''/>
        <h1 className="title drop-shadow-lg">Welcome</h1>
      </header> */}
      {/* <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          // factor={2}  
          style={{
            backgroundImage: `url(${projector})`,
            backgroundSize: 'cover',
          }}
        >
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${projectors})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            backgroundImage: `url(${projectors})`,
            backgroundSize: 'cover',
          }}
        >
          <h2 className="text-6xl">Welcome to website</h2>
        </ParallaxLayer>
      </Parallax> */}
      {/* <div>
        <Parallax pages={4} ref={ref}>

          <ParallaxLayer
            offset={0}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url(${projector})`,
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer
            offset={2}
            speed={1}
            factor={4}
            style={{
              backgroundImage: `url(${projectors})`,
              backgroundSize: 'cover',
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 0.9, end: 2.5 }}
            style={{ textAlign: 'center' }}
            className="flex items-center justify-center"
          >
            <img src={movieGoer} alt="moviegoer" />
            <div className="w-10 h-48 bg-slate-200 "></div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.2}
            speed={0.05}
            onClick={() => ref.current.scrollTo(3)}
          >
            <h2>Welcome to my website</h2>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={2}
            onClick={() => ref.current.scrollTo(0)}
          >
            <h2>Hi Mom!</h2>
          </ParallaxLayer>
        </Parallax>
      </div> */}
      <div className="  w-screen h-screen flex ">
        <div className="wrap w-1/4 h-full m-0 relative">
          <img
            className="pro w-full absolute bottom-0 "
            src={projector1}
            alt="projector"
          />
          <div className="lines  absolute bottom-10 left-full"></div>
        </div>
        <div className="w-3/4 h-full ">
          {/* <div className="projector w-full h-1/2 rounded-lg bg-gradient-to-r from-white to-slate-400 shadow-2xl shadow-black origin-top ">
            welcome to the website
          </div> */}
          {/* <div class="contaienr">
            <div class="tilt-box-wrap">
              <span class="t_over"></span>
              <span class="t_over"></span>
              <span class="t_over"></span>
              <span class="t_over"></span>
              <span class="t_over"></span>
              <span class="t_over"></span>
              <span class="t_over"></span>
              <span class="t_over"></span>
              <span class="t_over"></span>
              <div class="tilt-box">
                <strong>
                  Tilt <br /> Effect
                </strong>
              </div>
            </div>
          </div> */}
          <div className="projector-wrap w-full h-full ">
            <div className="projector w-full h-5/6  bg-gradient-to-r from-white to-slate-400 shadow-2xl"></div>
          </div>
          Projector
        </div>
      </div>
      <div>Hello</div>
    </div>
  );
};

export default Hero;
