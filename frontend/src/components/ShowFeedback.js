import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ShowFeedback = ({ movieFeedback, setMovieFeedback, sendEmail }) => {
  const [showDiv, setShowDiv] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDiv(false);
      //have set the movie addition feedback to false
      setMovieFeedback(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [setMovieFeedback]);

  return createPortal(
    showDiv && (
      <div
        className={`
      fixed z-50 flex justify-center w-56 p-3 tracking-wide text-black rounded-lg movie-feedback bottom-5 right-5 bg-slate-200 `}
      >
        {sendEmail ? (
          <>Email was {movieFeedback ? 'sent' : 'not sent'} !</>
        ) : (
          <>Movie was {movieFeedback ? 'added' : 'not added'} !</>
        )}
      </div>
    ),
    document.getElementById('portal3')
  );
};
export default ShowFeedback;
