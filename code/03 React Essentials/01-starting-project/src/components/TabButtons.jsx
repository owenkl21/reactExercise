import React from 'react';
import { CORE_CONCEPTS } from '../data';

function TabButton({ onSelect, selectedTopic }) {
  return Object.keys(CORE_CONCEPTS).map((key) => {
    const { title } = CORE_CONCEPTS[key];
    const isActive = title === selectedTopic; // Determine if this button is active
    console.log(title);
    return (
      <button
        className={isActive ? 'active' : ''}
        onClick={() => onSelect(title)}
        key={key}
      >
        {title}
      </button>
    );
  });
}
export default TabButton;
