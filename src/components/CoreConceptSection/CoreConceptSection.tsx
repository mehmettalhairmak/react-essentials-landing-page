import CoreConcept from "../CoreConcept/CoreConcept.tsx";
import { CORE_CONCEPTS } from "../../data.ts";
import Section from "../Section/Section.tsx";

export default function CoreConceptSection() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}
