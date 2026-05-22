import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/site";

export function ProjectGrid({ filterable = false }: { filterable?: boolean }) {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {filterable && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                active === c
                  ? "border-gold bg-gold text-navy"
                  : "border-border bg-card text-muted-foreground hover:border-gold hover:text-navy"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <motion.article
            key={p.slug}
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group overflow-hidden rounded-xl border border-border bg-card shadow-card hover-lift"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1280}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-gold/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy">
                {p.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
