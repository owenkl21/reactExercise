import { useState, useRef } from 'react';

export default function Player() {
  const input = useRef();
  const [playerName, setPlayerName] = useState(null);

  function handleChange() {
    // Check the length of the input field's value
    if (input.current.value.length === 0) {
      setPlayerName(null);
    }
  }

  function handleClick() {
    setPlayerName(input.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'Unknown entity'}</h2>
      <p>
        <input ref={input} type="text" onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
