import Header from './components/header.jsx';
import CoreConcept from './components/core-conecpts.jsx';
import TabButton from './components/TabButtons.jsx';
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <CoreConcept />
        </section>
        <section id="examples">
          <h3>Examples</h3>
          <menu>
            <TabButton />
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
