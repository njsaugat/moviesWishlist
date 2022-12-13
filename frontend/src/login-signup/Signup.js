import React, { useContext, useRef } from 'react';
import Banner from '../components/Banner';
import Tagline from '../components/Tagline';
// import loginHouse from '../loginHouse.png';
import loginHouse from '../assets/clapperBoard.png';

import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import validator, {
  checkConfPassword,
  checkEmail,
  checkPassword,
} from './validator';
import { checkUsername } from './validator';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LoggedInContext } from '../App';
const Signup = () => {
  const navigate = useNavigate();
  document.title = 'CineWish | Signup';

  const firstname = useRef(null);
  const lastname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confPassword = useRef(null);
  const checkbox = useRef(null);
  // const userInfo=[username,email,password,confPassword,checkbox]
  const { loggedIn } = useContext(LoggedInContext);
  const Submit = (e) => {
    e.preventDefault();
    // const
    console.log(firstname.current.value);
    console.log(email.current.value);

    Axios.post('/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'mutlipart/form-data',
      },
      body: {
        firstname: firstname.current.value,
        lastname: lastname.current.value,
        email: email.current.value,
        password: password.current.value,
      },
    });
    // navigate('/loading');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };
  if (loggedIn) {
    return setTimeout(() => {
      navigate('/home');
    }, 500);
  }
  return (
    <>
      <div className="absolute z-10 ">
        <Navbar transparent={true} />
      </div>

      <div className="flex flex-col w-screen h-screen md:h-auto md:flex-row bg-gradient-to-r from-slate-700 to-slate-900 ">
        <div className="flex-col items-center justify-center hidden md:w-5/12 lg:w-1/3 md:flex bg-gradient-to-r from-sky-300 ">
          {/* <Banner /> */}
          <div className="pt-10 pl-7 translate-y-1/4">
            <Tagline />
          </div>
          <img src={loginHouse} alt="" srcSet="" />
        </div>
        <div className="flex flex-col items-center self-center justify-center w-full h-full md:w-1/2 md:pl-20">
          {/* <div className="fixed flex -top-5 md:hidden">
            <Banner />
          </div> */}
          <h1 className="mt-20 text-2xl font-bold ">Sign Up to CineWish</h1>
          <form
            className="flex flex-col items-center justify-center w-10/12 m-2 p-7 md:p-10 md:w-full"
            // encType="multipart/form-data"
            onSubmit={(e) => Submit(e)}
          >
            <div className="flex justify-between w-full gap-x-5 lg:w-10/12">
              <div className="flex flex-col self-center w-1/2 my-5 option ">
                <label
                  className="mb-1 font-bold tracking-wider"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <input
                  className="w-full px-3 py-2 text-black bg-gray-100 border-0 border-gray-300 rounded-full shadow-md outline-0 "
                  type="text"
                  name="firstname"
                  ref={firstname}
                />
              </div>
              <div className="flex flex-col self-center w-1/2 my-5 option">
                <label
                  className="mb-1 font-bold tracking-wider"
                  htmlFor="lastname"
                >
                  Last name
                </label>
                <input
                  className="w-full px-3 py-2 text-black bg-gray-100 border-0 border-gray-300 rounded-full shadow-md outline-0 "
                  type="text"
                  name="lastname"
                  ref={lastname}
                  onChange={(e) => {
                    checkUsername(lastname);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col self-center w-full my-5 option lg:w-10/12">
              <label className="mb-1 font-bold tracking-wider" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 text-black bg-gray-100 border-0 border-gray-300 rounded-full shadow-md outline-0 "
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
            <div className="flex flex-col self-center w-full my-5 option lg:w-10/12">
              <label
                className="mb-1 font-bold tracking-wider"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="w-full px-3 py-2 text-black bg-gray-100 border-0 border-gray-300 rounded-full shadow-md outline-0 "
                type="password"
                name="confirmPassword"
                ref={confPassword}
                onChange={(e) => {
                  checkConfPassword(confPassword);
                }}
              />
            </div>
            <div className="flex w-full my-3 align-items self outline-0-center lg:w-10/12">
              <label htmlFor="tac">
                <input
                  id="tac"
                  type="checkbox"
                  name="terms-and-conditions"
                  className="w-4 h-4 mr-1"
                  ref={checkbox}
                />
                I agree to the Terms and Conditions.
              </label>
            </div>
            <button
              className="px-5 py-3 text-black transition-all rounded-full w-36 outline-0 bg-gradient-to-t from-purple-500 to-purple-100 hover:shadow-xl hover:scale-105"
              type="submit"
              onClick={(e) => {
                validator(
                  e,
                  lastname.current,
                  email.current,
                  password.current,
                  confPassword.current,
                  checkbox.current
                );
              }}
            >
              Sign Up
            </button>
            <p className="mt-4">
              Already a member?
              <Link to={'/login'} className="font-bold ">
                {' '}
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
