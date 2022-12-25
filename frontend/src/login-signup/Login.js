import React, { useContext, useRef, useState } from 'react';
import Tagline from '../components/Tagline';
import login from '../assets/clapperBoard.png';

import Axios from 'axios';
import { checkEmail, checkPassword, loginValidator } from './validator';
import { Link, useNavigate } from 'react-router-dom';
import { LoggedInContext } from '../App';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
  const navigate = useNavigate();
  document.title = 'CineWish | Login';
  const email = useRef(null);
  const password = useRef(null);
  const { loggedIn, setLoggedIn, setMoviesWishlistIds } =
    useContext(LoggedInContext);
  const [loading, setLoading] = useState(false);
  const loadingIcon = <FontAwesomeIcon icon={faSpinner} spin size="2x" />;

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await Axios.post('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'mutlipart/form-data',
      },
      body: {
        email: email.current.value,
        password: password.current.value,
      },
    });
    // .then((res) => {

    if (res.data.loggedIn) {
      setLoggedIn(true);
      setLoading(false);
      sessionStorage.setItem('isLoggedIn', true);
      // fetch('/movies-wishlist')
      //   .then((results) => results.json())
      //   .then((moviesId) => {
      //     setMoviesWishlistIds(moviesId);
      //     sessionStorage.setItem('movieIds', JSON.stringify(moviesId));
      //   });
      console.log('reached here');
      const results = await Axios.get('/api/movies-wishlist-ids');
      console.log(results);
      const moviesId = await results.json();
      console.log(moviesId);
      setMoviesWishlistIds(moviesId);
      sessionStorage.setItem('movieIds', JSON.stringify(moviesId));

      // localStorage.setItem('isLoggedIn', true);
    } else {
      alert("Email or password doesn' match");
    }
    // });
    // setTimeout(() => {
    //   navigate('/');
    //   window.location.reload(false);
    // }, 2000);
  };

  if (loggedIn) {
    return setTimeout(() => {
      navigate('/');
    }, 500);
  }
  return (
    <>
      <div className="absolute z-10 ">
        <Navbar transparent={true} />
      </div>
      <div className="flex flex-col w-screen h-screen md:h-auto md:flex-row bg-gradient-to-r from-slate-700 to-slate-900 ">
        <div className="flex-col items-center justify-center hidden w-auto md:w-5/12 lg:w-1/3 md:flex bg-gradient-to-r from-blue-300 ">
          {/* <Banner /> */}
          <div className="pt-10 pl-7 translate-y-1/4">
            <Tagline />
          </div>
          <img src={login} alt="" srcSet="" />
        </div>
        <div className="flex flex-col items-center self-center justify-center w-full h-full md:w-1/2 md:pl-20">
          <h1 className="mt-20 text-2xl font-bold tracking-wider ">
            Login to CineWish
          </h1>
          <form
            className="flex flex-col items-center justify-center w-10/12 m-2 p-7 md:p-10 md:w-full"
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <div className="flex flex-col self-center w-full my-5 option lg:w-10/12">
              <label className="mb-1 font-bold tracking-wider" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 text-black bg-gray-100 border-0 border-gray-300 rounded-full shadow-md outline-0"
                type="email"
                name="email"
                ref={email}
                onChange={(e) => {
                  checkEmail(email);
                }}
              />
            </div>

            <div className="flex flex-col self-center w-full my-5 option lg:w-10/12">
              <label
                className="mb-1 font-bold tracking-wider"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 text-black bg-gray-100 border-0 border-gray-300 rounded-full shadow-md outline-0 "
                type="password"
                name="password"
                ref={password}
                onChange={(e) => {
                  checkPassword(password);
                }}
              />
            </div>

            <button
              className="px-5 py-3 my-5 text-black transition-all rounded-full w-36 outline-0 bg-gradient-to-t from-purple-500 to-purple-100 hover:shadow-xl hover:scale-105"
              type="submit"
              onClick={(e) => {
                loginValidator(e, email.current, password.current);
              }}
            >
              Sign In
            </button>
            <span className={loading ? 'visible' : 'invisible'}>
              {loadingIcon}
            </span>

            <p className="mt-4">
              Not a member?
              <Link to={'/signup'} className="font-bold ">
                {' '}
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
