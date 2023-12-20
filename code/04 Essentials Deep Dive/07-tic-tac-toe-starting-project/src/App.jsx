import React from 'react';
import Header from './components/header.jsx';
import Player from './components/player.jsx';
function App() {
  return (
    <main>
      <Header />
      <div id="game-container">
        <ol id="players">
          <Player initialName={'Player 1'} symbol={'X'} />
          <Player initialName={'Player 2'} symbol={'O'} />
        </ol>
      </div>
    </main>
  );
}

export default App;
