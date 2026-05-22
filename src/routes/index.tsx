import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/hero/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { Newsletter } from "@/components/ui/Newsletter";
import { AIRiskAssessment } from "@/components/ai/AIRiskAssessment";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ITnIS Consulting | Premium ICT & Information Security in Islamabad" },
      { name: "description", content: "Premium ICT Consultancy, Information Security, Data Center Design and Smart Building solutions in Pakistan. Designing & Securing the Digital Future." },
      { name: "keywords", content: "ICT consultancy Islamabad, information security Pakistan, data center design, ISO 27001, smart city, cybersecurity audit" },
      { property: "og:title", content: "ITnIS Consulting | Designing & Securing the Digital Future" },
      { property: "og:description", content: "Premium ICT & Information Security consultancy firm serving enterprises and government." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="ITnIS core capabilities"
            description="From strategy to execution — six pillars that protect and progress your organisation."
          />
          <div className="mt-14"><ServiceGrid /></div>
        </div>
      </section>

      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Specialised Solutions"
            title="Detailed engineering services"
            description="Deep technical expertise across the full ICT and security stack."
          />
          <div className="mt-14"><ServiceGrid detailed /></div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="AI-Powered"
            title="Know your risk in 30 seconds"
            description="Our AI analyses your profile and returns a personalised security assessment with recommended next steps."
          />
          <div className="mt-12"><AIRiskAssessment /></div>
        </div>
      </section>

      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Work"
            title="Case studies & projects"
            description="A selection of engagements across government, enterprise and hospitality."
          />
          <div className="mt-14"><ProjectGrid /></div>
          <div className="mt-10 text-center">
            <Link to="/our-projects" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:opacity-80">
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <Newsletter />
    </>
  );
}
