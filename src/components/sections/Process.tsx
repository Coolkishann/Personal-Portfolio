"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* -------------------------------------------------- */
/* DATA */
/* -------------------------------------------------- */

const steps = [
  {
    id: "01",
    title: "Strategy",
    body:
      "We map constraints, risks, and jobs-to-be-done so everyone sees the same picture before pushing pixels.",
    image:
      "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    title: "Art Direction",
    body:
      "We prototype multiple directions, test quickly, and keep stakeholders inside the loop.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
  },
  {
    id: "03",
    title: "Production",
    body:
      "States, edge-cases, and handoff documentation that keep engineers happy.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
  },
  {
    id: "04",
    title: "Rebranding",
    body:
      "We learn continuously from metrics, support feedback, and real users.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200",
  },
  {
    id: "05",
    title: "Design",
    body:
      "Final visual polish ensuring every pixel serves a purpose.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
  },
];

/* -------------------------------------------------- */
/* STEP ITEM */
/* -------------------------------------------------- */

function StepItem({
  step,
  index,
  activeIndex,
}: {
  step: typeof steps[0];
  index: number;
  activeIndex: number;
}) {
  const isActive = index === activeIndex;

  return (
    <motion.div
      animate={{
        opacity: isActive ? 1 : 0.25,
        x: isActive ? 0 : -40,
      }}
      transition={{ duration: 0.6 }}
      className="min-h-[85vh] flex items-center py-24"
    >
      <div className="space-y-6">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
          Step {step.id}
        </span>

        <h3 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-zinc-100">
          {step.title}
        </h3>

        <p className="text-lg lg:text-xl text-zinc-400 max-w-md leading-relaxed">
          {step.body}
        </p>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------- */
/* MAIN SECTION */
/* -------------------------------------------------- */

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  /* SCROLL PROGRESS TRACKING */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* UPDATE ACTIVE STEP BASED ON SCROLL */
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      steps.length - 1,
      Math.floor(latest * steps.length)
    );
    setActiveIndex(index);
  });

  return (
    <section
      id="process"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND WORD */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03] select-none">
        <div className="text-[clamp(10rem,40vw,50rem)] font-black tracking-[-0.08em]">
          PROCESS
        </div>
      </div>

      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-32">
        <SectionHeading eyebrow="Workflow" title="How we work." />
      </div>

      {/* GRID */}
      <div
        ref={containerRef}
        className="lg:grid lg:grid-cols-2 lg:items-start max-w-7xl mx-auto px-6 sm:px-10 lg:px-16"
      >
        {/* LEFT TEXT COLUMN */}
        <div className="relative z-10">
          {steps.map((step, index) => (
            <StepItem
              key={step.id}
              step={step}
              index={index}
              activeIndex={activeIndex}
            />
          ))}
        </div>

        {/* RIGHT STICKY IMAGE */}
        <div className="hidden lg:block relative self-start">
<div className="sticky top-1/2 -translate-y-1/2 flex justify-center">
            <div className="relative h-[620px] w-[560px] rounded-[3rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 shadow-[0_40px_120px_rgba(0,0,0,0.7)]">

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.1, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -40 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={steps[activeIndex].image}
                    alt={steps[activeIndex].title}
                    className="h-full w-full object-cover"
                  />

                  {/* cinematic gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* STEP INDICATOR */}
            {/* <div className="absolute right-0 space-y-4">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? "w-10 bg-white"
                      : "w-2 bg-zinc-800"
                  }`}
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="lg:hidden px-6 mt-24 space-y-16">
        {steps.map((step) => (
          <div key={step.id} className="space-y-6">
            <div className="h-64 overflow-hidden rounded-3xl border border-zinc-900">
              <img
                src={step.image}
                alt={step.title}
                className="h-full w-full object-cover opacity-70"
              />
            </div>

            <h3 className="text-4xl font-bold">{step.title}</h3>

            <p className="text-zinc-400">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}