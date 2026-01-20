import { PageTemplate } from "./PageTemplate";

export default function Family() {
  const sections = [
    {
      title: "Our Story",
      content:
        "The Bonaparte Family is built on a foundation of intentionality, freedom, and shared purpose. We chose to step outside the conventional path and create our own reality.",
    },
    {
      title: "Our Values",
      content:
        "Freedom. Presence. Learning. Creation. Legacy. These are not just words—they are the principles that guide every decision we make.",
    },
    {
      title: "The Matilha",
      content:
        "Our family includes not just humans, but our beloved pets who are part of this adventure. Every member of our household plays a role in our collective story.",
    },
    {
      title: "Building Together",
      content:
        "From the youngest to the oldest, we are all architects of our shared future. Education, work, and play are seamlessly integrated into our daily life.",
    },
  ];

  return (
    <PageTemplate
      title="The Family"
      subtitle="Who we are, our history, and the values that guide us."
      sections={sections}
    />
  );
}
