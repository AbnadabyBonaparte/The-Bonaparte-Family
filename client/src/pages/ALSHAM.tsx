import { PageTemplate } from "./PageTemplate";

export default function ALSHAM() {
  const sections = [
    {
      title: "What is ALSHAM?",
      content:
        "ALSHAM Global Commerce is the economic engine of our freedom. It's a multi-layered system of digital products, services, and automation designed to create sustainable income while maintaining our values.",
    },
    {
      title: "Our Products & Services",
      content:
        "From digital courses to consulting, from automation tools to premium content—our offerings are designed to help others build freedom while generating the resources we need for our mission.",
    },
    {
      title: "Technology & Agents",
      content:
        "We leverage cutting-edge technology: AI agents, automation systems, and data infrastructure. These are not just tools—they're multipliers of our impact.",
    },
    {
      title: "2026-2027 Roadmap",
      content:
        "We're scaling ALSHAM to become a billion-dollar enterprise. Our vision is ambitious, our systems are rigorous, and our execution is disciplined.",
    },
  ];

  return (
    <PageTemplate
      title="ALSHAM"
      subtitle="Global Commerce, systems, and the economic motor of freedom."
      sections={sections}
    />
  );
}
