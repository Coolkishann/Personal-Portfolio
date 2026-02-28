"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    id: "01",
    title: "Strategy",
    body: "We map constraints, risks, and jobs-to-be-done so everyone sees the same picture before pushing pixels.",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "02",
    title: "Art Direction",
    body: "We prototype multiple directions, test quickly, and keep stakeholders inside the loop instead of surprising them.",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "03",
    title: "Production",
    body: "States, edge-cases, and handoff documentation that make engineers happy and keep future-you from guessing.",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "04",
    title: "Rebranding",
    body: "We set up lightweight ways to learn from support, product metrics, and actual humans using the thing.",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "05",
    title: "Design",
    body: "Refining the final visual polish and ensuring every pixel serves a purpose in the user journey.",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=800",
  },
];

function StepItem({
  step,
  index,
  setActiveIndex
}: {
  step: typeof steps[0],
  index: number,
  setActiveIndex: (i: number) => void
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
    once: false
  });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return (
    <div
      ref={ref}
      className="min-h-[60vh] flex flex-col justify-center py-20 first:pt-0 last:pb-40"
    >
      <motion.div
        animate={{
          opacity: isInView ? 1 : 0.2,
          x: isInView ? 0 : -20
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6"
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
          Step {step.id}
        </span>
        <h3 className="font-poppins text-6xl font-black text-zinc-100 sm:text-7xl lg:text-8xl tracking-tighter">
          {step.title}
        </h3>
        <p className="font-body text-lg text-zinc-400 max-w-md leading-relaxed lg:text-xl">
          {step.body}
        </p>
      </motion.div>
    </div>
  );
}

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="process" className="relative rounded-3xl bg-black/20 ring-1 ring-zinc-900 px-6 py-24 sm:px-10 lg:px-16">
      {/* Background Text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.02] select-none overflow-hidden">
        <div className="font-poppins text-[clamp(10rem,40vw,50rem)] font-black tracking-[-0.08em] text-white">
          PROCESS
        </div>
      </div>


      <div className="pt-24 pb-12">
        <SectionHeading
          eyebrow="Workflow"
          title="How we work."
          description="A systematic approach to solving complex digital problems."
          align="left"
        />
      </div>
      <div className="lg:grid lg:grid-cols-2 mt-40 container mx-auto px-6 sm:px-10 lg:px-16">
        {/* Left Sticky Image Column */}
        <div className="flex-1 lg:pl-10 relative z-10">
          <div className="flex flex-col">
            {steps.map((step, index) => (
              <StepItem
                key={step.id}
                step={step}
                index={index}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
        <div className="hidden lg:flex sticky top-0 h-screen items-center justify-center">
          <div className="relative h-[550px] w-full max-w-[520px] mx-auto overflow-hidden rounded-[3rem] border border-zinc-800 bg-zinc-900/50 shadow-2xl">
           <AnimatePresence initial={false}>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img
                src={steps[activeIndex].image}
                alt={steps[activeIndex].title}
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10" />
            </motion.div>
          </AnimatePresence>
          </div>

          {/* Subtle floating dot indicator */}
          <div className="absolute right-0 space-y-4">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 transition-all duration-500 rounded-full ${i === activeIndex ? 'w-8 bg-zinc-100' : 'w-2 bg-zinc-800'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Image Fallback (Visible only on mobile/tablet) */ }
  <div className="lg:hidden px-6 pb-24">
    <div className="grid gap-8">
      {steps.map((step) => (
        <div key={step.id} className="space-y-6">
          <div className="h-64 w-full overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-900/20">
            <img src={step.image} alt={step.title} className="h-full w-full object-cover opacity-60" />
          </div>
          <div className="space-y-4">
            <h3 className="font-poppins text-4xl font-extrabold text-zinc-100">{step.title}</h3>
            <p className="font-body text-zinc-400">{step.body}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
    </section >
  );
}
