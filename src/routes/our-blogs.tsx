import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { blogs } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Newsletter } from "@/components/ui/Newsletter";

export const Route = createFileRoute("/our-blogs")({
  head: () => ({
    meta: [
      { title: "Insights & Blog | ITnIS Consulting" },
      { name: "description", content: "Insights on ICT, cybersecurity, ISO 27001 and smart building from the ITnIS Consulting team." },
      { property: "og:title", content: "ITnIS — Exploring ideas and insights" },
      { property: "og:description", content: "ICT and security insights from ITnIS Consulting." },
      { property: "og:url", content: "/our-blogs" },
    ],
    links: [{ rel: "canonical", href: "/our-blogs" }],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  const [featured, ...rest] = blogs;
  return (
    <>
      <section className="bg-navy pt-36 pb-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Insights</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Exploring ideas <span className="text-gradient-gold">and insights</span>
          </h1>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Featured" title={featured.title} center={false} />
          <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-8 grid gap-8 rounded-2xl border border-border bg-card p-8 shadow-card lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy">
              <div className="absolute inset-0 gradient-navy" />
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-6xl text-gradient-gold">ITnIS</span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
                <span className="inline-flex items-center gap-1"><Tag className="h-3.5 w-3.5" /> {featured.category}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl text-navy md:text-3xl">{featured.title}</h3>
              <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
              <button className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-gold">
                Read article <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.article>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {rest.map((b, i) => (
              <motion.article key={b.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-7 shadow-card hover-lift">
                <div className="flex gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {b.date}</span>
                  <span className="rounded-full bg-gold/10 px-2 py-0.5 text-gold">{b.category}</span>
                </div>
                <h3 className="mt-3 font-display text-xl text-navy">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.excerpt}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  Read more <ArrowRight className="h-4 w-4" />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
