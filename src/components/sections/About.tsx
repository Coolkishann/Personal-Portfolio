"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { label: "Projects", value: "10+" },
  { label: "Years", value: "3+" },
  { label: "Industries", value: "Fintech, Compliance, Real‑estate" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="rounded-3xl bg-zinc-950/20 py-24 ring-1 ring-zinc-900 sm:px-10 lg:px-16"
    >
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.2fr)] items-start">
        <SectionHeading
          eyebrow="About"
          title="Beyond the pixels."
          description={
            <span className="font-body text-lg leading-relaxed text-zinc-400 sm:text-xl lg:text-2xl tracking-tight opacity-90">
              I like working on products where trust, calm, and legibility
              matter: financial flows, compliance tools, and high-performance operations dashboards.
            </span>
          }
        />

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1,
              }}
              className="group rounded-3xl border border-zinc-900 bg-black p-8 transition-all duration-500 hover:border-zinc-800"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 opacity-80 group-hover:text-zinc-400">
                {stat.label}
              </p>
              <p className="mt-4 bricolage-grotesque-head text-4xl font-extrabold text-zinc-100 group-hover:scale-105 origin-left transition-transform duration-500">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

