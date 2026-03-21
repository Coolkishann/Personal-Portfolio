"use client";

import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    id: "01",
    title: "Strategy",
    body: "We map constraints, risks, and jobs-to-be-done so everyone sees the same picture before pushing pixels.",
    image: "/dashboard.jpg",
  },
  {
    id: "02",
    title: "Art Direction",
    body: "We prototype multiple directions, test quickly, and keep stakeholders inside the loop.",
    image: "/admin-management.webp",
  },
  {
    id: "03",
    title: "Production",
    body: "States, edge-cases, and handoff documentation that keep engineers happy.",
    image: "/qr.webp",
  },
  {
    id: "04",
    title: "Rebranding",
    body: "We learn continuously from metrics, support feedback, and real users.",
    image: "/compilance.webp",
  },
  {
    id: "05",
    title: "Design",
    body: "Final visual polish ensuring every pixel serves a purpose.",
    image: "/bakery.webp",
  },
];

function StepItem({
  step,
  index,
  activeIndex,
  onVisible,
}: {
  step: (typeof steps)[0];
  index: number;
  activeIndex: number;
  onVisible: (idx: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      onVisible(index);
    }
  }, [isInView, index, onVisible]);

  const isActive = index === activeIndex;

  return (
    <div ref={ref} className="py-24 sm:py-32 flex flex-col justify-center min-h-[50vh]">
      <motion.div
        animate={{
          opacity: isActive ? 1 : 0.08,
          x: isActive ? 0 : -16,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-6"
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
          Step {step.id}
        </span>
        <h3 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-zinc-100">
          {step.title}
        </h3>
        <p className="text-lg lg:text-xl text-zinc-400 max-w-md leading-relaxed">
          {step.body}
        </p>
      </motion.div>
    </div>
  );
}

export function ProcessSectionnn() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="process" className="relative bg-black text-white">
      {/* BG WORD */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03] select-none overflow-hidden">
        <div className="text-[clamp(10rem,40vw,50rem)] font-black tracking-[-0.08em]">
          PROCESS
        </div>
      </div>

      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-16">
        <SectionHeading eyebrow="Workflow" title="How we work." />
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 gap-16 relative">

        {/* LEFT — scrolling text */}
        <div className="w-1/2 relative z-10 pb-[50vh]">
          {steps.map((step, index) => (
            <StepItem
              key={step.id}
              step={step}
              index={index}
              activeIndex={activeIndex}
              onVisible={setActiveIndex}
            />
          ))}
        </div>

        {/* RIGHT — sticky image, same height as left column */}
        <div className="w-1/2 relative">
          <div className="sticky top-0 h-screen flex items-center justify-center w-1/2 relative z-10 pb-[100vh]">
            <div className="relative w-full max-w-[520px] h-[min(600px,75vh)] rounded-[2.5rem] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
              <AnimatePresence>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={steps[activeIndex].image}
                    alt={steps[activeIndex].title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE LAYOUT ── */}
      <div className="lg:hidden px-6 pb-24 space-y-16">
        {steps.map((step) => (
          <div key={step.id} className="space-y-6">
            <div className="h-64 overflow-hidden rounded-3xl border border-zinc-900">
              <img
                src={step.image}
                alt={step.title}
                className="h-full w-full object-cover opacity-70"
              />
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
              Step {step.id}
            </span>
            <h3 className="text-4xl font-bold">{step.title}</h3>
            <p className="text-zinc-400">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
