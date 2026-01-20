import { PageTemplate } from "./PageTemplate";

export default function Education() {
  const sections = [
    {
      title: "Worldschooling Philosophy",
      content:
        "Education is not confined to classrooms. The world is our curriculum. Real experience, real projects, and real mentors guide our learning.",
    },
    {
      title: "Homeschool Structure",
      content:
        "We combine structured learning with freedom. Core subjects are taught with rigor, but the method is always adapted to each child's learning style and interests.",
    },
    {
      title: "Real-World Projects",
      content:
        "From building projects on the sítio to managing aspects of our business, our children learn by doing. Theory is always grounded in practice.",
    },
    {
      title: "Continuous Learning",
      content:
        "Education doesn't end with childhood. Our entire family is committed to lifelong learning, growth, and the pursuit of knowledge.",
    },
  ];

  return (
    <PageTemplate
      title="Education"
      subtitle="Homeschool and worldschooling as a philosophy of life."
      sections={sections}
    />
  );
}
