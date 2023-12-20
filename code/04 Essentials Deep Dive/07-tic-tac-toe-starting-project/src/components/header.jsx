import React from 'react';
import logo from '/game-logo.png';

export default function Header() {
  return (
    <div id="header">
      <img src={logo} alt="logo"></img>
      <h1>React Tic-Tac-Toe</h1>
    </div>
  );
}
