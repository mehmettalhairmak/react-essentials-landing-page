import Header from "./components/Header/Header.tsx";
import CoreConceptSection from "./components/CoreConceptSection/CoreConceptSection.tsx";
import ExampleSection from "./components/ExampleSection/ExampleSection.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConceptSection />
        <ExampleSection />
      </main>
    </>
  );
}

export default App;
