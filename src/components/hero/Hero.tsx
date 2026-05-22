import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { stats } from "@/data/site";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating blobs */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Premium ICT & Information Security
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Designing &amp; Securing the{" "}
            <span className="text-gradient-gold">Digital Future</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            An esteemed ICT and Information Security consultancy firm — partnering with enterprises and government to design, secure and operate critical infrastructure.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-gold transition hover:opacity-95"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-gold hover:text-gold"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-xl px-5 py-6">
              <p className="font-display text-3xl text-gold md:text-4xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/70">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
