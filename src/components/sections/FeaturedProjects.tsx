"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

const projects = [
  {
    title: "Enterprise Admin Dashboard",
    subtitle:
      "Designing a scalable control center for analytics, user management, and operational monitoring.",
    meta: "2024–2025 · Product Design, Frontend Development",
    tags: ["Admin Dashboard", "Data Visualization", "SaaS"],
    image: "/dashboard.jpg",
  },

  {
    title: "Admin Management Portal",
    subtitle:
      "A role-based platform enabling secure workflows, permissions, and business automation.",
    meta: "2024 · UX Design, System Architecture",
    tags: ["Admin Portal", "RBAC", "Enterprise UX"],
    image: "/admin-management.webp",
  },

  {
    title: "QR Smart Ordering App",
    subtitle:
      "Contactless QR experience allowing users to browse menus, order instantly, and track status.",
    meta: "2025 · Mobile UX, Frontend Development",
    tags: ["QR App", "Mobile UX", "Realtime UI"],
    image: "/qr.webp",
  },

  {
    title: "Compliance Platform Frontend",
    subtitle:
      "Building a clear interface for complex compliance workflows and regulatory reporting.",
    meta: "2024–2025 · Frontend Engineering",
    tags: ["Fintech", "Compliance", "Dashboard UI"],
    image: "/compilance.webp",
  },

  {
    title: "Artisan Bakery Website",
    subtitle:
      "Crafting a warm, storytelling-driven brand website focused on conversion and experience.",
    meta: "2023 · Web Design, Branding",
    tags: ["Business Website", "Brand Design", "E-commerce"],
    image: "/bakery.webp",
  },

  {
    title: "Real-Estate Insights Microsite",
    subtitle:
      "Transforming dense property data into an elegant scroll-based storytelling experience.",
    meta: "2024 · Product Design, Web Implementation",
    tags: ["Scroll UX", "Data Visualization", "Landing Page"],
    image: "/real-estate.webp",
  },
];

export function FeaturedProjectsSection() {
  return (
    <section
      className="rounded-3xl bg-zinc-950/20 mt-40 px-6 py-24 ring-1 ring-zinc-900 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="space-y-16">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          description="A curated selection of my favorite projects where design meets code."
        />
<div className="relative">
        <ScrollStack
          className="w-full"
          itemDistance={300}
          itemScale={0.05}
          itemStackDistance={30}
          useWindowScroll={true}
        >
          {projects.map((project, index) => (
            <ScrollStackItem key={project.title}>
              <motion.article
              layout
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.1,
                }}
                className="group grid gap-12 rounded-[2.5rem] border border-zinc-900 bg-zinc-950 px-6 py-10 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] sm:px-10 sm:py-12 lg:px-16 lg:py-16 mb-12 shadow-2xl transition-all duration-500 hover:border-zinc-800"
              >
                <div className="flex flex-col justify-center gap-8">
                  <div className="space-y-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 opacity-80">
                      {project.meta}
                    </p>
                    <h3 className="font-body text-4xl leading-[0.9] tracking-[-0.04em] text-zinc-100 sm:text-5xl lg:text-6xl">
                      {project.title}
                    </h3>
                  </div>

                  <p className="font-body text-lg leading-relaxed text-zinc-400 sm:text-xl lg:text-2xl tracking-tight opacity-90">
                    {project.subtitle}
                  </p>

                  <div className=" gap-6 mx-2 flex flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-900 bg-zinc-900/50 px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="group/btn mt-4 inline-flex w-fit items-center gap-3 overflow-hidden rounded-full border border-zinc-800 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 transition-all hover:border-zinc-100 hover:text-zinc-100">
                    <span className="relative z-10">See project</span>
                    <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" aria-hidden>↗</span>
                  </button>
                </div>

                <motion.div
                  className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-900/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "tween",duration: 0.25 }}
                >
                  <div className="absolute inset-0  opacity-100" >  
<img
  src={project.image}
  alt={project.title}
  loading="lazy"
  decoding="async"
  className="w-full h-full object-cover will-change-transform"
/></div>
                </motion.div>
              </motion.article>
            </ScrollStackItem>
          ))}
        </ScrollStack>
        </div>
      </div>
    </section>
  );
}

