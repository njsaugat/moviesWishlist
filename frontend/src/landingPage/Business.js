import {
  faBusinessTime,
  faHouse,
  faHouseSignal,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Waves from './Waves';

const houseIcon = <FontAwesomeIcon icon={faHouse} />;
const businessIcon = <FontAwesomeIcon icon={faBusinessTime} />;
const smartHouseIcon = <FontAwesomeIcon icon={faHouseSignal} />;
const sellingFactors = [
  {
    id: 1,
    image: houseIcon,
    title: 'Find your Dream Movie',
    content:
      'Many ads for apartments and houses for sale in various locations. Tap your finger on the screen and then open your dream house from here ',
  },
  {
    id: 2,
    image: businessIcon,
    title: 'Get movie reminder',
    content:
      'Renting a place of business and buying and selling shop, houses becomes easier. Meet your business and investment needs faster',
  },
  {
    id: 3,
    image: smartHouseIcon,
    title: 'Find movies through recommendation',
    content:
      'Everything that you can manage and search through the ads is presentable through the app. With applications feature we can meet your needs ',
  },
];
const Business = () => {
  useEffect(() => {
    const contents = document.querySelectorAll('.content');
    console.log(contents);
    function showBox() {
      const triggerBottom = (window.innerHeight / 5) * 4; //we are setting the trigger point; as we enter here event should fire up
      contents.forEach((content) => {
        const boxTop = content.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          content.classList.add('show');
        }
      });
    }
    window.addEventListener('scroll', showBox);
    return () => window.removeEventListener('scroll', showBox);
  });
  const renderSellingFactors = sellingFactors.map((sellingFactor) => {
    let initialStyle =
      ' content py-5 rounded-3xl shadow-2xl flex items-center gap-5 w-10/12 my-10 md:mx-5 shadow-lg p-5 bg-gradient-to-r from-slate-700 to-slate-900';
    let computedStyle = 'bg-gradient-to-b from-gray-700 to-transparent-500';
    initialStyle += sellingFactor.id === 2 ? ' ' + computedStyle : '';
    // initialStyle += computedStyle  '';
    return (
      <div className={initialStyle} key={sellingFactor.id}>
        {/* <img
            className=" md:w-16 md:h-16"
            src={sellingFactor.image}
            alt=""
            srcSet=""
          /> */}

        <div className="text-3xl  text-purple-500">{sellingFactor.image}</div>
        <div className="factor flex flex-col ">
          <h2 className="font-bold text-xl mb-4">{sellingFactor.title}</h2>
          <div className="text-gray-400">{sellingFactor.content}</div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="lg:flex w-full items-center p-10 md:p-20 md:pt-0 md:pb-0">
        <div className="left lg:w-1/2 my-5">
          <h1 className="font-bold text-black text-5xl my-5  leading-tight md:leading-snug">
            Provides your most favorite list of movies
          </h1>
          <span className="text-gray-400 w-1/2 leading-7">
            Find the ideal movie that is most suitable for you. Starting from
            houses for sale that one minimalist apartments for sale that are
            exlusive.
          </span>
          <br />
          <button className="py-3 px-5 my-10 bg-gradient-to-t from-purple-500 to-purple-100  rounded-lg text-black hover:shadow-xl hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </div>
        <div className="right lg:w-1/3 md:ml-20 flex flex-col justify-center items-center">
          {renderSellingFactors}
        </div>
      </div>
      {/* <Waves /> */}
    </>
  );
};

export default Business;
