import { PageTemplate } from "./PageTemplate";

export default function Life() {
  const sections = [
    {
      title: "Daily Rhythm",
      content:
        "Our days are structured around intention, not schedules. We balance work, learning, movement, and presence in a way that feels authentic to our values.",
    },
    {
      title: "The Sítio",
      content:
        "Our land is our sanctuary. It's where we grow food, build projects, and reconnect with nature. The sítio is both a physical space and a symbol of our commitment to self-sufficiency.",
    },
    {
      title: "Music & Art",
      content:
        "Creativity is woven into our daily life. Music, art, and expression are not luxuries—they are essential to how we live and communicate.",
    },
    {
      title: "Pets & Community",
      content:
        "Our animals are family. They teach us about presence, responsibility, and unconditional love. Our community extends beyond blood to include those who share our values.",
    },
  ];

  return (
    <PageTemplate
      title="Life"
      subtitle="Our daily rhythm, our sítio, and how we live with intention."
      sections={sections}
    />
  );
}
