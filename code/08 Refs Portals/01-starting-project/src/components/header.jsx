import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div id="headContainer">
        <div id="logo">
          <img src="../src/assets/boxing.png" alt="logo" />
          <h1>
            <span>b</span>ox<span>b</span>alboa
          </h1>
        </div>
        <div id="links" className={isMenuOpen ? 'open' : ''}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
}
