import React from 'react';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

const WhiteScreen = ({ movieImg }) => {
  // console.log(movieImg);
  return (
    <div className="contaienr mb-36 -translate-x-14 md:translate-x-10 lg:translate-x-0 ">
      <div className="rounded-lg tilt-box-wrap">
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <div
          className="tilt-box"
          style={{ backgroundImage: `url(${IMAGE_URL + movieImg})` }}
        >
          <strong>{/* Tilt <br /> Effect */}</strong>
        </div>
      </div>
    </div>
  );
};

export default WhiteScreen;
