import { useState, useRef, useEffect } from 'react';
import ResultModal from './resultModal';

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const [timeLeft, setTimeLeft] = useState(targetTime * 1000);
  const [result, setResult] = useState('');
  const timer = useRef();
  const dialog = useRef();

  useEffect(() => {
    if (timerStarted) {
      timer.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 10;
          if (newTime <= 0) {
            clearInterval(timer.current);
            setTimerExpired(true);
            dialog.current.showModal();
            return 0;
          }
          return newTime;
        });
      }, 10); // Update interval to 10 milliseconds
    } else {
      clearInterval(timer.current);
    }
    return () => clearInterval(timer.current);
  }, [timerStarted]);

  function handleStart() {
    setTimeLeft(targetTime * 1000);
    setTimerStarted(true);
    setTimerExpired(false);
    setResult('');
  }

  function handleStop() {
    clearInterval(timer.current);
    setTimerStarted(false);
    if (timeLeft <= 10 && timeLeft >= 0) {
      setResult('won');
    } else {
      setResult('lost');
    }
    dialog.current.showModal();
  }

  // Format timeLeft in decimal seconds for display
  const displayTimeLeft = (timeLeft / 1000).toFixed(2);

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeLeft={displayTimeLeft}
        result={result}
      ></ResultModal>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? `Time is running` : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
