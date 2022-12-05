import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCoins,
  faHouse,
  faListCheck,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Banner from './Banner';
import RenderMenuList from './RenderMenuList';

const menuIcon = <FontAwesomeIcon icon={faBars} />;
const crossIcon = <FontAwesomeIcon icon={faXmark} />;

const homeIcon = <FontAwesomeIcon icon={faHouse} />;
const aboutUsIcon = <FontAwesomeIcon icon={faUser} />;
const featuresIcon = <FontAwesomeIcon icon={faListCheck} />;
const solutionIcon = <FontAwesomeIcon icon={faCoins} />;
const portal = document.getElementById('portal');
const menuIcons = [homeIcon, aboutUsIcon, featuresIcon, solutionIcon];
const Navbar = ({ transparent }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const ShowPortal = () => {
    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(window.innerWidth);
        if (windowSize >= 850) {
          setShowMenu(false);
        }
      }

      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
    return createPortal(
      <div
        className={`fixed navs top-0 left-0 right-0 bottom-0 z-100 bg-gradient-to-b from-slate-900 to-slate-700  bg-opacity-95 overflow-y-hidden
      w-screen h-screen text-white  transition-all ease-in-out delay-400 inset-0`}
      >
        <div className="absolute  transition-all  flex justify-between w-11/12 h-screen z-100    text-2xl  p-10 ">
          <div className="lists flex flex-col gap-10">
            <RenderMenuList icons={menuIcons} />
          </div>
          <span
            onClick={() => {
              setShowMenu(false);
              portal.classList.remove('active');
            }}
            className="cursor-pointer rounded-lg  p-2 bg-gradient-to-b from-slate-400  to-slate-50 w-10 h-10 flex justify-center items-center text-black hover:shadow-xl hover:rotate-90 transition-all duration-300"
          >
            {crossIcon}
          </span>
        </div>
      </div>,
      document.getElementById('portal')
    );
  };
  return (
    <nav
      className={`${
        transparent === true
          ? ''
          : 'bg-gradient-to-r from-slate-700 to-slate-900'
      } flex  font-Poppins items-center space-x-2 px-10 md:px-20 w-screen gap-10 md:gap-32 lg:gap-1  relative navbar `}
    >
      <Banner />
      <div
        className="lg:hidden absolute right-4 md:right-10  text-3xl cursor-pointer rounded-lg  p-2 hover:rotate-180 hover:origin-center transition-all duration-300 "
        onClick={() => {
          setShowMenu(true);
          portal.classList.add('active');
        }}
      >
        <span className="h-full  hover:rotate-180 transition-all duration-300">
          {menuIcon}
        </span>
        {/* {menuIcon} */}
      </div>
      {showMenu && <ShowPortal />}
      <ul
        className={`hidden absolute -right-1/4 lg:flex lg:gap-10  md:w-11/12 lg:w-4/6  text-lg items-center my-0 `}
      >
        <RenderMenuList />
      </ul>
    </nav>
  );
};

export default Navbar;
