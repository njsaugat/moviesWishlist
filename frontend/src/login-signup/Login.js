import React, { useContext, useEffect, useRef, useState } from 'react';
import Banner from '../components/Banner';
import Tagline from '../components/Tagline';
// import login from '../login.png';
import login from '../assets/clapperBoard.png';

import Axios from 'axios';
import { checkEmail, checkPassword, loginValidator } from './validator';
import { Link, useNavigate } from 'react-router-dom';
import { LoggedInContext } from '../App';
import Navbar from '../components/Navbar';
const Login = () => {
  const navigate = useNavigate();
  document.title = 'GharShar | Login';
  const email = useRef(null);
  const password = useRef(null);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  // const [userId, setUserId] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('userId', userId);
  // }, [userId]);

  const onSubmit = (e) => {
    e.preventDefault();
    // const
    Axios.post('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'mutlipart/form-data',
      },
      body: {
        email: email.current.value,
        password: password.current.value,
      },
    }).then((res) => {
      // setUserId(res.data);
      if (res.data.loggedIn) {
        //login success
        setLoggedIn(true);
      } else {
        //show error
        alert("Email or password doesn' match");
      }
      // console.log(res.data);
    });
    //@TODO add promises to check whether the user is genuine or not based on response from server
    navigate('/loading');
    setTimeout(() => {
      navigate('/home');
    }, 2000);
  };
  return (
    <>
      {/* <div>
        <Navbar />
      </div> */}
      <div className="flex flex-col w-screen h-screen md:h-auto md:flex-row bg-gradient-to-r from-slate-700 to-slate-900 ">
        <div className="flex-col items-center justify-center hidden w-auto md:flex bg-gradient-to-r from-blue-300 ">
          <Banner />

          <Tagline />
          <img src={login} alt="" srcSet="" />
        </div>
        <div className="flex flex-col items-center self-center justify-center w-full h-full md:w-1/2 md:pl-20">
          <div className="fixed flex -top-5 md:hidden">
            <Banner />
          </div>
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
                className="w-full px-3 py-2 text-black bg-gray-100 border-0 border-gray-300 rounded-lg shadow-md outline-0"
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
                className="w-full px-3 py-2 text-black bg-gray-100 border-0 border-gray-300 rounded-lg shadow-md outline-0 "
                type="password"
                name="password"
                ref={password}
                onChange={(e) => {
                  checkPassword(password);
                }}
              />
            </div>

            <button
              className="w-full px-5 py-3 my-5 text-black rounded-lg outline-0 lg:w-10/12 bg-gradient-to-t from-cyan-500 to-cyan-100"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                // validator(e, email.current, password.current);
                loginValidator(e, email.current, password.current);
              }}
            >
              Sign In
            </button>
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
    </>
  );
};

export default Login;
