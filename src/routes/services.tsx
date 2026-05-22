import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { mainServices } from "@/data/site";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | ITnIS Consulting" },
      { name: "description", content: "ICT Consultancy, Information Security, Unified Communication, Smart City/Building, Audits and Trainings — premium services from ITnIS." },
      { property: "og:title", content: "ITnIS Services — ICT, Security, Smart Building & Audits" },
      { property: "og:description", content: "Premium ICT & Information Security services from ITnIS Consulting." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-navy pt-36 pb-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Services</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Our ITnIS <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/70 md:text-lg">
            Tailored strategies and advanced solutions across the ICT and Information Security spectrum.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Core Capabilities" title="Six pillars of ITnIS consultancy" />
          <div className="mt-14"><ServiceGrid /></div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Detailed Services" title="Specialised engineering services" />
          <div className="mt-14"><ServiceGrid detailed /></div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Deep Dive" title="What we deliver in each engagement" />
          <div className="mt-12 space-y-8">
            {mainServices.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card p-8 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy text-gold"><s.icon className="h-6 w-6" /></div>
                  <div>
                    <h3 className="font-display text-2xl text-navy">{s.title}</h3>
                    <p className="mt-2 text-muted-foreground">{s.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs text-navy">{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
