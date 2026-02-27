"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-3xl bg-zinc-950/20 px-6 py-24 ring-1 ring-zinc-900 sm:px-10 lg:px-16"
    >
      <div className="space-y-16">
        <SectionHeading
          eyebrow="Contact"
          title="Exciting opportunities?"
          description="Open to full-time roles and thoughtful collaborations."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-12 text-center"
        >
          <button className="group relative overflow-hidden rounded-full bg-zinc-50 px-12 py-5 text-sm font-bold uppercase tracking-[0.25em] text-black transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10">Reach out</span>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-200 to-white opacity-0 transition-opacity group-hover:opacity-100" />
          </button>

          <div className="space-y-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 opacity-80">
              Direct Email
            </p>
            <a
              href="mailto:you@example.com"
              className="bricolage-grotesque-head text-2xl text-zinc-100 hover:text-white transition-colors underline decoration-zinc-800 underline-offset-8"
            >
              you@example.com
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
            {["LinkedIn", "Behance", "Instagram", "GitHub"].map((link) => (
              <a key={link} href="#" className="hover:text-zinc-100 transition-colors duration-300">
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

