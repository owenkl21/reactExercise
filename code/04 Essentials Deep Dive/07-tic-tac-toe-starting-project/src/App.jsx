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
  const [player1Name, setPlayer1Name] = useState('Player 1');
  const [player2Name, setPlayer2Name] = useState('Player 2');
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

  let winnerSymbol = 'X'; // Let's say 'X' is the winner
  let winnerName = winnerSymbol === 'X' ? player1Name : player2Name;
  return (
    <main>
      <Header />
      {gameOver ? (
        <div id="game-contain">
          <GameOver reset={resetGameBoard} winner={winnerName}></GameOver>
        </div>
      ) : (
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName={player1Name}
              setPlayerName={setPlayer1Name}
              symbol="X"
              isActive={activePlayer === 'X'}
            />
            <Player
              initialName={player2Name}
              setPlayerName={setPlayer2Name}
              symbol="O"
              isActive={activePlayer === 'O'}
            />
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            gameBoard={gameBoard}
            turns={gameTurns}
            gameWon={gameWon}
            setGameBoard={setGameBoard}
          />
        </div>
      )}
      {gameTurns.length > 0 && <Log turns={gameTurns} />}
    </main>
  );
}

export default App;
