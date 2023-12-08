import React from 'react';
import comp from '../assets/components.png';
import config from '../assets/config.png';
import jsx from '../assets/jsx-ui.png';
import state from '../assets/state-mgmt.png';

function CoreConcept() {
  const coreData = {
    Component: {
      title: 'Components',
      description:
        'The core UI building block, Components are independent and reusable bits of code in React, similar to JavaScript functions. ',
      src: comp,
    },
    JSX: {
      title: 'JSX',
      description:
        "JSX stands for JavaScript XML, and it's a syntax extension for JavaScript used in React to describe what the UI should look like. ",
      src: config,
    },
    Props: {
      title: 'Props',
      description:
        'Props (short for "properties") are read-only inputs to React components that allow data to be passed from a parent component to a child component.',
      src: jsx,
    },
    State: {
      title: 'State',
      description:
        'State is a built-in React object used to contain data or information about the component.',
      src: state,
    },
  };

  return (
    <ul>
      {Object.keys(coreData).map((key) => {
        const { title, description, src } = coreData[key];
        return (
          <li key={key}>
            <img id="img" src={src} alt={title} />
            <h3 id="h3">{title}</h3>
            <p>{description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default CoreConcept;
