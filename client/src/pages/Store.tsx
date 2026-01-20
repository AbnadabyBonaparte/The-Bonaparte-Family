import { PageTemplate } from "./PageTemplate";

export default function Store() {
  const sections = [
    {
      title: "Support the Journey",
      content:
        "Our store is not about profit—it's about sustainability. Every product is designed to help you while supporting our mission.",
    },
    {
      title: "Physical Products",
      content:
        "From expedition gear to artisanal items, our physical products are carefully curated. Each purchase supports our work and values.",
    },
    {
      title: "Digital Products",
      content:
        "Courses, eBooks, templates, and tools. Our digital offerings help you build your own freedom while generating resources for our family.",
    },
    {
      title: "Consulting & Services",
      content:
        "We offer consulting for those ready to build their own systems. One-on-one guidance, strategy sessions, and custom solutions.",
    },
  ];

  return (
    <PageTemplate
      title="Store"
      subtitle="Support the journey. Products and services that matter."
      sections={sections}
    />
  );
}
