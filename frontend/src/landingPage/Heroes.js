import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tagline from '../components/Tagline';
import Waves from './Waves';
import WhiteScreen from './WhiteScreen';

const Heroes = () => {
  const [up, moveUp] = useState(false);
  useEffect(() => {
    let interval;
    function playAnimation() {
      up === false ? moveUp(true) : moveUp(false);
    }
    interval = setInterval(playAnimation, 1000);
    return () => clearInterval(interval);
  }, [up]);
  return (
    <>
      <main className="relative items-center w-screen p-10 mb-32 overflow-hidden md:p-20 md:flex md:justify-between bg-gradient-to-r from-slate-700 to-slate-900">
        <div className="my-24 mb-10 left md:w-3/5">
          <Tagline />
          <section className="text-gray-400 description md:w-1/2">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </section>
          <Link to="/home">
            <button className="px-5 py-3 my-10 text-black transition-all duration-300 rounded-lg bg-gradient-to-t from-purple-500 to-purple-100 hover:shadow-xl hover:scale-105">
              Explore Now
            </button>
          </Link>
        </div>
        <div
          className={`${
            up ? 'translate-y-5' : 'translate-y-0'
          } md:w-1/2   transition-all duration-1000 `}
        >
          <WhiteScreen />
        </div>
        <Waves />
      </main>
      {/* <div>hello</div> */}
    </>
  );
};

export default Heroes;
