import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { mainServices, detailedServices } from "@/data/site";

export function ServiceGrid({ detailed = false }: { detailed?: boolean }) {
  const list = detailed ? detailedServices : mainServices;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group relative block h-full overflow-hidden rounded-xl border border-border bg-card p-7 shadow-card hover-lift hover:border-gold/50"
            >
              <div className="absolute inset-x-0 top-0 h-1 gradient-gold opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold transition group-hover:gradient-gold group-hover:text-navy">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {"short" in s ? s.short : (s as { summary: string }).summary}
              </p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold">
                Learn more
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
