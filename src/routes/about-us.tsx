import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Target, Eye, Heart, Users, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats } from "@/data/site";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About ITnIS | Your Premier ICT & Information Security Partner" },
      { name: "description", content: "ITnIS is a premium ICT and Information Security consultancy firm with 12+ years securing data centers, smart buildings, and critical infrastructure." },
      { property: "og:title", content: "About ITnIS Consulting" },
      { property: "og:description", content: "Premium ICT & Information Security partner for enterprise and government." },
      { property: "og:url", content: "/about-us" },
    ],
    links: [{ rel: "canonical", href: "/about-us" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Mission", text: "Empower organisations with secure, reliable and efficient ICT systems engineered for the digital future." },
  { icon: Eye, title: "Vision", text: "To be the most trusted ICT and Information Security consultancy across the region." },
  { icon: Heart, title: "Core Values", text: "Integrity, excellence, security-by-design and client partnership in every engagement." },
];

const whyUs = [
  "Vendor-neutral, standards-aligned design",
  "Security baked into every solution",
  "12+ years of cross-industry expertise",
  "Government and enterprise track record",
  "End-to-end lifecycle support",
  "Certified consultants and trainers",
];

function AboutPage() {
  return (
    <>
      <section className="bg-navy pt-36 pb-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">About Us</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Your Premier ICT and{" "}
              <span className="text-gradient-gold">Information Security</span> Partner
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-white/70 md:text-lg">
              An esteemed consultancy firm partnering with enterprises and government to design, secure and operate critical digital infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Who We Are</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">A premium ICT &amp; Information Security firm</h2>
            <div className="mt-6 h-px w-24 gradient-gold" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4 text-muted-foreground leading-relaxed">
            <p>ITnIS Consulting provides a broad spectrum of ICT services to a diverse range of clients. Our offerings cover Data Centers, Passive Infrastructure, Physical Security, Access Control, Smart City and Smart Building solutions, VoIP, IPTV, Mobile Telephony, Information Security Audits, EM Audits and Training.</p>
            <p>Security is the foundation of every network and system we design. Our approach prioritises information systems that are secure, cost-effective, reliable and efficient. Infusing security at the heart of design curtails costs while amplifying efficiency and reliability — an idea captured in our tagline, "Designing &amp; Securing the Digital Future".</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-8 shadow-card hover-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-gold text-navy"><v.icon className="h-6 w-6" /></div>
                <h3 className="mt-5 font-display text-xl text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Choose Us" title="Why enterprises choose ITnIS" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <motion.div key={w} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm text-navy">{w}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl text-gradient-gold md:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Team" title="Certified consultants & trainers" description="A senior team holding industry certifications across security, networks and data centers." />
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {["ISO 27001 LA", "CISSP", "CCIE", "CEH", "PMP", "ITIL", "TIA-942"].map((c) => (
              <div key={c} className="flex items-center gap-2 rounded-full border border-gold/40 bg-card px-5 py-2 text-sm font-medium text-navy">
                <Award className="h-4 w-4 text-gold" /> {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
