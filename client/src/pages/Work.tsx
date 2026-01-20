import { PageTemplate } from "./PageTemplate";

export default function Work() {
  const sections = [
    {
      title: "Essays & Manifestos",
      content:
        "We share our thinking through long-form essays. These are not blog posts—they're deep dives into philosophy, strategy, and the principles that guide our life.",
    },
    {
      title: "eBooks & Courses",
      content:
        "Our knowledge is packaged into premium eBooks and courses. We teach what we've learned: freedom, systems, technology, and the art of intentional living.",
    },
    {
      title: "Documentaries & Multimedia",
      content:
        "Our story is told through video, photography, and multimedia content. We document our journey to inspire and educate others.",
    },
    {
      title: "The Archive",
      content:
        "Every piece of work is archived. This is our intellectual legacy—a living library of our thinking, learning, and evolution.",
    },
  ];

  return (
    <PageTemplate
      title="Work & Obra"
      subtitle="Essays, eBooks, documentaries, and the archive of our thinking."
      sections={sections}
    />
  );
}
