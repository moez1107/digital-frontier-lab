import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Mail className="mx-auto h-10 w-10 text-gold" />
          <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">Stay ahead of the threat curve</h2>
          <p className="mt-3 text-white/70">Insights on ICT, cybersecurity and compliance — straight to your inbox.</p>

          <form
            onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
            className="mx-auto mt-8 flex max-w-lg gap-2"
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md gradient-gold px-5 py-3 text-sm font-semibold text-navy shadow-gold hover:opacity-95"
            >
              {sent ? "Subscribed" : "Subscribe"}
              <Send className="h-4 w-4" />
            </button>
          </form>
          {sent && <p className="mt-3 text-xs text-gold">Thank you — we'll be in touch.</p>}
        </motion.div>
      </div>
    </section>
  );
}
