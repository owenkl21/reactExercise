import React from 'react';
import Button from './../../../../18 Practice Project - Food Order/12-finishing-touches/src/components/UI/Button';

export default function GameOver({ reset }) {
  return (
    <>
      <div>
        <button id="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}
