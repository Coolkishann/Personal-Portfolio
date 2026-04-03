"use client";

import { motion } from "framer-motion";
import {
  PhysicsBadges,
  type PhysicsBadge,
} from "@/components/ui/PhysicsBadges";
import SplitText from "@/components/SplitText";

const topLine =
  "Full-Stack Developer with experience building scalable web applications.";

const badges: PhysicsBadge[] = [
  {
    type: "avatar",
    image: "/myomage.jpeg",
  },

  {
    text: "Codestudios",
    // emoji: "🚀",
  },
  {
    text: "B.Sc Computer Science",
  },
  {
    text: "MERN Stack",
    // emoji: "🧠",
  },
  {
    text: "1+ Years Exp",
    // emoji: "✨",
  },
  {
    text: "Web Development",
    status: true,
  },
];
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[95vh] flex-col justify-between overflow-hidden rounded-3xl bg-black px-6 py-5 sm:px-10 sm:py-10 lg:px-16"
    >
      {/* Top bar: intro line + resume button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
      >
        <p className="max-w-2xl text-xl font-medium leading-[1.1] tracking-tight text-zinc-100 sm:text-2xl lg:text-2xl font-body">
          {topLine}
        </p>
        <button
          onClick={() => window.open("https://drive.google.com/file/d/1CzvBY5rHUvHi87kgpvz8ew-15hJq81Ui/view?usp=sharing", "_blank")}
          className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-zinc-800 bg-zinc-950 px-6 py-3 text-xs font-(--font-cta) uppercase tracking-[0.2em] text-zinc-400 transition-all hover:border-zinc-100 hover:text-zinc-100"
        >
          <span className="relative z-10">View resume</span>
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden>↗</span>
          <div className="absolute inset-0 z-0 bg-gradient-to-tr from-zinc-800/0 to-zinc-800/10 opacity-0 transition-opacity group-hover:opacity-100" />
        </button>
      </motion.div>

      {/* Middle: draggable badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative mt-12 h-[200px] w-full overflow-visible"
      >
        <PhysicsBadges labels={badges} />
      </motion.div>

      {/* Bottom: big name */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="relative mt-8 flex w-full justify-center"
      >
        <SplitText
          text="Kishan Vishwakarma"
          className="bricolage-grotesque-head text-center text-[clamp(4rem,15vw,14rem)] font-extrabold leading-[0.85] tracking-[-0.04em] text-zinc-50"
          delay={40}
          from={{ opacity: 0, y: 80 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />
      </motion.div>
    </section>
  );
}
