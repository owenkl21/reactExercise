import React from 'react';

export default function GameOver({ reset, winner }) {
  return (
    <>
      <div>
        <h1 className="headers">Game Over!</h1>
        <p className="winner">
          Congratulations, {winner} you have won the game.
        </p>
        <button id="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}
