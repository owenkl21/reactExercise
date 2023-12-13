import React from 'react';
import { CORE_CONCEPTS } from '../data';

function TabButton() {
  return Object.keys(CORE_CONCEPTS).map((key) => {
    const { title } = CORE_CONCEPTS[key];
    console.log(title);
    return <button key={key}>{title}</button>;
  });
}
export default TabButton;
