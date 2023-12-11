import React from 'react';
import { CORE_CONCEPTS } from '../data';

function CoreConcept() {
  return (
    <ul>
      {Object.keys(CORE_CONCEPTS).map((key) => {
        const { title, description, image } = CORE_CONCEPTS[key];
        return (
          <li key={key}>
            <img id="img" src={image} alt={title} />
            <h3 id="h3">{title}</h3>
            <p>{description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default CoreConcept;
