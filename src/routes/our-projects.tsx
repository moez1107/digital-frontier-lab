import { createFileRoute } from "@tanstack/react-router";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const Route = createFileRoute("/our-projects")({
  head: () => ({
    meta: [
      { title: "Our Projects | ITnIS Consulting" },
      { name: "description", content: "Selected ITnIS projects across government, enterprise and hospitality — security audits, ISO 27001, CCTV, smart buildings and more." },
      { property: "og:title", content: "ITnIS — Projects & Case Studies" },
      { property: "og:description", content: "Selected case studies from ITnIS Consulting." },
      { property: "og:url", content: "/our-projects" },
    ],
    links: [{ rel: "canonical", href: "/our-projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <section className="bg-navy pt-36 pb-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Portfolio</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Some of our <span className="text-gradient-gold">projects</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/70 md:text-lg">
            Engagements across government, enterprise and hospitality — designed and delivered by ITnIS.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Case Studies" title="Filter by category" description="Explore the breadth of our work." />
          <div className="mt-14"><ProjectGrid filterable /></div>
        </div>
      </section>
    </>
  );
}
