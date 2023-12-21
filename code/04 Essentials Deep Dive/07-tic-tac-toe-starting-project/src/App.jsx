import React from 'react';
import Header from './components/header.jsx';
import Player from './components/player.jsx';
import GameBoard from './components/gameboard.jsx';
import Log from './components/log.jsx';
import { useState } from 'react';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  const [gameTurns, setGamesTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setGamesTurns((prevTurns) => {
      let currentPlayer = activePlayer;
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      } else {
        currentPlayer = 'X';
      }

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updateTurns;
    });

    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
  }
  return (
    <main>
      <Header />
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={'Player 1'}
            symbol={'X'}
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName={'Player 2'}
            symbol={'O'}
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
