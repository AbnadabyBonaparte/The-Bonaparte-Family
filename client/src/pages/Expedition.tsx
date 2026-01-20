import { PageTemplate } from "./PageTemplate";

export default function Expedition() {
  const sections = [
    {
      title: "The Motorhome Alfredo",
      content:
        "Alfredo is not just a vehicle—it's our mobile home, our workspace, and our symbol of freedom. Built with intention and engineered for autonomy, it enables us to live on the road without compromising on comfort or functionality.",
    },
    {
      title: "The Journey",
      content:
        "Our expedition is a living project. Every checkpoint is documented, every route is intentional, and every destination teaches us something new about ourselves and the world.",
    },
    {
      title: "Autonomy Systems",
      content:
        "Energy independence, water systems, internet connectivity—we've engineered Alfredo to be self-sufficient. Our infrastructure supports our freedom.",
    },
    {
      title: "Diary & Documentation",
      content:
        "We document our journey in real-time. Field notes, photos, and reflections are shared to inspire others and create a living archive of our expedition.",
    },
  ];

  return (
    <PageTemplate
      title="Expedition"
      subtitle="The motorhome Alfredo, our journey, and the road ahead."
      sections={sections}
    />
  );
}
