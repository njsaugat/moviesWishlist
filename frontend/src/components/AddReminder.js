import React, { useContext, useRef, useState } from 'react';
import { faBell, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoggedInContext } from '../App';
import { useNavigate } from 'react-router-dom';

import axios, * as others from 'axios';
import ShowFeedback from './ShowFeedback';

const timeIntervals = [
  { label: 'Now' },
  { label: '5mins' },
  { label: '1hr' },
  { label: '12hrs' },
  { label: '24hrs' },
];

const DropDownList = (props) => {
  const [list, setList] = useState(props.children ? props.children : []);
  const handleChange = (e) => {
    props.setSelected(e.target.value);
  };
  return (
    <div className="hidden outline-none col-sm-6 select-list focus:outline-none">
      <div className="form-group">
        {props.title ? <label>{props.title}</label> : <div />}
        <select
          className="text-black bg-transparent form-control "
          value={props.selected}
          ref={props.selectedTime}
          onChange={handleChange}
        >
          {list.map((item, k) => (
            <option key={k} value={JSON.stringify(item)}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const AddReminder = ({ movieId }) => {
  const [movieFeedback, setMovieFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const selectedTime = useRef(null);

  function setReminder(movieId) {
    axios
      .post('/api/movie-reminder', {
        method: 'POST',
        headers: {
          'Content-Type': 'mutlipart/form-data',
        },
        body: {
          setReminder: selectedTime.current.value,
          movieId: movieId,
        },
      })
      .then((res) => {
        console.log(res.data.mailSentFeedback);
        setLoading(false);
        if (res.data.mailSentFeedback) {
          return setMovieFeedback(true);
        }

        return setMovieFeedback(false);
      });
  }
  const bellIcon = <FontAwesomeIcon icon={faBell} />;
  const loadingIcon = <FontAwesomeIcon icon={faSpinner} spin size="2x" />;

  const { loggedIn } = useContext(LoggedInContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-end">
        <button
          className="flex items-center self-start justify-center w-10 h-10 p-2 mt-4 mr-2 text-black transition-all duration-300 rounded-full hover:w-56 notification bg-gradient-to-t from-purple-200 to-purple-500"
          onClick={(e) => {
            if (!loggedIn) {
              return navigate('/login');
            }
            setLoading(true);
            setReminder(movieId);
            console.log('reminder can be set');
          }}
        >
          <span className={`reminder hidden pr-3`}> Set Reminder</span>
          <DropDownList
            selected={selected}
            setSelected={setSelected}
            selectedTime={selectedTime}
          >
            {timeIntervals}
          </DropDownList>
          <span>{bellIcon}</span>
        </button>
        <span className={loading ? 'visible' : 'invisible'}>{loadingIcon}</span>
      </div>
      {(movieFeedback === true || movieFeedback === false) && (
        <ShowFeedback
          movieFeedback={movieFeedback}
          setMovieFeedback={setMovieFeedback}
          sendEmail={true}
        />
      )}
    </>
  );
};

export default AddReminder;
