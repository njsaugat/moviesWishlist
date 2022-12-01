import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../logo.svg';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
  //   <svg>
  //     <g>

  //     </g>
  //   </svg>;
  const movieIcon = (
    <FontAwesomeIcon
      icon={faClapperboard}
      className="gradientSVG"
      mask="square-full"
      style={
        {
          // backgroundClip: 'text',
          // color: 'transparent',
          // border: '1px solid white',
          // borderRadius: '10px',
          // boxShadow: '0px 10px 50px white',
          // background: '-webkit-linear-gradient( #334455,#0f172a)',
        }
      }
      //   style="url(##myGradient)"
      //   style={{ fill: 'url(#blue-gradient)' }}
      //   beat
    />
  );
  return (
    <Link to="/">
      <div className="logo w-3/5  flex items-center font-bold text-4xl my-5  leading-tight md:leading-snug md:w-1/2">
        <span className="text-4xl mr-2 shadow-2xl shadow-slate-50">
          {movieIcon}
        </span>
        <span className="drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 ">
          Cine
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-500 ">
          Wish
        </span>
      </div>
    </Link>
  );
};

export default Banner;
