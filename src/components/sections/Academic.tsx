"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const academicProjects = [
  {
    title: "Speculative mobility UI",
    role: "UI/UX, Systems thinking",
  },
  {
    title: "Slow‑news reading experience",
    role: "Research, Product",
  },
  {
    title: "Designing for first‑time internet users",
    role: "Field research, Prototyping",
  },
];

export function AcademicSection() {
  return (
    <section
      id="academic"
      className="rounded-3xl bg-zinc-950/20 px-6 py-24 ring-1 ring-zinc-900 sm:px-10 lg:px-16"
    >
      <div className="space-y-16">
        <SectionHeading
          eyebrow="Academic & older"
          title="Foundations"
          description="Studio and thesis projects that shaped my approach to systems and constraints."
        />

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="divide-y divide-zinc-900 border-t border-zinc-900"
        >
          {academicProjects.map((project, index) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group grid cursor-pointer items-center gap-8 py-10 sm:grid-cols-[auto_1fr_auto]"
            >
              <div className="flex items-center gap-6">
                <span className="bricolage-grotesque-head text-2xl font-black text-zinc-800 group-hover:text-zinc-600 transition-colors">
                  0{index + 1}
                </span>
                <span className="bricolage-grotesque-head text-2xl font-extrabold text-zinc-100 sm:text-3xl group-hover:underline decoration-zinc-800 underline-offset-8 transition-all">
                  {project.title}
                </span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 opacity-80 text-right sm:text-left">
                {project.role}
              </p>
              <div className="hidden sm:flex items-center justify-end">
                <div className="h-px w-12 bg-zinc-900 group-hover:w-24 group-hover:bg-zinc-100 transition-all duration-700" />
                <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

