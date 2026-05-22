import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Clock, MessageCircle, Loader2, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { company } from "@/data/site";

const Schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().default(""),
  subject: z.string().trim().min(1).max(150),
  message: z.string().trim().min(1).max(1500),
});

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us | ITnIS Consulting Islamabad" },
      { name: "description", content: "Get in touch with ITnIS Consulting — Office #1, 5th Floor, Civic Center, Bahria Town, Islamabad. info@itnis.com." },
      { property: "og:title", content: "Contact ITnIS Consulting" },
      { property: "og:description", content: "Speak to our consultants about ICT and Information Security." },
      { property: "og:url", content: "/contact-us" },
    ],
    links: [{ rel: "canonical", href: "/contact-us" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "ITnIS Consulting",
        telephone: "+92-333-5626269",
        email: "info@itnis.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office #1, 5th Floor, 44-A, Civic Center, Bahria Town",
          addressLocality: "Islamabad",
          addressCountry: "PK",
        },
      }),
    }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [err, setErr] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    const parsed = Schema.safeParse(form);
    if (!parsed.success) { setErr("Please complete all required fields."); return; }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("ok");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  }

  return (
    <>
      <section className="bg-navy pt-36 pb-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Feel free to <span className="text-gradient-gold">keep in touch</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/70 md:text-lg">
            Our consultants will respond within one business day.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="space-y-5 lg:col-span-1">
            {[
              { icon: MapPin, title: "Address", lines: [company.address] },
              { icon: Mail, title: "Email", lines: [company.email] },
              { icon: Phone, title: "Phone", lines: company.phones },
              { icon: Clock, title: "Office Hours", lines: ["Mon – Fri: 9:00 AM – 6:00 PM"] },
            ].map((c) => (
              <motion.div key={c.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg gradient-gold text-navy">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-lg text-navy">{c.title}</p>
                  {c.lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
                </div>
              </motion.div>
            ))}
            <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-luxury">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            onSubmit={submit}
            className="rounded-2xl border border-border bg-card p-8 shadow-card lg:col-span-2">
            <h2 className="font-display text-2xl text-navy">Send us a message</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Input label="Full Name *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} maxLength={100} />
              <Input label="Email *" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} maxLength={255} />
              <Input label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} maxLength={40} />
              <Input label="Subject *" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} maxLength={150} />
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message *</span>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6} maxLength={1500}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-gold focus:outline-none" />
            </label>

            <button type="submit" disabled={status === "loading"}
              className="mt-6 inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-3 text-sm font-semibold text-navy shadow-gold disabled:opacity-60">
              {status === "loading" ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> :
                status === "ok" ? <><CheckCircle2 className="h-4 w-4" /> Message sent</> :
                <>Send Message <Send className="h-4 w-4" /></>}
            </button>
            {err && <p className="mt-3 text-sm text-destructive">{err}</p>}
            {status === "ok" && <p className="mt-3 text-sm text-gold">Thank you — we'll be in touch within one business day.</p>}
          </motion.form>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="ITnIS Office Location"
              src="https://www.google.com/maps?q=Civic+Center+Bahria+Town+Islamabad&output=embed"
              className="h-[400px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Input({ label, value, onChange, type = "text", maxLength }: { label: string; value: string; onChange: (v: string) => void; type?: string; maxLength?: number }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} maxLength={maxLength}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-gold focus:outline-none" />
    </label>
  );
}
