"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Product design",
    bullets: ["Flows & UX", "Interaction design", "Design systems"],
  },
  {
    title: "UX strategy",
    bullets: ["Discovery & research", "Workshop facilitation", "Product shaping"],
  },
  {
    title: "Design systems",
    bullets: ["Foundations & tokens", "Component libraries", "Usage guidelines"],
  },
  {
    title: "Web implementation",
    bullets: ["Design‑to‑code", "Framer Motion & GSAP", "Next.js front‑ends"],
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-3xl bg-zinc-950/20 px-6 py-24 ring-1 ring-zinc-900 sm:px-10 lg:px-16"
    >
      <div className="space-y-20">
        <SectionHeading
          eyebrow="Capabilities"
          title="Where I can help."
          description="Transforming fuzzy problems into performant digital products."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1,
              }}
              className="group rounded-3xl border border-zinc-900 bg-black/50 p-10 backdrop-blur-sm transition-all duration-500 hover:border-zinc-800 hover:bg-black/80"
            >
              <h3 className="bricolage-grotesque-head text-3xl font-extrabold text-zinc-100 sm:text-4xl">
                {service.title}
              </h3>
              <ul className="mt-8 space-y-4">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-4 group/li">
                    <span className="h-[1px] w-6 bg-zinc-800 group-hover/li:w-10 group-hover/li:bg-zinc-100 transition-all duration-500" />
                    <span className="font-body text-lg text-zinc-400 group-hover/li:text-zinc-100 transition-colors duration-500">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

