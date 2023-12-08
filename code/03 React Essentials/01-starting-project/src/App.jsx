import Header from './components/header.jsx';
import CoreConcept from './components/core-conecpts.jsx';
import Section from './../../../04 Essentials Deep Dive/05-multiple-jsx-slots/src/components/Section';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <CoreConcept />
        </section>
      </main>
    </div>
  );
}

export default App;
