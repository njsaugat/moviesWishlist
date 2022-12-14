import React, { useState } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const loadingIcon = <FontAwesomeIcon icon={faSpinner} spin size="5x" />;
const Loading = () => {
  const [showDiv, setShowDiv] = useState(false);
  setTimeout(() => setShowDiv(true), 250);
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-tr from-slate-400 to-slate-700 ">
      <span className="mr-3">{loadingIcon}</span>
      <span
        className={`${
          showDiv ? 'visible opacity-1' : 'invisible opacity-0'
        } transition-all text-xl font-bold duration-300 mt-4 animate-pulse`}
      >
        {' '}
        Loading
      </span>
    </div>
  );
};

export default Loading;
