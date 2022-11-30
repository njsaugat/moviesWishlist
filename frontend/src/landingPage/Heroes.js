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
      <main className="w-screen p-10 md:p-20 relative md:flex md:justify-between items-center overflow-hidden   mb-32 bg-gradient-to-r from-slate-700 to-slate-900">
        <div className="left my-24 mb-10  md:w-3/5">
          <Tagline />
          <section className="description text-gray-400 md:w-1/2">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </section>
          <Link to="/explore">
            <button className="py-3 px-5 my-10 bg-gradient-to-t from-purple-500 to-purple-100  rounded-lg text-black hover:shadow-xl hover:scale-105 transition-all duration-300">
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
