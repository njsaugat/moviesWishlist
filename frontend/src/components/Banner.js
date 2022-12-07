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
      <div className="flex items-center w-3/5 my-5 text-4xl font-bold leading-tight logo md:leading-snug md:w-1/2 drop-shadow-md">
        <span className="mr-2 text-4xl shadow-2xl shadow-slate-50">
          {movieIcon}
        </span>
        <span className="text-transparent drop-shadow-md bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 ">
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
