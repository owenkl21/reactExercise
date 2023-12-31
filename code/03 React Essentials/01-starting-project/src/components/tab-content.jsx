import React from 'react';
import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from '../components/TabButtons.jsx';
import Section from './SectionComp.jsx';

export default function TabContent() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <Section id="examples">
        <h3> Examples </h3>
        <menu>
          <TabButton selectedTopic={selectedTopic} onSelect={handleClick} />
        </menu>
        <div id="tab-content">
          {selectedTopic ? (
            <div>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <hr />
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code id="glow">{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : (
            <div>
              <h3>Info</h3>
              <p>
                React is a popular JavaScript library for building user
                interfaces, particularly single-page applications. It's known
                for its component-based architecture, enabling developers to
                create reusable UI components. React uses a virtual DOM to
                optimize rendering and improve app performance. It also
                implements a unidirectional data flow, providing a clear and
                predictable way to manage application state.
                <br />
                <br />
                React's declarative approach makes it straightforward to design
                interactive UIs. Developers define the desired state of their
                UI, and React efficiently updates and renders the right
                components when data changes. <br />
                <br />
                To delve deeper, and explore more click on the topics like
                Components, JSX, Props, and State above, which are fundamental
                to mastering React development.
              </p>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
