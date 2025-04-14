import { CORE_CONCEPTS, EXAMPLES } from "./data.ts";
import Header from "./components/Header/Header.tsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.tsx";
import TabButton from "./components/TabButton/TabButton.tsx";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState<string>();

  function handleSelect(selectedButton: string) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES].title}</h3>
        <p>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
