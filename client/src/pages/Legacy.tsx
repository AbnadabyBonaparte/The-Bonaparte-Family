import { PageTemplate } from "./PageTemplate";

export default function Legacy() {
  const sections = [
    {
      title: "Letters to Our Children",
      content:
        "We write for Sarah and Ana Maria. These letters contain our values, our lessons, and our hopes for their future. They are the foundation of our legacy.",
    },
    {
      title: "Principles of the House",
      content:
        "Our family operates by clear principles. These are not rules imposed from above—they are agreements we've made together about how we want to live.",
    },
    {
      title: "Lineage & History",
      content:
        "The Bonaparte name carries history. We honor our ancestors while creating new traditions that will be passed to future generations.",
    },
    {
      title: "The Manual of Freedom",
      content:
        "We're compiling a living manual—a guide to building freedom, creating systems, and living with intention. This is our gift to the world.",
    },
  ];

  return (
    <PageTemplate
      title="Legacy"
      subtitle="Letters, principles, lineage, and the future we're building."
      sections={sections}
    />
  );
}
