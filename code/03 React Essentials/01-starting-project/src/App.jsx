import Header from './components/header.jsx';
import CoreConcept from './components/core-conecpts.jsx';
import TabContent from './components/tab-content.jsx';
function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcept />
        <section id="examples">
          <TabContent />
        </section>
      </main>
    </div>
  );
}

export default App;
