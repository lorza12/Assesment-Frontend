/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Timer = ({ product }) => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState('00:00:00');

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const StopLink = (e) => {
    e.preventDefault();
  };

  const startTimer = (e) => {
    const {
      total, hours, minutes, seconds,
    } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        `${hours > 9 ? hours : `0${hours}`}:${
          minutes > 9 ? minutes : `0${minutes}`
        }:${seconds > 9 ? seconds : `0${seconds}`}`,
      );
    } else if (total === 0) {
      StopLink();
    }
  };

  const clearTimer = (e) => {
    setTimer('00:00:00');

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    const deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + Math.floor(Math.random() * (180 - 60) + 60));
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);
  return (
    <div className="cont">
      {timer === '00:00:00' ? (
        <Link
          type=""
          onClick={(event) => event.preventDefault()}
          to={`/product/${product.id}`}
        >
          go to item
        </Link>
      ) : (
        <Link to={`/product/${product.id}`}>go to item</Link>
      )}
      <h2>{timer}</h2>
    </div>
  );
};

export default Timer;
