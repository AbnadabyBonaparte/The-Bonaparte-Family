import { PageTemplate } from "./PageTemplate";

export default function Faith() {
  const sections = [
    {
      title: "Spirituality Without Dogma",
      content:
        "Our faith is personal and non-institutional. We believe in transcendence, meaning, and connection to something greater than ourselves.",
    },
    {
      title: "Rituals & Practice",
      content:
        "We create rituals that ground us. Silence, meditation, time in nature, and shared reflection are central to our spiritual practice.",
    },
    {
      title: "Philosophy & Ethics",
      content:
        "We are guided by principles: integrity, compassion, wisdom, and service. These principles inform every decision we make.",
    },
    {
      title: "Connection & Community",
      content:
        "Spirituality is not solitary. We seek connection with others who share our values and commitment to living with purpose.",
    },
  ];

  return (
    <PageTemplate
      title="Faith & Spirituality"
      subtitle="Our spiritual practice, philosophy, and connection to the transcendent."
      sections={sections}
    />
  );
}
