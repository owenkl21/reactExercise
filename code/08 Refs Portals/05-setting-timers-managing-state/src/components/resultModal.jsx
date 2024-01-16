import { forwardRef } from 'react';

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, timeLeft },
  ref
) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>{result === 'won' ? 'Congratulations!' : 'Oops!'}</h2>
      <p>
        The target time was <strong>{targetTime}</strong> seconds
      </p>
      <p>
        You {result === 'won' ? 'successfully' : 'stopped the timer with'}{' '}
        <strong>
          {timeLeft} {timeLeft > 1 || timeLeft === 0 ? 'seconds ' : 'second '}
          left
        </strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
