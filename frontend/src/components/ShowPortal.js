import React, { useContext } from 'react';
import { createPortal } from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from 'react-router-dom';
import { LoggedInContext } from '../App';

const crossIcon = <FontAwesomeIcon icon={faXmark} />;

const ShowPortal = ({
  showOptions,
  setShowOptions,
  property,
  message,
  logOut,
}) => {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

  if (!showOptions) {
    return null;
  }
  return createPortal(
    <div
      onClick={(e) => {
        e.preventDefault();
        setShowOptions(false);
        // document.body.style.overflowY = 'hidden';
      }}
      className={`overflow-y-hidden  absolute z-50 font-poppins top-0 left-0 right-0 bottom-0 opacity-95 z-100 bg-gray-600 text-black ${
        showOptions === true ? 'active' : 'inactive'
      }`}
    >
      <div className="fixed w-4/5 p-5 -translate-x-1/2 -translate-y-1/2 bg-white z-100 top-1/2 left-1/2 md:w-1/2 lg:w-1/4 rounded-xl ">
        <div className="relative flex items-center justify-between w-full">
          <h1 className="flex items-center justify-center">{message}</h1>
          <div
            onClick={(e) => {
              e.preventDefault();
              setShowOptions(false);
            }}
            className="text-3xl text-red-600 cursor-pointer "
          >
            {crossIcon}
          </div>
        </div>
        <div className="flex w-full mt-4 ">
          <div
            onClick={(e) => {
              e.preventDefault();
              setShowOptions(false);
            }}
            className="flex items-center justify-center w-1/2 p-2 border-r-2 cursor-pointer "
          >
            Cancel
          </div>
          <button
            onClick={(e) => {
              // send Axios delete request
              if (property) {
                console.log(`/property/${property.id}`);
                fetch(`/property/${property.id}`, {
                  method: 'DELETE',
                }).then((res) => {
                  res.json();
                  // @TODO: reload the page after removal or manage the state;
                  // window.location.reload();
                });
                // navigate('/loading');
                setTimeout(() => {
                  navigate('/');
                }, 2000);
                // remove from current listing as well
              }
              if (logOut) {
                setLoggedIn(false);
                sessionStorage.removeItem('isLoggedIn');
                sessionStorage.removeItem('movieIds');
                console.log(logOut);
                fetch('/api/logout', {
                  method: 'POST',
                }).then((res) => {
                  // res.json();
                  // navigate('/');
                });
                // navigate('/loading');
                setTimeout(() => {
                  navigate('/');
                  window.location.reload(true);
                }, 1000);
              }
            }}
            className="flex items-center justify-center w-1/2 p-2 tracking-widest cursor-pointer bg-gradient-to-t from-red-600 to-red-400"
          >
            {logOut ? 'Yes' : 'OK'}
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('portal2')
  );
};
export default ShowPortal;
