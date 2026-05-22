import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { allServiceDetails, mainServices, detailedServices } from "@/data/site";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const detail = allServiceDetails[params.slug];
    if (!detail) throw notFound();
    return { detail, slug: params.slug };
  },
  head: ({ params, loaderData }) => ({
    meta: [
      { title: `${loaderData?.detail.title ?? "Service"} | ITnIS Consulting` },
      { name: "description", content: loaderData?.detail.intro ?? "ITnIS service detail" },
      { property: "og:title", content: `${loaderData?.detail.title} — ITnIS Consulting` },
      { property: "og:description", content: loaderData?.detail.intro ?? "" },
      { property: "og:url", content: `/services/${params.slug}` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    scripts: loaderData ? [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: loaderData.detail.title,
        description: loaderData.detail.intro,
        provider: { "@type": "Organization", name: "ITnIS Consulting" },
      }),
    }] : [],
  }),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { detail, slug } = Route.useLoaderData();
  const related = [...mainServices, ...detailedServices].filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="bg-navy pt-36 pb-20 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-xs text-gold hover:opacity-80">
            <ArrowLeft className="h-3.5 w-3.5" /> All services
          </Link>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            {detail.title}
          </motion.h1>
          <p className="mt-6 max-w-2xl text-white/70 md:text-lg">{detail.intro}</p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          {detail.sections.map((sec: { heading: string; points: string[] }) => (
            <div key={sec.heading} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <h2 className="font-display text-2xl text-navy">{sec.heading}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {sec.points.map((p: string) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-navy">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="rounded-2xl bg-navy p-10 text-center text-white">
            <h3 className="font-display text-2xl">Ready to discuss your project?</h3>
            <p className="mt-3 text-white/70">Our consultants are ready to design a solution tailored to your environment.</p>
            <Link to="/contact-us" className="mt-6 inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-3 text-sm font-semibold text-navy shadow-gold">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-2xl text-navy">Related services</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }}
                className="group rounded-xl border border-border bg-card p-6 shadow-card hover-lift hover:border-gold/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-gold group-hover:gradient-gold group-hover:text-navy">
                  <s.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 font-display text-lg text-navy">{s.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{"short" in s ? s.short : s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
