"use client";

import LogoLoop from "@/components/LogoLoop";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiFigma,
  SiGreensock,
  SiPostgresql,
  SiRedis,
  SiRedux,
  SiNestjs,
} from "react-icons/si";

const logos = [
  { icon: FaReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiRedux, name: "Redux" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiNestjs, name: "NestJS" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiRedis, name: "Redis" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaGithub, name: "GitHub" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
];

export function ProductionSection() {
  return (
    <section className="rounded-3xl bg-zinc-950/40 px-6 py-16 ring-1 ring-zinc-900 sm:px-10 lg:px-16 overflow-hidden">
      <div className="px-6 pt-32">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies & Frameworks"
          description="I leverage industry-leading technologies to build high-performance, visually stunning digital experiences."
        />
      </div>
      <div className="my-20 overflow-hidden max-w-8xl mx-auto">
        <LogoLoop
          {...({
            logos: logos.map((logo) => {
              const Icon = logo.icon;

              return {
                node: (
                  <div className="flex items-center gap-3 px-8 py-4 font-poppins text-[24px] font-bold tracking-tighter text-zinc-100 bg-zinc-900/30 rounded-2xl border border-zinc-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-800/50 hover:border-zinc-700">
                    <Icon className="text-white text-9xl" />
                  </div>
                ),
              };
            }),
            speed: 120,
            gap: 32,
            logoHeight: 100,
          } as any)}
        />
      </div>
    </section>
  );
}
