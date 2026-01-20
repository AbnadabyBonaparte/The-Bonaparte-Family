import { PageTemplate } from "./PageTemplate";

export default function Health() {
  const sections = [
    {
      title: "Anti-Entropy Philosophy",
      content:
        "Health is not just physical—it's mental, emotional, and spiritual. We approach wellness as a holistic practice that permeates every aspect of our life.",
    },
    {
      title: "Movement & Training",
      content:
        "Regular movement is non-negotiable. From hiking to strength training, we integrate physical activity into our daily rhythm.",
    },
    {
      title: "Nutrition & Food",
      content:
        "We grow much of our own food. Nutrition is intentional, sourced locally when possible, and always connected to our values.",
    },
    {
      title: "Mental & Spiritual Wellness",
      content:
        "Meditation, reflection, and connection to nature are as important as physical exercise. We prioritize mental clarity and spiritual alignment.",
    },
  ];

  return (
    <PageTemplate
      title="Health & Body"
      subtitle="Our approach to wellness, movement, and anti-entropy."
      sections={sections}
    />
  );
}
