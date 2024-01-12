import React from 'react';
import Player from './components/Player';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header></Header>
      <Player id="player"></Player>
      <Footer></Footer>
    </>
  );
}

export default App;
