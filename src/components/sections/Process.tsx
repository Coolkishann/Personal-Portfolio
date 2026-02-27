"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    label: "Step 1",
    title: "Listen, then un‑mess the problem.",
    body: "We map constraints, risks, and jobs‑to‑be‑done so everyone sees the same picture before pushing pixels.",
  },
  {
    label: "Step 2",
    title: "Shape options, not one solution.",
    body: "We prototype multiple directions, test quickly, and keep stakeholders inside the loop instead of surprising them at the end.",
  },
  {
    label: "Step 3",
    title: "Detail the path to production.",
    body: "States, edge‑cases, and handoff documentation that make engineers happy and keep future‑you from guessing.",
  },
  {
    label: "Step 4",
    title: "Iterate with real signals.",
    body: "We set up lightweight ways to learn from support, product metrics, and actual humans using the thing.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden rounded-3xl bg-zinc-950/10 px-6 py-24 ring-1 ring-zinc-900 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03] select-none">
        <div className="bricolage-grotesque-head text-[clamp(10rem,30vw,35rem)] font-black tracking-[-0.08em] text-white">
          PROCESS
        </div>
      </div>

      <div className="relative grid gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.5fr)] items-start">
        <SectionHeading
          eyebrow="Process"
          title="How we'll work together."
          description="A simple, slightly obsessive loop I like using for both long-term products and short, intense engagements."
        />

        <div className="grid gap-6">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1,
              }}
              className="group grid grid-cols-[auto_1fr] gap-8 rounded-3xl border border-zinc-900 bg-black/40 p-8 backdrop-blur-sm transition-all duration-500 hover:border-zinc-800 hover:bg-black/60"
            >
              <div className="pt-2">
                <span className="bricolage-grotesque-head text-4xl font-black text-zinc-800/50 group-hover:text-zinc-700 transition-colors">
                  0{index + 1}
                </span>
              </div>
              <div className="space-y-4">
                <h3 className="bricolage-grotesque-head text-2xl font-extrabold text-zinc-100 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="font-body text-lg leading-relaxed text-zinc-400 opacity-90 tracking-tight">
                  {step.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

