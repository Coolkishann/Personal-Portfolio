"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const shots = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  label: `Playground ${i + 1}`,
}));

export function PlaygroundSection() {
  return (
    <section
      id="playground"
      className="rounded-3xl bg-zinc-950/20 px-6 py-24 ring-1 ring-zinc-900 sm:px-10 lg:px-16"
    >
      <div className="space-y-16">
        <SectionHeading
          eyebrow="Playground"
          title="Visual Toys"
          description="Little experiments and visual toys. Scroll, drag, poke."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-zinc-900 bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: -400, right: 0 }}
            dragElastic={0.2}
            dragMomentum
            className="flex gap-6 px-10 py-12"
          >
            {shots.map((shot) => (
              <motion.div
                key={shot.id}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative h-48 w-64 shrink-0 overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-900/10 backdrop-blur-sm shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-100/[0.03] to-transparent opacity-50" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 pb-5 pt-8 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-100">{shot.label}</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">Drag</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

