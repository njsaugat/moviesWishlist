import React from 'react';

const Tagline = ({ textSize }) => {
  return (
    <section
      className={`text-5xl leading-normal md:text-${textSize} ${
        textSize && 'md:text-7xl'
      } md:leading-normal py-0 md:py-10 font-bold `}
    >
      All your
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-500 ">
        Movies’ Wishlist
      </span>
      <br />
      at one place. <br />
    </section>
  );
};

export default Tagline;
