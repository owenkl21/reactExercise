import React from 'react';
import { CORE_CONCEPTS } from '../data';

function TabButton({ onSelect }) {
  return Object.keys(CORE_CONCEPTS).map((key) => {
    const { title } = CORE_CONCEPTS[key];
    console.log(title);
    return (
      <button onClick={() => onSelect(title)} key={key}>
        {title}
      </button>
    );
  });
}
export default TabButton;
