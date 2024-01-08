import React from 'react';
import Header from './components/header.jsx';
import Player from './components/player.jsx';
import GameBoard from './components/gameboard.jsx';
import GameOver from './components/gameover.jsx';
import Log from './components/log.jsx';
import { useState, useEffect } from 'react';
import { WINNING_COMBINATIONS } from './winning-combinations.js';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const [gameTurns, setGameTurns] = useState([]);
  const [gameBoard, setGameBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  useEffect(() => {
    let newGameBoard = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    // Populate the game board based on turns
    for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;
      newGameBoard[row][col] = player;
    }

    // Check for a winner
    let foundWinner = null;
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (
        newGameBoard[a.row][a.column] &&
        newGameBoard[a.row][a.column] === newGameBoard[b.row][b.column] &&
        newGameBoard[a.row][a.column] === newGameBoard[c.row][c.column]
      ) {
        foundWinner = newGameBoard[a.row][a.column];
        break;
      }
    }

    setGameBoard(newGameBoard);
    if (foundWinner) {
      setGameWon(true);
      setWinner(foundWinner);
      setGameOver(true);
    } else {
      setGameWon(false);
    }
  }, [gameTurns]);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
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

  const resetGameBoard = () => {
    let initialGameBoard = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    setGameBoard(initialGameBoard);
    setGameTurns([]);
    setGameWon(false);
    setGameOver(false);
    setWinner(null);
    setActivePlayer('X'); // or whichever player should start the new game
  };
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
        {gameWon && <p className="winner"> You won, {winner}!</p>}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          gameBoard={gameBoard}
          turns={gameTurns}
          gameWon={gameWon}
          setGameBoard={setGameBoard}
        />
        {gameOver && <GameOver reset={resetGameBoard}></GameOver>}
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
