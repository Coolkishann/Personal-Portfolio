"use client";

import LogoLoop from "@/components/LogoLoop";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  FaReact,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiThreedotjs,
} from "react-icons/si";

const logos = [
  { icon: FaReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiFramer, name: "Framer Motion" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiThreedotjs, name: "Three.js" },
//   { icon: FaVercel, name: "Vercel" },
];

export function ProductionSection() {
    return (
        <section className="rounded-3xl bg-zinc-950/40 px-6 py-24 ring-1 ring-zinc-900 sm:px-10 lg:px-16">
            <SectionHeading
                eyebrow="Tech Stack"
                title="Technologies & Frameworks"
                description="I leverage industry-leading technologies to build high-performance, visually stunning digital experiences."
            />
            <div className="mt-16 h-24 overflow-hidden">
<LogoLoop
  {...({
    logos: logos.map((logo) => {
      const Icon = logo.icon;

      return {
        node: (
          <div className="flex items-center gap-3 px-8 py-4 text-2xl font-bold tracking-tighter text-zinc-100 bg-zinc-900/30 rounded-2xl border border-zinc-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-800/50 hover:border-zinc-700">
            <Icon className="text-white text-8xl" />
          </div>
        ),
      };
    }),
    speed: 40,
    gap: 32,
    logoHeight: 64,
  } as any)}
/>
            </div>
        </section>
    );
}
