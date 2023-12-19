import React from 'react';
import { CORE_CONCEPTS } from '../data';
import Section from './SectionComp';

function CoreConcept() {
  return (
    <Section id="core-concepts">
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
    </Section>
  );
}

export default CoreConcept;
