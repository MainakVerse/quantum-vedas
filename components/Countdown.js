'use client'; 

import { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className="countdownContainer">
      <div className="card">
        <span className="number text">{timeLeft.days}</span>
        <span className="label">Days</span>
      </div>
      <div className="card">
        <span className="number">{timeLeft.hours}</span>
        <span className="label">Hours</span>
      </div>
      <div className="card">
        <span className="number">{timeLeft.minutes}</span>
        <span className="label">Minutes</span>
      </div>
      <div className="card">
        <span className="number">{timeLeft.seconds}</span>
        <span className="label">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;