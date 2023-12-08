import React, { useState, useEffect } from 'react';
import logo from '../assets/react-core-concepts.png';

const descriptions = ['Fundamental', 'Crucial', 'Core'];

function Header() {
  const [description, setDescription] = useState('');

  function randNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = randNumber(descriptions.length - 1);
      setDescription(descriptions[randomIndex]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <h2>{description}</h2>
      <p>
        React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

export default Header;
