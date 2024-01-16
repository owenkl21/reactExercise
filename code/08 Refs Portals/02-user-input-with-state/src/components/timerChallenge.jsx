import React, { useState, useRef } from 'react';

export default function TimerChallenge({ title, targetTime }) {
  const [start, setStart] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const [showLostMessage, setShowLostMessage] = useState(false);

  const timer = useRef();
  function handleSubmit() {
    if (start) {
      setStart(false);
      setTimerExpired(false);
      setShowLostMessage(false);
    } else {
      setStart(true);
      setTimerExpired(false);
      setShowLostMessage(false);

      setTimeout(() => {
        setTimerExpired(true);
        setShowLostMessage(true);

        // Hide the "You Lost" message after 1 or 2 seconds
        timer.current = setTimeout(() => {
          setShowLostMessage(false);
        }, 2000); // Change 1000 to 2000 for 2 seconds
      }, targetTime * 1000);
    }
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {showLostMessage && <p>You Lost</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={start ? handleStop : handleSubmit}>
          {start ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerExpired ? undefined : 'active'}>
        {start ? 'Time is runnning' : 'Timer inactive'}
      </p>
    </section>
  );
}
