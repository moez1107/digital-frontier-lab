import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow, title, description, center = true,
}: { eyebrow?: string; title: string; description?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight text-navy md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base text-muted-foreground md:text-lg">{description}</p>}
      <div className={`mt-6 h-px w-24 gradient-gold ${center ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
